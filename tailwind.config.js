const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        custompurple: "#1B263A",
        customblue: "#134AE9",
        gradientblue: "#C2DEF8",
        gradientteal: "#D6F4F8",
        gradientlight: "#DCEFF9",
        backgroundblue: "#EDF4F6",
        boxcolor: "#F9FBFB",
      },
      fontFamily: {
        "space-grotesk": ["Space Grotesk"],
        graphik: ["Graphik"],
        "founders-grotesk": ["Founders Grotesk"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
