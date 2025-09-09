"use client";

import { DIR_STORAGE_KEY } from "@/lib/utils";
import { signOut, useSession } from "next-auth/react";
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

type Theme = "light" | "dark";
type Direction = "ltr" | "rtl";

const THEME_STORAGE_KEY = "app-theme";

type ThemeContextType = {
  theme: Theme;
  changeTheme: (theme: Theme) => void;
  dev: boolean;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { data: session } = useSession();
  const hasSignedOut = useRef<boolean>(false);

  const [isDevMode, setIsDevMode] = useState(false);
  const [mode, setMode] = useState<Theme>("light");
  const [dir, setDir] = useState<Direction>("ltr");

  const changeTheme = (theme: Theme) => {
    setMode(theme);
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const params = new URLSearchParams(window.location.search);
    setIsDevMode(params.get("mode") === process.env.NEXT_PUBLIC_MODE);

    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;
    if (storedTheme === "light" || storedTheme === "dark") {
      setMode(storedTheme);
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
      return;
    }

    root.setAttribute("data-theme", mode);
    root.setAttribute("direction", dir);
    localStorage.setItem(THEME_STORAGE_KEY, mode);
    localStorage.setItem(DIR_STORAGE_KEY, dir);

    if (session && !hasSignedOut.current) {
      hasSignedOut.current = true;
      signOut();
    }
  }, [isDevMode, session, mode, dir]);

  return (
    <ThemeContext.Provider
      value={{
        theme: mode,
        changeTheme,
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
