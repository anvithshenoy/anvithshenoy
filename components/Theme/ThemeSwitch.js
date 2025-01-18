"use client";

import { useTheme } from "@/app/context/ThemeContext";
import { DarkInner } from "@theme-toggles/react";
import "@theme-toggles/react/css/DarkInner.css";

const ThemeSwitch = () => {
  const { toggleTheme } = useTheme();

  return (
    <DarkInner
      duration={750}
      onToggle={toggleTheme}
      data-click="true"
      className="fixed bottom-1 right-1 z-50 text-[#4398ca] mix-blend-difference"
      aria-label="toggle theme"
    />
  );
};

export default ThemeSwitch;
