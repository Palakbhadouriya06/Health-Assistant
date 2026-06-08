// ==========================================================================
// Internationalization (i18n) — English + Hindi
// ==========================================================================
const I18N = {
  en: {
    categories: "Categories",
    cat_nutrition: "Nutrition",
    cat_fitness: "Fitness & Exercise",
    cat_mental: "Mental Wellness",
    cat_sleep: "Sleep Hygiene",
    cat_hydration: "Hydration",
    cat_firstaid: "First Aid",
    cat_tips: "Daily Health Tips",
    app_title: "Health Assistant",
    app_badge: "AI Wellness Education",
    btn_history: "History",
    btn_new_chat: "New Chat",
    btn_send: "Send",
    history_title: "Chat History",
    disclaimer: '<strong>Educational Only:</strong> This chatbot does not provide diagnoses, prescriptions, or treatment. Always consult a real doctor.',
    welcome_title: "Welcome to Health Assistant",
    welcome_desc: "Ask me about nutrition, fitness, sleep, hydration, mental wellness, or preventive healthcare.",
    topic_eating: "Healthy Eating",
    topic_fitness: "Fitness Tips",
    topic_sleep: "Sleep Hygiene",
    topic_tip: "Daily Tip",
    safety_msg: "🛡️ I am an AI, not a doctor. I will not diagnose diseases or prescribe medicines. For emergencies, call 911.",
    input_placeholder: "Ask about health, wellness, fitness...",
    no_history: "No history yet.",
    error_loading: "Error loading history.",
    you: "You",
    assistant: "Health Assistant",
    typing: "Typing...",
    delete_confirm: "Delete this conversation?",
    error_connect: "Sorry, I encountered an issue connecting to the chat engine.",
    error_load_conv: "Sorry, there was an issue loading this conversation.",
    sug_tell_more: "Tell me more",
    sug_give_tips: "Give tips",
    sug_healthy_foods: "Healthy foods",
    sug_exercise: "Exercise suggestions",
    sug_prevention: "Prevention methods",
    sug_routine: "Daily routine",
    sug_home_remedies: "Home remedies",
    csug_nutrition: "What are the best foods for a balanced diet?",
    csug_fitness: "What exercises should I do daily?",
    csug_mental: "How can I manage stress and anxiety?",
    csug_sleep: "How can I improve my sleep quality?",
    csug_hydration: "How much water should I drink daily?",
    csug_firstaid: "What should I do for minor burns?",
    csug_tips: "Give me a random daily health tip",
  },
  hi: {
    categories: "श्रेणियाँ",
    cat_nutrition: "पोषण",
    cat_fitness: "फिटनेस और व्यायाम",
    cat_mental: "मानसिक स्वास्थ्य",
    cat_sleep: "नींद स्वच्छता",
    cat_hydration: "जलयोजन",
    cat_firstaid: "प्राथमिक चिकित्सा",
    cat_tips: "दैनिक स्वास्थ्य सुझाव",
    app_title: "स्वास्थ्य सहायक",
    app_badge: "AI कल्याण शिक्षा",
    btn_history: "इतिहास",
    btn_new_chat: "नई चैट",
    btn_send: "भेजें",
    history_title: "चैट इतिहास",
    disclaimer: '<strong>केवल शैक्षिक:</strong> यह चैटबॉट निदान, नुस्खे या उपचार प्रदान नहीं करता। हमेशा एक असली डॉक्टर से सलाह लें।',
    welcome_title: "स्वास्थ्य सहायक में आपका स्वागत है",
    welcome_desc: "मुझसे पोषण, फिटनेस, नींद, जलयोजन, मानसिक स्वास्थ्य या निवारक स्वास्थ्य के बारे में पूछें।",
    topic_eating: "स्वस्थ भोजन",
    topic_fitness: "फिटनेस सुझाव",
    topic_sleep: "नींद स्वच्छता",
    topic_tip: "दैनिक सुझाव",
    safety_msg: "🛡️ मैं एक AI हूँ, डॉक्टर नहीं। मैं बीमारियों का निदान या दवाइयाँ नहीं लिखूँगा। आपातकाल में 112 पर कॉल करें।",
    input_placeholder: "स्वास्थ्य, कल्याण, फिटनेस के बारे में पूछें...",
    no_history: "अभी तक कोई इतिहास नहीं।",
    error_loading: "इतिहास लोड करने में त्रुटि।",
    you: "आप",
    assistant: "स्वास्थ्य सहायक",
    typing: "टाइप कर रहा है...",
    delete_confirm: "यह बातचीत हटाएं?",
    error_connect: "क्षमा करें, चैट इंजन से जुड़ने में समस्या हुई।",
    error_load_conv: "क्षमा करें, इस बातचीत को लोड करने में समस्या हुई।",
    sug_tell_more: "और बताइए",
    sug_give_tips: "सुझाव दें",
    sug_healthy_foods: "स्वस्थ भोजन",
    sug_exercise: "व्यायाम सुझाव",
    sug_prevention: "रोकथाम के तरीके",
    sug_routine: "दैनिक दिनचर्या",
    sug_home_remedies: "घरेलू उपचार",
    csug_nutrition: "संतुलित आहार के लिए सबसे अच्छे खाद्य पदार्थ कौन से हैं?",
    csug_fitness: "मुझे रोज़ कौन से व्यायाम करने चाहिए?",
    csug_mental: "मैं तनाव और चिंता को कैसे प्रबंधित कर सकता हूँ?",
    csug_sleep: "मैं अपनी नींद की गुणवत्ता कैसे सुधार सकता हूँ?",
    csug_hydration: "मुझे रोज़ कितना पानी पीना चाहिए?",
    csug_firstaid: "मामूली जलने पर क्या करना चाहिए?",
    csug_tips: "मुझे एक दैनिक स्वास्थ्य सुझाव दें",
  }
};

