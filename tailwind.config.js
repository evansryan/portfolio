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
      brand_offwhite: '#F0F0F0',
      brand_darkgreen: '#135A1D',
      brand_lightgreen: '#20BB68',
      brand_orange: '#DC7C23',
      brand_gray: '#444444'
    }
  },
  plugins: [],
}

