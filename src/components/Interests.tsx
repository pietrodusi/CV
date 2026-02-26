import { useLanguage, labels } from "../i18n";

interface InterestsProps {
  items: string[];
}

export default function Interests({ items }: InterestsProps) {
  const { lang } = useLanguage();

  return (
    <section className="section section--inline">
      <h2 className="section__title">{labels[lang].interests}</h2>
      <p className="inline-list">
        {items.map((item, i) => (
          <span key={i}>
            {item}
            {i < items.length - 1 && (
              <span className="inline-list__sep" aria-hidden="true" />
            )}
          </span>
        ))}
      </p>
    </section>
  );
}
