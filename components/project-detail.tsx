"use client";

import Link from "next/link";
import { type CSSProperties } from "react";
import type { Project } from "@/content/types";
import { PROJECTS } from "@/content/projects";
import { useI18n } from "@/lib/i18n";
import { Icons } from "./icons";
import { LinkPill } from "./link-pill";
import { Reveal, Scramble } from "./motion";

export function ProjectDetail({ project: p, next }: { project: Project; next: Project }) {
  const { t, L } = useI18n();
  const total = String(PROJECTS.length).padStart(2, "0");

  return (
    <div className="page" style={{ "--brand": p.accent } as CSSProperties}>
      <header className="pd-hero">
        <div className="wrap">
          <Link className="pd-back" href="/work" data-hot>
            <span className="arrow">{Icons.arrowLeft}</span> {t.project.back}
          </Link>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: 16,
            }}
          >
            <h1 className="pd-title">
              <Scramble text={p.title} />
            </h1>
            <span className="label no-tick" style={{ marginBottom: 18 }}>
              {p.index} / {total}
            </span>
          </div>
          <p className="pd-tag">{L(p.tagline)}</p>

          <div className="pd-canvas" style={{ "--brand": p.accent } as CSSProperties}>
            <div className="ph-grid" />
            <span className="pd-corner tl">◰ {p.title}.app</span>
            <span className="pd-corner tr">{p.year}</span>
            <span className="pd-corner bl" style={{ color: p.accent }}>
              ● {L(p.kind)}
            </span>
            <span className="pd-corner br">1600 × 800</span>
            <div className="ph-mark">
              <div className="big">{p.title}</div>
              <div className="lab">aperçu projet · placeholder</div>
            </div>
          </div>

          <div className="pd-grid">
            <div className="pd-body">
              <span className="label">{t.project.overview}</span>
              <Reveal>
                <p style={{ marginTop: 16 }}>{L(p.description)}</p>
              </Reveal>
              <div className="pd-metrics">
                {p.metrics.map((m, i) => (
                  <Reveal key={i} delay={i * 80} className="metric">
                    <div className="mv" style={{ color: p.accent }}>
                      {m.v}
                    </div>
                    <div className="mk">{m.k}</div>
                  </Reveal>
                ))}
              </div>
            </div>
            <aside className="pd-side">
              <div className="row">
                <span className="k">{t.project.role}</span>
                <span className="v">{L(p.role)}</span>
              </div>
              <div className="row">
                <span className="k">{t.project.year}</span>
                <span className="v">{p.year}</span>
              </div>
              <div className="row">
                <span className="k">{t.project.stack}</span>
                <span className="pd-stack-list">
                  {p.stack.map((s) => (
                    <span className="chip solid" key={s}>
                      {s}
                    </span>
                  ))}
                </span>
              </div>
              <div className="row">
                <span className="k">{t.project.links}</span>
                <div className="linkpills">
                  {p.links.map((l) => (
                    <LinkPill key={l.type} link={l} />
                  ))}
                </div>
              </div>
            </aside>
          </div>

          <div className="pd-next">
            <Link href={`/work/${next.slug}`} data-hot>
              <span className="k">{t.project.next}</span>
              <span className="t">
                {next.title} {Icons.arrowUpRight}
              </span>
            </Link>
            <span style={{ color: "var(--ink-3)", fontSize: 13 }}>{next.index}</span>
          </div>
        </div>
      </header>
    </div>
  );
}
