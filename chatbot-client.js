const RESPONSES = {
  emergency: [
    `🚨 **IMMEDIATE MEDICAL ATTENTION REQUIRED** 🚨\n\nIf you or someone you are with is experiencing severe chest pain, extreme difficulty breathing, sudden weakness or numbness (especially on one side of the body), heavy bleeding, or loss of consciousness, please **call your local emergency services (e.g., 911, 999, 112) or go to the nearest emergency room immediately.**\n\nDo not wait or try to self-treat. These symptoms can be life-threatening and require immediate evaluation by trained medical professionals.`
  ],
  nutrition: [
    `### 🥗 Healthy Eating & Nutrition\n\nA balanced diet provides the nutrients your body needs. Here are core principles:\n\n* **Prioritize Whole Foods:** Vegetables, fruits, whole grains (oats, brown rice, quinoa), lean proteins (poultry, fish, beans, tofu), and healthy fats (avocados, nuts, olive oil).\n* **Fill Half Your Plate:** Make half of your meals colorful vegetables and fruits — different colors provide different vitamins and antioxidants.\n* **Limit Added Sugars & Sodium:** Cut back on sugary sodas, processed snacks, and fast food. Excess sugar and sodium are linked to heart disease and Type 2 diabetes.\n* **Watch Portions:** Eat mindfully without distractions. Listen to your body's hunger and fullness cues.\n\n*Remember: Individual needs vary. Consult a dietitian for personalized advice.*`,
    `### 🥗 Balanced Diet Basics\n\nEating well doesn't have to be complicated. Focus on these principles:\n\n* **Protein with Every Meal:** Include eggs, yogurt, lentils, fish, chicken, or tofu. Protein keeps you full and supports muscle repair.\n* **Complex Carbs for Energy:** Choose whole grains like oats, brown rice, millet, and whole wheat bread over white flour products.\n* **Healthy Fats are Essential:** Include nuts, seeds, avocados, and olive oil. They support brain health and hormone function.\n* **Fiber-Rich Foods:** Beans, lentils, vegetables, and fruits aid digestion and help control blood sugar.\n* **Stay Hydrated:** Drink water throughout the day. Herbal teas and infused water count too.`,
    `### 🥗 Meal Planning Tips\n\nPlanning ahead makes healthy eating easier:\n\n* **Prep Vegetables in Advance:** Wash and chop veggies for the week and store them in airtight containers.\n* **Cook Grains in Bulk:** Make a large batch of brown rice, quinoa, or millet to use across multiple meals.\n* **Healthy Snacks Ready:** Keep nuts, fruit, yogurt, and cut vegetables accessible for when hunger strikes.\n* **Read Labels:** Look for hidden sugars (high fructose corn syrup, dextrose, sucrose) and high sodium content in packaged foods.\n* **Cook at Home More:** Home-cooked meals generally have fewer calories, less sodium, and healthier fats than restaurant food.`
  ],
  exercise: [
    `### 🏃‍♂️ Physical Activity Guidelines\n\nRegular exercise is one of the best things you can do for your health:\n\n* **Weekly Goal:** At least **150 minutes of moderate-intensity** aerobic activity (brisk walking, cycling) or **75 minutes of vigorous-intensity** (running, aerobics) per week.\n* **Strength Training:** Include muscle-strengthening activities on **2 or more days** per week — weight lifting, bodyweight exercises, or resistance bands.\n* **Break Up Sitting:** Stand and stretch for 5 minutes every hour. A short walk after meals aids digestion and blood sugar control.\n* **Start Where You Are:** If new to exercise, begin with 5–10 minutes of walking daily and gradually increase.\n\n*Note: Consult a doctor before starting a new exercise program if you have health conditions.*`,
    `### 🏃‍♂️ Types of Exercise for Overall Health\n\nA well-rounded fitness routine includes:\n\n* **Cardiovascular Exercise:** Walking, jogging, swimming, cycling, dancing — improves heart and lung health.\n* **Strength Training:** Push-ups, squats, lunges, weight lifting — builds muscle, strengthens bones, boosts metabolism.\n* **Flexibility & Stretching:** Yoga, pilates, or simple stretching — improves range of motion and reduces injury risk.\n* **Balance Exercises:** Standing on one leg, tai chi — especially important as we age to prevent falls.\n\n*Aim to move your body in ways you enjoy. Consistency matters more than intensity.*`,
    `### 🏃‍♂️ Fitness for Beginners\n\nStarting a fitness routine:\n\n* **Start Small:** Even 10 minutes of walking is a win. Gradually increase by 5 minutes each week.\n* **Listen to Your Body:** Some soreness is normal, but sharp pain is a signal to stop.\n* **Warm Up & Cool Down:** Always start with 5 minutes of light movement and end with stretching.\n* **Find an Activity You Enjoy:** You're more likely to stick with exercise you look forward to.\n* **Track Progress:** Use a journal or app to record your activities. Seeing progress keeps you motivated.`
  ],
  sleep: [
    `### 😴 Sleep Hygiene Improvement\n\nMost adults need 7–9 hours of quality sleep per night. Here's how to improve yours:\n\n1. **Consistent Schedule:** Go to bed and wake up at the same time every day, even weekends.\n2. **Optimize Your Room:** Keep it dark, quiet, and cool (60–67°F / 15–19°C).\n3. **Screen-Free Wind-Down:** Turn off phones, tablets, and TVs at least 30–60 minutes before bed. Blue light suppresses melatonin.\n4. **Avoid Late Stimulants:** Skip heavy meals, caffeine, and alcohol close to bedtime.\n5. **Relaxation Routine:** Read a book, take a warm bath, or practice deep breathing before sleep.`,
    `### 😴 Understanding Sleep Cycles\n\nSleep isn't just rest — it's an active process:\n\n* **Deep Sleep:** The body repairs tissues, builds bone and muscle, and strengthens the immune system.\n* **REM Sleep:** The brain processes emotions, consolidates memories, and supports learning.\n* **Light Sleep:** Transition phase between wakefulness and deep sleep.\n\n*To get enough of each stage, aim for uninterrupted 7–9 hours. Waking up mid-cycle can leave you feeling groggy.*`,
    `### 😴 Natural Sleep Aids\n\nIf you struggle with sleep, try these natural approaches:\n\n* **Magnesium-Rich Foods:** Almonds, spinach, bananas, and pumpkin seeds can promote relaxation.\n* **Herbal Teas:** Chamomile, valerian root, and lavender tea have calming properties.\n* **White Noise or Nature Sounds:** A fan, white noise machine, or rainfall sounds can mask disruptive noises.\n* **Cool Your Room:** A slightly cool environment (around 65°F) signals the body it's time to sleep.\n* **Limit Napping:** If you nap, keep it under 30 minutes and avoid napping after 3 PM.`
  ],
  hydration: [
    `### 💧 Hydration Guidelines\n\nWater is essential for every cell in your body:\n\n* **Daily Target:** About **8–10 cups (2–2.5 liters)** of water daily for adults. Needs vary with activity, climate, and health.\n* **Check Your Urine:** Pale straw color = well hydrated. Dark yellow or amber = drink more water.\n* **Hydration Tips:** Carry a reusable bottle, set reminders, and infuse water with lemon, cucumber, or mint if plain water feels boring.\n* **Eat Your Water:** Fruits and vegetables like watermelon, cucumber, oranges, and tomatoes have high water content.`,
    `### 💧 Signs of Dehydration\n\nMild dehydration can affect your energy and focus. Watch for:\n\n* **Early Signs:** Thirst, dry mouth, headache, fatigue, dark urine, dizziness.\n* **Moderate Signs:** Rapid heartbeat, reduced urination, irritability, muscle cramps.\n* **Severe Signs (seek medical help):** Confusion, fainting, very dry skin, no urination for 8+ hours.\n\n*Elderly adults and young children are at higher risk for dehydration, especially during hot weather or illness.*`,
    `### 💧 How Much Water Do You Really Need?\n\nThe "8 glasses a day" rule is a general guideline. Your actual needs depend on:\n\n* **Activity Level:** Add 1–3 cups per hour of exercise.\n* **Climate:** Hot or humid weather increases fluid loss through sweat.\n* **Health Status:** Fever, vomiting, or diarrhea increase water needs.\n* **Pregnancy/Breastfeeding:** Additional fluids are needed.\n\n*Listen to your body. Thirst is a signal that you're already mildly dehydrated.*`
  ],
  stress: [
    `### 🧘‍♀️ Stress Management Techniques\n\nChronic stress can harm your health. Here are proven ways to manage it:\n\n* **Deep Breathing:** Try the 4-7-8 method — inhale for 4 seconds, hold for 7, exhale for 8. Repeat 4 times.\n* **Mindfulness Meditation:** Even 5 minutes of quiet focus on your breath can reduce anxiety.\n* **Physical Activity:** Exercise releases endorphins and reduces stress hormones like cortisol.\n* **Stay Connected:** Talk to trusted friends or family. Sharing feelings reduces emotional burden.\n* **Set Boundaries:** Learn to say no to excessive demands. Prioritize and break tasks into smaller steps.\n\n*If stress feels overwhelming, consider speaking with a counselor or therapist.*`,
    `### 🧘‍♀️ Mental Wellness Habits\n\nBuilding daily habits for mental health:\n\n* **Gratitude Practice:** Write down 3 things you're grateful for each day. This shifts focus from problems to positives.\n* **Limit News & Social Media:** Constant exposure to negative news can increase anxiety. Set boundaries.\n* **Spend Time in Nature:** A 20-minute walk in a park or green space lowers stress and improves mood.\n* **Quality Sleep:** Poor sleep worsens stress and anxiety. Prioritize your sleep routine.\n* **Creative Outlet:** Journaling, painting, music, or cooking can be therapeutic and reduce mental tension.`,
    `### 🧘‍♀️ Recognizing Burnout\n\nBurnout is more than just stress — it's physical, emotional, and mental exhaustion:\n\n* **Signs:** Chronic fatigue, cynicism about work/life, reduced performance, irritability, sleep disturbances.\n* **Prevention:** Set clear work-life boundaries, take regular breaks, delegate tasks, and make time for hobbies.\n* **Recovery:** Rest, reduce responsibilities temporarily, seek social support, and consider professional help.\n\n*Burnout is recognized by the World Health Organization as an occupational phenomenon. It's a serious condition that requires attention.*`
  ],
  firstaid: [
    `### 🩹 Basic First Aid\n\nQuick first aid for common injuries:\n\n* **Minor Burns:** Hold under cool running water for 10–15 minutes. Cover with sterile non-stick bandage. Do NOT apply butter, oil, or ice.\n* **Cuts & Scrapes:** Wash gently with mild soap and water. Apply antibiotic ointment and cover with clean bandage.\n* **Nosebleeds:** Sit upright, lean forward (not back), pinch the soft part of your nose for 10 minutes.\n* **Sprains (R.I.C.E.):** **R**est, **I**ce (15–20 min at a time), **C**ompress with elastic bandage, **E**levate above heart.\n\n*For deep wounds, severe burns, head injuries, poisoning, or fractures — call emergency services immediately.*`,
    `### 🩹 First Aid Kit Essentials\n\nEvery home should have a basic first aid kit:\n\n* Adhesive bandages (various sizes)\n* Sterile gauze pads and medical tape\n* Antiseptic wipes or hydrogen peroxide\n* Antibiotic ointment\n* Tweezers and scissors\n* Elastic bandage (ACE wrap)\n* Pain relievers (acetaminophen, ibuprofen)\n* Thermometer\n* Instant cold packs\n* Disposable gloves\n\n*Check your kit every 6 months and replace expired or used items.*`
  ],
  hygiene: [
    `### 🧼 Personal Hygiene Basics\n\nGood hygiene prevents infections and promotes health:\n\n* **Handwashing:** Wash with soap and water for at least **20 seconds** — especially before eating, after the bathroom, and after coughing/sneezing.\n* **Oral Care:** Brush twice daily with fluoride toothpaste, floss daily, and replace your toothbrush every 3–4 months.\n* **Shower Regularly:** Bathe daily to remove sweat, oil, and dead skin cells. Dry thoroughly, especially between toes.\n* **Respiratory Etiquette:** Cough or sneeze into your elbow or a tissue. Dispose of tissues immediately.`
  ],
  preventive: [
    `### 🩺 Preventive Healthcare\n\nPreventive care catches problems early or prevents them entirely:\n\n* **Annual Check-ups:** Visit your primary care doctor yearly to monitor blood pressure, weight, and overall health.\n* **Vaccinations:** Stay current on flu shots, tetanus boosters, and other recommended vaccines.\n* **Screenings:** Regular blood pressure checks, cholesterol tests, blood glucose tests, and age-appropriate cancer screenings.\n* **Self-Exams:** Monitor your skin for changing moles, and perform breast or testicular self-exams monthly.\n\n*Prevention is always better than treatment. Early detection saves lives.*`,
    `### 🩺 Health Screenings by Age\n\nRecommended screenings vary by age and risk factors:\n\n* **20s–30s:** Blood pressure (every 2 years), cholesterol (every 4–6 years), Pap smear (women), dental exam (yearly).\n* **40s:** Diabetes screening (every 3 years), eye exam (every 2 years), mammograms (women, starting at 40–45).\n* **50s:** Colon cancer screening (colonoscopy every 10 years), prostate cancer discussion (men), bone density test.\n* **60+:** Annual hearing test, shingles vaccine, pneumonia vaccine, falls risk assessment.\n\n*Talk to your doctor about which screenings are right for you based on your personal and family history.*`
  ],
  diabetes: [
    `### 🧬 Understanding Diabetes\n\nDiabetes is a condition where blood sugar levels are too high. Here's what you should know:\n\n* **Type 1 Diabetes:** The immune system attacks insulin-producing cells. Requires lifelong insulin therapy. Usually diagnosed in childhood.\n* **Type 2 Diabetes:** The body becomes resistant to insulin or doesn't produce enough. Strongly linked to lifestyle factors. Can sometimes be managed with diet, exercise, and oral medications.\n* **Gestational Diabetes:** Develops during pregnancy and usually resolves after childbirth, but increases future risk of Type 2 diabetes.\n\n*Management includes monitoring blood sugar, healthy eating, regular physical activity, and medication as prescribed.*`,
    `### 🧬 Managing Diabetes Through Lifestyle\n\nFor those with or at risk for diabetes:\n\n* **Carbohydrate Management:** Focus on complex carbs (whole grains, legumes, vegetables) over simple sugars. Spread carb intake evenly throughout the day.\n* **Fiber is Your Friend:** High-fiber foods slow sugar absorption. Aim for lentils, beans, oats, vegetables, and fruits with skin.\n* **Regular Exercise:** Physical activity helps cells use insulin more effectively. Even a 30-minute walk after meals can significantly lower blood sugar spikes.\n* **Weight Management:** Losing even 5–7% of body weight can improve insulin sensitivity and blood sugar control.\n* **Monitor Your Feet:** Diabetes can reduce foot sensation. Check feet daily for cuts, blisters, or sores.\n\n*Always work with your healthcare team to manage your diabetes treatment plan.*`
  ],
  bloodpressure: [
    `### ❤️ Understanding Blood Pressure\n\nBlood pressure measures the force of blood against your artery walls:\n\n* **Normal:** Below 120/80 mmHg\n* **Elevated:** 120–129 / below 80\n* **Stage 1 Hypertension:** 130–139 / 80–89\n* **Stage 2 Hypertension:** 140+ / 90+\n* **Hypertensive Crisis:** 180+ / 120+ — seek emergency care\n\n*High blood pressure often has no symptoms, which is why it's called the "silent killer." Regular monitoring is essential.*`,
    `### ❤️ Managing High Blood Pressure\n\nLifestyle changes can significantly lower blood pressure:\n\n* **Reduce Sodium:** Aim for less than 2,300 mg per day (about 1 teaspoon of salt). Avoid processed foods, canned soups, and fast food.\n* **DASH Diet:** Emphasize fruits, vegetables, whole grains, lean dairy, and nuts while limiting red meat and sweets.\n* **Regular Exercise:** 150 minutes of moderate activity per week can lower pressure by 5–8 mmHg.\n* **Limit Alcohol:** No more than 1 drink per day for women, 2 for men.\n* **Manage Stress:** Chronic stress contributes to hypertension. Practice relaxation techniques.\n* **Medication Adherence:** If prescribed blood pressure medication, take it consistently even when you feel fine.`
  ],
  heart: [
    `### ❤️ Heart Health Basics\n\nCardiovascular disease is the leading cause of death globally. Protect your heart:\n\n* **Know Your Numbers:** Blood pressure, cholesterol, blood sugar, and BMI. Keep them in healthy ranges.\n* **Heart-Healthy Diet:** Mediterranean-style eating — olive oil, fish, nuts, legumes, whole grains, and plenty of vegetables.\n* **Stay Active:** Regular exercise strengthens the heart muscle and improves circulation.\n* **Don't Smoke:** Smoking damages blood vessels and is a major risk factor for heart attacks.\n* **Know the Warning Signs:** Chest pain or discomfort, shortness of breath, pain in the arm/jaw/back, cold sweat, nausea.\n\n*If you experience heart attack symptoms, call emergency services immediately. Every minute matters.*`,
    `### ❤️ Cholesterol Explained\n\nCholesterol is a waxy substance in your blood. Two main types:\n\n* **LDL (Low-Density Lipoprotein) — "Bad" Cholesterol:** High levels can clog arteries. Keep it low.\n* **HDL (High-Density Lipoprotein) — "Good" Cholesterol:** Helps remove LDL from arteries. Higher is better.\n* **Triglycerides:** Another type of fat in the blood. High levels increase heart disease risk.\n\n*Dietary changes to improve cholesterol: Eat more soluble fiber (oats, beans, apples), omega-3s (salmon, walnuts, flaxseeds), and plant sterols. Limit saturated and trans fats.*`
  ],
  cancer: [
    `### 🧬 Cancer Awareness\n\nCancer is a group of diseases involving abnormal cell growth. Key facts:\n\n* **Early Detection Saves Lives:** Many cancers are highly treatable when caught early. Regular screenings are crucial.\n* **Common Warning Signs:** Unexplained weight loss, persistent fever, unusual lumps, changes in skin moles, persistent cough or hoarseness, changes in bowel/bladder habits.\n* **Risk Reduction:** Don't smoke, maintain a healthy weight, limit alcohol, protect your skin from sun, eat a fiber-rich diet, stay active.\n* **Screening Matters:** Mammograms (breast), colonoscopy (colon), Pap smears (cervical), PSA tests (prostate), low-dose CT (lung for smokers).\n\n*If you notice persistent changes in your body, see a doctor. Not all lumps or changes are cancer, but they should be evaluated.*`
  ],
  asthma: [
    `### 🌬️ Understanding Asthma\n\nAsthma is a chronic condition where airways become inflamed and narrow:\n\n* **Common Triggers:** Allergens (pollen, dust mites, mold), air pollution, cold air, exercise, respiratory infections, stress.\n* **Symptoms:** Wheezing, shortness of breath, chest tightness, coughing (especially at night or early morning).\n* **Management:**\n  * Use controller medications (inhaled corticosteroids) daily as prescribed.\n  * Use rescue inhalers (bronchodilators) during attacks.\n  * Identify and avoid personal triggers.\n  * Have an asthma action plan from your doctor.\n\n*If your rescue inhaler isn't relieving symptoms, seek emergency medical help.*`
  ],
  allergy: [
    `### 🤧 Understanding Allergies\n\nAllergies occur when your immune system overreacts to harmless substances:\n\n* **Common Allergens:** Pollen, dust mites, pet dander, mold, certain foods (peanuts, shellfish, eggs, milk), insect stings, medications.\n* **Seasonal Allergies (Hay Fever):** Sneezing, runny nose, itchy eyes, congestion. Often triggered by pollen.\n* **Management:** Antihistamines, nasal sprays, staying indoors during high pollen, using air purifiers, washing bedding in hot water.\n* **Food Allergies:** Strict avoidance is key. Always read ingredient labels. Carry an epinephrine auto-injector if prescribed.\n\n*Severe allergic reactions (anaphylaxis) cause difficulty breathing, swelling of throat, rapid pulse, and require immediate emergency treatment.*`
  ],
  arthritis: [
    `### 🦴 Understanding Arthritis\n\nArthritis involves inflammation of one or more joints:\n\n* **Osteoarthritis:** Wear-and-tear damage to joint cartilage. Common in knees, hips, hands. Risk increases with age and excess weight.\n* **Rheumatoid Arthritis:** Autoimmune condition where the immune system attacks joint linings. Causes pain, swelling, and deformities.\n* **Management:**\n  * Low-impact exercise (swimming, cycling, walking) keeps joints mobile.\n  * Weight management reduces stress on joints.\n  * Hot/cold therapy can relieve pain.\n  * Anti-inflammatory medications as prescribed.\n  * Physical therapy for strengthening supporting muscles.\n\n*See a rheumatologist for proper diagnosis and treatment.*`
  ],
  thyroid: [
    `### 🦋 Understanding Thyroid Disorders\n\nThe thyroid gland controls your metabolism:\n\n* **Hypothyroidism (Underactive):** Weight gain, fatigue, cold intolerance, dry skin, hair loss, depression. Treated with synthetic thyroid hormone.\n* **Hyperthyroidism (Overactive):** Weight loss, rapid heartbeat, anxiety, heat intolerance, trembling, bulging eyes. Treated with medications, radioactive iodine, or surgery.\n* **Dietary Support:** Iodine (seaweed, iodized salt), selenium (Brazil nuts, tuna), and zinc (pumpkin seeds, chickpeas) support thyroid function.\n\n*If you have persistent fatigue, weight changes, or temperature sensitivity, ask your doctor for a thyroid function test.*`
  ],
  kidney: [
    `### 🫘 Kidney Health\n\nYour kidneys filter waste from your blood and regulate fluid balance:\n\n* **Kidney Stones:** Hard mineral deposits that form in kidneys. Symptoms include severe flank pain, blood in urine, nausea. Prevention: drink plenty of water, limit sodium and oxalate-rich foods (spinach, beets, nuts).\n* **UTI (Urinary Tract Infection):** Burning sensation during urination, frequent urge, cloudy urine. Treated with antibiotics. Drink cranberry juice (unsweetened) and water to help prevent.\n* **Chronic Kidney Disease:** Often caused by diabetes or high blood pressure. Early stages have no symptoms. Regular check-ups with blood and urine tests are important if you're at risk.`,
    `### 🫘 Preventing Kidney Stones\n\nKidney stones are extremely painful but often preventable:\n\n* **Stay Hydrated:** Drink enough water to produce 2–2.5 liters of urine daily. This dilutes stone-forming substances.\n* **Limit Sodium:** High sodium increases calcium in urine, which can form stones.\n* **Reduce Oxalate-Rich Foods:** Spinach, rhubarb, beets, nuts, and chocolate can contribute to calcium oxalate stones.\n* **Get Enough Calcium:** Contrary to popular belief, adequate dietary calcium (from food, not supplements) actually reduces stone risk by binding to oxalate in the gut.\n* **Limit Animal Protein:** High intake of red meat and shellfish can increase uric acid stones.`
  ],
  backpain: [
    `### 💪 Managing Back Pain\n\nBack pain is incredibly common — about 80% of adults experience it at some point:\n\n* **Common Causes:** Muscle strain, poor posture, herniated discs, arthritis, osteoporosis, or sedentary lifestyle.\n* **Self-Care for Acute Pain:**\n  * Stay active — bed rest for more than 2 days can weaken muscles.\n  * Apply ice for the first 48 hours, then heat.\n  * Over-the-counter pain relievers (ibuprofen, acetaminophen).\n  * Gentle stretching and walking.\n* **Prevention:** Maintain good posture, strengthen core muscles, lift with your legs not your back, sleep on a supportive mattress.\n\n*See a doctor if pain persists more than 2 weeks, radiates down your legs, or is accompanied by fever or numbness.*`
  ],
  skincare: [
    `### 🧴 Skin Health Guide\n\nYour skin is your body's largest organ. Keep it healthy:\n\n* **Sun Protection:** SPF 30+ sunscreen daily, even on cloudy days. Reapply every 2 hours when outdoors. Sun damage is the #1 cause of premature aging and skin cancer.\n* **Cleansing:** Wash your face twice daily with a gentle cleanser. Avoid harsh soaps that strip natural oils.\n* **Moisturize:** Apply moisturizer while skin is still damp to lock in hydration.\n* **Common Conditions:**\n  * **Acne:** Keep skin clean, use non-comedogenic products, avoid touching your face.\n  * **Eczema:** Moisturize regularly, avoid triggers, use mild fragrance-free products.\n  * **Dry Skin:** Humidifier, lukewarm showers, moisturize immediately after bathing.`,
    `### 🧴 Acne Management\n\nAcne affects people of all ages. Here's how to manage it:\n\n* **Gentle Cleansing:** Wash face twice daily with a mild cleanser. Don't scrub aggressively — it irritates skin.\n* **Non-Comedogenic Products:** Look for "oil-free" and "non-comedogenic" on labels — these won't clog pores.\n* **Over-the-Counter Treatments:** Benzoyl peroxide (kills bacteria), salicylic acid (unclogs pores), niacinamide (reduces inflammation).\n* **Don't Pick or Pop:** This can worsen inflammation and cause scarring.\n* **See a Dermatologist:** For persistent or severe acne, prescription treatments (retinoids, antibiotics, or isotretinoin) may be needed.`
  ],
  dental: [
    `### 🦷 Dental & Oral Health\n\nOral health is connected to overall health:\n\n* **Brushing:** Brush twice daily for 2 minutes with fluoride toothpaste. Use a soft-bristled brush.\n* **Flossing:** Floss once daily — it reaches areas your toothbrush can't.\n* **Diet Matters:** Limit sugary foods and drinks. Sugar feeds bacteria that cause cavities.\n* **Regular Check-ups:** Visit your dentist every 6 months for cleanings and exams.\n* **Signs of Trouble:** Bleeding gums, persistent bad breath, tooth sensitivity, loose teeth — see your dentist promptly.\n\n*Gum disease has been linked to heart disease, diabetes complications, and pregnancy complications.*`
  ],
  digestion: [
    `### 🫃 Digestive Health\n\nGood digestion is key to overall wellness:\n\n* **Fiber-Rich Diet:** Soluble fiber (oats, apples, beans) and insoluble fiber (vegetables, whole grains) keep things moving.\n* **Probiotics:** Yogurt, kefir, kimchi, sauerkraut, and kombucha contain beneficial bacteria that support gut health.\n* **Stay Hydrated:** Water helps break down food and prevents constipation.\n* **Eat Mindfully:** Chew food thoroughly, eat slowly, and avoid overeating.\n* **Common Issues:**\n  * **Constipation:** Increase fiber, water, and physical activity.\n  * **Acid Reflux:** Avoid trigger foods (spicy, fatty, citrus), eat smaller meals, don't lie down after eating.\n  * **IBS (Irritable Bowel Syndrome):** Common condition causing cramping, bloating, and changes in bowel habits. Management includes diet changes, stress reduction, and medication.`,
    `### 🫃 Managing Acid Reflux\n\nAcid reflux (GERD) occurs when stomach acid flows back into the esophagus:\n\n* **Common Symptoms:** Heartburn (burning chest pain), regurgitation, difficulty swallowing, chronic cough.\n* **Dietary Changes:** Avoid spicy foods, citrus, tomatoes, chocolate, caffeine, alcohol, and fatty foods.\n* **Lifestyle Adjustments:**\n  * Eat smaller, more frequent meals rather than large meals.\n  * Don't lie down for 2–3 hours after eating.\n  * Elevate the head of your bed by 6–8 inches.\n  * Maintain a healthy weight.\n* **Over-the-Counter Help:** Antacids, H2 blockers (famotidine), or proton pump inhibitors (omeprazole) can provide relief.\n\n*If symptoms persist despite lifestyle changes, see a doctor for evaluation.*`
  ],
  immunity: [
    `### 🛡️ Supporting Your Immune System\n\nA strong immune system helps you fight off infections:\n\n* **Nutrition for Immunity:**\n  * **Vitamin C:** Citrus fruits, bell peppers, strawberries, broccoli.\n  * **Vitamin D:** Sunlight, fatty fish, fortified milk. Many people are deficient.\n  * **Zinc:** Pumpkin seeds, chickpeas, cashews, meat.\n  * **Antioxidants:** Berries, dark leafy greens, nuts, green tea.\n* **Lifestyle Factors:**\n  * **Quality Sleep:** 7–9 hours — your immune system ramps up during sleep.\n  * **Regular Exercise:** Moderate activity boosts immune function.\n  * **Stress Management:** Chronic stress suppresses immunity.\n  * **Hydration:** Supports all bodily functions including immune response.\n\n*There's no magic pill for immunity — it's built through consistent healthy habits.*`
  ],
  weight: [
    `### ⚖️ Healthy Weight Management\n\nSustainable weight management is about lifestyle, not quick fixes:\n\n* **Calorie Balance:** Weight changes come down to calories in vs. calories out. A deficit of 300–500 calories per day leads to gradual, sustainable weight loss.\n* **Protein & Fiber:** These increase satiety and reduce overall calorie intake. Include protein and vegetables at every meal.\n* **Portion Awareness:** Use smaller plates, measure portions, and avoid eating directly from packages.\n* **Physical Activity:** Combine cardio (calorie burning) with strength training (muscle building — muscle burns more calories at rest).\n* **Sleep & Stress:** Poor sleep and high stress increase cortisol, which promotes fat storage, especially around the belly.\n\n*Aim to lose 0.5–1 kg (1–2 lbs) per week. Faster weight loss is often unsustainable and can be unhealthy.*`,
    `### ⚖️ Myths About Weight Loss\n\nCommon misconceptions that can derail your progress:\n\n* **Myth: "Carbs make you fat."** Truth: Excess calories from ANY source cause weight gain. Complex carbs are essential for energy and health.\n* **Myth: "You need to starve yourself."** Truth: Severe calorie restriction slows metabolism and leads to muscle loss. Eat enough to fuel your body.\n* **Myth: "Detox teas cleanse your system."** Truth: Your liver and kidneys naturally detox your body. No tea or cleanse can improve on this.\n* **Myth: "Spot reduction works."** Truth: You can't target fat loss from specific areas. Overall fat loss through diet and exercise is the only way.\n* **Myth: "Supplements replace healthy eating."** Truth: Whole foods provide complex nutrients that supplements can't replicate.`
  ],
  pregnancy: [
    `### 🤰 Pregnancy Health\n\nProper care during pregnancy is vital for both mother and baby:\n\n* **Prenatal Care:** Regular check-ups with your obstetrician. Take prenatal vitamins (especially folic acid) before and during pregnancy.\n* **Nutrition:** Eat a balanced diet rich in iron (leafy greens, lean meat), calcium (dairy, fortified plant milk), and protein. Stay hydrated.\n* **Safe Exercise:** Walking, swimming, and prenatal yoga are generally safe. Consult your doctor before starting any exercise.\n* **What to Avoid:** Alcohol, tobacco, recreational drugs, raw/undercooked foods, high-mercury fish (shark, swordfish), and excessive caffeine.\n* **Warning Signs:** Severe abdominal pain, heavy bleeding, severe headache, vision changes, sudden swelling — seek immediate medical attention.`
  ],
  bone: [
    `### 🦴 Bone Health\n\nStrong bones are built throughout life, but it's never too late to improve them:\n\n* **Calcium:** Dairy products, fortified plant milks, leafy greens, almonds, and sardines. Adults need about 1,000 mg daily (1,200 mg for women over 50).\n* **Vitamin D:** Essential for calcium absorption. Sunlight, fatty fish, egg yolks, and fortified foods. Many people benefit from supplementation.\n* **Weight-Bearing Exercise:** Walking, jogging, dancing, and strength training stimulate bone formation.\n* **Osteoporosis Prevention:** Build strong bones early in life, maintain adequate calcium and vitamin D, exercise regularly, avoid smoking and excessive alcohol.\n\n*Bone density peaks around age 30, then gradually declines. It's never too early or too late to support your bone health.*`
  ],
  anemia: [
    `### 🩸 Understanding Anemia\n\nAnemia occurs when you don't have enough healthy red blood cells to carry oxygen:\n\n* **Common Symptoms:** Fatigue, weakness, pale skin, shortness of breath, dizziness, cold hands and feet, brittle nails.\n* **Iron Deficiency Anemia (most common):** Causes include blood loss, poor diet, or inability to absorb iron.\n  * **Iron-Rich Foods:** Red meat, spinach, lentils, beans, fortified cereals, pumpkin seeds.\n  * **Boost Absorption:** Pair iron-rich foods with vitamin C (citrus fruits, tomatoes, bell peppers).\n* **Vitamin B12 Deficiency:** Can cause anemia and nerve problems. Found in meat, fish, eggs, dairy. Vegans may need supplements.\n* **Folate Deficiency:** Leafy greens, legumes, and fortified grains are good sources.\n\n*See a doctor for proper diagnosis — different types of anemia require different treatments.*`
  ],
  dengue: [
    `### 🦟 Understanding Dengue Fever\n\nDengue is a mosquito-borne viral infection common in tropical regions:\n\n* **Symptoms:** High fever (104°F/40°C), severe headache, pain behind the eyes, joint and muscle pain, rash, mild bleeding (nose or gums).\n* **Warning Signs of Severe Dengue:** Severe abdominal pain, persistent vomiting, rapid breathing, bleeding gums, fatigue, restlessness.\n* **What to Do:**\n  * Rest and stay hydrated — drink plenty of fluids.\n  * Use acetaminophen (paracetamol) for fever — avoid ibuprofen and aspirin as they increase bleeding risk.\n  * Monitor for warning signs — if they appear, go to the hospital immediately.\n* **Prevention:** Use mosquito repellent, wear long sleeves/pants, use mosquito nets, eliminate standing water.`
  ],
  malaria: [
    `### 🦟 Understanding Malaria\n\nMalaria is a life-threatening disease transmitted by infected mosquitoes:\n\n* **Symptoms:** Fever, chills, sweats, headache, nausea, body aches — typically appearing 10–15 days after the mosquito bite.\n* **Treatment:** Antimalarial medications prescribed by a doctor. Early treatment is critical for recovery.\n* **Prevention When Traveling:**\n  * Take prophylactic antimalarial medication as prescribed.\n  * Use insect repellent (DEET or picaridin).\n  * Sleep under insecticide-treated mosquito nets.\n  * Wear long sleeves and pants, especially at dusk and night.\n\n*If you develop fever after traveling to a malaria-endemic area, seek medical attention immediately and mention your travel history.*`
  ],
  typhoid: [
    `### 🦠 Understanding Typhoid Fever\n\nTyphoid is a bacterial infection spread through contaminated food and water:\n\n* **Symptoms:** Prolonged fever (gradually increasing), headache, stomach pain, constipation or diarrhea, weakness.\n* **Treatment:** Antibiotics prescribed by a doctor. Hospitalization may be needed for severe cases.\n* **Prevention:**\n  * Typhoid vaccine (recommended for travelers to endemic areas).\n  * Drink only bottled or boiled water.\n  * Eat thoroughly cooked food.\n  * Wash hands frequently with soap.\n  * Avoid raw fruits and vegetables unless you can peel them yourself.`
  ],
  tuberculosis: [
    `### 🫁 Understanding Tuberculosis (TB)\n\nTB is a bacterial infection that primarily affects the lungs:\n\n* **Symptoms:** Persistent cough (lasting 3+ weeks), coughing up blood, chest pain, night sweats, fever, weight loss, fatigue.\n* **How It Spreads:** Through the air when an infected person coughs or sneezes.\n* **Treatment:** TB is curable with a course of antibiotics (usually 6 months). It's critical to complete the full course — stopping early can lead to drug-resistant TB.\n* **Prevention:** TB vaccine (BCG), good ventilation, covering your mouth when coughing, and early diagnosis.\n\n*If you have a persistent cough with fever and weight loss, see a doctor for TB testing.*`
  ],
  hepatitis: [
    `### 🫁 Understanding Hepatitis\n\nHepatitis means inflammation of the liver, commonly caused by viruses:\n\n* **Hepatitis A:** Spread through contaminated food/water. Symptoms: jaundice (yellow skin/eyes), fatigue, nausea. Preventable with vaccine.\n* **Hepatitis B:** Spread through blood and bodily fluids. Can become chronic. Preventable with vaccine.\n* **Hepatitis C:** Spread through blood contact (often via shared needles). Can become chronic and lead to liver damage. No vaccine, but curable with antiviral medication.\n* **Liver Health Tips:** Limit alcohol, maintain healthy weight, get vaccinated for Hepatitis A and B, avoid sharing needles or personal items like razors.`
  ],
  covid: [
    `### 🦠 COVID-19 Information\n\nCOVID-19 is a respiratory illness caused by the SARS-CoV-2 virus:\n\n* **Common Symptoms:** Fever, cough, shortness of breath, fatigue, loss of taste or smell, sore throat, body aches.\n* **Prevention:** Stay up to date with vaccines, wear masks in crowded indoor settings, practice good hand hygiene, improve ventilation.\n* **If You're Sick:** Isolate to avoid spreading, rest, stay hydrated, monitor your oxygen levels if you have a pulse oximeter. Seek medical help if you have trouble breathing.\n* **Long COVID:** Some people experience prolonged symptoms (fatigue, brain fog, breathing issues) for weeks or months after infection. If symptoms persist, see your doctor.`
  ],
  eye: [
    `### 👁️ Eye Health Tips\n\nProtect your vision with these habits:\n\n* **20-20-20 Rule:** Every 20 minutes, look at something 20 feet away for 20 seconds to reduce digital eye strain.\n* **UV Protection:** Wear sunglasses that block 99–100% of UV rays to prevent cataracts and macular degeneration.\n* **Regular Exams:** Get your eyes checked every 1–2 years, even if you don't wear glasses. Many eye diseases have no early symptoms.\n* **Nutrition for Eyes:** Vitamin A (carrots, sweet potatoes), lutein (spinach, kale), omega-3s (fish), and vitamin C (citrus) support eye health.\n* **Don't Rub Your Eyes:** This can introduce bacteria and cause damage to the cornea.`,
    `### 👁️ Common Eye Conditions\n\nUnderstanding common eye problems:\n\n* **Dry Eyes:** Burning, gritty sensation. Use artificial tears, take screen breaks, use a humidifier.\n* **Conjunctivitis (Pink Eye):** Redness, discharge, itching. Viral (usually resolves on its own) or bacterial (requires antibiotic drops). Highly contagious.\n* **Cataracts:** Clouding of the lens — causes blurry vision, glare, faded colors. Common with age. Treated with surgery.\n* **Glaucoma:** Increased pressure in the eye damages the optic nerve. Often symptomless until vision loss occurs. Regular eye exams are crucial.\n* **Computer Vision Syndrome:** Eye strain, headaches, dry eyes from prolonged screen use. Adjust lighting, use blue light filters, and take frequent breaks.`
  ],
  general: [
    `Thank you for your question. As your Health Awareness Assistant, here are some key wellness pillars:\n\n* **Hydration:** Drink 8–10 glasses of water daily.\n* **Nutrition:** Focus on whole foods, fiber, lean proteins, and healthy fats.\n* **Physical Activity:** Aim for 150 minutes of moderate exercise weekly.\n* **Sleep:** Prioritize 7–9 hours of quality sleep each night.\n* **Preventive Care:** Schedule regular check-ups and stay up to date with vaccinations.\n\n*If you're experiencing specific symptoms, please consult a licensed medical professional for personalized advice.*`,
    `Good question! Here's a general health perspective:\n\nYour body thrives on consistency, not perfection. Small daily habits — drinking enough water, eating vegetables at each meal, moving your body, getting fresh air, and sleeping well — compound over time into significant health benefits.\n\nIf you have a specific health topic in mind, feel free to ask about:\n* Nutrition and diet\n* Exercise and fitness\n* Sleep hygiene\n* Stress management\n* Specific diseases or conditions\n* First aid or prevention\n\n*How can I help you further?*`,
    `Great question. While I don't have a highly specific response for this topic, here are universal health principles:\n\n* **Listen to Your Body:** You know yourself best. If something feels off, don't ignore it.\n* **Prevention is Key:** Regular exercise, balanced nutrition, adequate sleep, and stress management prevent most chronic diseases.\n* **Don't Self-Diagnose:** Online information is educational, not diagnostic. See a doctor for proper evaluation.\n* **Build Sustainable Habits:** Extreme diets and workouts don't last. Focus on gradual, consistent changes.\n\n*Feel free to ask a more specific health question, and I'll do my best to provide helpful information!*`
  ],
  greeting: [
    `Hello! I am your **Health Awareness Assistant**. \n\nI can provide educational information on a wide range of health topics including:\n* **Nutrition & Diet** 🥗\n* **Exercise & Fitness** 🏃‍♂️\n* **Sleep Hygiene** 😴\n* **Hydration** 💧\n* **Stress Management & Mental Health** 🧘‍♀️\n* **First Aid** 🩹\n* **Specific Diseases** — diabetes, heart disease, thyroid, arthritis, and many more\n* **Prevention & Screenings** 🩺\n* **Skin, Dental, Eye & Bone Health**\n\nGo ahead, ask me anything health-related!`,
    `Hi there! 👋 I'm your **Health Awareness Assistant** — here to provide educational health information.\n\nYou can ask me about:\n* "What are the symptoms of diabetes?"\n* "How can I improve my sleep?"\n* "Tips for managing stress"\n* "Heart-healthy foods"\n* "First aid for burns"\n* "How to boost my immunity"\n\n*What health topic would you like to explore today?*`,
    `Welcome! I'm your **AI Health Awareness Assistant**. I'm here to share educational information about health, wellness, and disease prevention.\n\nAsk me anything about:\n✅ Nutrition and healthy eating\n✅ Exercise and fitness\n✅ Sleep and rest\n✅ Stress and mental wellness\n✅ Common diseases and conditions\n✅ First aid and emergencies\n✅ Preventive healthcare\n✅ Women's health, bone health, skin care, and more\n\n*Remember: I'm an educational tool, not a substitute for professional medical advice. Let me know how I can help!*`
  ]
};

