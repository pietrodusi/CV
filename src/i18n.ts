import { createContext, useContext } from "react";

export type Lang = "en" | "it";

export const labels = {
  en: {
    experience: "Experience",
    projects: "Projects",
    education: "Education",
    skills: "Technical Skills",
    certifications: "Certifications",
    languages: "Languages",
    interests: "Interests",
    internships: "Internships:",
  },
  it: {
    experience: "Esperienza",
    projects: "Progetti",
    education: "Formazione",
    skills: "Competenze Tecniche",
    certifications: "Certificazioni",
    languages: "Lingue",
    interests: "Interessi",
    internships: "Tirocini:",
  },
} as const;

export const LanguageContext = createContext<{
  lang: Lang;
  setLang: (lang: Lang) => void;
}>({ lang: "en", setLang: () => {} });

export function useLanguage() {
  return useContext(LanguageContext);
}
