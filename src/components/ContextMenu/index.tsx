"use client";

import { AnimatePresence, motion, stagger, Variants } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

export type ContextMenuItem = {
  id: string | number;
  label: string | React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  onClick: () => void | ((...args: unknown[]) => void);
  disabled?: boolean;
  visible?: boolean;
  className?: string;
};

// Represents a section/group of menu items
export type ContextMenuSection = {
  sectionId: string | number;
  section: ContextMenuItem[];
  className?: string;
  disabled?: boolean;
  visible?: boolean;
};

export default function ContextMenu({
  list,
  className,
  disabled = false,
  enableDrag = false,
  background,
  animateDuration = 0.3,
  ...rest
}: {
  list: ContextMenuSection[];
  className?: string;
  enableDrag?: boolean;
  disabled?: boolean;
  animateDuration?: number;
  background?: string;
}) {
  const menuRef = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [position, setPosition] = useState<{
    x: number | undefined;
    y: number | undefined;
  }>({
    x: undefined,
    y: undefined,
  });

  const handleContextMenu = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest("[data-disable-context]")) return;

    e.preventDefault();

    const padding = 8;

    const clickX = e.clientX;
    const clickY = e.clientY;

    // Set initial position first
    setPosition({ x: clickX, y: clickY });
    setIsVisible(true);

    requestAnimationFrame(() => {
      const menu = menuRef.current;
      if (!menu) return;

      const { offsetWidth, offsetHeight } = menu;

      let x = clickX;
      let y = clickY;

      if (x + offsetWidth + padding > window.innerWidth) {
        x = window.innerWidth - offsetWidth - padding;
      }

      if (y + offsetHeight + padding > window.innerHeight) {
        y = window.innerHeight - offsetHeight - padding;
      }

      x = Math.max(padding, x);
      y = Math.max(padding, y);

      setPosition({ x, y });
    });
  };

  const handleClick = (e: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
      setIsVisible(false);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsVisible(false);
    }
  };

  const ContainerVariants: Variants = {
    initial: {
      opacity: 0,
      scale: 0,
    },
    animate: {
      opacity: 1,
      scale: 1,
    },
    exit: {
      opacity: 0,
      scale: 0,
    },
  };

  const listVariants: Variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };

  useEffect(() => {
    const handleScroll = () => setIsVisible(false);

    document.addEventListener("click", handleClick);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("scroll", handleScroll, true);

    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("scroll", handleScroll, true);
    };
  }, []);

  useEffect(() => {
    document.body.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.body.removeEventListener("contextmenu", handleContextMenu);
    };
  }, [handleContextMenu]);

  if (!list) {
    throw new Error("Menu List is not provided!");
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.section
          variants={ContainerVariants}
          drag={enableDrag}
          ref={menuRef}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            type: "spring",
            duration: animateDuration,
            delayChildren: stagger(0.5 / list.length),
          }}
          style={{ top: position.y, left: position.x, background }}
          className={twMerge(
            "fixed z-100 w-full max-w-3xs origin-top-left divide-y divide-current/25 overflow-x-hidden rounded-md border border-current/75 shadow *:select-none *:*:hover:bg-current/5",
            className,
          )}
          {...rest}
        >
          {list
            .filter(({ visible = true }) => visible)
            .map((group) => {
              const { section, sectionId, className, disabled } = group;
              const onListClick = (e: React.MouseEvent) => {
                if (!disabled) return;
                e.preventDefault();
              };

              return (
                <menu
                  key={sectionId}
                  className={twMerge(
                    disabled &&
                      "cursor-not-allowed bg-gray-950/50 text-gray-400 opacity-50 hover:bg-gray-950/50",
                    className,
                  )}
                  onClick={onListClick}
                >
                  {section
                    .filter(({ visible = true }) => visible)
                    .map((li) => {
                      const {
                        id,
                        label,
                        onClick,
                        className,
                        disabled,
                        endIcon,
                        startIcon,
                      } = li;

                      return (
                        <motion.li
                          key={id}
                          variants={listVariants}
                          className={twMerge(
                            "flex w-full items-center gap-2.5 p-2 select-none *:max-h-6",
                            disabled
                              ? "cursor-not-allowed bg-gray-950/50 text-gray-400 opacity-50 hover:bg-gray-950/50"
                              : "cursor-pointer",
                            className,
                          )}
                          onClick={() => {
                            if (disabled) return;

                            onClick();
                            setIsVisible(false);
                          }}
                        >
                          {startIcon}
                          {label}
                          {endIcon}
                        </motion.li>
                      );
                    })}
                </menu>
              );
            })}
        </motion.section>
      )}
    </AnimatePresence>
  );
}
