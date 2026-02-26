import type { SkillGroup } from "../data/cv";
import { useLanguage, labels } from "../i18n";

interface SkillsProps {
  groups: SkillGroup[];
}

export default function Skills({ groups }: SkillsProps) {
  const { lang } = useLanguage();

  return (
    <section className="section">
      <h2 className="section__title">{labels[lang].skills}</h2>
      <dl className="skills">
        {groups.map((g, i) => (
          <div className="skills__row" key={i}>
            <dt className="skills__category">{g.category}</dt>
            <dd className="skills__items">{g.items}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
