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
        "dark/50": "rgba(var(--dark), 0.5)",
        "dark/75": "rgba(var(--dark), 0.75)",
        light: "var(--light)",
        "light/50": "rgba(var(--light), 0.5)",
        "light/75": "rgba(var(--light), 0.75)",
      },
      textColor: {
        dark: "var(--dark)",
        "dark/50": "rgba(var(--dark), 0.5)",
        "dark/75": "rgba(var(--dark), 0.75)",
        light: "var(--light)",
        "light/50": "rgba(var(--light), 0.5)",
        "light/75": "rgba(var(--light), 0.75)",
      },
    },
  },
  plugins: [],
};
