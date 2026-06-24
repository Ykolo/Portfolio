"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { DICT, type Dict } from "@/content/i18n";
import type { Lang, Localized } from "@/content/types";

const STORAGE_KEY = "pf-lang";

interface I18nValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dict;
  /** localize a {fr,en,cn} field for the current language */
  L: <T>(o: Localized<T> | T) => T;
}

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  // Always start with "fr" so SSR and first client render agree, then
  // hydrate the stored preference on mount (no hydration mismatch).
  const [lang, setLangState] = useState<Lang>("fr");

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (stored && stored !== lang) setLangState(stored);
    } catch {
      /* ignore */
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("lang", lang === "cn" ? "zh" : lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  const setLang = useCallback((l: Lang) => setLangState(l), []);

  const L = useCallback(
    <T,>(o: Localized<T> | T): T => {
      if (o && typeof o === "object" && lang in (o as Localized<T>)) {
        return (o as Localized<T>)[lang];
      }
      return o as T;
    },
    [lang]
  );

  return (
    <I18nContext.Provider value={{ lang, setLang, t: DICT[lang], L }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
