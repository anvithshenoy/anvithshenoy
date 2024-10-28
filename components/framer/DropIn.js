"use client";
import { motion } from "framer-motion";

const DropIn = ({ children }) => {
  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      whileInView={{ width: "100%", opacity: 1 }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 120,
      }}
      viewport={{ once: true, amount: 0.5 }}
      className="flex h-svh flex-col items-start justify-start text-nowrap"
    >
      {children}
    </motion.div>
  );
};

export default DropIn;
