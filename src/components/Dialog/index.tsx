"use client";

import { useLenis } from "lenis/react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useEffect, useRef } from "react";

const Modal = ({
  open = false,
  onClose,
  bg,
  children,
}: {
  open: boolean;
  onClose: () => void;
  bg?: { src: string; alt: string; layoutId?: string };
  children?: React.ReactNode;
}) => {
  const lenis = useLenis();

  const modalRef = useRef<HTMLDivElement>(null);
  const Img = motion(Image);

  useEffect(() => {
    if (open) {
      lenis?.stop();
    } else {
      lenis?.start();
    }
  }, [open, lenis]);

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
  }, [open, onClose, lenis]);

  // Close on outside click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <div
          className="bg-fg/35 fixed top-0 right-0 z-50 h-dvh w-dvw place-items-center content-center backdrop-blur-xs"
          onClick={handleBackdropClick}
        >
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-bg mx-auto flex max-w-sm flex-col overflow-hidden rounded-2xl p-1.5 drop-shadow-2xl"
          >
            {bg && (
              <div className="relative aspect-[9/16] w-full content-end overflow-hidden rounded-2xl p-2.5">
                <Img
                  layoutId={bg.layoutId}
                  className="-z-10 object-cover"
                  src={bg.src}
                  fill
                  alt={bg.alt}
                />
                <p
                  className="bg-bg cursor-text rounded-xl p-1.5 pb-3.5"
                  onClick={(e) => e.stopPropagation()}
                >
                  Minim reprehenderit ad excepteur sit amet laboris eu
                  consectetur laborum esse dolor.
                </p>
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
