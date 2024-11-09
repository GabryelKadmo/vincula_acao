// tailwind.config.js
const { colors } = require('./src/styles/colors');
const { fonts } = require('./src/styles/fontsfamily');  

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors,
      fontFamily: {
        'chilanka': ['Chilanka-Regular', 'sans-serif'],
        'chilanka-italic': ['Chilanka-Italic', 'sans-serif'], 
        'montserrat': ['Montserrat-Regular', 'sans-serif'],
        ...fonts,  
      },
    },
  },
  plugins: [],
};
