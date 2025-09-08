"use client";

import useScroll from "@/hooks/useScroll";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

export type ContextList = {
  id: string | number;
  label: string | React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  onClick: () => void | ((...args: unknown[]) => void);
  disabled?: boolean;
  visible?: boolean;
};

const ContextMenu = ({
  list,
  children,
  className,
  ...rest
}: {
  list: ContextList[];
  children: React.ReactNode;
  className?: string;
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
    setPosition({ x: e.pageX, y: e.pageY });
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
    li.onClick();
    setIsVisible(false);
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

  return (
    <div onContextMenu={handleContextMenu}>
      {children}
      {isVisible && (
        <div
          ref={menuRef}
          style={{ top: position.y, left: position.x }}
          className="absolute z-50 max-w-xs overflow-x-hidden rounded-md border border-current/75 shadow-lg"
          {...rest}
        >
          <ul
            className={twMerge(
              "bg-bg divide-y divide-current *:select-none *:hover:bg-current/5",
              className,
            )}
          >
            {list
              ?.filter((li) => li.visible !== false)
              ?.map((li) => (
                <li
                  key={li.id}
                  className={twMerge(
                    "flex w-full cursor-pointer items-center gap-2.5 p-2 *:max-w-6",
                    li.disabled && "opacity-25",
                  )}
                  onClick={() => !li.disabled && listItemClick(li)}
                >
                  {li.startIcon}
                  {li.label}
                  {li.endIcon}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ContextMenu;
