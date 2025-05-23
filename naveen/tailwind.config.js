// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFD700', // Ensure this is defined for your button and text
      },
      animation: {
        'gradient-xy': 'gradient-xy 4s ease infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shine': 'shine 1.5s infinite',
        'mobile-menu-open': 'fade-in-0 0.3s ease-out forwards, slide-in-from-top-4 0.3s ease-out forwards',
      },
      keyframes: {
        'gradient-xy': {
          '0%, 100%': { 'background-position': 'left top' },
          '50%': { 'background-position': 'right bottom' },
        },
        'fade-in-0': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in-from-top-4': {
          '0%': { transform: 'translateY(-16px)' },
          '100%': { transform: 'translateY(0)' },
        },
        'shine': {
          'from': { 'transform': 'translateX(-100%)' },
          'to': { 'transform': 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
}