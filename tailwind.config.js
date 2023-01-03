module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      flex: {
        '2': '2 2 0%' 
      },
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
