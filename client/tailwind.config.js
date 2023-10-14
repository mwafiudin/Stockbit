/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      "cuanbot-header": "hsla(208, 22%, 12%, 1)",
      "cuanbot-light": "#1B232A",
      "cuanbot-dark": "#161C22",
      "cuanbot-gray": "#777777",
      "cuanbot-text-gray": "#C1C7CD",
      "cuanbot-white": "#FFFFFC",
      "cuanbot-green": "#5ED5A8",
      "cuanbot-red": "#DD4B4B",
    },
    // fontFamily: {
    //   sans: ["Graphik", "sans-serif"],
    //   serif: ["Merriweather", "serif"],
    // },
  },
  plugins: [],
};
