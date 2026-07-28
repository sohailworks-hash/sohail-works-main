/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          950: '#07080f',
          900: '#0b0c1b',
          850: '#0f1124',
          800: '#14162e',
          750: '#1a1d3a',
          700: '#222545',
        },
        cyan: {
          glow: '#00f2fe',
        },
        brand: {
          50: '#eff6ff',
          400: '#4facfe',
          500: '#2563eb',
          600: '#1d4ed8',
        },
      },
      boxShadow: {
        glow: '0 0 24px rgba(0, 242, 254, 0.25)',
        'glow-lg': '0 0 40px rgba(0, 242, 254, 0.35)',
        'glow-cyan': '0 8px 30px rgba(0, 242, 254, 0.3)',
        card: '0 10px 40px -12px rgba(0, 0, 0, 0.6)',
      },
      backgroundImage: {
        'grid-faint':
          'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '64px 64px',
      },
      keyframes: {
        floatY: {
          '0%, 100%': { transform: 'translateY(-4px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.85' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
        riseIn: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        spinSlow: {
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        floatY: 'floatY 3s ease-in-out infinite',
        pulseGlow: 'pulseGlow 5s ease-in-out infinite',
        shimmer: 'shimmer 6s linear infinite',
        riseIn: 'riseIn 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        spinSlow: 'spinSlow 24s linear infinite',
      },
    },
  },
  plugins: [],
};
