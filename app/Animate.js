"use client";

import ThemeSwitch from "@/components/Theme/ThemeSwitch";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";

const PageTransition = ({ children }) => {
  const [showContent, setShowContent] = useState(false);
  const pathname = usePathname().split("/").pop();

  const handleAnimationComplete = () => {
    setShowContent(true);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {!showContent && (
          <motion.div
            key="slide"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ delay: 0.3, duration: 0.45, ease: "easeIn" }}
            onAnimationComplete={handleAnimationComplete}
            className="fixed inset-0 z-40 inline-flex flex-col items-center justify-center bg-dark text-light"
          >
            <h1 className="font-head text-3xl font-bold uppercase">
              {pathname !== "" ? "404" : "Home"}
            </h1>
          </motion.div>
        )}
      </AnimatePresence>

      {showContent && (
        <>
          <ThemeSwitch />
          {children}
        </>
      )}
    </>
  );
};

export default PageTransition;
