# Per-Page Blueprints

Every page below specifies: **purpose**, **target keyword(s)**, **section structure**, **CTAs**, and **schema**. Build in priority order.

---

## P0 — Conversion-Critical (build week 1)

### `/` — Home

- **Purpose:** Primary site entry, route new patients to booking
- **Target:** "primary care sherman tx", "doctor sherman tx"
- **Conversion goal:** Book appointment via GHL widget OR call

| Section | Content |
|---|---|
| 1. Header (sticky) | Logo, nav, "Call (903) 871-5671", "Book Now" red CTA |
| 2. Hero | Headline: *Your Wellness Journey Starts Here* • Sub: Personalized primary care in Sherman, TX • CTAs: [Schedule Visit] [Call Now] • Right: hero photo (Dr. Sani at clinic) • Trust strip below: ⭐ accepting new patients · Medicare · Most insurance · Same-day appts |
| 3. "Meet Our Providers" | 3-card grid (Sani, Keahey, Warke) with photos, credentials, "Learn more" links |
| 4. "Comprehensive Care, One Place" | 6-card services grid: Preventive, Chronic Care, Acute, Weight Loss, Men's Health, Mental Health → links to detail pages |
| 5. "Why Highland" strip | 4 trust badges: 25+ yrs exp · Board-certified · On-site labs · Local Texoma practice |
| 6. Testimonials carousel | 3 quotes (Sarah M., James R., Maria T.) + ⭐⭐⭐⭐⭐ |
| 7. "Insurance & Payment" | Logos: BCBS, Aetna, Cigna, UHC, Medicare, Medicaid, Humana + cash-pay link |
| 8. FAQ | 5 questions (accepting new patients? insurance? hours? what to bring?) — FAQ schema |
| 9. CTA banner | Red band: "Ready to schedule?" + phone + book button |
| 10. Booking widget | GHL embed `edEHoM77zSLn1shx3Ae9` |
| 11. Footer | Address, hours, social, sitemap, legal |

**Schemas:** `LocalBusiness` (full), `MedicalClinic`, `FAQPage`, `BreadcrumbList`

---

### `/medical-weight-loss/`

- **Purpose:** Convert weight-loss intent → GHL booking
- **Target:** "medical weight loss sherman tx", "glp-1 sherman tx", "semaglutide sherman tx"
- **Conversion goal:** Book consultation; secondary: call

| Section | Content |
|---|---|
| 1. Hero | *Weight loss isn't a willpower problem. It's a hormone problem.* • Sub: Physician-supervised GLP-1 program from $99/mo • [Book Consult] [Call] • Trust strip: Physician-supervised by Sani, MD · In-clinic, not mail-order · Insurance billed for office visits |
| 2. The Science | 3-step explainer: hunger hormones dysregulated → GLP-1s restore signal → 15–22% body weight loss in trials |
| 3. The Process | 4 steps: Consult ($99) → Plan set → Weekly nurse injection → Monthly Sani visit |
| 4. Why Choose Us | Side-by-side table: Highland (in-person, insurance billed, monthly MD exam) vs. Telehealth (mailed, async, $149–349/mo) |
| 5. Plans & Pricing | 4 tiers: Semaglutide Starter $99, Therapeutic $149, Tirzepatide Starter $199, Therapeutic $299 (confirm pricing) |
| 6. Meet Your Physician | Dr. Sani card with credentials |
| 7. Testimonials | 3 weight-loss specific quotes |
| 8. FAQ | 6 questions: who's a candidate? in-clinic vs. mail-order? at-visit experience? meds prescribed? insurance? cancellation? |
| 9. Safety / disclaimer | FDA-compliant 503A pharmacy, Texas Medical Board licensed, individual results vary |
| 10. CTA banner + booking widget | GHL `4pz0StK2hEMnuE5Ngp9Z` |

**Schemas:** `MedicalProcedure` (Bariatric medical therapy), `Service`, `FAQPage`, `Physician`, `Offer` (with pricing)

---

### `/testosterone-replacement-therapy/`

