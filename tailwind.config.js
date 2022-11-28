/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      /*beige*/
      beige: "#FFF7EF",
      /*lyspink*/
      lyspink: "#FFF5F5",
      /*pink*/
      pink: "#EED6D6",
      /*rød*/
      rød: "#FF4D00",
      /*sort*/
      sort: "#000000",
      /*hvid*/
      hvid: "#FFFFFF",
    },

    fontFamily: {
      Heebo: "'Heebo', sans-serif;",
      TitilliumRegular: "'TitilliumRegular', sans-serif",
      TitilliumLight: "'TitilliumLight', sans-serif", 

    },
    extend: {},
  },
  plugins: [],
}
