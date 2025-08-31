"use client";

import { AnimatePresence, motion } from "motion/react";
import React, { useState } from "react";

interface TabProps {
  defaultTab?: string;
  tabs: {
    id: string;
    label: string | React.ReactNode;
    content: React.ReactNode;
  }[];
  className?: string;
  children?: React.ReactNode;
}

const Tabs: React.FC<TabProps> = ({
  defaultTab,
  tabs,
  className = "",
  children,
}) => {
  const [activeTab, setActiveTab] = useState<string>(defaultTab ?? tabs[0].id);

  return (
    <>
      <nav className="bg-bg sticky top-0 z-50 mx-auto flex w-99 gap-2.5 border-y px-3 py-1 text-xl">
        <ul className="tabs">
          <AnimatePresence mode="sync">
            {tabs.map((tab) => (
              <li
                key={tab.id}
                className={activeTab === tab.id ? "active-tab" : "tab"}
              >
                <button onClick={() => setActiveTab(tab.id)}>
                  {tab.label}
                </button>
                <motion.span
                  initial={{
                    opacity: 0,
                    x: -100,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: 100,
                  }}
                  layoutId="indicator"
                />
              </li>
            ))}
          </AnimatePresence>
        </ul>

        <div className="flex-1" />

        {children}
      </nav>

      <section className={className}>
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </section>
    </>
  );
};

export default Tabs;
