/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}","./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {50:"#f3f8ff",100:"#e6f0ff",200:"#c4daff",300:"#9ec2ff",400:"#6ea2ff",500:"#3d80ff",600:"#1c5fe6",700:"#1348b4",800:"#0d3586",900:"#072153"}
      }
    }
  },
  plugins: []
};