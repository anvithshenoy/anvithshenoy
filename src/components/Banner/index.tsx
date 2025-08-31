"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const Banner = () => {
  const searchParams = useSearchParams();
  const isDevMode = searchParams.get("mode") === process.env.NEXT_PUBLIC_MODE;

  useEffect(() => {
    if (typeof window === "undefined") return;

    const root = document.documentElement;

    if (isDevMode) {
      root.style.setProperty("--bg", "#0f172a"); // e.g., dark background
      root.style.setProperty("--fg", "#facc15"); // e.g., yellow foreground
    } else {
      root.style.removeProperty("--bg");
      root.style.removeProperty("--fg");
    }
  }, [isDevMode]);

  return (
    <header className="inline-flex w-full items-center justify-start gap-2.5 border-b px-5 py-2.5 text-3xl">
      <div className="bg-fg relative aspect-square max-h-12 w-full max-w-12 overflow-hidden rounded-full">
        <Image
          src={
            "https://anvithshenoy.vercel.app/myself.jpg"
            //   "https://images.unsplash.com/photo-1605092676920-8ac5ae40c7c8?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          fill
          alt=""
          role="presentation"
          className="object-cover object-top"
        />
      </div>
      <strong className="hidden uppercase sm:inline">Anvith Shenoy B</strong>
      <strong className="inline sm:hidden">Shenoy Devfolio</strong>

      <div className="flex-1" />

      <p className="hidden text-2xl sm:inline sm:border-l sm:px-4 sm:pe-0">
        Front End Devfolio
      </p>
    </header>
  );
};

export default Banner;
