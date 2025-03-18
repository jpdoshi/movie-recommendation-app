/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#000",
        secondary: "#666",
        accent: "#e57373",
        dark: {
          200: "#212121",
        },
      },
    },
  },
  plugins: [],
};
