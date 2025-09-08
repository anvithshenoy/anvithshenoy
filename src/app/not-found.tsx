"use client";

import Header from "@/components/Header";
import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <Header />
      <main className="flex h-[calc(100svh-5rem)] w-full flex-col items-center justify-center gap-3.5">
        <h1 className="sr-only">404 - Page not found</h1>
        <div
          aria-hidden="true"
          className="font-head inline-flex items-center text-7xl leading-none uppercase"
        >
          4<span className="animate-pulse">o</span>4
        </div>
        <p>Looks like you found something that shouldn&apos;t exist yet.</p>

        <Link href={"/"} className="">
          Take me Home
        </Link>
      </main>
    </>
  );
};

export default NotFound;
