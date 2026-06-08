const FALLBACK_RESPONSES = {
  emergency: `🚨 **IMMEDIATE MEDICAL ATTENTION REQUIRED** 🚨\n\nIf you or someone you are with is experiencing severe chest pain, extreme difficulty breathing, sudden weakness or numbness (especially on one side of the body), heavy bleeding, or loss of consciousness, please **call your local emergency services (e.g., 911, 999, 112) or go to the nearest emergency room immediately.**\n\nDo not wait or try to self-treat. These symptoms can be life-threatening and require immediate evaluation by trained medical professionals.`,
  eat: `### 🥗 Healthy Eating & Nutrition Tips\n\nA balanced diet provides the nutrients your body needs to function correctly. Here are basic principles for maintaining a healthy diet:\n\n*   **Prioritize Whole Foods:** Focus on eating whole, unprocessed foods like vegetables, fruits, whole grains (oats, brown rice, quinoa), lean proteins (poultry, fish, beans, tofu), and healthy fats (avocados, nuts, olive oil).\n*   **Fill Half Your Plate:** Try to make half of your main meals consist of colorful vegetables and fruits. Different colors represent different vitamins, minerals, and antioxidants.\n*   **Limit Added Sugars & Sodium:** Minimize consumption of sugary sodas, processed snacks, fast foods, and baked goods. Excess sugar and sodium are linked to chronic conditions like heart disease and Type 2 diabetes.\n*   **Watch Portion Sizes:** Pay attention to hunger and fullness cues. Eating mindfully without distractions helps prevent overeating.\n\n*Remember: Individual nutritional needs vary based on age, gender, activity level, and health status. Consult a registered dietitian for personalized advice.*`,
  exercise: `### 🏃‍♂️ Physical Activity & Fitness Guidelines\n\nRegular physical activity is one of the most important things you can do for your health. It benefits your heart, mind, and sleep.\n\n*   **Weekly Goal:** For adults, the World Health Organization recommends at least **150 minutes of moderate-intensity** aerobic activity (like brisk walking, cycling, or swimming) or **75 minutes of vigorous-intensity** activity (like running or aerobics) per week.\n*   **Strength Training:** Incorporate muscle-strengthening activities (like weight lifting, bodyweight exercises, or resistance bands) that work all major muscle groups on **2 or more days a week**.\n*   **Reduce Sedentary Time:** If you work at a desk, stand up and stretch for 5 minutes every hour. Walking just 10–15 minutes after meals can significantly benefit digestion and blood sugar management.\n*   **Start Small:** If you are new to exercise, start with 5–10 minutes of walking daily and gradually build up your duration and intensity.\n\n*Note: Always listen to your body. If you have underlying health conditions, consult a physician before starting a new strenuous exercise regimen.*`,
  sleep: `### 😴 Sleep Hygiene Improvement\n\nGood sleep is critical for physical recovery, cognitive function, and emotional well-being. Most adults require 7 to 9 hours of quality sleep per night.\n\nHere are key tips to improve your sleep quality:\n1.  **Maintain a Consistent Schedule:** Go to bed and wake up at the same time every day, even on weekends. This stabilizes your internal body clock.\n2.  **Optimize Your Environment:** Keep your bedroom dark, quiet, and cool (ideally around 60-67°F or 15-19°C). Consider blackout curtains or a white noise machine.\n3.  **Digital Detox:** Turn off screens (phones, tablets, TVs) at least 30–60 minutes before bedtime. The blue light emitted by screens suppresses melatonin, the hormone that triggers sleep.\n4.  **Watch what you Consume:** Avoid heavy meals, caffeine, and alcohol close to bedtime. While alcohol can make you feel drowsy, it disrupts deep sleep cycles.\n5.  **Wind Down:** Establish a relaxing pre-sleep routine, such as reading a book, taking a warm bath, or practicing deep breathing.`,
  hydration: `### 💧 Hydration & Water Intake Guidelines\n\nWater makes up about 60% of the human body and is vital for temperature regulation, joint lubrication, nutrient transport, and organ function.\n\n*   **Daily Recommendation:** While needs vary, a standard general guideline is about **8 to 10 cups (approx. 2 to 2.5 liters) of water daily** for adults.\n*   **Listen to Your Body:** Drink when you feel thirsty. You may need more water if you are exercising, in hot weather, pregnant, breastfeeding, or recovering from an illness (such as fever or diarrhea).\n*   **Urine Check:** A simple way to monitor hydration is by checking the color of your urine. A pale, straw-like yellow color indicates good hydration. Dark yellow or amber indicates you need to drink more water.\n*   **Hydration Tips:**\n    *   Keep a reusable water bottle with you.\n    *   Set reminders on your phone or use a tracker.\n    *   If you find plain water boring, infuse it with fresh cucumber, lemon slices, or mint.`,
  stress: `### 🧘‍♀️ Stress Management & Mental Wellness\n\nTaking care of your mental and emotional health is just as important as maintaining physical health. Chronic stress can weaken the immune system and increase the risk of heart problems.\n\nHere are practical habits to support mental wellness:\n*   **Deep Breathing Practice:** When stressed, try the **4-7-8 breathing method**. Inhale through your nose for 4 seconds, hold your breath for 7 seconds, and exhale slowly through your mouth for 8 seconds. Repeat 4 times.\n*   **Mindfulness & Meditation:** Even 5 minutes of quiet reflection or guided meditation daily can help center your thoughts and reduce anxiety.\n*   **Stay Connected:** Talk to friends, family, or support groups. Sharing your thoughts and feelings with people who care can relieve emotional pressure.\n*   **Establish Boundaries:** Learn to say no to excessive demands. Prioritize tasks and break large projects into smaller, manageable steps.\n*   **Connect with Professional Care:** If you experience persistent feelings of sadness, anxiety, or overwhelm that interfere with daily life, reach out to a licensed counselor, therapist, or doctor. There is strength in seeking help.`,
  firstaid: `### 🩹 Basic First-Aid Awareness\n\nKnowing basic first aid can prevent minor injuries from worsening and help handle minor household emergencies.\n\n*   **Minor Burns (thermal):** Hold the burned area under cool (not ice-cold) running water for 10 to 15 minutes. This reduces pain and swelling. Cover with a sterile, non-stick bandage. Do not apply butter, oil, or ice to the burn.\n*   **Minor Cuts and Scrapes:** Wash the area gently with mild soap and clean water to remove dirt. Apply a thin layer of petroleum jelly or antibiotic ointment to keep the skin moist, and cover with a clean adhesive bandage.\n*   **Nosebleeds:** Sit upright and lean slightly *forward* (do not tilt your head back, as this causes blood to flow down your throat). Pinch the soft part of your nose just below the bony bridge for 10 minutes, breathing through your mouth.\n*   **Sprains (R.I.C.E. method):**\n    *   **R**est the injured limb.\n    *   **I**ce the area for 15-20 minutes at a time.\n    *   **C**ompress with an elastic bandage.\n    *   **E**levate the limb above the heart.\n\n*Crucial: For deep wounds, severe burns, head injuries, poisoning, or suspected fractures, immediately contact emergency medical services.*`,
  hygiene: `### 🧼 Personal Hygiene Guidelines\n\nGood personal hygiene helps prevent infectious diseases (like the cold, flu, and stomach viruses) and supports overall skin and oral health.\n\n*   **Handwashing (The Gold Standard):** Wash your hands frequently with soap and clean water for at least **20 seconds**. Rub hands together, scrubbing the backs, between fingers, and under nails. Always wash hands before preparing food, before eating, and after using the restroom, coughing, or touching trash.\n*   **Oral Health:** Brush your teeth at least twice a day using fluoride toothpaste, and floss daily. This prevents plaque buildup, gum disease, and tooth decay. Replace your toothbrush every 3-4 months.\n*   **Respiratory Etiquette:** Cover your mouth and nose with a tissue or your inner elbow when coughing or sneezing. Immediately discard used tissues and wash your hands.\n*   **Skin and Body Care:** Shower or bathe regularly to wash away sweat, oil, and dead skin cells. Keep cuts clean and covered to prevent infection.`,
  preventive: `### 🩺 Preventive Healthcare & Screenings\n\nPreventive healthcare focuses on taking proactive measures to prevent illness, detect diseases early when they are easiest to treat, and manage health risks.\n\n*   **Routine Check-ups:** Schedule annual wellness visits with a primary care physician to monitor blood pressure, weight, and general health status.\n*   **Vaccinations:** Keep your immunizations up to date. Vaccines (such as the annual flu shot, tetanus boosters, and others) protect you and your community from preventable infectious diseases.\n*   **Key Health Screenings:**\n    *   **Blood Pressure:** Checked regularly (at least once every two years for healthy adults). High blood pressure has no symptoms but increases heart disease risk.\n    *   **Cholesterol:** A simple blood test starting in young adulthood to screen for cardiovascular disease risks.\n    *   **Blood Glucose:** Screenings to check for prediabetes or diabetes, especially if you have risk factors.\n*   **Self-Examinations:** Pay attention to your body. Perform routine checks (like monitoring skin moles for changes in shape, size, or color) and report anomalies to your doctor.`,
  disease: `### 🧬 Understanding Lifestyle Diseases\n\nLifestyle diseases (non-communicable diseases) are conditions that are heavily influenced by daily habits, environment, and genetics. Common examples include cardiovascular disease, Type 2 diabetes, hypertension, and certain cancers.\n\n*   **Hypertension (High Blood Pressure):** Often called the "silent killer" because it has no obvious symptoms. It damages arteries and increases the risk of stroke and heart attack. Lowering sodium, exercising, and managing stress help manage it.\n*   **Type 2 Diabetes:** Characterized by high blood sugar levels due to insulin resistance. Prevention and management involve a fiber-rich diet, weight control, and staying physically active.\n*   **Cardiovascular Disease:** Refers to conditions affecting the heart or blood vessels. Maintaining healthy cholesterol, regular cardio exercise, and avoiding tobacco are major preventive factors.\n*   **Key Risk Factors to Address:**\n    1.  **Tobacco Use:** Smoking damages blood vessels and is a leading cause of cancer and heart disease.\n    2.  **Unhealthy Diet:** Diets high in trans fats, refined sugars, and ultra-processed foods.\n    3.  **Physical Inactivity:** A sedentary lifestyle.\n    4.  **Excessive Alcohol Consumption:** Can lead to high blood pressure, liver damage, and heart issues.`,
  general: `Thank you for your question. As your Health Awareness Assistant, I want to provide you with helpful educational information. \n\nWhile I don't have a specific response tailored to your query, here are some core pillars of maintaining healthy habits and general wellness:\n*   **Hydration:** Drink 8-10 glasses of water daily.\n*   **Nutrition:** Choose whole foods, fiber, and lean proteins, while minimizing processed sugars.\n*   **Activity:** Aim for 150 minutes of moderate aerobic exercise weekly.\n*   **Sleep:** Strive for 7-9 hours of restful sleep each night.\n*   **Prevention:** Schedule regular wellness exams and keep up with vaccinations.\n\nIf you are experiencing specific physical symptoms or discomfort, please monitor them closely. I encourage you to consult a licensed medical professional for personalized advice, diagnostic evaluations, or treatment plans.`,
  headache: `### 🤕 Understanding Headaches\n\nHeadaches are extremely common and can have various causes, ranging from tension to dehydration.\n\n*   **Common Types:**\n    *   **Tension Headaches:** Usually feel like a tight band around the head. Often triggered by stress, muscle tension, fatigue, or eye strain.\n    *   **Dehydration Headaches:** Occur when the body lacks fluids. Drinking water and resting often resolves these.\n    *   **Migraines:** Intense throbbing pain, usually on one side of the head, sometimes accompanied by nausea, vomiting, or sensitivity to light and sound.\n*   **Basic Educational Self-Care Tips (for mild headaches):**\n    *   Drink a full glass of water (hydration check).\n    *   Rest in a quiet, dark, well-ventilated room.\n    *   Apply a cool compress to your forehead or the back of your neck.\n    *   Avoid prolonged screen time.\n\n*Warning: If your headache is sudden, severe (often described as the "worst headache of your life"), accompanied by fever, stiff neck, confusion, seizure, double vision, or weakness/numbness, seek emergency medical care immediately.*`,
  fever: `### 🤒 Understanding Fevers\n\nA fever is a temporary increase in body temperature, often due to an immune response to an illness or infection.\n\n*   **What is a Fever:** For adults, a body temperature of **100.4°F (38°C)** or higher is generally considered a fever.\n*   **Purpose:** A fever is not an illness itself, but rather a sign that your body is fighting off a virus or bacteria.\n*   **Basic Support Measures (for mild fevers):**\n    *   **Stay Hydrated:** Drink plenty of fluids (water, clear broths, herbal teas) to prevent dehydration.\n    *   **Rest:** Allow your body to use its energy to fight the infection.\n    *   **Dress Lightly:** Wear lightweight clothing and use a light blanket to avoid trapping heat.\n    *   **Cool Sponge Baths:** Lukewarm (not cold) water can help reduce discomfort.\n\n*Critical Advice: Consult a doctor if an adult's temperature exceeds 103°F (39.4°C), if the fever lasts longer than 3 days, or if it is accompanied by severe headache, difficulty breathing, chest pain, stiff neck, confusion, or rash.*`,
  stomach: `### 🤢 Understanding Stomach Discomfort\n\nStomach aches, bloating, and mild nausea are common issues that can result from indigestion, food intolerances, gas, or mild viral infections (stomach flu).\n\n*   **Self-Care Guidelines for Mild Discomfort:**\n    *   **Stay Hydrated:** This is crucial if experiencing diarrhea or vomiting. Sip water, clear broths, or oral rehydration solutions slowly.\n    *   **B.R.A.T. Diet:** When ready to eat, stick to bland foods: **B**ananas, **R**ice, **A**pplesauce, and **T**oast.\n    *   **Avoid Irritants:** Steer clear of dairy products, spicy foods, fatty/fried foods, caffeine, and alcohol until you feel better.\n    *   **Gentle Movement:** A slow walk can sometimes help relieve gas or bloating.\n\n*When to see a doctor: Seek immediate medical attention if you experience severe, sudden, or localized abdominal pain, persistent vomiting (unable to keep fluids down for 24 hours), high fever, bloody stools, or signs of severe dehydration (extreme thirst, little to no urine, dizziness).*`,
  cough: `### 🤧 Managing Common Colds, Flu, and Sore Throats\n\nColds and flu are viral upper respiratory infections. While they resolve on their own for most healthy people, they can cause significant discomfort.\n\n*   **Key Differences:** Colds build up gradually and are usually mild (runny nose, congestion). The flu (influenza) hits suddenly and is more intense, often accompanied by high fever, body aches, chills, and fatigue.\n*   **General Self-Care Tips:**\n    *   **Rest:** Give your body the time and energy it needs to heal.\n    *   **Fluids:** Drink water, warm tea (with honey for cough relief in adults), and clear broths.\n    *   **Soothe a Sore Throat:** Gargle with warm salt water (1/2 teaspoon of salt in a glass of warm water) several times a day.\n    *   **Humidify:** Use a cool-mist humidifier or take a steamy shower to help loosen chest and nasal congestion.\n\n*Important Note: Antibiotics do NOT work against viral infections like colds and flu. Consult a doctor if you experience difficulty breathing, persistent high fever, chest pressure, blue lips, or if symptoms improve but then return worse.*`
};

