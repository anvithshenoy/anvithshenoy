"use client";

import useTheme from "@/hooks/useTheme";

const ThemeSwitch = () => {
  const [theme, toggleTheme] = useTheme();

  return (
    <button className="fixed right-0 top-0 z-50" onClick={toggleTheme}>
      Toggle Theme
    </button>
  );
};

export default ThemeSwitch;
