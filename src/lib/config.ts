import type { UrlObject } from "url";

import { Card } from "@/components/Card/DragCard";

import { useLang } from "@/providers/Language";

import MISC from "@/misc.json";

const { cards, hashmap, socials } = MISC;

export type Url = string | UrlObject;
export type HASHMAP = { displayLabel: string; link?: Url };

export type Education = {
  year: {
    startYear: number | string;
    endYear?: number | string;
  };
  expertise: string;
  institution: string;
  grade?: number | string;
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
  frameworks: Record<string, string>;
};

export type Profile = {
  name: string;
  surname: string;
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

const HASH: HASHMAP[] = hashmap;

const CARDS: Card[] = cards;

const date = new Date();

const { linkedin, dribbble, email, github, whatsapp, others } = socials ?? {};

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
  // Social links
  SOCIALS: others,
  MAIL: email ? `mailto:${email}` : undefined,
  LINKEDIN: linkedin,
  GITHUB: github,
  WHATSAPP: whatsapp ? `https://wa.me/${whatsapp}?text=hi` : undefined,
  DRIBBBLE: dribbble,
};

export const useConfig = () => {
  const { RESUME } = useLang();

  const {
    education,
    expertise,
    hardskill,
    softskill,
    work,
    profile,
    projects,
  }: Resume = RESUME;

  const { name, surname, picture: DP, desc, title, role, location } = profile;

  const date = new Date();

  return {
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
    SURNAME: surname,
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
  };
};
