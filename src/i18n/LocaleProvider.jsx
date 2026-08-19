import { useCallback, useEffect, useMemo, useState } from "react";

import { LocaleContext } from "./context";

import { DEFAULT_LOCALE, LOCALES, STORAGE_KEY, isLocale } from "./locales";
import en from "./dictionaries/en";
import ar from "./dictionaries/ar";
import it from "./dictionaries/it";

const DICTIONARIES = { en, ar, it };

/**
 * Falls back key by key rather than dictionary by dictionary. A translation
 * that is still in progress leaves English behind wherever it has not reached
 * yet, instead of blanking the section or throwing on a missing branch.
 */
function withFallback(target, fallback) {
  if (Array.isArray(fallback)) {
    const list = Array.isArray(target) ? target : [];
    return fallback.map((item, i) => withFallback(list[i], item));
  }

  if (fallback && typeof fallback === "object") {
    const source = target && typeof target === "object" ? target : {};
    const out = {};
    for (const key of Object.keys(fallback)) {
      out[key] = withFallback(source[key], fallback[key]);
    }
    return out;
  }

  return target === undefined || target === null || target === "" ? fallback : target;
}

function readStored() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return isLocale(saved) ? saved : null;
  } catch {
    // private browsing, or storage disabled: the choice simply does not persist
    return null;
  }
}

export function LocaleProvider({ children }) {
  const [locale, setLocaleState] = useState(DEFAULT_LOCALE);

  // Resolved after mount rather than during render: the markup that ships is
  // the English one, so a reader with no stored choice never sees a flash of
  // the wrong language, and the server-rendered lang attribute stays honest.
  useEffect(() => {
    const stored = readStored();
    if (stored) setLocaleState(stored);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("lang", LOCALES[locale].htmlLang);
    root.setAttribute("dir", LOCALES[locale].dir);
  }, [locale]);

  const setLocale = useCallback((next) => {
    if (!isLocale(next)) return;
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // not being able to remember the choice is not a reason to refuse it
    }
  }, []);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      dir: LOCALES[locale].dir,
      t: locale === "en" ? en : withFallback(DICTIONARIES[locale], en),
    }),
    [locale, setLocale]
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}
