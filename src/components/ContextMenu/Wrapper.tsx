"use client";

import ContextMenu, { ContextMenuSection } from ".";

import contextMenu from "@/app/context";

const ContextWrapper = ({
  customList = contextMenu,
  children,
  drag,
  className,
  bg = "#fff",
  ...rest
}: {
  customList?: ContextMenuSection[];
  children: React.ReactNode;
  className?: string;
  drag?: boolean;
  bg?: string;
}) => {
  return (
    <ContextMenu
      enableDrag={drag}
      list={customList}
      className={className}
      background={bg}
      {...rest}
    >
      {children}
    </ContextMenu>
  );
};

export default ContextWrapper;
