/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e3f4fc',
          100: '#b8e3f8',
          200: '#8ad2f3',
          300: '#5cc1ef',
          400: '#2eb0ea',
          500: '#009fe6',
          600: '#0095de',
          700: '#0077b2',
          800: '#005985',
          900: '#003b59',
        },
        secondary: {
          50: '#fff3e3',
          100: '#ffe0b8',
          200: '#ffcc8a',
          300: '#ffb85c',
          400: '#ffa42e',
          500: '#ff9000',
          600: '#f48422',
          700: '#c36a1b',
          800: '#925014',
          900: '#61360d',
        },
        accent: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
} 