import type { Config } from 'tailwindcss'
import { screens } from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode: ['class'],
  theme: {
    screens: {
      xs: '475px',
      ...screens
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#105650',
          hover: '#1E685F',
          dark: '#003A38'
        },
        border: {
          // DEFAULT = gray-400
          // dark = teal-900
          DEFAULT: '#9ca3af',
          dark: '#134e4a'
        },
        error: {
          DEFAULT: '#AD2216'
        },
        black: '#191919'
      }
    }
  },
  plugins: []
}

export default config
