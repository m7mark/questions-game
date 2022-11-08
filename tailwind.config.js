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
        },
      })
      addComponents({
        '.btn': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: theme('colors.black'),
          color: theme('colors.white'),
          fontSize: theme('fontSize.xl'),
          height: theme('height.32'),
          width: theme('width.full'),
          transition: 'background-color .2s ease-in-out',
          '@media (hover: hover)': {
            '&:hover': {
              backgroundColor: theme('colors.gray.800'),
            },
          },
          '@media screen and (max-width: 430px)': {
            transitionProperty: 'none',
            '&:active': {
              backgroundColor: theme('colors.gray.800'),
            },
          },
        },
      })
    }),
  ],
}