const TOPIC_SUGGESTIONS = {
  nutrition:  ['sug_healthy_foods', 'sug_give_tips', 'sug_routine', 'sug_home_remedies', 'sug_tell_more'],
  fitness:    ['sug_exercise', 'sug_give_tips', 'sug_routine', 'sug_prevention', 'sug_tell_more'],
  mental:     ['sug_give_tips', 'sug_routine', 'sug_home_remedies', 'sug_prevention', 'sug_tell_more'],
  sleep:      ['sug_give_tips', 'sug_routine', 'sug_home_remedies', 'sug_tell_more'],
  hydration:  ['sug_give_tips', 'sug_healthy_foods', 'sug_routine', 'sug_tell_more'],
  firstaid:   ['sug_home_remedies', 'sug_give_tips', 'sug_prevention', 'sug_tell_more'],
  tips:       ['sug_healthy_foods', 'sug_exercise', 'sug_routine', 'sug_prevention', 'sug_tell_more'],
  general:    ['sug_tell_more', 'sug_give_tips', 'sug_healthy_foods', 'sug_exercise', 'sug_prevention', 'sug_routine', 'sug_home_remedies'],
};

const CATEGORY_INFO = {
  nutrition: {
    titleEn: "Nutrition & Healthy Eating",
    titleHi: "पोषण और स्वस्थ आहार",
    icon: "🥗",
    tipsEn: [
      "Prioritize Whole Foods: focus on fruits, vegetables, whole grains, and lean proteins.",
      "Limit processed sugars, high sodium snacks, and trans fats.",
      "Practice mindful eating: pay attention to hunger and fullness cues.",
      "Swap sugary sodas and juices with pure water or infused herbal tea."
    ],
    tipsHi: [
      "साबुत भोजन को प्राथमिकता दें: फलों, सब्जियों, साबुत अनाज और लीन प्रोटीन पर ध्यान केंद्रित करें।",
      "प्रसंस्कृत चीनी, उच्च सोडियम वाले स्नैक्स और ट्रांस फैट को सीमित करें।",
      "सचेत रूप से भोजन (माइंडफुल ईटिंग) करें: भूख और पेट भरने के संकेतों पर ध्यान दें।",
      "मीठे सोडा और जूस के स्थान पर शुद्ध पानी या हर्बल चाय पिएं।"
    ],
    questionsEn: [
      "What are the best foods for a balanced diet?",
      "How do I calculate my daily protein requirements?",
      "Can you give me a simple 7-day healthy meal guide?",
      "What is the difference between simple and complex carbs?"
    ],
    questionsHi: [
      "संतुलित आहार के लिए सबसे अच्छे खाद्य पदार्थ कौन से हैं?",
      "मैं अपनी दैनिक प्रोटीन आवश्यकताओं की गणना कैसे करूँ?",
      "क्या आप मुझे एक सरल 7-दिवसीय स्वस्थ भोजन मार्गदर्शिका दे सकते हैं?",
      "सरल और जटिल कार्ब्स में क्या अंतर है?"
    ]
  },
  fitness: {
    titleEn: "Fitness & Physical Exercise",
    titleHi: "फिटनेस और शारीरिक व्यायाम",
    icon: "🏃‍♂️",
    tipsEn: [
      "Aim for 150 minutes of moderate aerobic activity (e.g. brisk walking) weekly.",
      "Perform strength training exercises for major muscle groups 2 or more days a week.",
      "Avoid sitting for long hours; stand up and stretch for 5 minutes every hour.",
      "Always warm up before high-intensity exercises to prevent joint strains."
    ],
    tipsHi: [
      "प्रति सप्ताह 150 मिनट मध्यम एरोबिक गतिविधि (जैसे तेज चलना) का लक्ष्य रखें।",
      "सप्ताह में 2 या अधिक दिन प्रमुख मांसपेशी समूहों के लिए शक्ति प्रशिक्षण व्यायाम करें।",
      "लंबे समय तक बैठने से बचें; हर घंटे 5 मिनट के लिए खड़े हों और स्ट्रेच करें।",
      "जोड़ों के खिंचाव को रोकने के लिए हमेशा उच्च तीव्रता वाले व्यायाम से पहले वार्मअप करें।"
    ],
    questionsEn: [
      "What exercises should I do daily?",
      "How do I start a workout routine as an absolute beginner?",
      "What are high-intensity interval training (HIIT) benefits?",
      "What is a good stretching routine for desk workers?"
    ],
    questionsHi: [
      "मुझे रोज़ कौन से व्यायाम करने चाहिए?",
      "एकदम शुरुआती (बिगिनर) के रूप में वर्कआउट रूटीन कैसे शुरू करें?",
      "हाई-इंटेंसिटी इंटरवल ट्रेनिंग (HIIT) के क्या फायदे हैं?",
      "डेस्क कर्मचारियों के लिए एक अच्छा स्ट्रेचिंग रूटीन क्या है?"
    ]
  },
  sleep: {
    titleEn: "Sleep Hygiene & Rest",
    titleHi: "नींद स्वच्छता और विश्राम",
    icon: "😴",
    tipsEn: [
      "Go to bed and wake up at the same time every day to stabilize your body clock.",
      "Keep your bedroom temperature cool, dark, and completely quiet.",
      "Avoid screens (phones, tablets, TVs) at least 45 minutes before sleeping.",
      "Limit heavy meals, caffeine, and alcohol consumption late in the evening."
    ],
    tipsHi: [
      "अपने बॉडी क्लॉक को स्थिर करने के लिए हर दिन एक ही समय पर सोएं और उठें।",
      "अपने बेडरूम का तापमान ठंडा रखें, कमरा अंधेरा और पूरी तरह से शांत होना चाहिए।",
      "सोने से कम से कम 45 मिनट पहले स्क्रीन (फोन, टैबलेट, टीवी) से दूर रहें।",
      "शाम को देर से भारी भोजन, कैफीन और शराब के सेवन को सीमित करें।"
    ],
    questionsEn: [
      "How can I improve my sleep quality?",
      "What is a natural sleep aid or wind-down routine?",
      "How many hours of sleep do adults actually need?",
      "What are the symptoms of chronic sleep deprivation?"
    ],
    questionsHi: [
      "मैं अपनी नींद की गुणवत्ता कैसे सुधार सकता हूँ?",
      "एक प्राकृतिक नींद सहायता या विश्राम दिनचर्या क्या है?",
      "वयस्कों को वास्तव में कितने घंटे की नींद की आवश्यकता होती है?",
      "लंबे समय तक नींद की कमी के लक्षण क्या हैं?"
    ]
  },
  mental: {
    titleEn: "Mental Wellness & Stress Relief",
    titleHi: "मानसिक कल्याण और तनाव मुक्ति",
    icon: "🧘‍♀️",
    tipsEn: [
      "Practice the 4-7-8 breathing technique during moments of high stress.",
      "Dedicate at least 5-10 minutes each day to guided mindfulness or meditation.",
      "Stay socially connected: share feelings with trusted friends or family.",
      "Establish clear boundaries between work demands and personal resting hours."
    ],
    tipsHi: [
      "उच्च तनाव के क्षणों में 4-7-8 श्वास तकनीक का अभ्यास करें।",
      "प्रत्येक दिन कम से कम 5-10 मिनट माइंडफुलनेस या ध्यान के लिए समर्पित करें।",
      "सामाजिक रूप से जुड़े रहें: विश्वसनीय दोस्तों या परिवार के साथ भावनाएं साझा करें।",
      "काम की मांगों और व्यक्तिगत विश्राम के घंटों के बीच स्पष्ट सीमाएं स्थापित करें।"
    ],
    questionsEn: [
      "How can I manage stress and anxiety?",
      "How does mindfulness meditation help emotional health?",
      "What are simple breathing techniques for instant calm?",
      "When is it recommended to consult a clinical therapist?"
    ],
    questionsHi: [
      "मैं तनाव और चिंता को कैसे प्रबंधित कर सकता हूँ?",
      "माइंडफुलनेस मेडिटेशन भावनात्मक स्वास्थ्य में कैसे मदद करता है?",
      "तुरंत शांति के लिए सरल श्वास तकनीक क्या हैं?",
      "क्लीनिकल थेरेपिस्ट से परामर्श करने की सिफारिश कब की जाती है?"
    ]
  },
  hydration: {
    titleEn: "Hydration & Water Intake",
    titleHi: "जलयोजन और पानी का सेवन",
    icon: "💧",
    tipsEn: [
      "Aim for 8 to 10 cups (about 2-2.5 liters) of water daily for normal body function.",
      "Check your urine color: a pale straw color suggests perfect hydration status.",
      "Carry a reusable water bottle to easily keep track of your daily intake.",
      "Increase fluid consumption during intense workouts or hot, dry weather conditions."
    ],
    tipsHi: [
      "सामान्य शारीरिक क्रिया के लिए प्रतिदिन 8 से 10 गिलास (लगभग 2-2.5 लीटर) पानी पीने का लक्ष्य रखें।",
      "अपने पेशाब के रंग की जाँच करें: हल्का पीला रंग सही जलयोजन स्थिति का संकेत देता है।",
      "अपने दैनिक सेवन को आसानी से ट्रैक करने के लिए एक रीयूजेबल पानी की बोतल साथ रखें।",
      "गहन वर्कआउट या गर्म, शुष्क मौसम की स्थिति के दौरान तरल पदार्थ का सेवन बढ़ाएं।"
    ],
    questionsEn: [
      "How much water should I drink daily?",
      "What are the danger signs of severe dehydration?",
      "How does water improve skin and metabolic health?",
      "Can I drink too much water? What is water intoxication?"
    ],
    questionsHi: [
      "मुझे रोज़ कितना पानी पीना चाहिए?",
      "गंभीर डिहाइड्रेशन के खतरे के संकेत क्या हैं?",
      "पानी त्वचा और मेटाबॉलिक स्वास्थ्य में कैसे सुधार करता है?",
      "क्या मैं बहुत अधिक पानी पी सकता हूँ? वॉटर इंटॉक्सिकेशन क्या है?"
    ]
  },
  firstaid: {
    titleEn: "Basic First Aid Protocols",
    titleHi: "बुनियादी प्राथमिक चिकित्सा नियम",
    icon: "🩹",
    tipsEn: [
      "Minor Burns: hold under cool running water for 10-15 minutes immediately.",
      "Minor Cuts: wash with mild soap and clean water to prevent bacteria entry.",
      "Nosebleeds: sit upright, lean forward slightly, and pinch below the nose bridge.",
      "Joint Sprains: follow Rest, Ice, Compress, and Elevate (R.I.C.E.) method."
    ],
    tipsHi: [
      "मामूली जलन: तुरंत 10-15 मिनट के लिए नल के बहते पानी के नीचे रखें।",
      "मामूली कट: बैक्टीरिया के प्रवेश को रोकने के लिए हल्के साबुन और साफ पानी से धोएं।",
      "नकसीर: सीधे बैठें, थोड़ा आगे झुकें, और नाक की हड्डी के ठीक नीचे दबाएं।",
      "जोड़ों की मोच: आराम, बर्फ, सेक और ऊँचा उठाना (R.I.C.E.) विधि का पालन करें।"
    ],
    questionsEn: [
      "What should I do for minor burns?",
      "What is the correct first-aid protocol for nosebleeds?",
      "How do I administer basic CPR step-by-step?",
      "What items are essential in a home first-aid kit?"
    ],
    questionsHi: [
      "मामूली जलने पर क्या करना चाहिए?",
      "नकसीर के लिए सही प्राथमिक चिकित्सा प्रोटोकॉल क्या है?",
      "मैं कदम-दर-कदम बुनियादी सीपीआर (CPR) कैसे प्रदान करूँ?",
      "घर की प्राथमिक चिकित्सा किट में कौन सी चीजें आवश्यक हैं?"
    ]
  },
  tips: {
    titleEn: "Daily Health Tips",
    titleHi: "दैनिक स्वास्थ्य सुझाव",
    icon: "💡",
    tipsEn: [
      "Take a 10-minute walk after meals to aid digestion and lower blood sugar spikes.",
      "Substitute sugary snacks with nutrient-dense nuts or seasonal fresh fruits.",
      "Protect your eyes: rest every 20 minutes by staring 20 feet away for 20 seconds.",
      "Spend at least 15 minutes in natural morning sunlight to boost Vitamin D level."
    ],
    tipsHi: [
      "पाचन में सहायता और रक्त शर्करा को कम करने के लिए भोजन के बाद 10 मिनट टहलें।",
      "मीठे स्नैक्स के स्थान पर पोषक तत्वों से भरपूर नट्स या मौसमी ताजे फल खाएं।",
      "अपनी आंखों को सुरक्षित रखें: हर 20 मिनट में 20 सेकंड के लिए 20 फीट दूर देखकर आराम दें।",
      "विटामिन डी के स्तर को बढ़ाने के लिए सुबह की प्राकृतिक धूप में कम से कम 15 मिनट बिताएं।"
    ],
    questionsEn: [
      "Give me a random daily health tip",
      "Why is walking after meals highly recommended?",
      "How does sunlight boost vitamin D and improve sleep?",
      "What is the 20-20-20 eye strain rule?"
    ],
    questionsHi: [
      "मुझे एक दैनिक स्वास्थ्य सुझाव दें",
      "भोजन के बाद टहलने की सिफारिश क्यों की जाती है?",
      "धूप विटामिन डी को कैसे बढ़ाती है और नींद में सुधार करती है?",
      "20-20-20 आँखों के तनाव का नियम क्या है?"
    ]
  }
};

