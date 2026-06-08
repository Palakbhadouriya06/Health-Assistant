// ============================================================================
// Health Assistant Chatbot — Client-side response engine
// ============================================================================
// Communication Style: Friendly, professional, simple language, bullet points
// Safety: Never diagnoses, never prescribes, always encourages professional care
// ============================================================================

const RESPONSES = {

  // ──────────────────────────────────────────────────────────────────────────
  // EMERGENCY
  // ──────────────────────────────────────────────────────────────────────────
  emergency: [
    `🚨 **Please seek emergency medical help right away** 🚨

If you or someone near you is having any of these symptoms, **call your local emergency number (911, 999, or 112) or go to the nearest hospital immediately:**

• Chest pain or pressure
• Trouble breathing
• Sudden weakness or numbness on one side of the body
• Heavy bleeding that won't stop
• Passing out or confusion
• Severe head injury
• Poisoning or overdose

⏱️ **Every second matters.** Do not wait. Do not try to treat these at home. Emergency services are there to help you.`
  ],

  // ──────────────────────────────────────────────────────────────────────────
  // DISEASES & MEDICAL CONDITIONS
  // ──────────────────────────────────────────────────────────────────────────
  diabetes: [
    `### 🧬 Understanding Diabetes

**What is it?**
Diabetes is a condition where blood sugar levels stay too high. Think of insulin as a key that unlocks your cells to let sugar in. In diabetes, either the body doesn't make enough insulin, or the cells don't respond to it properly.

**Main types:**
• **Type 1 diabetes** — The body stops making insulin. Starts in childhood or young adulthood. Requires daily insulin shots. Not preventable.
• **Type 2 diabetes** — The body becomes resistant to insulin. Strongly linked to weight, diet, and activity level. Can sometimes be prevented or managed with lifestyle changes.
• **Gestational diabetes** — Appears during pregnancy and usually goes away after childbirth, but raises the risk of Type 2 later.

**Common signs to watch for:**
Feeling very thirsty, urinating often, blurry vision, slow-healing cuts, tingling in hands or feet, feeling very tired.

**What helps?**
• Eating regular meals with plenty of vegetables and whole grains
• Staying physically active — even a daily 30-minute walk helps
• Keeping a healthy weight
• Taking medications or insulin exactly as your doctor advises
• Checking blood sugar levels regularly

💡 *Everyone's diabetes journey is different. Work closely with your healthcare team to find what works best for you.*`,
    `### 🧬 Living Well with Diabetes

If you or someone you know has diabetes, these habits can make a real difference:

**Eating tips:**
• Fill half your plate with vegetables — they add fiber and nutrients without spiking blood sugar
• Choose whole grains like brown rice, oats, millets, and whole wheat over white rice or refined flour
• Include protein (dal, eggs, fish, chicken, tofu) at every meal — it keeps you full and helps steady blood sugar
• Limit sugary drinks, sweets, and packaged snacks
• Eat at regular times rather than skipping meals

**Staying active:**
• Walking for 20–30 minutes after meals helps lower blood sugar naturally
• Any movement counts — stretching, household chores, climbing stairs

**Things to keep in mind:**
• Check your feet daily for cuts or blisters — diabetes can reduce feeling in your feet
• Stay hydrated with water
• Get regular eye and kidney check-ups

⚠️ *This is educational information. If you have diabetes, your doctor or diabetes educator can give you a plan that fits your personal needs.*`
  ],

  bloodpressure: [
    `### ❤️ Understanding Blood Pressure

**What is blood pressure?**
It's the force of blood pushing against the walls of your arteries. A normal reading is below 120/80. The top number (systolic) measures pressure when your heart beats. The bottom number (diastolic) measures pressure between beats.

**Categories:**
• **Normal:** Below 120/80
• **Elevated:** 120–129 / below 80
• **High (Stage 1):** 130–139 / 80–89
• **High (Stage 2):** 140+ / 90+
• **Crisis level:** 180+ / 120+ — needs emergency care

**What's important to know:**
High blood pressure often has **no symptoms at all**. That's why it's called the "silent killer." Many people feel perfectly fine but still have dangerously high readings. The only way to know is to get it checked.

**Lifestyle steps that help:**
• Reduce salt — aim for less than 1 teaspoon (about 2300 mg) per day
• Eat more fruits, vegetables, and whole grains (the DASH diet is a good example)
• Walk or exercise for at least 30 minutes most days
• Limit alcohol to 1 drink per day or less
• Find healthy ways to manage stress
• If prescribed medication, take it every day — even when you feel fine`,
    `### ❤️ Managing High Blood Pressure Naturally

Many people can lower their blood pressure with lifestyle changes alone. Here's what research shows works:

**Cut back on sodium:**
Most sodium comes from packaged and restaurant food, not your salt shaker. Check labels — anything with more than 400 mg sodium per serving is high. Cook at home more so you control the salt.

**The DASH diet approach:**
DASH stands for "Dietary Approaches to Stop Hypertension." It means:
• Lots of vegetables and fruits
• Whole grains instead of refined
• Low-fat or fat-free dairy
• Fish, poultry, beans, and nuts
• Less red meat, sweets, and sugary drinks

**Other helpful habits:**
• Lose even a small amount of weight — losing 5–10 pounds can make a difference
• Walk briskly for 30 minutes daily
• Practice deep breathing or meditation for stress
• Get 7–8 hours of sleep each night

⚠️ *These are general lifestyle tips. If you have high blood pressure, work with your doctor to decide the best approach for you. Never stop or change prescribed medication without talking to your doctor first.*`
  ],

  heart: [
    `### ❤️ Heart Health Basics

Your heart is a muscle that works 24/7 to pump blood through your body. Taking care of it is one of the most important things you can do.

**What raises heart disease risk?**
• Smoking or tobacco use 🚬
• High blood pressure
• High cholesterol
• Diabetes
• Being overweight
• Not enough physical activity
• Too much alcohol
• A diet high in fried foods, sugar, and processed items

**Signs that need medical attention:**
• Chest discomfort — pressure, squeezing, or pain
• Pain spreading to the shoulder, arm, neck, or jaw
• Shortness of breath
• Cold sweat, nausea, or lightheadedness

**What protects your heart?**
• Eat more vegetables, fruits, whole grains, and healthy fats (olive oil, nuts, fish)
• Walk or exercise for 30 minutes most days
• Maintain a healthy weight
• Don't smoke
• Limit alcohol
• Manage stress
• Get regular health check-ups

💡 *Heart disease is largely preventable. Small daily habits add up to big protection over time.*

⚠️ *If you have chest pain or any of the warning signs above, call emergency services right away — don't wait.*`,
    `### ❤️ Understanding Cholesterol

**What is cholesterol?**
Cholesterol is a waxy substance found in your blood. Your body needs some of it to build cells, but too much can stick to artery walls and narrow them — like a pipe getting clogged.

**The two main types:**
• **LDL (low-density lipoprotein):** Often called "bad" cholesterol. High levels can build up in arteries.
• **HDL (high-density lipoprotein):** Often called "good" cholesterol. It helps remove LDL from your arteries.

**Ways to improve your numbers:**
• Eat more **soluble fiber** — oats, beans, apples, carrots, and barley help lower LDL
• Include **healthy fats** — olive oil, avocados, nuts, and fatty fish like salmon
• Cut back on **saturated fats** — found in red meat, butter, cheese, and fried foods
• Avoid **trans fats** — listed as "partially hydrogenated oils" on labels
• Stay active — exercise boosts HDL

⚠️ *A blood test is the only way to know your cholesterol levels. Talk to your doctor about what your numbers mean for you.*`
  ],

  cancer: [
    `### 🧬 Cancer Awareness — What You Should Know

**What is cancer?**
Cancer is a group of diseases where some of the body's cells grow out of control and crowd out normal cells. There are many types, and each behaves differently.

**Common warning signs to be aware of:**
• A lump or thickening under the skin
• Unexplained weight loss (without trying)
• Changes in a mole — size, shape, or color
• A persistent cough or hoarseness lasting more than 3 weeks
• Changes in bowel or bladder habits
• Sores that don't heal
• Unexplained pain that doesn't go away

**Important: Many things can cause these symptoms, not just cancer. But it's always wise to get them checked.**

**What reduces your risk?**
• Don't smoke or use tobacco — this is the single biggest step
• Maintain a healthy weight
• Eat plenty of fruits, vegetables, and whole grains
• Limit alcohol
• Protect your skin from the sun with SPF 30+ sunscreen
• Stay physically active
• Get recommended screenings (mammograms, colonoscopy, Pap smear, etc.)

💡 *Many cancers are highly treatable when found early. Regular check-ups and being aware of your body matter.*

⚠️ *This information is for education. If you notice unusual changes in your body, please see a doctor for proper evaluation.*`
  ],

  // ──────────────────────────────────────────────────────────────────────────
  // SYMPTOMS & POSSIBLE CAUSES
  // ──────────────────────────────────────────────────────────────────────────
  symptoms: [
    `### 🔍 Understanding Symptoms — A General Guide

Symptoms are your body's way of telling you something may be off. It's important to pay attention, but also important not to jump to conclusions.

**Common symptoms and what they might suggest:**

• **Headache:** Tension, dehydration, eye strain, lack of sleep, sinus issues. Most headaches are not serious.
• **Fever:** Often a sign that your immune system is fighting an infection. Usually viral or bacterial.
• **Cough:** Can be from a cold, allergies, dry air, or irritation. If it lasts more than 3 weeks, see a doctor.
• **Fatigue:** Lack of sleep, stress, poor diet, anemia, or an underlying condition.
• **Stomach pain:** Indigestion, gas, constipation, food poisoning, or infection.
• **Back pain:** Muscle strain, poor posture, or long hours of sitting.

**What to do when you notice symptoms:**
1. Rest and drink water — many mild symptoms improve on their own
2. Monitor how long they last and whether they get better or worse
3. Note any other symptoms that appear alongside
4. See a doctor if symptoms persist more than a few days, get worse, or interfere with daily life

⚠️ **Important:** This is not a diagnosis tool. Many different conditions share the same symptoms. Only a doctor can determine what's actually wrong after examining you.`,
    `### 🔍 How to Talk to Your Doctor About Symptoms

When you visit a doctor, describing your symptoms clearly helps them understand what might be going on. Here's what to prepare:

**For each symptom, think about:**
• **Where** does it hurt or feel unusual?
• **When** did it start?
• **How often** does it happen — all the time or on and off?
• **How bad** is it on a scale of 1 to 10?
• **What makes it better or worse?** (rest, movement, food, etc.)
• **What other symptoms** appeared at the same time?

**Red flags that need prompt medical attention:**
• Severe or sudden pain
• Difficulty breathing
• High fever (over 103°F / 39.4°C) that doesn't come down
• Blood in urine, stool, or vomit
• Confusion or disorientation
• Weakness or numbness on one side of the body

⚠️ *This guide is for educational use only. If you're worried about your symptoms, please consult a healthcare professional who can examine you properly.*`
  ],

  // ──────────────────────────────────────────────────────────────────────────
  // MEDICINES & THEIR COMMON USES
  // ──────────────────────────────────────────────────────────────────────────
  medicines: [
    `### 💊 Understanding Common Medicines — A General Overview

Medicines help treat or prevent illness, but they should always be used responsibly. Here are some common types and what they are typically used for:

**Pain relievers:**
• **Acetaminophen (paracetamol):** For fever and mild to moderate pain like headaches, body aches.
• **Ibuprofen:** For pain, inflammation, and fever. Also helpful for muscle aches and arthritis.
• **Aspirin:** For pain, fever, and inflammation. Also used in low doses for heart health (only under doctor's advice).

**Allergy medicines:**
• **Antihistamines (cetirizine, loratadine):** For runny nose, sneezing, itching from allergies.

**Cold and cough:**
• **Decongestants:** Help clear a stuffy nose.
• **Cough syrups:** Some suppress coughing, others help loosen mucus.

**Digestive health:**
• **Antacids:** For heartburn and acid indigestion.
• **Probiotics:** Helpful bacteria that support gut health.

**⚠️ Important safety rules:**
• Never take medicines prescribed for someone else
• Always follow the dose on the label or as your doctor advised
• Check expiry dates before taking any medicine
• Tell your doctor about ALL medicines you take (including herbal supplements)
• If you miss a dose, do NOT double the next dose — just continue as usual
• Some medicines interact with each other — ask your pharmacist or doctor`,
    `### 💊 How to Take Medicines Safely

Taking medicine the right way is just as important as taking the right medicine.

**Before taking any medicine, ask yourself:**
• Do I really need this? Some symptoms get better on their own.
• Have I checked the label for the correct dose and frequency?
• Do I know what side effects to watch for?
• Could this interact with other medicines I'm taking?

**Common mistakes to avoid:**
• ❌ Taking antibiotics for a viral infection — antibiotics only work against bacteria
• ❌ Crushing or breaking pills that are meant to be swallowed whole
• ❌ Drinking alcohol while taking certain medicines
• ❌ Stopping antibiotics early because you feel better — always finish the full course
• ❌ Taking more than the recommended dose thinking it will work faster

**A note on antibiotics:**
Antibiotics treat bacterial infections, not viral ones (like colds or flu). Using them when they aren't needed leads to antibiotic resistance — which means they stop working when you really need them.

⚠️ *This is educational information only. Always consult a doctor or pharmacist for advice specific to your health situation. Never start, stop, or change a medicine without speaking to a healthcare professional.*`
  ],

  // ──────────────────────────────────────────────────────────────────────────
  // VACCINATIONS
  // ──────────────────────────────────────────────────────────────────────────
  vaccinations: [
    `### 💉 Vaccinations — Your Questions Answered

**What are vaccines?**
Vaccines train your immune system to recognize and fight specific germs without making you sick first. They are one of the most effective public health tools we have.

**Why are vaccines important?**
• They protect you from serious diseases
• They protect people around you who can't get vaccinated (herd immunity)
• They have saved millions of lives worldwide
• They prevent outbreaks of once-common diseases

**Vaccines recommended for most adults:**
• **Flu shot:** Every year — the flu virus changes, so the vaccine is updated annually
• **Tetanus/diphtheria/pertussis (Tdap):** Booster every 10 years
• **COVID-19:** Updated shots as recommended
• **Shingles:** Recommended for adults 50+
• **Pneumococcal:** For adults 65+ or those with certain health conditions
• **HPV:** For young adults to prevent certain cancers

**Childhood vaccines include protection against:**
Measles, mumps, rubella, polio, chickenpox, hepatitis B, whooping cough, diphtheria, tetanus, and more.

**Common concerns answered:**
• "Can vaccines give me the disease?" — No. Most vaccines contain killed or weakened germs that cannot cause the disease.
• "Are there side effects?" — Mild ones (sore arm, low fever) are common. Serious reactions are extremely rare.
• "Can I get multiple vaccines at once?" — Yes, combination vaccines are safe and reduce the number of shots needed.

⚠️ *Talk to your doctor about which vaccines are right for you based on your age, health, and travel plans. Vaccine schedules vary by country.*`
  ],

  // ──────────────────────────────────────────────────────────────────────────
  // MEDICAL TESTS & REPORTS
  // ──────────────────────────────────────────────────────────────────────────
  medicaltests: [
    `### 🩺 Common Medical Tests — A Simple Guide

Medical tests help doctors understand what's happening inside your body. Here are some common ones and what they check:

**Blood tests:**
• **Complete Blood Count (CBC):** Measures red blood cells, white blood cells, and platelets. Helps detect anemia, infection, and other conditions.
• **Blood sugar (glucose) test:** Checks your blood sugar level. Used to screen for diabetes.
• **Lipid panel (cholesterol test):** Measures total cholesterol, LDL, HDL, and triglycerides. Assesses heart disease risk.
• **Thyroid function test (TSH, T3, T4):** Checks how well your thyroid is working.
• **Liver and kidney function tests:** Check how well these organs are working.

**Urine tests:**
• Check for infections, kidney problems, or diabetes.

**Imaging tests:**
• **X-ray:** Shows bones and some internal organs. Used for fractures and chest issues.
• **Ultrasound:** Uses sound waves to create images. Safe during pregnancy. Checks organs like the liver, kidneys, and gallbladder.
• **CT scan:** Detailed cross-section images of the body.
• **MRI:** Uses magnets to create very detailed images of soft tissues.

**Other common tests:**
• **Blood pressure check:** Quick and painless — done at almost every doctor visit
• **ECG (electrocardiogram):** Records your heart's electrical activity
• **Pap smear:** Screens for cervical cancer
• **Mammogram:** Screens for breast cancer
• **Colonoscopy:** Screens for colon cancer

💡 *Before any test, ask your doctor: Do I need to prepare (fasting, etc.)? What will this test tell us? When will I get the results?*`,
    `### 🩺 Understanding Your Medical Reports

Getting test results can feel overwhelming. Here's how to make sense of them:

**Key things to look for on lab reports:**
• **Your result:** The value from your test
• **Reference range:** The normal range for that test (it may vary by lab)
• **Flag (H/L):** High (above normal) or Low (below normal)

**Important to remember:**
• A result outside normal range does NOT automatically mean something is wrong
• Reference ranges are guidelines — one slightly abnormal value may not be significant
• Doctors look at the whole picture — your results, symptoms, history, and physical exam
• Never try to interpret results on your own — always discuss them with your doctor

**Examples of what simple results might suggest:**
• **High blood sugar:** May indicate diabetes or prediabetes — your doctor will confirm with follow-up tests
• **High cholesterol:** May increase heart disease risk — lifestyle changes and sometimes medication can help
• **Low hemoglobin (anemia):** May be from iron deficiency, blood loss, or other causes
• **High white blood cells:** May signal your body is fighting an infection

⚠️ *This is for educational purposes. Only your doctor can properly interpret your test results in the context of your overall health. Always discuss your reports with them.*`
  ],

  // ──────────────────────────────────────────────────────────────────────────
  // NUTRITION & HEALTHY DIETS
  // ──────────────────────────────────────────────────────────────────────────
  nutrition: [
    `### 🥗 Healthy Eating Made Simple

Good nutrition doesn't have to be complicated. Here's a straightforward way to think about food:

**Build a balanced plate:**
• **½ plate:** Vegetables and fruits — go for a variety of colors
• **¼ plate:** Whole grains — brown rice, whole wheat, oats, millets, quinoa
• **¼ plate:** Protein — dal, beans, chickpeas, fish, eggs, chicken, tofu, paneer

**Small changes that add up:**
• Drink water instead of sugary sodas or packaged juices
• Snack on nuts, fruit, or yogurt instead of chips and biscuits
• Cook at home more often — you control what goes into your food
• Eat mindfully — pay attention to your food, eat slowly, stop when you're full
• Include fiber — oats, dal, vegetables, and fruits help digestion and keep you full

**What to limit:**
• Fried foods and packaged snacks (chips, namkeen)
• Sugary drinks and sweets
• Excess salt — most of it comes from packaged foods
• Refined grains — white rice, white bread, maida

💡 *The best diet is one you can stick with consistently. Small, permanent changes beat big temporary ones.*`,
    `### 🥗 Understanding Food Groups

Food gives your body different types of fuel. Here's what each group contributes:

**Carbohydrates — Your body's main energy source**
• Choose: Brown rice, whole wheat, oats, millets, sweet potatoes, fruits
• Limit: White rice, white bread, sugary foods, maida

**Proteins — For building and repairing body tissues**
• Sources: Dal, chickpeas, soy, eggs, fish, chicken, milk, yogurt, paneer
• Try to include some protein in every meal

**Fats — Essential for brain health and vitamin absorption**
• Healthy sources: Nuts, seeds, avocados, olive oil, ghee (in moderation)
• Limit: Fried foods, butter, cream, processed snacks

**Vitamins and minerals — Support every function in your body**
• Found in: Vegetables, fruits, leafy greens, dairy
• Different colors = different nutrients. "Eat a rainbow" every day

**Fiber — Helps digestion and keeps you full**
• Sources: Whole grains, dal, vegetables, fruits with skin, nuts and seeds

💡 *You don't need to count every nutrient. Just aim for variety and balance across your meals.*`,
  ],

  // ──────────────────────────────────────────────────────────────────────────
  // EXERCISE & FITNESS
  // ──────────────────────────────────────────────────────────────────────────
  exercise: [
    `### 🏃‍♂️ Physical Activity — A Practical Guide

**How much activity do you need?**
Aim for at least **150 minutes per week** of moderate activity — that's just 20–25 minutes per day. Moderate activity means you're breathing harder but can still hold a conversation.

**Examples of moderate activity:**
• Brisk walking
• Cycling at a steady pace
• Swimming
• Dancing
• Gardening or housework
• Playing with children

**Don't forget strength:**
On 2 or more days per week, do activities that strengthen your muscles:
• Push-ups, squats, lunges (no equipment needed)
• Lifting weights or using resistance bands
• Yoga or pilates

**Break up sitting time:**
Sitting for long hours is harmful even if you exercise. Stand up and stretch for 2–3 minutes every hour. Walk while on the phone.

**Tips to stay consistent:**
• Start small — even 5–10 minutes a day is a great start
• Pick activities you genuinely enjoy
• Exercise with a friend — it helps keep you accountable
• Track your progress to stay motivated`,
    `### 🏃‍♂️ Getting Started with Exercise — Beginner's Guide

If you haven't exercised in a while, here's how to start safely:

**Week 1–2: Just move**
• Walk for 10–15 minutes daily at a comfortable pace
• Do gentle stretching in the morning
• Take the stairs instead of the elevator

**Week 3–4: Build up**
• Walk for 20 minutes, picking up the pace slightly
• Add simple bodyweight exercises: 5–10 squats, wall push-ups
• Try a beginner yoga video online

**Week 5+: Find your rhythm**
• Aim for 30 minutes most days
• Mix walking, strength exercises, and stretching
• Try a new activity — cycling, swimming, dancing

**Important safety reminders:**
• Warm up for 5 minutes before and cool down after
• Drink water before, during, and after exercise
• Wear comfortable shoes and clothes
• Stop if you feel sharp pain or dizziness
• Check with your doctor before starting if you have any health conditions`,
  ],

  // ──────────────────────────────────────────────────────────────────────────
  // SLEEP
  // ──────────────────────────────────────────────────────────────────────────
  sleep: [
    `### 😴 Better Sleep — Simple Habits That Work

Most adults need 7–9 hours of sleep each night. Quality matters just as much as quantity.

**Create a relaxing bedtime routine:**
• Go to bed and wake up at the same time every day — even on weekends
• Turn off screens (phone, TV, tablet) at least 30 minutes before bed
• Read a book, listen to calm music, or take a warm bath instead
• Keep your bedroom dark, quiet, and cool

**What to avoid before bed:**
• Heavy meals within 2–3 hours of sleeping
• Caffeine (tea, coffee, cola) after 4 PM
• Alcohol close to bedtime — it may help you fall asleep but disrupts deep sleep
• Intense exercise in the evening

**If you can't sleep:**
• Don't lie in bed worrying about it — get up, read in dim light, and return to bed when you feel sleepy
• Try deep breathing: inhale for 4 counts, hold for 4, exhale for 4
• Avoid looking at the clock — it creates anxiety`,
    `### 😴 Why Sleep Matters

Sleep is not just rest — it's when your body does important repair work:

**What happens while you sleep:**
• Your brain processes memories and emotions
• Muscles and tissues repair themselves
• Your immune system strengthens
• Hormones that control appetite and growth are released

**Signs you're not getting enough quality sleep:**
• Feeling tired even after a full night in bed
• Difficulty concentrating or remembering things
• Feeling irritable or moody
• Craving sugary or high-calorie foods
• Falling asleep easily during the day

**Common sleep disruptors:**
• Stress and worry
• Irregular sleep schedule
• Screen time before bed
• Too much caffeine
• An uncomfortable mattress or room that's too bright/noisy
• Certain medical conditions (sleep apnea, thyroid issues)

⚠️ *If lack of sleep is affecting your daily life for more than a few weeks, consider speaking with a doctor to rule out underlying conditions.*`
  ],

  // ──────────────────────────────────────────────────────────────────────────
  // HYDRATION
  // ──────────────────────────────────────────────────────────────────────────
  hydration: [
    `### 💧 Hydration — A Simple Guide

**How much water do you need?**
A general guideline is about 8 cups (2 liters) per day for women and 10 cups (2.5 liters) for men. But needs vary based on activity, climate, and health.

**A quick way to check if you're hydrated:**
Look at your urine color:
• Pale yellow or straw-colored = well hydrated ✅
• Dark yellow or amber = drink more water 🟡
• Very dark or brown = severely dehydrated — drink water slowly 🟤

**Easy ways to drink more water:**
• Keep a water bottle on your desk or in your bag
• Add lemon, cucumber, mint, or orange slices for flavor
• Drink a glass of water with every meal
• Set a reminder on your phone
• Eat water-rich foods: watermelon, cucumber, oranges, tomatoes, soups

**When you need extra water:**
• During and after exercise
• In hot or humid weather
• If you have a fever, diarrhea, or vomiting
• During pregnancy and breastfeeding`,
    `### 💧 Signs You Might Be Dehydrated

Dehydration happens when your body loses more water than you take in. Mild dehydration is common and easy to fix.

**Mild to moderate dehydration:**
• Thirst and dry mouth
• Headache
• Feeling tired or dizzy
• Dark yellow urine
• Dry skin
• Constipation

**Severe dehydration (needs medical help):**
• Extreme thirst
• No urination for 8+ hours
• Rapid heartbeat
• Confusion or irritability
• Sunken eyes
• Feeling faint

**Who is at higher risk?**
• Infants and young children
• Older adults
• People with chronic illnesses
• Athletes
• Anyone with fever, vomiting, or diarrhea

💡 *The simplest tip: if you feel thirsty, you're already mildly dehydrated. Drink water regularly throughout the day, not just when you feel thirsty.*`
  ],

  // ──────────────────────────────────────────────────────────────────────────
  // MENTAL HEALTH
  // ──────────────────────────────────────────────────────────────────────────
  stress: [
    `### 🧘‍♀️ Understanding Stress and Mental Wellness

**What is stress?**
Stress is your body's natural response to challenges. A little stress can help you focus and perform. But chronic stress — feeling overwhelmed for weeks or months — takes a toll on your health.

**Signs of too much stress:**
• Trouble sleeping
• Irritability or mood swings
• Difficulty concentrating
• Headaches or muscle tension
• Changes in appetite
• Feeling tired all the time
• Withdrawing from people

**Practical ways to manage stress:**
• **Deep breathing:** Inhale for 4 counts, hold for 4, exhale for 4. Do this 5 times.
• **Move your body:** A 15-minute walk can clear your mind
• **Talk to someone:** Share your feelings with a trusted friend or family member
• **Limit screen time:** Constant news and social media can increase anxiety
• **Do something you enjoy:** A hobby, music, cooking, or spending time in nature
• **Write it down:** Journaling helps process emotions

💡 *Taking care of your mental health is just as important as physical health. Small daily habits can make a big difference.*`,
    `### 🧘‍♀️ Building Mental Wellness Habits

**Daily habits that support mental health:**

**Morning:**
• Start with gratitude — think of 1–2 things you're thankful for
• Stretch or take a few deep breaths before checking your phone
• Have a nourishing breakfast

**During the day:**
• Take short breaks every 1–2 hours — stand up, stretch, step outside
• Eat regular meals — low blood sugar can affect mood
• Stay hydrated — dehydration can cause fatigue and irritability
• Set boundaries — it's okay to say no to extra demands

**Evening:**
• Wind down without screens for 30 minutes before bed
• Reflect on one good thing that happened today
• Prepare for tomorrow to reduce morning stress

**When to seek professional help:**
It's normal to feel sad or anxious sometimes. But if these feelings:
• Last for more than 2 weeks
• Interfere with work, relationships, or daily activities
• Make you feel hopeless or overwhelmed

…then talking to a counselor, therapist, or doctor is a sign of strength, not weakness.

⚠️ *This is educational information. If you're having thoughts of harming yourself, please contact a crisis helpline or emergency services immediately.*`,
  ],

  // ──────────────────────────────────────────────────────────────────────────
  // FIRST AID
  // ──────────────────────────────────────────────────────────────────────────
  firstaid: [
    `### 🩹 Basic First Aid — What to Do in Common Situations

**Minor burns (from heat):**
• Hold the burned area under cool (not cold) running water for 10–15 minutes
• Cover loosely with a clean, dry cloth or sterile bandage
• Do NOT apply butter, oil, ice, or toothpaste — these can make things worse
• For serious burns (large, deep, or blistering), seek medical help

**Cuts and scrapes:**
• Wash gently with clean water and mild soap
• Apply gentle pressure with a clean cloth to stop bleeding
• Apply antibiotic ointment if available
• Cover with a clean bandage
• Change the bandage daily

**Nosebleeds:**
• Sit upright and lean slightly forward (not backward)
• Pinch the soft part of your nose just below the bony bridge
• Hold for 10 minutes without checking
• Breathe through your mouth
• If bleeding continues after 20 minutes, see a doctor

**Sprains (twisted ankle, wrist):**
• Follow R.I.C.E.: Rest, Ice (15 minutes on, 15 off), Compression (elastic bandage), Elevation (above heart)
• Avoid walking on the injured area for 24–48 hours

⚠️ *For serious injuries — deep wounds, large burns, head injuries, severe bleeding, or suspected fractures — call emergency services immediately.*`,
    `### 🩹 Building a Home First Aid Kit

Keep these items in a box that's easy to find:

**Basic supplies:**
• Adhesive bandages (various sizes) — for small cuts and blisters
• Sterile gauze pads and medical tape — for larger wounds
• Antiseptic wipes or solution — to clean wounds
• Antibiotic ointment — to prevent infection
• Tweezers — to remove splinters or debris
• Scissors — for cutting tape or cloth
• Elastic bandage (ACE wrap) — for sprains
• Instant cold pack — activate by squeezing

**Medicines to include:**
• Pain reliever (acetaminophen or ibuprofen)
• Antihistamine (for allergies)
• Antacid (for heartburn)
• Oral rehydration salts — for diarrhea

**Other useful items:**
• Thermometer
• Disposable gloves
• Safety pins
• Flashlight with extra batteries
• Emergency contact numbers

💡 *Check your kit every 6 months — replace expired medicines and used supplies.*`
  ],

  // ──────────────────────────────────────────────────────────────────────────
  // WOMEN'S HEALTH
  // ──────────────────────────────────────────────────────────────────────────
  womenshealth: [
    `### 👩 Women's Health — Key Topics

**Menstrual health:**
• Regular periods (every 21–35 days) are a sign of overall health
• Common symptoms before periods: bloating, mood changes, cramps — light exercise, heat packs, and rest can help
• If periods are very painful, irregular, or heavy, see a gynecologist

**Pregnancy care:**
• Take folic acid supplements before and during pregnancy
• Eat a balanced diet with iron-rich foods (leafy greens, beans, lean meat)
• Stay active — walking and prenatal yoga are generally safe
• Attend all scheduled prenatal check-ups
• Avoid alcohol, smoking, and certain foods (raw fish, unpasteurized dairy)

**Breast health:**
• Get familiar with how your breasts normally look and feel
• Report any lumps, skin changes, or discharge to a doctor
• Mammograms are recommended starting at age 40–45 (or earlier if high risk)

**Common health concerns:**
• **UTIs:** Frequent urge to urinate, burning sensation. Drink plenty of water, see a doctor for treatment.
• **PCOS (Polycystic Ovary Syndrome):** Irregular periods, excess hair growth, weight gain. Manage with diet, exercise, and medical guidance.
• **Osteoporosis:** Bone thinning after menopause. Ensure adequate calcium and vitamin D, do weight-bearing exercise.

⚠️ *Every woman's body is different. Regular check-ups with a gynecologist are important at every stage of life.*`,
    `### 👩 Common Women's Health Screenings

**Recommended screenings and when to start:**

• **Pap smear (cervical cancer screening):** Starting at age 21–25, every 3–5 years depending on results
• **Mammogram (breast cancer screening):** Starting at age 40–45, every 1–2 years
• **Bone density test (osteoporosis):** Starting at age 65, or earlier if high risk
• **Blood pressure check:** At every doctor visit
• **Cholesterol test:** Starting at age 20, every 4–6 years
• **Blood sugar test:** Starting at age 35–45, every 3 years
• **Thyroid test:** If symptoms suggest a thyroid issue

**When to see a gynecologist:**
• For annual well-woman exams
• If you notice unusual bleeding or discharge
• For contraception advice
• Before planning a pregnancy
• For persistent pelvic pain
• For menopausal symptom management

⚠️ *These are general guidelines. Your individual screening schedule may differ based on your health history and risk factors. Discuss with your doctor.*`
  ],

  // ──────────────────────────────────────────────────────────────────────────
  // CHILD HEALTH
  // ──────────────────────────────────────────────────────────────────────────
  childhealth: [
    `### 👶 Child Health — A Parent's Guide

**Nutrition for growing children:**
• Breast milk is best for the first 6 months (exclusive breastfeeding recommended)
• Introduce solid foods around 6 months — start with mashed fruits, vegetables, and porridge
• Include protein (dal, eggs, milk), carbs (rice, roti), and healthy fats (ghee, nuts in paste form)
• Limit sugary snacks, packaged juices, and fried foods
• Encourage water as the main drink

**Vaccinations:**
• Follow the vaccination schedule recommended by your country's health authorities
• Common vaccines protect against: measles, polio, diphtheria, tetanus, whooping cough, hepatitis B, TB, and more
• Keep a vaccination record card

**Common childhood illnesses:**
• **Colds and cough:** Most are viral and resolve on their own. Keep the child hydrated and comfortable.
• **Fever:** Monitor temperature. Keep the child hydrated. Use acetaminophen or ibuprofen as per doctor's advice for high fever.
• **Diaper rash:** Change diapers frequently, keep the area clean and dry, use barrier cream

**When to see a doctor for your child:**
• Fever lasting more than 3 days
• Difficulty breathing
• Not drinking fluids or signs of dehydration
• Persistent vomiting or diarrhea
• Unusual rash or lethargy

⚠️ *This is general guidance. Always consult a pediatrician for concerns about your child's health.*`,
    `### 👶 Keeping Children Healthy

**Sleep needs by age:**
• Newborns (0–3 months): 14–17 hours
• Infants (4–11 months): 12–15 hours
• Toddlers (1–2 years): 11–14 hours
• Preschoolers (3–5 years): 10–13 hours
• School-age (6–13 years): 9–11 hours

**Physical activity for children:**
• Children need at least 60 minutes of active play daily
• Running, jumping, climbing, cycling, swimming — anything that gets them moving
• Limit screen time (TV, phone, tablet) to 1–2 hours per day max

**Building healthy habits early:**
• Set regular meal and sleep times
• Be a role model — children copy what they see
• Make healthy foods fun — cut fruits and vegetables into shapes
• Praise effort, not just results
• Talk openly about feelings and emotions

**Safety tips:**
• Use car seats and seat belts correctly
• Keep medicines and cleaning products out of reach
• Supervise around water (bath tubs, pools, buckets)
• Teach basic hygiene — hand washing before meals

⚠️ *Every child develops differently. If you have concerns about your child's growth, development, or behavior, speak with a pediatrician.*`
  ],

  // ──────────────────────────────────────────────────────────────────────────
  // ELDERLY CARE
  // ──────────────────────────────────────────────────────────────────────────
  elderlycare: [
    `### 👴👵 Elderly Care — Supporting Health in Later Years

**Nutrition for older adults:**
• Protein is extra important — helps maintain muscle mass. Include dal, eggs, fish, milk, paneer
• Calcium and vitamin D for bone health — milk, yogurt, leafy greens, sunlight
• Fiber for digestion — whole grains, fruits, vegetables
• Stay hydrated — thirst sensation decreases with age, so drink water regularly even if not thirsty
• Smaller, more frequent meals can help if appetite is low

**Staying active:**
• Gentle exercise like walking, stretching, or chair exercises helps maintain mobility
• Balance exercises reduce fall risk — standing on one foot, heel-to-toe walking
• Strength training with light weights or resistance bands preserves muscle
• Always warm up and cool down gently

**Common health considerations:**
• **Blood pressure:** Check regularly — high BP often has no symptoms
• **Bone health:** Risk of osteoporosis increases with age. Falls can be serious.
• **Vision and hearing:** Regular check-ups help catch age-related changes early
• **Medication management:** Keep a list of all medicines and doses. Use a pill organizer if needed.
• **Mental health:** Social connection matters — loneliness affects physical health too

**Fall prevention:**
• Remove loose rugs and clutter from walkways
• Install grab bars in the bathroom
• Ensure good lighting, especially at night
• Wear non-slip footwear
• Get vision checked regularly

⚠️ *Elderly care needs vary widely. It's best to have regular check-ups and discuss any concerns with a doctor who knows the person's full health history.*`,
    `### 👴👵 Common Health Screenings for Older Adults

As we age, certain screenings become more important:

**Recommended for most people 65+:**
• **Blood pressure:** At every check-up
• **Cholesterol:** Every 1–5 years
• **Blood sugar:** Every 3 years for diabetes
• **Bone density:** To check for osteoporosis
• **Vision and hearing:** Yearly
• **Colon cancer screening:** Colonoscopy every 10 years (or as advised)
• **Mammogram (women):** Every 1–2 years up to age 75
• **Prostate cancer discussion (men):** Talk with your doctor
• **Vaccinations:** Flu shot yearly, pneumonia vaccine, shingles vaccine, COVID-19 boosters
• **Cognitive screening:** If memory concerns arise

**Medication safety for older adults:**
• Keep an updated list of all medicines, supplements, and vitamins
• Review medicines with your doctor at every visit — some may no longer be needed
• Use one pharmacy so they can check for interactions
• Don't stop or change medicines without talking to the doctor first

💡 *Regular preventive care helps maintain independence and quality of life in later years.*`
  ],

  // ──────────────────────────────────────────────────────────────────────────
  // LIFESTYLE DISORDERS
  // ──────────────────────────────────────────────────────────────────────────
  disease: [
    `### 🧬 Understanding Lifestyle Disorders

Lifestyle disorders are health conditions influenced by how we live — our diet, activity level, habits, and environment. The good news? Many can be prevented or managed with healthy changes.

**Common lifestyle disorders:**
• **Type 2 diabetes** — High blood sugar from insulin resistance
• **High blood pressure (hypertension)** — Often from diet, stress, and inactivity
• **High cholesterol** — Can clog arteries over time
• **Heart disease** — The leading cause of death globally
• **Obesity** — Excess body weight that affects overall health
• **Fatty liver disease** — Fat buildup in the liver from diet and alcohol

**Root causes:**
• Unhealthy diet (too much sugar, salt, and processed food)
• Physical inactivity
• Smoking or tobacco use
• Excessive alcohol
• Chronic stress
• Poor sleep

**Small steps that help prevent lifestyle disorders:**
• Walk for 30 minutes daily
• Eat more vegetables and whole foods, less packaged food
• Drink water instead of sugary drinks
• Get 7–8 hours of sleep
• Manage stress with breathing, hobbies, or talking to someone
• Avoid tobacco and limit alcohol
• Get regular health check-ups

💡 *It's never too late to make healthy changes. Even small improvements can lower your risk significantly.*`
  ],

  // ──────────────────────────────────────────────────────────────────────────
  // HEALTH TIPS & PREVENTION
  // ──────────────────────────────────────────────────────────────────────────
  prevention: [
    `### 🛡️ Preventive Healthcare — Stay Ahead of Illness

**Preventive care means taking action before you get sick.** It's one of the best investments you can make in your health.

**Key prevention strategies:**

**1. Regular check-ups**
Visit your doctor once a year even if you feel fine. Many serious conditions (high BP, diabetes, high cholesterol) have no early symptoms.

**2. Vaccinations**
Stay up to date with recommended vaccines. They protect you and those around you.

**3. Healthy diet**
Eat a variety of whole foods. Limit processed foods, sugar, and salt.

**4. Physical activity**
Aim for 30 minutes of moderate activity most days.

**5. Don't smoke**
Smoking is linked to lung cancer, heart disease, stroke, and many other conditions. Quitting at any age improves health.

**6. Limit alcohol**
If you drink, do so in moderation — no more than 1 drink per day for women, 2 for men.

**7. Sun protection**
Use SPF 30+ sunscreen, wear a hat, and avoid peak sun hours.

**8. Mental health care**
Manage stress, stay connected, and seek help when needed.

💡 *Prevention isn't just about avoiding disease — it's about feeling your best every day.*`,
    `### 🛡️ Simple Daily Habits for Long-Term Health

**Morning:**
• Drink a glass of water after waking up
• Eat a nutritious breakfast with protein
• Stretch for 5 minutes

**Throughout the day:**
• Take short breaks from sitting every hour — stand, walk, stretch
• Have vegetables with lunch and dinner
• Drink water regularly — keep a bottle nearby
• Walk for 15–20 minutes during lunch or after work

**Evening:**
• Limit screen time 30 minutes before bed
• Write down one thing you're grateful for
• Go to bed at a consistent time

**Weekly:**
• Try one new healthy recipe
• Do 2–3 strength training sessions (push-ups, squats, resistance bands)
• Call or meet a friend or family member
• Spend time outdoors

💡 *Don't try to change everything at once. Pick one habit and practice it until it feels natural, then add another.*`
  ],

  // ──────────────────────────────────────────────────────────────────────────
  // HEADACHE, FEVER, STOMACH, COUGH (quick symptom guidance)
  // ──────────────────────────────────────────────────────────────────────────
  headache: [
    `### 🤕 Understanding Headaches

**Common types:**
• **Tension headache:** A dull, pressing pain on both sides of the head. Often from stress, poor posture, or eye strain.
• **Migraine:** Intense throbbing pain, usually on one side. May come with nausea, light sensitivity, or vision changes.
• **Sinus headache:** Pain and pressure around the forehead, eyes, and cheeks. Usually with a cold or allergies.
• **Dehydration headache:** From not drinking enough water — resolves with hydration.

**Helpful tips for relief:**
• Drink water — dehydration is a common cause
• Rest in a dark, quiet room
• Apply a cool cloth to your forehead or neck
• Avoid screens for a while
• Gentle neck and shoulder stretches
• Over-the-counter pain relief (acetaminophen or ibuprofen) can help if needed

⚠️ *If your headache is sudden and severe (the worst of your life), or comes with fever, stiff neck, confusion, or weakness — seek emergency medical help immediately.*`
  ],

  fever: [
    `### 🌡️ Understanding Fever

**What is a fever?**
A fever is a temporary rise in body temperature. In adults, a temperature of 100.4°F (38°C) or higher is generally considered a fever. It's usually a sign that your immune system is fighting an infection.

**Fever is not an illness itself — it's a symptom.** Most fevers from viral infections go away on their own in 2–3 days.

**What you can do at home:**
• Rest — your body needs energy to fight the infection
• Drink plenty of fluids — water, clear soups, herbal teas to prevent dehydration
• Wear lightweight clothing and keep the room at a comfortable temperature
• Use acetaminophen or ibuprofen if fever is causing discomfort (follow label directions)
• A lukewarm (not cold) sponge bath can help bring temperature down

**When to see a doctor:**
• Fever over 103°F (39.4°C) for adults
• Fever lasting more than 3 days
• Severe headache, stiff neck, or confusion
• Difficulty breathing
• Rash that doesn't fade when pressed
• Signs of dehydration (dry mouth, little urination, dizziness)

⚠️ *For infants under 3 months with any fever, seek medical attention immediately.*`
  ],

  stomach: [
    `### 🫃 Digestive Discomfort — Common Causes and Tips

**Common stomach issues:**

**Indigestion:** Feeling full, uncomfortable, or burning after eating
• Eat smaller meals, chew slowly, avoid lying down after eating

**Bloating and gas:** Often from certain foods, eating too fast, or swallowing air
• Identify trigger foods (beans, cabbage, onions, carbonated drinks)
• Eat slowly and chew thoroughly

**Constipation:** Difficulty passing stool, less than 3 times per week
• Drink more water, eat more fiber (fruits, vegetables, whole grains), exercise regularly

**Diarrhea:** Loose, watery stools
• Stay hydrated with water or oral rehydration solution
• Eat bland foods — bananas, rice, applesauce, toast (BRAT diet)
• Avoid dairy, fried foods, and spicy food until it passes

**Acid reflux or heartburn:** Burning sensation in the chest
• Avoid spicy, fatty, and acidic foods
• Don't eat 2–3 hours before lying down
• Elevate the head of your bed slightly

⚠️ *See a doctor if you have: severe or worsening pain, persistent vomiting, blood in stool, fever, or symptoms lasting more than a week.*`
  ],

  cough: [
    `### 🤧 Colds, Flu, and Cough — What Helps

**Colds vs. Flu at a glance:**
• **Cold:** Gradual onset, mild symptoms — runny nose, sneezing, sore throat. Usually resolves in 7–10 days.
• **Flu:** Sudden onset, high fever, body aches, fatigue, headache. Can be more serious.

**Self-care tips for cough and cold:**
• Rest as much as possible
• Drink warm fluids — herbal tea with honey, warm water, clear soups
• Gargle warm salt water for a sore throat (½ teaspoon salt in a glass of warm water)
• Use a humidifier or take a steamy shower to ease congestion
• Honey can help soothe a cough (for adults and children over 1 year — not for infants)

**What doesn't help:**
• Antibiotics do NOT work against viruses (colds, flu) — they only treat bacterial infections
• Overusing cough syrups can sometimes make symptoms last longer

**When to see a doctor:**
• Fever lasting more than 3 days
• Difficulty breathing or chest pain
• Cough producing blood
• Symptoms that improve then come back worse
• If you have a chronic condition (asthma, heart disease, diabetes)

⚠️ *Trust your instincts. If you feel something is seriously wrong, seek medical attention.*`
  ],

  // ──────────────────────────────────────────────────────────────────────────
  // GENERAL / FALLBACK
  // ──────────────────────────────────────────────────────────────────────────
  general: [
    `Thank you for your question. Here's some general health guidance:

The foundation of good health rests on a few key habits:
• **Eat a balanced diet** — prioritize vegetables, fruits, whole grains, and protein
• **Stay active** — aim for 30 minutes of movement most days
• **Get enough sleep** — 7–9 hours for most adults
• **Drink water** — stay hydrated throughout the day
• **Manage stress** — take time to relax and connect with others
• **Avoid tobacco** and limit alcohol
• **Get regular check-ups** — prevention is always better than cure

If you have a specific health topic in mind, feel free to ask me about:
• Diseases and medical conditions
• Symptoms and their possible causes
• Medicines and their common uses
• Nutrition and healthy eating
• Exercise and fitness
• Mental health
• First aid
• Women's health, child health, or elderly care
• Vaccinations and medical tests
• Prevention and healthy habits

💡 *I'm here to provide educational information — not to diagnose or treat. For personalized medical advice, please consult a healthcare professional.*`,
    `That's an interesting health question! While I may not have a detailed answer prepared for this specific topic, I'd be happy to help with any of the following areas:

**You can ask me about:**
• 🧬 **Diseases** — diabetes, heart disease, thyroid, arthritis, and many more
• 🔍 **Symptoms** — what they might mean and when to see a doctor
• 💊 **Medicines** — common types, uses, and how to take them safely
• 🥗 **Nutrition** — balanced eating, special diets, and meal tips
• 🏃‍♂️ **Exercise** — getting started, staying motivated, different types
• 🧘‍♀️ **Mental health** — stress, anxiety, building emotional wellness
• 🩹 **First aid** — common injuries and emergencies
• 👶 **Child health** and 👴 **elderly care**
• 👩 **Women's health**
• 💉 **Vaccinations** and 🩺 **medical tests**
• 🌿 **Prevention** and healthy daily habits

*Feel free to ask a more specific question, and I'll do my best to provide clear, helpful, evidence-based information!*`,
    `Good question! Here's a helpful perspective:

Your body is remarkably good at staying healthy when given the right support. The basics matter more than any complex strategy:

• **Eat real food** — mostly plants, not too much processing
• **Move regularly** — find activities you enjoy
• **Sleep well** — make it a priority, not an afterthought
• **Stay connected** — relationships are essential for health
• **Don't smoke** — one of the single best things you can do
• **Keep learning** — understanding your health empowers you

If you'd like to explore any of these areas in more detail, just let me know — I'm happy to share practical, evidence-based information.

⚠️ *Remember: This is educational information. For specific health concerns, please consult a qualified healthcare professional.*`
  ],

  // ──────────────────────────────────────────────────────────────────────────
  // GREETING
  // ──────────────────────────────────────────────────────────────────────────
  greeting: [
    `Hello! 👋 I'm your **Health Awareness Assistant**.

Think of me as a friendly health educator. I'm here to share clear, reliable information about a wide range of health topics — in simple language you can understand and use.

**You can ask me about:**
• 🧬 **Diseases & conditions** — diabetes, heart disease, thyroid, asthma, arthritis, and many more
• 🔍 **Symptoms** — what they might mean and when to see a doctor
• 💊 **Medicines** — common types and how to use them safely
• 🥗 **Nutrition** — healthy eating, balanced diets, meal tips
• 🏃‍♂️ **Fitness** — exercise for all levels
• 🧘‍♀️ **Mental wellness** — managing stress and building resilience
• 🩹 **First aid** — what to do in common emergencies
• 👶 **Child health** & 👴 **Elderly care**
• 👩 **Women's health**
• 💉 **Vaccinations** & 🩺 **Medical tests**
• 🌿 **Prevention & healthy habits**

**A few things to know:**
✅ I provide educational information only
✅ I use simple, clear language
✅ I'll always encourage you to see a doctor for personal medical concerns

*Go ahead — ask me any health question!*`,
    `Hi there! 👋 Welcome to your **Health Awareness Assistant**.

I'm here to help you understand health topics in a clear, friendly, and practical way. Whether you're curious about a specific disease, wondering about symptoms, looking for healthy eating tips, or wanting to start exercising — I've got information to share.

**Here are some questions to get started:**
• "What are the early signs of diabetes?"
• "How much water should I drink every day?"
• "What's the best way to manage stress?"
• "Can you explain my blood test results?"
• "What vaccines do adults need?"
• "How can I help my elderly parent stay healthy?"

💡 *I explain things in simple language and always prioritize your safety. I don't diagnose or prescribe — but I can help you understand your health better.*

*What would you like to learn about today?*`,
    `Welcome! I'm your **Health Awareness Assistant** — your friendly guide to understanding health and wellness.

My goal is to explain health information in a way that's clear, practical, and easy to apply. Here's what makes me different:

📚 **I focus on education** — I help you understand health topics
🛡️ **Safety first** — I never diagnose or prescribe
💬 **Simple language** — I avoid confusing medical jargon
📋 **Detailed answers** — I use bullet points and examples
🌍 **Whole-person health** — I cover body and mind

**I can help you learn about:**
• Diseases and their common symptoms
• What different symptoms might suggest
• How common medicines work
• Nutrition and building better eating habits
• Starting and sticking with exercise
• Managing stress and mental wellness
• First aid for everyday situations
• Health at every age — children, adults, and seniors
• Preventive care and healthy habits

*Remember: I'm an educational tool. For personal medical advice, always consult a doctor who knows your health history.*

*Ask me anything about health!*`
  ]
};

