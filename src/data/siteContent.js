import academyImg from '../assets/images/home/Academy.jpeg'
import bedroomImg from '../assets/images/home/Bedroom.jpeg'
import comfortImg from '../assets/images/home/Comfort.jpeg'
import facilitiesImg from '../assets/images/home/Facilities.jpeg'
import greenTurfImg from '../assets/images/home/Green Turf.jpeg'
import groundImg from '../assets/images/home/Ground.jpeg'
import ground2Img from '../assets/images/home/Ground2.jpeg'
import ground3Img from '../assets/images/home/Ground3.jpeg'
import pavilionImg from '../assets/images/home/Pavilion.jpeg'
import studentsImg from '../assets/images/home/Students.jpeg'
import students2Img from '../assets/images/home/Students2.jpeg'
import washroomImg from '../assets/images/home/Washroom.jpeg'
import yardImg from '../assets/images/home/Yard.jpeg'

const HeroImg = (prompt, imageSize = 'landscape_16_9') =>
  `src/assets/images/home/boyplay.png`

const aboutHero = (prompt, imageSize = 'landscape_16_9') =>
  `src/assets/images/home/Students.jpeg`

const academyHero = (prompt, imageSize = 'landscape_16_9') =>
  `src/assets/images/home/Academy2.png`

const facilitiesHero = (prompt, imageSize = 'landscape_16_9') =>
  `src/assets/images/home/Nets.png`

const galleryHero = (prompt, imageSize = 'landscape_16_9') =>
  `src/assets/images/home/Students2.jpeg`

const contactHero = (prompt, imageSize = 'landscape_16_9') =>
  `src/assets/images/home/ground.jpeg`

const founderOne = (prompt, imageSize = 'landscape_16_9') =>
  `src/assets/images/about/Coach1.jpeg`

const founderTwo = (prompt, imageSize = 'landscape_16_9') =>
  `src/assets/images/about/Coach2.jpeg`

const generatedImage = (prompt, imageSize = 'landscape_16_9') =>
  ``

export const siteMeta = {
  phoneDisplay: '+91 12345 67890',
  phoneLink: '+911234567890',
  whatsappLink: '911234567890',
  email: 'info@sosacricketacademy.com',
  location: 'Ratnagiri',
  fullAddress: 'SOSA Cricket Academy, Nachane, Ratnagiri - 415639, Maharashtra',
  admissionsText: 'Admissions Open 2026 | Limited Seats | Enrol Now',
}

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Academy', path: '/academy' },
  { label: 'Ground', path: '/ground' },
  { label: 'Facilities', path: '/facilities' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
]

export const socialLinks = [
  { label: 'Facebook', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'YouTube', href: '#' },
]

