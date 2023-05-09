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
        "dark-green": "#1b444e",
        "light-green": "#4a716c"
      },
      boxShadow: {
        "login-shadow": "30px 30px 50px -5px #1b444e"
      },
      keyframes: {
        openLogin: {
          "0%": { width: "0px", height: "0px" },
          "80": { width: "550px", height: "500px" },
          "100%": { width: "500px", height: "450px" }
        },
        openInputs: {
          "0%": { opacity: "-1000%", height: "0px" },
          "80%": { opacity: "50%" },
          "100%": { opacity: "100%" }
        }
      },
      animation: {
        openLogin: "openLogin 3s",
        openInputs: "openInputs 3s"
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
  
  