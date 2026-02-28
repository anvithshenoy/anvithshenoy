"use client";

import Link from "next/link";

import Cards, { Card } from "@/components/Card/DragCard";

import { CONFIG, HASHMAP } from "@/lib/config";
import { preventDefault } from "@/lib/utils";

const {
  HASH,
  CARDS,
  CURRENT: { YEAR },
} = CONFIG;
const cardList: Card[] = CARDS;

export default function HeroSection() {
  const currentYear = YEAR;

  return (
    <section className="relative mx-auto flex w-full flex-col-reverse items-end justify-start gap-6 px-2 py-4 text-xl leading-relaxed sm:grid-cols-2 sm:flex-row">
      <HashList />

      <div
        data-disable-context
        onContextMenu={preventDefault}
        className="text-fg bg-fg/75 relative flex aspect-square h-full w-full items-center justify-center overflow-hidden rounded-2xl bg-[url(/backdrop.jpg)] bg-cover p-4 bg-blend-darken inset-shadow-sm drop-shadow-md lg:max-w-1/3"
      >
        <h1 className="text-title text-center text-5xl uppercase select-none text-shadow-md">
          Devfolio {currentYear}
        </h1>
        <Cards srcList={cardList} />
      </div>
    </section>
  );
}

const HashList = () => (
  <div className="w-full text-end text-wrap lowercase *:inline-block">
    {HASH.map(({ displayLabel, link }: HASHMAP) => {
      if (!link) return <p key={displayLabel}>#{displayLabel}</p>;

      return (
        <Link
          key={displayLabel}
          href={link}
          target="_blank"
          className="text-title"
        >
          #{displayLabel}
        </Link>
      );
    })}
  </div>
);