const RESPONSES_HI = {
  eat: `### 🥗 स्वस्थ भोजन और पोषण\n\nसंतुलित आहार आपके शरीर को सही ढंग से काम करने के लिए आवश्यक पोषक तत्व प्रदान करता है:\n\n* **साबुत अनाज खाएं:** ओट्स, ब्राउन राइस, दालें और रोटी को प्राथमिकता दें।\n* **सब्जियाँ और फल:** अपनी थाली का आधा हिस्सा रंगीन सब्जियों और फलों से भरें।\n* **चीनी और नमक कम करें:** मीठे पेय, प्रसंस्कृत खाद्य पदार्थ और जंक फूड से बचें।\n* **पानी पिएं:** दिन में 8-10 गिलास पानी पिएं।\n\n*याद रखें: व्यक्तिगत पोषण संबंधी जरूरतें उम्र, लिंग और स्वास्थ्य स्थिति के अनुसार भिन्न होती हैं। व्यक्तिगत सलाह के लिए डाइटीशियन से परामर्श करें।*`,
  exercise: `### 🏃‍♂️ शारीरिक गतिविधि और फिटनेस\n\nनियमित व्यायाम आपके स्वास्थ्य के लिए अत्यंत महत्वपूर्ण है:\n\n* **साप्ताहिक लक्ष्य:** प्रति सप्ताह कम से कम 150 मिनट मध्यम तीव्रता का व्यायाम करें।\n* **शक्ति प्रशिक्षण:** सप्ताह में 2 दिन मांसपेशियों को मजबूत करने वाले व्यायाम करें।\n* **बैठने का समय कम करें:** हर घंटे 5 मिनट के लिए उठकर चलें।\n* **छोटी शुरुआत करें:** रोज 10-15 मिनट पैदल चलने से शुरू करें।\n\n*नोट: किसी भी नए व्यायाम कार्यक्रम से पहले अपने चिकित्सक से परामर्श करें।*`,
  sleep: `### 😴 नींद में सुधार के उपाय\n\nअच्छी नींद शारीरिक और मानसिक स्वास्थ्य दोनों के लिए आवश्यक है:\n\n1. **नियमित समय:** हर दिन एक ही समय पर सोएं और उठें।\n2. **वातावरण:** कमरे को अंधेरा, शांत और ठंडा रखें।\n3. **स्क्रीन बंद करें:** सोने से 30-60 मिनट पहले मोबाइल और टीवी बंद करें।\n4. **कैफीन से बचें:** शाम को चाय, कॉफी और शराब से बचें।\n\n*अगर लगातार नींद न आने की समस्या हो तो डॉक्टर से मिलें।*`,
  hydration: `### 💧 जलयोजन (हाइड्रेशन)\n\nपानी आपके शरीर के हर कार्य के लिए आवश्यक है:\n\n* **रोज 8-10 गिलास पानी पिएं।**\n* **व्यायाम से पहले और बाद में अतिरिक्त पानी पिएं।**\n* **फलों और सब्जियों से भी पानी मिलता है** — तरबूज, खीरा, संतरा।\n* **डिहाइड्रेशन के लक्षण:** सिरदर्द, थकान, गहरे रंग का पेशाब।\n\n*पेशाब का हल्का पीला रंग अच्छे हाइड्रेशन का संकेत है।*`,
  stress: `### 🧘‍♀️ तनाव प्रबंधन और मानसिक स्वास्थ्य\n\nमानसिक स्वास्थ्य शारीरिक स्वास्थ्य जितना ही महत्वपूर्ण है:\n\n* **गहरी सांस लें:** 4-7-8 तकनीक — 4 सेकंड सांस लें, 7 सेकंड रोकें, 8 सेकंड छोड़ें।\n* **व्यायाम करें:** शारीरिक गतिविधि तनाव हार्मोन को कम करती है।\n* **पर्याप्त नींद लें:** 7-9 घंटे की नींद तनाव कम करने में मदद करती है।\n* **बात करें:** अपनी भावनाओं को परिवार या दोस्तों से साझा करें।\n\n*गंभीर तनाव या चिंता होने पर मानसिक स्वास्थ्य विशेषज्ञ से मिलें।*`,
  general: `आपके प्रश्न के लिए धन्यवाद। स्वस्थ जीवन के मूल सिद्धांत:\n\n* **जलयोजन:** रोज 8-10 गिलास पानी पिएं।\n* **पोषण:** साबुत अनाज, फल, सब्जियाँ और प्रोटीन खाएं।\n* **व्यायाम:** सप्ताह में 150 मिनट मध्यम व्यायाम करें।\n* **नींद:** 7-9 घंटे की अच्छी नींद लें।\n* **जांच:** नियमित स्वास्थ्य जांच कराएं।\n\n*विशिष्ट लक्षणों के लिए कृपया चिकित्सक से परामर्श करें।*`
};

