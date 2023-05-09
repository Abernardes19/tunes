/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "new-blue": "#000e3a",
        "gray-1": "#535464",
        "beige": "#a5a790"
      },
    },
    transitionProperty: {
      'height': 'height',
      'spacing': 'margin, padding',
      'width': 'width',
    }
  },
  plugins: [],
  }
  
  