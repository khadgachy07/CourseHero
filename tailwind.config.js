module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      maxWidth: {
        "8xl": "1920px"
      },
    },
  },
  variants: {
    extend: {
      opaciy: ["disabled"],
      cursor: ["disabled"],
    },
  },
  plugins: [],
}
