export type DemoProject = {
  id: string;
  title: string;
  category: string;
  description: string;
  url: string;
  /** emoji used as a lightweight, dependency-free banner glyph */
  emoji: string;
  /** gradient stops for the banner background */
  gradient: [string, string];
};

// The 13 live demo websites from the original site. Links are preserved exactly.
export const PORTFOLIO: DemoProject[] = [
  {
    id: 'iqra',
    title: 'IQRA Associates',
    category: 'Accounting',
    description: 'Smart accounting & GST filing website with service showcase and inquiry form.',
    url: 'https://iqra-associates.vercel.app/',
    emoji: '🧾',
    gradient: ['#1e3a5f', '#2d5a8c'],
  },
  {
    id: 'alveera',
    title: 'Alveera Enterprises',
    category: 'Restaurant',
    description: 'Luxury restaurant website with digital menu, gallery and table reservations.',
    url: 'https://alveeraenterprises.vercel.app/',
    emoji: '🍽️',
    gradient: ['#3a1e0f', '#7a3b12'],
  },
  {
    id: 'royal-palace',
    title: 'Royal Palace Hotel',
    category: 'Hotel',
    description: 'Royal luxury hotel website with room booking and amenities showcase.',
    url: 'https://royal-palace-xi.vercel.app/',
    emoji: '🏨',
    gradient: ['#2b1a3d', '#5c2a6b'],
  },
  {
    id: 'fresh-mart',
    title: 'Fresh Mart Medical',
    category: 'Pharmacy',
    description: 'Clean, trustworthy pharmacy website with product categories and prescription upload.',
    url: 'https://fresh-mart-medical.vercel.app/',
    emoji: '💊',
    gradient: ['#0f3d3a', '#1a6b63'],
  },
  {
    id: 'elite-gym',
    title: 'Elite Gym',
    category: 'Gym',
    description: 'Bold, high-energy fitness website with membership plans and trainer profiles.',
    url: 'https://elite-gym-lemon.vercel.app/',
    emoji: '💪',
    gradient: ['#3d0f0f', '#7a1a1a'],
  },
  {
    id: 'smile-care',
    title: 'Smile Care Dental Clinic',
    category: 'Dental',
    description: 'Calming dental clinic website with treatments, doctor profiles and booking form.',
    url: 'https://smile-care-dental-clinic-iota.vercel.app/',
    emoji: '🦷',
    gradient: ['#0f2d3d', '#1a5a7a'],
  },
  {
    id: 'prestige',
    title: 'Prestige Real Estate',
    category: 'Real Estate',
    description: 'Luxury property listing website with search, featured properties and agent profiles.',
    url: 'https://prestige-real-estate-phi.vercel.app/',
    emoji: '🏢',
    gradient: ['#2d2410', '#6b5a1a'],
  },
  {
    id: 'bright-future',
    title: 'Bright Future Public School',
    category: 'School',
    description: 'Warm, trustworthy school website with academics, admissions and campus gallery.',
    url: 'https://bright-future-school-tau.vercel.app/',
    emoji: '🎓',
    gradient: ['#0f1f3d', '#1a3a7a'],
  },
  {
    id: 'glow-lux',
    title: 'Glow Luxe Salon & Spa',
    category: 'Salon & Spa',
    description: 'Elegant salon website with service menu, packages and appointment booking.',
    url: 'https://glow-lux-salon-spa.vercel.app/',
    emoji: '💅',
    gradient: ['#3d0f2b', '#7a1a5c'],
  },
  {
    id: 'sharma',
    title: 'Sharma & Associates',
    category: 'Law Firm',
    description: 'Authoritative law firm website with practice areas and attorney profiles.',
    url: 'https://sharma-associates-consultant.vercel.app/',
    emoji: '⚖️',
    gradient: ['#1a1a2d', '#3d3d6b'],
  },
  {
    id: 'transport',
    title: 'Transport Agency',
    category: 'Transport',
    description: 'Reliable logistics & transport website with fleet details and quote requests.',
    url: 'https://transport-agency-sooty.vercel.app/',
    emoji: '🚚',
    gradient: ['#0f2d1f', '#1a6b3a'],
  },
  {
    id: 'sky-wings',
    title: 'Sky Wings Travel Agency',
    category: 'Travel',
    description: 'Vibrant travel agency website with tour packages and booking enquiry form.',
    url: 'https://sky-wings-travel-agency.vercel.app/',
    emoji: '✈️',
    gradient: ['#0f2b3d', '#1a6b8c'],
  },
  {
    id: 'ranthambore',
    title: 'Royal Ranthambore',
    category: 'Tourism',
    description: 'Safari & homestay website inspired by Ranthambore, with packages and gallery.',
    url: 'https://royal-ranthambore.vercel.app/',
    emoji: '🐯',
    gradient: ['#2d1a0f', '#7a4a1a'],
  },
];
