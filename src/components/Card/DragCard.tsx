"use client";

import { motion } from "motion/react";
import { img } from "motion/react-client";
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

const Cards = ({ srcList = [] }: { srcList: Card[] }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const cardList =
    process.env.NODE_ENV === "development" ? [srcList[0]] : srcList;

  console.log("cardList: ", cardList);

  return (
    <div className="absolute inset-0 -z-10 h-full w-full" ref={containerRef}>
      {cardList.map(
        ({ src = "", alt = "Image_", angle, location: { x, y } }) => (
          <Card
            key={alt}
            containerRef={containerRef}
            src={src}
            alt={alt}
            rotate={angle}
            x={x}
            y={y}
          />
        ),
      )}
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
  const MotionImage = motion.create(img);

  return (
    <motion.div
      initial={{
        top: y,
        left: x,
        rotate: `${rotate}deg`,
      }}
      drag
      dragConstraints={containerRef}
      dragElastic={0.125}
      data-swapy-handle
      className={twMerge(
        "drag-elements bg-bg absolute w-48 touch-none p-1 pb-7 will-change-transform select-none",
        className,
      )}
    >
      <MotionImage
        draggable={false}
        src={src}
        alt={alt}
        className="select-none"
      />
      <p
        className="text-title leading-0 tracking-tighter uppercase"
        aria-label={alt}
        aria-labelledby="img"
      >
        #{alt.split(" ").join("_")}
      </p>
    </motion.div>
  );
};
