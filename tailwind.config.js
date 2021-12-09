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
        fb: "#4267B2",
        club_gray: "#1C1C1C"
      },
      fontFamily: {
        body: ['"Inter"', "sans-serif"],
      },
      fontSize: {
        article_title: ["64px", "82.4px"],
        player_num: "288px",
      },
      inset: {
        unset: "unset",
        68: "17rem",
      },
      lineHeight: {
        "extra-tight": "0.65",
      },
      height: {
        26: "104px",
        112: "440px",
        '80vh': "80vh",
        max: "max-content",
      },
      width: {
        79: "19.6rem",
        88: "22.2rem",
        106: "410px",
        150: "620px",
        200: "850px",
        "15p": "15%",
        "20p": "20%",
        "125p": "12.5%",
        "325p": "32.5%"
      },
      screens: {
        "3xl": "1920px",
      },
      gridTemplateColumns: {
        "top-articles": "1.3fr 0.7fr"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
