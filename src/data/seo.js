import { siteMeta } from './siteMeta'

const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'SportsActivityLocation',
  name: siteMeta.siteName,
  description: siteMeta.defaultDescription,
  telephone: siteMeta.phoneDisplay,
  email: siteMeta.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Nachane',
    addressLocality: 'Ratnagiri',
    addressRegion: 'Maharashtra',
    postalCode: '415639',
    addressCountry: 'IN',
  },
  areaServed: 'Ratnagiri',
  image: siteMeta.defaultOgImage,
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteMeta.siteName,
  description: siteMeta.defaultDescription,
}

export const seoPages = {
  home: {
    title: 'Cricket Ground Booking In Ratnagiri | SOSA Cricket Academy',
    description:
      'Book SOSA Cricket Ground in Ratnagiri for team practice, tournaments, camps and match sessions. Academy coaching is also available for developing players.',
    keywords: [
      'cricket ground booking Ratnagiri',
      'practice ground Ratnagiri',
      'cricket tournament ground',
      'SOSA Cricket Academy',
    ],
    path: '/',
    structuredData: [websiteSchema, businessSchema],
  },
  ground: {
    title: 'Book Cricket Ground For Practice & Tournaments | SOSA Ratnagiri',
    description:
      'Reserve SOSA Cricket Ground in Ratnagiri for team practice, friendly matches, tournaments, camps and cricket events with player-friendly facilities.',
    keywords: [
      'book cricket ground Ratnagiri',
      'tournament ground Ratnagiri',
      'team practice ground',
      'cricket venue Ratnagiri',
    ],
    path: '/ground',
    structuredData: businessSchema,
  },
  about: {
    title: 'About SOSA Cricket Academy & Ground | Ratnagiri',
    description:
      'Learn about SOSA Cricket Academy and the vision behind building a professional cricket ground and training environment in Ratnagiri.',
    keywords: [
      'about SOSA Cricket Academy',
      'Ratnagiri cricket ground',
      'sports venue Ratnagiri',
    ],
    path: '/about',
    structuredData: businessSchema,
  },
  academy: {
    title: 'Cricket Academy Coaching In Ratnagiri | SOSA Academy',
    description:
      'Explore SOSA academy batches, fees, timings and coaching philosophy for players seeking structured cricket training in Ratnagiri.',
    keywords: [
      'cricket academy Ratnagiri',
      'cricket coaching Ratnagiri',
      'academy admission SOSA',
    ],
    path: '/academy',
    structuredData: {
      ...businessSchema,
      '@type': 'SportsClub',
    },
  },
  facilities: {
    title: 'Cricket Ground Facilities In Ratnagiri | SOSA',
    description:
      'See the facilities available at SOSA including pavilion seating, indoor nets, changing rooms, parking and support spaces for teams and events.',
    keywords: [
      'cricket ground facilities',
      'indoor nets Ratnagiri',
      'sports facilities SOSA',
    ],
    path: '/facilities',
    structuredData: businessSchema,
  },
  gallery: {
    title: 'SOSA Gallery | Ground, Practice & Tournament Photos',
    description:
      'Browse SOSA ground, practice and tournament moments to get a visual feel for the cricket venue and academy environment in Ratnagiri.',
    keywords: [
      'SOSA gallery',
      'cricket ground photos Ratnagiri',
      'tournament venue gallery',
    ],
    path: '/gallery',
    structuredData: businessSchema,
  },
  contact: {
    title: 'Contact SOSA For Ground Booking & Academy Enquiry',
    description:
      'Contact SOSA Cricket Academy for ground booking, tournament planning, team practice scheduling and academy admission enquiries.',
    keywords: [
      'contact SOSA Cricket Academy',
      'ground booking enquiry',
      'academy admission enquiry',
    ],
    path: '/contact',
    structuredData: businessSchema,
  },
}
