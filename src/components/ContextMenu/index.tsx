"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

import useScroll from "@/hooks/useScroll";

export type ContextList = {
  id: string | number;
  label: string | React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  onClick: () => void | ((...args: unknown[]) => void);
  disabled?: boolean;
  visible?: boolean;
  className?: string;
};

const ContextMenu = ({
  list,
  children,
  className,
  disabled = false,
  enableDrag = false,
  ...rest
}: {
  list: ContextList[];
  children: React.ReactNode;
  className?: string;
  enableDrag?: boolean;
  disabled?: boolean;
}) => {
  const menuRef = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const handleContextMenu = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest("[data-disable-context]")) return;

    e.preventDefault();

    const clickX = e.pageX;
    const clickY = e.pageY;

    const menuWidth = 256; // Or dynamically measure later
    const menuHeight = list.length * 40;
    const padding = 10;

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const scrollX = window.scrollX;
    const scrollY = window.scrollY;

    let x = clickX;
    let y = clickY;

    // Prevent right overflow (based on document scroll width, not just visible area)
    if (clickX + menuWidth + padding > scrollX + viewportWidth) {
      x = scrollX + viewportWidth - menuWidth - padding;
    }

    // Prevent bottom overflow
    if (clickY + menuHeight + padding > scrollY + viewportHeight) {
      y = scrollY + viewportHeight - menuHeight - padding;
    }

    // Optional: clamp to (0, 0) if still negative
    x = Math.max(x, padding);
    y = Math.max(y, padding);

    setPosition({ x, y });
    setIsVisible(true);
  };

  const handleClick = (e: MouseEvent) => {
    // Hide if clicking outside the context menu
    if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
      setIsVisible(false);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsVisible(false);
    }
  };

  const listItemClick = (li: ContextList) => {
    if (!li.disabled) {
      li.onClick();
      setIsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useScroll({ open: isVisible });

  if (!list) {
    throw new Error("Menu List is not provided!");
  }

  if (disabled) return children;

  return (
    <div onContextMenu={handleContextMenu}>
      {children}
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.div
            drag={enableDrag}
            ref={menuRef}
            style={{ top: position.y, left: position.x }}
            className="absolute z-50 w-3xs max-w-3xs overflow-x-hidden rounded-md border border-current/75 shadow-lg"
            {...rest}
          >
            <ul
              className={twMerge(
                "bg-bg divide-y divide-current/25 *:select-none *:hover:bg-current/5",
                className,
              )}
            >
              {list
                ?.filter((li) => li.visible !== false)
                ?.map((li) => (
                  <li
                    key={li.id}
                    className={twMerge(
                      "flex w-full cursor-pointer items-center gap-2.5 p-2 *:max-h-6",
                      li.disabled && "opacity-25",
                      li.className,
                    )}
                    onClick={() => listItemClick(li)}
                  >
                    {li.startIcon}
                    {li.label}
                    {li.endIcon}
                  </li>
                ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContextMenu;
