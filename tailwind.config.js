/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/*.html',
    './src/**/*.html',
  ],
  theme: {
    extend: {
      colors:{
        customBlue: '#62D9FF'
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        epilogue: ['Epilogue', 'sans-serif'],
      },
      colors: {
        green: {
          400: '#34d399',
          300: '#6ee7b7',
        },
      },
    },
  },
  plugins: [],
}