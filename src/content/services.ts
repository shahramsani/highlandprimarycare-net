/**
 * Detailed content for each service. The dynamic [service].astro
 * template renders these.
 * Medical Weight Loss and TRT have their own bespoke pages.
 */

export type ServicePageContent = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  hero: string;
  lede: string;
  intro: string[];
  capabilities: Array<{ icon: string; title: string; body: string }>;
  approach?: { title: string; lede: string; steps: Array<{ icon?: string; title: string; body: string }> };
  evidence?: { lede: string; links: Array<{ label: string; url: string }> };
  faqs: Array<{ q: string; a: string }>;
};

export const SERVICE_CONTENT: Record<string, ServicePageContent> = {
  'preventive-services': {
    slug: 'preventive-services',
    title: 'Preventive Services',
    metaTitle: 'Preventive Services Sherman TX | Highland Primary Care',
    metaDescription:
      'Annual wellness exams, screenings, immunizations, and lifestyle coaching at Highland Primary Care in Sherman, TX. Now accepting new patients.',
    eyebrow: 'Prevention First',
    hero: "Don't wait until something goes wrong.",
    lede: 'Protect your health before symptoms appear with comprehensive preventive care.',
    intro: [
      'Many serious conditions develop silently with zero symptoms. An annual wellness exam is the most important appointment you\u2019ll make this year — and often the most-skipped.',
      'Our preventive care includes a complete physical exam, detailed health history review, personalized risk assessment, and an actionable health plan tailored to your age, gender, and goals.',
    ],
    capabilities: [
      { icon: 'heart-pulse', title: 'Blood Pressure Monitoring', body: 'Nearly half of U.S. adults have high blood pressure. We screen at every visit and create personalized management plans.' },
      { icon: 'activity', title: 'Cholesterol & Lipid Panels', body: 'Routine lipid screening identifies cardiovascular risk years before symptoms appear.' },
      { icon: 'flask', title: 'Diabetes Screening', body: 'HbA1c and fasting glucose testing to catch prediabetes and diabetes early, when intervention is most effective.' },
      { icon: 'shield-check', title: 'Cancer Screenings', body: 'Age-appropriate screening for colon, breast, cervical, prostate, and lung cancers per USPSTF guidelines.' },
      { icon: 'syringe', title: 'Immunizations', body: 'Flu, Tdap, shingles, pneumonia, COVID-19, and travel vaccines per CDC ACIP recommendations.' },
      { icon: 'list-checks', title: 'Lifestyle Risk Assessment', body: 'Personalized review of diet, activity, stress, sleep, and substance use with concrete next steps.' },
    ],
    evidence: {
      lede: 'Our preventive care follows the latest evidence-based guidelines.',
      links: [
        { label: 'U.S. Preventive Services Task Force (USPSTF)', url: 'https://www.uspreventiveservicestaskforce.org/' },
        { label: 'CDC Adult Immunization Schedule', url: 'https://www.cdc.gov/vaccines/schedules/hcp/imz/adult.html' },
        { label: 'American Cancer Society Screening Guidelines', url: 'https://www.cancer.org/cancer/screening.html' },
      ],
    },
    faqs: [
      {
        q: 'How often should I have a wellness exam?',
        a: 'For most adults, an annual physical is recommended. Patients with chronic conditions or higher risk factors may need more frequent visits. Medicare beneficiaries are entitled to one Annual Wellness Visit per year at no cost.',
      },
      {
        q: 'What screenings do I need at my age?',
        a: 'Screenings vary by age, sex, family history, and risk factors. We\u2019ll review the USPSTF and ACS recommendations specific to you during your visit and create a personalized screening plan.',
      },
      {
        q: 'Are preventive services covered by insurance?',
        a: 'Most insurance plans, including Medicare, cover preventive services in full as required by the Affordable Care Act. We verify coverage before your visit so there are no surprises.',
      },
    ],
  },

  'management-of-chronic-conditions': {
    slug: 'management-of-chronic-conditions',
    title: 'Chronic Disease Management',
    metaTitle: 'Chronic Disease Management Sherman TX | Highland Primary Care',
    metaDescription:
      'Expert management of diabetes, hypertension, cholesterol, thyroid, and heart disease at Highland Primary Care in Sherman, TX.',
    eyebrow: 'Long-Term Care',
    hero: 'Living well with chronic conditions.',
    lede: 'Personalized, ongoing care for diabetes, hypertension, heart disease, and more.',
    intro: [
      'Chronic conditions are best managed with a steady, long-term partnership between you and a provider who knows your full medical picture. We focus on what actually moves the needle: medication optimization, lifestyle change, and proactive monitoring — not reactive crisis care.',
    ],
    capabilities: [
      { icon: 'activity', title: 'Diabetes (Type 1 & 2)', body: 'HbA1c monitoring, medication management including GLP-1s and insulin, glucose-monitor support, and complication screening.' },
      { icon: 'heart-pulse', title: 'Hypertension', body: 'Home BP monitor calibration, medication titration, lifestyle counseling, and target organ assessment.' },
      { icon: 'trending-down', title: 'High Cholesterol', body: 'Lipid panel monitoring, statin and non-statin therapy, ASCVD risk calculation, and lifestyle optimization.' },
      { icon: 'pill', title: 'Thyroid Disorders', body: 'Hypothyroidism, hyperthyroidism, Hashimoto\u2019s, and thyroid nodule monitoring with appropriate referrals.' },
      { icon: 'shield-check', title: 'Heart Disease', body: 'Stable CAD, CHF, atrial fibrillation maintenance, anticoagulation management, and coordination with cardiology.' },
      { icon: 'list-checks', title: 'Other Conditions', body: 'COPD/asthma, CKD stages 1–3, osteoporosis, gout, and more — all managed under one roof.' },
    ],
    faqs: [
      {
        q: 'How often will I need follow-up visits?',
        a: 'Most chronic conditions are managed with visits every 3 months, though we adjust based on disease activity, medication changes, and your individual needs.',
      },
      {
        q: 'Will I need to see specialists?',
        a: 'Many chronic conditions can be fully managed in primary care. When specialist involvement is needed, we coordinate referrals to trusted providers across the Texoma region and share records seamlessly.',
      },
      {
        q: 'Can you manage multiple conditions together?',
        a: 'Yes — that\u2019s actually one of the biggest reasons to have a primary care home. Polypharmacy and competing conditions need a single quarterback who sees the whole picture. We do that.',
      },
    ],
  },

  'acute-care-for-short-term-illnesses': {
    slug: 'acute-care-for-short-term-illnesses',
    title: 'Acute Care for Short-Term Illnesses',
    metaTitle: 'Acute Care Sherman TX | Short-term Illness Treatment',
    metaDescription:
      'Same-day acute care in Sherman TX for colds, flu, infections, and minor injuries at Highland Primary Care.',
    eyebrow: 'Same-Day Care',
    hero: 'Sick today? We can see you today.',
    lede: 'Prompt evaluation and treatment for sudden illness, infections, and minor injuries.',
    intro: [
      'For most acute issues, primary care is faster, cheaper, and better than urgent care or the ER. We know your history, we have your records, and same-day appointments are usually available — just call first thing in the morning.',
    ],
    capabilities: [
      { icon: 'bandage', title: 'Upper Respiratory Infections', body: 'Colds, sinusitis, sore throat, bronchitis, COVID, flu, and strep — with rapid testing on-site.' },
      { icon: 'pill', title: 'Urinary Tract Infections', body: 'Symptom evaluation, urinalysis, and same-day antibiotics when indicated.' },
      { icon: 'shield-check', title: 'Skin Infections', body: 'Cellulitis, abscesses, fungal infections, and shingles with appropriate antibiotic or antiviral therapy.' },
      { icon: 'activity', title: 'Minor Injuries', body: 'Sprains, strains, simple lacerations, joint pain, and back pain evaluation.' },
      { icon: 'heart-pulse', title: 'GI Concerns', body: 'Gastroenteritis, dehydration, reflux flares, and other short-term GI issues.' },
      { icon: 'brain', title: 'Other Acute Concerns', body: 'Headaches, ear infections, allergic reactions, rashes, and more.' },
    ],
    faqs: [
      {
        q: 'When should I go to the ER instead?',
        a: 'Call 911 or go to the ER for: chest pain, severe shortness of breath, stroke symptoms (face droop, arm weakness, speech difficulty), severe abdominal pain, major trauma, severe bleeding, or any life-threatening symptom. Our office is for non-emergent acute concerns.',
      },
      {
        q: 'Do you offer same-day appointments?',
        a: 'Yes. Call our office first thing in the morning (8:00 AM) for the best chance of getting a same-day slot. We hold time each day for acute issues.',
      },
      {
        q: 'What if I\u2019m a new patient?',
        a: 'We do accept new patients for acute visits when slots are available, but priority goes to established patients. Becoming a regular patient ensures same-day access when you need it.',
      },
    ],
  },

  'mental-health-services': {
    slug: 'mental-health-services',
    title: 'Mental Health Services',
    metaTitle: 'Mental Health Services Sherman TX | Highland Primary Care',
    metaDescription:
      'Compassionate mental health care in Sherman TX. Treatment for depression, anxiety, and stress at Highland Primary Care.',
    eyebrow: 'You Are Not Alone',
    hero: 'Compassionate, evidence-based mental health care.',
    lede: 'Treatment for depression, anxiety, stress, and other mental health concerns — integrated with your primary care.',
    intro: [
      'Mental health is health. Primary care is one of the most effective places to address common mental health concerns, with the convenience of a provider who already knows your full medical picture.',
    ],
    capabilities: [
      { icon: 'brain', title: 'Depression', body: 'Evidence-based treatment including medication management and referral to psychotherapy for persistent sadness, hopelessness, and loss of interest.' },
      { icon: 'heart-pulse', title: 'Anxiety Disorders', body: 'Diagnosis and treatment for GAD, panic disorder, social anxiety, and phobias using medication and behavioral strategies.' },
      { icon: 'activity', title: 'Stress Management', body: 'Personalized strategies to identify stressors, develop coping skills, and build resilience.' },
      { icon: 'users', title: 'Other Concerns', body: 'Screening and treatment for mood disorders, adjustment disorders, and behavioral health issues.' },
    ],
    evidence: {
      lede: 'Our approach follows clinical guidelines from leading authorities.',
      links: [
        { label: 'National Institute of Mental Health (NIMH)', url: 'https://www.nimh.nih.gov/' },
        { label: 'SAMHSA — Substance Abuse and Mental Health Services Administration', url: 'https://www.samhsa.gov/' },
      ],
    },
    faqs: [
      {
        q: 'Do you prescribe psychiatric medication?',
        a: 'Yes. We routinely manage SSRIs, SNRIs, and other first-line medications for depression, anxiety, and related conditions. Complex cases — bipolar, schizophrenia, treatment-resistant depression — are co-managed with psychiatry.',
      },
      {
        q: 'Do you provide therapy/counseling?',
        a: 'We don\u2019t provide formal psychotherapy on-site, but we maintain referral relationships with trusted therapists and counselors throughout the Texoma area. We coordinate care and share notes with your therapist.',
      },
      {
        q: 'What if I\u2019m in crisis right now?',
        a: 'If you\u2019re in immediate crisis or having thoughts of self-harm, call or text 988 (Suicide and Crisis Lifeline) or go to your nearest emergency room. Our office is not equipped for psychiatric emergencies.',
      },
    ],
  },

  'elderly-care': {
    slug: 'elderly-care',
    title: 'Elderly Care',
    metaTitle: 'Elderly Care Sherman TX | Senior Healthcare Services',
    metaDescription:
      'Compassionate elderly care in Sherman TX. Medicare wellness visits, fall prevention, polypharmacy review, and geriatric assessment.',
    eyebrow: 'Senior Care',
    hero: 'Care that helps older adults stay independent.',
    lede: 'Comprehensive geriatric care focused on health, function, and quality of life.',
    intro: [
      'Aging well requires more than treating individual conditions — it requires looking at the whole person: physical health, cognitive function, social context, medication burden, and goals of care.',
    ],
    capabilities: [
      { icon: 'list-checks', title: 'Comprehensive Geriatric Assessment', body: 'Multi-domain evaluation of physical, cognitive, functional, and psychosocial health.' },
      { icon: 'pill', title: 'Polypharmacy Review', body: 'Systematic review of all medications to reduce risk of adverse drug events and simplify regimens.' },
      { icon: 'shield-check', title: 'Fall Prevention', body: 'Fall risk assessment, home safety guidance, balance evaluation, and PT referrals when needed.' },
      { icon: 'brain', title: 'Cognitive Screening', body: 'Screening for early cognitive impairment and dementia, with coordinated specialist referrals.' },
      { icon: 'heart-pulse', title: 'Medicare Annual Wellness Visit', body: 'Personalized prevention plan covered fully by Medicare. Required components plus your health priorities.' },
      { icon: 'users', title: 'Advance Care Planning', body: 'Conversations about goals of care, advance directives, and healthcare proxies — at your pace.' },
    ],
    faqs: [
      {
        q: 'Do you accept Medicare?',
        a: 'Yes. We accept original Medicare (Parts A & B) and most Medicare Advantage plans. Annual Wellness Visits are covered at 100%.',
      },
      {
        q: 'How is this different from a regular physical?',
        a: 'A geriatric assessment is broader and longer. It looks at function, cognition, medication burden, fall risk, mood, and goals — areas often missed in a standard physical.',
      },
      {
        q: 'Do you do home visits?',
        a: 'We do not currently offer home visits. We work to make in-office visits as accessible as possible, with parking close to the entrance and elevator access.',
      },
    ],
  },

  'mens-health-services': {
    slug: 'mens-health-services',
    title: "Men's Health Services",
    metaTitle: "Men's Health Sherman TX | Highland Primary Care Services",
    metaDescription:
      'Men\u2019s health services in Sherman TX. Testosterone therapy, prostate health, cardiovascular risk, and preventive care for men.',
    eyebrow: "Men's Health",
    hero: 'Comprehensive care built for men.',
    lede: 'Prostate health, hormone optimization, cardiovascular risk, and sexual health — all in one place.',
    intro: [
      "Men's health concerns are often under-discussed and undertreated. We make it easy to address them in a direct, judgment-free environment.",
    ],
    capabilities: [
      { icon: 'shield-check', title: 'Prostate Health', body: 'PSA screening, digital rectal exam, BPH management, and prostate cancer screening per AUA guidelines.' },
      { icon: 'zap', title: 'Testosterone Management', body: 'Total and free T testing, symptom evaluation, and physician-supervised TRT for clinically low testosterone.' },
      { icon: 'heart-pulse', title: 'Cardiovascular Risk', body: 'Lipid panels, blood pressure monitoring, ASCVD risk calculation, and primary prevention strategies.' },
      { icon: 'microscope', title: 'Colon Cancer Screening', body: 'Coordination of Cologuard, FIT testing, and colonoscopy referrals starting at age 45.' },
      { icon: 'user', title: 'Sexual Health', body: 'Evaluation and treatment for erectile dysfunction, low libido, premature ejaculation, and STI screening.' },
      { icon: 'activity', title: 'Annual Physical', body: 'Comprehensive yearly exam tailored to men\u2019s health priorities, including all age-appropriate screenings.' },
    ],
    faqs: [
      {
        q: 'When should I start prostate cancer screening?',
        a: 'Per AUA guidelines, most men should start the conversation about PSA screening at age 50. Earlier (45) for African American men or those with a family history of prostate cancer. We\u2019ll discuss benefits and limitations during your visit.',
      },
      {
        q: 'How do I know if I have low testosterone?',
        a: 'Symptoms include persistent fatigue, low libido, erectile difficulty, mood changes, decreased muscle mass, and difficulty concentrating. Diagnosis requires both symptoms and confirmed low blood levels of testosterone — we test and evaluate.',
      },
      {
        q: 'Do you offer ED treatment?',
        a: 'Yes. We evaluate underlying causes (cardiovascular, hormonal, psychological), prescribe PDE5 inhibitors when appropriate, and refer to urology for cases requiring specialist intervention.',
      },
    ],
  },

  'nutrition-counseling': {
    slug: 'nutrition-counseling',
    title: 'Nutrition Counseling',
    metaTitle: 'Nutrition Counseling Sherman TX | Highland Primary Care',
    metaDescription:
      'Personalized nutrition counseling at Highland Primary Care in Sherman TX. Medical nutrition therapy for diabetes, weight, and chronic conditions.',
    eyebrow: 'Eat Well, Live Well',
    hero: 'Food is medicine. Use it well.',
    lede: 'Personalized dietary guidance to support your health goals, manage conditions, and optimize quality of life.',
    intro: [
      'Generic advice (\u201ceat less, exercise more\u201d) doesn\u2019t work because every person\u2019s biology, goals, and constraints are different. Our nutrition counseling is built around your actual life.',
    ],
    capabilities: [
      { icon: 'apple', title: 'General Nutrition Education', body: 'Portion control, balanced macronutrients, meal planning, and label reading fundamentals.' },
      { icon: 'scale', title: 'Weight Management', body: 'Evidence-based strategies for weight loss, maintenance, or gain — tailored to your goals.' },
      { icon: 'activity', title: 'Medical Nutrition Therapy', body: 'Specialized counseling for diabetes, hypertension, dyslipidemia, GI disorders, and CKD.' },
      { icon: 'zap', title: 'Sports Nutrition', body: 'Performance, fueling, and recovery guidance for athletes and active patients.' },
      { icon: 'heart-pulse', title: 'Plant-Based Nutrition', body: 'Guidance on vegetarian and vegan diets to ensure adequate nutrient intake.' },
      { icon: 'pill', title: 'Supplements', body: 'Expert review of supplements to address deficiencies, with attention to drug-nutrient interactions.' },
    ],
    evidence: {
      lede: 'Our approach follows guidelines from the leading nutrition authorities.',
      links: [
        { label: 'Academy of Nutrition and Dietetics', url: 'https://www.eatright.org/' },
        { label: 'NIDDK — Diet, Nutrition, and Weight', url: 'https://www.niddk.nih.gov/health-information/diet-nutrition' },
      ],
    },
    faqs: [
      {
        q: 'Is nutrition counseling covered by insurance?',
        a: 'Many insurance plans cover nutrition counseling, especially for diagnoses like diabetes and kidney disease. Coverage varies — we\u2019ll verify before your visit.',
      },
      {
        q: 'Do you offer formal Medical Nutrition Therapy?',
        a: 'For complex MNT (e.g., CKD, gestational diabetes), we refer to registered dietitians in our network while continuing to manage the medical side in our office.',
      },
    ],
  },

  'referrals-to-specialists': {
    slug: 'referrals-to-specialists',
    title: 'Referrals to Specialists',
    metaTitle: 'Specialist Referrals Sherman TX | Highland Primary Care',
    metaDescription:
      'Coordinated specialist referrals at Highland Primary Care in Sherman, TX. We coordinate every step — records, scheduling, and follow-up.',
    eyebrow: 'Coordinated Care',
    hero: 'When you need a specialist, we have you covered.',
    lede: 'We coordinate with a trusted network of specialists across the Texoma region — and handle the paperwork.',
    intro: [
      'A great primary care relationship doesn\u2019t end when you need a specialist. We coordinate the referral, send your records, follow up after the visit, and make sure the specialist\u2019s recommendations get integrated into your overall care plan.',
    ],
    capabilities: [
      { icon: 'heart-pulse', title: 'Cardiology', body: 'Stress tests, echocardiograms, arrhythmia evaluation, and advanced cardiac care.' },
      { icon: 'pill', title: 'Endocrinology', body: 'Complex diabetes, thyroid disease, adrenal disorders, and hormone abnormalities.' },
      { icon: 'brain', title: 'Neurology', body: 'Migraine, seizure disorders, neuropathy, and movement disorders.' },
      { icon: 'activity', title: 'Orthopedics', body: 'Joint replacement, sports medicine, fracture care, and musculoskeletal rehabilitation.' },
      { icon: 'shield-check', title: 'Pulmonology', body: 'COPD, asthma, sleep apnea, and pulmonary fibrosis.' },
      { icon: 'microscope', title: 'Gastroenterology', body: 'Colonoscopy, liver disease, IBS, GERD, and other GI conditions.' },
    ],
    evidence: {
      lede: 'Coordinated referrals improve outcomes and reduce unnecessary testing.',
      links: [
        { label: 'AAFP — Referral Policy', url: 'https://www.aafp.org/about/policies/all/referral.html' },
        { label: 'CMS Care Coordination Measures', url: 'https://www.cms.gov/Medicare/Quality-Initiatives-Patient-Assessment-Instruments/Quality-Measures' },
      ],
    },
    faqs: [
      {
        q: 'How do I get a referral?',
        a: 'Referrals are issued during your office visit when specialist care is clinically appropriate. We send your records, lab results, and imaging directly to the specialist before your appointment.',
      },
      {
        q: 'Will insurance cover the specialist?',
        a: 'We help navigate insurance pre-authorization when required. Coverage depends on your specific plan — we work with most major insurers.',
      },
      {
        q: 'What happens after the specialist visit?',
        a: 'The specialist sends notes back to us. We review them, integrate any treatment changes into your overall care plan, and discuss the next steps at your follow-up.',
      },
    ],
  },

  'semaglutide-pricing-sherman-tx': {
    slug: 'semaglutide-pricing-sherman-tx',
    title: 'Semaglutide Pricing in Sherman, TX',
    metaTitle: 'Semaglutide Pricing Sherman TX | Highland Primary Care',
    metaDescription:
      'Transparent semaglutide and tirzepatide pricing at Highland Primary Care in Sherman, TX. Starting at $99/month with physician supervision.',
    eyebrow: 'Transparent Pricing',
    hero: 'Semaglutide & tirzepatide pricing — no surprises.',
    lede: 'Physician-supervised GLP-1 program with weekly in-clinic visits, starting at $99/month.',
    intro: [
      'Our medical weight loss program is offered as a transparent cash-pay program. Office visits and related labs may be billable to insurance. Pricing below covers your weekly medication.',
    ],
    capabilities: [
      { icon: 'syringe', title: 'Semaglutide Starter', body: '0.25–0.5 mg/week. Starting tier for new patients. $99/month medication cost.' },
      { icon: 'zap', title: 'Semaglutide Therapeutic', body: '1.0–2.4 mg/week. Maximum semaglutide efficacy. $149/month medication cost.' },
      { icon: 'syringe', title: 'Tirzepatide Starter', body: '2.5–5 mg/week. Dual-agonist (GLP-1 + GIP). $199/month medication cost.' },
      { icon: 'zap', title: 'Tirzepatide Therapeutic', body: '7.5–15 mg/week. Maximum tirzepatide efficacy. $299/month medication cost.' },
    ],
    faqs: [
      {
        q: 'What\u2019s included in the monthly price?',
        a: 'Four weekly nurse-administered injections of your prescribed dose, sourced from a licensed Texas 503A compounding pharmacy. Office visits with the physician and related labs are billed to insurance separately.',
      },
      {
        q: 'Why not branded Ozempic, Wegovy, or Zepbound?',
        a: 'Branded GLP-1s often run $1,000+/month without insurance and are frequently on shortage. Our 503A compounded program delivers the same active ingredient at a fraction of the cost, sourced from FDA-registered pharmacies under Texas Medical Board oversight.',
      },
      {
        q: 'Can I switch tiers?',
        a: 'Yes. Most patients start at a lower dose and titrate up based on response and tolerability. We adjust your tier as needed during monthly provider visits.',
      },
    ],
  },
};
