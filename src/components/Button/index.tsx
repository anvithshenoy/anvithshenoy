"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends HTMLMotionProps<"button"> {
  className?: string;
  rounded?:
    | boolean
    | "rounded-xs"
    | "rounded-sm"
    | "rounded-md"
    | "rounded-lg"
    | "rounded-xl"
    | "rounded-2xl"
    | "rounded-3xl";
  color?: string; // text color
  bgColor?: string; // background color
  outlined?: boolean | string;
}

const Button: React.FC<ButtonProps> = ({
  className,
  color = "text-inherit",
  bgColor = "bg-inherit",
  rounded = false,
  outlined = false,
  children,
  ...props
}) => {
  const combinedClassName = twMerge(
    "px-3.5 py-1 border border-transparent max-h-12 font-medium transition-colors duration-200",
    color,
    bgColor,
    outlined && typeof outlined === "boolean" ? "border-inherit" : outlined,
    rounded && typeof rounded === "boolean" ? "rounded-full" : rounded,
    className,
  );

  return (
    <motion.button {...props} className={combinedClassName}>
      {children}
    </motion.button>
  );
};

export default Button;
