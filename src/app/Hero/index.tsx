"use client";

import dynamic from "next/dynamic";
import Link from "next/link";

import { Card } from "@/components/Card/DragCard";

const Cards = dynamic(() => import("@/components/Card/DragCard"), {
  ssr: false,
});

const HeroSection = () => {
  const cardList: Card[] = [
    {
      src: "https://images.unsplash.com/photo-1756747646179-d5652667914e?q=80&w=1499&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Cosmos",
    },
    {
      src: "https://anvithshenoy.vercel.app/myself.jpg",
      alt: "Anvith Shenoy",
    },
    {
      src: "/33.jpg",
      alt: "Digital Collage",
    },
  ];

  return (
    <section className="mx-auto flex w-99 flex-col-reverse items-end justify-start gap-6 p-4 text-xl leading-relaxed sm:grid-cols-2 sm:flex-row">
      <p className="w-full max-w-prose px-1.5 text-start lowercase underline underline-offset-8 sm:text-end">
        #Work_in_progress #Shenoy_Devfolio #WIP{" "}
        <Link
          href={"https://www.google.com/search?q=anvithshenoy"}
          target="_blank"
        >
          #anvithshenoy
        </Link>
      </p>
      <div className="font-bg relative grid aspect-square h-full max-h-[75vh] w-full max-w-[75vh] place-content-center overflow-hidden rounded-2xl bg-blue-700 p-4 inset-shadow-sm drop-shadow-md">
        <h1 className="text-bg text-center text-6xl uppercase text-shadow-md">
          Devfolio {new Date().getFullYear()}
        </h1>
        {/* <h2 className="text-bg z-50 text-6xl drop-shadow-md">
              {new Date().getFullYear()}
            </h2> */}
        <Cards srcList={cardList} />
      </div>
    </section>
  );
};

export default HeroSection;
