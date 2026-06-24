"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SITE } from "@/content/site";
import { useI18n } from "@/lib/i18n";
import { Icons } from "./icons";

export function Footer() {
  const { t } = useI18n();
  const [clock, setClock] = useState("");

  useEffect(() => {
    const tick = () =>
      setClock(
        new Date().toLocaleTimeString("fr-FR", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZone: "Europe/Paris",
        })
      );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-cta">
          <Link className="footer-mail" href="/contact" data-hot>
            {Icons.mail}
            <span>{SITE.email}</span>
            <span className="arrow">{Icons.arrowUpRight}</span>
          </Link>
          <div className="footer-socials">
            {SITE.socials.map((s) => (
              <a key={s.label} href={s.url} target="_blank" rel="noreferrer" className="nav-link" data-hot>
                {s.label}
              </a>
            ))}
          </div>
        </div>
        <div className="footer-inner">
          <div className="fl">
            <span>
              {t.footer.built} <b>{SITE.name}</b>
            </span>
            <span>{t.footer.with}</span>
          </div>
          <div className="fl" style={{ textAlign: "center" }}>
            <span className="clock">PARIS · {clock} CET</span>
            <span>
              © {new Date().getFullYear()} — {t.footer.rights}
            </span>
          </div>
          <button
            className="top-btn"
            data-hot
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            {t.footer.back} {Icons.arrowUpRight}
          </button>
        </div>
      </div>
    </footer>
  );
}