// ────────────────────────────────────────────────────────────────────────────
// Hindi responses
// ────────────────────────────────────────────────────────────────────────────
const RESPONSES_HI = {
  eat: `### 🥗 स्वस्थ भोजन और पोषण\n\nसंतुलित आहार आपके शरीर को सही ढंग से काम करने के लिए आवश्यक पोषक तत्व प्रदान करता है:\n\n* **साबुत अनाज खाएं:** ओट्स, ब्राउन राइस, दालें और रोटी को प्राथमिकता दें।\n* **सब्जियाँ और फल:** अपनी थाली का आधा हिस्सा रंगीन सब्जियों और फलों से भरें।\n* **चीनी और नमक कम करें:** मीठे पेय, प्रसंस्कृत खाद्य पदार्थ और जंक फूड से बचें।\n* **पानी पिएं:** दिन में 8-10 गिलास पानी पिएं।\n\n*याद रखें: व्यक्तिगत पोषण संबंधी जरूरतें उम्र, लिंग और स्वास्थ्य स्थिति के अनुसार भिन्न होती हैं।*`,
  exercise: `### 🏃‍♂️ शारीरिक गतिविधि और फिटनेस\n\nनियमित व्यायाम आपके स्वास्थ्य के लिए अत्यंत महत्वपूर्ण है:\n\n* **साप्ताहिक लक्ष्य:** प्रति सप्ताह कम से कम 150 मिनट मध्यम तीव्रता का व्यायाम करें।\n* **शक्ति प्रशिक्षण:** सप्ताह में 2 दिन मांसपेशियों को मजबूत करने वाले व्यायाम करें।\n* **बैठने का समय कम करें:** हर घंटे 5 मिनट के लिए उठकर चलें।\n* **छोटी शुरुआत करें:** रोज 10-15 मिनट पैदल चलने से शुरू करें।\n\n*नोट: किसी भी नए व्यायाम कार्यक्रम से पहले अपने चिकित्सक से परामर्श करें।*`,
  sleep: `### 😴 नींद में सुधार के उपाय\n\nअच्छी नींद शारीरिक और मानसिक स्वास्थ्य दोनों के लिए आवश्यक है:\n\n1. **नियमित समय:** हर दिन एक ही समय पर सोएं और उठें।\n2. **वातावरण:** कमरे को अंधेरा, शांत और ठंडा रखें।\n3. **स्क्रीन बंद करें:** सोने से 30-60 मिनट पहले मोबाइल और टीवी बंद करें।\n4. **कैफीन से बचें:** शाम को चाय, कॉफी और शराब से बचें।\n\n*अगर लगातार नींद न आने की समस्या हो तो डॉक्टर से मिलें।*`,
  hydration: `### 💧 जलयोजन (हाइड्रेशन)\n\nपानी आपके शरीर के हर कार्य के लिए आवश्यक है:\n\n* **रोज 8-10 गिलास पानी पिएं।**\n* **व्यायाम से पहले और बाद में अतिरिक्त पानी पिएं।**\n* **फलों और सब्जियों से भी पानी मिलता है** — तरबूज, खीरा, संतरा।\n* **डिहाइड्रेशन के लक्षण:** सिरदर्द, थकान, गहरे रंग का पेशाब।\n\n*पेशाब का हल्का पीला रंग अच्छे हाइड्रेशन का संकेत है।*`,
  stress: `### 🧘‍♀️ तनाव प्रबंधन और मानसिक स्वास्थ्य\n\nमानसिक स्वास्थ्य शारीरिक स्वास्थ्य जितना ही महत्वपूर्ण है:\n\n* **गहरी सांस लें:** 4-7-8 तकनीक — 4 सेकंड सांस लें, 7 सेकंड रोकें, 8 सेकंड छोड़ें।\n* **व्यायाम करें:** शारीरिक गतिविधि तनाव हार्मोन को कम करती है।\n* **पर्याप्त नींद लें:** 7-9 घंटे की नींद तनाव कम करने में मदद करती है।\n* **बात करें:** अपनी भावनाओं को परिवार या दोस्तों से साझा करें।\n\n*गंभीर तनाव या चिंता होने पर मानसिक स्वास्थ्य विशेषज्ञ से मिलें।*`,
  general: `आपके प्रश्न के लिए धन्यवाद। स्वस्थ जीवन के मूल सिद्धांत:\n\n* **जलयोजन:** रोज 8-10 गिलास पानी पिएं।\n* **पोषण:** साबुत अनाज, फल, सब्जियाँ और प्रोटीन खाएं।\n* **व्यायाम:** सप्ताह में 150 मिनट मध्यम व्यायाम करें।\n* **नींद:** 7-9 घंटे की अच्छी नींद लें।\n* **जांच:** नियमित स्वास्थ्य जांच कराएं।\n\n*विशिष्ट लक्षणों के लिए कृपया चिकित्सक से परामर्श करें।*`
};

