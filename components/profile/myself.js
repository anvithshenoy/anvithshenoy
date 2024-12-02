import education from "../../data/education.json";
import experience from "../../data/experience.json";
import projects from "../../data/projects.json";
import skills from "../../data/skills.json";
import SwiperCards from "../swiper/Card";

export const Skills = () => {
  return (
    <div className="skills flex w-full flex-wrap place-content-start self-center bg-dark p-3 pb-6 text-light selection:bg-light selection:text-dark">
      <h3 className="indent-1 font-head text-xl uppercase">Skills</h3>
      <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((skillCategory, index) => (
          <div
            data-click="true"
            key={index}
            className="skill-category select-none rounded-sm border border-light p-1.5 pb-2.5 transition-colors duration-300 sm:hover:bg-light sm:hover:text-dark"
          >
            <h4 className="mb-1 text-lg font-bold leading-none">
              {skillCategory.category}
            </h4>
            <ul className="flex flex-wrap gap-1">
              {skillCategory.items.map((item, itemIndex) => (
                <li key={itemIndex} className="sm:text-md text-xs leading-none">
                  {item}
                  {itemIndex !== skillCategory.items.length - 1 && ", "}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Projects = () => {
  return (
    <div className="flex w-full flex-col flex-wrap place-content-start self-center p-3 pb-6">
      <h3 className="indent-1 font-head text-xl uppercase">Projects</h3>
      <div className="projects grid grid-cols-1 gap-1.5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            data-click="true"
            key={index}
            className="project-list flex flex-col flex-wrap items-start justify-start rounded border border-dark p-1 pb-2 shadow-lg transition-colors duration-300 focus-within:bg-dark focus-within:text-light focus-within:shadow-none hover:bg-dark hover:text-light hover:shadow-none"
            title={project?.category ?? ""}
          >
            <h4 className="mb-1 text-nowrap text-lg leading-none">
              {project?.name}
            </h4>
            <p className="line-clamp-4 text-xs leading-none sm:line-clamp-3">
              {project?.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Experience = () => {
  return (
    <div className="flex w-full flex-col flex-wrap place-content-start self-center bg-dark p-3 pb-6 text-light">
      <h3 className="indent-1 font-head text-xl uppercase">Experience</h3>
      <div className="experience grid auto-cols-auto gap-1.5">
        {experience.map((exp, index) => (
          <div
            data-click="true"
            key={index}
            className="project-list flex flex-col flex-wrap items-start justify-start rounded border border-light p-1 pb-2"
            title={exp?.project?.title ?? ""}
          >
            <h4 className="text-lg font-bold leading-none">{exp?.role}</h4>
            <h5 className="mb-1 w-full text-sm leading-none">
              {`${exp?.company} | ${exp?.period}`}
            </h5>
            <p className="text-xs leading-tight">{exp?.project?.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Education = () => {
  return (
    <div className="flex w-full flex-col flex-wrap place-content-start self-center p-3 pb-6 shadow-lg">
      <h3 className="indent-1 font-head text-xl uppercase">Education</h3>
      <div className="education grid grid-cols-1 gap-1.5 sm:grid-cols-2">
        {education.map((grade) => (
          <div
            data-click="true"
            key={grade?.type}
            className="project-list flex flex-col flex-wrap items-start justify-start rounded border border-dark pb-2"
            title={grade?.category ?? ""}
          >
            <h4 className="m-1 mb-0 text-lg font-bold leading-none">
              {`${grade?.category} (${grade?.title})`}
            </h4>
            <h5 className="mb-1 w-full bg-dark p-0.5 ps-1 text-sm leading-none text-light">
              {`${grade?.college} `}
            </h5>
            <ul
              aria-label="Grade descriptions"
              className="m-1 list-inside list-disc space-y-1 text-xs leading-none"
            >
              {grade?.description.map((value, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: value }} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Profile = () => {
  return (
    <div className="flex w-full flex-col items-center gap-5 overflow-hidden md:flex-row md:ps-5">
      <SwiperCards />

      <p className="px-3 text-sm leading-tight sm:py-0">
        MCA graduate with a journey from graphic design to fullstack
        development, blending creativity with technical expertise. Experienced
        in crafting user-friendly, functional solutions with a focus on
        professionalism and simplicity. Eager to create impactful, intuitive
        user experiences.
      </p>
    </div>
  );
};
