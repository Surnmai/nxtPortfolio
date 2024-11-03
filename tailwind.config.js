/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      primary: ["var(--arima)"],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        lg: "30px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1280px",
      xl: "1676px",
    },
    extend: {
      backgroundImage: {
        heroText: "url('./img/accaro.svg')",
        blob: "url('./img/blob.svg')",
      },
      content: {
        arrow: "url('./img/arrow.svg')",
        rope: "url('./img/rope.svg')",
        pattern: "url('./img/pattern.svg')",
        ornament: "url('./img/ornament.svg')",
      },
      colors: {
        primary: "#161515",
        accent: {
          DEFAULT: "#FD5956",
          hover: "#EB4441",
        },
        grey: "#5F5F5F",
        body: "#FFFEFD",
      },
    },
  },
  plugins: [],
};
