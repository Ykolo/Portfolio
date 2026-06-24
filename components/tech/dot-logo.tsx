"use client";

import { useEffect, useRef, useState } from "react";
import {
  buildDotMask,
  buildLetterMask,
  DOT_RES,
  DOT_SCALE,
  ensureDotEngine,
  paintLogoStatic,
  setLogoColorFn,
} from "@/lib/dot-engine";
import { getLogo } from "@/lib/logos";

/* Renders a tagged <canvas>; the global dot-engine paints & animates it
   from the DOM, so it survives React remounts (the showcase cycles a lot). */
export function DotLogo({ name }: { name: string }) {
  const def = getLogo(name);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!def) return;
    ensureDotEngine();
    if (def.colors) setLogoColorFn(def.slug, def.colors);
    let on = true;
    const build = def.letter
      ? buildLetterMask(def.slug, def.letter)
      : buildDotMask(def.slug, def.path ?? "");
    build.then(() => {
      if (!on) return;
      setReady(true);
      if (canvasRef.current) paintLogoStatic(canvasRef.current);
    });
    return () => {
      on = false;
    };
  }, [def]);

  if (!def) return null;
  return (
    <span className="pixlogo">
      <canvas
        ref={canvasRef}
        className="pl-canvas"
        width={DOT_RES * DOT_SCALE}
        height={DOT_RES * DOT_SCALE}
        data-slug={def.slug}
        data-hex={def.hex || ""}
        style={{ opacity: ready ? 1 : 0, transition: "opacity 0.3s var(--ease)" }}
      />
    </span>
  );
}
