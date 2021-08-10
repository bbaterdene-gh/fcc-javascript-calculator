module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'blue-haze': '#c2c2d6',
        'corn-flower-blue': '#47476b',
        'orange-peel': '#f49e00',
        'medium-carmine': '#ac3939',
        'dim-gray': '#666666',
        'prussian-blue': '#004466',
        'charcoal': '#4d4d4d',
      },
      fontFamily: {
        'digital-7': ["'Digital 7'"],
        'share-tech-mono': ["'Share Tech Mono'", "monospace"]
      },
      spacing: {
        '0.25': '0.0625rem',
      },
      outline: {
        grey: '0.05em solid grey',
      },
    },
  },
  variants: {
    extend: {
      outline: ['hover',],
    },
  },
  plugins: [],
}
