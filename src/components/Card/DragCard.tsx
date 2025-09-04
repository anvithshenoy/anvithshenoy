"use client";

import { motion } from "motion/react";
import { RefObject, useRef } from "react";
import { twMerge } from "tailwind-merge";

export type Card = {
  src: string;
  alt: string;
  angle: number;
  location: {
    x: number | string;
    y: number | string;
  };
};

const Cards = ({ srcList }: { srcList: Card[] }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="absolute inset-0 -z-10 h-full w-full" ref={containerRef}>
      {srcList.map((img, idx) => (
        <Card
          key={img.alt ?? idx}
          containerRef={containerRef}
          src={img.src ?? ""}
          alt={img.alt ?? "Image_" + idx}
          rotate={img.angle}
          x={img.location.x}
          y={img.location.y}
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
  x: number | string;
  y: number | string;
  rotate: number;
  className?: string;
}

const Card = ({ containerRef, src, alt, x, y, rotate, className }: Props) => {
  return (
    <motion.div
      initial={{
        top: y,
        left: x,
      }}
      style={{
        rotate: `${rotate}deg`,
      }}
      drag
      dragConstraints={containerRef}
      dragElastic={0.125}
      data-swapy-handle
      className={twMerge(
        "drag-elements bg-bg absolute w-48 touch-none p-1 will-change-transform select-none",
        className,
      )}
    >
      <motion.img
        src={src}
        alt={alt}
        className="select-none"
        draggable={false}
      />
      <p aria-label={alt} aria-labelledby="img">
        {alt}
      </p>
    </motion.div>
  );
};