// ==========================================================================
// App State
// ==========================================================================
let currentLang = localStorage.getItem('healthAssistantLang') || 'en';
let currentConversationId = null;
let conversationsList = [];
let activeCategory = null;
let lastDetectedTopic = 'general';

// ==========================================================================
// DOM References
// ==========================================================================
const chatContainer     = document.getElementById('chat-container');
const welcomeScreen     = document.getElementById('welcome-screen');
const messageInput      = document.getElementById('message-input');
const chatForm          = document.getElementById('chat-form');
const sendBtn           = document.getElementById('send-btn');
const suggestionsArea   = document.getElementById('suggestions-area');

const catSidebar        = document.getElementById('categories-sidebar');
const toggleCatBtn      = document.getElementById('toggle-cat-btn');
const closeCatBtn       = document.getElementById('close-cat-btn');
const catList           = document.getElementById('cat-list');

const histSidebar       = document.getElementById('history-sidebar');
const historyBtn        = document.getElementById('history-btn');
const closeHistBtn      = document.getElementById('close-hist-btn');
const historyList       = document.getElementById('history-list');
const newChatHistBtn    = document.getElementById('new-chat-hist-btn');

const newChatHeaderBtn  = document.getElementById('new-chat-header-btn');
const langToggleBtn     = document.getElementById('lang-toggle-btn');
const langLabel         = document.getElementById('lang-label');

