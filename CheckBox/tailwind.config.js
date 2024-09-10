/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      keyframes:{
        fadeIn: {
          "0%": {opacity: "0%"},
          "100%": {opacity: "100%"}
        },
        fadeOut: {
          "0%": {opacity: "100%"},
          "100%": {opacity: "0%"}
        },
        scaleIn:{
          "0%": {transform: "scale(0)"},
          "100%": {transform: "scale(1)"}
        },
        scaleOut: {
          "0%": {transform: "scale(1)"},
          "100%": {transform: "scale(0)"}
        },
        checkIn: {
          "0%":{left: "0%"},
          "100%":{left: "100%"}
        },
        checkOut: {
          "0%":{left: "100%"},
          "100%":{left: "0%"}
        }
      },
      animation:{
        fadeIn: "fadeIn 300ms ease forwards",
        fadeOut: "fadeOut 300ms ease forwards",
        scaleIn: "scaleIn 300ms ease forwards",
        scaleOut: "scaleOut 300ms ease forwards",
        checkIn: "checkIn 300ms ease forwards",
        checkOut: "checkOut 300ms ease forwards"
      }
    },
  },
  plugins: [],
};