const healthTips = [
  "**Health Tip:** Walk for 10–15 minutes after meals — it helps digestion and steady blood sugar.",
  "**Health Tip:** Swap one sugary drink for water today. Small changes add up over time.",
  "**Health Tip:** Practice the 20-20-20 rule for your eyes — every 20 minutes, look 20 feet away for 20 seconds.",
  "**Health Tip:** Add one extra serving of vegetables to your lunch or dinner today.",
  "**Health Tip:** Take 5 slow, deep breaths right now. It calms your nervous system instantly.",
  "**Health Tip:** Go screen-free for 30 minutes before bed tonight. Read or stretch instead.",
  "**Health Tip:** Eat a rainbow of fruits and vegetables — different colors mean different nutrients.",
  "**Health Tip:** Drink a glass of water first thing in the morning to rehydrate after sleep.",
  "**Health Tip:** Stand up and stretch for 2 minutes every hour if you sit for long periods.",
  "**Health Tip:** Flossing daily reaches 40% of tooth surfaces that brushing misses.",
  "**Health Tip:** A 20-minute walk in nature can significantly lower stress levels.",
  "**Health Tip:** Include protein at every meal — it keeps you full and supports muscle health.",
  "**Health Tip:** Get 7–8 hours of sleep — your body repairs itself while you rest.",
  "**Health Tip:** Wash your hands for 20 seconds — it's one of the best ways to prevent illness.",
  "**Health Tip:** Laughing reduces stress hormones. Watch something funny or spend time with people who make you smile."
];

