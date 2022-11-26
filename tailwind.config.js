/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Kanit: ['"Kanit"', "sans-serif"],
      },
      keyframes: {
        slowSpin: {
          "0%": { transform: "rotate(0deg) scale(1)" },
          "50%": { transform: "rotate(180deg) scale(1.5)" },
          "100%": { transform: "rotate(360deg) scale(1)" },
        },
        slideOff: {
          "100%": { transform: "translateY(100%)"},
        },
        slideIn: {
          "0%": { transform: "translateY(-100%)"},
          "100%": { transform: "translateY(0%)"},
        },
      },
      animation: {
        slowSpin: "slowSpin 10s linear infinite",
        slideOff: "slideOff .5s cubic-bezier(1,.03,0,1.45) forwards",
        slideIn: "slideIn .5s cubic-bezier(1,.03,0,1.45) forwards",
      },
    },
  },
  plugins: [],
};
