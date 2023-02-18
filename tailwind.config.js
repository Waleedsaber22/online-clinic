/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f0f2f5",
        secondary: "#00f6ff",
        mainBlue: "#083464",
        widgetBlue: "#384c6c",
      },
      fontFamily: {
        segoe: ["segoe ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
