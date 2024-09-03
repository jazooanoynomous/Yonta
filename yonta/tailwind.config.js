/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xs: '475px',
      ...defaultTheme.screens,
    },
    extend: {
      height: {
        100: '30rem',
      },
      colors: {
        main: '#183253',
        subMain: '#06152B',
        text: '#F2FAF8',
        border: '#E8EBEE',
        textGray: '#A0A0A0',
        dry: '#F8F9FA',
        greyed: '#F3F5F7',
        red:'#FF8F6B',
        green:'#5B93FF',
        bluetext:'#5B93FF',
        pinktext:'#FF8F6B',
        textgreen:'#2EDB72',
        textred:'#FB5458',
        blue:'#5A4BDA'


      },
    },
  },
  plugins: [],
};