const overlayBackdrop   = document.getElementById('overlay-backdrop');

const topicCards        = document.querySelectorAll('.topic-card');
const catItems          = document.querySelectorAll('.cat-item');

const categoryModal       = document.getElementById('category-modal');
const modalCatIcon        = document.getElementById('modal-cat-icon');
const modalCatTitle       = document.getElementById('modal-cat-title');
const modalTipsList       = document.getElementById('modal-tips-list');
const modalQuestionsList  = document.getElementById('modal-questions-list');
const closeModalBtn       = document.getElementById('close-modal-btn');

// ==========================================================================
// localStorage Helpers
// ==========================================================================
const STORAGE_KEY = 'healthAssistantConversations';

function loadConversations() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    return [];
  }
}

function saveConversations(convs) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(convs));
  } catch (e) {
    console.error('Failed to save conversations:', e);
  }
}

function generateConvId() {
  return 'conv_' + Date.now() + '_' + Math.random().toString(36).slice(2, 11);
}

// ==========================================================================
// Initialization
// ==========================================================================
function init() {
  applyLanguage(currentLang);

  if (window.innerWidth > 1024) {
    openCatSidebar(false);
  } else {
    closeCatSidebar(false);
  }

  load_history();

  chatForm.addEventListener('submit', handleFormSubmit);

  toggleCatBtn.addEventListener('click', toggleCatSidebar);
  closeCatBtn.addEventListener('click', () => closeCatSidebar(true));

  initCategoryModal();

  historyBtn.addEventListener('click', () => { load_history(); openHistSidebar(); });
  closeHistBtn.addEventListener('click', closeHistSidebar);
  newChatHistBtn.addEventListener('click', startNewChat);
  newChatHeaderBtn.addEventListener('click', startNewChat);

  overlayBackdrop.addEventListener('click', closeAllDrawers);

  langToggleBtn.addEventListener('click', toggleLanguage);

  topicCards.forEach(card => {
    card.addEventListener('click', () => {
      const topic = card.getAttribute('data-topic');
      if (topic) { messageInput.value = topic; messageInput.focus(); }
    });
  });

  catItems.forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.getAttribute('data-category');
      setActiveCategory(cat);
      openCategoryModal(cat);
      if (window.innerWidth <= 1024) closeCatSidebar(true);
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
      if (catSidebar.classList.contains('closed') && !catSidebar.dataset.manualClose) {
        openCatSidebar(false);
      }
    } else {
      if (!catSidebar.classList.contains('closed')) closeCatSidebar(false);
      if (histSidebar.classList.contains('open')) closeHistSidebar();
    }
  });
}

