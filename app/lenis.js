"use client";
import useCustomCursor from "@/components/cursor/useCursor";
import useUserAgent from "@/hooks/useUserAgent";
import ReactLenis from "lenis/react";

const LenisScroll = ({ children }) => {
  useCustomCursor();
  useUserAgent();

  return <ReactLenis root>{children}</ReactLenis>;
};

export default LenisScroll;
