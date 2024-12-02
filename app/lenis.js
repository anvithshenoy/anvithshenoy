"use client";
import useCustomCursor from "@/components/cursor/useCursor";
import ReactLenis from "lenis/react";

const LenisScroll = ({ children }) => {
  useCustomCursor();

  return <ReactLenis root>{children}</ReactLenis>;
};

export default LenisScroll;
