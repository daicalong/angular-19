import type { Config } from 'tailwindcss'
import PrimeUI from 'tailwindcss-primeui';

const fractions = {
  '0': '0rem',
  '1/10': '10%',
  '3/20': '15%',
  '1/6': '16.666%',
  '1/5': '20%',
  '1/4': '25%',
  '3/10': '30%',
  '1/3': '33.333%',
  '2/5': '40%',
  '1/2': '50%',
  '3/5': '60%',
  '2/3': '66.666%',
  '7/10': '70%',
  '3/4': '75%',
  '4/5': '80%',
  '5/6': '83.333%',
  '9/10': '90%',
};

const values = {
  'px': '1px',
  '1': '1px',
  '2': '2px',
  '4': '4px',
  '5': '0.5rem',
  '8': '0.8rem',
  '10': '1rem',
  '15': '1.5rem',
  '18': '1.8rem',
  '20': '2rem',
  '24': '2.4rem',
  '25': '2.5rem',
  '28': '2.8rem',
  '30': '3rem',
  '32': '3.2rem',
  '34': '3.4rem',
  '36': '3.6rem',
  '40': '4rem',
  '42': '4.2rem',
  '48': '4.8rem',
  '50': '5rem',
  '58': '5.8rem',
  '60': '6rem',
  '64': '6.4rem',
  '72': '7.2rem',
  '80': '8rem',
  '96': '9.6rem',
  '100': '10rem',
  '120': '12rem',
  '128': '12.8rem',
  '150': '15rem',
  '192': '19.2rem',
  '200': '20rem',
  '220': '22rem',
  '256': '25.6rem',
  '300': '30rem',
  '280': '28rem',
  '320': '32rem',
  '350': '35rem',
  '360': '36rem',
  '384': '38.4rem',
  '400': '40rem',
  '460': '46rem',
  '500': '50rem',
  '512': '51.2rem',
  '640': '64rem',
  '720': '72rem',
  '840': '84rem',
  '960': '96rem',
  '1280': '128rem',
  '1440': '144rem',
  '1920': '192rem',
};

const portalCustomSpacing = {
  '45': '4.5rem',
  '51': '5.1rem',
  '90': '9rem',
  '165': '16.5rem',
  '180': '18rem',
  '90vh': '90vh',
  '70': '7.0rem',
  '240': '24rem',
  '96vh': '96vh',
};

const spacing = {
  ...fractions,
  ...values,
  ...portalCustomSpacing,
};

const typography = {
  fontSize: {
    'xs': '1rem',
    'sm': '1.2rem',
    'base': '1.4rem',
    'lg': '1.6rem',
    'xl': '2rem',
    '2xl': '2.4rem',
    '3xl': '3.6rem',
    '4xl': '4.8rem',
    'normalize': '62.5%', // Use this to normalize 1rem = 10px
    'normalize-laptop': '50%', // Effectively setting 1rem = 8px
  },
  fontFamily: {
    display: ['Rawline', 'Open Sans', 'sans-serif'],
    body: ['Rawline', 'Open Sans', 'sans-serif'],
    simon: ['Roboto', 'sans-serif']
  },
  letterSpacing: {
    tightest: '-.75px',
    tighter: '-.5px',
    tight: '-.25px',
    normal: '0',
    wide: '.25px',
    wider: '.5px',
    widest: '1px',
  }
};

export default {
  darkMode: ['selector', '[class~="portal-dark-theme"]'],
  content: [
    "./src/**/*.{html, js, ts}",
    "./projects/portal/src/**/*.{html, js, ts}"
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
} satisfies Config;

