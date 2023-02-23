/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "railway": {
          "500": "#230c2c", 
          "700": "#13111c",
          "800": "#211f2d",
          "900": "#13111c",
        },
      }
    },
  },
  plugins: [],
}
