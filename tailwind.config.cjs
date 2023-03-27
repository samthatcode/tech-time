/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      'hero': "url(./assets/images/hero.png)",
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif']
    },
    extend: {

      colors: {
        'bgBlue': '#004DB3', /* background blue*/
        'colorWhite': '#ffffff', /* background white*/
        'greyLike': '#CCDBF0', /* background grey*/
        
      },
    },
  },
  plugins: [],
}
