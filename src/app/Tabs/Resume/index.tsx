"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { createSwapy, Swapy } from "swapy";

import Modal from "@/components/Dialog";
import { SwapyTitle } from "@/components/Tabs";

const edDetails: {
  year: {
    startYear: number;
    endYear?: number;
  };
  expertise: string;
  institution: string;
  grade?: number;
  type?: string;
}[] = [
  {
    year: {
      startYear: 2022,
      endYear: 2024,
    },
    expertise: "Computer Applications",
    type: "Master's",
    institution: "St Joseph Engineering College, Vamanjoor",
    grade: 8.62,
  },
  {
    year: {
      startYear: 2019,
      endYear: 2022,
    },
    expertise: "Computer Applications",
    type: "Bachelor's",
    institution: "Canara College",
    grade: 7.68,
  },
];

const workDetails: {
  date: { start: string; end?: string };
  orgName: string;
  role: string;
  desc?: string;
}[] = [
  {
    date: {
      start: "Apr 2025",
    },
    orgName: "Neya AI",
    role: "Frontend Dev",
    desc: "Front-end developer specializing in React, responsible for revamping user interfaces to create responsive, user-friendly, and visually appealing web applications that enhance overall user experience.",
  },
  {
    date: {
      start: "Jan 2025",
      end: "Apr 2025",
    },
    orgName: "UnifyCX",
    role: "Website Troubleshooting Engineer",
    desc: "As a Website Troubleshooting Engineer at UnifyCX, I assisted customers by promptly diagnosing and resolving website issues to ensure seamless online operations and high customer satisfaction.",
  },
  {
    date: {
      start: "Nov 2023",
      end: "Feb 2024",
    },
    orgName: "Headway",
    role: "Web Dev Intern",
    desc: "Developed and Deployed a Full-stack online jobs portal web application using Embedded JS, MongoDB, Express, NodeJS and SCSS.",
  },
];

const Resume = () => {
  const swapy = useRef<Swapy | null>(null);
  const container = useRef<HTMLDivElement>(null);

  const [modal, setModal] = useState<boolean>(false);

  const Img = motion(Image);

  const closeModal = () => setModal((prev) => !prev);

  useEffect(() => {
    if (container.current) {
      swapy.current = createSwapy(container.current);
    }

    return () => {
      swapy.current?.destroy();
    };
  }, []);

  return (
    <>
      <div
        ref={container}
        className="grid grid-cols-1 px-3.5 py-2 *:even:border-y sm:grid-cols-3 sm:gap-3.5 sm:*:even:border-x sm:*:even:border-y-0"
      >
        <div data-swapy-slot="exp">
          <div data-swapy-item="exp" className="relative py-2.5 text-xl">
            <SwapyTitle title="Experience" clx="mb-3.5" />

            {workDetails.map((work) => (
              <div
                key={work.date.start}
                className="bg-fg text-bg mb-1.5 grid grid-cols-2 items-center gap-1 rounded-2xl p-3.5"
              >
                <div className="font-head text-3xl">{work.date.start}</div>
                <div className="bg-bg text-fg ms-auto rounded-full px-3.5 py-1 font-bold uppercase">
                  {work.orgName}
                </div>
                {/* <p className="col-span-2 mt-3.5 max-w-prose text-lg"></p> */}
                <h3 className="font-body! col-span-2 max-w-prose text-3xl">
                  {work.role}
                </h3>
                {work.desc && (
                  <p className="col-span-2 line-clamp-3 max-w-prose text-base">
                    {work.desc}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div data-swapy-slot="skill" className="sm:px-2.5">
          <div
            data-swapy-item="skill"
            className="flex flex-col justify-start gap-2.5 divide-y"
          >
            <div className="py-2.5">
              <SwapyTitle title="Expertise" clx="mb-3.5" />

              <p className="max-w-prose">
                CSS, ReactJS, Javascript, Adobe Photoshop, UI/UX
              </p>
            </div>

            <div className="flex w-full flex-col items-start gap-2.5 py-2.5 pb-5">
              <h2 className="w-full indent-2.5 text-5xl">HardSkill</h2>

              <div
                className="relative aspect-video w-full cursor-zoom-in overflow-hidden rounded-2xl"
                onClick={closeModal}
              >
                <Img
                  layoutId="hardSkill"
                  src={
                    "https://images.unsplash.com/photo-1605092676920-8ac5ae40c7c8?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  fill
                  alt="Anvith Shenoy B"
                  className="-z-10 object-cover"
                />
              </div>
            </div>
            <div className="space-y-1.5 py-2.5">
              <div>
                <h2 className="mb-3.5 indent-2.5 text-5xl">SoftSkill</h2>
                <div className="inline-flex max-w-prose flex-wrap gap-1.5">
                  {[
                    "Creativity",
                    "Time_Management",
                    "Flexibility",
                    "Communication",
                    "Adaptability",
                  ].map((el) => (
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
          </div>
        </div>

        <div data-swapy-slot="education">
          <div
            data-swapy-item="education"
            className="flex flex-col gap-5 py-2.5"
          >
            <SwapyTitle title="Education" />

            {edDetails.map((ed) => (
              <div
                key={ed.year.startYear}
                className="bg-fg text-bg grid grid-cols-2 items-center gap-1 rounded-2xl p-3.5"
              >
                <div className="font-head text-3xl">
                  {[ed.year.startYear, ed.year.endYear]
                    .filter(Boolean)
                    .join(" - ")}
                </div>
                <div className="bg-bg text-fg ms-auto rounded-full px-3.5 py-1 font-bold">
                  {ed?.type}
                </div>
                <p className="col-span-2 mt-3.5 max-w-prose text-lg">
                  {ed.institution}
                </p>
                <p className="col-span-2 max-w-prose text-2xl">
                  {ed.expertise}
                </p>
                <p className="col-span-2 max-w-prose text-lg">
                  CGPA: {ed.grade}/10
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Modal
        open={modal}
        onClose={closeModal}
        bg={{
          src: "https://images.unsplash.com/photo-1605092676920-8ac5ae40c7c8?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Anvith Shenoy B",
          layoutId: "hardSkill",
        }}
      />
    </>
  );
};

export default Resume;
