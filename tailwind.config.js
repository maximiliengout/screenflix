/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "connexion.html", "en.html", "en/signIn.html"],
  theme: {
    extend: {
      height: {
        "10v": "10vh",
        "20v": "20vh",
        "30v": "30vh",
        "40v": "40vh",
        "50v": "50vh",
        "60v": "60vh",
        "66v": "66vh",
        "70v": "70vh",
        "80v": "80vh",
        "90v": "90vh",
        "100v": "100vh",
      },
      colors: {
        'anthracite': '#303030'
      },
      backgroundImage: {
        "main": "url('../img/backImage.jpg')",
      },
      
    },
  },
  plugins: [],
}
