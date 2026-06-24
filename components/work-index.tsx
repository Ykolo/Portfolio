"use client";

import Link from "next/link";
import { useState, type CSSProperties } from "react";
import type { Project } from "@/content/types";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "./motion";
import { Icons } from "./icons";

/* Awwwards-style hover-focus list: hovering a row brings it forward and
   dims the others; the arrow rotates. No floating preview card. */
export function WorkIndex({ projects }: { projects: Project[] }) {
  const { L } = useI18n();
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="work-index" onMouseLeave={() => setActive(null)}>
      {projects.map((p, i) => (
        <Reveal key={p.slug}>
          <Link
            className={`wx-row ${active !== null && active !== i ? "dim" : ""}`}
            href={`/work/${p.slug}`}
            onMouseEnter={() => setActive(i)}
            data-hot
            style={{ "--brand": p.accent } as CSSProperties}
          >
            <span className="wx-idx">{p.index}</span>
            <div className="wx-main">
              <h3 className="wx-title">{p.title}</h3>
              <div className="wx-meta">
                <span className="wx-kind" style={{ color: p.accent }}>
                  ● {L(p.kind)}
                </span>
                <span className="wx-stackline">{p.stack.slice(0, 4).join(" · ")}</span>
              </div>
            </div>
            <span className="wx-year">{p.year}</span>
            <span className="wx-go">{Icons.arrowUpRight}</span>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
