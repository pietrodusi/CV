import type { EducationEntry } from "../data/cv";
import { useLanguage, labels } from "../i18n";

interface EducationProps {
  entries: EducationEntry[];
}

export default function Education({ entries }: EducationProps) {
  const { lang } = useLanguage();

  return (
    <section className="section">
      <h2 className="section__title">{labels[lang].education}</h2>
      {entries.map((entry, i) => (
        <div className="entry" key={i}>
          <div className="entry__header">
            <div className="entry__left">
              <h3 className="entry__title">{entry.institution}</h3>
              <span className="entry__org">{entry.degree}</span>
            </div>
            <div className="entry__right">
              <span className="entry__period">{entry.period}</span>
            </div>
          </div>
          <ul className="entry__bullets">
            {entry.bullets.map((b, j) => (
              <li key={j}>{b}</li>
            ))}
          </ul>
          {entry.internships && (
            <div className="internships">
              <span className="internships__label">{labels[lang].internships}</span>
              <ul className="internships__list">
                {entry.internships.map((intern, k) => (
                  <li key={k}>
                    <strong>{intern.company}</strong> — {intern.detail}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
