let sqlite3;
try {
  sqlite3 = require('sqlite3').verbose();
} catch (err) {
  console.error('sqlite3 native module not available:', err.message);
  console.error('Database operations will fail. This is expected on serverless platforms like Vercel.');
}
const path = require('path');

// On Vercel, the filesystem is read-only except /tmp
const IS_VERCEL = process.env.VERCEL === '1' || process.env.VERCEL === 'true';
const DB_PATH = IS_VERCEL
  ? path.join('/tmp', 'health_assistant.db')
  : path.join(process.env.DATA_DIR || __dirname, 'health_assistant.db');
let db;

// Establish database connection
function getDbConnection() {
  if (!db) {
    if (!sqlite3) {
      throw new Error('sqlite3 module is not available. Database operations cannot proceed.');
    }
    const fs = require('fs');
    const dbDir = path.dirname(DB_PATH);
    if (!fs.existsSync(dbDir)) {
      try {
        fs.mkdirSync(dbDir, { recursive: true });
        console.log(`Created database directory: ${dbDir}`);
      } catch (err) {
        console.error(`Error creating database directory: ${dbDir}`, err);
      }
    }

    db = new sqlite3.Database(DB_PATH, (err) => {
      if (err) {
        console.error('Error opening database:', err);
      } else {
        db.run('PRAGMA foreign_keys = ON;');
      }
    });
  }
  return db;
}

// Wrap run, get, and all in promises
function runQuery(sql, params = []) {
  const connection = getDbConnection();
  return new Promise((resolve, reject) => {
    connection.run(sql, params, function (err) {
      if (err) reject(err);
      else resolve({ lastID: this.lastID, changes: this.changes });
    });
  });
}

function getQuery(sql, params = []) {
  const connection = getDbConnection();
  return new Promise((resolve, reject) => {
    connection.get(sql, params, (err, row) => {
      if (err) reject(err);
      else resolve(row);
    });
  });
}

function allQuery(sql, params = []) {
  const connection = getDbConnection();
  return new Promise((resolve, reject) => {
    connection.all(sql, params, (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
}

// Database schema initialization and migrations
async function initDb() {
  const connection = getDbConnection();

  // 1. Create users table
  await runQuery(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE NOT NULL,
      username TEXT NOT NULL,
      password_hash TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // 2. Create conversations table (with user_id reference)
  await runQuery(`
    CREATE TABLE IF NOT EXISTS conversations (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      user_id INTEGER,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    )
  `);

  // Migration: Check if conversations table needs user_id column
  try {
    const tableInfo = await allQuery("PRAGMA table_info(conversations)");
    const hasUserId = tableInfo.some(col => col.name === 'user_id');
    if (!hasUserId) {
      console.log('Migrating conversations table: adding user_id column...');
      await runQuery('ALTER TABLE conversations ADD COLUMN user_id INTEGER REFERENCES users(id) ON DELETE CASCADE');
    }
  } catch (err) {
    console.error('Migration error checking columns:', err);
  }

  // 3. Create messages table
  await runQuery(`
    CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      conversation_id TEXT NOT NULL,
      sender TEXT NOT NULL CHECK(sender IN ('user', 'assistant')),
      text TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (conversation_id) REFERENCES conversations(id) ON DELETE CASCADE
    )
  `);

  console.log(`Connected to SQLite and initialized tables at: ${DB_PATH}`);
}

// User-related DB operations
async function createUser(email, username, passwordHash) {
  const sql = 'INSERT INTO users (email, username, password_hash) VALUES (?, ?, ?)';
  const result = await runQuery(sql, [email.toLowerCase(), username, passwordHash]);
  return result.lastID;
}

async function getUserByEmail(email) {
  const sql = 'SELECT * FROM users WHERE email = ?';
  return getQuery(sql, [email.toLowerCase()]);
}

async function getUserById(id) {
  const sql = 'SELECT id, email, username, created_at FROM users WHERE id = ?';
  return getQuery(sql, [id]);
}

async function updateUserPassword(id, passwordHash) {
  const sql = 'UPDATE users SET password_hash = ? WHERE id = ?';
  const result = await runQuery(sql, [passwordHash, id]);
  return result.changes > 0;
}

// Conversation and message DB operations (scoped by user_id)
async function getConversations(userId) {
  const sql = `
    SELECT c.id, c.title, c.created_at,
           (SELECT m.text FROM messages m WHERE m.conversation_id = c.id ORDER BY m.created_at DESC LIMIT 1) as last_message,
           (SELECT m.created_at FROM messages m WHERE m.conversation_id = c.id ORDER BY m.created_at DESC LIMIT 1) as last_updated
    FROM conversations c
    WHERE c.user_id = ? OR c.user_id IS NULL
    ORDER BY COALESCE(last_updated, c.created_at) DESC
  `;
  return allQuery(sql, [userId]);
}

async function getConversationMessages(conversationId, userId) {
  // First verify conversation ownership (or allow public check)
  const conv = await getQuery('SELECT user_id FROM conversations WHERE id = ?', [conversationId]);
  if (conv && conv.user_id !== null && conv.user_id !== userId) {
    throw new Error('Access denied: Conversation does not belong to this user.');
  }

  const sql = `
    SELECT id, sender, text, created_at 
    FROM messages 
    WHERE conversation_id = ? 
    ORDER BY created_at ASC
  `;
  return allQuery(sql, [conversationId]);
}

async function createConversation(conversationId, title, userId) {
  const sql = 'INSERT INTO conversations (id, title, user_id) VALUES (?, ?, ?)';
  await runQuery(sql, [conversationId, title, userId]);
}

async function updateConversationTitle(conversationId, title, userId) {
  // Verify ownership
  const conv = await getQuery('SELECT user_id FROM conversations WHERE id = ?', [conversationId]);
  if (conv && conv.user_id !== null && conv.user_id !== userId) {
    throw new Error('Access denied: Conversation does not belong to this user.');
  }
  const sql = 'UPDATE conversations SET title = ? WHERE id = ?';
  await runQuery(sql, [title, conversationId]);
}

async function saveMessage(conversationId, sender, text) {
  const sql = 'INSERT INTO messages (conversation_id, sender, text) VALUES (?, ?, ?)';
  const result = await runQuery(sql, [conversationId, sender, text]);
  return result.lastID;
}

async function deleteConversation(conversationId, userId) {
  // Verify ownership
  const conv = await getQuery('SELECT user_id FROM conversations WHERE id = ?', [conversationId]);
  if (conv && conv.user_id !== null && conv.user_id !== userId) {
    throw new Error('Access denied: Conversation does not belong to this user.');
  }

  await runQuery('DELETE FROM messages WHERE conversation_id = ?', [conversationId]);
  await runQuery('DELETE FROM conversations WHERE id = ?', [conversationId]);
}

module.exports = {
  initDb,
  createUser,
  getUserByEmail,
  getUserById,
  updateUserPassword,
  getConversations,
  getConversationMessages,
  createConversation,
  updateConversationTitle,
  saveMessage,
  deleteConversation
};