const healthTips = [
  "**Health Tip:** Try to walk for 10-15 minutes after your meals. It improves digestion, helps stabilize blood sugar, and adds steps to your day.",
  "**Health Tip:** Swap one sugary drink today with a glass of water. Small cutbacks in added sugars have massive long-term benefits.",
  "**Health Tip:** Practice the 20-20-20 rule for eye health if you work on a screen. Every 20 minutes, look 20 feet away for 20 seconds.",
  "**Health Tip:** Add an extra serving of vegetables to your lunch or dinner today. Vegetables are packed with vital fiber, vitamins, and minerals.",
  "**Health Tip:** Take 5 deep breaths right now. Inhale slowly through your nose, hold briefly, and let it go. This calms the nervous system.",
  "**Health Tip:** Establish a 'screen-free hour' before bed tonight. Read a book, journal, or stretch instead of scrolling.",
  "**Health Tip:** Eat a rainbow of fruits and vegetables — different colors provide different nutrients your body needs.",
  "**Health Tip:** Drink a glass of water first thing in the morning to rehydrate after a night's sleep.",
  "**Health Tip:** Standing for 5 minutes every hour reduces the health risks of prolonged sitting.",
  "**Health Tip:** Flossing daily is just as important as brushing — it reaches 40% of tooth surfaces that brushing misses."
];

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
    'disease', 'diabetes', 'hypertension', 'pressure', 'heart', 'cancer', 'obesity', 'cholesterol', 'stroke',
    'headache', 'migraine', 'fever', 'temperature', 'stomach', 'nausea', 'vomit', 'belly', 'indigestion',
    'cough', 'cold', 'flu', 'sore throat', 'congestion', 'runny nose', 'breathe', 'breathing',
    'pain', 'ache', 'sick', 'ill', 'doctor', 'medical', 'hospital', 'medicine', 'drug', 'symptom',
    'body', 'lung', 'muscle', 'bone', 'skin', 'blood', 'therap', 'treatment', 'dose', 'therapy',
    'dentist', 'nutritionist', 'cardiologist',
    'asthma', 'allergy', 'arthritis', 'thyroid', 'kidney', 'uti', 'infection', 'back pain',
    'acne', 'eczema', 'dental', 'tooth', 'gum', 'digestion', 'constipation', 'diarrhea', 'acid reflux', 'gerd',
    'immunity', 'immune', 'weight', 'obese', 'pregnancy', 'pregnant', 'bone', 'osteoporosis',
    'anemia', 'dengue', 'malaria', 'typhoid', 'tuberculosis', 'tb', 'hepatitis', 'covid',
    'eye', 'vision', 'glasses', 'corona', 'virus', 'bacteria', 'infection',
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
    'shortness of breath', "can't breathe", 'cannot breathe', 'can not breathe',
    'stroke', 'unconscious', 'heavy bleeding', 'severe bleeding', 'suicidal',
    'kill myself', 'poisoned', 'poisoning', 'seizure', 'passed out'
  ];
  const msgLower = message.toLowerCase();
  return emergencyKeywords.some(keyword => msgLower.includes(keyword));
}

