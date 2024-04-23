/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        myGrey: {
          80: "#141414",
          150: "#262626",
          600: "#999999"
        },
        myViolet: {
          100: "#703BF7"
        }
      }
    },
  },
  plugins: [],
}