- **Purpose:** Highest-margin service; convert middle-aged male intent → $79 assessment booking
- **Target:** "trt sherman tx", "testosterone therapy texas", "low t doctor sherman"
- **Conversion goal:** Book $79 assessment

| Section | Content |
|---|---|
| 1. Hero | *Are You Tired of Feeling Tired, Sherman?* • Sub: Doctor-supervised TRT right here in Sherman • [Get $79 Assessment] • Trust strip: Licensed TX physicians · HIPAA compliant · Sherman, TX |
| 2. Interactive symptom checker | 6-question React island (low energy, low libido, weight gain, sleep, mood, focus) → result page → CTA |
| 3. Assessment offer breakout | $350 value, $79 today — physician consult ($150) + complete lab panel ($200) + treatment plan • 100% refund guarantee |
| 4. Why Sherman men trust us | 3 cards: TX-licensed MDs, 15+ yrs exp, evidence-based (AUA/Endocrine Soc guidelines) |
| 5. How it works | 4 steps: Book → Test ($79) → Review labs → Treatment plan |
| 6. Testimonials | 3 patient quotes with disclaimer |
| 7. Transparent pricing | 3-tier cards: Essentials $179, Complete Optimization $249, Executive Performance $399 — feature comparison |
| 8. Trust strip | Licensed TX MDs · HIPAA · Evidence-based · 4.9⭐ · Local · 100% guarantee |
| 9. Legal block | TMB compliance, DEA, controlled substance regs |
| 10. FAQ | 6 questions: What is TRT? Safe? Cost? Insurance? When results? HSA/FSA? |
| 11. CTA banner + booking widget | $79 assessment booking widget |

**Schemas:** `MedicalProcedure` (Hormone replacement therapy), `Service`, `FAQPage`, `Offer`, `Physician`

---

### `/contact-us/`

- **Purpose:** Final-step booking; show that we're real and reachable
- **Target:** "highland primary care contact", "primary care sherman tx phone"
- **Conversion goal:** Book or call

| Section | Content |
|---|---|
| 1. Header + simple hero | "Contact Us — Highland Primary Care" |
| 2. Two-column block | LEFT: Address, phone, email, hours table, "Get directions" Google Maps link, parking notes • RIGHT: Embedded Google Map |
| 3. Booking widget | GHL `edEHoM77zSLn1shx3Ae9` |
| 4. "Accepting new patients" reassurance + insurance plans list |
| 5. FAQ | Where to park? First-visit prep? Insurance? Cancellation policy? |

**Schemas:** `LocalBusiness` (full), `ContactPage`, `FAQPage`

---

## P1 — SEO-Critical (build week 2)

### `/about-us/`

- **Purpose:** Build trust, establish authority, route to provider pages
- **Target:** "highland primary care", "sherman tx doctors"

| Section | Content |
|---|---|
| 1. Hero | "Compassionate primary care, built on real relationships." |
| 2. Practice story | 3–4 paragraphs: founded, mission, philosophy of personalized care |
| 3. Provider cards | Sani, Keahey, Warke — large format with bio CTAs |
| 4. Values | 4 cards: Patient-centered, Evidence-based, Accessible, Long-term partnership |
| 5. Stats strip | 25+ yrs combined exp · Board-certified · Texoma-based |
| 6. CTA + booking widget |

**Schemas:** `MedicalClinic`, `Organization`, `Physician` (for each)

---

### `/dr-shahram-sani/`

- **Purpose:** Capture name searches, build personal authority
- **Target:** "dr sani sherman tx", "shahram sani md"

| Section | Content |
|---|---|
| 1. Hero | Large photo, name, credential line, specialty tags |
| 2. Bio | Full bio paragraphs: education (Tehran University 1997), residency (Abington Memorial), 25+ years experience, philosophy |
| 3. Areas of expertise | 6 cards: Internal Med, Chronic Disease, Preventive, Men's Health, Weight Loss, Acute Care |
| 4. Education & training | Bulleted list with credentials |
| 5. Patient testimonials | 3 Sani-specific quotes |
| 6. FAQ | Accepting new patients? Insurance? Languages? Hospital affiliation? |
| 7. CTA + booking |

