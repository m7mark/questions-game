/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      dark: '#151419',
      viola: {
        600: '#605c70',
        700: '#484554',
        800: '#302e38',
      },
    },
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
          backgroundColor: theme('colors.viola.800'),
          color: theme('colors.white'),
          fontSize: theme('fontSize.xl'),
          transition: 'background-color .2s ease-in-out',
          '&:disabled': {
            opacity: '0.3',
            pointerEvents: 'none',
          },
          '@media (hover: hover)': {
            '&:hover': {
              backgroundColor: theme('colors.viola.700'),
            },
          },
          '@media screen and (max-width: 430px)': {
            transitionProperty: 'none',
            '&:active': {
              backgroundColor: theme('colors.viola.700'),
            },
          },
        },
      })
    }),
  ],
}