// ────────────────────────────────────────────────────────────────────────────
// Topic tracking for response variety
// ────────────────────────────────────────────────────────────────────────────
let usedResponseIndices = {};

function pickRandom(arr, topic) {
  if (!arr || arr.length === 0) return '';
  if (arr.length === 1) return arr[0];
  if (!usedResponseIndices[topic]) usedResponseIndices[topic] = [];
  let available = arr.map((_, i) => i).filter(i => !usedResponseIndices[topic].includes(i));
  if (available.length === 0) {
    usedResponseIndices[topic] = [];
    available = arr.map((_, i) => i);
  }
  const idx = available[Math.floor(Math.random() * available.length)];
  usedResponseIndices[topic].push(idx);
  return arr[idx];
}

// ────────────────────────────────────────────────────────────────────────────
// Helper functions
// ────────────────────────────────────────────────────────────────────────────
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function containsWordRoot(text, wordList) {
  const textLower = text.toLowerCase();
  for (const word of wordList) {
    const wordLower = word.toLowerCase();
    if (/^[\x00-\x7F]*$/.test(wordLower)) {
      if (new RegExp('\\b' + escapeRegExp(wordLower), 'i').test(textLower)) return true;
    } else {
      if (textLower.includes(wordLower)) return true;
    }
  }
  return false;
}