const HINDI_FALLBACK_RESPONSES = {
  eat: `### 🥗 स्वस्थ भोजन और पोषण\n\nसंतुलित आहार आपके शरीर को सही ढंग से काम करने के लिए आवश्यक पोषक तत्व प्रदान करता है:\n\n* **साबुत अनाज खाएं:** ओट्स, ब्राउन राइस, दालें और रोटी को प्राथमिकता दें।\n* **सब्जियाँ और फल:** अपनी थाली का आधा हिस्सा रंगीन सब्जियों और फलों से भरें।\n* **चीनी और नमक कम करें:** मीठे पेय, प्रसंस्कृत खाद्य पदार्थ और जंक फूड से बचें।\n* **पानी पिएं:** दिन में 8-10 गिलास पानी पिएं।\n\n*याद रखें: व्यक्तिगत पोषण संबंधी जरूरतें उम्र, लिंग और स्वास्थ्य स्थिति के अनुसार भिन्न होती हैं। व्यक्तिगत सलाह के लिए डाइटीशियन से परामर्श करें।*`,
  exercise: `### 🏃‍♂️ शारीरिक गतिविधि और फिटनेस\n\nनियमित व्यायाम आपके स्वास्थ्य के लिए अत्यंत महत्वपूर्ण है:\n\n* **साप्ताहिक लक्ष्य:** प्रति सप्ताह कम से कम 150 मिनट मध्यम तीव्रता का व्यायाम करें।\n* **शक्ति प्रशिक्षण:** सप्ताह में 2 दिन मांसपेशियों को मजबूत करने वाले व्यायाम करें।\n* **बैठने का समय कम करें:** हर घंटे 5 मिनट के लिए उठकर चलें।\n* **छोटी शुरुआत करें:** रोज 10-15 मिनट पैदल चलने से शुरू करें।\n\n*नोट: किसी भी नए व्यायाम कार्यक्रम से पहले अपने चिकित्सक से परामर्श करें।*`,
  sleep: `### 😴 नींद में सुधार के उपाय\n\nअच्छी नींद शारीरिक और मानसिक स्वास्थ्य दोनों के लिए आवश्यक है:\n\n1. **नियमित समय:** हर दिन एक ही समय पर सोएं और उठें।\n2. **वातावरण:** कमरे को अंधेरा, शांत और ठंडा रखें।\n3. **स्क्रीन बंद करें:** सोने से 30-60 मिनट पहले मोबाइल और टीवी बंद करें।\n4. **कैफीन से बचें:** शाम को चाय, कॉफी और शराब से बचें।\n\n*अगर लगातार नींद न आने की समस्या हो तो डॉक्टर से मिलें।*`,
  hydration: `### 💧 जलयोजन (हाइड्रेशन)\n\nपानी आपके शरीर के हर कार्य के लिए आवश्यक है:\n\n* **रोज 8-10 गिलास पानी पिएं।**\n* **व्यायाम से पहले और बाद में अतिरिक्त पानी पिएं।**\n* **फलों और सब्जियों से भी पानी मिलता है** — तरबूज, खीरा, संतरा।\n* **डिहाइड्रेशन के लक्षण:** सिरदर्द, थकान, गहरे रंग का पेशाब।\n\n*पेशाब का हल्का पीला रंग अच्छे हाइड्रेशन का संकेत है।*`,
  stress: `### 🧘‍♀️ तनाव प्रबंधन और मानसिक स्वास्थ्य\n\nमानसिक स्वास्थ्य शारीरिक स्वास्थ्य जितना ही महत्वपूर्ण है:\n\n* **गहरी सांस लें:** 4-7-8 तकनीक — 4 सेकंड सांस लें, 7 सेकंड रोकें, 8 सेकंड छोड़ें।\n* **व्यायाम करें:** शारीरिक गतिविधि तनाव हार्मोन को कम करती है।\n* **पर्याप्त नींद लें:** 7-9 घंटे की नींद तनाव कम करने में मदद करती है।\n* **बात करें:** अपनी भावनाओं को परिवार या दोस्तों से साझा करें।\n\n*गंभीर तनाव या चिंता होने पर मानसिक स्वास्थ्य विशेषज्ञ से मिलें।*`,
  general: `आपके प्रश्न के लिए धन्यवाद। स्वस्थ जीवन के मूल सिद्धांत:\n\n* **जलयोजन:** रोज 8-10 गिलास पानी पिएं।\n* **पोषण:** साबुत अनाज, फल, सब्जियाँ और प्रोटीन खाएं।\n* **व्यायाम:** सप्ताह में 150 मिनट मध्यम व्यायाम करें।\n* **नींद:** 7-9 घंटे की अच्छी नींद लें।\n* **जांच:** नियमित स्वास्थ्य जांच कराएं।\n\n*विशिष्ट लक्षणों के लिए कृपया चिकित्सक से परामर्श करें।*`
};

