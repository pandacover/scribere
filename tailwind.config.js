module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      height: {
        "container-height": "calc(100vh - 64px)",
      },
      colors: {
        "surface-black": "#121212",
      },
      gridRow: {
        "span-7": "span 7 / span 7",
      },
    },
  },
  plugins: [],
};
