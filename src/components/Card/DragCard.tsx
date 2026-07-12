"use client";

import { motion } from "motion/react";
import { img } from "motion/react-client";
import { RefObject, useRef } from "react";
import { twMerge } from "tailwind-merge";

export type Card = {
  src: string;
  hoverSrc?: string;
  alt: string;
  angle: number;
  location: {
    x: number | string;
    y: number | string;
  };
};

const Cards = ({ srcList = [] }: { srcList: Card[] }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const cardList = srcList;

  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10 h-full w-full"
      ref={containerRef}
    >
      {cardList.map(
        ({
          src = "",
          hoverSrc = "",
          alt = "Image_",
          angle,
          location: { x, y },
        }) => (
          <Card
            key={alt}
            containerRef={containerRef}
            src={src}
            hoverSrc={hoverSrc}
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
  hoverSrc?: string;
  alt: string;
  x: number | string;
  y: number | string;
  rotate: number;
  className?: string;
}

const MotionImage = motion.create(img);

const Card = ({
  containerRef,
  src,
  hoverSrc,
  alt,
  x,
  y,
  rotate,
  className,
}: Props) => {
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
        "drag-elements bg-bg pointer-events-auto absolute w-48 p-1 pb-7 will-change-transform select-none",
        className,
      )}
    >
      <div className="group relative">
        <MotionImage
          draggable={false}
          src={src}
          alt={alt}
          className={[
            "z-01 transition-all duration-300 select-none group-hover:opacity-100",
            hoverSrc ? "opacity-0 hover:opacity-100" : "opacity-100",
          ]
            .filter(Boolean)
            .join(" ")}
        />

        {hoverSrc && (
          <MotionImage
            draggable={false}
            src={hoverSrc}
            alt={alt}
            className="absolute inset-0 z-0 opacity-100 transition-all duration-300 select-none group-hover:opacity-0"
          />
        )}
      </div>
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