const healthTips = [
  "**Health Tip:** Try to walk for 10-15 minutes after your meals. It improves digestion, helps stabilize blood sugar, and adds steps to your day.",
  "**Health Tip:** Swap one sugary drink (soda, sweet tea, energy drink) today with a glass of water. Small cutbacks in added sugars have massive long-term benefits for metabolic health.",
  "**Health Tip:** Practice the 20-20-20 rule for eye health if you work on a screen. Every 20 minutes, look at something at least 20 feet away for 20 seconds to reduce eye strain.",
  "**Health Tip:** Add an extra serving of vegetables to your lunch or dinner today. Vegetables are packed with vital fiber, vitamins, and minerals that nourish your gut microbiome.",
  "**Health Tip:** Take 5 deep breaths right now. Inhale slowly through your nose, hold briefly, and let it go. This simple practice helps calm the nervous system and lower cortisol.",
  "**Health Tip:** Establish a 'screen-free hour' before bed tonight. Instead of scrolling, read a physical book, write in a journal, or stretch. You will likely fall asleep faster and sleep deeper."
];

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function containsWordRoot(text, wordList) {
  const textLower = text.toLowerCase();
  for (const word of wordList) {
    const wordLower = word.toLowerCase();
    const isAscii = /^[\x00-\x7F]*$/.test(wordLower);
    if (isAscii) {
      const regex = new RegExp('\\b' + escapeRegExp(wordLower), 'i');
      if (regex.test(textLower)) return true;
    } else {
      if (textLower.includes(wordLower)) return true;
    }
  }
  return false;
}

