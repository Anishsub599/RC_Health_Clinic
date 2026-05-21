/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          500: '#1e6091',
          600: '#16507a',
          700: '#0f3d5f',
          800: '#0a3052',
          900: '#072138'
        },
        accent: {
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488'
        },
        gold: {
          400: '#fbbf24',
          500: '#f59e0b'
        }
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Poppins', 'sans-serif']
      },
      boxShadow: {
        soft: '0 10px 30px -10px rgba(10, 48, 82, 0.25)',
        card: '0 6px 24px -6px rgba(15, 61, 95, 0.18)'
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slow-zoom': 'slowZoom 8s ease-in-out infinite alternate'
      },
      keyframes: {
        fadeIn: { '0%': { opacity: 0, transform: 'translateY(10px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } },
        slowZoom: { '0%': { transform: 'scale(1)' }, '100%': { transform: 'scale(1.08)' } }
      }
    }
  },
  plugins: []
}