// ────────────────────────────────────────────────────────────────────────────
// Safety & health checks
// ────────────────────────────────────────────────────────────────────────────
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
    'health', 'wellness', 'fitness', 'hygiene', 'mental', 'lifestyle', 'preventive', 'prevention',
    'diet', 'nutrition', 'eat', 'food', 'meal', 'calorie', 'vitamin', 'protein', 'fat', 'carb',
    'exercise', 'workout', 'sport', 'walk', 'run', 'cardio', 'strength', 'stretch', 'yoga',
    'sleep', 'insomnia', 'tired', 'bedtime', 'rest', 'fatigue',
    'hydrate', 'hydration', 'water', 'drink', 'fluid',
    'stress', 'anxiety', 'calm', 'relax', 'meditate', 'mindful', 'depress', 'mental health',
    'first aid', 'burn', 'cut', 'wound', 'bleed', 'choke', 'sprain', 'injury', 'injured',
    'wash', 'teeth', 'clean', 'brush', 'soap', 'bath', 'shower', 'hygiene',
    'vaccine', 'vaccination', 'checkup', 'screening', 'test', 'immun',
    'disease', 'diabetes', 'hypertension', 'pressure', 'heart', 'cancer', 'obesity', 'cholesterol', 'stroke',
    'headache', 'migraine', 'fever', 'temperature', 'stomach', 'nausea', 'vomit', 'belly', 'indigestion',
    'cough', 'cold', 'flu', 'sore throat', 'congestion', 'runny nose', 'breathe', 'breathing',
    'pain', 'ache', 'sick', 'ill', 'doctor', 'medical', 'hospital', 'medicine', 'drug', 'symptom',
    'body', 'lung', 'muscle', 'bone', 'skin', 'blood', 'therap', 'treatment', 'dose', 'therapy',
    'dentist', 'nutritionist', 'cardiologist', 'pediatrician', 'gynecologist',
    'asthma', 'allergy', 'arthritis', 'thyroid', 'kidney', 'uti', 'infection', 'back pain',
    'acne', 'eczema', 'dental', 'tooth', 'teeth', 'gum', 'digestion', 'constipation', 'diarrhea', 'acid reflux', 'gerd',
    'immunity', 'immune', 'weight', 'obese', 'pregnancy', 'pregnant', 'prenatal', 'bone', 'osteoporosis',
    'anemia', 'dengue', 'malaria', 'typhoid', 'tuberculosis', 'tb', 'hepatitis', 'covid', 'corona',
    'eye', 'vision', 'glasses', 'virus', 'bacteria', 'infection',
    'women', 'woman', 'child', 'children', 'baby', 'infant', 'elderly', 'senior', 'old age', 'aging',
    'medicine', 'tablet', 'pill', 'antibiotic', 'prescription', 'dose', 'dosage',
    'lab', 'report', 'test result', 'blood test', 'xray', 'ultrasound', 'mri', 'ct scan', 'ecg',
    'symptom', 'diagnosis', 'treatment', 'therapy', 'surgery',
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
  const msgLower = message.toLowerCase();
  const emergencyKeywords = [
    'chest pain', 'heart attack', 'breathing difficulty', 'difficulty breathing',
    'shortness of breath', "can't breathe", 'cannot breathe', 'can not breathe',
    'stroke', 'unconscious', 'heavy bleeding', 'severe bleeding', 'suicidal',
    'kill myself', 'poisoned', 'poisoning', 'seizure', 'passed out'
  ];
  return emergencyKeywords.some(keyword => msgLower.includes(keyword));
}

