import academyImg from '../assets/images/home/Academy.jpeg'
import academy2Img from '../assets/images/home/Academy2.png'
import bedroomImg from '../assets/images/home/Bedroom.jpeg'
import comfortImg from '../assets/images/home/Comfort.jpeg'
import ctaImg from '../assets/images/home/CTA.png'
import facilitiesImg from '../assets/images/home/Facilities.jpeg'
import greenTurfImg from '../assets/images/home/Green Turf.jpeg'
import groundImg from '../assets/images/home/Ground.jpeg'
import ground2Img from '../assets/images/home/Ground2.jpeg'
import ground3Img from '../assets/images/home/Ground3.jpeg'
import netsImg from '../assets/images/home/Nets.png'
import pavilionImg from '../assets/images/home/Pavilion.png'
import studentsImg from '../assets/images/home/Students.jpeg'
import students2Img from '../assets/images/home/Students2.jpeg'
import washroomImg from '../assets/images/home/Washroom.jpeg'
import yardImg from '../assets/images/home/Yard.jpeg'
import coach1Img from '../assets/images/about/Coach1.jpeg'
import coach2Img from '../assets/images/about/Coach2.jpeg'
import aboutVideo from '../assets/videos/About.mp4'
import groundHeroVideo from '../assets/videos/Ground.mp4'
import groundShowcaseVideo from '../assets/videos/Ground1.mp4'

export const siteMeta = {
  phoneDisplay: '+91 96733 73093',
  phoneLink: '+919673373093',
  whatsappLink: '919673373093',
  email: 'info@sosacricketacademy.com',
  location: 'Ratnagiri',
  fullAddress: 'SOSA Cricket Academy, Nachane, Ratnagiri - 415639, Maharashtra',
  admissionsText: 'Ground Bookings Open | Practice & Tournament Slots Available',
}

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Ground', path: '/ground' },
  { label: 'About', path: '/about' },
  { label: 'Facilities', path: '/facilities' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Academy', path: '/academy' },
  { label: 'Contact', path: '/contact' },
]

export const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/share/1D7VNycuX9/' },
  { label: 'Instagram', href: 'https://www.instagram.com/sawant_oasis_sports_arena?igsh=anl0M2s2emxlazFu' },
  { label: 'YouTube', href: 'https://www.youtube.com/@sawantoasissportsarena3377' },
]

export const generatedAssets = {
  homeHero: groundHeroVideo,
  groundHero: groundShowcaseVideo,
  aboutHero: ground2Img,
  aboutStoryVideo: aboutVideo,
  academyHero: academy2Img,
  facilitiesHero: netsImg,
  galleryHero: ground3Img,
  contactHero: groundImg,
  founderOne: coach1Img,
  founderTwo: coach2Img,
  food: facilitiesImg,
  gym: comfortImg,
  firstAid: washroomImg,
  trophyWall: pavilionImg,
  teamHuddle: students2Img,
  mapCard: ground2Img,
  ctaBackground: ctaImg,
  ctaBatsman: ctaImg,
  ctaTeam: ctaImg,
}

export const sharedPrograms = [
  {
    id: 'group-a',
    eyebrow: 'Group A',
    title: 'SOSA Strikers',
    duration: '2.5 Hours per Session',
    price: '₹2,500',
    note: 'Long-format sessions for committed players working on technique, fitness and match awareness.',
    button: 'Join Group A',
    featured: false,
  },
  {
    id: 'group-b',
    eyebrow: 'Group B',
    title: 'SOSA Rising Stars',
    duration: '1.5 Hours per Session',
    price: '₹1,500',
    note: 'Skill-building sessions for developing players who need regular structured coaching.',
    button: 'Join Group B',
    featured: false,
  },
  {
    id: 'weekend',
    eyebrow: 'Weekend Batch',
    title: 'Weekend Only Program',
    duration: 'Weekend Sessions',
    price: '₹1,500',
    note: 'Ideal for students and players who can attend only on weekends without missing quality coaching.',
    button: 'Join Weekend Batch',
    featured: true,
  },
]

