/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: " #7456FF;",
        background: "#0F0F0;",
        para: " #999999;",
        cardbg: "rgba(116, 86, 255, 0.1);",
        cardBG: "rgba(19, 19, 19, 0.9);",
      },
      width: {
        100: "619px",
      },
      screens: {
        xsm: "350px",
        // => @media (min-width: 350px) { ... }
      },
    },
  },
  plugins: [],
};