document.addEventListener('DOMContentLoaded', init);

// ==========================================================================
// i18n Functions
// ==========================================================================
function t(key) {
  return (I18N[currentLang] && I18N[currentLang][key]) || (I18N['en'][key]) || key;
}

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('healthAssistantLang', lang);
  langLabel.textContent = lang.toUpperCase();

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (val) el.innerHTML = val;
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const val = t(key);
    if (val) el.placeholder = val;
  });

  showSuggestions(lastDetectedTopic);
}

function toggleLanguage() {
  const newLang = currentLang === 'en' ? 'hi' : 'en';
  applyLanguage(newLang);
}

// ==========================================================================
// Categories Sidebar
// ==========================================================================
function toggleCatSidebar() {
  if (catSidebar.classList.contains('closed')) {
    openCatSidebar(true);
  } else {
    closeCatSidebar(true);
    catSidebar.dataset.manualClose = 'true';
  }
}

function openCatSidebar(showBackdrop) {
  catSidebar.classList.remove('closed');
  catSidebar.classList.add('open');
  delete catSidebar.dataset.manualClose;
  if (showBackdrop && window.innerWidth <= 1024) {
    overlayBackdrop.classList.add('active');
  }
}

function closeCatSidebar(withBackdrop) {
  catSidebar.classList.remove('open');
  catSidebar.classList.add('closed');
  if (withBackdrop) overlayBackdrop.classList.remove('active');
}