export const homePage = {
  hero: {
    eyebrow: 'SOSA Ground Booking',
    title: 'Professional Ground For Practice & Tournaments',
    description:
      'SOSA is primarily a match-ready cricket ground in Ratnagiri for teams, tournaments, camps and high-quality practice sessions, with academy coaching available as a secondary offering.',
    backgroundImage: generatedAssets.homeHero,
    actions: [
      { label: 'Book Ground', href: '/ground', variant: 'primary' },
      { label: 'Tournament Enquiry', href: '/contact', variant: 'secondary' },
    ],
    highlightStats: [
      { value: '150+', label: 'Booking Days' },
      { value: '10+', label: 'Tournaments' },
      { value: '50+', label: 'Teams Hosted' },
    ],
  },
  stats: [
    { value: '150+', label: 'Booking Days', helper: 'Strong seasonal demand' },
    { value: '10+', label: 'Tournaments Hosted', helper: 'Competitive match events' },
    { value: '50+', label: 'Teams Served', helper: 'Practice and tournament bookings' },
    { value: '2', label: 'Practice Nets', helper: 'Indoor support available' },
  ],
  reasons: [
    { title: 'Match-Ready Ground', description: 'Professional playing conditions for practice games, league matches and tournaments.' },
    { title: 'Tournament Friendly', description: 'A strong venue option for cricket events, selection trials and organized competitions.' },
    { title: 'Day & Evening Slots', description: 'Flexible timing windows to support teams, organizers and working players.' },
    { title: 'Pavilion & Seating', description: 'Comfortable pavilion and viewing space for teams, staff and spectators.' },
    { title: 'Support Facilities', description: 'Parking, washrooms, changing space and on-ground convenience for smooth operations.' },
    { title: 'Trusted In Ratnagiri', description: 'A reliable local venue known for well-maintained infrastructure and repeat bookings.' },
  ],
  showcase: {
    eyebrow: 'Ground Focus',
    heading: "Ratnagiri's trusted cricket ground for teams, camps and tournaments.",
    description:
      'From practice bookings to tournament hosting, SOSA gives teams a clean, professional and well-managed cricket environment. This is the first thing we want visitors to understand when they land on the website.',
    points: [
      'Available for team practice sessions and friendly matches',
      'Suitable for tournaments, cricket camps and trials',
      'Backed by pavilion, parking, washrooms and support spaces',
    ],
    image: ground2Img,
    action: { label: 'Explore Ground Details', href: '/ground' },
  },
  bookingOptions: [
    {
      id: 'practice',
      eyebrow: 'Practice Booking',
      title: 'Team Practice Sessions',
      duration: 'Morning & Evening Slots',
      price: 'Custom Enquiry',
      note: 'Ideal for clubs, local teams and squads that need a reliable practice venue with match-like conditions.',
      button: 'Book Practice Slot',
      featured: false,
    },
    {
      id: 'tournament',
      eyebrow: 'Tournament Booking',
      title: 'League & Tournament Matches',
      duration: 'Half Day / Full Day',
      price: 'Custom Enquiry',
      note: 'Use SOSA for organized tournaments, trials, seasonal competitions and special cricket events.',
      button: 'Plan Tournament',
      featured: true,
    },
    {
      id: 'camp',
      eyebrow: 'Group Booking',
      title: 'Camps & Special Events',
      duration: 'Flexible Scheduling',
      price: 'Custom Enquiry',
      note: 'Suitable for camps, selection events, school or academy groups and cricket activations.',
      button: 'Enquire Now',
      featured: false,
    },
  ],
  facilities: [
    { title: 'Cricket Ground', image: groundImg },
    { title: 'Pavilion Seating', image: pavilionImg },
    { title: 'Indoor Nets', image: greenTurfImg },
    { title: 'Changing Room', image: bedroomImg },
    { title: 'Parking Space', image: yardImg },
    { title: 'Washrooms', image: washroomImg },
  ],
  galleryPreview: {
    filters: ['All', 'Ground', 'Practice', 'Tournament'],
    items: [
      { category: 'Ground', image: groundImg, title: 'Main Ground View' },
      { category: 'Ground', image: ground2Img, title: 'Aerial Ground Look' },
      { category: 'Practice', image: greenTurfImg, title: 'Indoor Net Support' },
      { category: 'Tournament', image: ground3Img, title: 'Match Atmosphere' },
      { category: 'Ground', image: pavilionImg, title: 'Pavilion Comfort' },
      { category: 'Practice', image: studentsImg, title: 'Team Session Activity' },
    ],
  },
  testimonials: [
    {
      name: 'Local Club Captain',
      role: 'Team Booking',
      quote:
        'SOSA gives us the kind of ground setup we usually expect only in bigger cities. It works really well for team practice and small tournaments.',
    },
    {
      name: 'Tournament Organizer',
      role: 'Cricket Event Host',
      quote:
        'The venue feels organized and dependable. Ground quality, space and support facilities make event planning much easier.',
    },
  ],
  events: [
    { title: 'Team Practice Slots', date: 'Available Weekly', note: 'Book your preferred timing' },
    { title: 'Tournament Enquiries', date: 'Open All Season', note: 'For local and regional events' },
    { title: 'Cricket Camps', date: 'Custom Scheduling', note: 'For group and academy bookings' },
  ],
  contact: {
    title: 'Ground Booking Enquiry',
    text: 'Tell us whether you need the ground for practice, a tournament, a camp or a special cricket event. We will guide you on timings and booking options.',
    mapImage: generatedAssets.mapCard,
  },
}

