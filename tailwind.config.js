module.exports = {
  mode: "jit",
  purge: ["./dist/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        light_blue: "#0057B8",
        dark_blue: "#07122E",
        club_white: "#E9E9EA",
        club_yellow: "#B88400",
      },
      fontFamily: {
        body: ['"Inter"', "sans-serif"],
      },
      inset: {
        unset: "unset",
      },
      height: {
        26: "104px",
        112: "440px",
      },
      width: {
        106: "410px",
      },
      screens: {
        "3xl": "1920px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
