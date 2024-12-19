/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        padding: {
          default: "1rem",
          sm: "2rem",
          md: "2rem",
          lg: "3rem",
          xl: "1rem",
        },
      },
    },
    screens: {
      sm: "450px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    }
  },
  plugins: [],
}

