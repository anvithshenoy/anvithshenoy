"use client";

import ContextMenu, { ContextMenuSection } from ".";

import contextMenu from "@/app/context";

const ContextWrapper = ({
  customList = contextMenu,
  drag,
  className,
  bg = "#fff",
  ...rest
}: {
  customList?: ContextMenuSection[];
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
    />
  );
};

export default ContextWrapper;
