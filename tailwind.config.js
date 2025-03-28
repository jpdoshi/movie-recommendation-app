/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#000",
        secondary: "#848484",
        accent: "#ef9a9a",
        dark: {
          200: "#212121",
        },
      },
    },
  },
  plugins: [],
};
