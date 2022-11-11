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
    extend: {
      transitionTimingFunction: {
        DEFAULT: 'ease-in-out',
      },
      transitionDuration: {
        DEFAULT: '200ms',
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, theme }) {
      addBase({
        h2: {
          fontSize: '1.75rem',
          fontWeight: 'bold',
          textAlign: 'center',
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
        '.fill-hover': {
          fill: theme('colors.viola.700'),
          transition: 'fill .2s ease-in-out',
          '&:disabled': {
            opacity: '0.3',
            pointerEvents: 'none',
          },
          '@media (hover: hover)': {
            '&:hover': {
              fill: theme('colors.viola.600'),
            },
          },
          '@media screen and (max-width: 430px)': {
            transitionProperty: 'none',
            '&:active': {
              fill: theme('colors.viola.600'),
            },
          },
        },
      })
    }),
  ],
}
