/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addBase, addComponents, theme }) {
      addBase({
        h2: {
          fontSize: theme('fontSize.2xl'),
          fontWeight: 'bold',
          textAlign: 'center',
          paddingRight: '0.5rem',
          paddingLeft: '0.5rem',
          color: theme('colors.white'),
        },
      })
      addComponents({
        '.btn': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#302e38',
          color: theme('colors.white'),
          fontSize: theme('fontSize.xl'),
          transition: 'background-color .2s ease-in-out',
          '@media (hover: hover)': {
            '&:hover': {
              backgroundColor: '#484554',
            },
          },
          '@media screen and (max-width: 430px)': {
            transitionProperty: 'none',
            '&:active': {
              backgroundColor: '#484554',
            },
          },
        },
      })
    }),
  ],
}
