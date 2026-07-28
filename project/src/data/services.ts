import {
  Code2,
  Palette,
  ShoppingCart,
  Search,
  Smartphone,
  Zap,
  type LucideIcon,
} from 'lucide-react';

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
};

export const SERVICES: Service[] = [
  {
    id: 'web-dev',
    title: 'Web Development',
    description:
      'Hand-coded, lightning-fast websites built with modern frameworks — clean code, SEO-ready and easy to maintain.',
    icon: Code2,
    features: ['React & Next.js builds', 'Pixel-perfect markup', 'Clean, documented code'],
  },
  {
    id: 'ui-design',
    title: 'UI / UX Design',
    description:
      'Premium, conversion-focused interfaces designed around your brand — from wireframe to polished final look.',
    icon: Palette,
    features: ['Brand-matched visuals', 'Conversion layouts', 'Design systems'],
  },
  {
    id: 'ecommerce',
    title: 'E-commerce',
    description:
      'Sell online with secure checkout, product catalogs and inventory — built to convert visitors into customers.',
    icon: ShoppingCart,
    features: ['Secure checkout', 'Product catalogs', 'Order management'],
  },
  {
    id: 'seo',
    title: 'SEO & Performance',
    description:
      'Rank higher and load faster — technical SEO, structured data and Core Web Vitals tuning that actually moves the needle.',
    icon: Search,
    features: ['Technical SEO', 'Core Web Vitals', 'Structured data'],
  },
  {
    id: 'responsive',
    title: 'Mobile Responsive',
    description:
      'Every site looks flawless on phones, tablets and desktops — fluid layouts tested across real devices and breakpoints.',
    icon: Smartphone,
    features: ['All breakpoints', 'Touch-optimised', 'Real-device tested'],
  },
  {
    id: 'speed',
    title: 'Speed Optimization',
    description:
      'Sub-second load times through image optimisation, lazy loading and code-splitting — fast sites rank and convert better.',
    icon: Zap,
    features: ['Lazy loading', 'Code-splitting', 'Image optimisation'],
  },
];
