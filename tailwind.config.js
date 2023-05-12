/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", "./build/js/*.js"],
  theme: {
    extend: {
      colors: {
        'golden': '#daa428',
      },
      fontFamily: {
        'sistina': ['sistina'],
        'noto': ['Noto Sans'],
        'coockie': ['Cookie']
      },
      keyframes: {
        'open-menu': {
          '0%': {transform: 'scaleX(0)'},
          '80%': {transform: 'scaleX(1.05)'},
          '100%': {transform: 'scaleX(1)'},
        },
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
      }
    },
  },
  plugins: [],
}

