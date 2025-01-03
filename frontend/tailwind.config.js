/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FFCC00', // Cyberpunk yellow
        'primary-dark': '#E6B800',
        'primary-light': '#FFD633',
      },
      fontFamily: {
        sans: ['Rajdhani', 'sans-serif'],
        display: ['Orbitron', 'sans-serif'],
      }
    },
  },
  plugins: [],
};