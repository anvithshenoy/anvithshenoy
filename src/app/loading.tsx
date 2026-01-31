"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

import Image from "next/image";
import { toast } from "sonner";

export default function LoadingContent() {
  const [timer, setTimer] = useState(0);
  const [loading, setLoading] = useState(false);
  const [fact, setFact] = useState(
    "Unfortunately taking looonger than expected...",
  );

  async function fetchRandomFact() {
    setLoading(true);
    await fetch("https://uselessfacts.jsph.pl/random.json?language=en")
      .then((res) => res.json())
      .then((data) => setFact(data.text))
      .catch(() => toast.error("Some error popped up in the way..."))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <progress className="absolute top-0 right-0 h-0.5 w-full" />
      <button
        className="absolute top-3.5 right-3.5 z-50 flex items-center justify-center gap-2 rounded-sm text-xl underline"
        onClick={fetchRandomFact}
      >
        <svg
          fill="currentColor"
          height={24}
          width={24}
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 512 512"
          xmlSpace="preserve"
        >
          <path d="M256,0C114.609,0,0,114.609,0,256s114.609,256,256,256s256-114.609,256-256S397.391,0,256,0z M256,472 c-119.297,0-216-96.703-216-216S136.703,40,256,40s216,96.703,216,216S375.297,472,256,472z"></path>{" "}
          <g>
            <polygon points="336,224 336,240 384,208.25 336,176 336,192 272,192 208,288 128,288.25 128,320 224,320 288,224 "></polygon>{" "}
            <polygon points="219.719,241.578 238.391,213.578 224,192 128,192 128,224 208,224 "></polygon>{" "}
            <polygon points="336,288 288,288 276.281,270.422 257.625,298.422 272,320 336,320 336,336 384,303.75 336,272 "></polygon>{" "}
          </g>
        </svg>
        <span>Random Fact</span>
      </button>

      {timer >= 3 && (
        <motion.div
          animate={{
            opacity: [0, 1],
          }}
          className="relative flex h-screen w-full flex-col items-center justify-end overflow-visible"
        >
          <span className="loader" />
          <Image
            src={"/loading.gif"}
            alt="Loading"
            width={200}
            height={200}
            objectFit="contain"
            className="relative -bottom-1"
          />
          <div className="bg-fg text-bg flex h-1/2 w-full flex-col items-center justify-start gap-2.5 p-2.5 text-center">
            <AnimatePresence mode="wait">
              {!loading && (
                <motion.p
                  animate={{ opacity: [0, 1], scale: [0.95, 1] }}
                  exit={{
                    opacity: 0,
                    scale: 0.95,
                  }}
                  className="max-w-prose text-2xl"
                >
                  {fact}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </>
  );
}