// ────────────────────────────────────────────────────────────────────────────
// Topic detection
// ────────────────────────────────────────────────────────────────────────────
function detectSpecificCondition(message) {
  const m = message.toLowerCase();

  // Emergency
  if (isEmergency(m)) return 'emergency';

  // Diseases (check specific before general)
  if (containsWordRoot(m, ['diabetes', 'diabetic', 'blood sugar', 'sugar level', 'insulin', 'madhumeh', 'मधुमेह'])) return 'diabetes';
  if (containsWordRoot(m, ['blood pressure', 'hypertension', 'bp', 'high bp', 'low bp', 'hypotension', 'रक्तचाप'])) return 'bloodpressure';
  if (containsWordRoot(m, ['heart', 'cardiac', 'cardio', 'chest pain', 'heart attack', 'heart disease', 'हृदय'])) return 'heart';
  if (containsWordRoot(m, ['cancer', 'tumor', 'tumour', 'malignant', 'oncolog', 'chemotherapy', 'कैंसर'])) return 'cancer';
  if (containsWordRoot(m, ['cholesterol', 'ldl', 'hdl', 'triglyceride', 'lipid'])) return 'heart';
  if (containsWordRoot(m, ['asthma', 'wheez', 'inhaler', 'दमा'])) return 'asthma';
  if (containsWordRoot(m, ['allergy', 'allergen', 'pollen', 'hay fever', 'एलर्जी'])) return 'allergy';
  if (containsWordRoot(m, ['arthritis', 'rheumatoid', 'osteoarthritis', 'joint pain', 'गठिया'])) return 'arthritis';
  if (containsWordRoot(m, ['thyroid', 'hypothyroid', 'hyperthyroid', 'थायराइड'])) return 'thyroid';
  if (containsWordRoot(m, ['kidney', 'renal', 'kidney stone', 'uti', 'urinary tract', 'गुर्दा'])) return 'kidney';
  if (containsWordRoot(m, ['back pain', 'backache', 'spine', 'sciatica', 'पीठ दर्द'])) return 'backpain';
  if (containsWordRoot(m, ['skin', 'acne', 'eczema', 'rash', 'dermatitis', 'psoriasis', 'त्वचा'])) return 'skincare';
  if (containsWordRoot(m, ['dental', 'tooth', 'teeth', 'gum', 'cavity', 'dentist', 'oral health', 'दांत'])) return 'dental';
  if (containsWordRoot(m, ['digestion', 'digestive', 'constipation', 'diarrhea', 'bloating', 'acid reflux', 'gerd', 'heartburn', 'indigestion', 'पाचन'])) return 'digestion';
  if (containsWordRoot(m, ['immunity', 'immune', 'immun', 'प्रतिरक्षा'])) return 'immunity';
  if (containsWordRoot(m, ['weight', 'obese', 'obesity', 'overweight', 'weight loss', 'weight gain', 'वजन'])) return 'weight';
  if (containsWordRoot(m, ['pregnancy', 'pregnant', 'prenatal', 'antenatal', 'गर्भावस्था'])) return 'pregnancy';
  if (containsWordRoot(m, ['bone', 'osteoporosis', 'calcium', 'bone density', 'हड्डी'])) return 'bone';
  if (containsWordRoot(m, ['anemia', 'iron', 'haemoglobin', 'hemoglobin', 'एनीमिया'])) return 'anemia';
  if (containsWordRoot(m, ['dengue', 'डेंगू'])) return 'dengue';
  if (containsWordRoot(m, ['malaria', 'मलेरिया'])) return 'malaria';
  if (containsWordRoot(m, ['typhoid', 'टाइफाइड'])) return 'typhoid';
  if (containsWordRoot(m, ['tuberculosis', 'tb', 'क्षय रोग'])) return 'tuberculosis';
  if (containsWordRoot(m, ['hepatitis', 'jaundice', 'liver', 'पीलिया'])) return 'hepatitis';
  if (containsWordRoot(m, ['covid', 'corona', 'coronavirus', 'कोविड'])) return 'covid';
  if (containsWordRoot(m, ['eye', 'vision', 'sight', 'glaucoma', 'cataract', 'conjunctivitis', 'आंख'])) return 'eye';

  // Symptoms
  if (containsWordRoot(m, ['symptom', 'symptoms', 'cause', 'signs', 'लक्षण', 'कारण'])) return 'symptoms';

  // Medicines
  if (containsWordRoot(m, ['medicine', 'medication', 'tablet', 'pill', 'antibiotic', 'drug', 'dose', 'dosage', 'prescription', 'दवा', 'गोली'])) return 'medicines';

  // Vaccinations
  if (containsWordRoot(m, ['vaccine', 'vaccination', 'vaccinate', 'immunization', 'shot', 'टीका'])) return 'vaccinations';

  // Medical tests
  if (containsWordRoot(m, ['test', 'lab', 'report', 'blood test', 'xray', 'x-ray', 'ultrasound', 'mri', 'ct scan', 'ecg', 'check-up', 'checkup', 'screening', 'जांच', 'रिपोर्ट'])) return 'medicaltests';

  // Women's health
  if (containsWordRoot(m, ['women', 'woman', 'female', 'menstrual', 'period', 'pcos', 'menopause', 'gynecologist', 'महिला'])) return 'womenshealth';

  // Child health
  if (containsWordRoot(m, ['child', 'children', 'baby', 'infant', 'toddler', 'pediatric', 'kids', 'बच्चा', 'शिशु'])) return 'childhealth';

  // Elderly care
  if (containsWordRoot(m, ['elderly', 'senior', 'old age', 'aging', 'older adult', 'बुजुर्ग'])) return 'elderlycare';

  // Lifestyle disorders
  if (containsWordRoot(m, ['lifestyle', 'disorder', 'chronic disease', 'non-communicable'])) return 'disease';

  // Common symptoms
  if (containsWordRoot(m, ['headache', 'migraine'])) return 'headache';
  if (containsWordRoot(m, ['fever', 'temperature', 'hot', 'बुखार'])) return 'fever';
  if (containsWordRoot(m, ['stomach', 'nausea', 'vomit', 'belly', 'diarrhea', 'constipation'])) return 'stomach';
  if (containsWordRoot(m, ['cough', 'cold', 'flu', 'sore throat', 'congestion', 'runny nose'])) return 'cough';

  // General health topics
  if (containsWordRoot(m, ['eat', 'diet', 'food', 'nutrition', 'meal'])) return 'nutrition';
  if (containsWordRoot(m, ['exercise', 'fitness', 'workout', 'sport', 'walk', 'run'])) return 'exercise';
  if (containsWordRoot(m, ['sleep', 'insomnia', 'tired', 'bedtime', 'rest'])) return 'sleep';
  if (containsWordRoot(m, ['hydrate', 'hydration', 'water', 'drink'])) return 'hydration';
  if (containsWordRoot(m, ['stress', 'anxiety', 'mental', 'wellness', 'calm', 'relax', 'meditate'])) return 'stress';
  if (containsWordRoot(m, ['first aid', 'burn', 'cut', 'wound', 'bleed', 'choking'])) return 'firstaid';
  if (containsWordRoot(m, ['hygiene', 'wash', 'teeth', 'brush', 'clean'])) return 'hygiene';
  if (containsWordRoot(m, ['preventive', 'vaccine', 'checkup', 'screening', 'prevention', 'health tip'])) return 'prevention';

  // Tips and greetings
  if (containsWordRoot(m, ['tip', 'daily'])) return 'tip';
  if (containsWordRoot(m, ['hello', 'hi', 'hey', 'help', 'who are you', 'what can you do', 'welcome'])) return 'greeting';

  return 'general';
}

