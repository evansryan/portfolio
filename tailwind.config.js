/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        notable: ["Notable", "sans-serif"]
      }
    },
    colors: {
      lightpeach: '#FFCDb2',
      darkpeach: '#FFB4A2',
      lightred: '#E5989B',
      darkred: '#B5838D',
      darkgrey: '#6D6875'
    }
  },
  plugins: [],
}

