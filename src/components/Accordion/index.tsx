"use client";

import React from "react";

interface AccordionProps {
  title: string;
  id: string;
  open: string | null;
  setOpen: (id: string | null) => void;
  children?: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  id,
  open,
  setOpen,
  children,
}) => {
  const isOpen = open === id;

  const handleToggle = () => {
    setOpen(isOpen ? null : id);
  };

  return (
    <section>
      <h2 onClick={handleToggle} style={{ cursor: "pointer" }}>
        {title} {isOpen ? "[-]" : "[+]"}
      </h2>
      {isOpen && <div>{children}</div>}
    </section>
  );
};

export default Accordion;
