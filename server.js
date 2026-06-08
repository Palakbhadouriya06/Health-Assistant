try {
  require('dotenv').config();
} catch (e) {
  console.log('dotenv not found, relying on system environment variables.');
}
const express = require('express');
const session = require('express-session');
const path = require('path');
const bcrypt = require('bcryptjs');
const uuid = require('uuid');

const db = require('./database');
const chatbot = require('./chatbot');

// Detect deployment platform
const IS_VERCEL = process.env.VERCEL === '1' || process.env.VERCEL === 'true';
const IS_RENDER = process.env.RENDER === 'true' || process.env.RENDER === '1';

const app = express();
const PORT = process.env.PORT || 5050;

// Trust proxy for Render / production (needed for HTTPS cookies & redirects)
app.set('trust proxy', IS_RENDER || IS_VERCEL || false);

// Enable JSON and URL-encoded parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure session store
// On Vercel, native sqlite3 modules may not be available — fall back to MemoryStore
const sessionDir = IS_VERCEL ? '/tmp' : (process.env.DATA_DIR || path.join(__dirname));
const fs = require('fs');
if (!fs.existsSync(sessionDir)) {
  try {
    fs.mkdirSync(sessionDir, { recursive: true });
    console.log(`Created session directory: ${sessionDir}`);
  } catch (err) {
    console.error(`Error creating session directory: ${sessionDir}`, err);
  }
}

let sessionStore;
try {
  const SQLiteStore = require('connect-sqlite3')(session);
  sessionStore = new SQLiteStore({ db: 'sessions.db', dir: sessionDir });
  console.log('Using SQLite session store.');
} catch (err) {
  console.warn('connect-sqlite3 not available, using MemoryStore for sessions.');
  sessionStore = undefined; // express-session defaults to MemoryStore
}

const sessionConfig = {
  secret: process.env.SESSION_SECRET || 'health-assistant-super-secret-key-987654321',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    httpOnly: true,
    secure: IS_VERCEL || IS_RENDER, // true on Vercel/Render (HTTPS), false locally
    sameSite: IS_VERCEL || IS_RENDER ? 'none' : 'lax'
  }
};
if (sessionStore) {
  sessionConfig.store = sessionStore;
}
app.use(session(sessionConfig));

// Initialize database tables
db.initDb().catch(err => {
  console.error('Failed to initialize database tables:', err);
});

// Middleware: Route guard to ensure users are authenticated for API routes
function requireAuth(req, res, next) {
  if (!req.session || !req.session.userId) {
    return res.status(401).json({ error: 'Authentication required. Please log in.' });
  }
  next();
}

// ==========================================================================
// Authentication Endpoints
// ==========================================================================

// Check current authentication session
app.get('/api/auth/me', async (req, res) => {
  if (req.session && req.session.userId) {
    try {
      const user = await db.getUserById(req.session.userId);
      if (user) {
        return res.json({ loggedIn: true, user: { id: user.id, email: user.email, username: user.username } });
      }
    } catch (err) {
      console.error('Error fetching user info:', err);
    }
  }
  return res.json({ loggedIn: false });
});

// User Sign Up
app.post('/api/auth/signup', async (req, res) => {
  const { email, username, password } = req.body;

  if (!email || !username || !password) {
    return res.status(400).json({ error: 'All fields (email, username, password) are required.' });
  }

  if (password.length < 6) {
    return res.status(400).json({ error: 'Password must be at least 6 characters long.' });
  }

  try {
    const existingUser = await db.getUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ error: 'An account with this email already exists.' });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const userId = await db.createUser(email, username, passwordHash);

    // Save login session
    req.session.userId = userId;
    req.session.username = username;

    return res.status(201).json({
      success: true,
      message: 'Account created successfully.',
      user: { id: userId, email, username }
    });
  } catch (err) {
    console.error('Signup error:', err);
    return res.status(500).json({ error: 'Database error occurred during registration.' });
  }
});

// User Log In
app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required.' });
  }

  try {
    const user = await db.getUserByEmail(email);
    if (!user) {
      return res.status(400).json({ error: 'Invalid email or password.' });
    }

    const isMatch = await bcrypt.compare(password, user.password_hash);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid email or password.' });
    }

    // Save login session
    req.session.userId = user.id;
    req.session.username = user.username;

    return res.json({
      success: true,
      message: 'Logged in successfully.',
      user: { id: user.id, email: user.email, username: user.username }
    });
  } catch (err) {
    console.error('Login error:', err);
    return res.status(500).json({ error: 'Database error occurred during login.' });
  }
});

// User Log Out
app.post('/api/auth/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      console.error('Logout session destruction error:', err);
      return res.status(500).json({ error: 'Failed to log out.' });
    }
    res.clearCookie('connect.sid');
    return res.json({ success: true, message: 'Logged out successfully.' });
  });
});

