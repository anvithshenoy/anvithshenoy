"use client";

import { motion } from "motion/react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { createSwapy, Swapy } from "swapy";

import Card from "@/components/Card";
import Modal from "@/components/Dialog";
import { SwapyTitle } from "@/components/Tabs";

import { useConfig } from "@/lib/config";

const Resume = () => {
  const {
    WORK,
    EDUCATION,
    EXP,
    SKILLS: { HARD, SOFT },
  } = useConfig();
  const swapy = useRef<Swapy | null>(null);
  const container = useRef<HTMLDivElement>(null);

  const [modal, setModal] = useState<boolean>(false);

  const Img = motion.create(Image);

  const closeModal = () => setModal(false);

  useEffect(() => {
    if (!container.current) return;

    swapy.current = createSwapy(container.current);

    return () => {
      swapy.current?.destroy();
    };
  }, []);

  return (
    <>
      <div
        ref={container}
        className="grid grid-cols-1 px-3.5 py-2 *:even:border-y sm:grid-cols-2 sm:gap-3.5 sm:*:even:border-x sm:*:even:border-y-0 lg:grid-cols-3"
      >
        <section data-swapy-slot="exp">
          <div data-swapy-item="exp" className="relative py-2.5 text-xl">
            <SwapyTitle title="Experience" clx="mb-3.5" />

            {WORK.map(({ date: { start, end }, desc, orgName, role }) => (
              <Card
                key={start}
                cardTitle={<>{[start].filter(Boolean).join(" - ")}</>}
                cardClass="mb-2.5"
                tag={orgName}
              >
                <h3 className="col-span-2 max-w-prose text-2xl">{role}</h3>
                {desc && (
                  <p className="col-span-2 line-clamp-3 max-w-prose text-base">
                    {desc}
                  </p>
                )}
              </Card>
            ))}
          </div>
        </section>

        <section className="flex flex-col justify-start gap-2.5 divide-y sm:px-2.5">
          <div data-swapy-slot="expertise">
            <div data-swapy-item="expertise" className="py-2.5">
              <SwapyTitle title="Expertise" clx="mb-3.5" />

              <p className="inline-flex max-w-prose break-after-avoid flex-wrap gap-1.5">
                {EXP.split(",").map((el) => (
                  <span
                    key={el}
                    className="rounded-full border px-3.5 py-1 capitalize"
                  >
                    {el}
                  </span>
                ))}
              </p>
            </div>
          </div>

          <div data-swapy-slot="hardskill">
            <div
              data-swapy-item="hardskill"
              className="flex w-full flex-col items-start gap-2.5 py-2.5 pb-5"
            >
              <SwapyTitle title="HardSkill" />

              <div
                className="relative aspect-video w-full cursor-zoom-in overflow-hidden rounded-2xl"
                onClick={() => setModal(true)}
              >
                <div className="text-title bg-bg/10 sm:bg-title/10 inset-0 z-0 h-full content-center text-center transition-opacity duration-300 ease-out hover:opacity-100 sm:opacity-0">
                  Tap to reveal
                </div>
                <Img
                  layout="position"
                  layoutId="hardSkill"
                  src={HARD.src}
                  alt={HARD.alt}
                  className="-z-10 object-cover"
                  fill
                />
              </div>
            </div>
          </div>

          <div data-swapy-slot="SoftSkill">
            <div data-swapy-item="SoftSkill" className="space-y-1.5 py-2.5">
              <SwapyTitle title="SoftSkill" clx="mb-2.5" />
              <div className="inline-flex max-w-prose break-after-avoid flex-wrap gap-1.5">
                {SOFT.split(",").map((el) => (
                  <span
                    key={el}
                    className="rounded-full border px-3.5 py-1 lowercase"
                  >
                    #{el}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section data-swapy-slot="education">
          <div
            data-swapy-item="education"
            className="flex flex-col gap-2.5 py-2.5"
          >
            <SwapyTitle title="Education" />

            {EDUCATION.map((ed) => (
              <Card
                key={ed.year.startYear}
                cardTitle={[ed.year.startYear, ed.year.endYear]
                  .filter(Boolean)
                  .join(" - ")}
                tag={ed.type}
              >
                <h3 className="font-head my-1.5 max-w-prose text-2xl">
                  {ed.expertise}
                </h3>
                <p className="max-w-prose text-lg">{ed.institution}</p>
                <p className="font-head max-w-prose text-lg">{ed.grade} CGPA</p>
              </Card>
            ))}
          </div>
        </section>
      </div>

      <Modal
        open={modal}
        onClose={closeModal}
        bg={{
          src: HARD.src,
          alt: HARD.alt,
          layout: "position",
          layoutId: "hardSkill",
        }}
        size="max-w-sm sm:max-w-xl"
        className="border border-gray-500"
        aspectRatio="aspect-[4/3]"
      >
        <div className="my-2.5 flex w-full flex-wrap gap-1">
          {Object.entries(HARD.frameworks).map(([key, value]) => (
            <React.Fragment key={key}>
              <h4 className="text-title indent-2.5">{key}</h4>
              <p className="mb-2.5 flex w-full flex-wrap gap-0.5">
                {value.split(",").map((el) => (
                  <span
                    key={el}
                    className="rounded-full border border-current/50 px-4 py-0.5 capitalize"
                  >
                    {el}
                  </span>
                ))}
              </p>
            </React.Fragment>
          ))}
        </div>
      </Modal>
    </>
  );
};

export default Resume;
