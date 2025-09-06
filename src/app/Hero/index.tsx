"use client";

import Link from "next/link";

import Cards, { Card } from "@/components/Card/DragCard";

const HeroSection = () => {
  const cardList: Card[] = [
    {
      src: "https://images.unsplash.com/photo-1756747646179-d5652667914e?q=80&w=1499&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Cosmos",
      angle: -25,
      location: {
        x: "30%",
        y: 50,
      },
    },
    {
      src: "https://anvithshenoy.vercel.app/myself.jpg",
      alt: "Anvith Shenoy",
      angle: 15,
      location: {
        x: "10%",
        y: -40,
      },
    },
    {
      src: "/33.jpg",
      alt: "Digital Collage",
      angle: 8,
      location: {
        x: 45,
        y: "25%",
      },
    },
    {
      src: "/IMG_1531.png",
      alt: "My Life",
      angle: 0,
      location: {
        x: "35%",
        y: "35%",
      },
    },
  ];

  return (
    <section className="relative mx-auto flex w-99 flex-col-reverse items-end justify-start gap-6 p-4 text-xl leading-relaxed sm:grid-cols-2 sm:flex-row">
      <div className="w-full">
        <p className="ms-auto max-w-prose px-1.5 text-start lowercase underline underline-offset-8 sm:text-end">
          #Work_in_progress #Shenoy_Devfolio #WIP{" "}
          <Link
            href={"https://www.google.com/search?q=anvithshenoy"}
            target="_blank"
          >
            #anvithshenoy
          </Link>
        </p>
      </div>
      {/* <h2 className="rounded-full border text-7xl drop-shadow-md">
        {new Date().getFullYear()}
      </h2> */}
      <div className="font-bg bg-fg/75 relative flex aspect-square h-full max-h-[75vh] w-full max-w-[75vh] items-center justify-center overflow-hidden rounded-2xl bg-[url(/backdrop.jpg)] bg-cover p-4 bg-blend-darken inset-shadow-sm drop-shadow-md">
        <h1 className="text-bg text-center text-5xl uppercase text-shadow-md">
          Devfolio {new Date().getFullYear()}
        </h1>
        <Cards srcList={cardList} />
      </div>
    </section>
  );
};

export default HeroSection;
