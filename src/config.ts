/**
 * Single source of truth for Highland Primary Care.
 * Change values here once; they propagate everywhere.
 */

export const SITE = {
  name: 'Highland Primary Care',
  shortName: 'Highland',
  tagline: 'Your trusted primary care clinic in Sherman, TX',
  description:
    'Highland Primary Care in Sherman, TX offers preventive care, medical weight loss, TRT, and chronic disease management. Now accepting new patients.',
  url: 'https://web.highlandprimarycare.com',
  locale: 'en-US',
  ogImage: '/og-default.jpg',
} as const;

export const CONTACT = {
  phone: '(903) 871-5671',
  phoneRaw: '9038715671',
  email: 'info@highlandprimarycare.net',
  address: {
    street: '300 N Highland Ave Suite 455',
    city: 'Sherman',
    state: 'TX',
    zip: '75092',
    full: '300 N Highland Ave Suite 455, Sherman, TX 75092',
  },
  geo: {
    lat: 33.6431,
    lng: -96.6111,
  },
  hours: [
    { day: 'Monday', open: '8:00 AM', close: '5:00 PM' },
    { day: 'Tuesday', open: '8:00 AM', close: '5:00 PM' },
    { day: 'Wednesday', open: '8:00 AM', close: '5:00 PM' },
    { day: 'Thursday', open: '8:00 AM', close: '5:00 PM' },
    { day: 'Friday', open: '8:00 AM', close: '5:00 PM' },
    { day: 'Saturday', open: null, close: null },
    { day: 'Sunday', open: null, close: null },
  ],
  socials: {
    facebook: 'https://www.facebook.com/highlandprimarycare',
    instagram: 'https://www.instagram.com/highlandprimarycare',
    youtube: 'https://www.youtube.com/highlandprimarycare',
  },
} as const;

export const BOOKING = {
  // GHL widget URLs — used for the embedded form on contact/booking sections
  general: 'https://app.highlandprimarycare.cc/widget/form/edEHoM77zSLn1shx3Ae9',
  weightLoss: 'https://app.highlandprimarycare.cc/widget/booking/4pz0StK2hEMnuE5Ngp9Z',
  trt: 'https://app.highlandprimarycare.cc/widget/form/edEHoM77zSLn1shx3Ae9',
  // Healow online appointment link — all "Book Now" / "Book Visit" CTA buttons
  bookNow: 'https://healow.com/apps/practice/highland-primary-care-llc-29219?v=2&t=1',
} as const;

export const NAV: Array<{
  label: string;
  href: string;
  children?: Array<{ label: string; href: string; featured?: boolean }>;
}> = [
  { label: 'About', href: '/about-us/' },
  {
    label: 'Services',
    href: '/our-services/',
    children: [
      { label: 'Medical Weight Loss', href: '/medical-weight-loss/', featured: true },
      { label: 'Testosterone Replacement Therapy', href: '/testosterone-replacement-therapy/', featured: true },
      { label: 'Preventive Services', href: '/preventive-services/' },
      { label: 'Chronic Disease Management', href: '/management-of-chronic-conditions/' },
      { label: 'Acute Care', href: '/acute-care-for-short-term-illnesses/' },
      { label: 'Mental Health', href: '/mental-health-services/' },
      { label: 'Elderly Care', href: '/elderly-care/' },
      { label: "Men's Health", href: '/mens-health-services/' },
      { label: 'Nutrition Counseling', href: '/nutrition-counseling/' },
      { label: 'Referrals to Specialists', href: '/referrals-to-specialists/' },
    ],
  },
  { label: 'Articles', href: '/health-articles/' },
  { label: 'Location', href: '/primary-care-sherman-tx-location/' },
  { label: 'Contact', href: '/contact-us/' },
];

export const PROVIDERS = [
  {
    slug: 'dr-shahram-sani',
    name: 'Dr. Shahram N. Sani, MD',
    title: 'Board-Certified Internal Medicine Physician & Medical Director',
    photo: '/images/dr-sani.webp',
    specialties: ['Internal Medicine', 'Primary Care', "Men's Health", 'Chronic Disease Mgmt'],
    short:
      'Board-certified Internal Medicine physician with 25+ years of clinical experience. Medical Director at Highland Primary Care. Earned MD from Tehran University of Medical Sciences; residency at Abington Memorial Hospital. Deep expertise in preventive care, chronic disease management, and men\u2019s health.',
  },
  {
    slug: 'diane-keahey',
    name: 'Diane R. Keahey, DNP, FNP-BC',
    title: 'Doctor of Nursing Practice & Family Nurse Practitioner',
    photo: '/images/diane-keahey.webp',
    specialties: ['Family Medicine', 'Primary Care', "Women's Health", 'Geriatric Care'],
    short:
      'Board-certified Family Nurse Practitioner with 24 years of clinical experience and a Doctorate from the University of Tennessee. Holistic, patient-centered care for all ages, with focus on diabetes, hypertension, anxiety, and women\u2019s and geriatric health.',
  },
  {
    slug: 'dr-amit-warke',
    name: 'Dr. Amit Warke, MD',
    title: 'Board-Certified Family Medicine Physician',
    photo: '/images/dr-warke.webp',
    specialties: ['Family Medicine', 'Primary Care', 'Preventive Medicine', 'Chronic Disease Mgmt'],
    short:
      'Board-certified Family Medicine physician with 15+ years caring for patients of all ages. MD from Maharashtra Institute of Medical Education and Research, Pune; residency at LSU Health (EA Conway Medical Center). Thorough, compassionate approach to acute and chronic conditions.',
  },
] as const;

