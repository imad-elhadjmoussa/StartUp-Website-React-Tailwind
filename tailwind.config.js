/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        purpel1:'#dee0f3',
        dark:'#151418',
        'gray':'#8d8f9e',
        darkGray:'#17161a'
      },
      fontFamily:{
        font1:["Inconsolata", 'monospace'],
        reboto:[ "Roboto", "sans-serif"]
      }
    },
  },
  plugins: [],
}

