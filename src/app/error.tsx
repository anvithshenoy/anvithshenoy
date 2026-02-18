"use client";

import { useEffect } from "react";

import { motion } from "motion/react";
import Link from "next/link";

import Header from "@/components/Header";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <>
      <Header />
      <main className="relative flex h-[calc(100svh-4.3rem)] max-w-screen flex-col items-center justify-center gap-3.5 overflow-x-hidden">
        <h1 className="sr-only">Something went wrong!</h1>

        <div
          aria-hidden="true"
          className="font-head inline-flex items-center text-7xl leading-none uppercase"
        >
          {"Error".split("").map((char, idx) => (
            <motion.span
              key={char + "_" + idx}
              animate={{
                opacity: [0, 1, 0],
              }}
              transition={{
                repeat: Infinity,
                delay: idx,
              }}
            >
              {char}
            </motion.span>
          ))}
        </div>
        <p>Looks like you found something that shouldn&apos;t exist yet.</p>

        <Link href={"/"} className="text-title">
          Take me Home
        </Link>
      </main>
    </>
  );
}
