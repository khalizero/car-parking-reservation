module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {  
      colors: {
      primary: "#0353A4",
    },},
  },
  fontFamily: {
    garamond: ['"EB Garamond"', 'serif'],
  },
  backgroundImage: {
    'hero-bg': "url('./starry-background.png')", // Replace with your image path
  },
 
  plugins: [],
};
