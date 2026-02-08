"use client";

import { AnimatePresence, motion, Variants } from "motion/react";
import React, { useEffect, useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";

import "./styles.css";

export type TabType = {
  id: string;
  label: string | React.ReactNode;
  content: React.ReactNode;
  icon?: React.ReactNode;
  condition?: boolean;
};

interface TabProps {
  defaultTab?: string;
  tabs: TabType[];
  tabClassName?: string;
  tabIndicatorClassName?: string;
  className?: string;
  children?: React.ReactNode;
  reduceMotion?: boolean;
}

const Tabs: React.FC<TabProps> = (props) => {
  const {
    defaultTab,
    tabs,
    tabClassName,
    tabIndicatorClassName,
    className = "",
    children,
    reduceMotion,
  } = props;

  const [activeTab, setActiveTab] = useState<string>(defaultTab ?? tabs[0].id);

  const filteredTabs = useMemo(
    () => tabs.filter(({ condition }) => condition ?? true),
    [tabs],
  );

  const motionProps: Variants = !reduceMotion
    ? {
        initial: { opacity: 0, x: 10 },
        animate: { opacity: 1, x: 0, transition: { duration: 0.25 } },
        exit: { opacity: 0, x: -10 },
      }
    : {};

  const tabChange = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
    e.currentTarget.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });

    setActiveTab(id);
  };

  useEffect(() => {
    const targetId = defaultTab ?? filteredTabs[0]?.id;
    if (targetId) {
      document.getElementById(targetId)?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [defaultTab, filteredTabs]);

  const displayContent: TabType =
    tabs.find(({ id }) => id === activeTab) ?? filteredTabs[0];

  return (
    <>
      <nav
        className={twMerge(
          "flex items-center justify-start gap-2.5 border-y px-4 py-1 text-xl",
          tabClassName,
        )}
      >
        <ul className="tabs">
          {filteredTabs.map((tab) => (
            <li
              key={tab.id}
              className={activeTab === tab.id ? "active-tab" : "tab"}
            >
              <button
                id={tab.id}
                onClick={(e) => {
                  tabChange(e, tab.id);
                }}
              >
                {tab.label}
              </button>
              <span id="indicator" className={tabIndicatorClassName} />
            </li>
          ))}
        </ul>

        <div className="flex-1" />

        {filteredTabs.some((tab) => tab.icon) && (
          <ul className="hidden sm:inline-flex">
            {filteredTabs.map((tab) => {
              if (!tab?.icon) return;
              return (
                <li
                  key={tab.id}
                  className={twMerge(
                    "flex aspect-square h-full max-h-12 w-full max-w-12 items-center justify-center rounded-full fill-current p-2",
                    activeTab === tab.id
                      ? twMerge(
                          "bg-fg stroke-bg fill-bg",
                          tabIndicatorClassName,
                        )
                      : "stroke-current",
                  )}
                >
                  <button onClick={() => setActiveTab(tab.id)}>
                    {tab?.icon}
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </nav>

      {children}

      <AnimatePresence mode="wait">
        <motion.section
          {...motionProps}
          key={displayContent.id}
          className={className}
        >
          {displayContent.content}
        </motion.section>
      </AnimatePresence>
    </>
  );
};

export default Tabs;

export const SwapyTitle = ({
  title,
  clx,
}: {
  title: string | React.ReactNode;
  clx?: string;
}) => {
  const preventDef = (e: React.MouseEvent) => e.preventDefault();

  return (
    <div className="flex w-full flex-1 items-start justify-start text-4xl">
      <h2
        className={twMerge("text-title flex-1 indent-2.5 text-shadow-sm", clx)}
      >
        {title}
      </h2>
      <svg
        data-swapy-handle
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="aspect-square h-6 w-6 opacity-35 transition-opacity duration-300 ease-out hover:animate-pulse hover:opacity-100 active:animate-none active:opacity-100"
        onClick={preventDef}
      >
        <path
          d="M16.1924 5.65683C16.5829 5.2663 16.5829 4.63314 16.1924 4.24261L13.364 1.41419C12.5829 0.633139 11.3166 0.633137 10.5355 1.41419L7.70711 4.24261C7.31658 4.63314 7.31658 5.2663 7.70711 5.65683C8.09763 6.04735 8.73079 6.04735 9.12132 5.65683L11 3.77812V11.0503H3.72784L5.60655 9.17157C5.99707 8.78104 5.99707 8.14788 5.60655 7.75735C5.21602 7.36683 4.58286 7.36683 4.19234 7.75735L1.36391 10.5858C0.582863 11.3668 0.582859 12.6332 1.36391 13.4142L4.19234 16.2426C4.58286 16.6332 5.21603 16.6332 5.60655 16.2426C5.99707 15.8521 5.99707 15.219 5.60655 14.8284L3.8284 13.0503H11V20.2219L9.12132 18.3432C8.73079 17.9526 8.09763 17.9526 7.7071 18.3432C7.31658 18.7337 7.31658 19.3669 7.7071 19.7574L10.5355 22.5858C11.3166 23.3669 12.5829 23.3669 13.364 22.5858L16.1924 19.7574C16.5829 19.3669 16.5829 18.7337 16.1924 18.3432C15.8019 17.9526 15.1687 17.9526 14.7782 18.3432L13 20.1213V13.0503H20.071L18.2929 14.8284C17.9024 15.219 17.9024 15.8521 18.2929 16.2426C18.6834 16.6332 19.3166 16.6332 19.7071 16.2426L22.5355 13.4142C23.3166 12.6332 23.3166 11.3668 22.5355 10.5858L19.7071 7.75735C19.3166 7.36683 18.6834 7.36683 18.2929 7.75735C17.9024 8.14788 17.9024 8.78104 18.2929 9.17157L20.1716 11.0503H13V3.87867L14.7782 5.65683C15.1687 6.04735 15.8019 6.04735 16.1924 5.65683Z"
          className="fill-current"
        />
      </svg>
    </div>
  );
};
