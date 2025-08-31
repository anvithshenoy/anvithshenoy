"use client";

import React, { useState } from "react";

export type TabType = {
  id: string;
  label: string | React.ReactNode;
  content: React.ReactNode;
  icon?: React.ReactNode;
};

interface TabProps {
  defaultTab?: string;
  tabs: TabType[];
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
      <nav className="bg-bg sticky top-0 z-50 mx-auto flex w-99 items-center justify-start gap-2.5 border-y px-3 py-1 text-xl">
        <ul className="tabs">
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className={activeTab === tab.id ? "active-tab" : "tab"}
            >
              <button onClick={() => setActiveTab(tab.id)}>{tab.label}</button>
              <span id="indicator" />
            </li>
          ))}
        </ul>

        <div className="flex-1" />

        <ul className="hidden sm:inline-flex">
          {tabs.map((tab) => {
            if (!tab?.icon) return;
            return (
              <li
                key={tab.id}
                className={[
                  "flex aspect-square h-full max-h-12 w-full max-w-12 items-center justify-center rounded-full p-2",
                  activeTab === tab.id && "bg-fg",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <button onClick={() => setActiveTab(tab.id)}>
                  {tab?.icon}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {children}

      <section className={className}>
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </section>
    </>
  );
};

export default Tabs;
