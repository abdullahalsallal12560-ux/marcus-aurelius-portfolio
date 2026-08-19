import { useContext } from "react";

import { LocaleContext } from "./context";

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used inside <LocaleProvider>");
  return ctx;
}

/** Shorthand for the common case of only needing the copy. */
export function useT() {
  return useLocale().t;
}
