import type { Lang } from "../i18n";

export interface ContactInfo {
  location: string;
  email: string;
  linkedin: string;
  github: string;
}

export interface ExperienceEntry {
  title: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
}

export interface ProjectEntry {
  name: string;
  url: string;
  bullets: string[];
}

export interface InternshipEntry {
  company: string;
  detail: string;
}

export interface EducationEntry {
  institution: string;
  period: string;
  degree: string;
  bullets: string[];
  internships?: InternshipEntry[];
}

export interface SkillGroup {
  category: string;
  items: string;
}

export interface CvData {
  name: string;
  contact: ContactInfo;
  experience: ExperienceEntry[];
  projects: ProjectEntry[];
  education: EducationEntry[];
  skills: SkillGroup[];
  certifications: string[];
  languages: { name: string; level: string }[];
  interests: string[];
}

/* ── Shared values ─────────────────────────────────────────────────── */

const contact: ContactInfo = {
  location: "Bologna, Italy",
  email: "dusi.pietro@gmail.com",
  linkedin: "linkedin.com/in/pietro-dusi",
  github: "github.com/pietrodusi",
};

const name = "Pietro Dusi";

/* ── English ───────────────────────────────────────────────────────── */

const en: CvData = {
  name,
  contact,
  experience: [
    {
      title: "Specialist, Variant Configurator Solutions",
      company: "Danfoss, Digital Customer Experience",
      period: "Jun 2022 – Present",
      location: "Remote / Bologna, Italy",
      bullets: [
        "Supports multiple Danfoss business units in building and maintaining SAP Variant Configurators",
        "Deploys product configurators to Design Center, Danfoss's web-based configuration platform for distributors",
        "Develops internal tools in C# and VB.NET to automate SAP GUI operations and eliminate repetitive manual tasks",
        "Built an application that extracts SAP variant tables and converts them into decision-matrix-style Excel files, establishing the new standard format for the upcoming SAP system migration",
      ],
    },
    {
      title: "Configurator Specialist",
      company: "Danfoss, BU Gears (formerly Turolla)",
      period: "Oct 2020 – May 2022",
      location: "Castel San Pietro Terme, Bologna, Italy",
      bullets: [
        "Led the migration from custom in-house configurator tools to the Danfoss standard stack: SAP Variant Configurator, Rulestream, NX, and Teamcenter",
        "Prepared, built, and deployed 19 online product configurators for BU Gears on the Design Center platform (linked to Salesforce)",
        "Developed Rulestream applications to automate 3D model and 2D drawing generation from product configurations",
        "Collaborated with the Digital Customer Experience team on Design Center platform improvements",
      ],
    },
    {
      title: "Jr Product Development Engineer",
      company: "Turolla (Danfoss)",
      period: "Jun 2017 – Sep 2020",
      location: "Castel San Pietro Terme, Bologna, Italy",
      bullets: [
        "Designed and drafted 3D models and 2D drawings of gear pumps and motors using Siemens NX",
        "Performed FEA (NX Nastran) and CFD (Pumplinx) simulations for failure analysis",
        "Used 3D printing for rapid prototyping of components and production tooling",
        "Conceived and built from scratch an online product configurator: automated NX CAD via VB.NET scripting for 3D/2D generation, and developed the web frontend using HTML, CSS, jQuery, and PHP",
        "Served as Teamcenter (PLM) superuser",
      ],
    },
  ],
  projects: [
    {
      name: "SapLoVcSharp",
      url: "github.com/pietrodusi/SapLoVcSharp",
      bullets: [
        "Reverse-engineered SAP Variant Configuration engine logic reimplemented in C#",
        "React frontend with C# ASP.NET backend",
      ],
    },
    {
      name: "NCV Valdelsa",
      url: "ncvvaldelsa.it",
      bullets: [
        "Designed, developed, and deployed a public website for a veterinary clinic",
      ],
    },
    {
      name: "Tacticus Damage Calculator",
      url: "github.com/pietrodusi/TacticusDamageCalc",
      bullets: [
        "Web application simulating Guild Raid damage calculations for Warhammer 40,000: Tacticus",
        "Implements the game's damage formulas for player strategy optimization",
      ],
    },
  ],
  education: [
    {
      institution: "ITS Maker",
      period: "2015 – 2017",
      degree:
        "Tecnico Superiore in Progettazione Meccanica e Materiali (EQF Level 5)",
      bullets: [
        "Mechanical component design, materials science, manufacturing processes, 3D modeling (AutoCAD, Creo Parametric)",
      ],
      internships: [
        {
          company: "Ducati Motor Holding",
          detail: "Engineering department (1 month)",
        },
        {
          company: "Zlatorog Oprema d.o.o., Slovenia",
          detail: "Erasmus+ program (2 months)",
        },
        {
          company: "Turolla",
          detail:
            "FEA thesis on gear pump tip clearance calculation; 3D modeling with Siemens NX (5 months total, leading to hire)",
        },
      ],
    },
  ],
  skills: [
    {
      category: "Programming",
      items: "C#, .NET, ASP.NET, VB.NET, Python, JavaScript, React, HTML, CSS, jQuery, PHP",
    },
    {
      category: "SAP",
      items: "Variant Configurator, SAP GUI automation",
    },
    {
      category: "CAD / PLM",
      items: "Siemens NX, Rulestream, Teamcenter, AutoCAD, Creo Parametric, FreeCAD",
    },
    {
      category: "Simulation",
      items: "NX Nastran (FEA), Pumplinx (CFD)",
    },
    {
      category: "Other",
      items: "3D Printing, Salesforce (Design Center), Git/GitHub, Agile/Scrum",
    },
  ],
  certifications: [
    "Foundational C# with Microsoft — freeCodeCamp",
    "Certified Scrum Product Owner (CSPO) — expired",
    "Microsoft Learn: .NET, C#, ASP.NET (self-paced coursework)",
  ],
  languages: [
    { name: "Italian", level: "Native" },
    { name: "English", level: "Full Professional Proficiency" },
  ],
  interests: [
    "Web development and software architecture (continuous self-study)",
    "3D printing",
    "Orchestral music composition and production",
  ],
};