function setActiveCategory(cat) {
  activeCategory = cat;
  lastDetectedTopic = cat || 'general';
  catItems.forEach(item => {
    item.classList.toggle('active', item.getAttribute('data-category') === cat);
  });
}

// ==========================================================================
// History Sidebar
// ==========================================================================
function openHistSidebar() {
  histSidebar.classList.add('open');
  if (window.innerWidth <= 1024) overlayBackdrop.classList.add('active');
}

function closeHistSidebar() {
  histSidebar.classList.remove('open');
  overlayBackdrop.classList.remove('active');
}

function closeAllDrawers() {
  closeCatSidebar(false);
  closeHistSidebar();
  overlayBackdrop.classList.remove('active');
}

// ==========================================================================
// History (localStorage)
// ==========================================================================
function load_history() {
  conversationsList = loadConversations();
  display_history();
}

function display_history() {
  historyList.innerHTML = '';
  if (conversationsList.length === 0) {
    historyList.innerHTML = `<div class="no-history">${t('no_history')}</div>`;
    return;
  }

  conversationsList.forEach(conv => {
    const activeClass = conv.id === currentConversationId ? 'active' : '';
    const dateText = formatTimestamp(conv.updatedAt || conv.createdAt);

    const item = document.createElement('div');
    item.className = `history-item ${activeClass}`;
    item.setAttribute('data-id', conv.id);
    item.addEventListener('click', () => open_conversation(conv.id));

    item.innerHTML = `
      <div class="history-item-details">
        <div class="history-item-title" title="${escapeHtml(conv.title)}">${escapeHtml(conv.title)}</div>
        <div class="history-item-time">${dateText}</div>
      </div>
      <button class="history-item-delete" aria-label="Delete" data-id="${conv.id}">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
      </button>
    `;

    const delBtn = item.querySelector('.history-item-delete');
    delBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      confirmDeleteConversation(conv.id);
    });

    historyList.appendChild(item);
  });
}

function open_conversation(id) {
  const convs = loadConversations();
  const conv = convs.find(c => c.id === id);
  if (!conv) {
    appendMessageBubble('assistant', t('error_load_conv'));
    return;
  }

  currentConversationId = id;
  clearChatView();
  welcomeScreen.style.display = 'none';
  suggestionsArea.innerHTML = '';

  conv.messages.forEach(msg => {
    appendMessageBubble(msg.sender, msg.text, msg.createdAt);
  });
  scrollChatToBottom();

  historyList.querySelectorAll('.history-item').forEach(item => {
    item.classList.toggle('active', item.getAttribute('data-id') === id);
  });

  if (conv.messages.length > 0) {
    const lastMsg = conv.messages[conv.messages.length - 1];
    lastDetectedTopic = detectTopic(lastMsg.text);
    showSuggestions(lastDetectedTopic);
  }

  if (window.innerWidth <= 1024) closeHistSidebar();
}

// ==========================================================================
// Chat Message Handling
// ==========================================================================
function startNewChat() {
  currentConversationId = null;
  activeCategory = null;
  lastDetectedTopic = 'general';
  clearChatView();
  welcomeScreen.style.display = 'flex';
  suggestionsArea.innerHTML = '';
  catItems.forEach(item => item.classList.remove('active'));
  historyList.querySelectorAll('.history-item').forEach(i => i.classList.remove('active'));
  if (window.innerWidth <= 1024) closeAllDrawers();
  messageInput.focus();
}

function confirmDeleteConversation(id) {
  if (confirm(t('delete_confirm'))) {
    let convs = loadConversations();
    convs = convs.filter(c => c.id !== id);
    saveConversations(convs);
    if (currentConversationId === id) startNewChat();
    load_history();
  }
}

