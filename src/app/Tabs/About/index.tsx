"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { createSwapy, Swapy } from "swapy";

import Card from "@/components/Card";
import { SwapyTitle } from "@/components/Tabs";

import { useConfig } from "@/lib/config";
import { links } from "@/lib/socials";

const AboutMe = () => {
  const { NAME, PROFILE_PIC, PROFILE_DESC, PROFILE_TITLE } = useConfig();

  const swapy = useRef<Swapy | null>(null);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (container.current) {
      swapy.current = createSwapy(container.current);
    }

    return () => {
      swapy.current?.destroy();
    };
  }, []);

  return (
    <div
      ref={container}
      className="grid grid-cols-1 px-3.5 py-2 sm:grid-cols-2 sm:gap-3.5 lg:grid-cols-3"
    >
      <section className="relative row-span-3 inline-flex aspect-3/4 size-full flex-col items-start overflow-hidden rounded-2xl bg-linear-to-b from-transparent to-black/35 p-4 text-xl drop-shadow-md sm:aspect-square">
        <p className="mt-auto indent-3 text-gray-100">Hello, I am</p>
        <h1 className="text-5xl text-shadow-md">{NAME}</h1>
        <Image
          src={PROFILE_PIC}
          alt={NAME}
          className="-z-10 object-cover mix-blend-darken"
          draggable={false}
          fill
          sizes="100%"
        />
      </section>

      <section data-swapy-slot="intro" className="border-b lg:col-span-2">
        <div data-swapy-item="intro" className="space-y-1.5 py-2.5">
          <SwapyTitle title="Introduction" />

          <Card
            cardTitle={
              <div className="font-head text-title">{PROFILE_TITLE}</div>
            }
          >
            <p className="max-w-prose text-xl">{PROFILE_DESC}</p>
          </Card>
        </div>
      </section>

      <section
        data-swapy-slot="difference"
        className="border-b px-2 sm:border-r sm:border-b-0"
      >
        <div
          data-swapy-item="difference"
          className="flex w-full flex-col items-start gap-2.5 py-2.5"
        >
          <SwapyTitle title="What makes me, me?" clx="indent-0 ps-2 text-fg!" />

          <div className="group w-full px-2 text-xl">
            <p>Feel great to have me on your team.</p>
            <p>Why? Because, when it's me, it's all new all different.</p>
            <p className="mt-2 text-center">
              <em className="pe-2 underline">My Motto</em>
              <span>All in due time...</span>
            </p>
          </div>
        </div>
      </section>

      <section data-swapy-slot="contact">
        <div
          data-swapy-item="contact"
          className="flex w-full flex-col items-start gap-2.5 py-2.5"
        >
          <SwapyTitle title="Get In Touch" />

          <div className="group flex w-full flex-wrap items-start justify-start gap-1.5">
            {links.map(({ display, href, bg = "bg-red-400" }, idx) => (
              <Link
                key={href.toString() + "_" + idx}
                href={href}
                target="_blank"
                className={`card ${bg} text-4xl`}
              >
                {display}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
