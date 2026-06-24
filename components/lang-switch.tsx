"use client";

import { LANGS } from "@/content/i18n";
import { useI18n } from "@/lib/i18n";

export function LangSwitch({ style }: { style?: React.CSSProperties }) {
  const { lang, setLang } = useI18n();
  return (
    <div className="lang-seg" role="group" aria-label="Language" style={style}>
      {LANGS.map(([code, lbl]) => (
        <button key={code} className={lang === code ? "on" : ""} onClick={() => setLang(code)} data-hot>
          {lbl}
        </button>
      ))}
    </div>
  );
}
