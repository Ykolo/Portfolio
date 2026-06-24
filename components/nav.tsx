"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SITE } from "@/content/site";
import { useI18n } from "@/lib/i18n";
import { href, NAV_ITEMS } from "@/lib/nav-items";
import { useUI } from "@/lib/ui";
import { Icons } from "./icons";
import { LangSwitch } from "./lang-switch";
import { ThemeToggle } from "./theme-toggle";

export function Nav() {
  const { t } = useI18n();
  const { openCmd } = useUI();
  const pathname = usePathname();
  const base = pathname.split("/")[1] || "";
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close the mobile sheet on navigation
  useEffect(() => setMenu(false), [pathname]);

  return (
    <>
      <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-inner">
          <Link className="brand" href="/" data-hot>
            <span className="brand-mark">
              <span>L</span>
            </span>
            <span>
              {SITE.name}
              <small> / dev</small>
            </span>
          </Link>
          <div className="nav-links">
            {NAV_ITEMS.map((it) => (
              <Link
                key={it.key}
                href={href(it.path)}
                className={`nav-link ${base === it.path ? "active" : ""}`}
              >
                <span className="nlx">{it.num}</span>
                {t.nav[it.key]}
              </Link>
            ))}
          </div>
          <div className="nav-right">
            <button className="cmd-trigger" onClick={openCmd} data-hot>
              {Icons.search}
              <span className="ct-label">{t.cmd.search}</span>
              <span className="kbd">⌘K</span>
            </button>
            <LangSwitch />
            <ThemeToggle />
            <button className="icon-btn menu-toggle" aria-label={t.misc.openCmd} onClick={() => setMenu(true)}>
              {Icons.menu}
            </button>
          </div>
        </div>
      </nav>

      <div className={`sheet ${menu ? "open" : ""}`}>
        <div className="sheet-scrim" onClick={() => setMenu(false)} />
        <div className="sheet-panel">
          <button
            className="icon-btn"
            style={{ position: "absolute", top: 24, right: 24 }}
            aria-label="Close"
            onClick={() => setMenu(false)}
          >
            {Icons.close}
          </button>
          {NAV_ITEMS.map((it) => (
            <Link key={it.key} href={href(it.path)} onClick={() => setMenu(false)}>
              {t.nav[it.key]}
              <span className="nlx">{it.num}</span>
            </Link>
          ))}
          <div style={{ marginTop: "auto", display: "flex", gap: 10, alignItems: "center" }}>
            <LangSwitch style={{ display: "flex" }} />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </>
  );
}