function isBlacklisted(message) {
  const blacklistWords = [
    'code', 'coding', 'program', 'programming', 'python', 'javascript', 'html', 'css',
    'java', 'c++', 'c#', 'rust', 'php', 'sql', 'script', 'function', 'class', 'database',
    'algorithm', 'software', 'develop', 'compile', 'debugging', 'debugger',
    'politic', 'political', 'election', 'president', 'government', 'senate', 'congress',
    'democrat', 'republican', 'parliament', 'prime minister', 'obama', 'biden', 'trump',
    'hack', 'hacking', 'malware', 'exploit', 'bypass security', 'illegal', 'pirate',
    'steal', 'robbery', 'crime', 'bypass',
    'finance', 'financial', 'invest', 'stock', 'bitcoin', 'crypto', 'shares', 'mutual fund',
    'real estate investment', 'money management', 'loan', 'mortgage', 'wall street',
    'celebrity', 'gossip', 'kardashian', 'hollywood gossip', 'actor dating', 'actress dating',
    'paparazzi', 'rumor'
  ];
  return containsWordRoot(message, blacklistWords);
}

function isHealthRelated(message) {
  const greetings = ['hello', 'hi', 'hey', 'help', 'who are you', 'what can you do', 'tip', 'daily', 'welcome',
                     'नमस्ते', 'नमस्कार', 'हेलो', 'मदद', 'सहायता', 'सुझाव'];
  if (containsWordRoot(message, greetings)) return true;

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

function getLocalResponse(message) {
  const msgLower = message.toLowerCase();

  if (isEmergency(message)) return FALLBACK_RESPONSES.emergency;

  if (containsWordRoot(msgLower, ['eat', 'diet', 'food', 'nutrition', 'meal'])) return FALLBACK_RESPONSES.eat;
  if (containsWordRoot(msgLower, ['exercise', 'fitness', 'workout', 'sport', 'walk', 'run'])) return FALLBACK_RESPONSES.exercise;
  if (containsWordRoot(msgLower, ['sleep', 'insomnia', 'tired', 'bedtime', 'rest'])) return FALLBACK_RESPONSES.sleep;
  if (containsWordRoot(msgLower, ['hydrate', 'hydration', 'water', 'drink'])) return FALLBACK_RESPONSES.hydration;
  if (containsWordRoot(msgLower, ['stress', 'anxiety', 'mental', 'wellness', 'calm', 'relax', 'meditate'])) return FALLBACK_RESPONSES.stress;
  if (containsWordRoot(msgLower, ['first aid', 'burn', 'cut', 'wound', 'bleed', 'choking'])) return FALLBACK_RESPONSES.firstaid;
  if (containsWordRoot(msgLower, ['hygiene', 'wash', 'teeth', 'brush', 'clean'])) return FALLBACK_RESPONSES.hygiene;
  if (containsWordRoot(msgLower, ['preventive', 'vaccine', 'checkup', 'screening', 'test'])) return FALLBACK_RESPONSES.preventive;
  if (containsWordRoot(msgLower, ['disease', 'diabetes', 'hypertension', 'heart', 'cancer', 'obesity', 'cholesterol'])) return FALLBACK_RESPONSES.disease;
  if (containsWordRoot(msgLower, ['headache', 'migraine'])) return FALLBACK_RESPONSES.headache;
  if (containsWordRoot(msgLower, ['fever', 'temperature', 'hot'])) return FALLBACK_RESPONSES.fever;
  if (containsWordRoot(msgLower, ['stomach', 'nausea', 'diarrhea', 'vomit', 'belly', 'indigestion'])) return FALLBACK_RESPONSES.stomach;
  if (containsWordRoot(msgLower, ['cough', 'cold', 'flu', 'sore throat', 'congestion', 'runny nose'])) return FALLBACK_RESPONSES.cough;

  if (containsWordRoot(msgLower, ['tip', 'daily', 'hello', 'hi', 'hey', 'help'])) {
    if (msgLower.includes('tip')) {
      const randTip = healthTips[Math.floor(Math.random() * healthTips.length)];
      return `Here is a daily tip for you:\n\n${randTip}`;
    }
    return `Hello! I am your **Health Awareness Assistant**. \n\nI can provide educational information, tips, and guidelines on various wellness topics. How can I help you today? You can ask me about:\n*   **Nutrition:** Tips on healthy eating and diets.\n*   **Exercise:** Fitness guidelines and physical activity.\n*   **Sleep:** Ideas to improve your sleep hygiene.\n*   **Hydration:** Hydration guidelines and checkmarks.\n*   **Stress Management:** Mental wellness and mindfulness exercises.\n*   **First-Aid:** Basic protocols for minor cuts, burns, or nosebleeds.\n*   **Hygiene & Prevention:** Habits for immune support and regular screenings.\n*   **Lifestyle Diseases:** Information on conditions like diabetes or high blood pressure.\n\n*Please ask a question, or say **"Give me a tip"** for a quick healthy habit reminder!*`;
  }

  return FALLBACK_RESPONSES.general;
}

function getHindiFallback(message) {
  const msgLower = message.toLowerCase();
  if (containsWordRoot(msgLower, ['eat', 'diet', 'food', 'nutrition', 'meal', 'खाना', 'भोजन', 'पोषण', 'आहार'])) return HINDI_FALLBACK_RESPONSES.eat;
  if (containsWordRoot(msgLower, ['exercise', 'fitness', 'workout', 'walk', 'run', 'व्यायाम', 'कसरत', 'फिटनेस', 'योग'])) return HINDI_FALLBACK_RESPONSES.exercise;
  if (containsWordRoot(msgLower, ['sleep', 'insomnia', 'tired', 'rest', 'नींद', 'सोना', 'आराम', 'थकान'])) return HINDI_FALLBACK_RESPONSES.sleep;
  if (containsWordRoot(msgLower, ['water', 'hydrat', 'drink', 'fluid', 'पानी', 'जल', 'पीना'])) return HINDI_FALLBACK_RESPONSES.hydration;
  if (containsWordRoot(msgLower, ['stress', 'anxiety', 'mental', 'meditat', 'relax', 'depress', 'तनाव', 'चिंता', 'मानसिक', 'ध्यान'])) return HINDI_FALLBACK_RESPONSES.stress;
  return HINDI_FALLBACK_RESPONSES.general;
}

function getChatbotResponse(userMessage, conversationHistory, lang) {
  const refusalEn = "I am a Health Awareness Assistant and can only help with health, wellness, fitness, hygiene, mental wellness, healthy lifestyle, and preventive healthcare topics. Please ask a health-related question.";
  const refusalHi = "मैं एक स्वास्थ्य जागरूकता सहायक हूँ और केवल स्वास्थ्य, कल्याण, फिटनेस, स्वच्छता, मानसिक स्वास्थ्य, स्वस्थ जीवनशैली और निवारक स्वास्थ्य विषयों में मदद कर सकता हूँ। कृपया स्वास्थ्य से संबंधित प्रश्न पूछें।";
  const refusalMessage = lang === 'hi' ? refusalHi : refusalEn;

  const disclaimerEn = "\n\n*Disclaimer: I am an AI Health Awareness Assistant. The information provided here is for educational and informational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. If you think you may have a medical emergency, call your doctor or local emergency services immediately.*";
  const disclaimerHi = "\n\n*अस्वीकरण: मैं एक AI स्वास्थ्य जागरूकता सहायक हूँ। यहाँ दी गई जानकारी केवल शैक्षिक और सूचनात्मक उद्देश्यों के लिए है। यह पेशेवर चिकित्सा सलाह, निदान या उपचार का विकल्प नहीं है। किसी भी चिकित्सा स्थिति के बारे में अपने चिकित्सक से परामर्श करें। आपातकाल में तुरंत 112 पर कॉल करें।*";
  const disclaimerText = lang === 'hi' ? disclaimerHi : disclaimerEn;

  if (isBlacklisted(userMessage) || !isHealthRelated(userMessage)) {
    return refusalMessage;
  }

  if (isEmergency(userMessage)) {
    return getLocalResponse(userMessage) + disclaimerText;
  }

  if (lang === 'hi') {
    return getHindiFallback(userMessage) + disclaimerText;
  }
  return getLocalResponse(userMessage) + disclaimerText;
}
