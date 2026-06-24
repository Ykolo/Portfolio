"use client";

import { useEffect, useState } from "react";
import type { StackItem } from "@/content/types";
import { getLogo } from "@/lib/logos";
import { useI18n } from "@/lib/i18n";
import { DotLogo } from "./dot-logo";

function TechTile({
  item,
  active,
  onEnter,
  onLeave,
}: {
  item: StackItem;
  active?: boolean;
  onEnter?: () => void;
  onLeave?: () => void;
}) {
  return (
    <div
      className={`tech-tile ${item.primary ? "primary" : ""} ${active ? "active" : ""}`}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      data-hot
    >
      <DotLogo name={item.logo} />
      <span className="tech-name">{item.name}</span>
    </div>
  );
}

export function TechGrid({ items }: { items: StackItem[] }) {
  return (
    <div className="tech-grid">
      {items.map((it, i) => (
        <TechTile key={it.name + i} item={it} />
      ))}
    </div>
  );
}

/* "Votre [techno], à votre façon." — auto-cycling showcase. */
export function TechShowcase({ items }: { items: StackItem[] }) {
  const { t } = useI18n();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((a) => (a + 1) % items.length), 2200);
    return () => clearInterval(id);
  }, [items.length, paused]);

  const cur = items[active] || items[0];
  const hex = getLogo(cur.logo)?.hex;
  const nameColor = hex ? `#${hex}` : "var(--brand)";

  return (
    <div className="tech-show">
      <div className="ts-headline">
        <span className="ts-line">
          {t.sections.wayPre}{" "}
          <span className="ts-name" key={active} style={{ color: nameColor }}>
            {cur.name}
          </span>
        </span>
        <span className="ts-line">{t.sections.wayPost}</span>
      </div>
      {items.map((it, i) => (
        <TechTile
          key={it.name}
          item={it}
          active={active === i}
          onEnter={() => {
            setActive(i);
            setPaused(true);
          }}
          onLeave={() => setPaused(false)}
        />
      ))}
    </div>
  );
}