export const generatedAssets = {
  homeHero: HeroImg(
    'cinematic indian cricket batsman playing an explosive front foot shot under dramatic floodlights, stadium dust, golden sunset haze, premium sports campaign photography, realistic, ultra detailed',
  ),
  aboutHero: aboutHero(
    'luxury cricket academy pavilion beside a lush green cricket ground in coastal india, cinematic evening light, premium architecture photography, realistic, detailed sky',
  ),
  academyHero: academyHero(
    'young indian cricketer practicing batting inside an elite indoor cricket academy net facility, dramatic green lights, premium sports editorial photography, realistic',
  ),
  facilitiesHero: facilitiesHero(
    'modern cricket academy building illuminated by stadium floodlights at night, lush outfield, premium sports venue photography, realistic, cinematic',
  ),
  galleryHero: galleryHero(
    'professional indian batsman in full white cricket gear playing a shot inside an indoor practice arena, dramatic spotlight, premium sports photography, realistic',
  ), 
  contactHero: contactHero(
    'aerial view of a professional cricket ground in ratnagiri, india, with lush green outfield and pavilion, premium drone photography, realistic',
  ),
  founderOne: founderOne(
    'professional portrait of an indian sports academy founder in black shirt, confident pose, premium studio lighting, realistic, neutral background',
    'portrait_4_3',
  ),
  founderTwo: founderTwo(
    'professional portrait of an indian sports academy founder in white shirt, confident pose, premium studio lighting, realistic, neutral background',
    'portrait_4_3',
  ),
  food: generatedImage(
    'healthy indian sports meal tray with balanced nutrition, premium food photography, realistic',
    'landscape_4_3',
  ),
  gym: generatedImage(
    'modern high end functional training gym for athletes, dark interiors, dramatic lights, premium interior photography, realistic',
    'landscape_4_3',
  ),
  firstAid: generatedImage(
    'professional red first aid sports emergency kit on dark studio background, premium product photography, realistic',
    'landscape_4_3',
  ),
  trophyWall: generatedImage(
    'row of golden cricket trophies on a dark green stage, premium event photography, realistic, dramatic highlights',
    'landscape_4_3',
  ),
  teamHuddle: generatedImage(
    'youth cricket academy team huddle outdoors, emotional team spirit, premium sports documentary photography, realistic',
    'landscape_4_3',
  ),
  mapCard: generatedImage(
    'clean top down city map with highlighted location pin for cricket academy in ratnagiri, modern minimal map style, realistic texture',
    'landscape_16_9',
  ),
  ctaBatsman: generatedImage(
    'cricket batsman preparing for a shot under floodlights, dramatic wide banner composition, premium sports advertising photography, realistic',
    'landscape_16_9',
  ),
  ctaTeam: generatedImage(
    'cricket team standing together at practice during sunset, wide cinematic banner composition, premium sports photography, realistic',
    'landscape_16_9',
  ),
  galleryGroup: generatedImage(
    'youth cricket academy team portrait in training uniforms, premium sports photography, realistic',
    'landscape_4_3',
  ),
  galleryAchievement: generatedImage(
    'multiple gold trophies and medals displayed proudly for a cricket academy, premium sports award photography, realistic',
    'landscape_4_3',
  ),
}

export const sharedPrograms = [
  {
    id: 'group-a',
    eyebrow: 'Group A',
    title: 'SOSA Strikers',
    duration: '2.5 Hours per Session',
    price: '₹2,500',
    note: 'High-intensity training with advanced skills, match awareness and discipline.',
    button: 'Join Group A',
    featured: false,
  },
  {
    id: 'group-b',
    eyebrow: 'Group B',
    title: 'SOSA Rising Stars',
    duration: '1.5 Hours per Session',
    price: '₹1,500',
    note: 'Focused development for young players building strong all-round fundamentals.',
    button: 'Join Group B',
    featured: false,
  },
  {
    id: 'weekend',
    eyebrow: 'Weekend Batch',
    title: 'For Players Attending Weekends Only',
    duration: 'Weekend Only',
    price: '₹1,500',
    note: 'Ideal for students and players balancing school, travel and competitive practice.',
    button: 'Join Weekend Batch',
    featured: true,
  },
]

