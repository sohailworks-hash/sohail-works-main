export const STUDIO = {
  name: 'Sohail Studio',
  city: 'Sawai Madhopur, Rajasthan, India',
  phoneDisplay: '+91 89553 77472',
  phoneRaw: '+918955377472',
  whatsapp: '918955377472',
  email: 'hello@sohailstudio.com',
  year: new Date().getFullYear(),
};

export type NavItem = { label: string; href: string };

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];
