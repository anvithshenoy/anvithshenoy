"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { useEffect } from "react";

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenis = useLenis();

  // Recalculate when tabs change (or other DOM mutations)
  useEffect(() => {
    const observer = new MutationObserver(() => {
      lenis?.resize();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
    });

    return () => observer.disconnect();
  }, [lenis]);

  return <ReactLenis root>{children}</ReactLenis>;
}