export const homePage = {
  hero: {
    eyebrow: 'Train Hard. Dream Big.',
    title: 'Represent India',
    description:
      'World-class cricket coaching in Ratnagiri with focused training, fitness-first development and year-round indoor practice.',
    backgroundImage: generatedAssets.homeHero,
    actions: [
      { label: 'Join Academy', href: '/academy#programs', variant: 'primary' },
      { label: 'Book Ground', href: '/facilities#ground', variant: 'secondary' },
    ],
    highlightStats: [
      { value: '150+', label: 'Booking Days' },
      { value: '500+', label: 'Players Trained' },
      { value: '2', label: 'Practice Nets' },
    ],
  },
  stats: [
    { value: '150+', label: 'Booking Days', helper: 'Last season success' },
    { value: '500+', label: 'Players Trained', helper: 'Growing every season' },
    { value: '365', label: 'Days Training', helper: 'Year-round sessions' },
    { value: '2', label: 'Professional Nets', helper: 'Indoor practice spaces' },
  ],
  reasons: [
    { title: 'Fitness First', description: 'Every session starts by building athletic foundations for long-term growth.' },
    { title: 'Professional Coaching', description: 'Structured coaching plans with focused feedback and match intelligence.' },
    { title: 'Leather Ball Practice', description: 'Consistent exposure to real-game conditions for stronger confidence.' },
    { title: 'Indoor Facility', description: 'Monsoon never stops training thanks to our indoor practice infrastructure.' },
    { title: 'Match Awareness', description: 'Players improve decision making, tactical reading and game temperament.' },
    { title: 'Individual Attention', description: 'Small-group coaching ensures every player gets corrective guidance.' },
  ],
  aboutPreview: {
    image: ground2Img,
    title: 'About SOSA',
    heading: 'Building complete athletes, not just cricketers.',
    description:
      'SOSA Cricket Academy in Ratnagiri combines structured coaching, modern facilities and a strong culture of discipline. Our mission is to help players grow in fitness, skills, confidence and competitive mindset.',
    points: [
      'Indoor cricket academy for uninterrupted monsoon training',
      'Morning and evening batches for flexible schedules',
      'Focused development across batting, bowling, fielding and wicketkeeping',
    ],
    action: { label: 'Know More About Us', href: '/about' },
  },
  methodology: [
    { title: 'Warm Up', subtitle: 'Mobility & activation', icon: 'warmup' },
    { title: 'Fitness & Conditioning', subtitle: 'Strength and stamina', icon: 'fitness' },
    { title: 'Fielding Drills', subtitle: 'Reaction and control', icon: 'fielding' },
    { title: 'Batting Practice', subtitle: 'Technique and timing', icon: 'batting' },
    { title: 'Bowling Drills', subtitle: 'Rhythm and accuracy', icon: 'bowling' },
    { title: 'Match Practice', subtitle: 'Game scenario learning', icon: 'match' },
    { title: 'Performance Analysis', subtitle: 'Track and improve', icon: 'analysis' },
  ],
  galleryPreview: {
    filters: ['All', 'Practice', 'Matches', 'Events'],
    items: [
      { category: 'Practice', image: academyImg, title: 'Indoor Net Sessions' },
      { category: 'Matches', image: ground3Img, title: 'Floodlit Match Practice' },
      { category: 'Practice', image: studentsImg, title: 'Coaching Group Session' },
      { category: 'Events', image: generatedAssets.galleryGroup, title: 'Academy Team Moments' },
      { category: 'Practice', image: greenTurfImg, title: 'Focused Skill Drills' },
      { category: 'Matches', image: groundImg, title: 'Ground Readiness' },
    ],
  },
  testimonials: [
    {
      name: 'Aryan P.',
      role: 'Parent of Player',
      quote:
        'SOSA Academy has transformed my son’s discipline and confidence. The structure, coaching quality and facilities are far beyond what we expected in Ratnagiri.',
    },
    {
      name: 'Neha S.',
      role: 'Student Cricketer',
      quote:
        'I love the way every session feels purposeful. We work on fitness, skills and game awareness together, which makes training far more effective.',
    },
    {
      name: 'Ravi K.',
      role: 'Young All-rounder',
      quote:
        'The indoor nets and personal attention helped me improve quickly. I feel more prepared during matches and trials now.',
    },
  ],
  events: [
    { title: 'SOSA Cricket Camp 2026', date: '15 May - 30 May 2026', note: 'Registration open now' },
    { title: 'Selection Trials', date: '10 June 2026', note: 'Limited seats available' },
    { title: 'Inter Academy Tournament', date: '20 July 2026', note: 'Register your team' },
  ],
  contact: {
    title: 'Get in Touch',
    text: 'Have questions about admissions, batches or facility bookings? Reach out and our team will help you choose the right option.',
    mapImage: generatedAssets.mapCard,
  },
}

