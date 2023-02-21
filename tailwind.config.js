/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        nav: "0px 2px 4px #838d8a",
      },
      fontFamily: {
        intro: ["Eczar", "serif"],
      },
      colors: {
        primary: "#e85a4f",
        secondary: "#8E8D89",
        bodybg: "#F4F4EE",
      },
    },
  },
  plugins: [],
}
