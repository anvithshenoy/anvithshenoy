import { AnimatePresence, motion } from "motion/react";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

import Button from "@/components/Button";

export type ListItem = {
  id: string;
  label: string | React.ReactNode;
  onClick?: (() => void) | ((...args: unknown[]) => void);
  icon?: {
    start?: React.ReactNode;
    end?: React.ReactNode;
  };
  children?: ListItem[];
  display?: boolean;
};

const CollapsibleItem = ({
  item,
  onSelect,
}: {
  item: ListItem;
  onSelect?: (item: ListItem) => void;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const hasChildren = item.children && item.children.length > 0;

  const handleClick = () => {
    if (hasChildren) {
      setIsOpen(!isOpen);
    } else {
      onSelect?.(item);
      item.onClick?.();
    }
  };

  return (
    <li>
      <Button
        className={twMerge(
          "inline-flex cursor-pointer items-start gap-1.5 text-xl select-none",
          hasChildren && "font-bold",
        )}
        onClick={handleClick}
      >
        {item?.icon?.start}
        {item.label}
        {item?.icon?.end}

        <AnimatePresence>
          {hasChildren && (
            <motion.svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-fg aspect-square h-6"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
            >
              <motion.line
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                x1="12"
                x2="12"
                y1="19"
                y2="5"
                className="stroke-fg"
                animate={{
                  rotate: isOpen ? 90 : 0,
                }}
              />
              <line
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                x1="5"
                x2="19"
                y1="12"
                y2="12"
                className="stroke-fg"
              />
            </motion.svg>
          )}
        </AnimatePresence>
      </Button>

      <AnimatePresence>
        {hasChildren && isOpen && (
          <motion.ul
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              ease: "easeOut",
            }}
            className="ms-4 mb-2 first-of-type:mt-2"
          >
            {item.children!.map((child) => (
              <CollapsibleItem
                key={child.id}
                item={child}
                onSelect={onSelect}
              />
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
};

const CollapsibleList = ({
  items,
  onSelect,
}: {
  items: ListItem[];
  onSelect?: (item: ListItem) => void;
}) => (
  <ul className="list-none">
    {items
      .filter((item) => item.display !== false)
      .map((item) => (
        <CollapsibleItem key={item.id} item={item} onSelect={onSelect} />
      ))}
  </ul>
);

export default CollapsibleList;
