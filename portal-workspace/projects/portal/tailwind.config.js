/** @type {import('tailwindcss').Config} */
var spacing = require('./tailwind-config/const.spacing');
var typography = require('./tailwind-config/const.typography');

import PrimeUI from 'tailwindcss-primeui';

module.exports = {
  darkMode: ['selector', '[class~="portal-dark-theme"]'],
  content: [
    "./src/**/*.{html, js, ts}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: "Bebas Neue, sans-serif",
        body: "Montserrat, sans-serif"
      },
      maxWidth: spacing,
      minWidth: spacing,
      maxHeight: spacing,
      minHeight: spacing,
    },
    borderRadius: {
      none: "0",
      xs: "2px",
      sm: "4px",
      md: "8px",
      lg: "16px",
      xl: "24px",
      full: "9999px"
    },
    fontSize: typography.fontSize,
    letterSpacing: typography.letterSpacing,
    spacing: spacing,
  },
  plugins: [
    PrimeUI
  ]
}