export const groundPage = {
  hero: {
    eyebrow: 'SOSA Cricket Ground',
    title: 'Book A Ground Built For Serious Cricket',
    subtitle: 'Practice, Matches & Tournaments',
    description:
      'A premium cricket ground in Ratnagiri for team practice, league fixtures, tournaments and organized cricket events.',
    backgroundImage: generatedAssets.groundHero,
    actions: [
      { label: 'Book Ground', href: '/contact', variant: 'primary' },
      { label: 'Call Now', href: `tel:${siteMeta.phoneLink}`, variant: 'secondary' },
    ],
    sideFacts: ['Practice & tournament use', 'Team-friendly scheduling', 'Pavilion & support spaces', 'Ratnagiri location'],
  },
  overview: {
    eyebrow: 'Why Teams Choose SOSA',
    title: 'A ground experience that feels ready for real cricket.',
    description:
      'SOSA is used more for ground bookings than academy activity. That is why the venue is positioned for teams first: better playing atmosphere, better hosting convenience and better clarity for organizers.',
    video: generatedAssets.groundHero,
    bullets: [
      'Suitable for team practice, match simulations and tournaments',
      'Convenient for clubs, cricket groups, schools and event organizers',
      'Supported by pavilion, parking, washrooms and indoor practice nets',
    ],
  },
  stats: [
    { value: '150+', label: 'Booking Days' },
    { value: '10+', label: 'Tournaments Hosted' },
    { value: '50+', label: 'Teams Hosted' },
    { value: '200+', label: 'Spectator Capacity' },
  ],
  features: [
    { title: 'Professional Playing Surface', description: 'Well-kept ground conditions for serious team sessions and proper cricket events.' },
    { title: 'Tournament-Ready Setup', description: 'A strong venue option for local competitions, school matches and selection events.' },
    { title: 'Floodlit Support', description: 'Evening-friendly scheduling with better flexibility for working teams and organizers.' },
    { title: 'Pavilion & Viewing Area', description: 'Comfortable seating and a structured space for players, coaches and supporters.' },
    { title: 'Indoor Practice Nets', description: 'Additional support for warm-up and practice when teams need more utility from the venue.' },
    { title: 'Player Convenience', description: 'Changing rooms, washrooms, parking and basic support facilities on site.' },
  ],
  amenities: [
    'Pavilion Seating',
    'Parking',
    'Changing Rooms',
    'Washrooms',
    'Indoor Nets',
    'Flood Lights',
    'Team Warm-up Space',
    'Event-Friendly Layout',
  ],
  booking: {
    title: 'Ground Booking Options',
    description: 'We support regular practice slots, one-off bookings, tournament scheduling and special cricket events.',
    cards: [
      { label: 'Team Practice', value: 'Morning & Evening' },
      { label: 'Tournament Use', value: 'Half Day / Full Day' },
      { label: 'Bulk Events', value: 'Custom Packages' },
    ],
  },
  gallery: [
    { title: 'Main Ground', category: 'Ground', image: groundImg },
    { title: 'Aerial View', category: 'Ground', image: ground2Img },
    { title: 'Match View', category: 'Tournament', image: ground3Img },
    { title: 'Pavilion', category: 'Facilities', image: pavilionImg },
    { title: 'Indoor Nets', category: 'Practice', image: greenTurfImg },
    { title: 'Support Spaces', category: 'Facilities', image: yardImg },
  ],
  cta: {
    title: 'Need a dependable ground for your team?',
    accent: 'Book SOSA for practice or tournaments.',
    description: 'Talk to us for availability, timings and booking support.',
  },
}

