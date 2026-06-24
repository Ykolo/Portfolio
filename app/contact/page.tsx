"use client";

import { useEffect, useState } from "react";
import { Icons } from "@/components/icons";
import { Magnetic, Reveal } from "@/components/motion";
import { SITE } from "@/content/site";
import { useI18n } from "@/lib/i18n";
import { useUI } from "@/lib/ui";

export default function ContactPage() {
  const { t, L } = useI18n();
  const { copyEmail, copied } = useUI();
  const [clock, setClock] = useState("");

  useEffect(() => {
    const tick = () =>
      setClock(
        new Date().toLocaleTimeString("fr-FR", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Europe/Paris",
        })
      );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="page">
      <section className="block" style={{ paddingTop: "clamp(120px,16vh,190px)" }}>
        <div className="wrap">
          <div className="contact-grid">
            <div className="contact-main">
              <Reveal>
                <span className="label">
                  <span className="idx">05</span> {t.nav.contact}
                </span>
              </Reveal>
              <Reveal delay={60}>
                <h2 className="contact-h">{t.contact.title}</h2>
              </Reveal>
              <Reveal delay={120}>
                <p className="contact-lede">{t.contact.lede}</p>
              </Reveal>
              <Reveal delay={180}>
                <Magnetic as="span" strength={0.18}>
                  <button className="mail-btn" onClick={copyEmail} data-hot>
                    {copied ? Icons.check : Icons.mail}
                    <span>{SITE.email}</span>
                    <span className="cp">{copied ? t.contact.copied : t.contact.copy}</span>
                  </button>
                </Magnetic>
              </Reveal>
              <Reveal delay={240}>
                <div className="contact-socials">
                  <span className="label" style={{ marginBottom: 4 }}>
                    {t.contact.or}
                  </span>
                  <div className="socials-row" style={{ justifyContent: "flex-start", marginTop: 12 }}>
                    {SITE.socials.map((s) => (
                      <a className="linkpill" key={s.label} href={s.url} target="_blank" rel="noreferrer" data-hot>
                        {s.label} <span style={{ color: "var(--ink-3)" }}>{Icons.arrowUpRight}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
            <Reveal delay={120} className="contact-aside">
              <div className="ca-row">
                <span className="k">{t.misc.available}</span>
                <span className="v">
                  <span className="dot-live" /> {L(SITE.available)}
                </span>
              </div>
              <div className="ca-row">
                <span className="k">{t.contact.location}</span>
                <span className="v">{L(SITE.location)}</span>
              </div>
              <div className="ca-row">
                <span className="k">{t.contact.localTime}</span>
                <span className="v clock">{clock} CET</span>
              </div>
              <div className="ca-row">
                <span className="k">{t.project.role}</span>
                <span className="v">{L(SITE.role)}</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
