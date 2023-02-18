/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')
const bgLight = '#fafafa'
const bgDark = '#151419'

module.exports = {
  darkMode: 'class',
  content: ['./pages/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  theme: {
    colors: {
      bgLight,
      bgDark,
      transparent: 'transparent',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      dark: '#151419',
      viola: {
        300: '#ea71ff',
        400: '#9325A6',
        500: '#7f1092',
        600: '#605c70',
        700: '#484554',
        800: '#302e38',
        900: '#25222a',
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
    plugin(({ addBase, addComponents, addUtilities, theme }) => {
      addBase({
        h2: {
          fontSize: '1.75rem',
          fontWeight: 'bold',
          textAlign: 'center',
        },
      })
      addComponents({
        '.btn': {
          outline: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: theme('colors.gray.200'),
          color: theme('colors.gray.600'),
          fontSize: theme('fontSize.xl'),
          transition: 'background-color .2s ease-in-out',
          '&:disabled': {
            opacity: '0.3',
            pointerEvents: 'none',
          },
          '@media (hover: hover)': {
            '&:hover': {
              backgroundColor: theme('colors.gray.300'),
            },
          },
          '@media screen and (max-width: 430px)': {
            transitionProperty: 'none',
            '&:active': {
              backgroundColor: theme('colors.gray.300'),
            },
          },
        },
        '.btn-dark': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: theme('colors.viola.800'),
          color: theme('colors.gray.400'),
          fontSize: theme('fontSize.xl'),
          transition: 'background-color .2s ease-in-out',
          '&:disabled': {
            opacity: '0.4',
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
      addUtilities({
        '.flex-center': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
      })
    }),
  ],
}
