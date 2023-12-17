/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        city: "url('/mybg.png')",
        truck: "url('/aboutus.jpg')",
      },
      colors: {
        myorange: "#f39c12",
        myred: "#f00",
        mygreen: "#00a65a",
        myblue: "#0083db",
        mydark: "#2e3842",
        mypurple: "#2e3842",
        mylightpurple: "#6c617e",
        myText: "#6c757d",
      },
    },
  },
  plugins: [],
};
