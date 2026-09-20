/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        rima: {
          green:     '#0a4a2e',
          'green-mid': '#0d5c38',
          'green-light': '#1a7a4a',
          'green-bright': '#22a05a',
          gold:      '#c9a227',
          'gold-light': '#e8be45',
          'gold-bright': '#f5d060',
          'gold-pale': '#fdf0c0',
          dark:      '#061c12',
          cream:     '#faf7ee',
        }
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body:    ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-up':     'fadeUp 0.7s ease forwards',
        'fade-in':     'fadeIn 0.6s ease forwards',
        'shimmer':     'shimmer 2.5s infinite',
        'float':       'float 4s ease-in-out infinite',
        'pulse-gold':  'pulseGold 2s ease-in-out infinite',
        'ticker':      'ticker 40s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: 0 },
          '100%': { opacity: 1 },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-12px)' },
        },
        pulseGold: {
          '0%,100%': { boxShadow: '0 0 0 0 rgba(201,162,39,0.4)' },
          '50%':     { boxShadow: '0 0 0 12px rgba(201,162,39,0)' },
        },
        ticker: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backgroundImage: {
        'hero-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a227' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        'gold-gradient': 'linear-gradient(135deg, #c9a227 0%, #f5d060 50%, #c9a227 100%)',
        'green-gradient': 'linear-gradient(135deg, #061c12 0%, #0a4a2e 50%, #0d5c38 100%)',
      },
    },
  },
  plugins: [],
}
