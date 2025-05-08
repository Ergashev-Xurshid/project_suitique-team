// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(24, 24, 27)',
        foreground:"hsl(240, 10%, 3.9%)" 
      },
    },
  },
  plugins: [],
};
