"use client";

import { AnimatePresence, motion, stagger, Variants } from "motion/react";
import { useEffect, useState } from "react";

export default function AlignGrid({ align = true }: { align?: boolean }) {
  const [length, setLength] = useState(12);

  const parentVariant: Variants = {
    initial: {},
    animate: {
      transition: {
        delayChildren: stagger(1 / length, {
          from: "first",
        }),
      },
    },
    exit: {
      transition: {
        delayChildren: stagger(1 / length, {
          from: "last",
        }),
      },
    },
  };

  const childVariant: Variants = {
    initial: {
      opacity: 0,
      scale: 0.9,
    },
    animate: {
      opacity: 1,
      scale: 1,
    },
    exit: {
      opacity: 0,
      scale: 0.9,
    },
  };

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
