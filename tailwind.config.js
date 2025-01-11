/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "var(--dark)",
        light: "var(--light)",
      },
      fontFamily: {
        head: "var(--font-thunder-bold-hc)",
        body: "var(--font-thunder-hc)",
      },
      backgroundColor: {
        dark: "var(--dark)",
        light: "var(--light)",
      },
      textColor: {
        dark: "var(--dark)",
        light: "var(--light)",
      },
    },
  },
  darkMode: "media",
  plugins: [],
};
