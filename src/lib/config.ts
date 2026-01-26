import type { UrlObject } from "url";

import { Card } from "@/components/Card/DragCard";

import resumeDetails from "@/resume.json";

export type Url = string | UrlObject;
export type HASHMAP = { displayLabel: string; link?: Url };

export type Education = {
  year: {
    startYear: number;
    endYear?: number;
  };
  expertise: string;
  institution: string;
  grade?: number;
  type?: string;
}[];
export type Work = {
  date: { start: string; end?: string };
  orgName: string;
  role: string;
  desc?: string;
}[];
export type Hardskill = {
  src: string;
  alt: string;
  frameworks: { [key: string]: string };
};
export type Profile = {
  name: string;
  picture: string;
  role?: string;
  location?: string;
  title?: string;
  desc?: string;
};
export type Project = {
  id: string;
  title: string | React.ReactNode;
  content: string | number | React.ReactNode;
  url?: string;
  onClick?: () => void | ((...args: unknown[]) => void);
};
export type Socials = {
  email: string;
  linkedin?: Url;
  github?: Url;
  whatsapp?: string;
  dribbble?: Url;
  others?: { label: string; link: string }[];
};
type Resume = {
  profile: Profile;
  education: Education;
  expertise: string;
  hardskill: Hardskill;
  softskill: string;
  work: Work;
  projects: Project[];
  socials?: Socials;
};

const HASH: HASHMAP[] = [
  {
    displayLabel: "anvithshenoy",
    link: "https://www.google.com/search?q=" + "anvithshenoy",
  },
  {
    displayLabel: "work_in_progress",
  },
  {
    displayLabel: "shenoy_devfolio",
  },
  {
    displayLabel: "CSS_LIFE",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    displayLabel: "ALL_NEW_ALL_DIFFERENT",
  },
];

const CARDS: Card[] = [
  {
    src: "https://images.unsplash.com/photo-1756747646179-d5652667914e?q=80&w=1499&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Cosmos",
    angle: -25,
    location: {
      x: "30%",
      y: 50,
    },
  },
  {
    src: "https://anvithshenoy.vercel.app/myself.jpg",
    alt: "Anvith Shenoy",
    angle: 15,
    location: {
      x: "10%",
      y: -40,
    },
  },
  {
    src: "/33.jpg",
    alt: "Digital Collage",
    angle: 8,
    location: {
      x: 45,
      y: "25%",
    },
  },
  {
    src: "/IMG_1531.jpg",
    alt: "My Life",
    angle: 0,
    location: {
      x: "35%",
      y: "35%",
    },
  },
];

const date = new Date();

const {
  education,
  expertise,
  hardskill,
  softskill,
  work,
  profile,
  socials,
  projects,
}: Resume = resumeDetails;
const { name, picture: DP, desc, title, role, location } = profile;
const { linkedin, dribbble, email, github, whatsapp, others } = socials;

export const CONFIG = {
  GQ: "https://www.google.com/search?q=",
  HASH,
  CARDS,
  CURRENT: {
    YEAR: date.getFullYear(),
    MONTH: date.getMonth(),
    DAY: date.getDay(),
    DATE: date.getDate(),
  },

  // RESUME
  NAME: name,
  PROFILE_PIC: DP,
  PROFILE_TITLE: title ?? `${role} based in ${location}`,
  PROFILE_DESC: desc,
  ROLE: role,
  LOCATION: location,
  PROFILE: profile,

  EDUCATION: education,
  EXP: expertise,
  SKILLS: {
    HARD: hardskill,
    SOFT: softskill,
  },
  PROJECTS: projects,
  WORK: work,

  // Social links
  SOCIALS: others,
  MAIL: `mailto:${email}`,
  LINKEDIN: linkedin,
  GITHUB: github,
  WHATSAPP: `https://wa.me/${whatsapp}?text=hi`,
  DRIBBBLE: dribbble,
};
