/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#030305',
        accent: '#8a63f8',
        'accent-hover': '#9c7afa',
        'accent-deep': '#5c43fa',
        'accent-blue': '#5a8cff',
        success: '#00ff88',
        secondary: '#d5d5d5',
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', '-apple-system', 'sans-serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        wheelScroll: {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(15px)' },
        },
        statusPulse: {
          '0%': { opacity: '0.8', transform: 'scale(1)' },
          '100%': { opacity: '0', transform: 'scale(2.5)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        wheelScroll: 'wheelScroll 2s infinite',
        statusPulse: 'statusPulse 2s infinite',
        fadeIn: 'fadeIn 1s ease forwards',
      },
    },
  },
  plugins: [],
};
