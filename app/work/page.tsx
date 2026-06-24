"use client";

import { Reveal } from "@/components/motion";
import { WorkIndex } from "@/components/work-index";
import { PROJECTS } from "@/content/projects";
import { useI18n } from "@/lib/i18n";

export default function WorkPage() {
  const { t } = useI18n();
  return (
    <div className="page">
      <section className="block" style={{ paddingTop: "clamp(120px,16vh,190px)" }}>
        <div className="wrap">
          <Reveal>
            <span className="label">
              <span className="idx">01</span> {t.nav.work}
            </span>
            <h2 className="page-title">{t.sections.selected}</h2>
            <p className="page-sub">
              {t.sections.selectedSub}{" "}
              <span style={{ color: "var(--ink-3)" }}>— {t.sections.hover}.</span>
            </p>
          </Reveal>
          <div style={{ marginTop: 40 }}>
            <WorkIndex projects={PROJECTS} />
          </div>
        </div>
      </section>
    </div>
  );
}
