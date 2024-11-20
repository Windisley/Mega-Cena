/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
   "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      margin:{
        mauto: "0 auto",
      },
      maxWidth:{
        containW: "1000px"
      },
      minHeight:{
        containH: "400px"
      }
    },
  },
  plugins: [],
}

