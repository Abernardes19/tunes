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
        "dark-green": "#1b444e"
      },
      boxShadow: {
        "login-shadow": "30px 30px 50px -5px #1b444e"
      }
    },
    transitionProperty: {
      'height': 'height',
      'spacing': 'margin, padding',
      'width': 'width',
    }
  },
  plugins: [],
  }
  
  