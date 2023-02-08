/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      theme: {
        colors: {
          primary: {
            dark: "#000",
            light: "#fff",
          },
          boxShadow: {
            custom: "4px 5px rgb(0,0,0)",
          },
        },
      },
    },
  },
  plugins: [],
};
