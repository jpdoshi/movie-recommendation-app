/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#fafafa",
        secondary: "#ddd",
        accent: "#e57373",
      },
    },
  },
  plugins: [],
};
