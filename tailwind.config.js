/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'softRed': 'hsl(7, 99%, 70%)',
        'Yellow': 'hsl(51, 100%, 49%)',
        'dark-desaturated-cyan-text': 'hsl(167, 40%, 24%)',
        'dark-blue-photography': 'hsl(198, 62%, 26%)',
        'very-dark-desaturated-blue': 'hsl(212, 27%, 19%)',
        'very-dark-grayish-blue': 'hsl(213, 9%, 39%)',
        'dark-grayish-blue': 'hsl(232, 10%, 55%)',
        'grayish-blue': 'hsl(210, 4%, 67%)',
        'white': 'hsl(0, 0%, 100%)'
      },
      fontFamily: {
        'fontBarlow': ['Barlow', 'sans-serif'],
        'fontFraunces': ['Fraunces', 'sans-serif']
      },
      screens: {
        'tablet': '700px',
        'desktop': '1440px'
      }
    },
  },
plugins: [],
}

