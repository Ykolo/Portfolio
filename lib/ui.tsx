"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { SITE } from "@/content/site";

interface UIValue {
  cmdOpen: boolean;
  setCmdOpen: (v: boolean) => void;
  openCmd: () => void;
  copyEmail: () => void;
  copied: boolean;
}

const UIContext = createContext<UIValue | null>(null);

export function UIProvider({ children }: { children: React.ReactNode }) {
  const [cmdOpen, setCmdOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // ⌘K / Ctrl+K toggles the command palette
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && (e.key === "k" || e.key === "K")) {
        e.preventDefault();
        setCmdOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const copyEmail = useCallback(() => {
    const done = () => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    };
    if (navigator.clipboard) navigator.clipboard.writeText(SITE.email).then(done).catch(done);
    else done();
  }, []);

  return (
    <UIContext.Provider
      value={{ cmdOpen, setCmdOpen, openCmd: () => setCmdOpen(true), copyEmail, copied }}
    >
      {children}
    </UIContext.Provider>
  );
}

export function useUI(): UIValue {
  const ctx = useContext(UIContext);
  if (!ctx) throw new Error("useUI must be used within UIProvider");
  return ctx;
}
