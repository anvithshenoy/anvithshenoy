"use client";
import { motion } from "framer-motion";

const DropIn = ({
  children,
  width = "50%",
  damping = 20,
  stiffness = 120,
  once = true,
}) => {
  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      whileInView={{ width: "100%", opacity: 1 }}
      transition={{
        type: "spring",
        damping,
        stiffness,
      }}
      viewport={{ once, amount: 0.5 }}
      className={`flex h-full w-full flex-col items-start justify-start rounded-sm`}
    >
      {children}
    </motion.div>
  );
};

export default DropIn;
