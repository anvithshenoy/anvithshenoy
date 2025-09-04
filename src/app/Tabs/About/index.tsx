"use client";

import { SwapyTitle } from "@/components/Tabs";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { createSwapy, Swapy } from "swapy";

const AboutMe = () => {
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
      className="grid grid-cols-1 px-3.5 py-2 sm:grid-cols-3 sm:gap-3.5"
    >
      <div data-swapy-slot="profile">
        <div
          data-swapy-item="profile"
          className="text-bg bg-fg/35 relative inline-flex aspect-square size-full flex-col items-start overflow-hidden rounded-2xl p-4 text-xl drop-shadow-md"
        >
          <p className="mt-auto indent-0.5">Hello, I am</p>
          <SwapyTitle title="Anvith Shenoy B" clx="indent-0! text-6xl" />
          <Image
            src={
              "https://anvithshenoy.vercel.app/myself.jpg"
              //   "https://images.unsplash.com/photo-1605092676920-8ac5ae40c7c8?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            fill
            alt="Anvith Shenoy B"
            className="-z-10 object-cover mix-blend-darken"
            draggable={false}
          />
        </div>
      </div>

      <div className="col-span-2 flex flex-col justify-start gap-5 divide-y">
        <div data-swapy-slot="intro">
          <div data-swapy-item="intro" className="space-y-1.5 py-2.5">
            <SwapyTitle title="Introduction" />
            <div className="rounded-lg border p-2.5">
              <h3 className="mb-2.5 text-3xl">
                Frontend Dev based in Mangaluru
              </h3>
              <p className="max-w-prose">
                MCA graduate with a journey from graphic design to fullstack
                development, blending creativity with technical expertise.
                Experienced in crafting user-friendly, functional solutions with
                a focus on professionalism and simplicity. Eager to create
                impactful, intuitive user experiences.
              </p>
            </div>
          </div>
        </div>

        <div data-swapy-slot="contact">
          <div
            data-swapy-item="contact"
            className="flex w-full flex-col items-start gap-2.5 py-2.5"
          >
            <SwapyTitle title="Get In Touch" />

            <div className="grid w-full grid-cols-3 gap-1.5">
              <Link
                href={"mailto:anvithshenoyb@gmail.com"}
                className="card bg-fg"
              >
                <span id="mailIcon" className="text-3xl">
                  @
                </span>
              </Link>

              <Link
                href={"https://linkedin.com/in/anvithshenoy/"}
                className="card bg-[#0a66c2] font-serif"
              >
                <span id="linkedinIcon" className="text-3xl">
                  in
                </span>
              </Link>
              <Link
                href={"https://github.com/anvithshenoy/"}
                className="card bg-[#0d1117]"
              >
                <span id="GithubIcon" className="text-3xl">
                  Github
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
