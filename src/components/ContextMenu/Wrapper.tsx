"use client";

import ContextMenu from ".";

import contextMenu from "@/app/context";

const ContextWrapper = ({
  children,
  className,
  ...rest
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <ContextMenu list={contextMenu} className={className} {...rest}>
      {children}
    </ContextMenu>
  );
};

export default ContextWrapper;
