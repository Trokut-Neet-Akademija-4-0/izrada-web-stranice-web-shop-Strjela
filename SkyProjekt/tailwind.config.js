/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",
    "./public/.js",
    "./public/.css",
    "./src/**/*.{html,js,tsx}",
    "./index.html",
    "./public/index.html",
    "./src/**/*.{html,js,css}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      naslovi: ["Luckiest Guy", "cursive"],
      abc: ["Permanent Marker", "cursive"],
      tekstovi: ["Exo 2", "sans-serif"],
      avion: ["Anta", "sans-serif"],
    },
  },
  plugins: [],
};
