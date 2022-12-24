/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: "class",
  theme: {
    screens:  {
      'xsm': '400px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1400px',
    },
    extend: {},
    fontFamily: {
      mainFont: ["Zen Dots", "cursive"],
    }
  },
  plugins: [],
}
