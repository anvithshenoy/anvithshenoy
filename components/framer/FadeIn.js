"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const FadeIn = ({
  children,
  className = "",
  once = true,
  transition = { type: "spring", damping: 20, stiffness: 120 },
}) => {
  const [smallScreen, setSmallScreen] = useState(false);

  useEffect(() => {
    setSmallScreen(window.innerWidth <= 768);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: smallScreen ? 10 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={transition}
      viewport={{ once, amount: smallScreen ? 0.35 : 0.75 }}
      className={`h-full w-full ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
