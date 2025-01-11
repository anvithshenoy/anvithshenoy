"use client";
import { useEffect } from "react";

const useUserAgent = () => {
  useEffect(() => {
    const htmlElement = document.querySelector("html");

    const isFirefox = navigator.userAgent.toLowerCase().includes("firefox");

    if (isFirefox) {
      htmlElement.style.scrollbarColor = "var(--dark) transparent";
    }
  }, []);

  return (
    typeof window !== "undefined" &&
    navigator.userAgent.toLowerCase().includes("firefox")
  );
};

export default useUserAgent;
