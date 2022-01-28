module.exports = {
  content: ["./src/**/*.{html,js}", "index.html"],
  theme: {
    extend: {
      backgroundImage: {
        'desktop-image': "url('images/bg-desktop.svg')",
        'mobile-image':  "url('images/bg-mobile.svg')",
      }
    },
  },
  plugins: [],
}
