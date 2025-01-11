import { useEffect, useState } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    // Try to get the theme from localStorage, default to 'light'
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "light";
  });

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const htmlElement = document.documentElement;
    htmlElement.dataset.theme = theme;
  }, [theme]);

  return [theme, toggleTheme];
};

export default useTheme;
