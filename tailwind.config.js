module.exports = {
  content: [
    "./src/**/*.{js, jsx, ts, tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'primaryColor': '#C4C4C4',
      'darkPrimary': '#2F2E41',
      'overlay': '#112031',
    },
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'ui-sans-serif'],
      },
    },
  },
  plugins: [],
}
