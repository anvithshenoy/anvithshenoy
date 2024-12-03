"use client";
import { motion } from "framer-motion";

const FadeIn = ({
  children,
  className = "",
  once = true,
  amount = window.innerWidth <= 768 ? 0.5 : 0.75,
  transition = { type: "spring", damping: 20, stiffness: 120 },
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: window.innerWidth <= 768 ? 10 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={transition}
      viewport={{ once, amount }}
      className={`h-full w-full ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
