/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        gainsboro: "#dadada",
        orangered: "#ff4f28",
        gray: "#fffefe",
      },
      spacing: {},
      fontFamily: {
        "open-sans": "'Open Sans'",
      },
      borderRadius: {
        "11xl": "30px",
        "8xs": "5px",
      },
    },
    fontSize: {
      base: "16px",
      "5xl": "24px",
      xl: "20px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
