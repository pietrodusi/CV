import type { ExperienceEntry } from "../data/cv";
import { useLanguage, labels } from "../i18n";

interface ExperienceProps {
  entries: ExperienceEntry[];
}

export default function Experience({ entries }: ExperienceProps) {
  const { lang } = useLanguage();

  return (
    <section className="section">
      <h2 className="section__title">{labels[lang].experience}</h2>
      {entries.map((entry, i) => (
        <div className="entry" key={i}>
          <div className="entry__header">
            <div className="entry__left">
              <h3 className="entry__title">{entry.title}</h3>
              <span className="entry__org">{entry.company}</span>
            </div>
            <div className="entry__right">
              <span className="entry__period">{entry.period}</span>
              <span className="entry__location">{entry.location}</span>
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
