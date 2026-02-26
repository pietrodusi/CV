import type { ContactInfo } from "../data/cv";
import { useLanguage } from "../i18n";

interface HeaderProps {
  name: string;
  contact: ContactInfo;
}

export default function Header({ name, contact }: HeaderProps) {
  const { lang, setLang } = useLanguage();

  return (
    <header className="header">
      <div className="lang-toggle no-print">
        <button
          className={`lang-toggle__btn${lang === "en" ? " lang-toggle__btn--active" : ""}`}
          onClick={() => setLang("en")}
          aria-pressed={lang === "en"}
        >
          EN
        </button>
        <button
          className={`lang-toggle__btn${lang === "it" ? " lang-toggle__btn--active" : ""}`}
          onClick={() => setLang("it")}
          aria-pressed={lang === "it"}
        >
          IT
        </button>
      </div>
      <h1 className="header__name">{name}</h1>
      <div className="header__contact">
        <span>{contact.location}</span>
        <span className="header__sep" aria-hidden="true" />
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
        <span className="header__sep" aria-hidden="true" />
        <a
          href={`https://${contact.linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {contact.linkedin}
        </a>
        <span className="header__sep" aria-hidden="true" />
        <a
          href={`https://${contact.github}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {contact.github}
        </a>
      </div>
    </header>
  );
}
