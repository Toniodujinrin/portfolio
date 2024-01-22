/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mainGray: "#2b2b2b",
        lightBlue: "#6fc3df",
        aquamarine: "#3cc3bc",
        purple: "#6b5ce5",
        lightGray: "#bebebe",
        olive: "#a2aead",
        timeline: "#ff9900",
        appGray: "#131313",
        darkGreen: "#0a2427",
      },
    },
  },
  plugins: [],
};
