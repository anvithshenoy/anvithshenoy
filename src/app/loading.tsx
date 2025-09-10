"use client";

import { useEffect, useState } from "react";

interface LoadingContentProps {
  speed?: number;
  maxProgress?: number;
}

const LoadingContent = ({
  speed = 100,
  maxProgress = 95,
}: LoadingContentProps) => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 5;
        if (next >= maxProgress) {
          clearInterval(interval);
          return maxProgress;
        }
        return next;
      });
    }, speed);

    return () => clearInterval(interval);
  }, [speed, maxProgress]);

  return (
    <progress
      value={progress}
      max={100}
      className="absolute top-0 right-0 h-0.5 w-full text-blue-500"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
      role="progressbar"
    >
      {progress}%
    </progress>
  );
};

export default LoadingContent;
