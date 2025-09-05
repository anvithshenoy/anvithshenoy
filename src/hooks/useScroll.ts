import { useLenis } from "lenis/react";
import { useEffect } from "react";

const useScroll = ({ open = false }: { open: boolean }): void => {
  const lenis = useLenis();

  useEffect(() => {
    if (typeof document === "undefined") return;

    if (open) {
      lenis?.stop();
      document.body.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      lenis?.start();
    };
  }, [open, lenis]);
};

export default useScroll;
