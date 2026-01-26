"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import { signOut, useSession } from "next-auth/react";

import {
  DIR_STORAGE_KEY,
  MODE_STORAGE_KEY,
  THEME_STORAGE_KEY,
} from "@/lib/utils";

export type Theme = "light" | "dark";
export type Mode = "mono" | "duo";
export type Direction = "ltr" | "rtl";

type ThemeContextType = {
  theme: Theme;
  changeTheme: (theme: Theme) => void;
  mode: Mode;
  changeMode: (mode: Mode) => void;
  dev: boolean;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { data: session } = useSession();
  const hasSignedOut = useRef<boolean>(false);

  const [isDevMode, setIsDevMode] = useState<boolean>(false);
  const [theme, setTheme] = useState<Theme>("light");
  const [mode, setMode] = useState<Mode>("mono");
  const [dir, setDir] = useState<Direction>("ltr");

  const changeTheme = (theme: Theme) => {
    setTheme(theme);
  };
  const changeMode = (mode: Mode) => {
    setMode(mode);
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const params = new URLSearchParams(window.location.search);
    setIsDevMode(params.get("mode") === process.env.NEXT_PUBLIC_MODE);

    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;
    if (storedTheme === "light" || storedTheme === "dark") {
      setTheme(storedTheme);
    }

    const storedMode = localStorage.getItem(MODE_STORAGE_KEY) as Mode | null;
    if (storedMode === "mono" || storedMode === "duo") {
      setMode(storedMode);
    }

    const storedDir = localStorage.getItem(DIR_STORAGE_KEY) as Direction | null;
    if (storedDir === "ltr" || storedDir === "rtl") {
      setDir(storedDir);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const root = document.documentElement;

    if (isDevMode) {
      root.style.setProperty("--bg", "#0f172a");
      root.style.setProperty("--fg", "#facc15");
      root.style.setProperty("--title", "#f1f1f1");
      return;
    }

    root.setAttribute("data-theme", theme);
    root.setAttribute("data-mode", mode);
    root.setAttribute("direction", dir);

    localStorage.setItem(THEME_STORAGE_KEY, theme);
    localStorage.setItem(MODE_STORAGE_KEY, mode);
    localStorage.setItem(DIR_STORAGE_KEY, dir);

    if (session && !hasSignedOut.current) {
      hasSignedOut.current = true;
      signOut();
    }
  }, [isDevMode, session, theme, mode, dir]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        changeTheme,
        mode,
        changeMode,
        dev: isDevMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
};
