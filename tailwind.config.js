/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif", "Times New Roman", "Times", "serif"],
      },
      colors: {
        red: "#FF5555",
        black: "#070707",
        white: "#ffffff",
        grey: "#A3A09A",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
