/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        tommyBold :["TommyBold"],
        sansBold : ["BoldSans"],
        sansRegular : ["RegularSans"]
      }
    },
  },
  plugins: [ require('tailwindcss-animated')],
}