function handleFormSubmit(e) {
  e.preventDefault();
  const text = messageInput.value.trim();
  if (text === '') return;

  messageInput.value = '';
  if (welcomeScreen.style.display !== 'none') welcomeScreen.style.display = 'none';

  appendMessageBubble('user', text, new Date().toISOString());
  scrollChatToBottom();
  setFormDisabled(true);
  suggestionsArea.innerHTML = '';

  const loaderId = appendTypingIndicator();
  scrollChatToBottom();

  setTimeout(() => {
    const convs = loadConversations();
    let conv = convs.find(c => c.id === currentConversationId);
    let isNew = false;

    if (!conv) {
      isNew = true;
      const title = text.length > 35 ? text.slice(0, 35) + '...' : text;
      conv = { id: generateConvId(), title, messages: [], createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
      currentConversationId = conv.id;
      convs.unshift(conv);
    }

    conv.messages.push({ sender: 'user', text, createdAt: new Date().toISOString() });
    conv.updatedAt = new Date().toISOString();

    const reply = getChatbotResponse(text, conv.messages, currentLang);

    conv.messages.push({ sender: 'assistant', text: reply, createdAt: new Date().toISOString() });
    conv.updatedAt = new Date().toISOString();

    if (conv.title === (text.length > 35 ? text.slice(0, 35) + '...' : text) && conv.messages.length > 2) {
      conv.title = text.length > 35 ? text.slice(0, 35) + '...' : text;
    }

    saveConversations(convs);

    removeTypingIndicator(loaderId);

    appendMessageBubble('assistant', reply, new Date().toISOString());
    scrollChatToBottom();

    lastDetectedTopic = detectTopic(reply + ' ' + text);
    showSuggestions(lastDetectedTopic);

    if (isNew) {
      const idx = convs.findIndex(c => c.id === conv.id);
      if (idx > 0) {
        convs.splice(idx, 1);
        convs.unshift(conv);
        saveConversations(convs);
      }
    }

    load_history();

    setFormDisabled(false);
    messageInput.focus();
  }, 300);
}

// ==========================================================================
// Topic Detection
// ==========================================================================
function detectTopic(text) {
  const lower = text.toLowerCase();
  const topicKeywords = {
    nutrition:  ['nutrition', 'diet', 'food', 'eat', 'vitamin', 'protein', 'calorie', 'meal', 'fruit', 'vegetable', 'पोषण', 'भोजन', 'खाना', 'आहार'],
    fitness:    ['exercise', 'fitness', 'workout', 'gym', 'cardio', 'yoga', 'running', 'walk', 'muscle', 'व्यायाम', 'फिटनेस', 'कसरत'],
    mental:     ['stress', 'anxiety', 'mental', 'meditation', 'mindful', 'depression', 'relax', 'mood', 'तनाव', 'चिंता', 'मानसिक', 'ध्यान'],
    sleep:      ['sleep', 'insomnia', 'bedtime', 'rest', 'nap', 'dream', 'नींद', 'सोना', 'आराम'],
    hydration:  ['water', 'hydrat', 'drink', 'fluid', 'dehydrat', 'पानी', 'जल', 'पीना'],
    firstaid:   ['first aid', 'burn', 'wound', 'bleed', 'bandage', 'injury', 'cut', 'sprain', 'प्राथमिक चिकित्सा', 'चोट', 'जलना'],
    tips:       ['tip', 'habit', 'daily', 'routine', 'healthy living', 'सुझाव', 'दैनिक', 'आदत'],
  };

  for (const [topic, keywords] of Object.entries(topicKeywords)) {
    if (keywords.some(kw => lower.includes(kw))) return topic;
  }
  return activeCategory || 'general';
}

// ==========================================================================
// Suggestion Chips
// ==========================================================================
function showSuggestions(topic) {
  suggestionsArea.innerHTML = '';
  const keys = TOPIC_SUGGESTIONS[topic] || TOPIC_SUGGESTIONS['general'];

  keys.forEach(key => {
    const chip = document.createElement('button');
    chip.className = 'suggestion-chip';
    chip.textContent = t(key);
    chip.addEventListener('click', () => {
      messageInput.value = t(key);
      chatForm.dispatchEvent(new Event('submit', { cancelable: true }));
    });
    suggestionsArea.appendChild(chip);
  });
}

// ==========================================================================
// Rendering Helpers
// ==========================================================================
function clearChatView() {
  const bubbles = chatContainer.querySelectorAll('.message-bubble, .typing-container');
  bubbles.forEach(b => b.remove());
}

function setFormDisabled(disabled) {
  messageInput.disabled = disabled;
  sendBtn.disabled = disabled;
}

function appendMessageBubble(sender, text, timestamp) {
  const bubble = document.createElement('div');
  bubble.className = `message-bubble ${sender}`;

  const timeText = timestamp ? formatTimeOnly(timestamp) : '';
  const senderTitle = sender === 'user' ? t('you') : t('assistant');

  bubble.innerHTML = `
    <div class="message-meta">${senderTitle} &bull; ${timeText}</div>
    <div class="message-content">${formatMessageText(text)}</div>
  `;
  chatContainer.appendChild(bubble);
}

function appendTypingIndicator() {
  const container = document.createElement('div');
  const uniqueId = 'loader_' + Date.now();
  container.id = uniqueId;
  container.className = 'message-bubble assistant typing-container';
  container.innerHTML = `
    <div class="message-meta">${t('assistant')} &bull; ${t('typing')}</div>
    <div class="message-content">
      <div class="typing-indicator">
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
      </div>
    </div>
  `;
  chatContainer.appendChild(container);
  return uniqueId;
}

function removeTypingIndicator(id) {
  const el = document.getElementById(id);
  if (el) el.remove();
}

function scrollChatToBottom() {
  const wrapper = document.getElementById('chat-wrapper');
  wrapper.scrollTop = wrapper.scrollHeight;
}

function formatMessageText(text) {
  let safeText = escapeHtml(text);
  safeText = safeText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  safeText = safeText.replace(/^###\s+(.*?)$/gm, '<h3>$1</h3>');

  const lines = safeText.split('\n');
  let inList = false;
  let formattedLines = [];

  for (let line of lines) {
    const trimmed = line.trim();
    const bullet = trimmed.match(/^[\*\-]\s+(.*)$/);
    if (bullet) {
      if (!inList) { formattedLines.push('<ul>'); inList = true; }
      formattedLines.push(`<li>${bullet[1]}</li>`);
    } else {
      if (inList) { formattedLines.push('</ul>'); inList = false; }
      const num = trimmed.match(/^(\d+)\.\s+(.*)$/);
      if (num) {
        formattedLines.push(`<p><strong>${num[1]}.</strong> ${num[2]}</p>`);
      } else if (trimmed !== '') {
        if (trimmed.startsWith('Disclaimer:') || trimmed.includes('not a substitute for professional') || trimmed.includes('not provide medical diagnoses')) {
          formattedLines.push(`<em>${trimmed}</em>`);
        } else {
          formattedLines.push(`<p>${trimmed}</p>`);
        }
      }
    }
  }
  if (inList) formattedLines.push('</ul>');
  return formattedLines.join('');
}

function escapeHtml(string) {
  return String(string)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function formatTimestamp(isoString) {
  if (!isoString) return '';
  const date = new Date(isoString);
  const now = new Date();
  if (date.toDateString() === now.toDateString()) {
    return (currentLang === 'hi' ? 'आज ' : 'Today ') + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }
  const yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);
  if (date.toDateString() === yesterday.toDateString()) {
    return (currentLang === 'hi' ? 'कल ' : 'Yesterday ') + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }
  return date.toLocaleDateString([], { month: 'short', day: 'numeric' }) + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function formatTimeOnly(isoString) {
  if (!isoString) return '';
  return new Date(isoString).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

// ==========================================================================
// Category Modal
// ==========================================================================
function initCategoryModal() {
  closeModalBtn.addEventListener('click', () => {
    categoryModal.classList.remove('open');
  });

  categoryModal.addEventListener('click', (e) => {
    if (e.target === categoryModal) {
      categoryModal.classList.remove('open');
    }
  });
}

function openCategoryModal(cat) {
  const info = CATEGORY_INFO[cat];
  if (!info) return;

  modalCatIcon.textContent = info.icon;
  modalCatTitle.textContent = currentLang === 'hi' ? info.titleHi : info.titleEn;

  document.getElementById('modal-tips-heading').textContent = currentLang === 'hi' ? "त्वरित जानकारी और स्वास्थ्य सुझाव" : "Quick Info & Health Tips";
  document.getElementById('modal-questions-heading').textContent = currentLang === 'hi' ? "सुझाए गए प्रश्न" : "Suggested Questions";

  modalTipsList.innerHTML = '';
  const tips = currentLang === 'hi' ? info.tipsHi : info.tipsEn;
  tips.forEach(tip => {
    const li = document.createElement('li');
    li.textContent = tip;
    modalTipsList.appendChild(li);
  });

  modalQuestionsList.innerHTML = '';
  const questions = currentLang === 'hi' ? info.questionsHi : info.questionsEn;
  questions.forEach(q => {
    const chip = document.createElement('button');
    chip.className = 'modal-question-chip';
    chip.textContent = q;
    chip.addEventListener('click', () => {
      categoryModal.classList.remove('open');
      messageInput.value = q;
      chatForm.dispatchEvent(new Event('submit', { cancelable: true }));
    });
    modalQuestionsList.appendChild(chip);
  });

  categoryModal.classList.add('open');
}
