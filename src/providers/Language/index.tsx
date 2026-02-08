"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { LOCAL_STORAGE } from "@/lib/common";

import English from "@/translations/en/index.json";
import EnglishResume from "@/translations/en/resume.json";

import Kannada from "@/translations/kn/index.json";
import KannadaResume from "@/translations/kn/resume.json";

const { LANGUAGE } = LOCAL_STORAGE;

export type Languages = "en" | "kn";

type LanguageContextType = {
  lang: Languages;
  changeLang: (lng: Languages) => void;
  LABELS: typeof English;
  RESUME: typeof EnglishResume;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const langSet: { id: Languages; label: string }[] = [
  { id: "en", label: "English" },
  { id: "kn", label: "ಕನ್ನಡ" },
];

const langOptions = {
  en: {
    labels: English,
    resume: EnglishResume,
  },
  kn: {
    labels: Kannada,
    resume: KannadaResume,
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [lang, setLang] = useState<Languages>("en");
  const [mounted, setMounted] = useState(false);

  const JSONFile = useMemo(() => langOptions[lang], [lang]);

  const changeLang = (lng: Languages) => {
    localStorage.setItem(LANGUAGE, lng);
    setLang(lng);
  };

  useEffect(() => {
    const stored = localStorage.getItem(LANGUAGE);
    if (stored === "en" || stored === "kn") {
      setLang(stored);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("lang", lang);
    localStorage.setItem(LANGUAGE, lang);
  }, [lang]);

  if (!mounted) {
    return null; // or a loader
  }

  return (
    <LanguageContext.Provider
      value={{
        lang,
        changeLang,
        LABELS: JSONFile.labels,
        RESUME: JSONFile.resume,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
};
