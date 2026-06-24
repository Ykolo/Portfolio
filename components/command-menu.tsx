"use client";

import { Command } from "cmdk";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { useEffect, useState, type ReactElement } from "react";
import { PROJECTS } from "@/content/projects";
import { SITE } from "@/content/site";
import type { Lang } from "@/content/types";
import { useI18n } from "@/lib/i18n";
import { href, NAV_ITEMS } from "@/lib/nav-items";
import { useUI } from "@/lib/ui";
import { Icons } from "./icons";

const NAV_ICONS: Record<string, ReactElement> = {
  "": Icons.home,
  work: Icons.layers,
  about: Icons.user,
  stack: Icons.cmd,
  contact: Icons.mail,
};

export function CommandMenu() {
  const { cmdOpen, setCmdOpen, copyEmail } = useUI();
  const { t, lang, setLang, L } = useI18n();
  const { resolvedTheme, setTheme } = useTheme();
  const router = useRouter();
  const [q, setQ] = useState("");

  // reset query whenever the palette opens
  useEffect(() => {
    if (cmdOpen) setQ("");
  }, [cmdOpen]);

  // close on Escape
  useEffect(() => {
    if (!cmdOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setCmdOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [cmdOpen, setCmdOpen]);

  // lock scroll while open
  useEffect(() => {
    if (!cmdOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [cmdOpen]);

  if (!cmdOpen) return null;

  const run = (fn: () => void) => {
    fn();
    setCmdOpen(false);
  };
  const go = (path: string) => run(() => router.push(href(path)));
  const isDark = resolvedTheme === "dark";

  const langActions: { code: Lang; sub: string }[] = [
    { code: "fr", sub: "Français" },
    { code: "en", sub: "English" },
    { code: "cn", sub: "简体中文" },
  ];

  return (
    <div className="cmd-overlay" role="dialog" aria-modal="true">
      <div className="cmd-scrim" onClick={() => setCmdOpen(false)} />
      <Command
        className="cmd-panel"
        style={{ animation: "ptIn 0.28s var(--ease) both" }}
        loop
      >
        <div className="cmd-search">
          {Icons.search}
          <Command.Input
            autoFocus
            value={q}
            onValueChange={setQ}
            placeholder={t.cmd.placeholder}
          />
          <span className="kbd esc">ESC</span>
        </div>
        <Command.List className="cmd-results">
          <Command.Empty className="cmd-empty">
            {t.cmd.empty} · &quot;{q}&quot;
          </Command.Empty>

          <Command.Group heading={t.cmd.nav}>
            {NAV_ITEMS.map((it) => (
              <Command.Item
                key={it.key}
                className="cmd-item"
                value={`${t.nav[it.key]} ${it.path}`}
                onSelect={() => go(it.path)}
              >
                <span className="ci-ic">{NAV_ICONS[it.path]}</span>
                <span className="ci-main">{t.nav[it.key]}</span>
                <span className="ci-sub">/{it.path}</span>
                <span className="ci-go">{Icons.enter}</span>
              </Command.Item>
            ))}
          </Command.Group>

          <Command.Group heading={t.cmd.projects}>
            {PROJECTS.map((p) => (
              <Command.Item
                key={p.slug}
                className="cmd-item"
                value={`${p.title} ${p.slug} ${L(p.kind)}`}
                onSelect={() => go(`work/${p.slug}`)}
              >
                <span className="ci-ic">{Icons.arrowUpRight}</span>
                <span className="ci-main">{p.title}</span>
                <span className="ci-sub">{L(p.kind)}</span>
                <span className="ci-go">{Icons.enter}</span>
              </Command.Item>
            ))}
          </Command.Group>

          <Command.Group heading={t.cmd.actions}>
            <Command.Item
              className="cmd-item"
              value={`${t.cmd.theme} theme`}
              onSelect={() => run(() => setTheme(isDark ? "light" : "dark"))}
            >
              <span className="ci-ic">{isDark ? Icons.sun : Icons.moon}</span>
              <span className="ci-main">{t.cmd.theme}</span>
              <span className="ci-sub">{isDark ? "light" : "dark"}</span>
              <span className="ci-go">{Icons.enter}</span>
            </Command.Item>
            {langActions.map((la) => (
              <Command.Item
                key={la.code}
                className="cmd-item"
                value={`${t.cmd.lang} ${la.code} ${la.sub}`}
                onSelect={() => run(() => setLang(la.code))}
              >
                <span className="ci-ic">{Icons.globe}</span>
                <span className="ci-main">
                  {t.cmd.lang} · {la.code.toUpperCase()}
                </span>
                <span className="ci-sub">{la.sub}</span>
                <span className="ci-go">{Icons.enter}</span>
              </Command.Item>
            ))}
            <Command.Item
              className="cmd-item"
              value={`${t.cmd.email} ${SITE.email}`}
              onSelect={() => run(copyEmail)}
            >
              <span className="ci-ic">{Icons.copy}</span>
              <span className="ci-main">{t.cmd.email}</span>
              <span className="ci-sub">{SITE.email}</span>
              <span className="ci-go">{Icons.enter}</span>
            </Command.Item>
          </Command.Group>
        </Command.List>
        <div className="cmd-foot">
          <span className="k">
            <span className="kbd">↑↓</span> {t.cmd.nav}
          </span>
          <span className="k">
            <span className="kbd">⏎</span> {t.cmd.hint}
          </span>
          <span className="k" style={{ marginLeft: "auto" }}>
            {SITE.handle}
          </span>
        </div>
      </Command>
    </div>
  );
}
