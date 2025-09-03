"use client";

import { motion } from "motion/react";
import { RefObject, useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

export type Card = {
  src: string;
  alt: string;
};

const Cards = ({ srcList }: { srcList: Card[] }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [randomized, setRandomized] = useState<
    { rotate: string; x: number; y: number }[] | null
  >(null);

  useEffect(() => {
    setRandomized(
      srcList.map(() => ({
        rotate: `${Math.floor(Math.random() * 51) - 25}deg`,
        x: Math.floor(Math.random() * 300),
        y: Math.floor(Math.random() * 300),
      })),
    );
  }, [srcList]);

  if (!randomized) return null;

  return (
    <div className="absolute inset-0 -z-10" ref={containerRef}>
      {srcList.map((img, idx) => (
        <Card
          key={img.alt ?? idx}
          containerRef={containerRef}
          src={img.src ?? ""}
          alt={img.alt ?? "Image_" + idx}
          rotate={randomized[idx]?.rotate}
          x={randomized[idx]?.x}
          y={randomized[idx]?.y}
        />
      ))}
    </div>
  );
};

export default Cards;

interface Props {
  containerRef: RefObject<HTMLDivElement | null>;
  src: string;
  alt: string;
  x: number;
  y: number;
  rotate: string;
  className?: string;
}

let zCounter = 1; // global counter for zIndex

const Card = ({ containerRef, src, alt, x, y, rotate, className }: Props) => {
  const [zIndex, setZIndex] = useState(0);

  const updateZIndex = () => {
    setZIndex(++zCounter);
  };

  return (
    <motion.img
      onMouseDown={updateZIndex}
      onTouchStart={updateZIndex}
      style={{
        x,
        y,
        rotate,
        zIndex,
      }}
      className={twMerge(
        "drag-elements bg-bg absolute w-48 touch-none p-1 pb-6 will-change-transform select-none",
        className,
      )}
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      drag
      dragConstraints={containerRef}
      dragElastic={0.65}
      data-swapy-handle
    />
  );
};