export const aboutPage = {
  hero: {
    eyebrow: 'About SOSA',
    title: 'A Sports Venue Built To Raise Ratnagiri Cricket Standards',
    description:
      'SOSA was built to bring professional cricket infrastructure to Ratnagiri, with ground booking and tournament hosting as the clearest part of that vision.',
    backgroundImage: generatedAssets.aboutHero,
  },
  journey: {
    eyebrow: 'Our Story',
    title: 'Built with the vision of creating a ground players would travel for.',
    paragraphs: [
      'When SOSA began, the aim was simple: build a sports venue in Ratnagiri that felt serious, reliable and professionally maintained.',
      'Over time, teams, organizers, players and parents responded strongly to the ground itself. That is why SOSA today is understood first as a quality cricket ground, with academy coaching as an important but secondary part of the ecosystem.',
    ],
    points: [
      'Trusted for practice, tournaments and cricket events',
      'Designed to improve the sports infrastructure available in the region',
      'Built by founders committed to long-term sporting growth in Ratnagiri',
    ],
    action: { label: 'View Ground Details', href: '/ground' },
    video: generatedAssets.aboutStoryVideo,
  },
  stats: [
    { value: '150+', label: 'Booking Days', helper: 'Season demand' },
    { value: '10+', label: 'Tournaments', helper: 'Events hosted' },
    { value: '50+', label: 'Teams', helper: 'Ground users served' },
    { value: '1', label: 'Mission', helper: 'Raise local standards' },
  ],
  founders: [
    { name: 'Muzamil Sawant', role: 'Co-Founder', image: generatedAssets.founderOne },
    { name: 'Ketan Sawant', role: 'Co-Founder', image: generatedAssets.founderTwo },
  ],
  foundersStory:
    'SOSA was created by founders who wanted Ratnagiri to have a venue that could host better cricket, support player development and bring quality sports infrastructure closer to local talent.',
  philosophy: {
    title: 'Sports Beyond Business',
    body:
      'For SOSA, building a venue is not just a commercial decision. It is an investment in sporting culture, discipline and opportunity. The goal has always been to create a place where good cricket can happen consistently.',
    image: students2Img,
    button: { label: 'Explore Gallery', href: '/gallery' },
  },
  vision: {
    title: 'Infrastructure That Creates Opportunity',
    statement: 'Create better cricket environments so more players and teams from Ratnagiri can compete with confidence.',
    body:
      'The long-term vision is to keep improving the venue, support serious cricket activity and strengthen the sporting ecosystem around the region.',
  },
}

