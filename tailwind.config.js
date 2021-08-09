module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'blue-haze': '#c2c2d6',
        'corn-flower-blue': '#47476b',
        'orange-peel': '#f49e00',
      },
      fontFamily: {
        'digital-7': ["'Digital 7'"]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
