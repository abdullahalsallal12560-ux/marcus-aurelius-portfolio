/**
 * The three languages the portfolio is published in, and the type each one
 * needs.
 *
 * English and Italian share the house faces outright. Arabic cannot: Cinzel,
 * Playfair Display and EB Garamond carry no Arabic glyphs at all, so an
 * untranslated stack would drop the whole identity onto a system fallback.
 * The Arabic faces are chosen to hold the same three roles rather than to
 * look vaguely similar:
 *
 *   Reem Kufi   for display. Cinzel is a Roman inscriptional capital, cut for
 *               stone. Kufi is the Arabic script cut for stone. Same register,
 *               arrived at independently by two traditions.
 *   Amiri       for reading. A revival of the Bulaq naskh, which is as close
 *               as Arabic comes to an old-style book face, and therefore to
 *               EB Garamond.
 *   Aref Ruqaa  for the flourish, holding the role Playfair italic holds.
 */
export const LOCALES = {
  en: { label: "English", short: "EN", dir: "ltr", htmlLang: "en" },
  ar: { label: "العربية", short: "ع", dir: "rtl", htmlLang: "ar" },
  it: { label: "Italiano", short: "IT", dir: "ltr", htmlLang: "it" },
};

export const LOCALE_IDS = Object.keys(LOCALES);

export const DEFAULT_LOCALE = "en";

export const STORAGE_KEY = "ma-locale";

export function isLocale(value) {
  return Object.prototype.hasOwnProperty.call(LOCALES, value);
}
