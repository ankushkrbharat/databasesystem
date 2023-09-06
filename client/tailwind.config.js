/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#068FFF',
        'dark':'#FFF',
        'light':'#AED2FF',
        'lighter':'#E4F1FF',
      }
    },
  },
  plugins: [],
}

// primary=#9400FF
//rgb(16 185 129)