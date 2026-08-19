import { useLocale } from "../../i18n/useLocale";
import { LOCALES, LOCALE_IDS } from "../../i18n/locales";

/**
 * Three letters, hairline-separated, in the nav.
 *
 * A dropdown would be the smaller control, but with only three languages it
 * would hide two of them behind a click and give the reader no signal that
 * the site is trilingual at all. Set out flat, the choice is the evidence.
 *
 * Each label is written in its own language and marked with its own lang
 * attribute, so a screen reader pronounces the Arabic as Arabic rather than
 * spelling it out in English.
 */
export default function LanguageSwitch({ className = "" }) {
  const { locale, setLocale } = useLocale();

  return (
    <div
      role="group"
      aria-label={LOCALES[locale].label}
      className={`flex items-center ${className}`}
    >
      {LOCALE_IDS.map((id, i) => {
        const active = id === locale;
        return (
          <span key={id} className="flex items-center">
            {i > 0 && (
              <span aria-hidden="true" className="w-px h-3 bg-cream-dim/30 mx-1.5 md:mx-2" />
            )}
            <button
              type="button"
              lang={LOCALES[id].htmlLang}
              onClick={() => setLocale(id)}
              aria-pressed={active}
              title={LOCALES[id].label}
              className={`meta-label-sm px-1 py-2 transition-colors duration-500 ${
                active ? "text-gold" : "text-cream-dim/70 hover:text-cream"
              }`}
            >
              {LOCALES[id].short}
            </button>
          </span>
        );
      })}
    </div>
  );
}