export const SERVICES = [
  {
    slug: 'preventive-services',
    title: 'Preventive Services',
    short: 'Annual wellness exams, screenings, immunizations, and lifestyle coaching.',
    icon: 'HeartPulse',
  },
  {
    slug: 'management-of-chronic-conditions',
    title: 'Chronic Disease Management',
    short: 'Ongoing care for diabetes, hypertension, heart disease, thyroid disorders, and more.',
    icon: 'Activity',
  },
  {
    slug: 'acute-care-for-short-term-illnesses',
    title: 'Acute Care',
    short: 'Same-day care for short-term illness, infections, minor injuries.',
    icon: 'Bandage',
  },
  {
    slug: 'mental-health-services',
    title: 'Mental Health',
    short: 'Screening and treatment for depression, anxiety, and stress.',
    icon: 'Brain',
  },
  {
    slug: 'medical-weight-loss',
    title: 'Medical Weight Loss',
    short: 'Physician-supervised GLP-1 program starting at $99/month.',
    icon: 'Scale',
    featured: true,
  },
  {
    slug: 'elderly-care',
    title: 'Elderly Care',
    short: 'Geriatric assessment, fall prevention, and Medicare wellness visits.',
    icon: 'Accessibility',
  },
  {
    slug: 'mens-health-services',
    title: "Men's Health",
    short: 'Prostate health, testosterone, cardiovascular risk, and more.',
    icon: 'User',
  },
  {
    slug: 'nutrition-counseling',
    title: 'Nutrition Counseling',
    short: 'Personalized dietary plans for weight, diabetes, and chronic conditions.',
    icon: 'Apple',
  },
  {
    slug: 'referrals-to-specialists',
    title: 'Referrals to Specialists',
    short: 'Coordinated referrals to trusted specialists across the Texoma region.',
    icon: 'Route',
  },
  {
    slug: 'testosterone-replacement-therapy',
    title: 'Testosterone Replacement Therapy',
    short: 'Doctor-supervised TRT with $79 comprehensive assessment.',
    icon: 'Zap',
    featured: true,
  },
] as const;

export const INSURANCE: Array<{ name: string; logo: string; imgClass?: string }> = [
  { name: 'Medicare',              logo: '/images/insurance/medicare.png' },
  { name: 'TMHP Texas Medicaid',   logo: '/images/insurance/tmhp.png' },
  { name: 'Blue Cross Blue Shield',logo: '/images/insurance/bcbs.png',            imgClass: 'h-52 w-52 shrink-0 object-contain mix-blend-multiply' },
  { name: 'Aetna',                 logo: '/images/insurance/aetna.png',               imgClass: 'h-52 w-52 shrink-0 object-contain mix-blend-multiply' },
  { name: 'Cigna',                 logo: '/images/insurance/cigna.png',            imgClass: 'h-52 w-52 shrink-0 object-contain mix-blend-multiply' },
  { name: 'UnitedHealthcare',      logo: '/images/insurance/united-healthcare-new.png', imgClass: 'h-52 w-52 shrink-0 object-contain mix-blend-multiply' },
  { name: 'Humana',                logo: '/images/insurance/humana.png',           imgClass: 'h-52 w-52 shrink-0 object-contain mix-blend-multiply' },
  { name: 'Tricare',               logo: '/images/insurance/tricare.png' },
  { name: 'AARP',                  logo: '/images/insurance/aarp.png' },
  { name: 'Baylor Scott & White',  logo: '/images/insurance/baylor-scott-white.webp',  imgClass: 'h-52 w-52 shrink-0 object-contain mix-blend-multiply' },
  { name: 'GEHA',                  logo: '/images/insurance/geha.png' },
  { name: 'Amerigroup',            logo: '/images/insurance/amerigroup.webp',           imgClass: 'h-52 w-52 shrink-0 object-contain mix-blend-multiply' },
  { name: 'Molina Healthcare',     logo: '/images/insurance/molina.png',           imgClass: 'h-52 w-52 shrink-0 object-contain mix-blend-multiply' },
];

export const TESTIMONIALS = [
  {
    quote:
      "Dr. Sani is incredibly thorough and takes the time to actually listen. I've never felt rushed. He explains everything clearly and genuinely cares about my health.",
    name: 'Sarah M.',
    city: 'Sherman, TX',
  },
  {
    quote:
      'Finally found a primary care doctor who manages all my conditions in one place. The office is welcoming, staff is friendly, and appointments are easy to book.',
    name: 'James R.',
    city: 'Denison, TX',
  },
  {
    quote:
      "Dr. Sani helped me lose 35 pounds through his medical weight loss program. He's knowledgeable, caring, and my whole family now sees him for primary care.",
    name: 'Maria T.',
    city: 'Sherman, TX',
  },
] as const;
