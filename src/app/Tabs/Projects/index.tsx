"use client";

import { useEffect, useRef, useState } from "react";
import { createSwapy, Swapy } from "swapy";
import { twMerge } from "tailwind-merge";

import Card from "@/components/Card";
import Modal from "@/components/Dialog";
import { SwapyTitle } from "@/components/Tabs";

import { CONFIG, Project } from "@/lib/config";

const projects: Project[] = CONFIG.PROJECTS;

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
      className="grid grid-cols-1 gap-2.5 px-3.5 py-2 *:even:border-y *:even:py-2.5 sm:grid-cols-2 sm:gap-3.5 sm:*:even:border-x sm:*:even:border-y-0 sm:*:even:px-2.5 sm:*:even:py-0 lg:grid-cols-3"
    >
      {projects.map((project) => (
        <div key={project.id} data-swapy-slot={project.id} className="">
          <Card
            data-swapy-item={project.id}
            cardTitle={
              <SwapyTitle title={project.title ?? "Title"} clx="indent-0" />
            }
            onClick={() => selectModal(project)}
            cardClass={twMerge(Boolean(project?.url) && "cursor-pointer")}
            className="line-clamp-6"
            layoutId={project.id}
          >
            {project.content}
          </Card>
        </div>
      ))}

      <Modal
        open={modal !== null && Boolean(modal?.url)}
        onClose={closeModal}
        className="aspect-9/16 max-w-11/12 overflow-hidden rounded-2xl sm:aspect-video"
        layoutId={modal?.id}
      >
        <iframe
          src={modal?.url}
          className="my-2 h-full w-full overflow-hidden rounded-xl"
        />
      </Modal>
    </div>
  );
}
