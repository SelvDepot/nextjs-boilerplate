/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'bitcoin-orange': '#ff9900',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Roboto"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};