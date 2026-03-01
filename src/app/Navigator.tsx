"use client";

import { useEffect, useRef, useState } from "react";

import { AnimatePresence, motion, Variants } from "motion/react";
import Link from "next/link";

import { ROUTES } from "@/lib/common";

export default function Navigator() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggle = () => setOpen((prev) => !prev);
  const close = () => setOpen(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        close();
      }
    };

    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    if (open) document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, [open]);

  const menuVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
        when: "beforeChildren",
        staggerChildren: 0.07,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
  };

  return (
    <div ref={containerRef}>
      <AnimatePresence mode="wait">
        {open ? (
          <motion.section
            key="menu"
            layoutId="routing"
            layout="position"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            role="menu"
            aria-label="Navigation menu"
            className="font-head bg-title fixed right-4 bottom-8 z-50 flex flex-col items-end gap-2 rounded-md p-4 text-base leading-tight -tracking-widest"
          >
            {Object.entries(ROUTES)
              .sort(([a], [b]) => a.localeCompare(b))
              .map(([key, value]) => (
                <motion.div key={key} variants={itemVariants}>
                  <Link href={value} role="menuitem" onClick={close}>
                    {key}
                  </Link>
                </motion.div>
              ))}
          </motion.section>
        ) : (
          <motion.button
            key="button"
            layoutId="routing"
            layout="position"
            onClick={toggle}
            aria-expanded={open}
            aria-controls="navigation-menu"
            aria-label="Open navigation menu"
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="font-head bg-title fixed right-4 bottom-8 flex h-16 w-16 items-center justify-center rounded-full p-4 text-base leading-tight -tracking-widest"
          >
            ASB
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
