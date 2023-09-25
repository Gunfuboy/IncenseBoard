/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "mainBackgrounColor": '#FFFFFF',
        "mainColor": '#C0BBB2',
        "highlightColor": '#B2B7C0'
      }
    },
  },
  plugins: [],

  "files.associations": {
    "*.css": "tailwindcss"
  }
}