export const academyPage = {
  hero: {
    eyebrow: 'Academy',
    title: 'Structured Cricket Coaching For Player Development',
    description:
      'The academy page focuses only on training batches, coaching philosophy, timings and player development pathways.',
    backgroundImage: generatedAssets.academyHero,
    highlights: ['Fitness First', 'Skill Development', 'Individual Attention', 'Match Awareness'],
    sideFacts: ['Morning & evening batches', 'Indoor support', 'Structured coaching', 'Beginner to developing players'],
  },
  programs: sharedPrograms,
  philosophy: {
    title: 'Fitness is the foundation of good cricket',
    body:
      'Every academy session is designed to improve athletic movement, discipline, technical execution and confidence in match situations.',
    bullets: [
      'Dynamic warm-up and mobility',
      'Strength and conditioning',
      'Speed, agility and endurance drills',
      'Fielding routines and reaction work',
      'Batting, bowling and wicketkeeping development',
      'Match awareness and cricket decision-making',
    ],
    image: academyImg,
  },
  yearRound: {
    title: 'Year-round indoor-supported training',
    text: 'SOSA academy sessions continue through changing weather conditions with indoor practice support when required.',
    chips: ['Fitness First', 'Skill Progression', 'Safe Environment', 'Coaching Attention'],
  },
  timings: [
    { label: 'Morning Batch', value: '7:15 AM - 9:00 AM' },
    { label: 'Evening Batch', value: '5:00 PM - 7:30 PM' },
    { label: 'Weekly Holiday', value: 'One day every week' },
  ],
  perks: [
    'Professional coaching support',
    'Small-batch player attention',
    'Indoor nets and turf support',
    'Fitness-based training structure',
    'Skill development for batting, bowling and fielding',
    'Consistent routine for growing players',
  ],
  lifeGallery: [academyImg, academy2Img, studentsImg, students2Img, greenTurfImg],
  cta: {
    title: 'Looking for coaching instead of ground booking?',
    accent: 'Talk to us about academy admission.',
    primary: { label: 'Academy Enquiry', href: '/contact' },
    secondary: { label: 'View Programs', href: '/academy#programs' },
  },
}

export const facilitiesPage = {
  hero: {
    eyebrow: 'Facilities',
    title: 'Ground Support Facilities Built For Teams And Events',
    description:
      'SOSA facilities are designed to make ground bookings smoother for teams, organizers, players and visitors.',
    backgroundImage: generatedAssets.facilitiesHero,
    highlights: ['Ground Access', 'Indoor Nets', 'Pavilion Support', 'Player Comfort'],
  },
  facilities: [
    { id: 'ground', title: 'SOSA Cricket Ground', text: 'Professional venue for practice sessions, matches and tournaments.', image: groundImg },
    { title: 'Indoor Practice Nets', text: 'Support training and pre-match preparation with indoor net access.', image: greenTurfImg },
    { title: 'Changing Rooms', text: 'Clean changing areas for players and teams.', image: bedroomImg },
    { title: 'Player Comfort Area', text: 'Space that supports athletes before and after sessions.', image: comfortImg },
    { title: 'Pavilion Seating', text: 'Viewing and sitting area for teams, organizers and spectators.', image: pavilionImg },
    { title: 'Parking Space', text: 'Convenient access for teams and visitors.', image: yardImg },
    { title: 'Washrooms', text: 'Basic on-site convenience for players and guests.', image: washroomImg },
    { title: 'Food & Refreshments', text: 'Refreshment support for longer stays and match days.', image: facilitiesImg },
  ],
  futureFacilities: [
    'Expanded event hosting support',
    'Stronger player utility areas',
    'More spectator convenience',
    'Improved tournament operations',
  ],
}

