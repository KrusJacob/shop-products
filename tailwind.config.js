/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      keyframes: {
        show: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        zoomIn: {
          "0%": { transform: "scale(0)" },
          "25%": { transform: "scale(0)" },
          "80%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
        backInLeft: {
          "0%": { transform: "translateX(-1000px)" },
          "40%": { transform: "translateX(-1000px)" },
          "90%": { transform: "translateX(15px)" },
          "100%": { transform: "translateX(0)" },
        },
        backInRight: {
          "0%": { transform: "translateX(1000px)" },
          "70%": { transform: "translateX(1000px)" },
          "95%": { transform: "translateX(-15px)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        show: "show .5s ease-in-out",
        zoomIn: "zoomIn 1s ease-in-out",
        backInLeft: "backInLeft 1.5s ease-in-out",
        backInRight: "backInRight 2s ease-in-out",
      },
    },
  },
  plugins: [],
};
