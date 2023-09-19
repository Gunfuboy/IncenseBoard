/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts.jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "Background_White": '#FFFFFF',
        "Board_gray": '#C0BBB2',
        "Board_blue": '#B2B7C0'
      }
    },
  },
  plugins: [],
}

