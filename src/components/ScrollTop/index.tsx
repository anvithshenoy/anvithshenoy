"use client";

import { AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

import Button from "@/components/Button";

export function createScrollTop(x = 0, y = 0, action?: () => void) {
  return () => {
    action?.();
    window.scrollTo({
      top: y,
      left: x,
      behavior: "smooth",
    });
  };
}

interface ScrollTopProps {
  x?: number;
  y?: number;
  action?: () => void;
  icon?: React.ReactNode;
  className?: string;
}

export function ScrollTopButton({
  x = 0,
  y = 0,
  action,
  icon,
  className,
}: ScrollTopProps) {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onClick = () => {
    action?.();
    window.scrollTo({
      top: y,
      left: x,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <Button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ type: "spring", duration: 0.3, ease: "easeOut" }}
          onClick={onClick}
          className={twMerge(
            "stroke-fg fixed right-3.5 bottom-1/3 z-50 aspect-square h-12 max-h-12 w-12 max-w-12 bg-transparent sm:right-10 sm:bottom-1/3",
            className,
          )}
        >
          {icon ?? (
            <svg
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 -rotate-45 bg-inherit fill-inherit stroke-inherit"
            >
              <path
                fillRule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
              />
            </svg>
          )}
        </Button>
      )}
    </AnimatePresence>
  );
}
