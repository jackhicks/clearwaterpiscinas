const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {},
    fontFamily: {
      sans: 'Spartan',
      serif: 'Merriweather',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      blue: '#24549b',
      gray: {
        100: 'rgba(36,39,49,.4)',
      },
      orange: {
        100: '#FF5544',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
