"use client";
import { useDataContext } from "@/app/context/DataContext";
import Link from "next/link";
import FadeIn from "../framer/FadeIn";
import SwiperCards from "../swiper/Card";

export const Skills = () => {
  const { skills } = useDataContext();
  return (
    <FadeIn>
      <section className="skills flex w-full flex-wrap place-content-start self-center bg-dark p-3 pb-6 text-light selection:bg-light selection:text-dark">
        <h2 className="indent-1 font-head text-xl uppercase">Skills</h2>
        <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skillCategory, index) => (
            <div
              key={index}
              data-click="true"
              className="skill-category h-full w-full select-none rounded-sm border border-light p-1.5 pb-2.5 transition-colors duration-300 sm:hover:bg-light sm:hover:text-dark"
            >
              <h3 className="mb-1 text-lg font-bold leading-none">
                {skillCategory.category}
              </h3>
              <ul className="flex flex-wrap gap-1">
                {skillCategory.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="sm:text-md text-xs leading-none"
                  >
                    {item}
                    {itemIndex !== skillCategory.items.length - 1 && ", "}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </FadeIn>
  );
};

export const Experience = () => {
  const { experience } = useDataContext();
  return (
    <FadeIn>
      <section className="flex w-full flex-col flex-wrap place-content-start self-center bg-light px-3 pb-3 text-dark">
        <h2 className="indent-1 font-head text-xl uppercase">Experience</h2>
        <div className="experience grid grid-cols-1 gap-1.5 lg:grid-cols-2">
          {experience.map((exp, index) => (
            <div
              data-click="true"
              key={index}
              className="project-list flex flex-col flex-wrap items-start justify-start rounded border border-dark p-1 pb-2 shadow-lg"
              title={exp?.project?.title ?? ""}
            >
              <h3 className="text-lg font-bold leading-none">{exp?.role}</h3>
              <h4 className="mb-1 w-full text-sm leading-none">
                {`${exp?.company} | ${exp?.period}`}
              </h4>
              <p className="text-xs leading-tight">
                {exp?.project?.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </FadeIn>
  );
};

export const Education = () => {
  const { education } = useDataContext();
  return (
    <FadeIn>
      <section className="flex w-full flex-col flex-wrap place-content-start self-center px-3 text-dark">
        <h2 className="indent-1 font-head text-xl uppercase">Education</h2>
        <div className="education grid grid-cols-1 gap-1.5 sm:grid-cols-2">
          {education.map((grade) => (
            <div
              key={grade?.type}
              data-click="true"
              className="project-list flex h-full w-full flex-col flex-wrap items-start justify-start rounded border border-dark p-1 pb-2 shadow-lg"
              title={grade?.category ?? ""}
            >
              <div className="flex w-full items-baseline justify-between border-b border-dark">
                <div className="flex flex-col items-end justify-end border-r border-dark p-1 pb-0 text-end md:items-start">
                  <h3 className="place-content-baseline text-lg font-bold leading-none">
                    {grade?.title}
                  </h3>
                  <h4 className="mb-1 items-start text-xs font-bold leading-none">
                    {grade?.cgpa} CGPA
                  </h4>
                </div>
                <div className="mb-1 flex flex-col items-end text-end text-xs leading-none">
                  <h5 className="">{grade?.period}</h5>
                  <h6 className="">{grade?.college}</h6>
                </div>
              </div>

              <ul
                aria-label="Grade descriptions"
                className="mt-1 list-inside list-disc space-y-1 text-xs leading-none"
              >
                {grade?.description.map((value, index) => (
                  <li key={index} dangerouslySetInnerHTML={{ __html: value }} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </FadeIn>
  );
};

export const Profile = () => {
  return (
    <FadeIn>
      <section className="flex w-full flex-col items-center gap-5 overflow-hidden text-dark md:flex-row md:ps-5">
        <SwiperCards />

        <div className="flex flex-col place-items-center gap-2 px-3 sm:py-0">
          <p className="text-sm leading-tight">
            MCA graduate with a journey from graphic design to fullstack
            development, blending creativity with technical expertise.
            Experienced in crafting user-friendly, functional solutions with a
            focus on professionalism and simplicity. Eager to create impactful,
            intuitive user experiences.
          </p>

          <Link
            href="/Resume_AnvithShenoy.pdf"
            target="_blank"
            data-click="true"
            className="rounded-sm border border-light bg-dark px-2.5 py-0.5 text-xs font-bold text-light outline-none transition-colors duration-300 ease-in-out hover:bg-gray-900 focus:ring-2 focus:ring-dark focus:ring-offset-2 focus:ring-offset-light focus:hover:ring-gray-900 lg:self-start"
          >
            My Resume
          </Link>
        </div>
      </section>
    </FadeIn>
  );
};
