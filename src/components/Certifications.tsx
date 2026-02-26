import { useLanguage, labels } from "../i18n";

interface CertificationsProps {
  items: string[];
}

export default function Certifications({ items }: CertificationsProps) {
  const { lang } = useLanguage();

  return (
    <section className="section">
      <h2 className="section__title">{labels[lang].certifications}</h2>
      <ul className="compact-list">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
