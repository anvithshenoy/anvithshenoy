"use client";

import { useEffect, useRef, useState } from "react";
import { createSwapy, Swapy } from "swapy";
import { twMerge } from "tailwind-merge";

import Card from "@/components/Card";
import Modal from "@/components/Dialog";
import { SwapyTitle } from "@/components/Tabs";

import { Project, useConfig } from "@/lib/config";
import { toast } from "sonner";

export default function Projects() {
  const { PROJECTS: projects } = useConfig();

  const [modal, setModal] = useState<Project | null>(null);

  const swapy = useRef<Swapy | null>(null);
  const container = useRef<HTMLDivElement>(null);

  const copyProjectURL = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      toast.success("Project URL copied to clipboard!", {
        description: "You can now paste it anywhere.",
        icon: (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 5.00005C7.01165 5.00082 6.49359 5.01338 6.09202 5.21799C5.71569 5.40973 5.40973 5.71569 5.21799 6.09202C5 6.51984 5 7.07989 5 8.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.07989 21 8.2 21H15.8C16.9201 21 17.4802 21 17.908 20.782C18.2843 20.5903 18.5903 20.2843 18.782 19.908C19 19.4802 19 18.9201 19 17.8V8.2C19 7.07989 19 6.51984 18.782 6.09202C18.5903 5.71569 18.2843 5.40973 17.908 5.21799C17.5064 5.01338 16.9884 5.00082 16 5.00005M8 5.00005V7H16V5.00005M8 5.00005V4.70711C8 4.25435 8.17986 3.82014 8.5 3.5C8.82014 3.17986 9.25435 3 9.70711 3H14.2929C14.7456 3 15.1799 3.17986 15.5 3.5C15.8201 3.82014 16 4.25435 16 4.70711V5.00005"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ),
      });
    } catch (error) {
      toast.message("Failed to copy URL", {
        description: "Please copy it manually.",
      });
    }
  };

  const selectModal = (project: Project) => {
    project?.onClick?.();
    if (project?.url) {
      copyProjectURL(project?.url);
    }

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
            cardClass={twMerge(
              Boolean(project?.url) && "cursor-pointer place-content-start",
            )}
            className="lg:line-clamp-6"
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
