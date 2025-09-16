"use client";

import { useEffect, useRef, useState } from "react";
import { createSwapy, Swapy } from "swapy";

import Card from "@/components/Card";
import Modal from "@/components/Dialog";
import { SwapyTitle } from "@/components/Tabs";
import { twMerge } from "tailwind-merge";

type Project = {
  id: string;
  title: string | React.ReactNode;
  content: string | number | React.ReactNode;
  iframe?: string | number | React.ReactNode;
  onClick?: () => void | ((...args: unknown[]) => void);
};

const projects: Project[] = [
  {
    id: "portfolio",
    title: "Portfolio",
    content:
      "A responsive single-page portfolio built with Next.js 15, styled using Tailwind CSS, and enhanced with Framer Motion animations and Swiper.js carousels. Deployed seamlessly on Vercel, it highlights projects, skills, and experience in a clean, interactive layout optimized for performance and accessibility.",
    iframe: (
      <iframe
        src="https://anvithshenoy.vercel.app"
        className="h-full w-full overflow-hidden rounded-xl"
      />
    ),
  },
  {
    id: "newssnap",
    title: "News Snap",
    content:
      "A lightweight, user-friendly news application designed for quick and easy article consumption. Unlike typical news apps, News Snap focuses on delivering concise summaries, allowing users to 'snap' through articles swiftly. With a clean and intuitive layout, it enables users to view brief content and dive into full articles at their convenience. Optimized for mobile, it supports swipe gestures for seamless navigation, ensuring an engaging and responsive experience on the go.",
  },
];

export default function Projects() {
  const [modal, setModal] = useState<Project | null>(null);

  const swapy = useRef<Swapy | null>(null);
  const container = useRef<HTMLDivElement>(null);

  const selectModal = (project: Project) => {
    project?.onClick?.();
    setModal(project);
  };
  const closeModal = () => setModal(null);

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
      className="grid grid-cols-1 gap-2.5 px-3.5 py-2 *:even:border-y *:even:py-2.5 sm:grid-cols-3 sm:gap-3.5 sm:*:even:border-x sm:*:even:border-y-0 sm:*:even:px-2.5 sm:*:even:py-0"
    >
      {projects.map((project) => (
        <div key={project.id} data-swapy-slot={project.id} className="">
          <Card
            data-swapy-item={project.id}
            cardTitle={
              <SwapyTitle title={project.title ?? "Title"} clx="indent-0" />
            }
            onClick={() => selectModal(project)}
            cardClass={twMerge(Boolean(project?.iframe) && "cursor-pointer")}
            className="line-clamp-6"
            layoutId={project.id}
          >
            {project.content}
          </Card>
        </div>
      ))}

      <Modal
        open={modal !== null && Boolean(modal?.iframe)}
        onClose={closeModal}
        className="aspect-[9/16] max-w-11/12 overflow-hidden rounded-2xl sm:aspect-video"
        layoutId={modal?.id}
      >
        {modal?.iframe}
      </Modal>
    </div>
  );
}
