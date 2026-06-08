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
  // DIZZINESS & VERTIGO
  // ──────────────────────────────────────────────────────────────────────────
  dizziness: [
    `### 🌀 Understanding Dizziness and Vertigo

**Dizziness vs. Vertigo:**
• **Dizziness** is a general feeling of being lightheaded, unsteady, or about to faint
• **Vertigo** is a specific sensation that you or the room is spinning or moving

**Common causes of dizziness:**

**Inner ear problems (most common cause of vertigo):**
• **BPPV (Benign Paroxysmal Positional Vertigo):** Tiny crystals in your inner ear become dislodged. Triggered by head movements like rolling over in bed or looking up. Can be treated with simple repositioning maneuvers (Epley maneuver) done by a doctor or physiotherapist.
• **Labyrinthitis:** Inflammation of the inner ear, often after a viral infection. May include hearing loss or ringing in the ears.

**Other common causes:**
• **Dehydration:** Not drinking enough water — one of the easiest causes to fix
• **Low blood sugar:** Skipping meals or not eating enough
• **Low blood pressure:** Standing up too quickly (orthostatic hypotension)
• **Anemia:** Low iron levels reduce oxygen to your brain
• **Medication side effects:** Some blood pressure medicines, sedatives, and antidepressants can cause dizziness
• **Anxiety or stress:** Can cause a floating or unreal feeling
• **Migraine:** Some migraines cause vertigo without headache

**When to seek emergency help:**
• Dizziness with chest pain, shortness of breath, or irregular heartbeat
• Sudden severe headache
• Sudden confusion or trouble speaking
• Weakness or numbness on one side of the body
• Fainting or loss of consciousness

**What you can do:**
• Sit or lie down immediately when dizzy — don't try to "walk it off"
• Drink water if you might be dehydrated
• Eat something if you haven't eaten in a while
• Avoid sudden head movements
• If you feel faint, lie down and elevate your legs

*Occasional mild dizziness is common and usually not serious. But if it's frequent, severe, or comes with other symptoms, see a doctor to identify the underlying cause.*`
  ],

  // ──────────────────────────────────────────────────────────────────────────
  // ADDITIONAL DISEASES & CONDITIONS
  // ──────────────────────────────────────────────────────────────────────────
  asthma: [
    `### 🌬️ Understanding Asthma

**What is asthma?**
Asthma is a condition where your airways become narrow and swollen, making it harder to breathe. It often starts in childhood but can develop at any age.

**Common triggers:**
• Allergens — pollen, dust mites, pet dander, mold
• Irritants — smoke, strong smells, air pollution, cold air
• Exercise — especially in cold, dry weather
• Respiratory infections — colds and flu

**Common symptoms:**
• Wheezing (a whistling sound when breathing)
• Shortness of breath
• Chest tightness
• Coughing, especially at night or early morning

**Management tips:**
• Take your preventer inhaler daily as prescribed — it reduces airway inflammation over time
• Keep your reliever inhaler with you at all times for sudden attacks
• Know your triggers and avoid them when possible
• Have an asthma action plan from your doctor

*Asthma is a manageable condition. Most people with asthma live full, active lives with proper treatment.*`
  ],

  allergy: [
    `### 🤧 Understanding Allergies

**What is an allergy?**
An allergy is your immune system reacting to a normally harmless substance as if it's a threat. Common allergens include pollen, dust mites, pet dander, certain foods, and insect stings.

**Common symptoms:**
• Sneezing, runny or stuffy nose
• Itchy, watery eyes
• Skin rashes or hives
• Swelling of lips, tongue, or throat
• Digestive issues (from food allergies)
• In severe cases: difficulty breathing (anaphylaxis)

**Management approaches:**
• **Avoidance** — the most effective strategy. Know your triggers and reduce exposure
• **Antihistamines** — block the allergic reaction (cetirizine, loratadine)
• **Nasal sprays** — steroid sprays reduce nasal inflammation
• **Allergy shots (immunotherapy)** — gradual exposure builds long-term tolerance

**When to seek emergency help:**
Difficulty breathing, swelling of throat/tongue, rapid pulse, dizziness after exposure — use epinephrine auto-injector if available and call emergency services immediately

*If you suspect you have allergies, an allergist can help identify your triggers and create a management plan.*`
  ],

  arthritis: [
    `### 🦴 Understanding Arthritis

**What is arthritis?**
Arthritis is inflammation of one or more joints. It causes pain, stiffness, and swelling. The two most common types are osteoarthritis (wear and tear) and rheumatoid arthritis (autoimmune).

**Common symptoms:**
• Joint pain and tenderness
• Stiffness, especially in the morning
• Swelling around joints
• Reduced range of motion
• Warmth or redness over the joint

**Self-care strategies:**
• **Gentle exercise** — swimming, walking, and stretching keep joints flexible
• **Heat and cold therapy** — warm baths relax muscles; ice packs reduce swelling
• **Maintain a healthy weight** — every kg of weight loss reduces knee joint load by 4 kg
• **Supportive devices** — canes, braces, ergonomic tools reduce joint strain
• **Anti-inflammatory foods** — fatty fish, turmeric, berries, leafy greens

**When to see a doctor:**
If joint pain interferes with daily activities, lasts more than a few weeks, or is accompanied by swelling and redness

*Early diagnosis and treatment can slow progression and improve quality of life. See a rheumatologist for proper evaluation.*`
  ],

  thyroid: [
    `### 🔬 Understanding Thyroid Disorders

**What is the thyroid?**
Your thyroid is a small butterfly-shaped gland in your neck that produces hormones controlling your metabolism — how your body uses energy.

**Two main conditions:**

**Hypothyroidism (underactive):**
• Symptoms: Fatigue, weight gain, cold sensitivity, dry skin, hair loss, slow heart rate, depression
• Treatment: Daily thyroid hormone medication (levothyroxine) — safe and effective

**Hyperthyroidism (overactive):**
• Symptoms: Weight loss, rapid heartbeat, anxiety, tremors, heat sensitivity, bulging eyes
• Treatment: Medication, radioactive iodine, or surgery depending on the cause

**Diet tips for thyroid health:**
• Take thyroid medication on an empty stomach (30-60 minutes before food)
• Iodine is essential — iodized salt, fish, dairy, eggs
• Selenium supports thyroid function — Brazil nuts, tuna, eggs
• Regular blood tests help monitor and adjust medication

*Thyroid conditions are common and very treatable. Most people with proper treatment lead normal, healthy lives.*`
  ],

  kidney: [
    `### 🫘 Understanding Kidney Health

**What do kidneys do?**
Your kidneys filter waste from your blood, balance body fluids, control blood pressure, and produce hormones for red blood cell production and bone health.

**Common kidney problems:**

**Kidney stones:**
Hard mineral deposits that form in the kidneys. Symptoms include severe pain in the back/side, blood in urine, and nausea. Most stones pass on their own with plenty of water.

**UTIs (Urinary Tract Infections):**
Bacterial infections more common in women. Symptoms: burning during urination, frequent urge to urinate, cloudy urine. Treated with antibiotics.

**Chronic Kidney Disease (CKD):**
Gradual loss of kidney function, most often caused by diabetes or high blood pressure. Early stages have no symptoms — that's why regular check-ups matter.

**Protecting your kidneys:**
• Control blood sugar and blood pressure
• Stay hydrated — drink enough water
• Limit salt and processed foods
• Avoid frequent use of NSAID painkillers (ibuprofen, naproxen)
• Don't smoke
• Get regular kidney function tests if you have diabetes or high BP

*Kidney disease is often silent until advanced stages. Prevention and early detection are key.*`
  ],

  backpain: [
    `### 💪 Understanding Back Pain

**How common is it?**
Back pain is extremely common — about 8 out of 10 people experience it at some point. Most back pain is not serious and improves within a few weeks.

**Common causes:**
• Muscle strain — from lifting, twisting, or sudden movements
• Poor posture — slouching at a desk or looking down at phones
• Prolonged sitting — weakens back and core muscles over time
• Disk problems — bulging or herniated disks can press on nerves
• Arthritis — spinal joint inflammation

**Self-care tips for relief:**
• Stay active — gentle movement helps more than bed rest
• Apply heat or ice — ice for the first 48 hours, then heat
• Maintain good posture — sit and stand with your shoulders back
• Stretch gently — hamstring and hip stretches reduce back tension
• Sleep on your side with a pillow between your knees

**When to see a doctor:**
Pain after a fall or injury, numbness or weakness in legs, trouble controlling bladder or bowel, pain with fever, or pain lasting more than 4 weeks

*Most back pain resolves on its own with conservative care. A physiotherapist can help with targeted exercises if needed.*`
  ],

  skincare: [
    `### 🧴 Understanding Skin Health

**Common skin concerns:**

**Acne:**
• Caused by clogged pores, bacteria, and excess oil
• Wash your face twice daily with a gentle cleanser
• Avoid picking or squeezing — it causes scarring
• Over-the-counter treatments: benzoyl peroxide, salicylic acid
• For persistent acne, see a dermatologist

**Eczema (atopic dermatitis):**
• Dry, itchy, inflamed skin — often runs in families with allergies
• Moisturize regularly with fragrance-free creams
• Avoid harsh soaps and very hot water
• Use lukewarm water for baths and pat skin dry gently

**Dry skin:**
• Common in winter or from excessive washing
• Use a gentle, hydrating moisturizer after bathing
• Drink enough water and use a humidifier in dry environments

**Sun protection:**
• Use sunscreen with SPF 30+ every day, even when cloudy
• Sun damage accumulates over time and causes premature aging and skin cancer

**When to see a dermatologist:**
Any mole that changes shape, color, or size; a sore that doesn't heal; persistent rash; severe acne

*Your skin reflects your overall health. A healthy diet, hydration, and sun protection go a long way.*`
  ],

  dental: [
    `### 🦷 Understanding Oral and Dental Health

**Daily dental care:**
• Brush twice a day with fluoride toothpaste — at least 2 minutes each time
• Floss once a day — it reaches 40% of tooth surfaces that brushing misses
• Replace your toothbrush every 3-4 months
• Use a soft-bristled brush to avoid damaging gums

**Common dental issues:**

**Cavities (tooth decay):**
• Caused by bacteria feeding on sugar and producing acid that erodes enamel
• Prevention: limit sugary foods/drinks, brush after meals, use fluoride toothpaste

**Gum disease (gingivitis):**
• Red, swollen gums that bleed when brushing
• Caused by plaque buildup along the gumline
• Reversible with good brushing, flossing, and professional cleaning

**Bad breath (halitosis):**
• Usually from poor oral hygiene, food particles, or dry mouth
• Also can indicate gum disease or other health issues
• Stay hydrated, brush your tongue, and see your dentist

**Visit your dentist:**
Every 6 months for a check-up and professional cleaning. Early detection saves teeth.

*Oral health is connected to overall health — gum disease is linked to heart disease, diabetes, and other conditions.*`
  ],

  digestion: [
    `### 🫃 Understanding Digestive Health

**Common digestive issues:**

**Indigestion:**
A feeling of fullness, burning, or discomfort after eating
• Eat smaller meals and chew food thoroughly
• Avoid lying down for 2-3 hours after meals
• Identify trigger foods that cause discomfort

**Acid reflux / GERD:**
Stomach acid flows back into the esophagus, causing heartburn
• Avoid spicy, fatty, and acidic foods
• Don't eat close to bedtime
• Elevate the head of your bed slightly
• Over-the-counter antacids can help for occasional reflux

**Constipation:**
Difficulty passing stool, fewer than 3 bowel movements per week
• Drink more water — dehydration is a common cause
• Increase fiber — fruits, vegetables, whole grains, legumes
• Exercise regularly — movement stimulates digestion
• Don't ignore the urge to go

**Diarrhea:**
Loose, watery stools
• Stay hydrated — water or oral rehydration solution
• Eat bland foods — bananas, rice, applesauce, toast (BRAT diet)
• Avoid dairy, fried foods, and caffeine until it resolves
• See a doctor if it lasts more than 2 days or you have signs of dehydration

**Gut health tips:**
• Eat fermented foods — yogurt, kimchi, idli, dosa (natural probiotics)
• Stay hydrated
• Manage stress — the gut-brain connection is real
• Eat a variety of plant foods for a healthy gut microbiome

*If digestive symptoms persist or are severe, consult a gastroenterologist.*`
  ],

  immunity: [
    `### 🛡️ Understanding Your Immune System

**How your immune system works:**
Your immune system is a network of cells, tissues, and organs that defend your body against harmful invaders like bacteria, viruses, and parasites.

**Ways to support your immune system:**

**Nutrition matters:**
• **Vitamin C:** Citrus fruits, bell peppers, broccoli, strawberries
• **Vitamin D:** Sunlight (15-20 min daily), fatty fish, fortified milk, supplements if needed
• **Zinc:** Nuts, seeds, legumes, whole grains
• **Protein:** Essential for antibody production — include protein at every meal
• **Gut health:** Fermented foods support the gut microbiome, which plays a key role in immunity

**Lifestyle factors:**
• **Sleep:** 7-9 hours — your immune system repairs during sleep
• **Exercise:** Moderate activity boosts immune function
• **Stress management:** Chronic stress suppresses immunity
• **Hydration:** Water helps all bodily systems function properly
• **Don't smoke** and limit alcohol

**What weakens immunity:**
Poor sleep, chronic stress, smoking, excessive alcohol, poor nutrition, lack of exercise, being overweight

**Note:** There's no such thing as "boosting" your immune system beyond healthy levels. The goal is to support it so it functions optimally. Be wary of products claiming to "supercharge" your immunity.

*If you get sick frequently or infections take unusually long to heal, talk to your doctor about whether there's an underlying issue.*`
  ],

  weight: [
    `### ⚖️ Understanding Weight Management

**Weight and health:**
Weight is one factor in health, not the only one. A person can be healthy at different weights, and health habits matter more than the number on the scale.

**Healthy approaches to weight management:**

**For weight loss:**
• Create a moderate calorie deficit (300-500 calories below maintenance)
• Focus on nutrient-dense foods — vegetables, fruits, lean protein, whole grains
• Include protein at every meal — it keeps you full and preserves muscle
• Drink water before meals — helps with portion control
• Be physically active — aim for 150-300 minutes per week
• Get enough sleep — poor sleep disrupts hormones that control hunger

**For weight gain (healthy):**
• Eat more frequent meals — 5-6 smaller meals throughout the day
• Choose calorie-dense nutritious foods — nuts, nut butters, avocados, dried fruit, full-fat dairy
• Include healthy fats — olive oil, ghee, nuts, seeds
• Strength training builds muscle mass, which increases healthy weight

**What doesn't work:**
• Crash diets — most weight lost is regained within 1-2 years
• Skipping meals — leads to overeating later
• Extreme restrictions — unsustainable and may cause nutrient deficiencies
• "Detox" teas or supplements — no scientific evidence, potentially harmful

*Focus on building healthy habits you can maintain long-term, not quick fixes. Slow, steady changes lead to lasting results.*`
  ],

  pregnancy: [
    `### 👶 Understanding Pregnancy and Prenatal Health

**Pregnancy basics:**
Pregnancy lasts about 40 weeks (9 months), divided into three trimesters. Each trimester brings different changes for both mother and baby.

**First trimester (weeks 1-12):**
• Common symptoms: nausea (morning sickness), fatigue, breast tenderness
• Start prenatal vitamins with folic acid (400-800 mcg daily)
• Avoid alcohol, smoking, and certain medications
• First ultrasound usually at 8-14 weeks

**Second trimester (weeks 13-27):**
• Many women feel more energetic
• Baby movements become noticeable (quickening)
• Anatomy scan ultrasound at 18-22 weeks
• Back pain and heartburn may begin

**Third trimester (weeks 28-40):**
• Baby grows rapidly — weight gain accelerates
• Shortness of breath and frequent urination are common
• Braxton Hicks contractions (practice contractions) may occur
• Prepare for delivery — birth plan, hospital bag, childbirth classes

**Essential nutrition during pregnancy:**
• Folic acid — prevents neural tube defects
• Iron — prevents anemia; found in leafy greens, legumes, fortified cereals
• Calcium — for baby's bone development; milk, yogurt, cheese
• Protein — supports baby's growth; eggs, chicken, fish (low mercury), beans
• DHA (omega-3) — supports baby's brain development; fatty fish, algae supplements

**Foods to avoid:**
Raw/undercooked meat, fish high in mercury (shark, swordfish), unpasteurized dairy, raw eggs, excess caffeine (limit to 200 mg/day), alcohol

*Every pregnancy is unique. Regular check-ups with your obstetrician are essential for a healthy pregnancy.*`
  ],

  bone: [
    `### 🦴 Understanding Bone Health

**Why bone health matters:**
Your bones provide structure, protect organs, store calcium, and work with muscles to enable movement. Bone density peaks around age 30, then gradually declines.

**Osteoporosis:**
A condition where bones become weak and brittle — so fragile that a minor fall can cause a fracture. It's called a "silent disease" because there are no symptoms until a bone breaks.

**Risk factors:**
• Being female (especially after menopause)
• Family history of osteoporosis
• Low body weight
• Smoking and excessive alcohol
• Low calcium and vitamin D intake
• Sedentary lifestyle
• Long-term use of steroid medications

**Protecting your bones:**
**Calcium:** 1,000-1,200 mg daily
• Sources: Milk, yogurt, cheese, leafy greens, fortified plant milks, almonds, sardines

**Vitamin D:** 600-800 IU daily — helps your body absorb calcium
• Sources: Sunlight (15-20 min daily), fatty fish, egg yolks, fortified foods, supplements

**Exercise:**
• Weight-bearing exercises — walking, jogging, dancing, climbing stairs
• Strength training — lifting weights builds bone density
• Balance exercises — tai chi, yoga — prevent falls

**Lifestyle:**
• Don't smoke
• Limit alcohol
• Maintain a healthy weight

**Bone density testing:**
Recommended for women 65+ and men 70+, or earlier if you have risk factors. Early detection allows early treatment.

*Strong bones are built over a lifetime. Good nutrition and regular exercise at every age make a difference.*`
  ],

  anemia: [
    `### 🩸 Understanding Anemia

**What is anemia?**
Anemia occurs when your blood doesn't have enough healthy red blood cells to carry adequate oxygen to your body's tissues. It's one of the most common blood disorders.

**Common causes:**
• **Iron deficiency** — the most common type. From blood loss (heavy periods, internal bleeding) or inadequate iron intake
• **Vitamin deficiency** — low B12 or folate (folic acid)
• **Chronic disease** — kidney disease, cancer, autoimmune conditions
• **Genetic** — sickle cell anemia, thalassemia

**Common symptoms:**
• Fatigue and weakness
• Pale or yellowish skin
• Shortness of breath
• Dizziness or lightheadedness
• Cold hands and feet
• Brittle nails
• Rapid or irregular heartbeat
• Unusual cravings for ice, dirt, or starch (pica)

**Iron-rich foods:**
• **Animal sources** (heme iron, absorbed better): Red meat, poultry, fish, eggs
• **Plant sources** (non-heme iron): Spinach, lentils, beans, fortified cereals, tofu, pumpkin seeds
• **Tip:** Pair plant iron with vitamin C (lemon, orange, tomatoes) to improve absorption

**Treatment:**
Depends on the cause. Iron supplements for iron deficiency, B12 injections for B12 deficiency, or treating the underlying condition. Always take supplements as directed by a doctor — too much iron can be harmful.

**When to see a doctor:**
If you have persistent fatigue, pale skin, or any of the other symptoms listed — a simple blood test (CBC) can diagnose anemia.

*Anemia is highly treatable once the cause is identified. Don't ignore persistent fatigue — it's your body telling you something is off.*`
  ],

  dengue: [
    `### 🦟 Understanding Dengue Fever

**What is dengue?**
Dengue is a viral infection spread by Aedes mosquitoes. It's common in tropical and subtropical regions. The same mosquito also spreads chikungunya and Zika.

**Common symptoms (appear 4-10 days after a mosquito bite):**
• High fever (104°F / 40°C)
• Severe headache, especially behind the eyes
• Severe joint and muscle pain (hence "breakbone fever")
• Nausea and vomiting
• Skin rash (appears 2-5 days after fever starts)
• Mild bleeding (nose or gums)

**Warning signs of severe dengue (requires immediate hospital care):**
• Severe abdominal pain
• Persistent vomiting
• Bleeding under the skin or from nose/gums
• Difficulty breathing
• Restlessness or confusion
• Drop in blood pressure

**What to do if you suspect dengue:**
• See a doctor immediately — early diagnosis saves lives
• Rest and stay hydrated
• Use acetaminophen for fever (NOT ibuprofen or aspirin — they increase bleeding risk)
• Don't take antibiotics (dengue is viral)
• Hospitalization may be needed for monitoring in severe cases

**Prevention:**
• Use mosquito repellent (DEET or picaridin)
• Wear long sleeves and pants
• Use mosquito nets while sleeping
• Eliminate standing water where mosquitoes breed

*There is no specific treatment for dengue — early detection and supportive care are crucial. Most people recover within 1-2 weeks.*`
  ],

  malaria: [
    `### 🦟 Understanding Malaria

**What is malaria?**
Malaria is a serious disease caused by a parasite (Plasmodium) spread through the bite of infected Anopheles mosquitoes. It's most common in tropical regions.

**Common symptoms (appear 10-15 days after mosquito bite):**
• High fever with chills and sweating — often in cycles every 48-72 hours
• Headache
• Body aches and fatigue
• Nausea and vomiting
• Diarrhea

**Severe malaria (medical emergency):**
• Confusion or seizures
• Difficulty breathing
• Severe anemia
• Yellow skin/eyes (jaundice)
• Dark urine
• Organ failure

**What to do if you suspect malaria:**
• Get tested immediately — a rapid diagnostic test or blood smear can confirm it
• Treatment is with antimalarial medications (artemisinin-based combination therapy is standard)
• Early treatment is critical — severe malaria can be fatal within 24 hours

**Prevention:**
• Antimalarial medications if traveling to high-risk areas (consult a travel clinic)
• Use mosquito repellent (DEET)
• Sleep under insecticide-treated mosquito nets
• Wear long sleeves and pants, especially at dusk and night
• Use insecticide sprays or coils indoors

*Malaria is preventable and treatable. Seek medical attention immediately if you develop fever during or after travel to a malaria-endemic area.*`
  ],

  typhoid: [
    `### 🔬 Understanding Typhoid Fever

**What is typhoid?**
Typhoid is a bacterial infection caused by *Salmonella typhi*. It spreads through contaminated food and water, and is more common in areas with poor sanitation.

**Common symptoms (appear gradually over 1-3 weeks after exposure):**
• Fever that starts low and rises daily (can reach 104°F / 40°C)
• Headache
• Fatigue and weakness
• Abdominal pain
• Constipation or diarrhea
• Loss of appetite
• Rose-colored spots on the chest and abdomen (in some people)

**What to do if you suspect typhoid:**
• See a doctor for a blood or stool test
• Typhoid is treated with antibiotics — complete the full course even if you feel better
• Severe cases may require hospitalization
• Dehydration is common — drink plenty of fluids

**Prevention:**
• **Vaccination** — typhoid vaccine is available and recommended for travel to high-risk areas
• **Safe food and water:**
  - Drink only boiled or bottled water
  - Eat fully cooked food served hot
  - Avoid raw vegetables and fruits you can't peel
  - Wash hands thoroughly and frequently

*Typhoid is treatable with antibiotics. With prompt treatment, most people recover fully within 7-14 days.*`
  ],

  tuberculosis: [
    `### Understanding Tuberculosis (TB)

**What is TB?**
TB is a bacterial infection caused by *Mycobacterium tuberculosis*. It most commonly affects the lungs but can affect other parts of the body. It spreads through the air when an infected person coughs or sneezes.

**Latent vs. Active TB:**
• **Latent TB:** You have the bacteria but no symptoms and can't spread it. About 1 in 4 people worldwide have latent TB.
• **Active TB:** You have symptoms and can spread it to others. About 5-10% of people with latent TB develop active TB at some point.

**Symptoms of active TB:**
• Persistent cough (lasting 3+ weeks) — may produce blood
• Chest pain
• Fever and night sweats
• Unexplained weight loss
• Fatigue
• Loss of appetite

**Treatment:**
• TB is curable with a course of antibiotics lasting 6-9 months
• Take all medications exactly as prescribed — stopping early can lead to drug-resistant TB
• Directly observed therapy (DOT) is often used to ensure completion

**Prevention:**
• BCG vaccine — given in many countries at birth, protects against severe forms of TB in children
• Avoid close contact with people who have active TB
• Good ventilation reduces transmission risk
• If you have latent TB, preventive treatment can reduce the risk of developing active TB

*TB is preventable and curable. It remains a major global health problem, but treatment success rates are high with proper care.*`
  ],

  hepatitis: [
    `### 🫘 Understanding Hepatitis

**What is hepatitis?**
Hepatitis means inflammation of the liver. It can be caused by viruses, alcohol, medications, or autoimmune conditions. The most common viral types are A, B, and C.

**Hepatitis A:**
• Spread through contaminated food or water
• Usually causes acute (short-term) illness — most people recover fully
• Symptoms: fatigue, nausea, abdominal pain, jaundice (yellow skin/eyes), dark urine
• Prevention: Hepatitis A vaccine + good hygiene and safe food/water
• No specific treatment — rest, hydration, and supportive care

**Hepatitis B:**
• Spread through blood, unprotected sex, or from mother to baby during birth
• Can cause both acute and chronic infection
• Chronic hepatitis B can lead to liver cirrhosis and liver cancer
• Prevention: Hepatitis B vaccine (given at birth in many countries)
• Antiviral medications can control chronic hepatitis B

**Hepatitis C:**
• Spread through blood contact — often through contaminated needles or unscreened blood
• Can become chronic in most people
• Leading cause of liver transplant in many countries
• No vaccine available
• Highly treatable with modern antiviral medications (cure rates over 95%)

**Liver-friendly habits:**
• Limit alcohol — it directly damages liver cells
• Maintain a healthy weight — fatty liver disease is common
• Get vaccinated for hepatitis A and B
• Practice safe hygiene and safe sex
• Don't share needles, razors, or toothbrushes

*If you have risk factors or symptoms, a simple blood test can check for hepatitis. Early detection prevents liver damage.*`
  ],

  covid: [
    `### 🦠 Understanding COVID-19

**What is COVID-19?**
COVID-19 is caused by the SARS-CoV-2 virus. It spreads through respiratory droplets when an infected person coughs, sneezes, or talks.

**Common symptoms:**
• Fever or chills
• Cough
• Shortness of breath
• Fatigue
• Body aches
• Loss of taste or smell
• Sore throat
• Headache

**What to do if you have symptoms:**
• Test for COVID-19 (home test or at a clinic)
• Stay home and isolate to avoid spreading to others
• Rest, stay hydrated, and monitor your symptoms
• Over-the-counter medications can help with fever and aches

**When to seek emergency care:**
• Trouble breathing
• Persistent chest pain or pressure
• Confusion
• Difficulty waking or staying awake
• Pale, gray, or blue-colored skin, lips, or nail beds

**Prevention:**
• Vaccination — COVID-19 vaccines are safe and effective at preventing severe illness
• Boosters — recommended as immunity wanes over time
• Good ventilation in indoor spaces
• Washing hands frequently
• Wearing a mask in crowded or high-risk settings

**Long COVID:**
Some people experience symptoms that last weeks or months after the initial infection — including fatigue, brain fog, and shortness of breath. If this happens, see your doctor.

*Most people recover from COVID-19 without complications. Vaccination significantly reduces the risk of severe illness and long COVID.*`
  ],

  eye: [
    `### 👁️ Understanding Eye Health

**Common vision problems:**
• **Nearsightedness (myopia):** Distant objects look blurry — very common, especially in children and young adults
• **Farsightedness (hyperopia):** Close objects look blurry
• **Astigmatism:** Blurred vision at all distances due to an irregularly shaped cornea
• **Presbyopia:** Age-related difficulty focusing on close objects (starts around age 40)

**Common eye conditions:**
• **Conjunctivitis (pink eye):** Red, itchy, watery eyes — can be viral, bacterial, or allergic
• **Cataract:** Clouding of the lens — very common with age; treatable with surgery
• **Glaucoma:** Increased pressure in the eye that damages the optic nerve — often no symptoms until vision loss occurs
• **Dry eye:** Insufficient tear production — common with screen use, aging, and dry environments

**Tips for healthy eyes:**
• **20-20-20 rule:** Every 20 minutes, look at something 20 feet away for 20 seconds — reduces eye strain
• **UV protection:** Wear sunglasses that block 100% of UV rays
• **Good lighting:** Avoid reading or using screens in dim light
• **Screen position:** Keep screens at arm's length and slightly below eye level
• **Blink regularly:** We blink less when looking at screens — make a conscious effort

**Nutrition for eye health:**
• Vitamin A — carrots, sweet potatoes, spinach (prevents night blindness)
• Lutein and zeaxanthin — leafy greens, eggs (protect against macular degeneration)
• Omega-3 fatty acids — fish, flaxseeds (help with dry eyes)

**When to see an eye doctor:**
Annual check-ups are recommended. See a doctor sooner if you have sudden vision changes, eye pain, flashes of light, floaters, or redness with pain.

*Many eye conditions are treatable when caught early. Don't skip regular eye exams.*`
  ],

  hygiene: [
    `### 🧼 Understanding Personal Hygiene

**Why hygiene matters:**
Good hygiene prevents the spread of infections, keeps your skin and body healthy, and helps you feel fresh and confident.

**Daily hygiene habits:**

**Hand washing — the single most effective way to prevent illness:**
• Wash with soap and water for at least 20 seconds
• Before eating, after using the toilet, after coughing/sneezing, after touching public surfaces
• Use hand sanitizer (60%+ alcohol) when soap isn't available

**Oral hygiene:**
• Brush teeth twice daily with fluoride toothpaste
• Floss once daily
• Clean your tongue (with a tongue scraper or your toothbrush)
• Visit the dentist every 6 months

**Bathing and skin care:**
• Shower or bathe daily, or every other day depending on activity level
• Use mild soap — harsh soaps strip natural oils
• Moisturize after bathing while skin is still slightly damp
• Wash your face twice daily if you have oily or acne-prone skin

**Hair care:**
• Wash hair as needed — this varies from daily to weekly depending on hair type
• Use shampoo suited to your scalp type (oily, dry, dandruff-prone)
• Condition the ends of your hair, not the scalp

**Other important habits:**
• Wear clean clothes daily, especially underwear and socks
• Trim nails regularly — dirt collects under long nails
• Wash bedding weekly
• Don't share towels, razors, or toothbrushes
• Cover your mouth when coughing or sneezing (use your elbow or a tissue)

**Hygiene during illness:**
• Wash hands even more frequently
• Use separate towels and utensils if possible
• Dispose of tissues properly
• Stay home to avoid spreading illness to others

*Good hygiene is one of the simplest and most effective ways to protect your health and the health of those around you.*`
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
  // DAILY LIFE QUESTIONS (specific products, habits, food, drinks, etc.)
  // ──────────────────────────────────────────────────────────────────────────
  dailylife: [
    `### ⚡ Energy Drinks (Red Bull, Monster, etc.) — What You Should Know

**Short answer:** No, drinking Red Bull or similar energy drinks daily is not recommended.

**Here's why:**

**What's in one can?**
• A typical 250ml Red Bull has about **80mg of caffeine** (roughly the same as a cup of coffee)
• Plus **27g of sugar** (about 6–7 teaspoons) — that's a lot of added sugar
• Taurine, B vitamins, and other stimulants

**Why daily consumption is a concern:**
• **High sugar:** 27g per can exceeds the WHO's recommended daily limit of added sugar (25g). Over time, this raises risk of weight gain, diabetes, and tooth decay.
• **Caffeine overload:** Drinking multiple cans can cause anxiety, jitters, heart palpitations, and sleep problems.
• **Heart strain:** Energy drinks can raise blood pressure and increase the workload on your heart — especially risky if you have an undiagnosed heart condition.
• **Dental damage:** The combination of sugar and acidity erodes tooth enamel over time.
• **Crash effect:** The sugar spike is followed by a sharp drop in energy, leaving you more tired than before.

**Healthier alternatives:**
• ☕ Black coffee or green tea — gives you caffeine without the massive sugar load
• 💧 Water with lemon — refreshing and hydrating
• 🥤 Coconut water — natural electrolytes, no added sugar
• 🧊 Iced herbal tea — naturally caffeine-free and refreshing

*If you feel you need energy drinks regularly, it may be worth looking at your sleep, stress levels, and diet — the real causes of low energy.*`,

    `### 🥤 Is It Bad to Drink Soda / Soft Drinks Daily?

**Short answer:** Yes, drinking soda or soft drinks daily is not good for your health.

**Why soda is a problem:**

**The sugar issue:**
A typical 355ml can of soda contains **39g of sugar** — that's about 10 teaspoons. The American Heart Association recommends no more than 36g (9 tsp) per day for men and 25g (6 tsp) for women. **One can already exceeds the daily limit.**

**Health effects of daily soda consumption:**
• **Weight gain:** Liquid sugar doesn't make you feel full, so you consume extra calories without noticing
• **Type 2 diabetes risk:** High sugar intake overworks your pancreas and can lead to insulin resistance
• **Fatty liver:** The liver turns excess sugar into fat, which builds up over time
• **Tooth decay:** Sugar + acid in soda attacks tooth enamel
• **Bone health:** Colas contain phosphoric acid, which may reduce bone density
• **Dehydration:** Caffeine in many sodas has a mild diuretic effect

**What about diet soda?**
Diet sodas use artificial sweeteners (aspartame, sucralose) instead of sugar. While they don't have calories, they may still:
• Confuse your body's natural hunger signals
• Increase cravings for sweet foods
• Some studies link them to gut health changes

**Healthier swaps:**
• 💧 Sparkling water with a splash of fruit juice
• 🍋 Infused water (lemon, cucumber, mint)
• 🫖 Unsweetened iced tea
• 🥤 Coconut water

*The occasional soda (once a week or less) is unlikely to cause serious harm. It's the daily habit that adds up over time.*`,

    `### 🚬 What Happens When You Smoke or Vape?

**Short answer:** Smoking and vaping are both harmful to your health. There is no safe form of tobacco or nicotine use.

**Smoking:**
Cigarettes contain over **7,000 chemicals**, at least 70 of which cause cancer. Smoking affects nearly every organ in your body:
• **Lungs:** Causes COPD, emphysema, and lung cancer — 85% of lung cancer cases are linked to smoking
• **Heart:** Doubles your risk of heart attack and stroke
• **Skin:** Accelerates aging and causes wrinkles
• **Teeth:** Yellowing, gum disease, tooth loss
• **Fertility:** Reduces fertility in both men and women
• **Secondhand smoke:** Harms people around you, especially children

**Vaping (e-cigarettes):**
While vaping may expose you to fewer toxic chemicals than cigarettes, it is **not safe**:
• Most vapes contain **nicotine** — highly addictive and harms adolescent brain development
• The aerosol contains **heavy metals** (lead, nickel) and ultrafine particles that damage lungs
• **EVALI** (e-cigarette or vaping-associated lung injury) is a serious lung condition linked to vaping
• Long-term effects are still unknown — vaping hasn't been around long enough to study

**The good news:**
Quitting at any age improves your health. Within:
• **20 minutes:** Heart rate drops to normal
• **48 hours:** Sense of taste and smell improves
• **2 weeks – 3 months:** Lung function improves
• **1 year:** Heart disease risk is cut in half
• **5–10 years:** Stroke risk drops to that of a non-smoker

*If you want to quit, talk to your doctor about support options — nicotine replacement therapy, counseling, and apps can all help. You don't have to do it alone.*`,

    `### 🍺 Alcohol — How Much Is Too Much?

**Short answer:** Moderate drinking may be okay for some people, but daily heavy drinking is definitely harmful.

**What counts as "one drink"?**
• 1 can (330ml) of regular beer
• 1 glass (150ml) of wine
• 1 shot (45ml) of spirits

**Guidelines:**
• **Moderate:** Up to 1 drink per day for women, 2 for men
• **Heavy drinking:** More than 3 drinks per day or 7 per week for women; more than 4 per day or 14 per week for men
• **Binge drinking:** 4+ drinks in 2 hours for women, 5+ for men

**Health effects of regular heavy drinking:**
• **Liver:** Fatty liver, alcoholic hepatitis, cirrhosis
• **Heart:** High blood pressure, irregular heartbeat, cardiomyopathy (weakened heart muscle)
• **Brain:** Memory loss, brain shrinkage, increased risk of dementia
• **Cancer:** Increases risk of mouth, throat, liver, breast, and colon cancer
• **Weight:** High in empty calories — a glass of wine or beer has about 120–150 calories
• **Sleep:** Alcohol may help you fall asleep but disrupts deep sleep, leaving you less rested

**What about "red wine is good for the heart"?**
The idea that red wine is heart-healthy comes from the antioxidant resveratrol. However, the amount needed to get any benefit is far more than is safe to drink. The best sources of resveratrol are grapes, blueberries, and peanuts — not wine.

⚠️ *If you don't drink, there's no health reason to start. If you drink heavily, cutting back is one of the best things you can do for your health. Talk to your doctor if you need help.*`,

    `### 🍔 Is Junk Food / Fast Food Really That Bad?

**Short answer:** Eating junk food once in a while won't harm you. Eating it regularly — several times a week — does cause health problems.

**Why fast food is problematic:**

**1. Too many calories, too little nutrition**
A typical fast food meal (burger + fries + soda) can have 1,000–1,500 calories — more than half of what most adults need in an entire day — yet very few vitamins, minerals, or fiber.

**2. High in unhealthy fats**
Fast food is loaded with saturated and trans fats, which raise LDL ("bad") cholesterol and increase heart disease risk.

**3. Loaded with sodium**
One fast food meal can contain 2,000–3,000 mg of sodium — more than the recommended daily limit. This raises blood pressure over time.

**4. Sugar overload**
The soda and dessert alone can contain 50–80g of sugar, far exceeding healthy limits.

**5. Addictive combination**
Fast food is designed to be "hyper-palatable" — the mix of fat, sugar, and salt triggers reward centers in the brain, making you want more.

**Healthier approach:**
• Limit fast food to once a week or less
• When you do eat it, skip the soda and choose water
• Opt for grilled instead of fried options
• Add a side salad instead of fries when possible
• Cook at home more often — you control the ingredients

*Building cooking skills is one of the best investments in your long-term health.*`,

    `### 🧊 Is It Safe to Drink Coffee Every Day?

**Short answer:** Yes! For most healthy adults, drinking coffee daily in moderation (2–4 cups per day) is safe and may even have health benefits.

**The good news about coffee:**
• Rich in **antioxidants** — more than most fruits and vegetables
• May lower risk of **Type 2 diabetes** — studies show regular coffee drinkers have a lower risk
• May reduce **heart disease** and **stroke** risk
• Can improve **focus, alertness, and mood**
• Linked to lower risk of **Parkinson's** and **Alzheimer's**
• May protect the **liver** (linked to lower rates of cirrhosis and liver cancer)

**The downsides to watch for:**
• **Caffeine sensitivity** — some people get anxiety, jitters, or heart palpitations
• **Sleep disruption** — avoid coffee after 2–3 PM (it stays in your system for 6+ hours)
• **Digestive issues** — can cause heartburn or stomach discomfort in some people
• **Addiction** — regular use can lead to dependence; stopping suddenly can cause headaches and fatigue

**How to drink coffee healthily:**
• Limit added sugar and cream — black or with a splash of milk is best
• Don't rely on coffee to replace sleep — it's not a substitute for rest
• If you're pregnant, limit to 200mg caffeine per day (about 2 cups)

**Who should limit coffee:**
• People with anxiety disorders
• Those with GERD or acid reflux
• People with certain heart conditions
• Anyone taking medications that interact with caffeine (check with your doctor)

*As with most things, moderation is key. 1–4 cups per day is fine for most people. More than that and the risks may start to outweigh the benefits.*`,

    `### 🥛 Is Milk Good for You? / Should I Drink Milk Daily?

**Short answer:** Milk can be a good source of nutrients, but whether you need it daily depends on your individual health and dietary needs.

**Benefits of milk:**
• **Calcium:** Essential for strong bones and teeth — one glass provides about 30% of daily needs
• **Vitamin D:** Most milk is fortified with vitamin D, which helps absorb calcium
• **Protein:** Good quality protein for muscle repair and growth
• **Other nutrients:** Potassium, phosphorus, vitamin B12, riboflavin

**Potential concerns:**
• **Lactose intolerance:** About 65% of the world's population has reduced ability to digest lactose after infancy. Symptoms include bloating, gas, and diarrhea after drinking milk.
• **Milk allergy:** A true allergy to milk protein is less common but more serious (hives, vomiting, anaphylaxis).
• **Saturated fat:** Full-fat milk contains saturated fat — opt for low-fat or skim if you're watching your cholesterol.
• **Acne:** Some people find dairy triggers breakouts.

**Alternatives if you don't drink milk:**
You can get calcium and vitamin D from:
• 🥬 Leafy greens (spinach, kale, bok choy)
• 🥜 Almonds and sesame seeds (tahini)
• 🐟 Canned fish with bones (sardines, salmon)
• 🌱 Fortified plant milks (soy, almond, oat — check labels for added calcium)
• 🫘 Beans and lentils

**The bottom line:**
If you tolerate milk well, 1–2 glasses per day is perfectly healthy. If you're lactose intolerant or choose not to drink milk, you can meet your calcium and vitamin D needs through other foods.

*Listen to your body — it will tell you if milk agrees with you or not.*`,

    `### 🌙 Is It Bad to Eat Late at Night?

**Short answer:** Eating late at night occasionally won't cause problems, but making it a habit can affect your health.

**Why late-night eating can be an issue:**

**1. Disrupts sleep quality**
Digestion takes energy. When you eat close to bedtime, your body stays active digesting food instead of settling into rest mode. This can make it harder to fall asleep and reduce deep sleep quality.

**2. Acid reflux and heartburn**
Lying down with a full stomach makes it easier for stomach acid to flow back into your esophagus — causing discomfort and disrupting sleep.

**3. Weight gain**
This isn't just about calories — eating late can disrupt your body's internal clock (circadian rhythm), which affects how your body processes and stores food. Studies suggest the same meal eaten late in the day may be more likely to be stored as fat.

**4. Blood sugar impact**
Late-night eating, especially carbs or sugar, can cause blood sugar spikes right before sleep. Over time, this may increase diabetes risk.

**Healthier tips:**
• Finish your last meal at least **2–3 hours before bed**
• If you're genuinely hungry late at night, choose a light snack — a small banana, a cup of warm milk, or a handful of nuts
• Avoid heavy, spicy, or sugary foods close to bedtime
• Drink herbal tea if you need something to wind down

*Distinguish between true hunger and boredom or habit. If you ate enough at dinner and just crave a snack out of habit, a glass of water or distraction may help.*`,

    `### 🥗 Is Skipping Breakfast Bad for You?

**Short answer:** It depends on the person. Skipping breakfast is not harmful for everyone, but it may not work well for some people.

**The old belief:**
For years, we were told "breakfast is the most important meal of the day" and that skipping it would lead to weight gain and poor health.

**What research actually says today:**
• **For some people**, skipping breakfast works fine — especially those practicing intermittent fasting. They eat their first meal at noon and stop eating by 8 PM.
• **For others**, skipping breakfast leads to overeating later in the day, blood sugar crashes, poor concentration, and irritability.
• The **quality** of what you eat matters more than the timing.

**Who might benefit from eating breakfast:**
• Children and teenagers — they need regular fuel for growing bodies and brains
• People with diabetes — skipping breakfast can make blood sugar harder to control
• People who feel hungry, tired, or distracted without it
• Athletes who need energy for morning training

**Who might be fine skipping breakfast:**
• People who aren't hungry in the morning
• Those practicing intermittent fasting
• People who tend to overeat when they eat early

**If you eat breakfast, what should it be?**
A good breakfast includes:
• **Protein** — eggs, yogurt, milk, nuts, or a protein shake
• **Fiber** — oats, whole grain bread, fruits, vegetables
• Avoid sugary cereals, pastries, and white bread — these spike blood sugar and crash quickly

*The best approach: listen to your body. If you're hungry in the morning, eat a nutritious breakfast. If you're not, it's okay to wait. Just make sure your first meal of the day is balanced.*`,

    `### 💊 Should I Take Vitamin or Supplement Pills?

**Short answer:** Most people can get all the nutrients they need from food. Supplements help when there's a confirmed deficiency or specific need.

**When supplements ARE helpful:**
• **Vitamin D:** Many people are deficient, especially in winter or if you get limited sun
• **Vitamin B12:** Vegans and vegetarians may need it — B12 is naturally only in animal foods
• **Iron:** For confirmed iron deficiency anemia (not just "feeling tired")
• **Folic acid:** Essential for pregnant women to prevent birth defects
• **Calcium + Vitamin D:** For older adults at risk of osteoporosis
• **Omega-3s:** If you don't eat fatty fish regularly

**When supplements are probably NOT needed:**
• If you eat a balanced diet with variety — food provides nutrients in forms your body absorbs better
• "Multivitamins" — for most people eating a normal diet, there's little evidence they prevent disease or improve health
• "Immunity boosters" — most are not backed by strong evidence
• "Detox" or "cleanse" supplements — your liver and kidneys do this naturally

**Important safety notes:**
• More is NOT better — fat-soluble vitamins (A, D, E, K) can build up to toxic levels
• Supplements can interact with prescription medicines — always tell your doctor what you're taking
• Look for third-party testing seals (USP, NSF) if buying supplements
• "Natural" or "herbal" does not automatically mean safe

⚠️ *Before starting any supplement, ask your doctor: "Do I actually need this? Is the dose right for me? Will it interact with my medications?"*`,

    `### 🥤 Is It Healthy to Drink Fruit Juice?

**Short answer:** Whole fruit is better than fruit juice. Even 100% fruit juice has health concerns when consumed daily.

**The problem with juice:**
When you juice a fruit, you remove the fiber — one of the most beneficial parts. What's left is mostly sugar water with some vitamins.

**Comparison:**
• **1 orange:** 62 calories, 12g sugar, **3g fiber** — filling and nutritious
• **1 glass (250ml) orange juice:** 110 calories, 22g sugar, **0g fiber** — not filling, easy to overconsume

**Health effects:**
• **Blood sugar spikes:** Without fiber, the sugar enters your bloodstream quickly — same effect as soda
• **Weight gain:** Liquid calories don't satisfy hunger the way solid food does, so you eat the same amount of food plus the juice
• **Dental health:** The acid and sugar in juice erode tooth enamel
• **Nutrient loss:** Some vitamins degrade during juicing and storage

**Does any juice have benefits?**
• **Beetroot juice:** May lower blood pressure (but whole beets work too)
• **Tart cherry juice:** May improve sleep quality (but whole cherries work too)
• **Pomegranate juice:** Rich in antioxidants (but the whole fruit is better)

**Healthier approach:**
• Eat whole fruit instead of drinking juice
• If you want juice, limit to a small glass (125ml) and drink it with a meal
• Dilute juice with water or sparkling water
• Make smoothies instead of juice — keep the fiber by blending the whole fruit

*Remember: "no added sugar" on a juice bottle doesn't mean it's healthy — fruit juice naturally contains as much sugar as soda.*`,

    `### 🧃 Is It Good to Drink Green Tea Daily?

**Short answer:** Yes! Drinking green tea daily is generally very healthy and comes with several benefits.

**Benefits of green tea:**
• **Rich in antioxidants** — especially EGCG, which protects cells from damage
• **May boost heart health** — linked to lower cholesterol and reduced heart disease risk
• **May aid weight management** — can slightly boost metabolism (modest effect)
• **Improves focus** — contains caffeine and L-theanine, which together improve alertness without jitters
• **May reduce cancer risk** — antioxidants help protect against cell damage that can lead to cancer
• **Supports oral health** — natural compounds may reduce bacteria and plaque
• **May lower blood sugar** — some studies show improved insulin sensitivity

**How many cups?**
2–4 cups per day is considered beneficial. Most studies show benefits at 3–5 cups daily.

**Potential downsides:**
• **Caffeine:** Green tea has less caffeine than coffee but can still affect sleep if drunk late. Avoid after 4–5 PM.
• **Tannins:** Can interfere with iron absorption — drink between meals if you're anemic, not with food
• **Staining:** Can stain teeth over time (rinsing with water after helps)
• **Liver:** Extremely high doses (10+ cups or concentrated extracts) may rarely cause liver issues

**Tips for healthier green tea:**
• Brew for 2–3 minutes in water that's just below boiling (175°F / 80°C) — boiling water makes it bitter
• Don't add sugar — try a slice of lemon or a drop of honey
• Matcha powder (whole tea leaves ground) provides more antioxidants than steeped tea

*Bottom line: Green tea is one of the healthiest beverages you can drink. Enjoy it daily as part of a balanced diet.*`,

    `### 🥩 Should I Eat Less Red Meat?

**Short answer:** Reducing red meat intake — especially processed red meat — is recommended for better long-term health.

**What counts as red meat?**
• Beef, pork, lamb, goat, mutton
• Processed meats: bacon, sausages, ham, salami, hot dogs (these are the most concerning)

**Health concerns with high red meat consumption:**
• **Heart disease:** Red meat is high in saturated fat, which raises LDL cholesterol
• **Cancer risk:** The WHO classifies processed meat as a Group 1 carcinogen (causes cancer) and red meat as a Group 2A (probably causes cancer), especially linked to colon cancer
• **Type 2 diabetes:** Higher red meat intake is associated with increased diabetes risk
• **Weight:** Red meat is calorie-dense, and portion sizes are often larger than recommended

**How much is reasonable?**
• The recommended limit is about **500g (cooked weight) per week** — that's roughly 2–3 servings
• Processed meats should be limited even further — occasional only

**Healthier protein alternatives:**
• 🐟 Fish and seafood — especially fatty fish like salmon, mackerel, sardines
• 🐔 Poultry (chicken, turkey) — skinless is leanest
• 🫘 Legumes — lentils, chickpeas, beans, peas
• 🥜 Nuts and seeds
• 🥚 Eggs
• 🌱 Soy products — tofu, tempeh

*You don't need to cut out red meat completely. Reducing frequency and portion size is the most practical approach for most people.*`,

    `### 🧂 Is Salt Bad for You? How Much Is Too Much?

**Short answer:** Salt (sodium) is essential for your body, but most people consume far too much of it.

**Why your body needs some salt:**
Sodium helps maintain fluid balance, nerve transmission, and muscle function. The problem isn't salt itself — it's the amount.

**Recommended limits:**
• **WHO recommendation:** Less than 2,000 mg sodium per day (about 1 teaspoon of salt)
• **Most people consume:** 3,000–5,000 mg per day — far above the limit

**Where does most of our salt come from?**
It's not your salt shaker. About **75% of sodium** comes from packaged and restaurant foods:
• 🍞 Bread and rolls
• 🧀 Cheese and dairy products
• 🥫 Canned soups and vegetables
• 🍕 Pizza and pasta dishes
• 🥪 Sandwiches and burgers
• 🥨 Snacks — chips, pretzels, namkeen
• 🫘 Sauces, dressings, and condiments

**Health effects of too much salt:**
• **High blood pressure** — the most direct and well-established effect
• **Heart disease and stroke** — from increased blood pressure over time
• **Kidney damage** — kidneys work harder to filter excess sodium
• **Stomach cancer** — high salt intake may increase risk
• **Osteoporosis** — excess sodium can cause calcium loss through urine

**Easy ways to reduce salt:**
• Cook at home more — you control the salt
• Check labels — choose products with less than 400mg sodium per serving
• Use herbs, spices, lemon, garlic, or vinegar instead of salt for flavor
• Rinse canned beans and vegetables before using
• Limit processed and fast foods
• Remove the salt shaker from the table`,
    `### 🏃 Is It Bad to Exercise Every Day?

**Short answer:** It depends on the type and intensity. Daily movement is great, but you need rest days from intense exercise.

**Daily movement is encouraged:**
Walking, gentle stretching, yoga, light cycling, or other low-intensity activities can be done every day. In fact, experts recommend walking 7,000–10,000 steps daily.

**But intense exercise needs recovery:**
When you do strength training, HIIT, running, or any activity that stresses your muscles, those muscles need time to repair:
• **Muscles grow during rest**, not during the workout itself
• Without rest days, you risk **overtraining** — fatigue, decreased performance, increased injury risk, weakened immunity
• Joints and connective tissues also need recovery time

**Signs you need a rest day:**
• Persistent muscle soreness
• Feeling unusually tired or sluggish
• Decreased performance
• Trouble sleeping
• Irritability or mood changes
• Frequent illness or injuries

**A good weekly balance:**
• **3–5 days** of moderate exercise (brisk walking, cycling, swimming)
• **2–3 days** of strength training (with at least 48 hours between sessions for the same muscle group)
• **1–2 days** of active recovery (gentle walking, stretching, yoga)

*Listen to your body. Some days, the best exercise is rest.*`,

    `### 🍫 Is Dark Chocolate Actually Healthy?

**Short answer:** Yes, in moderation — dark chocolate (70% cocoa or higher) does have health benefits, but it's still a calorie-dense treat.

**The good part:**
Dark chocolate is rich in **flavonoids** — powerful antioxidants that:
• May lower blood pressure
• Improve blood flow to the heart and brain
• Reduce inflammation
• Protect skin from sun damage
• May improve brain function by increasing blood flow

**But there's a catch:**
• Dark chocolate is still **high in calories and fat** — about 150–170 calories per 30g serving
• Many brands add significant **sugar** — even "dark" chocolate can have added sugar
• The health benefits come from **cocoa content**, not from chocolate with added milk, sugar, and fillings

**How to choose and eat it:**
• Look for **70% cocoa or higher** — the higher the percentage, the more flavonoids and less sugar
• A healthy serving is about **20–30g (1–2 small squares) per day**
• Avoid "dark chocolate" that lists sugar as the first ingredient
• Remember: it's a treat, not a health food — it complements a healthy diet, it doesn't replace vegetables

*If you enjoy dark chocolate, a small piece daily can be part of a healthy diet. Just watch your portion size.*`,

    `### 🌿 Should I Do a Detox or Cleanse?

**Short answer:** No. Your body already has a built-in detox system — your liver and kidneys. "Detox" diets and cleanses are not necessary and can sometimes be harmful.

**Why detoxes don't work:**
• Your **liver** and **kidneys** filter toxins from your blood 24/7 — they don't need help from a juice cleanse
• There is **no scientific evidence** that detox teas, juice cleanses, or fasting regimens remove toxins better than your body's natural systems
• Most "detox" products are not regulated — they can contain laxatives, diuretics, or unlisted ingredients

**Potential dangers of detox diets:**
• **Nutrient deficiency** — extreme juice fasts lack protein, fat, and many vitamins
• **Blood sugar crashes** — especially from juice-only cleanses that are pure sugar without fiber
• **Dehydration and electrolyte imbalance** — some detox teas act as laxatives
• **Muscle loss** — very low-calorie diets break down muscle for energy
• **Gallbladder issues** — rapid weight loss can trigger gallstones
• **Binge eating** — after the cleanse ends, many people overeat

**What actually helps your body's natural detox:**
• ✅ Drink enough water — your kidneys need water to filter waste
• ✅ Eat plenty of fiber — helps your digestive system eliminate waste
• ✅ Eat vegetables and fruits — they provide nutrients your liver needs
• ✅ Limit alcohol — gives your liver less work to do
• ✅ Get enough sleep — your brain clears waste products during sleep
• ❌ Don't smoke — introduces toxins your body has to process

*The best "detox" is a healthy lifestyle — consistently, not just for a week.*`,

    `### 🥜 Are Nuts Healthy? Will They Make Me Gain Weight?

**Short answer:** Nuts are very healthy and do NOT cause weight gain when eaten in reasonable amounts — even though they're high in calories.

**Why nuts are good for you:**
• **Heart-healthy fats:** Mostly unsaturated fats that lower LDL cholesterol
• **Protein and fiber:** Keep you full and satisfied
• **Vitamins and minerals:** Magnesium, vitamin E, selenium, zinc
• **Antioxidants:** Protect cells from damage
• Linked to **lower risk of heart disease**, diabetes, and even longer lifespan

**What about the calories?**
Yes, nuts are calorie-dense — about 160–200 calories per 30g handful. But:
• People who eat nuts regularly tend to **weigh less**, not more — possibly because nuts are very satiating, so you eat less overall
• Some of the fat in nuts is **not fully absorbed** by your body — your body can't access all the calories
• The protein and fiber in nuts reduce appetite

**How much to eat:**
A healthy serving is about **30g (a small handful)** per day. That's roughly:
• 23 almonds
• 14 walnut halves
• 20 peanuts
• 30 pistachios

**Tips:**
• Choose **unsalted, raw or dry-roasted** nuts — avoid oil-roasted or heavily salted ones
• Portion them out instead of eating from a large bag
• Pair them with fruit for a balanced snack

*Nuts are one of the healthiest snacks you can eat. A handful a day is a great habit.*`,

    `### ☕ Is It Bad to Drink Coffee on an Empty Stomach?

**Short answer:** For most people, it's fine. A small number of people may experience discomfort.

**What the research says:**
• Drinking coffee on an empty stomach does **not** cause stomach ulcers — that's a common myth
• Ulcers are primarily caused by **H. pylori bacteria** or NSAID painkillers, not coffee
• However, coffee can temporarily increase **stomach acid production**, which may cause heartburn or discomfort in sensitive individuals

**Who might want to eat something first:**
• People with **GERD or acid reflux** — coffee relaxes the lower esophageal sphincter, making reflux more likely
• People with **sensitive stomachs** — if you regularly feel discomfort after coffee
• People who feel **jittery or anxious** — food helps slow caffeine absorption

**Tips if coffee bothers your stomach:**
• Have your coffee with a small snack — a banana, a slice of toast, or some nuts
• Choose a darker roast — it's less acidic than light roast
• Try cold brew — it's significantly less acidic than hot-brewed coffee
• Add a splash of milk — reduces acidity

*If you've been drinking coffee on an empty stomach for years without problems, there's no reason to stop. If it bothers you, try having it with food.*`,

    `### 🧊 Is Sparkling Water as Healthy as Still Water?

**Short answer:** Yes! Plain sparkling water (carbonated water) is just as hydrating as still water and perfectly healthy.

**Common concerns addressed:**

**"Does sparkling water damage teeth?"**
• Plain sparkling water is slightly more acidic than still water (pH of about 3–4 vs. 7) but **far less acidic** than soda (pH 2.5), fruit juice (pH 3–4), or lemon water
• Studies show the risk to enamel is **very low** — comparable to still water in practice
• **Avoid** sparkling water with added sugar, citric acid, or fruit flavors — those are more erosive

**"Is it bad for digestion?"**
• Some people find carbonation causes bloating or gas — this is harmless but can be uncomfortable
• For others, sparkling water may actually **aid digestion** — some studies show it improves swallowing and reduces constipation

**"Does it affect bone health?"**
• This is a myth — there is **no evidence** that carbonated water leaches calcium from bones. That concern was based on old studies about cola drinks (which contain phosphoric acid), not sparkling water

**Tips:**
• Choose plain sparkling water or brands with **no added sugar, sweeteners, or flavors**
• Add your own flavor with lemon, cucumber, or mint slices
• Use it as a healthy replacement for soda — same fizz, no sugar

*Sparkling water is an excellent, healthy choice whether as your main drink or as a soda replacement.*`,

    `### 🥚 Are Eggs Healthy? How Many Can I Eat Per Week?

**Short answer:** Yes, eggs are very healthy. For most people, 1–2 eggs per day is perfectly safe.

**The old concern about eggs:**
For years, eggs were thought to raise cholesterol and increase heart disease risk because the yolk is high in dietary cholesterol. This belief has been largely overturned.

**What we know now:**
• **Dietary cholesterol** (from food) has much less impact on blood cholesterol than **saturated fat** does
• Eggs are low in saturated fat — about 1.5g per egg
• For most people, eating eggs does NOT significantly raise blood cholesterol levels
• Some people (about 30% of the population) are "hyper-responders" and may see a mild increase — but this is generally not harmful

**The nutritional value of eggs:**
One large egg contains:
• **6g protein** — high quality, with all essential amino acids
• **Vitamin D, B12, riboflavin, selenium, choline** — important for brain health
• **Lutein and zeaxanthin** — antioxidants that protect eye health
• Only about **70 calories**

**How many can you eat?**
• **Healthy people:** Up to 1–2 eggs per day (7–14 per week) is well within safe limits
• **People with diabetes or heart disease:** Some guidelines suggest limiting to 3–5 yolks per week and eating egg whites freely — but recent research is less strict
• The way you cook eggs matters more than the quantity — frying in butter or oil adds calories and fat

*Eggs are nutritious, affordable, and versatile. They're a great addition to a balanced diet.*`,

    `### 🌾 Is Bread Bad for You? Should I Avoid Gluten?

**Short answer:** Regular bread in moderation is fine for most people. Gluten is only a problem for those with celiac disease or gluten sensitivity.

**The real issue with bread:**
It's not bread itself — it's the **type** of bread and how much you eat.

**White bread vs. whole grain:**
• **White bread:** Made from refined flour (maida) — the fiber and nutrients have been stripped out. It spikes blood sugar and provides mostly empty calories.
• **Whole grain bread:** Made from whole wheat or other whole grains — retains fiber, vitamins, and minerals. It's a healthy carb source.
• **Sourdough:** Fermented — may be easier to digest and has a lower impact on blood sugar.

**What about gluten?**
• **Celiac disease** (about 1% of population): An autoimmune reaction to gluten. These people must avoid gluten completely.
• **Non-celiac gluten sensitivity** (estimated 0.5–6%): People feel better avoiding gluten but don't test positive for celiac. This is a real condition but less common than claimed.
• **For everyone else:** Gluten is not harmful. There is no health benefit to avoiding gluten if you don't have a medical reason.

**The "gluten-free" trend:**
Many gluten-free products are actually **less healthy** than their gluten-containing counterparts — they're often made with refined starches and added sugar to improve texture.

**Healthier bread choices:**
• Look for **100% whole wheat or whole grain** as the first ingredient
• Choose bread with at least **3g of fiber** per slice
• Avoid bread with added sugar or high fructose corn syrup
• Consider sprouted grain bread, sourdough, or rye

*If you enjoy bread, choose whole grain varieties and eat it as part of a balanced meal — not as the main event.*`
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
// CONTINUATIONS — expanded info for follow-up "tell me more" requests
// ────────────────────────────────────────────────────────────────────────────
const CONTINUATIONS = {
  diabetes: `### 📋 More About Diabetes

**Managing blood sugar day-to-day:**
• Check your blood sugar at different times to understand your patterns
• Keep a simple log — it helps your doctor adjust your treatment
• Know the signs of **low blood sugar (hypoglycemia):** sweating, shaking, confusion, dizziness — treat with fast-acting sugar like juice or glucose tablets
• Know the signs of **high blood sugar (hyperglycemia):** frequent urination, excessive thirst, blurry vision

**Prevention of long-term complications:**
• Annual eye exam — diabetes can damage small blood vessels in the retina
• Annual kidney function test (urine albumin test)
• Regular foot checks — diabetes reduces sensation, so minor cuts can become serious
• Keep blood pressure and cholesterol under control — heart health is closely linked

**When to contact a doctor urgently:**
• Blood sugar consistently above 250 mg/dL
• Nausea, vomiting, or abdominal pain with high blood sugar
• Any infection or foot injury that isn't healing

*Always follow your doctor's personalized treatment plan.*`,

  bloodpressure: `### 📋 More About Blood Pressure Management

**Beyond medication — lifestyle makes a big difference:**
• The **DASH diet** (Dietary Approaches to Stop Hypertension) emphasizes fruits, vegetables, whole grains, and low-fat dairy — it's been shown to lower BP as much as some medications
• **Reduce sodium** to less than 2,000 mg per day — check food labels, as 75% of sodium comes from packaged foods
• **Potassium-rich foods** help counter sodium: bananas, potatoes, spinach, avocados, beans, yogurt
• **Limit alcohol** to 1 drink per day or less for women, 2 for men
• **Manage stress** — chronic stress keeps BP elevated; mindfulness, deep breathing, and regular exercise help

**Monitoring at home:**
• Use a validated home BP monitor
• Measure at the same time each day (morning before medication and evening)
• Sit quietly for 5 minutes before measuring, feet flat on floor, arm at heart level

**Warning signs of hypertensive crisis (180+/120+):**
Severe headache, chest pain, shortness of breath, vision changes, confusion — seek emergency care

*Regular BP checks and consistent habits matter more than occasional perfect readings.*`,

  heart: `### 📋 More About Heart Health

**Understanding the risk factors:**
• **Uncontrolled:** Age, family history, gender
• **Controllable:** Smoking, diet, exercise, weight, blood pressure, cholesterol, diabetes, stress

**Heart-healthy eating — the Mediterranean approach:**
• **Healthy fats:** Olive oil, nuts, seeds, avocados, fatty fish (salmon, mackerel, sardines)
• **Fiber-rich foods:** Oats, barley, beans, lentils, fruits, vegetables
• **Limit:** Red meat, processed meats, fried foods, sugary drinks, refined carbs
• **Include:** Fatty fish twice a week for omega-3 fatty acids

**Exercise for your heart:**
• 150 minutes of moderate activity (brisk walking, cycling) or 75 minutes of vigorous activity (running, swimming) per week
• Any movement is better than none — start where you are

**Warning signs of a heart attack:**
Chest discomfort (pressure, squeezing), pain in arms/back/neck/jaw, shortness of breath, cold sweat, nausea — call emergency services immediately

*Prevention is the best medicine for heart disease.*`,

  cancer: `### 📋 More About Cancer Prevention and Awareness

**Common warning signs (remember the acronym CAUTION):**
• **C**hange in bowel or bladder habits
• **A** sore that doesn't heal
• **U**nusual bleeding or discharge
• **T**hickening or lump in breast or elsewhere
• **I**ndigestion or difficulty swallowing
• **O**bvious change in a wart or mole
• **N**agging cough or hoarseness

**Reducing your risk:**
• **Don't smoke** — tobacco causes 85% of lung cancers and many other cancers
• **Limit alcohol** — even moderate drinking increases risk of several cancers
• **Maintain a healthy weight** — obesity is linked to 13 types of cancer
• **Stay active** — exercise reduces cancer risk independently of weight
• **Eat a plant-focused diet** — plenty of fruits, vegetables, and whole grains
• **Protect your skin** — use sunscreen, avoid tanning beds
• **Get vaccinated** — HPV vaccine prevents cervical cancer, hepatitis B vaccine prevents liver cancer
• **Get screened** — regular checks catch cancer early when treatment is most effective

**Common screening tests:**
Breast (mammogram), cervical (Pap smear), colorectal (colonoscopy), prostate (PSA test), lung (low-dose CT for smokers)

*Early detection saves lives. Talk to your doctor about what screenings are right for you at your age.*`,

  asthma: `### 📋 More About Asthma Management

**Know your triggers — common ones include:**
• Allergens: pollen, dust mites, pet dander, mold
• Irritants: smoke, strong odors, air pollution, cold air
• Exercise (especially in cold, dry air)
• Respiratory infections (colds, flu)
• Strong emotions or stress

**Using your inhaler correctly:**
• **Reliever inhaler (blue):** Used during attacks — opens airways quickly
• **Preventer inhaler (usually brown/red):** Used daily to reduce airway inflammation — takes days to weeks to work fully
• Use a **spacer device** if prescribed — it helps more medication reach your lungs
• Rinse your mouth after using steroid inhalers to prevent oral thrush

**When to seek emergency care:**
• Your reliever isn't helping or you need it more than every 4 hours
• You can't speak full sentences without stopping to breathe
• Your lips or fingernails turn blue
• You feel exhausted from trying to breathe

*Everyone with asthma should have a written asthma action plan from their doctor.*`,

  allergy: `### 📋 More About Managing Allergies

**Common types of allergies:**
• **Seasonal (hay fever):** Pollen from trees, grass, weeds — causes sneezing, runny nose, itchy eyes
• **Food allergies:** Peanuts, tree nuts, milk, eggs, wheat, soy, fish, shellfish — can cause hives, swelling, digestive issues, or anaphylaxis
• **Skin allergies:** Poison ivy, nickel, latex, certain cosmetics — causes contact dermatitis
• **Drug allergies:** Penicillin and related antibiotics are most common
• **Insect sting allergies:** Bees, wasps, hornets — can cause severe reactions

**Treatment approaches:**
• **Avoidance:** The most effective approach — know your triggers and avoid them
• **Antihistamines:** Block histamine, the chemical that causes allergy symptoms
• **Nasal sprays:** Steroid sprays reduce nasal inflammation over time
• **Immunotherapy (allergy shots):** Gradual exposure builds tolerance over 3-5 years

**Anaphylaxis — medical emergency:**
Symptoms: difficulty breathing, swelling of throat/tongue, rapid pulse, dizziness, skin hives — use epinephrine auto-injector (EpiPen) immediately and call emergency services

*If you suspect a severe allergy, see an allergist for proper testing and a management plan.*`,

  arthritis: `### 📋 More About Living with Arthritis

**Types of arthritis:**
• **Osteoarthritis:** "Wear and tear" — cartilage breaks down over time. Most common type, typically affects knees, hips, hands, spine
• **Rheumatoid arthritis:** Autoimmune — the immune system attacks joint lining. Affects joints on both sides of the body symmetrically
• **Gout:** Caused by uric acid crystal buildup in joints — typically affects the big toe

**Pain management without medication:**
• **Heat therapy:** Warm baths, heating pads — relaxes muscles and increases blood flow
• **Cold therapy:** Ice packs on swollen joints — reduces inflammation
• **Gentle exercise:** Swimming and water aerobics are excellent — water supports your weight
• **Joint protection:** Use larger/stronger joints when possible, avoid staying in one position too long
• **Weight management:** Every kg of weight loss reduces knee joint load by 4 kg
• **Assistive devices:** Canes, walkers, jar openers, ergonomic tools

**Exercise recommendations:**
• Range-of-motion exercises (daily) — keep joints flexible
• Strengthening exercises (every other day) — strong muscles support joints
• Aerobic exercise (150 min/week) — walking, cycling, swimming
• Balance exercises — prevent falls

*An experienced physiotherapist can create a personalized exercise program for you.*`,

  thyroid: `### 📋 More About Thyroid Health

**Understanding the two main conditions:**
• **Hypothyroidism (underactive):** Thyroid doesn't produce enough hormones. Symptoms: fatigue, weight gain, cold sensitivity, dry skin, hair loss, depression, slow heart rate. Treated with daily levothyroxine.
• **Hyperthyroidism (overactive):** Thyroid produces too much hormone. Symptoms: weight loss, heat sensitivity, rapid heartbeat, anxiety, tremors, bulging eyes (in Graves' disease). Treatment: medication, radioactive iodine, or surgery.

**Diet and lifestyle considerations:**
• For hypothyroidism: Take thyroid medication on an empty stomach (30-60 min before food) — calcium, iron, and fiber can interfere with absorption
• Iodine: Essential for thyroid function — found in iodized salt, fish, dairy, eggs
• Cruciferous vegetables (broccoli, cabbage, cauliflower): In very large amounts, they may affect thyroid function, but normal consumption is fine
• Selenium: Important for thyroid hormone metabolism — found in Brazil nuts, tuna, sardines, eggs
• Regular blood tests are essential to monitor and adjust medication dosage

**When to see a doctor:**
• Unexplained weight changes
• Persistent fatigue or energy changes
• Neck swelling or discomfort
• Changes in heart rate or mood

*Thyroid conditions are very common and manageable. Most people with proper treatment live normal, healthy lives.*`,

  kidney: `### 📋 More About Kidney Health

**What your kidneys do:**
• Filter waste from blood (about 150 liters daily!)
• Balance body fluids and minerals
• Produce hormones that control blood pressure and make red blood cells
• Activate vitamin D for bone health

**Common kidney problems:**
• **Kidney stones:** Mineral deposits that form in kidneys — extremely painful but usually pass on their own
• **UTIs (Urinary Tract Infections):** Bacterial infections — more common in women; can spread to kidneys if untreated
• **Chronic Kidney Disease (CKD):** Gradual loss of kidney function — often caused by diabetes and high blood pressure

**Protecting your kidneys:**
• **Control blood pressure** — the #1 cause of kidney damage (after diabetes)
• **Control blood sugar** — diabetes is the #1 cause of kidney failure
• **Stay hydrated** — water helps kidneys flush waste
• **Limit salt** — reduces blood pressure and kidney workload
• **Limit NSAIDs** (ibuprofen, naproxen) — frequent use can damage kidneys
• **Don't smoke** — smoking reduces blood flow to kidneys
• **Get regular check-ups** — simple blood and urine tests check kidney function

**Signs of kidney trouble:**
Swelling in feet/ankles, changes in urination (frequency, color, foaminess), fatigue, itchy skin, metallic taste in mouth

*Kidney disease often has no symptoms in early stages. Regular screening is key if you have diabetes or high blood pressure.*`,

  pregnancy: `### 📋 More About Healthy Pregnancy

**Prenatal care essentials:**
• **Prenatal vitamins:** Folic acid (400-800 mcg daily) prevents neural tube defects — start before conception if possible
• **Regular check-ups:** Typically monthly until week 28, biweekly until week 36, then weekly
• **Ultrasounds:** Usually at least 2 — dating scan (8-14 weeks) and anatomy scan (18-22 weeks)

**Common pregnancy discomforts and solutions:**
• **Morning sickness:** Eat small, frequent meals; ginger tea; avoid strong smells; talk to your doctor if severe
• **Back pain:** Good posture, supportive shoes, side-lying with pillow between knees, gentle prenatal yoga
• **Heartburn:** Avoid spicy/fatty foods, eat smaller meals, don't lie down right after eating
• **Swelling (edema):** Elevate feet, drink water, avoid standing for long periods

**Foods to avoid during pregnancy:**
• Raw or undercooked meat, fish, eggs
• High-mercury fish (shark, swordfish, king mackerel)
• Unpasteurized dairy and soft cheeses
• Alcohol — no amount is known to be safe
• Limit caffeine to 200 mg/day (about 1 cup of coffee)

**When to call your doctor:**
Bleeding, severe abdominal pain, severe headache, vision changes, sudden swelling in face/hands, decreased fetal movement, fever, contractions before 37 weeks

*Every pregnancy is unique. Always follow your obstetrician's guidance.*`,

  nutrition: `### 📋 More About Nutrition and Healthy Eating

**Building a balanced plate:**
• **Half the plate:** Vegetables and fruits — variety of colors means variety of nutrients
• **Quarter of the plate:** Lean protein — chicken, fish, eggs, legumes, tofu
• **Quarter of the plate:** Whole grains — brown rice, quinoa, whole wheat, oats, millets
• **Add:** Healthy fats on the side — olive oil, avocado, nuts, seeds

**Portion size guidelines:**
• Protein: Palm-sized portion (about 20-30g cooked)
• Grains: Fist-sized portion (about ½ cup cooked)
• Vegetables: Two fist-sized portions
• Fats: Thumb-sized portion (about 1 tablespoon)
• Fruits: Cupped-hand portion

**Common nutrition mistakes:**
• Skipping meals — leads to overeating later
• Drinking calories — sugary drinks add empty calories
• Eating too fast — it takes 20 minutes for your brain to register fullness
• Relying on supplements instead of whole foods

**Staying hydrated with food:**
Many fruits and vegetables have high water content — cucumber (96%), watermelon (92%), strawberries (91%), celery (95%), lettuce (96%)

*Small, consistent changes beat dramatic diets every time.*`,

  exercise: `### 📋 More About Exercise and Fitness

**Types of exercise you need:**
• **Aerobic (cardio):** Walking, running, cycling, swimming — improves heart and lung health
• **Strength training:** Weights, resistance bands, bodyweight (push-ups, squats) — builds muscle and bone density
• **Flexibility:** Stretching, yoga — improves range of motion and prevents injury
• **Balance:** Tai chi, standing on one leg — especially important as you age

**Getting started as a beginner:**
• Start with 10-15 minute sessions — even 5 minutes counts
• Walk — it's free, accessible, and one of the best exercises
• Choose activities you enjoy — you'll stick with them
• Schedule exercise like an appointment — put it in your calendar
• Find a buddy — accountability helps consistency

**Common mistakes to avoid:**
• Starting too hard — leads to injury and burnout
• Skipping warm-up — increases injury risk
• Comparing yourself to others — focus on your own progress
• Not resting — rest days are when your body gets stronger
• Doing the same thing every day — variety prevents plateaus and boredom

**Signs you're overdoing it:**
Persistent soreness beyond 72 hours, trouble sleeping, frequent illness, irritability, decreased performance

*The best exercise is the one you actually do. Consistency beats intensity.*`,

  sleep: `### 📋 More About Sleep Hygiene

**How much sleep do you need?**
• Adults (18-64): 7-9 hours per night
• Older adults (65+): 7-8 hours
• Teenagers: 8-10 hours
• Children (6-12): 9-12 hours

**Your sleep environment matters:**
• **Temperature:** 65-68°F (18-20°C) is ideal for most people
• **Light:** Complete darkness — use blackout curtains or an eye mask
• **Noise:** Quiet is best — consider white noise or earplugs if needed
• **Electronics:** Keep phones and laptops out of the bedroom if possible

**A good wind-down routine (30-60 minutes before bed):**
1. Dim the lights in your home
2. Put away screens (blue light disrupts melatonin production)
3. Do something calming — read a book, gentle stretches, listen to calm music
4. Write down any worries or to-do items for tomorrow (clears your mind)
5. Avoid intense discussions or stressful content
6. Keep the bedroom for sleep and intimacy only

**What disrupts sleep:**
• Caffeine within 6 hours of bedtime
• Heavy meals within 3 hours
• Alcohol — helps you fall asleep but worsens sleep quality
• Napping after 3 PM or for more than 30 minutes
• Irregular sleep schedule — even on weekends

*If you regularly struggle with sleep despite good habits, consult a doctor. Sleep disorders like sleep apnea are treatable.*`,

  stress: `### 📋 More About Managing Stress and Anxiety

**Understanding the stress response:**
Your body's "fight or flight" response releases cortisol and adrenaline — helpful in short bursts but harmful when constantly activated. Chronic stress affects digestion, sleep, immunity, mood, and heart health.

**Practical stress management techniques:**

**Breathing exercises (do these for 1-2 minutes):**
• **4-7-8 breathing:** Inhale through nose for 4 counts, hold for 7, exhale through mouth for 8
• **Box breathing:** Inhale 4 counts, hold 4, exhale 4, hold 4 — repeat
• **Simple:** Just breathe out longer than you breathe in

**Body-based techniques:**
• Progressive muscle relaxation — tense and release each muscle group
• Gentle stretching or walking
• Massage or self-massage (shoulders, hands, feet)
• Hot bath or warm shower

**Mind-based techniques:**
• Mindfulness: Notice 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, 1 you can taste
• Gratitude: Write 3 things you're grateful for
• Journaling: Write whatever is on your mind for 5 minutes
• Grounding: Place both feet on the floor, feel your breath

**When to seek professional help:**
• Stress significantly affects your daily functioning
• You feel anxious or down most of the time
• You're using alcohol, drugs, or food to cope
• You have thoughts of harming yourself — call emergency services or a crisis line immediately

*Taking care of your mental health is just as important as your physical health.*`,

  firstaid: `### 📋 More First Aid Information

**CPR basics (adults):**
1. Check responsiveness — tap and shout
2. Call emergency services
3. Push hard and fast in the center of the chest — at least 2 inches deep, 100-120 compressions per minute (to the beat of "Stayin' Alive")
4. If trained, give 2 rescue breaths after every 30 compressions
5. Continue until help arrives

**Choking response (Heimlich maneuver):**
• Stand behind the person, wrap arms around their waist
• Make a fist above their belly button
• Grasp fist with other hand and thrust inward and upward
• Repeat until object is expelled or person becomes unconscious

**Severe allergic reaction (anaphylaxis):**
• Use epinephrine auto-injector (EpiPen) immediately — inject into outer thigh
• Call emergency services
• Lie person flat with legs elevated if possible
• If they stop breathing, start CPR

**Poisoning:**
• Call poison control immediately
• Don't induce vomiting unless instructed
• If the person is unconscious, place them on their side (recovery position)
• Bring the poison container to the hospital

**Fractures and sprains:**
• Don't try to realign the bone
• Immobilize the area with a splint if possible
• Apply ice to reduce swelling
• Seek medical attention

*Taking a certified first aid course is one of the most valuable things you can do. Contact your local Red Cross or St. John Ambulance for courses near you.*`,

  womenshealth: `### 📋 More About Women's Health

**Reproductive health across life stages:**
• **Adolescence:** Menstrual education, HPV vaccination (11-12 years), healthy habits
• **Reproductive years:** Regular gynecological check-ups, contraception choices, cervical screening (Pap smear every 3-5 years starting at 21 or 25 depending on guidelines)
• **Pregnancy:** Prenatal care, nutrition, exercise, monitoring for complications
• **Perimenopause and menopause:** Managing symptoms (hot flashes, mood changes, sleep disruption), bone health, HRT options

**Common conditions:**
• **PCOS (Polycystic Ovary Syndrome):** Affects 1 in 10 women — irregular periods, excess hair, acne, weight gain. Managed with lifestyle, medication, and sometimes fertility treatment.
• **Endometriosis:** Uterine-like tissue grows outside the uterus — causes severe period pain, heavy bleeding, fertility issues. Early diagnosis improves outcomes.
• **UTIs:** More common in women due to shorter urethra — prevention: drink water, urinate after intercourse, wipe front to back
• **Breast health:** Monthly self-exams + regular mammograms starting at 40-50 (guidelines vary)

**Bone health:**
Women have a higher risk of osteoporosis — ensure adequate calcium (1,000-1,200 mg/day) and vitamin D (600-800 IU/day), and do weight-bearing exercise

**Heart disease in women:**
Heart disease is the #1 killer of women worldwide. Symptoms can differ from men: nausea, jaw/back pain, extreme fatigue rather than chest pain. Don't ignore these signs.

*Regular well-woman visits are essential — not just when something is wrong.*`,

  childhealth: `### 📋 More About Child Health

**Well-child visits and vaccinations:**
Regular check-ups track growth, development, and catch issues early. Follow your country's immunization schedule — vaccines protect against measles, polio, hepatitis B, diphtheria, tetanus, whooping cough, HPV, and many more.

**Nutrition by age:**
• **0-6 months:** Exclusive breastfeeding or formula
• **6-12 months:** Introduce solids while continuing breastmilk/formula — one new food at a time
• **1-3 years:** Small portions of family foods, limit milk to 2-3 cups/day, avoid choking hazards
• **4-8 years:** Balanced meals, limit sugary snacks, encourage trying new foods
• **9+ years:** Growing children need nutrient-dense meals — iron, calcium, and protein are especially important

**Common childhood illnesses:**
• **Common cold:** Most frequent — rest, fluids, honey (for 1+ years), saline drops for congestion. No antibiotics for viral infections.
• **Ear infections:** Often follow colds — symptoms include ear pulling, fussiness, fever. Some resolve on their own; others need antibiotics.
• **Fever:** A fever itself is not dangerous — it's the body fighting infection. Treat discomfort, not the number. Call a doctor for fever in infants under 3 months, or fever lasting more than 3 days.

**Safety tips:**
• Car seats for every ride — rear-facing until at least age 2
• Childproof your home — cover outlets, secure furniture, lock away chemicals
• Supervise around water — drowning is a leading cause of death in young children
• Teach body safety — proper names for body parts, "no" for unwanted touch

**Developmental milestones:**
If your child isn't meeting milestones (smiling, sitting, walking, speaking), talk to your pediatrician early. Early intervention makes a big difference.

*Trust your instincts as a parent — if something doesn't feel right, check with a doctor.*`,

  elderlycare: `### 📋 More About Elderly Care

**Common health concerns in older adults:**
• **Fall prevention:** Falls are the leading cause of injury in seniors. Remove loose rugs, improve lighting, install grab bars, encourage strength and balance exercises.
• **Cognitive health:** Mild forgetfulness is common, but significant memory loss is not normal aging. Stay socially engaged, mentally active, and physically active. See a doctor for cognitive concerns.
• **Medication management:** Many seniors take multiple medications — use a pill organizer, keep a list of all drugs (including supplements), and review with the doctor regularly.
• **Vision and hearing:** Regular check-ups prevent falls and social isolation — don't accept vision/hearing loss as inevitable
• **Bone health:** Osteoporosis risk increases with age — ensure calcium, vitamin D, and weight-bearing exercise; get bone density testing every 2 years

**Nutrition for seniors:**
• Protein needs may increase — include protein at every meal to prevent muscle loss (sarcopenia)
• Fiber helps prevent constipation — whole grains, fruits, vegetables
• Vitamin B12 absorption decreases with age — consider supplementation
• Stay hydrated — thirst sensation diminishes with age, so drink water regularly even if not thirsty

**Mental health matters:**
Depression is NOT a normal part of aging. Social connection, meaningful activities, and professional help when needed are essential.

**When to consider additional support:**
Difficulty with daily activities (bathing, dressing, cooking), repeated falls, significant weight loss, confusion or wandering, caregiver burnout — home care, assisted living, or nursing home may be needed

*A geriatrician specializes in the unique health needs of older adults. Regular geriatric assessments are valuable.*`,

  prevention: `### 📋 More About Preventive Healthcare

**Screenings by age — general guidelines:**

**Adults (18-39):**
• Blood pressure: Every 2 years (if normal)
• Cholesterol: Every 4-6 years starting at 20
• Dental: Every 6 months
• Eye exam: Every 2 years
• Skin check: Self-exams monthly
• STI screening: As needed based on risk
• Women: Pap smear every 3-5 years starting at 21-25, clinical breast exam

**Adults (40-49):**
• All of the above, PLUS:
• Diabetes screening: Every 3 years starting at 45
• Women: Mammogram discussion starting at 40
• Men: Discuss prostate cancer screening with doctor starting at 45-50

**Adults (50+):**
• All of the above, PLUS:
• Colorectal cancer screening (colonoscopy every 10 years, or alternatives)
• Bone density test (women 65+, men 70+)
• Shingles vaccine (50+)
• Hearing and vision checks annually
• Cognitive screening

**Lifestyle-based prevention:**
• **Don't smoke** — adds 10 years of life expectancy compared to continuing
• **Healthy weight** — BMI between 18.5-24.9; waist circumference under 35 inches (women) or 40 inches (men)
• **Physical activity** — 150 min/week moderate activity
• **Diet** — rich in plants, fiber, healthy fats
• **Sleep** — 7-9 hours
• **Stress management** — chronic stress increases disease risk

**Immunizations for adults:**
Flu (yearly), Tdap (once, then Td every 10 years), Shingles (50+), Pneumococcal (65+ or if immunocompromised), RSV (60+), COVID-19 (as recommended)

*An annual wellness visit with your primary care provider is the perfect time to catch up on screenings and vaccinations.*`
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
// Symptom → Disease mapping — suggests possible conditions from symptoms
// ────────────────────────────────────────────────────────────────────────────
const SYMPTOM_DISEASE_MAP = {
  headache:     ['Migraine', 'Tension headache', 'Sinusitis', 'Common cold', 'Flu', 'Dengue', 'Malaria', 'Typhoid', 'COVID-19', 'High blood pressure', 'Dehydration', 'Eye strain'],
  fever:        ['Common cold', 'Flu', 'Dengue', 'Malaria', 'Typhoid', 'COVID-19', 'Urinary tract infection', 'Pneumonia', 'Tuberculosis', 'Hepatitis', 'Typhoid'],
  cough:        ['Common cold', 'Flu', 'COVID-19', 'Asthma', 'Allergies', 'Bronchitis', 'Pneumonia', 'Tuberculosis', 'GERD / Acid reflux'],
  sorethroat:   ['Common cold', 'Flu', 'COVID-19', 'Strep throat', 'Tonsillitis', 'Allergies', 'Dry air'],
  runnynose:    ['Common cold', 'Flu', 'Allergies (hay fever)', 'Sinusitis', 'COVID-19'],
  fatigue:      ['Anemia', 'Thyroid disorders', 'Diabetes', 'Depression', 'Sleep apnea', 'Chronic fatigue syndrome', 'Iron deficiency', 'Dehydration', 'Poor sleep'],
  bodyache:     ['Flu', 'Dengue', 'Malaria', 'COVID-19', 'Fibromyalgia', 'Arthritis', 'Vitamin D deficiency'],
  stomachpain:  ['Indigestion', 'Gas / bloating', 'Constipation', 'Food poisoning', 'Gastritis', 'Acid reflux', 'IBS', 'Stomach infection', 'Appendicitis (if severe, right-sided)'],
  nausea:       ['Food poisoning', 'Migraine', 'Pregnancy', 'GERD', 'Stomach infection', 'Vertigo', 'Anxiety', 'Medication side effect'],
  diarrhea:     ['Food poisoning', 'Stomach infection', 'IBS', 'Crohn\'s disease', 'Typhoid', 'Traveler\'s diarrhea', 'Antibiotic side effect'],
  constipation: ['Dehydration', 'Low fiber diet', 'IBS', 'Hypothyroidism', 'Medication side effect', 'Lack of exercise'],
  backpain:     ['Muscle strain', 'Poor posture', 'Herniated disc', 'Sciatica', 'Arthritis', 'Osteoporosis', 'Kidney infection / stones'],
  dizziness:    ['Dehydration', 'Low blood pressure', 'Anemia', 'Inner ear disorder (BPPV)', 'Vertigo', 'Low blood sugar', 'Anxiety', 'Medication side effect', 'Migraine'],
  chestpain:    ['Muscle strain', 'Anxiety / panic attack', 'GERD / heartburn', 'Angina', 'Heart attack', 'Costochondritis'],
  shortnessofbreath: ['Asthma', 'Anxiety / panic attack', 'COVID-19', 'Pneumonia', 'Anemia', 'Heart condition', 'Allergic reaction'],
  skinrash:     ['Allergic reaction', 'Eczema', 'Psoriasis', 'Contact dermatitis', 'Heat rash', 'Measles', 'Dengue', 'Chickenpox'],
  swelling:     ['Injury / sprain', 'Allergic reaction', 'Arthritis', 'Kidney disease', 'Pregnancy (edema)', 'Heart condition', 'Infection'],
  weightloss:   ['Diabetes', 'Thyroid disorders (hyperthyroidism)', 'Tuberculosis', 'Cancer', 'Digestive disorders', 'Depression'],
  weightgain:   ['Hypothyroidism', 'PCOS', 'Depression', 'Medication side effect', 'Insulin resistance', 'Fluid retention'],
  hairloss:     ['Thyroid disorders', 'Iron deficiency anemia', 'Stress', 'PCOS', 'Nutritional deficiency', 'Medication side effect', 'Aging'],
  sleepproblems: ['Stress / anxiety', 'Depression', 'Sleep apnea', 'Caffeine overuse', 'Poor sleep hygiene', 'Chronic pain', 'Thyroid disorders'],
  visionchanges: ['Eye strain', 'Migraine', 'Diabetes', 'High blood pressure', 'Glaucoma', 'Cataract', 'Aging (presbyopia)'],
  numbness:     ['Diabetes (neuropathy)', 'Vitamin B12 deficiency', 'Pinched nerve', 'Carpal tunnel syndrome', 'Poor circulation', 'Multiple sclerosis'],
  palpitations: ['Anxiety / panic attack', 'Caffeine excess', 'Dehydration', 'Anemia', 'Thyroid disorders (hyperthyroidism)', 'Heart arrhythmia', 'Stress']
};

const SYMPTOM_KEYWORDS = {
  headache:     ['headache', 'head ache', 'head pain', 'migraine'],
  fever:        ['fever', 'temperature', 'high temperature', 'body heat', 'hot'],
  cough:        ['cough', 'coughing'],
  sorethroat:   ['sore throat', 'scratchy throat', 'throat pain', 'painful swallowing'],
  runnynose:    ['runny nose', 'stuffy nose', 'nasal congestion', 'blocked nose', 'sniffles'],
  fatigue:      ['fatigue', 'tired', 'exhausted', 'weakness', 'low energy', 'lethargy', 'worn out', 'drained'],
  bodyache:     ['body ache', 'body pain', 'muscle pain', 'muscle ache', 'myalgia', 'aches'],
  stomachpain:  ['stomach pain', 'belly pain', 'abdominal pain', 'stomach ache', 'tummy ache'],
  nausea:       ['nausea', 'nauseous', 'sick to stomach', 'feel like vomiting'],
  diarrhea:     ['diarrhea', 'loose stools', 'loose motion', 'watery stool'],
  constipation: ['constipation', 'constipated', 'hard stool', 'difficulty passing stool'],
  backpain:     ['back pain', 'backache', 'lower back pain'],
  dizziness:    ['dizziness', 'dizzy', 'lightheaded', 'vertigo', 'spinning sensation', 'feeling faint'],
  chestpain:    ['chest pain', 'chest tightness', 'chest pressure'],
  shortnessofbreath: ['shortness of breath', 'difficulty breathing', 'breathless', 'can\'t breathe', 'wheezing'],
  skinrash:     ['rash', 'skin rash', 'hives', 'red spots', 'itching'],
  swelling:     ['swelling', 'swollen', 'edema', 'puffiness'],
  weightloss:   ['weight loss', 'losing weight', 'unexplained weight loss'],
  weightgain:   ['weight gain', 'gaining weight'],
  hairloss:     ['hair loss', 'hair fall', 'balding', 'thinning hair'],
  sleepproblems:['insomnia', 'can\'t sleep', 'trouble sleeping', 'poor sleep', 'staying asleep'],
  visionchanges:['blurry vision', 'blurred vision', 'vision changes', 'difficulty seeing'],
  numbness:     ['numbness', 'tingling', 'pins and needles', 'numb'],
  palpitations: ['palpitations', 'heart racing', 'rapid heartbeat', 'pounding heart', 'skipped beat']
};

function detectUserSymptoms(message) {
  const m = message.toLowerCase();
  const detected = [];
  for (const [symptom, keywords] of Object.entries(SYMPTOM_KEYWORDS)) {
    for (const kw of keywords) {
      if (m.includes(kw)) {
        detected.push(symptom);
        break;
      }
    }
  }
  return detected;
}

function getSymptomDiseaseResponse(symptoms) {
  if (symptoms.length === 0) return null;

  // Collect all possible conditions for the detected symptoms
  let conditionCounts = {};
  for (const symptom of symptoms) {
    const conditions = SYMPTOM_DISEASE_MAP[symptom] || [];
    for (const condition of conditions) {
      conditionCounts[condition] = (conditionCounts[condition] || 0) + 1;
    }
  }

  // Separate conditions that match ALL symptoms vs. some symptoms
  const allMatch = [];
  const someMatch = [];
  for (const [condition, count] of Object.entries(conditionCounts)) {
    if (count === symptoms.length) {
      allMatch.push(condition);
    } else if (count >= Math.ceil(symptoms.length / 2)) {
      someMatch.push({ name: condition, matchCount: count });
    }
  }

  // Build symptom names for display
  const symptomNames = symptoms.map(s => s.replace(/([A-Z])/g, ' $1').trim()).map(s => s.charAt(0).toUpperCase() + s.slice(1));

  let response = `### 🔍 Possible Conditions Based on Your Symptoms\n\n`;
  response += `Based on the symptoms you mentioned (${symptomNames.join(', ')}), here are some conditions that may share these symptoms:\n\n`;

  if (allMatch.length > 0) {
    response += `**Conditions that commonly include ALL these symptoms:**\n`;
    allMatch.slice(0, 6).forEach(c => { response += `• ${c}\n`; });
    response += `\n`;
  }

  if (someMatch.length > 0) {
    response += `**Conditions that include MOST of these symptoms:**\n`;
    someMatch.sort((a, b) => b.matchCount - a.matchCount).slice(0, 5).forEach(c => {
      response += `• ${c.name} (${c.matchCount} of ${symptoms.length} symptoms)\n`;
    });
    response += `\n`;
  }

  response += `**What you should do next:**\n`;
  response += `• Keep track of when symptoms started and how they change\n`;
  response += `• Note any other symptoms that appear\n`;
  response += `• See a doctor if symptoms persist more than a few days or get worse\n`;
  response += `• For severe symptoms (high fever, difficulty breathing, severe pain), seek medical care promptly\n\n`;

  response += `⚠️ **Important:** Many different conditions share the same symptoms. This is NOT a diagnosis. Only a doctor can determine what's actually wrong after examining you and running appropriate tests.`;

  return response;
}

// ────────────────────────────────────────────────────────────────────────────
// Dailylife topic to array index mapping
// ────────────────────────────────────────────────────────────────────────────
const DAILYLIFE_INDEX_MAP = {
  dailylife_energydrinks: 0,
  dailylife_soda: 1,
  dailylife_smoking: 2,
  dailylife_alcohol: 3,
  dailylife_junkfood: 4,
  dailylife_coffee: 5,
  dailylife_milk: 6,
  dailylife_latenight: 7,
  dailylife_breakfast: 8,
  dailylife_supplements: 9,
  dailylife_juice: 10,
  dailylife_greentea: 11,
  dailylife_redmeat: 12,
  dailylife_salt: 13,
  dailylife_dailyexercise: 14,
  dailylife_chocolate: 15,
  dailylife_detox: 16,
  dailylife_nuts: 17,
  dailylife_sparkling: 18,
  dailylife_eggs: 19,
  dailylife_bread: 20
};

// ────────────────────────────────────────────────────────────────────────────
// Follow-up / continuation detection
// ────────────────────────────────────────────────────────────────────────────
const FOLLOW_UP_PHRASES = [
  'tell me more', 'more', 'continue', 'go on', 'elaborate',
  'expand', 'explain more', 'more details', 'more information',
  'what else', 'further', 'give me more', 'can you tell me more',
  'i want to know more', 'tell me about it', 'provide more',
  'and then', 'what else can you tell me', 'tell me everything',
  'give me additional information', 'i need more details',
  'tell me in detail', 'can you elaborate', 'tell me something more',
  'any other information', 'what more do you have',
  'के बारे में और बताएं', 'और बताइए', 'और बताओ',
  'विस्तार से बताएं', 'और जानकारी दें', 'कुछ और बताएं',
  'continue from before', 'as you were saying', 'you were saying',
  'tell me additional', 'going on', 'carry on'
];

function isFollowUp(message) {
  const m = message.toLowerCase().trim();
  // Exact short matches — "more" alone shouldn't trigger, but "tell me more" should
  if (m === 'tell me more' || m === 'tell me more.' || m === 'tell me more!' || 
      m === 'continue' || m === 'elaborate' || m === 'expand' ||
      m === 'what else' || m === 'carry on' || m === 'go on') return true;
  return FOLLOW_UP_PHRASES.some(phrase => m.includes(phrase));
}

const SYMPTOM_RELATED_DISEASES = {
  headache: ['migraine', 'tension', 'sinusitis', 'hypertension', 'eye strain'],
  fever: ['common cold', 'flu', 'dengue', 'malaria', 'typhoid', 'infection'],
  cough: ['asthma', 'allergies', 'bronchitis', 'common cold', 'flu', 'tuberculosis'],
  stomach: ['IBS', 'gastritis', 'food poisoning', 'acid reflux', 'constipation'],
  backpain: ['sciatica', 'herniated disc', 'muscle strain', 'kidney stones', 'arthritis'],
  dizziness: ['vertigo', 'anemia', 'low blood pressure', 'inner ear disorder', 'dehydration'],
  skincare: ['eczema', 'psoriasis', 'allergic reaction', 'acne', 'contact dermatitis'],
  dental: ['cavities', 'gingivitis', 'tooth infection', 'gum disease', 'oral hygiene'],
  digestion: ['IBS', 'GERD', 'food intolerance', 'stomach infection', 'indigestion'],
  immunity: ['vitamin deficiency', 'chronic stress', 'poor sleep', 'poor nutrition'],
  weight: ['thyroid disorders', 'PCOS', 'insulin resistance', 'metabolic syndrome'],
  bone: ['osteoporosis', 'osteopenia', 'vitamin D deficiency', 'calcium deficiency'],
  anemia: ['iron deficiency', 'B12 deficiency', 'chronic disease', 'heavy periods'],
  eye: ['cataract', 'glaucoma', 'conjunctivitis', 'refractive error', 'dry eye'],
  hygiene: ['skin infections', 'dental problems', 'body odor', 'foot fungus']
};

function getLastRealUserMessage(history) {
  if (!history || history.length === 0) return null;
  for (let i = history.length - 1; i >= 0; i--) {
    if (history[i].sender === 'user') {
      if (!isFollowUp(history[i].text)) {
        return history[i].text;
      }
    }
  }
  return null;
}

function getLastTopicFromHistory(history) {
  const lastRealMsg = getLastRealUserMessage(history);
  if (!lastRealMsg) return null;
  return detectSpecificCondition(lastRealMsg);
}

function getFollowUpResponse(history) {
  const lastTopic = getLastTopicFromHistory(history);
  if (!lastTopic) return pickRandom(RESPONSES.general, 'general');

  // 1. Full continuation content available
  if (CONTINUATIONS[lastTopic]) {
    return `### More Information\n\n${CONTINUATIONS[lastTopic]}`;
  }

  // 2. Dailylife subtopics — pivot to related dailylife topic
  if (lastTopic.startsWith('dailylife_')) {
    const dlName = lastTopic.replace('dailylife_', '');
    return `### More on This Topic\n\nHere are some related questions you might find useful:\n\n• How does it affect your overall health?\n• What are healthier alternatives?\n• How much is too much (or too little)?\n• Who should be extra careful?\n\n*If you have a specific question about this topic, feel free to ask!*`;
  }

  // 3. Symptoms — pivot to related conditions
  if (SYMPTOM_RELATED_DISEASES[lastTopic]) {
    const related = SYMPTOM_RELATED_DISEASES[lastTopic];
    let resp = `### Related Conditions\n\nIf you're experiencing this symptom, here are some conditions you might want to learn more about:\n\n`;
    related.forEach(c => { resp += `• ${c.charAt(0).toUpperCase() + c.slice(1)}\n`; });
    resp += `\n**⚠️ Important:** I'm an educational tool, not a diagnostic one. Many conditions share similar symptoms — only a doctor can determine the actual cause after examining you.`;
    return resp;
  }

  // 4. Multi-entry topics — try a different variant
  if (RESPONSES[lastTopic] && RESPONSES[lastTopic].length > 1) {
    return pickRandom(RESPONSES[lastTopic], lastTopic + '_followup');
  }

  // 5. Vaccine / test / medicine topics — offer more specific angle
  if (['vaccinations', 'medicaltests', 'medicines', 'prevention', 'disease'].includes(lastTopic)) {
    const tips = {
      vaccinations: "If you're wondering which vaccines are recommended for your age group or travel plans, ask me a more specific question!",
      medicaltests: 'Ask me about specific tests like blood tests, X-rays, MRIs, or ECGs — I can explain what they check for!',
      medicines: 'Feel free to ask about a specific type of medicine — pain relievers, antibiotics, allergy meds, or supplements.',
      prevention: 'Prevention covers many areas — diet, exercise, sleep, stress, vaccines, screenings. What aspect interests you most?',
      disease: 'Ask me about a specific disease or condition for more detailed information.'
    };
    return `### More on This Topic\n\n${tips[lastTopic] || 'What specific aspect would you like to explore further?'}`;
  }

  // 6. Everything else — contextual fallback
  return `I hope that information was helpful! To learn more, try asking about:\n\n• Causes and risk factors\n• Prevention tips\n• Related symptoms or conditions\n• When to see a doctor\n• Treatment options (always consult a doctor for personal medical advice)`;
}

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
  if (containsWordRoot(m, ['dizz', 'vertigo', 'lightheaded', 'feeling faint', 'spinning', 'dizzy', 'dizziness'])) return 'dizziness';

  // General health topics
  if (containsWordRoot(m, ['eat', 'diet', 'food', 'nutrition', 'meal'])) return 'nutrition';
  if (containsWordRoot(m, ['exercise', 'fitness', 'workout', 'sport', 'walk', 'run'])) return 'exercise';
  if (containsWordRoot(m, ['sleep', 'insomnia', 'tired', 'bedtime', 'rest'])) return 'sleep';
  if (containsWordRoot(m, ['hydrate', 'hydration', 'water', 'drink'])) return 'hydration';
  if (containsWordRoot(m, ['stress', 'anxiety', 'mental', 'wellness', 'calm', 'relax', 'meditate'])) return 'stress';
  if (containsWordRoot(m, ['first aid', 'burn', 'cut', 'wound', 'bleed', 'choking'])) return 'firstaid';
  if (containsWordRoot(m, ['hygiene', 'wash', 'teeth', 'brush', 'clean'])) return 'hygiene';
  if (containsWordRoot(m, ['preventive', 'vaccine', 'checkup', 'screening', 'prevention', 'health tip'])) return 'prevention';

  // Daily life products & habits (specific before general)
  if (containsWordRoot(m, ['energy drink', 'red bull', 'monster energy', 'rockstar', 'bang energy'])) return 'dailylife_energydrinks';
  if (containsWordRoot(m, ['soda', 'soft drink', 'soda pop', 'coke', 'coca cola', 'pepsi', 'sprite', 'fanta', 'carbonated drink'])) return 'dailylife_soda';
  if (containsWordRoot(m, ['smoking', 'smoke', 'cigarette', 'cigar', 'vape', 'vaping', 'tobacco', 'nicotine', 'smoker'])) return 'dailylife_smoking';
  if (containsWordRoot(m, ['alcohol', 'beer', 'wine', 'whiskey', 'vodka', 'rum', 'gin', 'liquor', 'drinking alcohol', 'alcoholic'])) return 'dailylife_alcohol';
  if (containsWordRoot(m, ['junk food', 'fast food', 'pizza', 'burger', 'french fries', 'chips', 'namkeen', 'processed food'])) return 'dailylife_junkfood';
  if (containsWordRoot(m, ['coffee', 'black coffee', 'caffeine'])) return 'dailylife_coffee';
  if (containsWordRoot(m, ['milk', 'dairy', 'cow milk', 'buffalo milk'])) return 'dailylife_milk';
  if (containsWordRoot(m, ['late night', 'midnight snack', 'eating late', 'eat at night'])) return 'dailylife_latenight';
  if (containsWordRoot(m, ['skip breakfast', 'skipping breakfast', 'breakfast', 'morning meal'])) return 'dailylife_breakfast';
  if (containsWordRoot(m, ['supplement', 'protein powder', 'whey', 'creatine', 'multivitamin', 'dietary supplement'])) return 'dailylife_supplements';
  if (containsWordRoot(m, ['fruit juice', 'packaged juice', 'juice'])) return 'dailylife_juice';
  if (containsWordRoot(m, ['green tea', 'matcha'])) return 'dailylife_greentea';
  if (containsWordRoot(m, ['red meat', 'beef', 'pork', 'mutton', 'lamb', 'steak'])) return 'dailylife_redmeat';
  if (containsWordRoot(m, ['salt', 'sodium', 'sea salt', 'table salt'])) return 'dailylife_salt';
  if (containsWordRoot(m, ['exercise daily', 'rest day', 'overtraining', 'every day exercise', 'workout everyday'])) return 'dailylife_dailyexercise';
  if (containsWordRoot(m, ['dark chocolate', 'cocoa'])) return 'dailylife_chocolate';
  if (containsWordRoot(m, ['detox', 'cleanse', 'juice cleanse', 'detox tea', 'body cleanse'])) return 'dailylife_detox';
  if (containsWordRoot(m, ['nuts', 'almond', 'walnut', 'cashew', 'pistachio', 'peanut'])) return 'dailylife_nuts';
  if (containsWordRoot(m, ['sparkling water', 'carbonated water', 'soda water', 'fizzy water'])) return 'dailylife_sparkling';
  if (containsWordRoot(m, ['eggs', 'egg', 'egg white', 'egg yolk'])) return 'dailylife_eggs';
  if (containsWordRoot(m, ['bread', 'gluten', 'whole wheat bread', 'white bread', 'gluten free'])) return 'dailylife_bread';

  // Tips and greetings
  if (containsWordRoot(m, ['tip', 'daily'])) return 'tip';
  if (containsWordRoot(m, ['hello', 'hi', 'hey', 'help', 'who are you', 'what can you do', 'welcome'])) return 'greeting';

  return 'general';
}

// ────────────────────────────────────────────────────────────────────────────
// Response selection
// ────────────────────────────────────────────────────────────────────────────
function getLocalResponse(message, history) {
  // Check for follow-up first — uses conversation history for context
  if (history && history.length > 1 && isFollowUp(message)) {
    const followUpReply = getFollowUpResponse(history);
    if (followUpReply) return followUpReply;
  }

  const topic = detectSpecificCondition(message);

  if (topic === 'emergency') return RESPONSES.emergency[0];
  if (topic === 'greeting') return pickRandom(RESPONSES.greeting, 'greeting');
  if (topic === 'tip') {
    return `Here's a daily health tip for you:\n\n${healthTips[Math.floor(Math.random() * healthTips.length)]}`;
  }

  // Symptom-to-disease matching: detect symptoms in the message
  const detectedSymptoms = detectUserSymptoms(message);
  if (topic === 'symptoms' || detectedSymptoms.length >= 2) {
    const symptomReply = getSymptomDiseaseResponse(detectedSymptoms);
    if (symptomReply) return symptomReply;
  }

  // Handle dailylife subtopics by mapping to the right array index
  if (topic.startsWith('dailylife_')) {
    const idx = DAILYLIFE_INDEX_MAP[topic];
    if (idx !== undefined && RESPONSES.dailylife && RESPONSES.dailylife[idx]) {
      return RESPONSES.dailylife[idx];
    }
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

  return getLocalResponse(userMessage, conversationHistory) + disclaimerText;
}
