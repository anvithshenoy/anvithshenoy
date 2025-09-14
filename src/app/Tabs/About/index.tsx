"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { createSwapy, Swapy } from "swapy";

import { SwapyTitle } from "@/components/Tabs";

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
      <section className="bg-fg/35 relative inline-flex aspect-square size-full flex-col items-start overflow-hidden rounded-2xl p-4 text-xl drop-shadow-md">
        <p className="mt-auto indent-0.5 text-gray-100">Hello, I am</p>
        <h1 className="text-5xl">Anvith Shenoy B</h1>
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
      </section>

      <section className="col-span-2 flex flex-col justify-start gap-5 divide-y">
        <div data-swapy-slot="intro">
          <div data-swapy-item="intro" className="space-y-1.5 py-2.5">
            <SwapyTitle title="Introduction" />
            <div className="rounded-lg border p-2.5">
              <h3 className="mb-2.5 text-2xl">
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

            <div className="inline-flex w-full flex-wrap gap-1.5">
              <Link
                href={"mailto:anvithshenoyb@gmail.com"}
                className="card bg-fg"
              >
                <span id="mailIcon" className="">
                  @
                </span>
              </Link>

              <Link
                href={"https://linkedin.com/in/anvithshenoy/"}
                className="card bg-[#0a66c2] font-serif"
              >
                <span id="linkedinIcon" className="">
                  in
                </span>
              </Link>

              <Link
                href={"https://github.com/anvithshenoy/"}
                className="card bg-[#0d1117]"
              >
                <span id="GithubIcon" className="">
                  Github
                </span>
              </Link>

              <Link
                href={"https://dribbble.com/anvithshenoy/"}
                className="card bg-[#ea4c89] font-sans"
              >
                <span id="dribbleIcon" className="">
                  Dribbble
                </span>
              </Link>

              <Link
                href={"https://wa.me/+918310583927/?text=hi"}
                className="card bg-[#128c7e] font-sans"
              >
                <span id="whatsappIcon" className="">
                  WhatsApp
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