export const galleryPage = {
  hero: {
    eyebrow: 'Gallery',
    title: 'SOSA Ground & Cricket Moments',
    subtitle: 'Ground, teams, practice and events',
    description: 'Explore ground views, match setups, practice activity and the atmosphere that makes SOSA stand out.',
    backgroundImage: generatedAssets.galleryHero,
  },
  filters: ['All', 'Ground', 'Practice', 'Tournament', 'Academy', 'Facilities'],
  items: [
    { category: 'Ground', title: 'Main Ground View', image: groundImg, className: 'md:col-span-1' },
    { category: 'Ground', title: 'Aerial Ground View', image: ground2Img, className: 'md:col-span-2' },
    { category: 'Facilities', title: 'Pavilion Experience', image: pavilionImg, className: 'md:col-span-1' },
    { category: 'Practice', title: 'Indoor Net Sessions', image: greenTurfImg, className: 'md:col-span-1' },
    { category: 'Tournament', title: 'Match Readiness', image: ground3Img, className: 'md:col-span-2' },
    { category: 'Academy', title: 'Player Development', image: academyImg, className: 'md:col-span-1' },
    { category: 'Practice', title: 'Coaching Session', image: studentsImg, className: 'md:col-span-1' },
    { category: 'Academy', title: 'Squad Training', image: students2Img, className: 'md:col-span-1' },
    { category: 'Facilities', title: 'Player Comfort', image: comfortImg, className: 'md:col-span-2' },
    { category: 'Facilities', title: 'Changing Rooms', image: bedroomImg, className: 'md:col-span-1' },
    { category: 'Facilities', title: 'Washroom Access', image: washroomImg, className: 'md:col-span-1' },
    { category: 'Facilities', title: 'Parking Space', image: yardImg, className: 'md:col-span-2' },
  ],
  stats: [
    { value: '150+', label: 'Ground Bookings' },
    { value: '10+', label: 'Tournaments' },
    { value: '50+', label: 'Teams Hosted' },
    { value: '500+', label: 'Players Reached' },
  ],
}

export const contactPage = {
  hero: {
    eyebrow: 'Contact Us',
    title: 'BOOK SOSA',
    subtitle: 'GROUND OR ACADEMY ENQUIRY',
    description:
      'Reach out for team practice bookings, tournament planning, academy admission or any support related to the venue.',
    backgroundImage: generatedAssets.contactHero,
  },
  contactInfo: [
    {
      icon: 'phone',
      title: 'Call Us',
      value: siteMeta.phoneDisplay,
      subtitle: 'Ground and academy enquiries',
    },
    {
      icon: 'mail',
      title: 'Email Us',
      value: siteMeta.email,
      subtitle: 'We will get back to you soon',
    },
    {
      icon: 'map',
      title: 'Visit Us',
      value: 'SOSA Cricket Academy',
      subtitle: 'Nachane, Ratnagiri, Maharashtra',
    },
    {
      icon: 'whatsapp',
      title: 'WhatsApp',
      value: siteMeta.phoneDisplay,
      subtitle: 'Quick help for bookings and questions',
    },
  ],
  officeHours: {
    title: 'Available Hours',
    value: 'Monday - Sunday | 6:00 AM - 10:00 PM',
  },
  locationInfo: {
    academy: 'SOSA Cricket Academy',
    address: 'Nachane, Ratnagiri - 415639',
    city: 'Maharashtra, India',
    distance: 'Easy to reach for local teams and visitors',
    landmark: 'Ratnagiri, Maharashtra',
    map: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d61060.658546784915!2d73.2875051!3d16.9602227!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea73cea56155cd%3A0xa55303765c724425!2sSawant%20Oasis%20Sports%20Arena%20%7C%20Top%20sport%20cricket%20ground%20%7C%20Sports%20ground%20near%20me%20%7C%20Best%20sport%20ground%20in%20ratnagiri%20%7C!5e0!3m2!1sen!2sin!4v1784987252862!5m2!1sen!2sin',
  },
  cta: {
    title: 'READY TO BOOK YOUR SLOT?',
    accent: 'Talk to SOSA today.',
    subtitle: 'Practice bookings, tournaments and academy enquiries are all handled from one place.',
  },
}

export const footerLinks = {
  quickLinks: navLinks,
  academy: [
    { label: 'Ground Booking', path: '/ground' },
    { label: 'Practice & Tournament Enquiry', path: '/contact' },
    { label: 'Academy Programs', path: '/academy#programs' },
    { label: 'Gallery', path: '/gallery' },
  ],
}
