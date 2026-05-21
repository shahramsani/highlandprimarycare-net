import { SITE, CONTACT } from './config';

/**
 * Schema.org JSON-LD generators for the site.
 * Spec refs: schema.org/MedicalClinic, schema.org/Physician,
 * schema.org/LocalBusiness, schema.org/FAQPage
 */

export const localBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': ['MedicalClinic', 'LocalBusiness'],
  '@id': `${SITE.url}#clinic`,
  name: SITE.name,
  url: SITE.url,
  telephone: CONTACT.phone,
  email: CONTACT.email,
  image: `${SITE.url}/images/logo.png`,
  logo: `${SITE.url}/images/logo.png`,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: CONTACT.address.street,
    addressLocality: CONTACT.address.city,
    addressRegion: CONTACT.address.state,
    postalCode: CONTACT.address.zip,
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: CONTACT.geo.lat,
    longitude: CONTACT.geo.lng,
  },
  openingHoursSpecification: CONTACT.hours
    .filter((h) => h.open && h.close)
    .map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.day,
      opens: convertTo24h(h.open!),
      closes: convertTo24h(h.close!),
    })),
  areaServed: [
    'Sherman, TX',
    'Denison, TX',
    'Pottsboro, TX',
    'Howe, TX',
    'Whitesboro, TX',
    'Van Alstyne, TX',
    'Whitewright, TX',
    'Bells, TX',
    'Tom Bean, TX',
    'Gunter, TX',
  ],
  sameAs: [
    CONTACT.socials.facebook,
    CONTACT.socials.instagram,
    CONTACT.socials.youtube,
  ],
  medicalSpecialty: [
    'InternalMedicine',
    'FamilyMedicine',
    'PrimaryCare',
    'Geriatric',
    'MensHealth',
  ],
});

export const physicianSchema = (provider: {
  name: string;
  title: string;
  photo: string;
  slug: string;
  specialties: readonly string[];
  short: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Physician',
  name: provider.name,
  description: provider.short,
  image: `${SITE.url}${provider.photo}`,
  url: `${SITE.url}/${provider.slug}/`,
  jobTitle: provider.title,
  worksFor: {
    '@type': 'MedicalClinic',
    name: SITE.name,
    '@id': `${SITE.url}#clinic`,
  },
  affiliation: {
    '@type': 'MedicalClinic',
    name: SITE.name,
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: CONTACT.address.street,
    addressLocality: CONTACT.address.city,
    addressRegion: CONTACT.address.state,
    postalCode: CONTACT.address.zip,
  },
  telephone: CONTACT.phone,
  medicalSpecialty: provider.specialties,
});

export const faqSchema = (faqs: Array<{ q: string; a: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: f.a,
    },
  })),
});

export const breadcrumbSchema = (
  items: Array<{ name: string; url: string }>
) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    item: item.url,
  })),
});

export const medicalServiceSchema = (s: {
  name: string;
  description: string;
  slug: string;
  bodyLocation?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'MedicalProcedure',
  name: s.name,
  description: s.description,
  url: `${SITE.url}/${s.slug}/`,
  bodyLocation: s.bodyLocation,
  performer: {
    '@type': 'MedicalClinic',
    name: SITE.name,
    '@id': `${SITE.url}#clinic`,
  },
});

function convertTo24h(time12h: string): string {
  // "8:00 AM" → "08:00", "5:00 PM" → "17:00"
  const [time, period] = time12h.split(' ');
  let [h, m] = time.split(':').map(Number);
  if (period === 'PM' && h !== 12) h += 12;
  if (period === 'AM' && h === 12) h = 0;
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
}