export const aboutPage = {
  hero: {
    eyebrow: 'About SOSA',
    title: 'Building Champions. Building Character.',
    description:
      'SOSA was created to provide world-class sports infrastructure and high-quality coaching to athletes from Ratnagiri and nearby regions.',
    backgroundImage: generatedAssets.aboutHero,
  },
  journey: {
    title: 'A Journey of Passion, Persistence & Purpose',
    paragraphs: [
      'When the vision for SOSA Cricket Ground first took shape, many believed players would never travel so far for top-class practice.',
      'That belief changed once athletes experienced the quality of our facilities, our service standards and our long-term commitment to player growth.',
    ],
    points: [
      '150+ booking days in the last season',
      'Demand continues to rise across every batch',
      'Trusted by players, parents, teams and academies',
    ],
    action: { label: 'Explore Our Facilities', href: '/facilities' },
  },
  stats: [
    { value: '150+', label: 'Booking Days', helper: 'In last season' },
    { value: '500+', label: 'Players Trained', helper: 'And growing' },
    { value: '10+', label: 'Tournaments', helper: 'Hosted every year' },
    { value: '1', label: 'Dream', helper: 'Represent India' },
  ],
  founders: [
    {
      name: 'Muzamil Sawant',
      role: 'Co-Founder',
      image: generatedAssets.founderOne,
    },
    {
      name: 'Ketan Sawant',
      role: 'Co-Founder',
      image: generatedAssets.founderTwo,
    },
  ],
  foundersStory:
    'SOSA was founded by two college friends with a shared passion for sports and a strong commitment to creating opportunities for aspiring athletes. Their international exposure helped shape the vision of bringing premium sports experiences to Ratnagiri.',
  philosophy: {
    title: 'Sports Beyond Business',
    body:
      'At SOSA, sports are more than a business. They are a responsibility. We believe sports build discipline, confidence, teamwork and character, especially in young athletes learning how to compete with purpose.',
    image: students2Img,
    button: { label: 'Read Our Story', href: '/gallery' },
  },
  vision: {
    title: 'One Dream. One Nation.',
    statement: 'To nurture sportspersons from Ratnagiri who can represent India with pride.',
    body:
      'Successful athletes grow with support from both coaches and families. That is why SOSA aims to educate parents as well, creating an environment where talent can thrive over time.',
  },
}

export const academyPage = {
  hero: {
    eyebrow: 'Home / Academy',
    title: 'SOSA Cricket Academy',
    description:
      'At SOSA, we do not just train cricketers. We build complete athletes through fitness, technical coaching and disciplined practice.',
    backgroundImage: generatedAssets.academyHero,
    highlights: ['Fitness First', 'Skill Development', 'Individual Attention', 'Match Awareness'],
    sideFacts: ['2 Practice Nets', 'Indoor Training', 'Year-Round Sessions', 'Professional Coaching'],
  },
  programs: sharedPrograms,
  philosophy: {
    title: 'Fitness is the foundation of great cricket',
    body:
      'Every training session at SOSA is designed to build complete athletes. Players improve movement quality, strength, agility, endurance and cricket-specific skills in one structured environment.',
    bullets: [
      'Dynamic warm-up and mobility exercises',
      'Strength and conditioning',
      'Speed, agility and endurance work',
      'Fielding drills and reaction training',
      'Shadow practice and match awareness',
      'Batting, bowling and wicketkeeping development',
    ],
    image: studentsImg,
  },
  yearRound: {
    title: 'Year-round training',
    text: 'SOSA is an indoor cricket academy, allowing uninterrupted training through the year, including the monsoon season.',
    chips: ['Rain or Shine', '365 Days', 'Safe & Secure', 'No Interruptions'],
  },
  timings: [
    { label: 'Morning Batch', value: '7:15 AM - 9:00 AM' },
    { label: 'Evening Batch', value: '5:00 PM - 7:30 PM' },
    { label: 'Weekly Holiday', value: 'One day every week' },
  ],
  perks: [
    'Professional & experienced coaches',
    'High quality turf and nets',
    'New leather cricket balls',
    'Modern coaching equipment',
    'Fitness and strength training',
    'Personalized attention',
  ],
  lifeGallery: [academyImg, students2Img, studentsImg, greenTurfImg, generatedAssets.galleryGroup],
}

