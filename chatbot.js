const { GoogleGenerativeAI } = require('@google/generative-ai');

// Load API Key
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const SYSTEM_INSTRUCTION = `You are a Health Awareness Assistant. You are NOT a doctor or medical professional.
Your goal is to provide basic health education, healthy lifestyle tips, symptom awareness, fitness guidance, hydration reminders, mental wellness suggestions, and general preventive healthcare information.

CRITICAL SAFETY & ROUTING RULES:
1. You are NOT a licensed doctor or medical professional. You must never claim to be a doctor, diagnose conditions, prescribe medications, or suggest medical dosages.
2. If the user asks for diagnosis of symptoms, give general educational information about potential causes, but strongly and clearly advise them to consult a qualified healthcare professional.
3. If the user indicates a medical emergency (e.g. severe chest pain, difficulty breathing, sudden numbness, severe bleeding), urge them to contact emergency services (like 911 or their local equivalent) immediately.
4. Avoid giving specific prescriptions, clinical treatments, or drug dosages.
5. Avoid fear-based, alarmist, or misleading responses. Keep your tone professional, supportive, encouraging, and objective.
6. If the user asks questions unrelated to health awareness (such as coding questions, political topics, hacking/illegal activities, entertainment gossip, financial advice, or unrelated general knowledge), you MUST refuse to answer and respond EXACTLY with:
"I am a Health Awareness Assistant and can only help with health, wellness, fitness, hygiene, mental wellness, healthy lifestyle, and preventive healthcare topics. Please ask a health-related question."
Do not add any other words, greetings, or disclaimers to this refusal.
7. Always include a brief disclaimer at the end of valid health responses reminding the user that your response is educational and not a substitute for professional medical care.`;

