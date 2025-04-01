"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

const Preloader = ({ progress }) => {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const duration = Math.max(1, Math.min(5, (progress / 100) * 4 + 1));
  const strokeDashArray = 283;

  const updateDimensions = () => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions());
    return () => {
      window.removeEventListener("resize", updateDimensions());
    };
  }, []);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height} L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height} L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      data-click="true"
      className="fixed right-0 top-0 z-50 flex h-dvh w-dvw items-center justify-center bg-dark"
    >
      {dimension.width > 0 && (
        <>
          {/* Progress Circle */}
          <div className="relative z-10 flex aspect-square h-1/2 items-center justify-center drop-shadow-xl">
            <motion.svg
              className="absolute aspect-square h-full"
              viewBox="0 0 120 120"
            >
              <defs>
                <linearGradient
                  id="progressGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="var(--light)" />
                  <stop offset="100%" stopColor="var(--dark)" />
                </linearGradient>
              </defs>

              {/* Background Circle */}
              <circle
                cx="60"
                cy="60"
                r="45"
                className="fill-none stroke-neutral-950/85 stroke-10"
              />

              {/* Animated Progress Circle */}
              <motion.circle
                cx="60"
                cy="60"
                r="45"
                className="fill-none stroke-[url(#progressGradient)] stroke-10 [stroke-linecap:round] [stroke-linejoin:round]"
                initial={{
                  strokeDasharray: strokeDashArray,
                  strokeDashoffset:
                    strokeDashArray - (progress / 100) * strokeDashArray,
                }}
                animate={{
                  strokeDashoffset:
                    strokeDashArray - (progress / 100) * strokeDashArray,
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.42, 0, 0.58, 1],
                }}
              />
            </motion.svg>

            {/* Animated Path */}
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 323"
              fill="none"
              className="absolute z-10 flex aspect-square h-1/2"
            >
              <motion.path
                d="M363 311.5V11.5M363 311.5L627.024 16.5007C628.754 14.5683 627.382 11.5 624.789 11.5H363M363 311.5H624.789C627.382 311.5 628.754 308.432 627.024 306.499L363 11.5M363 311.5L271.75 161.5M363 311.5L139.125 236.5M271.75 161.5L183.125 15.8143C181.941 13.8695 179.108 13.8992 177.966 15.8683L12.0403 301.948C10.5059 304.593 13.45 307.57 16.1121 306.064L139.125 236.5M271.75 161.5L139.125 236.5"
                className="stroke-light stroke-24 drop-shadow-xl [stroke-linecap:round] [stroke-linejoin:round]"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: duration,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </motion.svg>
          </div>

          {/* Progress Percentage */}
          {/* <div className="absolute flex h-1/2 items-center justify-center lg:hidden font-head text-4xl font-extrabold [font-variant-numeric:tabular-nums]">
            <motion.p
              variants={opacity}
              initial="initial"
              animate="enter"
              className="absolute z-10 flex items-center font-head text-3xl text-light"
            >
              {progress}%
            </motion.p>
          </div> */}

          {/* Animated Background Path */}
          <svg className="absolute top-0 h-[calc(100%+300px)] w-full">
            <motion.path
              variants={curve}
              initial="initial"
              exit="exit"
              className="fill-dark"
            />
          </svg>
        </>
      )}
    </motion.div>
  );
};

export default Preloader;

export const opacity = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: { duration: 1, delay: 0.2 },
  },
};

export const slideUp = {
  initial: {
    top: 0,
  },
  exit: {
    top: "-100dvh",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
};
