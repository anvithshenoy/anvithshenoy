"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { createSwapy, Swapy } from "swapy";

import Card from "@/components/Card";
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
    institution: "Canara College Mangaluru",
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

  const Img = motion.create(Image);

  const closeModal = () => setModal(false);

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
        <section data-swapy-slot="exp">
          <div data-swapy-item="exp" className="relative py-2.5 text-xl">
            <SwapyTitle title="Experience" clx="mb-3.5" />

            {workDetails.map((work) => (
              <Card
                key={work.date.start}
                cardTitle={<>{[work.date.start].filter(Boolean).join(" - ")}</>}
                cardClass="mb-2.5"
                tag={work.orgName}
              >
                <h3 className="col-span-2 max-w-prose text-2xl">{work.role}</h3>
                {work.desc && (
                  <p className="col-span-2 line-clamp-3 max-w-prose text-base">
                    {work.desc}
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
                {"CSS, ReactJS, Javascript, Adobe Photoshop, UI/UX, Framer-motion"
                  .split(",")
                  .map((el) => (
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
                  src={
                    "https://images.unsplash.com/photo-1538579110458-c0339544123a?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    // "https://images.unsplash.com/photo-1605092676920-8ac5ae40c7c8?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  fill
                  alt="Anvith Shenoy B"
                  className="-z-10 object-cover"
                />
              </div>
            </div>
          </div>

          <div data-swapy-slot="SoftSkill">
            <div data-swapy-item="SoftSkill" className="space-y-1.5 py-2.5">
              <SwapyTitle title="SoftSkill" clx="mb-2.5" />
              <div className="inline-flex max-w-prose break-after-avoid flex-wrap gap-1.5">
                {[
                  "Creativity",
                  "Time_Management",
                  "Flexibility",
                  "Communication",
                  "Adaptability",
                  "Attention_to_Detail",
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
        </section>

        <section data-swapy-slot="education">
          <div
            data-swapy-item="education"
            className="flex flex-col gap-2.5 py-2.5"
          >
            <SwapyTitle title="Education" />

            {edDetails.map((ed) => (
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
          src: "https://images.unsplash.com/photo-1538579110458-c0339544123a?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          // src: "https://images.unsplash.com/photo-1605092676920-8ac5ae40c7c8?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Anvith Shenoy B",
          layout: "position",
          layoutId: "hardSkill",
        }}
        size="max-w-sm sm:max-w-xl"
        aspectRatio="aspect-[4/3]"
      >
        <>
          <div className="my-1.5 flex w-full flex-wrap">
            <h4 className="text-title mb-1.5 indent-2.5">
              Frontend & Frameworks
            </h4>
            <p className="flex w-full flex-wrap gap-0.5">
              {"React.js, Next.js, HTML5, CSS3, TailwindCSS, JavaScript, TypeScript, Framer-Motion"
                .split(",")
                .map((el) => (
                  <span
                    key={el}
                    className="rounded-full border border-current/50 px-4 py-0.5 capitalize"
                  >
                    {el}
                  </span>
                ))}
            </p>
          </div>
          <div className="my-1.5 flex w-full flex-wrap">
            <h4 className="text-title mb-1.5 indent-2.5">Tools & Hosting</h4>
            <p className="flex w-full flex-wrap gap-0.5">
              {"NPM, Git & Github, Vercel".split(",").map((el) => (
                <span
                  key={el}
                  className="rounded-full border border-current/50 px-4 py-0.5 capitalize"
                >
                  {el}
                </span>
              ))}
            </p>
          </div>
        </>
      </Modal>
    </>
  );
};

export default Resume;
