import SwiperCards from "../swiper/Card";
import RedirectHeader from "./redirect";

const skills = [
  {
    category: "Languages & Technologies",
    items: ["HTML", "CSS", "SCSS", "JavaScript", "GitHub", "MySQL", "MongoDB"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["React", "NodeJS", "Express", "Tailwind CSS"],
  },
  {
    category: "Build Tools",
    items: ["Vite"],
  },

  {
    category: "Design Software",
    items: ["Photoshop"],
  },
];

const projects = [
  {
    name: "News Snap",
    description:
      "A lightweight, user-friendly news application designed for quick and easy article consumption. Unlike typical news apps, News Snap focuses on delivering concise summaries, allowing users to 'snap' through articles swiftly. With a clean and intuitive layout, it enables users to view brief content and dive into full articles at their convenience. Optimized for mobile, it supports swipe gestures for seamless navigation, ensuring an engaging and responsive experience on the go.",
    images: [
      "https://media.licdn.com/dms/image/v2/D562DAQErUB1jGLIkdg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1728717895395?e=1731427200&v=beta&t=AxRKi8oD8WMLtY9kfeyc-pNTuIvj9h5vxoIgjYXxlEY",
      "https://media.licdn.com/dms/image/v2/D562DAQFCXPc24ZUwtA/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1728718548077?e=1731427200&v=beta&t=ail57SW9xDCG4WMF6EwMg7hE4WGrY41ekJDw8LZPzvE",
    ],
    link: "https://news-snap.anvithshenoy.cloud/",
  },
];

export const Skills = () => {
  return (
    <div className="skills flex w-full flex-wrap place-content-start self-center bg-dark p-3 pb-6 text-light selection:bg-light selection:text-dark">
      <h3 className="font-head text-xl uppercase">Skills</h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((skillCategory, index) => (
          <div key={index} className="skill-category">
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
    <div className="skills flex w-full flex-col flex-wrap place-content-start self-center p-3 pb-6">
      <h3 className="font-head text-xl uppercase">Projects</h3>
      <div className="projects flex">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-list flex flex-col rounded border border-dark p-1 pb-2"
          >
            <RedirectHeader link={project?.link} text={project?.name} />
            <p className="text-xs leading-none">{project?.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Profile = () => {
  return (
    <div className="flex w-full flex-col items-center gap-5 sm:flex-row sm:ps-5">
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
