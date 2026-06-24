"use client";

import { Reveal } from "@/components/motion";
import { TechGrid, TechShowcase } from "@/components/tech/tech-grid";
import { STACK_GROUPS } from "@/content/stack";
import { useI18n } from "@/lib/i18n";

export default function StackPage() {
  const { t, L } = useI18n();
  return (
    <div className="page">
      <section className="block" style={{ paddingTop: "clamp(120px,16vh,190px)" }}>
        <div className="wrap">
          <Reveal>
            <span className="label">
              <span className="idx">03</span> {t.nav.stack}
            </span>
            <h2 className="page-title">{t.sections.stackTitle}</h2>
            <p className="page-sub">{t.sections.stackSub}</p>
          </Reveal>

          <div className="tech-sections">
            {STACK_GROUPS.map((g, gi) => (
              <Reveal key={g.id} delay={gi * 60}>
                <div className="tech-head">
                  <span className="label">
                    <span className="idx">{`03.${gi + 1}`}</span> {L(g.label)}
                  </span>
                  <p>{L(g.note)}</p>
                </div>
                {gi === 0 ? <TechShowcase items={g.items} /> : <TechGrid items={g.items} />}
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
