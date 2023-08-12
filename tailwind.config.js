/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem'
      }
    },
    extend: {
      colors: {
        error: {
          DEFAULT: '#AD2216'
        },
        primary: {
          DEFAULT: '#533821'
        },
        border: {
          DEFAULT: 'rgb(68 64 60)' //border-stone-700
        }
      },
      backgroundImage: {
        delivery:
          'url("../../components/images/backgrounds/deliveryBackground.svg")',
        takeAway:
          'url("../../components/images/backgrounds/takeAwayBackground.svg")'
      }
    }
  },
  plugins: []
}