export const facilitiesPage = {
  hero: {
    eyebrow: 'Our Facilities',
    title: 'World-Class Facilities Built for Champions',
    description:
      'At SOSA, every space is designed to support serious training, player comfort and a high-quality sports experience for athletes and families.',
    backgroundImage: generatedAssets.facilitiesHero,
    highlights: ['Premium Infrastructure', 'Safe & Secure Environment', 'Well Maintained Facilities', 'Player Comfort First'],
  },
  facilities: [
    {
      id: 'ground',
      title: 'SOSA Cricket Ground',
      text: '67-yard professional ground with top-quality pitch, outfield and pavilion seating.',
      image: groundImg,
    },
    {
      title: 'Indoor Practice Nets',
      text: 'Two well-maintained indoor practice nets for uninterrupted year-round training.',
      image: greenTurfImg,
    },
    {
      title: 'Changing Rooms',
      text: 'Spacious and clean changing rooms with lockers, showers and match-day convenience.',
      image: bedroomImg,
    },
    {
      title: 'Fitness & Gym',
      text: 'Strength and conditioning area equipped for movement, power and endurance work.',
      image: generatedAssets.gym,
    },
    {
      title: 'Flood Lights',
      text: 'Well-lit playing conditions for practice sessions and evening matches.',
      image: facilitiesImg,
    },
    {
      title: 'Parking Space',
      text: 'Convenient parking for players, parents, teams and academy visitors.',
      image: yardImg,
    },
    {
      title: 'Food & Refreshments',
      text: 'Nutritious meals and refreshments for players and academy guests.',
      image: generatedAssets.food,
    },
    {
      title: 'First Aid Support',
      text: 'Immediate support and basic medical readiness for player safety at all times.',
      image: generatedAssets.firstAid,
    },
  ],
  futureFacilities: [
    '8-Court Badminton Complex',
    'Olympic-Size Swimming Pool',
    'Multipurpose Indoor Hall',
    'Indoor Games & Recreation',
  ],
}

export const galleryPage = {
  hero: {
    eyebrow: 'Home / Gallery',
    title: 'Gallery',
    subtitle: 'Moments that inspire',
    description: 'Explore moments of practice, teamwork, progress and celebration at SOSA Cricket Academy.',
    backgroundImage: generatedAssets.galleryHero,
  },
  filters: ['All', 'Practice', 'Matches', 'Events', 'Academy Life', 'Ground', 'Achievements'],
  items: [
    { category: 'Practice', title: 'Focused Technique Work', image: academyImg, className: 'md:col-span-1' },
    { category: 'Ground', title: 'Aerial Ground View', image: ground2Img, className: 'md:col-span-2' },
    { category: 'Academy Life', title: 'Strength Zone', image: generatedAssets.gym, className: 'md:col-span-1' },
    { category: 'Events', title: 'Team Bonding', image: generatedAssets.galleryGroup, className: 'md:col-span-1' },
    { category: 'Matches', title: 'Floodlit Match Readiness', image: facilitiesImg, className: 'md:col-span-2' },
    { category: 'Academy Life', title: 'Squad Portrait', image: students2Img, className: 'md:col-span-1' },
    { category: 'Practice', title: 'Net Battle', image: greenTurfImg, className: 'md:col-span-1' },
    { category: 'Events', title: 'Coach Interaction', image: studentsImg, className: 'md:col-span-1' },
    { category: 'Academy Life', title: 'Training Huddle', image: generatedAssets.teamHuddle, className: 'md:col-span-2' },
    { category: 'Practice', title: 'Agility Session', image: comfortImg, className: 'md:col-span-1' },
    { category: 'Ground', title: 'Changing Room Experience', image: washroomImg, className: 'md:col-span-1' },
    { category: 'Ground', title: 'Night Ground Atmosphere', image: ground3Img, className: 'md:col-span-2' },
    { category: 'Achievements', title: 'Trophy Collection', image: generatedAssets.galleryAchievement, className: 'md:col-span-1' },
  ],
  stats: [
    { value: '500+', label: 'Photos' },
    { value: '80+', label: 'Videos' },
    { value: '150+', label: 'Events Covered' },
    { value: '500+', label: 'Happy Players' },
  ],
}

export const footerLinks = {
  quickLinks: navLinks,
  academy: [
    { label: 'Programs', path: '/academy#programs' },
    { label: 'Training Timings', path: '/academy#timings' },
    { label: 'Coaching Philosophy', path: '/academy#philosophy' },
    { label: 'Facilities', path: '/facilities' },
  ],
}
