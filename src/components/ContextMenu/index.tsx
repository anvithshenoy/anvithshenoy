"use client";

import { AnimatePresence, motion } from "motion/react";
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

const ContextMenu = ({
  list,
  children,
  className,
  disabled = false,
  enableDrag = false,
  background,
  ...rest
}: {
  list: ContextMenuSection[];
  children: React.ReactNode;
  className?: string;
  enableDrag?: boolean;
  disabled?: boolean;
  background?: string;
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

  const listItemClick = (group: ContextMenuSection, li: ContextMenuItem) => {
    if (!group.disabled || !li.disabled) {
      li.onClick();
      setIsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("scroll", () => setIsVisible(false));
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("keydown", handleKeyDown);
      document.addEventListener("scroll", () => setIsVisible(false));
    };
  }, []);

  if (!list) {
    throw new Error("Menu List is not provided!");
  }

  if (disabled) return children;

  return (
    <div onContextMenu={handleContextMenu}>
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            drag={enableDrag}
            ref={menuRef}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
            style={{ top: position.y, left: position.x, background }}
            className={twMerge(
              "absolute z-50 w-full max-w-3xs divide-y divide-current/25 overflow-x-hidden rounded-md border border-current/75 shadow *:select-none *:*:hover:bg-current/5",
              className,
            )}
            {...rest}
          >
            {list
              .filter((group) => group.visible !== false)
              .map((group) => (
                <ul key={group.sectionId} className={group.className}>
                  {group.section
                    .filter((li: ContextMenuItem) => li.visible !== false)
                    .map((li: ContextMenuItem) => (
                      <li
                        key={li.id}
                        className={twMerge(
                          "flex w-full items-center gap-2.5 p-2 select-none *:max-h-6",
                          group.disabled || li.disabled
                            ? "cursor-not-allowed opacity-25"
                            : "cursor-pointer",
                          li.className,
                        )}
                        onClick={() => listItemClick(group, li)}
                      >
                        {li.startIcon}
                        {li.label}
                        {li.endIcon}
                      </li>
                    ))}
                </ul>
              ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContextMenu;
