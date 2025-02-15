"use client";

import { AnimatePresence } from "motion/react";
import { useCallback, useEffect, useState } from "react";
import Preloader from "./Preloader";

const Loader = ({ isDataLoading }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const loadTime = 1000;

  const updateProgress = useCallback(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      const newProgress = Math.min((elapsedTime / loadTime) * 100, 99);
      setProgress(newProgress);

      if (newProgress >= 99 && !isDataLoading) {
        clearInterval(interval);
        setProgress(100);
        setTimeout(() => setIsVisible(false), 500);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [loadTime, isDataLoading]);

  useEffect(() => {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", updateProgress);
    } else {
      updateProgress();
    }

    return () =>
      document.removeEventListener("DOMContentLoaded", updateProgress);
  }, [updateProgress]);

  return (
    <AnimatePresence mode="sync">
      {isVisible && <Preloader progress={Math.round(progress)} />}
    </AnimatePresence>
  );
};

export default Loader;