let model = null;
if (GEMINI_API_KEY && GEMINI_API_KEY.trim()) {
  try {
    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY.trim());
    model = genAI.getGenerativeModel({
      model: 'gemini-1.5-flash',
      systemInstruction: SYSTEM_INSTRUCTION
    });
    console.log('Gemini AI Chatbot Engine initialized successfully in Node.js.');
  } catch (err) {
    console.error('Error initializing Gemini AI:', err, 'Falling back to local engine.');
  }
} else {
  console.log('No Gemini API Key found. Chatbot Engine will run in Local Fallback mode.');
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function containsWordRoot(text, wordList) {
  const textLower = text.toLowerCase();
  for (const word of wordList) {
    const wordLower = word.toLowerCase();
    const isAscii = /^[\x00-\x7F]*$/.test(wordLower);
    if (isAscii) {
      // Use regex word boundary for ASCII
      const regex = new RegExp('\\b' + escapeRegExp(wordLower), 'i');
      if (regex.test(textLower)) {
        return true;
      }
    } else {
      // Substring match for non-ASCII (Hindi, etc.)
      if (textLower.includes(wordLower)) {
        return true;
      }
    }
  }
  return false;
}

function isBlacklisted(message) {
  const blacklistWords = [
    // Coding/Programming
    'code', 'coding', 'program', 'programming', 'python', 'javascript', 'html', 'css', 
    'java', 'c++', 'c#', 'rust', 'php', 'sql', 'script', 'function', 'class', 'database', 
    'algorithm', 'software', 'develop', 'compile', 'debugging', 'debugger',
    
    // Politics
    'politic', 'political', 'election', 'president', 'government', 'senate', 'congress',
    'democrat', 'republican', 'parliament', 'prime minister', 'obama', 'biden', 'trump',
    
    // Hacking/Illegal
    'hack', 'hacking', 'malware', 'exploit', 'bypass security', 'illegal', 'pirate',
    'steal', 'robbery', 'crime', 'bypass',
    
    // Financial
    'finance', 'financial', 'invest', 'stock', 'bitcoin', 'crypto', 'shares', 'mutual fund',
    'real estate investment', 'money management', 'loan', 'mortgage', 'wall street',
    
    // Entertainment Gossip
    'celebrity', 'gossip', 'kardashian', 'hollywood gossip', 'actor dating', 'actress dating',
    'paparazzi', 'rumor'
  ];
  return containsWordRoot(message, blacklistWords);
}

function isHealthRelated(message) {
  const greetings = ['hello', 'hi', 'hey', 'help', 'who are you', 'what can you do', 'tip', 'daily', 'welcome',
                     'नमस्ते', 'नमस्कार', 'हेलो', 'मदद', 'सहायता', 'सुझाव'];
  if (containsWordRoot(message, greetings)) {
    return true;
  }

  const healthRoots = [
    'health', 'wellness', 'fitness', 'hygiene', 'mental', 'lifestyle', 'preventive',
    'diet', 'nutrition', 'eat', 'food', 'meal', 'calorie', 'vitamin', 'protein', 'fat', 'carb',
    'exercise', 'workout', 'sport', 'walk', 'run', 'cardio', 'strength', 'stretch',
    'sleep', 'insomnia', 'tired', 'bedtime', 'rest', 'fatigue',
    'hydrate', 'hydration', 'water', 'drink', 'fluid',
    'stress', 'anxiety', 'calm', 'relax', 'meditate', 'mindful', 'depress',
    'first aid', 'burn', 'cut', 'wound', 'bleed', 'choke', 'sprain', 'injury', 'injured',
    'wash', 'teeth', 'clean', 'brush', 'soap', 'bath', 'shower',
    'vaccine', 'vaccination', 'checkup', 'screening', 'test', 'immun',
    'disease', 'diabetes', 'hypertension', 'heart', 'cancer', 'obesity', 'cholesterol', 'stroke',
    'headache', 'migraine', 'fever', 'temperature', 'stomach', 'nausea', 'vomit', 'belly', 'indigestion',
    'cough', 'cold', 'flu', 'sore throat', 'congestion', 'runny nose', 'breathe', 'breathing',
    'pain', 'ache', 'sick', 'ill', 'doctor', 'medical', 'hospital', 'medicine', 'drug', 'symptom',
    'body', 'lung', 'muscle', 'bone', 'skin', 'blood', 'therap', 'treatment', 'dose', 'therapy',
    'dentist', 'nutritionist', 'cardiologist',
    
    // Hindi keywords
    'स्वास्थ्य', 'सेहत', 'तंदुरुस्ती', 'फिटनेस', 'स्वच्छता', 'मानसिक', 'जीवनशैली',
    'आहार', 'पोषण', 'खाना', 'भोजन', 'विटामिन', 'प्रोटीन', 'कैलोरी',
    'व्यायाम', 'कसरत', 'योग', 'चलना', 'दौड़', 'जिम',
    'नींद', 'सोना', 'आराम', 'थकान', 'अनिद्रा',
    'पानी', 'जल', 'पीना', 'डिहाइड्रेशन',
    'तनाव', 'चिंता', 'ध्यान', 'शांति', 'अवसाद',
    'प्राथमिक', 'चिकित्सा', 'जलना', 'चोट', 'घाव', 'रक्त',
    'दांत', 'नहाना', 'साबुन', 'सफाई',
    'टीका', 'जांच', 'रोकथाम',
    'बीमारी', 'मधुमेह', 'रक्तचाप', 'हृदय', 'कैंसर', 'मोटापा',
    'सिरदर्द', 'बुखार', 'पेट', 'उल्टी', 'दर्द',
    'खांसी', 'जुकाम', 'गला', 'सांस',
    'डॉक्टर', 'अस्पताल', 'दवा', 'लक्षण', 'उपचार', 'इलाज'
  ];
  return containsWordRoot(message, healthRoots);
}

function isEmergency(message) {
  const emergencyKeywords = [
    'chest pain', 'heart attack', 'breathing difficulty', 'difficulty breathing', 
    'shortness of breath', 'can\'t breathe', 'cannot breathe', 'can not breathe',
    'stroke', 'unconscious', 'heavy bleeding', 'severe bleeding', 'suicidal', 
    'kill myself', 'poisoned', 'poisoning', 'seizure', 'passed out'
  ];
  const msgLower = message.toLowerCase();
  return emergencyKeywords.some(keyword => msgLower.includes(keyword));
}

// Local fallback database
const FALLBACK_RESPONSES = {
  emergency: `🚨 **IMMEDIATE MEDICAL ATTENTION REQUIRED** 🚨

If you or someone you are with is experiencing severe chest pain, extreme difficulty breathing, sudden weakness or numbness (especially on one side of the body), heavy bleeding, or loss of consciousness, please **call your local emergency services (e.g., 911, 999, 112) or go to the nearest emergency room immediately.**

Do not wait or try to self-treat. These symptoms can be life-threatening and require immediate evaluation by trained medical professionals.`,

  eat: `### 🥗 Healthy Eating & Nutrition Tips

A balanced diet provides the nutrients your body needs to function correctly. Here are basic principles for maintaining a healthy diet:

*   **Prioritize Whole Foods:** Focus on eating whole, unprocessed foods like vegetables, fruits, whole grains (oats, brown rice, quinoa), lean proteins (poultry, fish, beans, tofu), and healthy fats (avocados, nuts, olive oil).
*   **Fill Half Your Plate:** Try to make half of your main meals consist of colorful vegetables and fruits. Different colors represent different vitamins, minerals, and antioxidants.
*   **Limit Added Sugars & Sodium:** Minimize consumption of sugary sodas, processed snacks, fast foods, and baked goods. Excess sugar and sodium are linked to chronic conditions like heart disease and Type 2 diabetes.
*   **Watch Portion Sizes:** Pay attention to hunger and fullness cues. Eating mindfully without distractions helps prevent overeating.

*Remember: Individual nutritional needs vary based on age, gender, activity level, and health status. Consult a registered dietitian for personalized advice.*`,

  exercise: `### 🏃‍♂️ Physical Activity & Fitness Guidelines

Regular physical activity is one of the most important things you can do for your health. It benefits your heart, mind, and sleep.

*   **Weekly Goal:** For adults, the World Health Organization recommends at least **150 minutes of moderate-intensity** aerobic activity (like brisk walking, cycling, or swimming) or **75 minutes of vigorous-intensity** activity (like running or aerobics) per week.
*   **Strength Training:** Incorporate muscle-strengthening activities (like weight lifting, bodyweight exercises, or resistance bands) that work all major muscle groups on **2 or more days a week**.
*   **Reduce Sedentary Time:** If you work at a desk, stand up and stretch for 5 minutes every hour. Walking just 10–15 minutes after meals can significantly benefit digestion and blood sugar management.
*   **Start Small:** If you are new to exercise, start with 5–10 minutes of walking daily and gradually build up your duration and intensity.

*Note: Always listen to your body. If you have underlying health conditions, consult a physician before starting a new strenuous exercise regimen.*`,

  sleep: `### 😴 Sleep Hygiene Improvement

Good sleep is critical for physical recovery, cognitive function, and emotional well-being. Most adults require 7 to 9 hours of quality sleep per night.

Here are key tips to improve your sleep quality:
1.  **Maintain a Consistent Schedule:** Go to bed and wake up at the same time every day, even on weekends. This stabilizes your internal body clock.
2.  **Optimize Your Environment:** Keep your bedroom dark, quiet, and cool (ideally around 60-67°F or 15-19°C). Consider blackout curtains or a white noise machine.
3.  **Digital Detox:** Turn off screens (phones, tablets, TVs) at least 30–60 minutes before bedtime. The blue light emitted by screens suppresses melatonin, the hormone that triggers sleep.
4.  **Watch what you Consume:** Avoid heavy meals, caffeine, and alcohol close to bedtime. While alcohol can make you feel drowsy, it disrupts deep sleep cycles.
5.  **Wind Down:** Establish a relaxing pre-sleep routine, such as reading a book, taking a warm bath, or practicing deep breathing.`,

  hydration: `### 💧 Hydration & Water Intake Guidelines

Water makes up about 60% of the human body and is vital for temperature regulation, joint lubrication, nutrient transport, and organ function.

*   **Daily Recommendation:** While needs vary, a standard general guideline is about **8 to 10 cups (approx. 2 to 2.5 liters) of water daily** for adults.
*   **Listen to Your Body:** Drink when you feel thirsty. You may need more water if you are exercising, in hot weather, pregnant, breastfeeding, or recovering from an illness (such as fever or diarrhea).
*   **Urine Check:** A simple way to monitor hydration is by checking the color of your urine. A pale, straw-like yellow color indicates good hydration. Dark yellow or amber indicates you need to drink more water.
*   **Hydration Tips:**
    *   Keep a reusable water bottle with you.
    *   Set reminders on your phone or use a tracker.
    *   If you find plain water boring, infuse it with fresh cucumber, lemon slices, or mint.`,

  stress: `### 🧘‍♀️ Stress Management & Mental Wellness

Taking care of your mental and emotional health is just as important as maintaining physical health. Chronic stress can weaken the immune system and increase the risk of heart problems.

Here are practical habits to support mental wellness:
*   **Deep Breathing Practice:** When stressed, try the **4-7-8 breathing method**. Inhale through your nose for 4 seconds, hold your breath for 7 seconds, and exhale slowly through your mouth for 8 seconds. Repeat 4 times.
*   **Mindfulness & Meditation:** Even 5 minutes of quiet reflection or guided meditation daily can help center your thoughts and reduce anxiety.
*   **Stay Connected:** Talk to friends, family, or support groups. Sharing your thoughts and feelings with people who care can relieve emotional pressure.
*   **Establish Boundaries:** Learn to say no to excessive demands. Prioritize tasks and break large projects into smaller, manageable steps.
*   **Connect with Professional Care:** If you experience persistent feelings of sadness, anxiety, or overwhelm that interfere with daily life, reach out to a licensed counselor, therapist, or doctor. There is strength in seeking help.`,

  firstaid: `### 🩹 Basic First-Aid Awareness

Knowing basic first aid can prevent minor injuries from worsening and help handle minor household emergencies.

*   **Minor Burns (thermal):** Hold the burned area under cool (not ice-cold) running water for 10 to 15 minutes. This reduces pain and swelling. Cover with a sterile, non-stick bandage. Do not apply butter, oil, or ice to the burn.
*   **Minor Cuts and Scrapes:** Wash the area gently with mild soap and clean water to remove dirt. Apply a thin layer of petroleum jelly or antibiotic ointment to keep the skin moist, and cover with a clean adhesive bandage.
*   **Nosebleeds:** Sit upright and lean slightly *forward* (do not tilt your head back, as this causes blood to flow down your throat). Pinch the soft part of your nose just below the bony bridge for 10 minutes, breathing through your mouth.
*   **Sprains (R.I.C.E. method):**
    *   **R**est the injured limb.
    *   **I**ce the area for 15-20 minutes at a time.
    *   **C**ompress with an elastic bandage.
    *   **E**levate the limb above the heart.

*Crucial: For deep wounds, severe burns, head injuries, poisoning, or suspected fractures, immediately contact emergency medical services.*`,

  hygiene: `### 🧼 Personal Hygiene Guidelines

Good personal hygiene helps prevent infectious diseases (like the cold, flu, and stomach viruses) and supports overall skin and oral health.

*   **Handwashing (The Gold Standard):** Wash your hands frequently with soap and clean water for at least **20 seconds**. Rub hands together, scrubbing the backs, between fingers, and under nails. Always wash hands before preparing food, before eating, and after using the restroom, coughing, or touching trash.
*   **Oral Health:** Brush your teeth at least twice a day using fluoride toothpaste, and floss daily. This prevents plaque buildup, gum disease, and tooth decay. Replace your toothbrush every 3-4 months.
*   **Respiratory Etiquette:** Cover your mouth and nose with a tissue or your inner elbow when coughing or sneezing. Immediately discard used tissues and wash your hands.
*   **Skin and Body Care:** Shower or bathe regularly to wash away sweat, oil, and dead skin cells. Keep cuts clean and covered to prevent infection.`,

  preventive: `### 🩺 Preventive Healthcare & Screenings

Preventive healthcare focuses on taking proactive measures to prevent illness, detect diseases early when they are easiest to treat, and manage health risks.

*   **Routine Check-ups:** Schedule annual wellness visits with a primary care physician to monitor blood pressure, weight, and general health status.
*   **Vaccinations:** Keep your immunizations up to date. Vaccines (such as the annual flu shot, tetanus boosters, and others) protect you and your community from preventable infectious diseases.
*   **Key Health Screenings:**
    *   **Blood Pressure:** Checked regularly (at least once every two years for healthy adults). High blood pressure has no symptoms but increases heart disease risk.
    *   **Cholesterol:** A simple blood test starting in young adulthood to screen for cardiovascular disease risks.
    *   **Blood Glucose:** Screenings to check for prediabetes or diabetes, especially if you have risk factors.
*   **Self-Examinations:** Pay attention to your body. Perform routine checks (like monitoring skin moles for changes in shape, size, or color) and report anomalies to your doctor.`,

  disease: `### 🧬 Understanding Lifestyle Diseases

Lifestyle diseases (non-communicable diseases) are conditions that are heavily influenced by daily habits, environment, and genetics. Common examples include cardiovascular disease, Type 2 diabetes, hypertension, and certain cancers.

*   **Hypertension (High Blood Pressure):** Often called the "silent killer" because it has no obvious symptoms. It damages arteries and increases the risk of stroke and heart attack. Lowering sodium, exercising, and managing stress help manage it.
*   **Type 2 Diabetes:** Characterized by high blood sugar levels due to insulin resistance. Prevention and management involve a fiber-rich diet, weight control, and staying physically active.
*   **Cardiovascular Disease:** Refers to conditions affecting the heart or blood vessels. Maintaining healthy cholesterol, regular cardio exercise, and avoiding tobacco are major preventive factors.
*   **Key Risk Factors to Address:**
    1.  **Tobacco Use:** Smoking damages blood vessels and is a leading cause of cancer and heart disease.
    2.  **Unhealthy Diet:** Diets high in trans fats, refined sugars, and ultra-processed foods.
    3.  **Physical Inactivity:** A sedentary lifestyle.
    4.  **Excessive Alcohol Consumption:** Can lead to high blood pressure, liver damage, and heart issues.`,

  general: `Thank you for your question. As your Health Awareness Assistant, I want to provide you with helpful educational information. 

While I don't have a specific response tailored to your query, here are some core pillars of maintaining healthy habits and general wellness:
*   **Hydration:** Drink 8-10 glasses of water daily.
*   **Nutrition:** Choose whole foods, fiber, and lean proteins, while minimizing processed sugars.
*   **Activity:** Aim for 150 minutes of moderate aerobic exercise weekly.
*   **Sleep:** Strive for 7-9 hours of restful sleep each night.
*   **Prevention:** Schedule regular wellness exams and keep up with vaccinations.

If you are experiencing specific physical symptoms or discomfort, please monitor them closely. I encourage you to consult a licensed medical professional for personalized advice, diagnostic evaluations, or treatment plans.`,

  headache: `### 🤕 Understanding Headaches

Headaches are extremely common and can have various causes, ranging from tension to dehydration.

*   **Common Types:**
    *   **Tension Headaches:** Usually feel like a tight band around the head. Often triggered by stress, muscle tension, fatigue, or eye strain.
    *   **Dehydration Headaches:** Occur when the body lacks fluids. Drinking water and resting often resolves these.
    *   **Migraines:** Intense throbbing pain, usually on one side of the head, sometimes accompanied by nausea, vomiting, or sensitivity to light and sound.
*   **Basic Educational Self-Care Tips (for mild headaches):**
    *   Drink a full glass of water (hydration check).
    *   Rest in a quiet, dark, well-ventilated room.
    *   Apply a cool compress to your forehead or the back of your neck.
    *   Avoid prolonged screen time.

*Warning: If your headache is sudden, severe (often described as the "worst headache of your life"), accompanied by fever, stiff neck, confusion, seizure, double vision, or weakness/numbness, seek emergency medical care immediately.*`,

  fever: `### 🤒 Understanding Fevers

A fever is a temporary increase in body temperature, often due to an immune response to an illness or infection.

*   **What is a Fever:** For adults, a body temperature of **100.4°F (38°C)** or higher is generally considered a fever.
*   **Purpose:** A fever is not an illness itself, but rather a sign that your body is fighting off a virus or bacteria.
*   **Basic Support Measures (for mild fevers):**
    *   **Stay Hydrated:** Drink plenty of fluids (water, clear broths, herbal teas) to prevent dehydration.
    *   **Rest:** Allow your body to use its energy to fight the infection.
    *   **Dress Lightly:** Wear lightweight clothing and use a light blanket to avoid trapping heat.
    *   **Cool Sponge Baths:** Lukewarm (not cold) water can help reduce discomfort.

*Critical Advice: Consult a doctor if an adult's temperature exceeds 103°F (39.4°C), if the fever lasts longer than 3 days, or if it is accompanied by severe headache, difficulty breathing, chest pain, stiff neck, confusion, or rash.*`,

  stomach: `### 🤢 Understanding Stomach Discomfort

Stomach aches, bloating, and mild nausea are common issues that can result from indigestion, food intolerances, gas, or mild viral infections (stomach flu).

*   **Self-Care Guidelines for Mild Discomfort:**
    *   **Stay Hydrated:** This is crucial if experiencing diarrhea or vomiting. Sip water, clear broths, or oral rehydration solutions slowly.
    *   **B.R.A.T. Diet:** When ready to eat, stick to bland foods: **B**ananas, **R**ice, **A**pplesauce, and **T**oast.
    *   **Avoid Irritants:** Steer clear of dairy products, spicy foods, fatty/fried foods, caffeine, and alcohol until you feel better.
    *   **Gentle Movement:** A slow walk can sometimes help relieve gas or bloating.

*When to see a doctor: Seek immediate medical attention if you experience severe, sudden, or localized abdominal pain, persistent vomiting (unable to keep fluids down for 24 hours), high fever, bloody stools, or signs of severe dehydration (extreme thirst, little to no urine, dizziness).*`,

  cough: `### 🤧 Managing Common Colds, Flu, and Sore Throats

Colds and flu are viral upper respiratory infections. While they resolve on their own for most healthy people, they can cause significant discomfort.

*   **Key Differences:** Colds build up gradually and are usually mild (runny nose, congestion). The flu (influenza) hits suddenly and is more intense, often accompanied by high fever, body aches, chills, and fatigue.
*   **General Self-Care Tips:**
    *   **Rest:** Give your body the time and energy it needs to heal.
    *   **Fluids:** Drink water, warm tea (with honey for cough relief in adults), and clear broths.
    *   **Soothe a Sore Throat:** Gargle with warm salt water (1/2 teaspoon of salt in a glass of warm water) several times a day.
    *   **Humidify:** Use a cool-mist humidifier or take a steamy shower to help loosen chest and nasal congestion.

*Important Note: Antibiotics do NOT work against viral infections like colds and flu. Consult a doctor if you experience difficulty breathing, persistent high fever, chest pressure, blue lips, or if symptoms improve but then return worse.*`
};

// Hindi fallbacks
const HINDI_FALLBACK_RESPONSES = {
  eat: `### 🥗 स्वस्थ भोजन और पोषण

संतुलित आहार आपके शरीर को सही ढंग से काम करने के लिए आवश्यक पोषक तत्व प्रदान करता है:

* **साबुत अनाज खाएं:** ओट्स, ब्राउन राइस, दालें और रोटी को प्राथमिकता दें।
* **सब्जियाँ और फल:** अपनी थाली का आधा हिस्सा रंगीन सब्जियों और फलों से भरें।
* **चीनी और नमक कम करें:** मीठे पेय, प्रसंस्कृत खाद्य पदार्थ और जंक फूड से बचें।
* **पानी पिएं:** दिन में 8-10 गिलास पानी पिएं।

*याद रखें: व्यक्तिगत पोषण संबंधी जरूरतें उम्र, लिंग और स्वास्थ्य स्थिति के अनुसार भिन्न होती हैं। व्यक्तिगत सलाह के लिए डाइटीशियन से परामर्श करें।*`,

  exercise: `### 🏃‍♂️ शारीरिक गतिविधि और फिटनेस

नियमित व्यायाम आपके स्वास्थ्य के लिए अत्यंत महत्वपूर्ण है:

* **साप्ताहिक लक्ष्य:** प्रति सप्ताह कम से कम 150 मिनट मध्यम तीव्रता का व्यायाम करें।
* **शक्ति प्रशिक्षण:** सप्ताह में 2 दिन मांसपेशियों को मजबूत करने वाले व्यायाम करें।
* **बैठने का समय कम करें:** हर घंटे 5 मिनट के लिए उठकर चलें।
* **छोटी शुरुआत करें:** रोज 10-15 मिनट पैदल चलने से शुरू करें।

*नोट: किसी भी नए व्यायाम कार्यक्रम से पहले अपने चिकित्सक से परामर्श करें।*`,

  sleep: `### 😴 नींद में सुधार के उपाय

अच्छी नींद शारीरिक और मानसिक स्वास्थ्य दोनों के लिए आवश्यक है:

1. **नियमित समय:** हर दिन एक ही समय पर सोएं और उठें।
2. **वातावरण:** कमरे को अंधेरा, शांत और ठंडा रखें।
3. **स्क्रीन बंद करें:** सोने से 30-60 मिनट पहले मोबाइल और टीवी बंद करें।
4. **कैफीन से बचें:** शाम को चाय, कॉफी और शराब से बचें।

*अगर लगातार नींद न आने की समस्या हो तो डॉक्टर से मिलें।*`,

  hydration: `### 💧 जलयोजन (हाइड्रेशन)

पानी आपके शरीर के हर कार्य के लिए आवश्यक है:

* **रोज 8-10 गिलास पानी पिएं।**
* **व्यायाम से पहले और बाद में अतिरिक्त पानी पिएं।**
* **फलों और सब्जियों से भी पानी मिलता है** — तरबूज, खीरा, संतरा।
* **डिहाइड्रेशन के लक्षण:** सिरदर्द, थकान, गहरे रंग का पेशाब।

*पेशाब का हल्का पीला रंग अच्छे हाइड्रेशन का संकेत है।*`,

  stress: `### 🧘‍♀️ तनाव प्रबंधन और मानसिक स्वास्थ्य

मानसिक स्वास्थ्य शारीरिक स्वास्थ्य जितना ही महत्वपूर्ण है:

* **गहरी सांस लें:** 4-7-8 तकनीक — 4 सेकंड सांस लें, 7 सेकंड रोकें, 8 सेकंड छोड़ें।
* **व्यायाम करें:** शारीरिक गतिविधि तनाव हार्मोन को कम करती है।
* **पर्याप्त नींद लें:** 7-9 घंटे की नींद तनाव कम करने में मदद करती है।
* **बात करें:** अपनी भावनाओं को परिवार या दोस्तों से साझा करें।

*गंभीर तनाव या चिंता होने पर मानसिक स्वास्थ्य विशेषज्ञ से मिलें।*`,

  general: `आपके प्रश्न के लिए धन्यवाद। स्वस्थ जीवन के मूल सिद्धांत:

* **जलयोजन:** रोज 8-10 गिलास पानी पिएं।
* **पोषण:** साबुत अनाज, फल, सब्जियाँ और प्रोटीन खाएं।
* **व्यायाम:** सप्ताह में 150 मिनट मध्यम व्यायाम करें।
* **नींद:** 7-9 घंटे की अच्छी नींद लें।
* **जांच:** नियमित स्वास्थ्य जांच कराएं।

*विशिष्ट लक्षणों के लिए कृपया चिकित्सक से परामर्श करें।*`
};

const healthTips = [
  "**Health Tip:** Try to walk for 10-15 minutes after your meals. It improves digestion, helps stabilize blood sugar, and adds steps to your day.",
  "**Health Tip:** Swap one sugary drink (soda, sweet tea, energy drink) today with a glass of water. Small cutbacks in added sugars have massive long-term benefits for metabolic health.",
  "**Health Tip:** Practice the 20-20-20 rule for eye health if you work on a screen. Every 20 minutes, look at something at least 20 feet away for 20 seconds to reduce eye strain.",
  "**Health Tip:** Add an extra serving of vegetables to your lunch or dinner today. Vegetables are packed with vital fiber, vitamins, and minerals that nourish your gut microbiome.",
  "**Health Tip:** Take 5 deep breaths right now. Inhale slowly through your nose, hold briefly, and let it go. This simple practice helps calm the nervous system and lower cortisol.",
  "**Health Tip:** Establish a 'screen-free hour' before bed tonight. Instead of scrolling, read a physical book, write in a journal, or stretch. You will likely fall asleep faster and sleep deeper."
];

function getLocalResponse(message) {
  const msgLower = message.toLowerCase();

  if (isEmergency(message)) {
    return FALLBACK_RESPONSES.emergency;
  }

  if (containsWordRoot(msgLower, ['eat', 'diet', 'food', 'nutrition', 'meal'])) {
    return FALLBACK_RESPONSES.eat;
  }
  if (containsWordRoot(msgLower, ['exercise', 'fitness', 'workout', 'sport', 'walk', 'run'])) {
    return FALLBACK_RESPONSES.exercise;
  }
  if (containsWordRoot(msgLower, ['sleep', 'insomnia', 'tired', 'bedtime', 'rest'])) {
    return FALLBACK_RESPONSES.sleep;
  }
  if (containsWordRoot(msgLower, ['hydrate', 'hydration', 'water', 'drink'])) {
    return FALLBACK_RESPONSES.hydration;
  }
  if (containsWordRoot(msgLower, ['stress', 'anxiety', 'mental', 'wellness', 'calm', 'relax', 'meditate'])) {
    return FALLBACK_RESPONSES.stress;
  }
  if (containsWordRoot(msgLower, ['first aid', 'burn', 'cut', 'wound', 'bleed', 'choking'])) {
    return FALLBACK_RESPONSES.firstaid;
  }
  if (containsWordRoot(msgLower, ['hygiene', 'wash', 'teeth', 'brush', 'clean'])) {
    return FALLBACK_RESPONSES.hygiene;
  }
  if (containsWordRoot(msgLower, ['preventive', 'vaccine', 'checkup', 'screening', 'test'])) {
    return FALLBACK_RESPONSES.preventive;
  }
  if (containsWordRoot(msgLower, ['disease', 'diabetes', 'hypertension', 'heart', 'cancer', 'obesity', 'cholesterol'])) {
    return FALLBACK_RESPONSES.disease;
  }
  if (containsWordRoot(msgLower, ['headache', 'migraine'])) {
    return FALLBACK_RESPONSES.headache;
  }
  if (containsWordRoot(msgLower, ['fever', 'temperature', 'hot'])) {
    return FALLBACK_RESPONSES.fever;
  }
  if (containsWordRoot(msgLower, ['stomach', 'nausea', 'diarrhea', 'vomit', 'belly', 'indigestion'])) {
    return FALLBACK_RESPONSES.stomach;
  }
  if (containsWordRoot(msgLower, ['cough', 'cold', 'flu', 'sore throat', 'congestion', 'runny nose'])) {
    return FALLBACK_RESPONSES.cough;
  }

  if (containsWordRoot(msgLower, ['tip', 'daily', 'hello', 'hi', 'hey', 'help'])) {
    if (msgLower.includes('tip')) {
      const randTip = healthTips[Math.floor(Math.random() * healthTips.length)];
      return `Here is a daily tip for you:\n\n${randTip}`;
    }
    return `Hello! I am your **Health Awareness Assistant**. 

I can provide educational information, tips, and guidelines on various wellness topics. How can I help you today? You can ask me about:
*   **Nutrition:** Tips on healthy eating and diets.
*   **Exercise:** Fitness guidelines and physical activity.
*   **Sleep:** Ideas to improve your sleep hygiene.
*   **Hydration:** Hydration guidelines and checkmarks.
*   **Stress Management:** Mental wellness and mindfulness exercises.
*   **First-Aid:** Basic protocols for minor cuts, burns, or nosebleeds.
*   **Hygiene & Prevention:** Habits for immune support and regular screenings.
*   **Lifestyle Diseases:** Information on conditions like diabetes or high blood pressure.

*Please ask a question, or say **"Give me a tip"** for a quick healthy habit reminder!*`;
  }

  return FALLBACK_RESPONSES.general;
}

function getHindiFallback(message) {
  const msgLower = message.toLowerCase();
  if (containsWordRoot(msgLower, ['eat', 'diet', 'food', 'nutrition', 'meal', 'खाना', 'भोजन', 'पोषण', 'आहार'])) {
    return HINDI_FALLBACK_RESPONSES.eat;
  }
  if (containsWordRoot(msgLower, ['exercise', 'fitness', 'workout', 'walk', 'run', 'व्यायाम', 'कसरत', 'फिटनेस', 'योग'])) {
    return HINDI_FALLBACK_RESPONSES.exercise;
  }
  if (containsWordRoot(msgLower, ['sleep', 'insomnia', 'tired', 'rest', 'नींद', 'सोना', 'आराम', 'थकान'])) {
    return HINDI_FALLBACK_RESPONSES.sleep;
  }
  if (containsWordRoot(msgLower, ['water', 'hydrat', 'drink', 'fluid', 'पानी', 'जल', 'पीना'])) {
    return HINDI_FALLBACK_RESPONSES.hydration;
  }
  if (containsWordRoot(msgLower, ['stress', 'anxiety', 'mental', 'meditat', 'relax', 'depress', 'तनाव', 'चिंता', 'मानसिक', 'ध्यान'])) {
    return HINDI_FALLBACK_RESPONSES.stress;
  }
  return HINDI_FALLBACK_RESPONSES.general;
}

async function getChatbotResponse(userMessage, conversationHistory = [], lang = 'en') {
  const refusalEn = "I am a Health Awareness Assistant and can only help with health, wellness, fitness, hygiene, mental wellness, healthy lifestyle, and preventive healthcare topics. Please ask a health-related question.";
  const refusalHi = "मैं एक स्वास्थ्य जागरूकता सहायक हूँ और केवल स्वास्थ्य, कल्याण, फिटनेस, स्वच्छता, मानसिक स्वास्थ्य, स्वस्थ जीवनशैली और निवारक स्वास्थ्य विषयों में मदद कर सकता हूँ। कृपया स्वास्थ्य से संबंधित प्रश्न पूछें.";
  const refusalMessage = lang === 'hi' ? refusalHi : refusalEn;

  // 1. Enforce strict topic filtering
  if (isBlacklisted(userMessage) || !isHealthRelated(userMessage)) {
    return refusalMessage;
  }

  const disclaimerEn = "\n\n*Disclaimer: I am an AI Health Awareness Assistant. The information provided here is for educational and informational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. If you think you may have a medical emergency, call your doctor or local emergency services immediately.*";
  const disclaimerHi = "\n\n*अस्वीकरण: मैं एक AI स्वास्थ्य जागरूकता सहायक हूँ। यहाँ दी गई जानकारी केवल शैक्षिक और सूचनात्मक उद्देश्यों के लिए है। यह पेशेवर चिकित्सा सलाह, निदान या उपचार का विकल्प नहीं है। किसी भी चिकित्सा स्थिति के बारे में अपने चिकित्सक से परामर्श करें। आपातकाल में तुरंत 112 पर कॉल करें।*";
  const disclaimerText = lang === 'hi' ? disclaimerHi : disclaimerEn;

  // 2. Intercept emergencies locally
  if (isEmergency(userMessage)) {
    return getLocalResponse(userMessage) + disclaimerText;
  }

  // 3. Gemini SDK execution path
  if (model) {
    try {
      // Map prior DB history to Gemini SDK format
      const apiHistory = [];
      const recentHistory = conversationHistory.slice(-10);

      for (const msg of recentHistory) {
        const role = msg.sender === 'user' ? 'user' : 'model';
        apiHistory.push({
          role: role,
          parts: [{ text: msg.text }]
        });
      }

      let query = userMessage;
      if (lang === 'hi') {
        query += '\n\n[IMPORTANT: Respond entirely in Hindi (हिन्दी). Use Devanagari script.]';
      }

      const chat = model.startChat({ history: apiHistory });
      const result = await chat.sendMessage(query);
      let replyText = result.response.text();

      // Enforce disclaimer addition
      const lowerReply = replyText.toLowerCase();
      if (!lowerReply.includes('disclaimer') && 
          !lowerReply.includes('substitute') && 
          !lowerReply.includes('medical professional') && 
          !replyText.includes('अस्वीकरण') && 
          !replyText.includes('चिकित्सक')) {
        replyText += disclaimerText;
      }

      return replyText;
    } catch (err) {
      console.error('Gemini API query failed:', err, 'Falling back to local response.');
      if (lang === 'hi') {
        return getHindiFallback(userMessage) + disclaimerText;
      }
      return getLocalResponse(userMessage) + disclaimerText;
    }
  }

  // 4. Local Fallback path
  if (lang === 'hi') {
    return getHindiFallback(userMessage) + disclaimerText;
  }
  return getLocalResponse(userMessage) + disclaimerText;
}

module.exports = {
  getChatbotResponse,
  isEmergency,
  isBlacklisted,
  isHealthRelated
};
