import { useState } from "react";
import cv from "../data/cv";
import { LanguageContext, type Lang } from "../i18n";
import Header from "./Header";
import Experience from "./Experience";
import Projects from "./Projects";
import Education from "./Education";
import Skills from "./Skills";
import Certifications from "./Certifications";
import Languages from "./Languages";
import Interests from "./Interests";

export default function Cv() {
  const [lang, setLang] = useState<Lang>("en");
  const data = cv[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      <div className="cv">
        <Header name={data.name} contact={data.contact} />
        <Experience entries={data.experience} />
        <Projects entries={data.projects} />
        <Education entries={data.education} />
        <Skills groups={data.skills} />
        <Certifications items={data.certifications} />
        <Languages items={data.languages} />
        <Interests items={data.interests} />
      </div>
    </LanguageContext.Provider>
  );
}
