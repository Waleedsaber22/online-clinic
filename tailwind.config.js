/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fff4e4",
        secondary: "#00f6ff",
        mainBlue: "#083464",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        segoe: ["segoe ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
