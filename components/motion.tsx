"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;
const EASE = [0.22, 1, 0.36, 1] as const;

/* ---- Reveal on scroll (whileInView) ---- */
export function Reveal({
  children,
  delay = 0,
  className = "",
  style,
}: {
  children: ReactNode;
  /** delay in milliseconds (matches the design's API) */
  delay?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const reduce = useReducedMotion();
  if (reduce) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.8, ease: EASE_OUT, delay: delay / 1000 }}
    >
      {children}
    </motion.div>
  );
}

/* ---- Magnetic — pointer-follow translate on hover ---- */
export function Magnetic({
  children,
  strength = 0.32,
  as = "div",
  className = "",
}: {
  children: ReactNode;
  strength?: number;
  as?: "div" | "span";
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 20, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 250, damping: 20, mass: 0.4 });

  const onMove = (e: React.PointerEvent) => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const Comp = as === "span" ? motion.span : motion.div;
  return (
    <Comp
      ref={ref as never}
      className={className}
      style={{ x: sx, y: sy, display: as === "span" ? "inline-flex" : undefined }}
      onPointerMove={onMove}
      onPointerLeave={reset}
    >
      {children}
    </Comp>
  );
}

/* ---- Scramble — decode effect on mount / when text changes ---- */
const SCRAMBLE_CHARS = "01<>/\\{}[]=+*#$%&░▒▓ABCDEFGHJKLMNPQRSTUVWXYZ";
export function Scramble({
  text,
  className = "",
  speed = 28,
}: {
  text: string;
  className?: string;
  speed?: number;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const reduce = useReducedMotion();
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduce) {
      el.textContent = text;
      return;
    }
    let frame = 0;
    const len = text.length;
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      let out = "";
      const settled = Math.floor(frame / 2);
      for (let i = 0; i < len; i++) {
        if (text[i] === " ") {
          out += " ";
          continue;
        }
        out += i < settled ? text[i] : SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
      }
      el.textContent = out;
      frame++;
      if (settled <= len) timer = setTimeout(() => requestAnimationFrame(tick), speed);
      else el.textContent = text;
    };
    tick();
    return () => clearTimeout(timer);
  }, [text, speed, reduce]);
  return (
    <span ref={ref} className={className}>
      {text}
    </span>
  );
}

/* ---- Line-by-line mask reveal for big headings ---- */
export function MaskLines({ lines, baseDelay = 0 }: { lines: string[]; baseDelay?: number }) {
  const reduce = useReducedMotion();
  return (
    <>
      {lines.map((ln, i) => (
        <span className="ln" key={i}>
          <span
            style={{
              display: "block",
              transform: reduce ? "none" : "translateY(105%)",
              animation: reduce ? "none" : `lnUp 0.9s var(--ease) forwards`,
              animationDelay: `${baseDelay + i * 0.09}s`,
            }}
          >
            {ln}
          </span>
        </span>
      ))}
    </>
  );
}

/* Single animated line (e.g. accent last line of the hero) */
export function MaskLine({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <span className="ln">
      <span
        className={className}
        style={{
          display: "block",
          transform: reduce ? "none" : "translateY(105%)",
          animation: reduce ? "none" : `lnUp 0.9s var(--ease) forwards`,
          animationDelay: `${delay}s`,
        }}
      >
        {children}
      </span>
    </span>
  );
}

/** Re-export for any consumer needing the easing tuple. */
export { EASE, EASE_OUT };
