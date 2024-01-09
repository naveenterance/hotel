/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "sand-500": "#F9EBB2",
        "ocean-700": "#0077CC",
      },
      fontFamily: {
        Italiana: ["Libre Baskerville"],
        Raleway: ["Raleway"],
      },
      colors: {
        slate: {
          900: "#0c0c04",
        },
        yellow: {
          400: "#bfbf3f",
        },
      },
    },
  },
  plugins: [],
};
