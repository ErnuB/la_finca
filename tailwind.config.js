/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      colors: {
        'golden': '#daa428',
      },
      fontFamily: {
        'sistina': ['sistina'],
        'noto': ['Noto Sans'],
        'coockie': ['Cookie']
      }
    },
  },
  plugins: [],
}

