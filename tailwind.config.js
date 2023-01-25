/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/*.{html,ejs}"],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#0D0F19",
        "primary-card": "#151720",
        "priamry-card-blue": "#303FE1",
        "primary-light": "#29142b",
        "primary-blue": "#2A38C7",
        "primary-blue-light": "#214AA3",
      },
    },
  },
  plugins: [],
}
