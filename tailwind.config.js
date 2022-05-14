module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      height: {
        'container-height': 'calc(100vh - 64px)'
      },
      colors: {
        'surface-black': '#121212'
      }
    },
  },
  plugins: [],
}