function detectSpecificCondition(message) {
  const m = message.toLowerCase();

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

  if (containsWordRoot(m, ['headache', 'migraine'])) return 'headache';
  if (containsWordRoot(m, ['fever', 'temperature', 'hot', 'बुखार'])) return 'fever';
  if (containsWordRoot(m, ['stomach', 'nausea', 'vomit', 'belly', 'diarrhea', 'constipation'])) return 'stomach';
  if (containsWordRoot(m, ['cough', 'cold', 'flu', 'sore throat', 'congestion', 'runny nose'])) return 'cough';

  if (containsWordRoot(m, ['eat', 'diet', 'food', 'nutrition', 'meal'])) return 'nutrition';
  if (containsWordRoot(m, ['exercise', 'fitness', 'workout', 'sport', 'walk', 'run'])) return 'exercise';
  if (containsWordRoot(m, ['sleep', 'insomnia', 'tired', 'bedtime', 'rest'])) return 'sleep';
  if (containsWordRoot(m, ['hydrate', 'hydration', 'water', 'drink'])) return 'hydration';
  if (containsWordRoot(m, ['stress', 'anxiety', 'mental', 'wellness', 'calm', 'relax', 'meditate'])) return 'stress';
  if (containsWordRoot(m, ['first aid', 'burn', 'cut', 'wound', 'bleed', 'choking'])) return 'firstaid';
  if (containsWordRoot(m, ['hygiene', 'wash', 'teeth', 'brush', 'clean'])) return 'hygiene';
  if (containsWordRoot(m, ['preventive', 'vaccine', 'checkup', 'screening', 'test'])) return 'preventive';
  if (containsWordRoot(m, ['disease', 'lifestyle'])) return 'disease';

  if (containsWordRoot(m, ['tip', 'daily'])) return 'tip';
  if (containsWordRoot(m, ['hello', 'hi', 'hey', 'help', 'who are you', 'what can you do', 'welcome'])) return 'greeting';

  return 'general';
}

function getLocalResponse(message) {
  const topic = detectSpecificCondition(message);

  if (topic === 'emergency') return RESPONSES.emergency[0];
  if (topic === 'greeting') return pickRandom(RESPONSES.greeting, 'greeting');
  if (topic === 'tip') {
    return `Here is a daily tip for you:\n\n${healthTips[Math.floor(Math.random() * healthTips.length)]}`;
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
    return RESPONSES.emergency[0] + disclaimerText;
  }

  if (lang === 'hi') {
    return getHindiFallback(userMessage) + disclaimerText;
  }

  return getLocalResponse(userMessage) + disclaimerText;
}
