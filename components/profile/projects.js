"use client";

import { useDataContext } from "@/app/context/DataContext";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import FadeIn from "../framer/FadeIn";
import CustomModal from "../modal/Modal";

const Projects = () => {
  const { projects } = useDataContext();
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const modalRef = useRef(null);

  // Prevent scrolling when the modal is open
  useEffect(() => {
    if (isModalOpen) {
      // Disable scroll immediately when modal opens
      document.body.style.overflow = "hidden";
    } else {
      // Enable scroll when modal closes
      document.body.style.overflow = "auto";
    }

    // Cleanup when component unmounts or modal closes
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  // Handle "Escape" key press to close modal
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && isModalOpen) {
        setModalOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  return (
    <FadeIn>
      <section className="flex w-full flex-col flex-wrap place-content-start self-center px-3 pb-3 text-dark">
        <h2 className="indent-1 font-head text-xl uppercase">Projects</h2>
        <div className="projects grid grid-cols-1 gap-1.5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.length > 0 &&
            projects.map((project, index) => (
              <div
                data-click="true"
                key={index}
                className="project-list flex flex-col flex-wrap items-start justify-start rounded border border-dark p-1 pb-2 shadow-lg transition-colors duration-300 focus-within:bg-dark focus-within:text-light focus-within:shadow-none hover:bg-dark hover:text-light hover:shadow-none"
                title={project?.category ?? ""}
                onClick={() => handleProjectClick(project)}
              >
                <h2 className="mb-1 text-nowrap text-lg font-bold leading-none">
                  {project?.name}
                </h2>
                <p className="line-clamp-4 text-xs leading-none sm:line-clamp-3">
                  {project?.description}
                </p>
              </div>
            ))}
        </div>
      </section>

      <CustomModal
        ref={modalRef}
        open={isModalOpen}
        onClose={() => setModalOpen(false)}
      >
        {selectedProject && (
          <div className="flex w-full flex-col items-start justify-start overflow-y-auto md:flex-row">
            <Image
              onContextMenu={(e) => {
                e.preventDefault();
              }}
              src={selectedProject.image ?? "/projects/notfound.jpg"}
              width={550}
              height={1080}
              className={`h-full max-h-[40vh] w-full object-cover object-left-top md:inline-block md:max-h-fit md:w-1/3`}
              priority={false}
              alt={selectedProject.name}
              quality={50}
              onClick={(e) => {
                if (selectedProject.link) {
                  window.open(selectedProject.link, "_blank");
                }
              }}
            />

            <div className="flex h-full w-full flex-col gap-y-1 py-1.5 md:w-2/3">
              <div className="flex w-full flex-col indent-1">
                {selectedProject.link ? (
                  <Link
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-fit text-xl font-bold leading-none text-dark hover:underline"
                  >
                    {selectedProject.name}
                  </Link>
                ) : (
                  <h2 className="w-fit text-xl font-bold leading-none">
                    {selectedProject.name}
                  </h2>
                )}

                <strong className="bg-dark p-0.5 ps-0 text-light">
                  {selectedProject.category}
                </strong>
              </div>
              <p className="mx-1 md:me-3.5">{selectedProject.description}</p>

              <div className="mx-1 grid grid-cols-[auto,1fr] gap-x-1 pb-4 pt-1 md:me-3.5 md:pb-0">
                {selectedProject.technology?.languages && (
                  <>
                    <strong>Languages:</strong>
                    {selectedProject.technology.languages.join(", ")}
                  </>
                )}
                {selectedProject.technology?.frameworks && (
                  <>
                    <strong>Frameworks:</strong>{" "}
                    {selectedProject.technology.frameworks.join(", ")}
                  </>
                )}
                {selectedProject.technology?.build && (
                  <>
                    <strong>Build Tools:</strong>{" "}
                    {selectedProject.technology.build.join(", ")}
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </CustomModal>
    </FadeIn>
  );
};

export default Projects;
