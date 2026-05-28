/**
 * Health articles. Two seed articles migrated from the legacy WordPress site.
 * Add new articles by extending the ARTICLES array.
 */

export type Article = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO date
  readingMinutes: number;
  image: string; // Unsplash URL for hero and thumbnail
  imageAlt: string;
  body: string; // HTML (rendered via set:html)
};

export const ARTICLES: Article[] = [
  {
    slug: 'choosing-the-right-primary-care-physician',
    title: 'Tips for Choosing the Right Primary Care Physician',
    description:
      'A practical guide to selecting a primary care physician who fits your needs, communication style, and long-term health goals.',
    date: '2024-09-15',
    readingMinutes: 5,
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=1200&q=80',
    imageAlt: 'Doctor in a clinical setting ready to meet a patient',
    body: `
<p>Choosing a primary care physician (PCP) is one of the most important healthcare decisions you'll make. A great PCP becomes a long-term partner in your health — someone who knows your history, coordinates your care, and is your first call when something feels off.</p>

<h2>Start with the practical filters</h2>
<p>Before evaluating personality fit, narrow your options with the basics:</p>
<ul>
  <li><strong>Insurance coverage.</strong> Confirm the physician is in-network with your plan.</li>
  <li><strong>Location and hours.</strong> A great doctor 45 minutes away you'll never see is worse than a good doctor 10 minutes away.</li>
  <li><strong>Hospital affiliation.</strong> If hospitalization becomes necessary, you want a PCP with admitting privileges at a hospital you'd choose.</li>
  <li><strong>Board certification.</strong> Verify certification in Internal Medicine or Family Medicine through the American Board of Medical Specialties.</li>
</ul>

<h2>Evaluate communication style</h2>
<p>The single biggest predictor of patient satisfaction is communication. During your first visit, notice:</p>
<ul>
  <li>Does the physician listen without rushing?</li>
  <li>Do they explain things in language you understand?</li>
  <li>Do they involve you in decisions rather than dictating?</li>
  <li>Are they direct about uncertainty rather than overconfident?</li>
</ul>

<h2>Look for proactive primary care</h2>
<p>A great PCP doesn't just react to problems — they look ahead. Ask:</p>
<ul>
  <li>What screenings do you recommend at my age?</li>
  <li>How do you typically manage [condition]?</li>
  <li>How quickly can I get an appointment when I'm sick?</li>
  <li>How do you coordinate with specialists?</li>
</ul>

<h2>Check the practice infrastructure</h2>
<p>The best physician in the world is hampered by a bad practice. Look for on-site labs, an accessible patient portal, reasonable wait times for appointments, and clear processes for prescription refills and after-hours questions.</p>

<h2>The bottom line</h2>
<p>You should leave your first visit feeling heard, informed, and confident in the plan. If you don't — that's important information. A long-term primary care relationship is worth investing the time upfront to find the right fit.</p>
    `,
  },
  {
    slug: 'role-of-primary-care-physicians',
    title: 'Understanding the Role of Primary Care Physicians in Your Health Journey',
    description:
      'What a primary care physician actually does — and why this relationship matters more than most patients realize.',
    date: '2024-08-22',
    readingMinutes: 6,
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=1200&q=80',
    imageAlt: 'Stethoscope representing primary care medicine',
    body: `
<p>Most people think of a primary care physician (PCP) as someone who treats colds and refills prescriptions. That's a fraction of the actual job. A good PCP is the quarterback of your health — the one provider who sees the whole field.</p>

<h2>The PCP's actual job description</h2>
<p>Primary care covers a much broader scope than acute illness:</p>
<ul>
  <li><strong>Preventive care:</strong> Annual physicals, screenings, immunizations, and risk assessments tailored to your age, sex, and family history.</li>
  <li><strong>Chronic disease management:</strong> Diabetes, hypertension, cholesterol, thyroid, and other long-term conditions managed with regular monitoring and medication optimization.</li>
  <li><strong>Acute care:</strong> Same-day or near-term appointments for infections, injuries, and sudden symptoms — almost always faster and cheaper than urgent care or the ER.</li>
  <li><strong>Mental health:</strong> Screening and first-line treatment for depression, anxiety, and stress-related conditions.</li>
  <li><strong>Specialist coordination:</strong> Referrals, record sharing, and integration of specialist recommendations into your overall care plan.</li>
  <li><strong>Care continuity:</strong> One provider who has the full context when something changes.</li>
</ul>

<h2>Why continuity matters</h2>
<p>The clinical evidence on continuous primary care is overwhelming. Patients with an established PCP have lower mortality rates, fewer ER visits, fewer hospital admissions, lower total healthcare costs, and better management of chronic disease. The mechanism is simple: a PCP who knows your history catches things faster, prescribes more accurately, and prevents duplicative testing.</p>

<h2>What a good PCP relationship looks like</h2>
<p>You should be able to get a same-day or next-day appointment when something is wrong. Routine follow-ups happen at regular intervals. Your PCP knows your history without re-reading your chart from scratch. You feel comfortable bringing up sensitive topics — sexual health, mental health, substance use — without judgment. When specialists are needed, the referral process is seamless and the recommendations come back to your PCP for integration.</p>

<h2>How to use your PCP well</h2>
<ul>
  <li>Bring a current medication list (including supplements) to every visit.</li>
  <li>Write down your questions in advance — appointments are short.</li>
  <li>Use the patient portal for non-urgent communication.</li>
  <li>Don't skip your annual visit, even when you feel fine.</li>
  <li>Be honest. Your PCP can't help you with information you withhold.</li>
</ul>

<h2>The bottom line</h2>
<p>Your PCP is the most important provider in your healthcare. They're the one who sees the full picture, coordinates the team, and catches what others miss. Invest in the relationship — it pays dividends for decades.</p>
    `,
  },
];
