"use client";

import { Icons } from "@/components/icons";
import { Reveal } from "@/components/motion";
import { EXPERIENCES } from "@/content/experiences";
import { TOOLS } from "@/content/stack";
import { useI18n } from "@/lib/i18n";

export default function AboutPage() {
  const { t, L } = useI18n();
  const values: [string, string, string][] = [
    ["01", t.about.v1, t.about.v1d],
    ["02", t.about.v2, t.about.v2d],
    ["03", t.about.v3, t.about.v3d],
  ];

  return (
    <div className="page">
      <section className="block" style={{ paddingTop: "clamp(120px,16vh,190px)" }}>
        <div className="wrap">
          <Reveal>
            <span className="label">
              <span className="idx">02</span> {t.nav.about}
            </span>
            <h2 className="page-title" style={{ maxWidth: "16ch" }}>
              {t.about.p1.split(".")[0]}.
            </h2>
          </Reveal>
          <div className="about-cols">
            <Reveal>
              <p style={{ fontFamily: "var(--sans)", fontSize: 17, lineHeight: 1.7, color: "var(--ink)" }}>
                {t.about.p1}
              </p>
            </Reveal>
            <Reveal delay={80}>
              <p style={{ fontFamily: "var(--sans)", fontSize: 17, lineHeight: 1.7, color: "var(--ink-2)" }}>
                {t.about.p2}
              </p>
            </Reveal>
          </div>

          <Reveal style={{ marginTop: "clamp(48px,8vh,90px)" }}>
            <span className="label" style={{ marginBottom: 24, display: "inline-flex" }}>
              {t.about.values}
            </span>
          </Reveal>
          <div className="values">
            {values.map(([n, h, d], i) => (
              <Reveal key={n} delay={i * 80} className="value">
                <div className="vn">{n}</div>
                <h5>{h}</h5>
                <p>{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline — alternating, central spine */}
      <section className="block" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal className="sec-head">
            <div>
              <span className="label">
                <span className="idx">02.1</span> {t.sections.timeline}
              </span>
              <p style={{ marginTop: 10 }}>{t.sections.timelineSub}</p>
            </div>
            <div className="tl-legend">
              <span className="tl-leg exp">
                <span className="tl-dot" />
                {t.sections.expTag}
              </span>
              <span className="tl-leg edu">
                <span className="tl-dot" />
                {t.sections.eduTag}
              </span>
            </div>
          </Reveal>
          <div className="timeline-alt">
            {EXPERIENCES.map((e, i) => {
              const side = i % 2 === 0 ? "left" : "right";
              const isEdu = e.type === "edu";
              return (
                <Reveal key={i} delay={i * 70} className={`ta-row ${side} ${isEdu ? "edu" : "exp"}`}>
                  <article className="ta-card" data-hot>
                    <span className="ta-tag">
                      {isEdu ? Icons.cap : Icons.case}
                      {isEdu ? t.sections.eduTag : t.sections.expTag}
                    </span>
                    <div className="org">{e.org}</div>
                    <h4>{L(e.role)}</h4>
                    <p>{L(e.note)}</p>
                  </article>
                  <span className="ta-node" aria-hidden="true" />
                  <span className="ta-period">
                    {e.period}
                    {e.place ? <span className="ta-place">{L(e.place)}</span> : null}
                  </span>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Daily drivers — the apps Lucas lives in */}
      <section className="block" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal className="sec-head">
            <div>
              <span className="label">
                <span className="idx">02.2</span> {t.sections.tools}
              </span>
            </div>
          </Reveal>
          <Reveal>
            <div className="drivers">
              {TOOLS.map((tool) => (
                <div className="driver" key={tool.name} data-hot>
                  <span className="driver-n">{tool.name}</span>
                  <span className="driver-u">{L(tool.use)}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
