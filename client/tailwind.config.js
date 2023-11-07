/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "cuanbot-glow-tab": "0 0 10px -15px #3b82f6",
      },
      // filter: {
      //   glow: "url(#filter0_d_681_488)",
      // },
    },
    colors: {
      "cuanbot-header": "hsla(208, 22%, 12%, 1)",
      "cuanbot-light": "#1B232A",
      "cuanbot-dark": "#161C22",
      "cuanbot-gray": "#777777",
      "cuanbot-text-gray": "#C1C7CD",
      "cuanbot-light-gray": "#A7AFB7",
      "cuanbot-white": "#FFFFFC",
      "cuanbot-green": "#5ED5A8",
      "cuanbot-red": "#DD4B4B",
      red: {
        50: "#fef2f2",
        100: "#fee2e2",
        200: "#fecaca",
        300: "#fca5a5",
        400: "#f87171",
        500: "#ef4444",
        600: "#dc2626",
        700: "#b91c1c",
        800: "#991b1b",
        900: "#7f1d1d",
        950: "#450a0a",
      },
      green: {
        50: "#f0fdf4",
        100: "#dcfce7",
        200: "#bbf7d0",
        300: "#86efac",
        400: "#4ade80",
        500: "#22c55e",
        600: "#16a34a",
        700: "#15803d",
        800: "#166534",
        900: "#14532d",
        950: "#052e16",
      },
    },
    // fontFamily: {
    //   sans: ["Graphik", "sans-serif"],
    //   serif: ["Merriweather", "serif"],
    // },
  },
  plugins: [],
};
