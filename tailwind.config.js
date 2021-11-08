module.exports = {
  purge: {
    //   enabled: true,
    //   content: ["src/**/*.js", "src/**/*.jsx", "build/**/*.html"]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        ultra: ["30rem", "10rem"],
      },
      height: {
        '1/12': '8.333334%'
      },
    },
    rotate: {
      "-40": "-40deg",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
