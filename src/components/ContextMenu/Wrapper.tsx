"use client";

import ContextMenu, { ContextList } from ".";

import contextMenu from "@/app/context";

const ContextWrapper = ({
  customList = contextMenu,
  children,
  drag,
  className,
  ...rest
}: {
  customList?: ContextList[];
  children: React.ReactNode;
  className?: string;
  drag?: boolean;
}) => {
  return (
    <ContextMenu
      enableDrag={drag}
      list={customList}
      className={className}
      {...rest}
    >
      {children}
    </ContextMenu>
  );
};

export default ContextWrapper;