/* ── Italian ───────────────────────────────────────────────────────── */

const it: CvData = {
  name,
  contact,
  experience: [
    {
      title: "Specialist, Variant Configurator Solutions",
      company: "Danfoss, Digital Customer Experience",
      period: "Giu 2022 – Presente",
      location: "Remoto / Bologna, Italia",
      bullets: [
        "Supporta diverse business unit Danfoss nella creazione e manutenzione di SAP Variant Configurator",
        "Distribuisce configuratori di prodotto su Design Center, la piattaforma web di configurazione Danfoss per i distributori",
        "Sviluppa strumenti interni in C# e VB.NET per automatizzare operazioni SAP GUI ed eliminare attività manuali ripetitive",
        "Ha realizzato un'applicazione che estrae le tabelle varianti SAP e le converte in file Excel in formato matrice decisionale, diventato il nuovo standard per la migrazione SAP in corso",
      ],
    },
    {
      title: "Configurator Specialist",
      company: "Danfoss, BU Gears (ex Turolla)",
      period: "Ott 2020 – Mag 2022",
      location: "Castel San Pietro Terme, Bologna, Italia",
      bullets: [
        "Ha guidato la migrazione dagli strumenti di configurazione interni allo stack standard Danfoss: SAP Variant Configurator, Rulestream, NX e Teamcenter",
        "Ha preparato, costruito e distribuito 19 configuratori di prodotto online per BU Gears sulla piattaforma Design Center (collegata a Salesforce)",
        "Ha sviluppato applicazioni Rulestream per automatizzare la generazione di modelli 3D e disegni 2D dalle configurazioni di prodotto",
        "Ha collaborato con il team Digital Customer Experience ai miglioramenti della piattaforma Design Center",
      ],
    },
    {
      title: "Jr Product Development Engineer",
      company: "Turolla (Danfoss)",
      period: "Giu 2017 – Set 2020",
      location: "Castel San Pietro Terme, Bologna, Italia",
      bullets: [
        "Ha progettato e disegnato modelli 3D e disegni 2D di pompe e motori a ingranaggi con Siemens NX",
        "Ha eseguito simulazioni FEA (NX Nastran) e CFD (Pumplinx) per analisi di rottura",
        "Ha utilizzato la stampa 3D per la prototipazione rapida di componenti e attrezzature di produzione",
        "Ha ideato e costruito da zero un configuratore di prodotto online: automazione CAD NX tramite scripting VB.NET per la generazione 3D/2D, e sviluppo del frontend web con HTML, CSS, jQuery e PHP",
        "Superuser Teamcenter (PLM)",
      ],
    },
  ],
  projects: [
    {
      name: "SapLoVcSharp",
      url: "github.com/pietrodusi/SapLoVcSharp",
      bullets: [
        "Reverse engineering della logica del motore SAP Variant Configuration, reimplementata in C#",
        "Frontend React con backend C# ASP.NET",
      ],
    },
    {
      name: "NCV Valdelsa",
      url: "ncvvaldelsa.it",
      bullets: [
        "Progettazione, sviluppo e deploy di un sito web pubblico per una clinica veterinaria",
      ],
    },
    {
      name: "Tacticus Damage Calculator",
      url: "github.com/pietrodusi/TacticusDamageCalc",
      bullets: [
        "Applicazione web per la simulazione dei calcoli di danno nelle Guild Raid di Warhammer 40,000: Tacticus",
        "Implementa le formule di danno del gioco per l'ottimizzazione delle strategie dei giocatori",
      ],
    },
  ],
  education: [
    {
      institution: "ITS Maker",
      period: "2015 – 2017",
      degree:
        "Tecnico Superiore in Progettazione Meccanica e Materiali (EQF Livello 5)",
      bullets: [
        "Progettazione di componenti meccanici, scienza dei materiali, processi di produzione, modellazione 3D (AutoCAD, Creo Parametric)",
      ],
      internships: [
        {
          company: "Ducati Motor Holding",
          detail: "Reparto ingegneria (1 mese)",
        },
        {
          company: "Zlatorog Oprema d.o.o., Slovenia",
          detail: "Programma Erasmus+ (2 mesi)",
        },
        {
          company: "Turolla",
          detail:
            "Tesi FEA sul calcolo del gioco di estremità delle pompe a ingranaggi; modellazione 3D con Siemens NX (5 mesi totali, con successiva assunzione)",
        },
      ],
    },
  ],
  skills: [
    {
      category: "Programmazione",
      items: "C#, .NET, ASP.NET, VB.NET, Python, JavaScript, React, HTML, CSS, jQuery, PHP",
    },
    {
      category: "SAP",
      items: "Variant Configurator, automazione SAP GUI",
    },
    {
      category: "CAD / PLM",
      items: "Siemens NX, Rulestream, Teamcenter, AutoCAD, Creo Parametric, FreeCAD",
    },
    {
      category: "Simulazione",
      items: "NX Nastran (FEA), Pumplinx (CFD)",
    },
    {
      category: "Altro",
      items: "Stampa 3D, Salesforce (Design Center), Git/GitHub, Agile/Scrum",
    },
  ],
  certifications: [
    "Foundational C# with Microsoft — freeCodeCamp",
    "Certified Scrum Product Owner (CSPO) — scaduto",
    "Microsoft Learn: .NET, C#, ASP.NET (formazione autonoma)",
  ],
  languages: [
    { name: "Italiano", level: "Madrelingua" },
    { name: "Inglese", level: "Competenza professionale completa" },
  ],
  interests: [
    "Sviluppo web e architettura software (studio continuo)",
    "Stampa 3D",
    "Composizione e produzione di musica orchestrale",
  ],
};

const cv: Record<Lang, CvData> = { en, it };

export default cv;
