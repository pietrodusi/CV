import type { ProjectEntry } from "../data/cv";
import { useLanguage, labels } from "../i18n";

interface ProjectsProps {
  entries: ProjectEntry[];
}

export default function Projects({ entries }: ProjectsProps) {
  const { lang } = useLanguage();

  return (
    <section className="section">
      <h2 className="section__title">{labels[lang].projects}</h2>
      {entries.map((entry, i) => (
        <div className="entry" key={i}>
          <div className="entry__header">
            <div className="entry__left">
              <h3 className="entry__title">
                <a
                  href={`https://${entry.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="entry__link"
                >
                  {entry.name}
                </a>
              </h3>
              <span className="entry__org print-only">{entry.url}</span>
            </div>
          </div>
          <ul className="entry__bullets">
            {entry.bullets.map((b, j) => (
              <li key={j}>{b}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
