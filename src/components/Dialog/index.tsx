"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

import useScroll from "@/hooks/useScroll";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  bg?: {
    content?: string | React.ReactNode;
    src: string;
    alt: string;
    layoutId?: string;
    layout?: "position" | "preserve-aspect" | "size" | boolean;
    className?: string;
  };
  className?: string;
  content?: string | React.ReactNode;
  children?: React.ReactNode;
  size?: string;
  aspectRatio?:
    | "aspect-square"
    | "aspect-video"
    | "aspect-[3/4]"
    | "aspect-[4/3]"
    | "aspect-[9/16]";
  layoutId?: string;
  needClose?: boolean;
}

const Modal = (props: ModalProps) => {
  const {
    open = false,
    onClose,
    className,
    children,
    size,
    aspectRatio,
    bg,
    layoutId,
    needClose = true,
  } = props;

  const modalRef = useRef<HTMLDivElement>(null);
  const Img = motion.create(Image);

  // Close on outside click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };
  // Close on Escape
  useEffect(() => {
    if (!open) {
      return;
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  useScroll({ open });

  return (
    <AnimatePresence>
      {open && (
        <div
          className="text-bg fixed top-0 right-0 z-50 h-dvh w-dvw place-items-center content-center bg-black/25 backdrop-blur-xs"
          onClick={handleBackdropClick}
        >
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            className={twMerge(
              "bg-fg mx-auto flex w-full flex-col overflow-hidden rounded-2xl p-1.5 drop-shadow-2xl",
              className,
              size,
            )}
            layoutId={layoutId}
          >
            {needClose && (
              <button
                onClick={onClose}
                className="bg-fg absolute top-0 right-0 z-50 aspect-square w-12 content-center rounded-bl-lg"
              >
                <motion.svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox={"0 0 32 32"}
                  xmlSpace="preserve"
                  className="mx-auto aspect-square h-8 stroke-1"
                  whileHover={{
                    rotate: 45,
                  }}
                >
                  <motion.path
                    className="fill-bg"
                    initial={{ opacity: 0, rotate: 45 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 45 }}
                    transition={{
                      duration: 1,
                      ease: "easeOut",
                    }}
                    d="M16,0C7.178,0,0,7.178,0,16s7.178,16,16,16s16-7.178,16-16S24.822,0,16,0z M16,31C7.729,31,1,24.271,1,16 S7.729,1,16,1s15,6.729,15,15S24.271,31,16,31z"
                  />
                  <motion.path
                    className="fill-bg"
                    initial={{ opacity: 0, rotate: 45 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 45 }}
                    transition={{
                      duration: 1,
                      ease: "easeOut",
                    }}
                    d="M17.657,16.95c-0.195-0.195-0.512-0.195-0.707,0s-0.195,0.512,0,0.707l4.243,4.242 c0.098,0.098,0.226,0.146,0.354,0.146s0.256-0.049,0.354-0.146c0.195-0.195,0.195-0.512,0-0.707L17.657,16.95z"
                  />
                  <motion.path
                    className="fill-bg"
                    initial={{ opacity: 0, rotate: 45 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 45 }}
                    transition={{
                      duration: 1,
                      ease: "easeOut",
                    }}
                    d="M10.808,10.101c-0.195-0.195-0.512-0.195-0.707,0s-0.195,0.512,0,0.707l4.243,4.242 c0.098,0.098,0.226,0.146,0.354,0.146s0.256-0.049,0.354-0.146c0.195-0.195,0.195-0.512,0-0.707L10.808,10.101z"
                  />
                  <motion.path
                    className="fill-bg"
                    initial={{ opacity: 0, rotate: 45 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 45 }}
                    transition={{
                      duration: 1,
                      ease: "easeOut",
                    }}
                    d="M14.343,16.95l-4.243,4.242c-0.195,0.195-0.195,0.512,0,0.707c0.098,0.098,0.226,0.146,0.354,0.146 s0.256-0.049,0.354-0.146l4.243-4.242c0.195-0.195,0.195-0.512,0-0.707S14.539,16.755,14.343,16.95z"
                  />
                  <motion.path
                    className="fill-bg"
                    initial={{ opacity: 0, rotate: 45 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 45 }}
                    transition={{
                      duration: 1,
                      ease: "easeOut",
                    }}
                    d="M21.192,10.101l-4.243,4.242c-0.195,0.195-0.195,0.512,0,0.707c0.098,0.098,0.226,0.146,0.354,0.146 s0.256-0.049,0.354-0.146l4.243-4.242c0.195-0.195,0.195-0.512,0-0.707S21.388,9.905,21.192,10.101z"
                  />
                </motion.svg>
              </button>
            )}
            {bg && (
              <div
                className={twMerge(
                  "relative h-full w-full content-end overflow-hidden rounded-2xl p-2",
                  aspectRatio,
                )}
              >
                <Img
                  layout={bg.layout ?? true}
                  layoutId={bg.layoutId}
                  className="-z-10 object-cover"
                  src={bg.src}
                  fill
                  alt={bg.alt}
                />
                {bg.content && (
                  <div
                    className="bg-bg text-title cursor-text rounded-lg p-2 pb-3.5 drop-shadow-md"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {bg.content}
                  </div>
                )}
              </div>
            )}
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
