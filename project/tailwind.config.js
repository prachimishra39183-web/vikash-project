/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#FAFAF7',
        'pale-blue': '#EEF5FF',
        lavender: '#F2EDFF',
        'soft-mint': '#E8FAF4',
        cobalt: '#4169F5',
        'cobalt-dark': '#2E52D9',
        'cobalt-soft': '#7A92F8',
        teal: '#13B8A6',
        'teal-dark': '#0E9A8C',
        orange: '#FF914D',
        'orange-dark': '#F0762E',
        navy: '#17233B',
        muted: '#637086',
        'muted-light': '#94A0B5',
      },
      fontFamily: {
        display: ['"Space Grotesk"', '"Sora"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 24px -8px rgba(23, 35, 59, 0.08)',
        'card': '0 8px 40px -12px rgba(23, 35, 59, 0.12)',
        'lift': '0 16px 56px -16px rgba(65, 105, 245, 0.22)',
        'inner-glow': 'inset 0 1px 0 0 rgba(255,255,255,0.8)',
      },
      borderRadius: {
        'xl2': '1.25rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
    },
  },
  plugins: [],
};