**Schemas:** `Physician` (with `alumniOf`, `worksFor`, `medicalSpecialty`, `availableService`), `FAQPage`

### `/diane-keahey/`

Same template, content:
- DNP, FNP-BC, board-certified Family NP, 24 years experience, U. Tennessee doctorate
- Specialties: Family Medicine, Women's Health, Geriatric, Diabetes, HTN, Anxiety
- Schemas: `Person` (with `jobTitle` "Family Nurse Practitioner", `hasCredential`)

### `/dr-amit-warke/`

Same template, content:
- MD, Family Medicine, board-certified, 15+ years
- Education: Maharashtra Institute of Medical Education and Research, Pune
- Residency: LSU Health (EA Conway Medical Center)
- Specialties: Family Medicine, Preventive, Chronic Disease

---

### `/our-services/`

- **Purpose:** Service hub; route to detail pages
- **Target:** "primary care services sherman tx"

| Section | Content |
|---|---|
| 1. Hero | "Comprehensive primary care for the whole family" |
| 2. 9-card services grid (with consistent icons) | Preventive · Chronic Disease · Acute · Mental Health · Weight Loss · Elderly · Men's Health · Nutrition · Referrals |
| 3. Why-choose strip |
| 4. Insurance accepted strip |
| 5. CTA + booking |

**Schemas:** `MedicalClinic`, `ItemList` of services

---

### `/primary-care-sherman-tx-location/`

- **Purpose:** Local pack ranking, give details for in-person visit
- **Target:** "primary care clinic sherman tx", "doctor near me sherman"

| Section | Content |
|---|---|
| 1. Hero | "Your Sherman, TX Primary Care Clinic" + photo of clinic exterior/lobby |
| 2. Map + address block | Embedded Google Map, full address, plus link to GBP |
| 3. Hours table |
| 4. Driving directions | From major Sherman intersections, Denison, Pottsboro |
| 5. Parking | "Free patient parking on N Highland Ave; elevator to 4th floor" |
| 6. What to bring | Insurance card, photo ID, medication list, prior records |
| 7. Communities served | Sherman, Denison, Pottsboro, Howe, Whitesboro, Van Alstyne, Whitewright, Bells, Tom Bean, Gunter |
| 8. Insurance plans accepted (full list) |
| 9. CTA + booking |

**Schemas:** `LocalBusiness` (maximally complete: geo coordinates 33.6431,-96.6111, openingHoursSpecification, paymentAccepted, areaServed array, hasMap link to GBP)

---

## P2 — Service Detail Pages (build week 2)

Each follows the **same template**:

1. Hero (eyebrow + H1 + sub + CTA)
2. "What we treat" / "What's included" — 4–6 icon cards
3. Our approach — 3–4 cards or numbered steps
4. Evidence-based callout block with .gov links (CDC, NIH, USPSTF, etc.)
5. Patient outcome / testimonial (where applicable)
6. FAQ (4–6 questions) — FAQ schema
7. CTA + booking widget

### `/preventive-services/`
- Sections: Annual wellness exam, Health screenings (BP, cholesterol, diabetes, cancer screens), Immunizations (flu, Tdap, shingles, pneumonia, COVID), Risk assessment, Lifestyle coaching
- USPSTF/CDC schema links
- **Schemas:** `MedicalProcedure` (Preventive medical care), `FAQPage`

### `/management-of-chronic-conditions/`
- Conditions covered: Type 2 DM (HbA1c monitoring, GLP-1, insulin titration), HTN, hyperlipidemia, hypothyroidism, CAD/CHF maintenance, asthma/COPD, CKD stage 1–3, osteoporosis
- Care model: 90-day visit cadence, between-visit messaging, on-site labs
- **Schemas:** `MedicalCondition` (multiple), `MedicalTherapy`, `FAQPage`

### `/acute-care-for-short-term-illnesses/`
- What we treat: URI, influenza, COVID, strep, UTI, skin infections, allergic reactions, minor lacerations, sprains, ear pain, GI bugs
- Same-day appointment messaging
- "When to go to ER instead" callout (chest pain, severe SOB, stroke sx)
- **Schemas:** `MedicalProcedure`, `FAQPage`