// Mock/Self-Service Forgot Password & Reset
app.post('/api/auth/forgot-password', async (req, res) => {
  const { email, username, newPassword } = req.body;

  if (!email || !username || !newPassword) {
    return res.status(400).json({ error: 'All fields (email, username, newPassword) are required to verify and reset password.' });
  }

  if (newPassword.length < 6) {
    return res.status(400).json({ error: 'New password must be at least 6 characters long.' });
  }

  try {
    const user = await db.getUserByEmail(email);
    if (!user || user.username.toLowerCase() !== username.toLowerCase()) {
      return res.status(400).json({ error: 'Account details could not be verified. Email or Username is incorrect.' });
    }

    const newHash = await bcrypt.hash(newPassword, 10);
    await db.updateUserPassword(user.id, newHash);

    return res.json({
      success: true,
      message: 'Your password has been reset successfully. You can now log in.'
    });
  } catch (err) {
    console.error('Forgot password reset error:', err);
    return res.status(500).json({ error: 'Database error during password reset.' });
  }
});

// ==========================================================================
// Conversation & Chat Endpoints (Authenticated)
// ==========================================================================

// Get user's conversation history
app.get('/api/conversations', requireAuth, async (req, res) => {
  try {
    const conversations = await db.getConversations(req.session.userId);
    return res.json(conversations);
  } catch (err) {
    console.error('Error fetching conversations:', err);
    return res.status(500).json({ error: 'Failed to retrieve conversation history.' });
  }
});

// Get messages in a conversation
app.get('/api/conversations/:id', requireAuth, async (req, res) => {
  try {
    const messages = await db.getConversationMessages(req.params.id, req.session.userId);
    return res.json(messages);
  } catch (err) {
    console.error(`Error fetching messages for ${req.params.id}:`, err);
    return res.status(500).json({ error: 'Failed to retrieve messages.' });
  }
});

// Delete a conversation
app.delete('/api/conversations/:id', requireAuth, async (req, res) => {
  try {
    await db.deleteConversation(req.params.id, req.session.userId);
    return res.json({ success: true, message: 'Conversation deleted successfully.' });
  } catch (err) {
    console.error(`Error deleting conversation ${req.params.id}:`, err);
    return res.status(500).json({ error: 'Failed to delete conversation.' });
  }
});

// Post a chat message & get assistant reply
app.post('/api/chat', requireAuth, async (req, res) => {
  const { conversationId, message, lang = 'en' } = req.body;

  if (!message || !message.trim()) {
    return res.status(400).json({ error: 'Message content is required.' });
  }

  try {
    let activeConvId = conversationId;
    let isNewConv = false;
    let title = 'New Conversation';

    if (!activeConvId) {
      activeConvId = `conv_${Date.now()}_${uuid.v4().slice(0, 9)}`;
      isNewConv = true;
      
      title = message.trim();
      if (title.length > 35) title = title.slice(0, 35) + '...';
      
      await db.createConversation(activeConvId, title, req.session.userId);
    }

    const history = await db.getConversationMessages(activeConvId, req.session.userId);
    
    // Save User message
    await db.saveMessage(activeConvId, 'user', message.trim());

    if (!isNewConv && history.length === 0) {
      title = message.trim();
      if (title.length > 35) title = title.slice(0, 35) + '...';
      await db.updateConversationTitle(activeConvId, title, req.session.userId);
    }

    // Get response from chatbot logic
    const reply = await chatbot.getChatbotResponse(message.trim(), history, lang);

    // Save Assistant reply
    await db.saveMessage(activeConvId, 'assistant', reply);

    return res.json({
      conversationId: activeConvId,
      title,
      reply
    });
  } catch (err) {
    console.error('Chat endpoint error:', err);
    return res.status(500).json({ error: 'Failed to process chat message.' });
  }
});

// Redirect middleware for home page (protect it)
app.get('/', (req, res, next) => {
  if (!req.session || !req.session.userId) {
    return res.redirect('/login.html');
  }
  next();
});

// Serve public directory static assets
app.use(express.static(path.join(__dirname, 'public')));

// Fallback redirect for page-load routes
app.get('*', (req, res) => {
  // If the request has a file extension (e.g., .css, .html, .js) and wasn't caught by express.static, return 404
  if (req.path.includes('.')) {
    return res.status(404).send('File not found');
  }

  // If not logged in, and trying to access an HTML or app root, redirect to login
  if (!req.session || !req.session.userId) {
    return res.redirect('/login.html');
  }
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server only when run directly (not imported by Vercel)
if (require.main === module) {
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`==================================================`);
    console.log(`AI Health Awareness Assistant listening on:`);
    console.log(`http://localhost:${PORT}`);
    console.log(`==================================================`);
  });
}

// Export the Express app for Vercel serverless function
module.exports = app;
