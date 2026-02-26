import { useLanguage, labels } from "../i18n";

interface LanguagesProps {
  items: { name: string; level: string }[];
}

export default function Languages({ items }: LanguagesProps) {
  const { lang } = useLanguage();

  return (
    <section className="section section--inline">
      <h2 className="section__title">{labels[lang].languages}</h2>
      <p className="inline-list">
        {items.map((lang, i) => (
          <span key={i}>
            <strong>{lang.name}</strong> — {lang.level}
            {i < items.length - 1 && (
              <span className="inline-list__sep" aria-hidden="true" />
            )}
          </span>
        ))}
      </p>
    </section>
  );
}