### `/mental-health-services/`
- Conditions: depression, anxiety (GAD, panic, social, phobias), stress, adjustment disorders, mild trauma sx
- Integrated care model — meds + brief therapy referrals
- NIMH/SAMHSA links
- 988 lifeline callout
- **Schemas:** `MedicalTherapy`, `FAQPage`

### `/elderly-care/`
- Comprehensive geriatric assessment (cognitive, functional, psychosocial)
- Polypharmacy review
- Fall risk assessment
- Memory care / dementia screening
- Advance care planning
- Medicare Annual Wellness Visit (G0438/G0439 billable)
- **Schemas:** `MedicalProcedure`, `FAQPage`, link to `/medicare-services` if added later

### `/mens-health-services/`
- Prostate health (PSA, DRE, BPH management)
- Testosterone (links to TRT page)
- Cardiovascular risk (lipids, BP, ASCVD calc)
- Colon cancer screening (Cologuard / colonoscopy referral)
- Sexual health (ED, premature ejaculation, STI screening)
- **Schemas:** `MedicalProcedure`, `FAQPage`

### `/nutrition-counseling/`
- General nutrition ed, weight management, MNT for DM/HTN/lipid/GI, sports nutrition, plant-based, supplements
- Academy of Nutrition / NIDDK links
- **Schemas:** `MedicalTherapy`, `FAQPage`

### `/referrals-to-specialists/`
- 6 specialty cards: Cardiology, Endocrinology, Neurology, Orthopedics, Pulmonology, Gastroenterology
- How the referral process works (records sent, pre-auth handled)
- AAFP/CMS links
- **Note:** Current page mentions "Dr. Suresh" — typo (should be Dr. Sani). Fix in rebuild.
- **Schemas:** `MedicalProcedure`, `FAQPage`

### `/semaglutide-pricing-sherman-tx/` (NEW — fix 404)
- Pricing table for all GLP-1 tiers
- What's included (medication + nurse injection + monthly MD visit)
- Insurance vs cash pay breakdown
- FAQ specific to pricing (annual savings? what's the catch? compounded vs branded?)
- **Schemas:** `Offer`, `Service`, `FAQPage`

---

## P3 — Content & Legal (build week 3)

### `/health-articles/` (index)
- Hero: "Health Articles & Patient Education"
- 2 existing articles + topic categories
- Grid layout with featured image, title, excerpt, date, "Read more"
- **Schemas:** `Blog`, `ItemList`

### `/health-articles/[slug]/` (article template)
- Breadcrumbs
- Hero with featured image
- Article body (prose, max 65ch)
- Author byline with link to provider bio
- Related articles
- CTA at end: "Schedule with your primary care team"
- **Schemas:** `MedicalWebPage`, `Article`, `Person` (author), `BreadcrumbList`

Existing articles to migrate:
1. *Tips for Choosing the Right Primary Care Provider for You and Your Family*
2. *Understanding the Role of Primary Care Physicians in Your Health Journey*

### `/privacy-policy/`
- Migrate existing content verbatim (legally reviewed)
- Last-updated date

### `/terms-and-conditions/`
- Migrate existing content verbatim
- Last-updated date

### `/404`
- Friendly message
- Search bar (Algolia or simple Pagefind)
- Links to top 5 pages: Home, Services, About, Contact, Articles

---

## Cross-page elements (build alongside)

### Sticky footer mobile bar (mobile only, <768px)
```
[ 📞 Call (903) 871-5671 ] [ 📅 Book Visit ]
```
Always visible. ~30% conversion lift on medical sites typical.

### Newsletter signup (optional, Phase 2)
- Footer block: "Get our quarterly health newsletter"
- Hooks into GHL CRM as a tagged contact

### Live phone announcement bar (top, dismissible)
- "Now accepting new patients · Same-day appointments available · Call (903) 871-5671"
- Red background, white text
- Cookie-persisted dismissal
