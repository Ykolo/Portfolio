"use client";

import { useRouter } from "next/navigation";
import { Icons } from "@/components/icons";
import { Magnetic, MaskLine, MaskLines, Reveal } from "@/components/motion";
import { TechShowcase } from "@/components/tech/tech-grid";
import { WorkIndex } from "@/components/work-index";
import { PROJECTS } from "@/content/projects";
import { SITE } from "@/content/site";
import { STACK_GROUPS } from "@/content/stack";
import { useI18n } from "@/lib/i18n";

export default function HomePage() {
  const { t, L } = useI18n();
  const router = useRouter();
  const featured = PROJECTS.slice(0, 4);
  const mainStack = STACK_GROUPS[0].items;

  return (
    <div className="page">
      <header className="hero">
        <div className="wrap">
          <div className="hero-top">
            <span className="avail">
              <span className="dot-live" />
              {L(SITE.available)}
            </span>
            <div className="hero-meta" style={{ textAlign: "right" }}>
              <span>
                <b>{SITE.name}</b> — {L(SITE.role)}
              </span>
              <span>{L(SITE.location)} · 48.85°N 2.35°E</span>
            </div>
          </div>
          <h1>
            <MaskLines lines={[t.hero.line1, t.hero.line2]} baseDelay={0.05} />
            <MaskLine delay={0.23} className="accent">
              {t.hero.line3}
            </MaskLine>
          </h1>
          <p className="hero-lede">{t.hero.lede}</p>
          <div className="hero-cta">
            <Magnetic as="span">
              <button className="btn btn-primary" onClick={() => router.push("/work")}>
                {t.hero.cta1} <span className="arrow">{Icons.arrowUpRight}</span>
              </button>
            </Magnetic>
            <Magnetic as="span">
              <button className="btn" onClick={() => router.push("/contact")}>
                {t.hero.cta2}
              </button>
            </Magnetic>
          </div>
          <div className="hero-scroll">
            <span className="bar" />
            {t.hero.scroll}
          </div>
        </div>
      </header>

      {/* Selected work */}
      <section className="block">
        <div className="wrap">
          <Reveal className="sec-head">
            <div>
              <span className="label">
                <span className="idx">01</span> {t.sections.approach}
              </span>
              <h2 style={{ marginTop: 14 }}>{t.sections.selected}</h2>
            </div>
            <p>{t.sections.selectedSub}</p>
          </Reveal>
          <WorkIndex projects={featured} />
          <Reveal style={{ marginTop: 40 }}>
            <Magnetic as="span">
              <button className="btn" onClick={() => router.push("/work")}>
                {t.project.all} <span className="arrow">{Icons.arrow}</span>
              </button>
            </Magnetic>
          </Reveal>
        </div>
      </section>

      {/* Stack teaser (dot-matrix logos) */}
      <section className="block">
        <div className="wrap">
          <Reveal className="sec-head">
            <div>
              <span className="label">
                <span className="idx">02</span> {t.nav.stack}
              </span>
              <h2 style={{ marginTop: 14 }}>{t.sections.stackTitle}</h2>
            </div>
            <p>{t.sections.stackSub}</p>
          </Reveal>
          <Reveal>
            <TechShowcase items={mainStack} />
          </Reveal>
          <Reveal style={{ marginTop: 40 }}>
            <Magnetic as="span">
              <button className="btn" onClick={() => router.push("/stack")}>
                {t.sections.stackTitle} <span className="arrow">{Icons.arrow}</span>
              </button>
            </Magnetic>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
