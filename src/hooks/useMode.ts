import { signOut, useSession } from "next-auth/react";
import { useEffect, useRef, useState } from "react";

type Theme = "light" | "dark";

const THEME_STORAGE_KEY = "app-theme";

const useMode = () => {
  const { data: session } = useSession();
  const hasSignedOut = useRef<boolean>(false);

  const [isDevMode, setIsDevMode] = useState(false);
  const [mode, setMode] = useState<Theme>("light");

  const changeTheme = (theme: Theme) => setMode(theme ?? "light");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const params = new URLSearchParams(window.location.search);
    setIsDevMode(params.get("mode") === process.env.NEXT_PUBLIC_MODE);

    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;
    if (storedTheme === "light" || storedTheme === "dark") {
      setMode(storedTheme);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const rootStyle = document.documentElement;

    if (isDevMode) {
      rootStyle.style.setProperty("--bg", "#0f172a");
      rootStyle.style.setProperty("--fg", "#facc15");
      return;
    }

    rootStyle.setAttribute("data-theme", mode);
    localStorage.setItem(THEME_STORAGE_KEY, mode);

    if (session && !hasSignedOut.current) {
      hasSignedOut.current = true;
      signOut();
    }
  }, [isDevMode, session, mode]);

  return { dev: isDevMode, changeTheme, theme: mode };
};

export default useMode;
