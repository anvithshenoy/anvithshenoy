"use client";

import { AnimatePresence, motion, Variants } from "motion/react";
import { useEffect, useState } from "react";

const parentVariant: Variants = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.05 }, // reveal columns left → right
  },
  exit: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: 1, // hide columns left → right
    },
  },
};

const childVariant: Variants = {
  initial: {
    clipPath: "inset(0 100% 0 0)", // fully hidden
  },
  animate: {
    clipPath: "inset(0 0% 0 0)", // fully visible
    transition: { duration: 0.3, ease: "linear" },
  },
  exit: {
    clipPath: "inset(0 100% 0 0)", // hide left → right
    transition: { duration: 0.3, ease: "linear" },
  },
};

export default function AlignGrid({ align = true }: { align?: boolean }) {
  const [length, setLength] = useState(12);

  useEffect(() => {
    const windowSizing = () => {
      setLength(window.innerWidth > 768 ? 12 : 4);
    };
    window.addEventListener("resize", windowSizing);
    windowSizing();
    return () => window.removeEventListener("resize", windowSizing);
  }, []);

  return (
    <AnimatePresence>
      {align && (
        <motion.div
          key="grid"
          variants={parentVariant}
          initial="initial"
          animate="animate"
          exit="exit"
          className="pointer-events-none fixed top-0 z-69 flex h-full w-full gap-3 px-4 bg-blend-color"
        >
          {Array.from({ length }).map((_, i) => (
            <motion.div
              key={i}
              variants={childVariant}
              className="h-full w-full origin-left bg-red-600/50"
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
