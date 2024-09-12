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
        text: '#515B6B',
        border: '#E8EBEE',
        textGray: '#A0A0A0',
        dry: '#F8F9FA',
        greyed: '#F3F5F7',
        red:'#FF8F6B',
        green:'#50E189',
        bluetext:'#5B93FF',
        pinktext:'#FF8F6B',
        textgreen:'#2EDB72',
        textred:'#FB5458',
        bluetext:'#5D4CFF',
        menubg:'#F3F2FF',
        greytext:'#838A95',
        blue:'#5A4BDA',
        blacktext:'#06152B',
        lightgray:'#B5B7C0',
        backgroundgray:'#F1F4FA',
        tableheadtext:'#4B4F55',
        buttonblue:'#3A36DB',
        lightred:"#AA170C",
        lightgraybg:'#F9FBFF'



      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          /* For Webkit-based browsers (Chrome, Safari) */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          /* For IE and Edge */
          '-ms-overflow-style': 'none',
          /* For Firefox */
          'scrollbar-width': 'none',
        },
      });
    },
  ],
};