// ────────────────────────────────────────────────────────────────────────────
// Response selection
// ────────────────────────────────────────────────────────────────────────────
function getLocalResponse(message) {
  const topic = detectSpecificCondition(message);

  if (topic === 'emergency') return RESPONSES.emergency[0];
  if (topic === 'greeting') return pickRandom(RESPONSES.greeting, 'greeting');
  if (topic === 'tip') {
    return `Here's a daily health tip for you:\n\n${healthTips[Math.floor(Math.random() * healthTips.length)]}`;
  }

  if (RESPONSES[topic]) {
    return pickRandom(RESPONSES[topic], topic);
  }

  return pickRandom(RESPONSES.general, 'general');
}

function getHindiFallback(message) {
  const m = message.toLowerCase();
  if (containsWordRoot(m, ['eat', 'diet', 'food', 'nutrition', 'meal', 'खाना', 'भोजन', 'पोषण', 'आहार'])) return RESPONSES_HI.eat;
  if (containsWordRoot(m, ['exercise', 'fitness', 'workout', 'walk', 'run', 'व्यायाम', 'कसरत', 'फिटनेस', 'योग'])) return RESPONSES_HI.exercise;
  if (containsWordRoot(m, ['sleep', 'insomnia', 'tired', 'rest', 'नींद', 'सोना', 'आराम', 'थकान'])) return RESPONSES_HI.sleep;
  if (containsWordRoot(m, ['water', 'hydrat', 'drink', 'fluid', 'पानी', 'जल', 'पीना'])) return RESPONSES_HI.hydration;
  if (containsWordRoot(m, ['stress', 'anxiety', 'mental', 'meditat', 'relax', 'depress', 'तनाव', 'चिंता', 'मानसिक', 'ध्यान'])) return RESPONSES_HI.stress;
  return RESPONSES_HI.general;
}

