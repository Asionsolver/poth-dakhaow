/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'home-pattern':"url('../frontend/src/assets/home.jpg')",
      // },
      colors:{
        raffiaWhite:"#eeee",
        ripeMango:"#fec320",
        jacarta:"#3f3d56"
      },
    },
  },
  plugins: [],
}

