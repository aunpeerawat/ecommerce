/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'normalOrange': '#ff7d1a',
        'paleOrange': '#ffede0',
      },
    },
  },
  plugins: [require("daisyui")],

}