// ────────────────────────────────────────────────────────────────────────────
// Main entry point — called from app.js
// ────────────────────────────────────────────────────────────────────────────
function getChatbotResponse(userMessage, conversationHistory, lang) {
  const refusalEn = "I'm a Health Awareness Assistant, and I can only help with health and wellness topics. Please ask me a health-related question!";
  const refusalHi = "मैं एक स्वास्थ्य जागरूकता सहायक हूँ और केवल स्वास्थ्य और कल्याण से संबंधित विषयों पर मदद कर सकता हूँ। कृपया स्वास्थ्य से संबंधित प्रश्न पूछें।";
  const refusalMessage = lang === 'hi' ? refusalHi : refusalEn;

  const disclaimerEn = "\n\n---\n*⚠️ Important: I am an AI Health Awareness Assistant. The information I provide is for educational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare provider for personal medical concerns. If you are experiencing a medical emergency, call your local emergency services immediately.*";
  const disclaimerHi = "\n\n---\n*⚠️ महत्वपूर्ण: मैं एक AI स्वास्थ्य जागरूकता सहायक हूँ। मेरे द्वारा दी गई जानकारी केवल शैक्षिक उद्देश्यों के लिए है। यह पेशेवर चिकित्सा सलाह, निदान या उपचार का विकल्प नहीं है। व्यक्तिगत चिकित्सा संबंधी चिंताओं के लिए कृपया योग्य स्वास्थ्य सेवा प्रदाता से परामर्श करें। आपातकालीन स्थिति में तुरंत अपनी स्थानीय आपातकालीन सेवाओं से संपर्क करें।*";

  const disclaimerText = lang === 'hi' ? disclaimerHi : disclaimerEn;

  // Safety: block off-topic content
  if (isBlacklisted(userMessage) || !isHealthRelated(userMessage)) {
    return refusalMessage;
  }

  // Safety: emergency override
  if (isEmergency(userMessage)) {
    return RESPONSES.emergency[0] + disclaimerText;
  }

  if (lang === 'hi') {
    return getHindiFallback(userMessage) + disclaimerText;
  }

  return getLocalResponse(userMessage) + disclaimerText;
}
