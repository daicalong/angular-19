import type { Config } from 'tailwindcss'
import PrimeUI from 'tailwindcss-primeui';
import { RecursiveKeyValuePair, ResolvableTo } from 'tailwindcss/types/config';
import { colors } from './projects/portal/themes/theme.colors';
import { borderRadius } from './projects/portal/themes/theme.border';
import { typography } from './projects/portal/themes/theme.typography';
import { spacing } from './projects/portal/themes/theme.spacing';

/**
 * All primitive tokens (border radius, colors, spacing) are extracted to consistently power both TailwindCSS & PrimeNG
 */
export default {
  darkMode: ['selector', '[class~="portal-dark-theme"]'],
  content: [
    "./projects/portal/src/**/*.{html, js, ts}"
  ],
  theme: {
    extend: {
      colors: colors as ResolvableTo<RecursiveKeyValuePair<string, string>> | undefined,
      fontFamily: typography.fontFamily,
      maxWidth: spacing,
      minWidth: spacing,
      maxHeight: spacing,
      minHeight: spacing,
    },
    borderRadius: borderRadius,
    fontSize: typography.fontSize,
    letterSpacing: typography.letterSpacing,
    spacing: spacing,
  },
  plugins: [
    PrimeUI
  ]
} satisfies Config;

