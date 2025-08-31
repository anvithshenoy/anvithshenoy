"use client";

import { ReactLenis } from "lenis/react";

export default function Lenis({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ReactLenis root>{children}</ReactLenis>;
}
