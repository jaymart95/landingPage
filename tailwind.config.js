/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/*.{html,ejs}"],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#000000",
        "primary-card": "#151720",
        "priamry-card-blue": "#D5230E",
        "primary-light": "#29142b",
        "primary-blue": "#D5230E",
        "primary-blue-light": "#214AA3",
        "primary-gold": "#CABB00",
        "primary-red": "#C51B1B",
      },
    },
  },
  plugins: [],
}
