module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'hn-orange': '#ff6600'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
