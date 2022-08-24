/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Karla': ['Karla', 'sans-serif'],
        'Inter': ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}
