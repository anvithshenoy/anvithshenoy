import { signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const useMode = () => {
  const { data: session } = useSession();
  const [isDevMode, setIsDevMode] = useState<boolean>(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setIsDevMode(params.get("mode") === process.env.NEXT_PUBLIC_MODE);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const rootStyle = document.documentElement.style;

    if (isDevMode) {
      rootStyle.setProperty("--bg", "#0f172a");
      rootStyle.setProperty("--fg", "#facc15");
      return;
    }

    rootStyle.setProperty("--bg", "#fffaf0");
    rootStyle.setProperty("--fg", "#2b323f");

    if (session) signOut();
  }, [isDevMode, session]);

  return { dev: isDevMode };
};

export default useMode;
