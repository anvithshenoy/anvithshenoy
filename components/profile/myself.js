import SwiperCards from "../swiper/Card";

const skills = [
  {
    category: "Languages & Technologies",
    items: ["HTML", "CSS", "SCSS", "JavaScript", "GitHub", "MySQL", "MongoDB"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["ReactJS", "NextJS", "NodeJS", "Express", "Tailwind CSS"],
  },
  {
    category: "Build Tools",
    items: ["Vite"],
  },

  {
    category: "Design Software",
    items: ["Photoshop CS6"],
  },
];

const projects = [
  {
    name: "News Snap",
    category: "Short News Web Application",
    description:
      "A lightweight, user-friendly news application designed for quick and easy article consumption. Unlike typical news apps, News Snap focuses on delivering concise summaries, allowing users to 'snap' through articles swiftly. With a clean and intuitive layout, it enables users to view brief content and dive into full articles at their convenience. Optimized for mobile, it supports swipe gestures for seamless navigation, ensuring an engaging and responsive experience on the go.",
    link: "https://news-snap.anvithshenoy.cloud/",
  },
  {
    name: "TheWeather",
    category: "Live Weather Web Application",
    description:
      "A unique live weather web application, designed to offer a refreshing experience compared to existing solutions in the market. This application harnesses modern web technologies and innovative design principles to deliver real-time weather updates. ",
    link: "https://weather.anvithshenoy.cloud/",
  },
  {
    name: "Info Portal",
    category: "Client Project",
    description:
      "A user-friendly informational website for a client, an astrologer, to showcase his services and enhance online presence. ",
    link: "https://www.keralakuttichathanastrology.in/",
  },
  {
    name: "Headway Jobs",
    category: "Online Jobs Portal",
    description:
      "A fresher-recruitment job platform, wherein freshers register themselves to be recognized and recruited by recruiters from various organizations. The registration involved covers up the initial part of the interviewing process and helps recruitment easy by distinguishing between various required skills. ",
  },
  {
    name: "ORDR",
    category: "Mobile Ordering Application",
    description:
      "A simple replacement for the hotel menus that allows placing orders simply through the mobile devices. Developed and managed using Android - Java & Firebase. ",
  },
];

export const Skills = () => {
  return (
    <div className="skills flex w-full flex-wrap place-content-start self-center bg-dark p-3 pb-6 text-light selection:bg-light selection:text-dark">
      <h3 className="indent-1 font-head text-xl uppercase">Skills</h3>
      <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((skillCategory, index) => (
          <div
            key={index}
            className="skill-category rounded-sm border border-light p-1.5 pb-2.5 transition-colors duration-300 ease-in-out hover:bg-light hover:text-dark"
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
    <div className="skills flex w-full flex-col flex-wrap place-content-start self-center p-3 pb-6">
      <h3 className="indent-1 font-head text-xl uppercase">Projects</h3>
      <div className="projects grid grid-cols-1 gap-1.5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-list flex cursor-pointer flex-col flex-wrap items-start justify-start rounded border border-dark p-1 pb-2 transition-colors duration-300 hover:bg-dark hover:text-light"
            title={project?.category ?? ""}
          >
            <h4 className="mb-1 cursor-pointer text-nowrap text-lg font-bold leading-none">
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

export const Profile = () => {
  return (
    <div className="flex w-full flex-col items-center gap-5 overflow-hidden sm:flex-row sm:ps-5">
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
