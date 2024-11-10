/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        white: '#FDFDFD',
        gelo: '#DBEDF3',
        black: '#171717',
        salmao: '#F73859',
        azulescuro: '#283149',
        azulcinzento: '#404B69',
      }
    },
  },
  plugins: [],
};
