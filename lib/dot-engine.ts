/* ============================================================
   Dot-matrix engine — one global requestAnimationFrame loop that
   paints every <canvas.pl-canvas> in the DOM. Decoupled from React
   so it survives remounts (the showcase cycles & re-renders a lot).

   At rest: ink dots. When the host .tech-tile is lit (.active /
   .primary / :hover): brand-colour dots with a diagonal luminance
   wave. Mirrors the reference logos.jsx exactly.
   ============================================================ */

export const DOT_RES = 20;
export const DOT_SCALE = 10;
const DOT_GAP = 0.18;
const DOT_SPEED = 2.2;
const DOT_WAVE = 0.45;

type Mask = [number, number, number][]; // [x, y, rand]

const maskCache: Record<string, Mask> = {};
const maskPromises: Record<string, Promise<Mask | null>> = {};

/** Per-dot colour resolvers for multi-colour brands (set from logos.ts). */
const colorFns: Record<string, (x: number, y: number) => string> = {};
export function setLogoColorFn(slug: string, fn: (x: number, y: number) => string) {
  colorFns[slug] = fn;
}

/** Rasterise an arbitrary SVG fragment at low res, keep lit cells as a dot mask. */
function rasterise(slug: string, inner: string): Promise<Mask | null> {
  if (maskCache[slug]) return Promise.resolve(maskCache[slug]);
  if (maskPromises[slug] !== undefined) return maskPromises[slug];

  maskPromises[slug] = new Promise<Mask | null>((resolve) => {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${DOT_RES}" height="${DOT_RES}" fill="#fff">${inner}</svg>`;
    const img = new Image();
    img.onload = () => {
      const tmp = document.createElement("canvas");
      tmp.width = tmp.height = DOT_RES;
      const tc = tmp.getContext("2d");
      if (!tc) return resolve(null);
      tc.drawImage(img, 0, 0, DOT_RES, DOT_RES);
      const data = tc.getImageData(0, 0, DOT_RES, DOT_RES).data;
      const mask: Mask = [];
      for (let y = 0; y < DOT_RES; y++) {
        for (let x = 0; x < DOT_RES; x++) {
          if (data[(y * DOT_RES + x) * 4 + 3] > 110) mask.push([x, y, Math.random()]);
        }
      }
      maskCache[slug] = mask;
      resolve(mask);
    };
    img.onerror = () => resolve(null);
    img.src = "data:image/svg+xml;utf8," + encodeURIComponent(svg);
  });
  return maskPromises[slug];
}

/** Rasterise an SVG path at low res and keep the lit cells as a dot mask. */
export function buildDotMask(slug: string, path: string): Promise<Mask | null> {
  return rasterise(slug, `<path d="${path}"/>`);
}

/** Dotted monogram fallback for libs without an official brand icon. */
export function buildLetterMask(slug: string, char: string): Promise<Mask | null> {
  const fs = char.length > 1 ? 13 : 19;
  const inner = `<text x="12" y="18" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="${fs}" fill="#fff">${char}</text>`;
  return rasterise(slug, inner);
}

function shade(hex: string, f: number): string {
  hex = hex.replace("#", "");
  if (hex.length === 3) hex = hex.split("").map((c) => c + c).join("");
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  const adj = (v: number) => (f >= 0 ? Math.round(v + (255 - v) * f) : Math.round(v * (1 + f)));
  return `rgb(${adj(r)},${adj(g)},${adj(b)})`;
}

function roundRect(c: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  c.beginPath();
  c.moveTo(x + r, y);
  c.arcTo(x + w, y, x + w, y + h, r);
  c.arcTo(x + w, y + h, x, y + h, r);
  c.arcTo(x, y + h, x, y, r);
  c.arcTo(x, y, x + w, y, r);
  c.closePath();
}

interface DotCanvas extends HTMLCanvasElement {
  _restInk?: string | null;
}

const size = DOT_RES * DOT_SCALE;
const dd = DOT_SCALE * (1 - DOT_GAP);
const radius = dd * 0.5;

const inkOf = () =>
  getComputedStyle(document.documentElement).getPropertyValue("--ink").trim() || "#14130F";

function drawLogo(cvs: DotCanvas, lit: boolean, t: number, inkc: string) {
  const mask = maskCache[cvs.dataset.slug || ""];
  if (!mask) return;
  const ctx = cvs.getContext("2d");
  if (!ctx) return;
  ctx.clearRect(0, 0, size, size);
  const slug = cvs.dataset.slug || "";
  const hex = cvs.dataset.hex;
  const brand = hex ? `#${hex}` : inkc;
  const colorFn = colorFns[slug];
  for (const p of mask) {
    const x = p[0],
      y = p[1],
      j = p[2];
    if (lit) {
      const phase = (x + y) * 0.45 + j * 6.28;
      const base = colorFn ? colorFn(x, y) : brand;
      ctx.fillStyle = shade(base, Math.sin(t * DOT_SPEED - phase) * DOT_WAVE);
    } else {
      ctx.fillStyle = inkc;
    }
    roundRect(
      ctx,
      x * DOT_SCALE + (DOT_SCALE - dd) / 2,
      y * DOT_SCALE + (DOT_SCALE - dd) / 2,
      dd,
      dd,
      radius
    );
    ctx.fill();
  }
  cvs._restInk = lit ? null : inkc;
}

/** Synchronous static paint — works even when RAF is paused (hidden tab). */
export function paintLogoStatic(cvs: DotCanvas) {
  const tile = cvs.closest?.(".tech-tile");
  const lit = !!tile && tile.classList.contains("primary");
  try {
    drawLogo(cvs, lit, 0, inkOf());
  } catch {
    /* ignore */
  }
}

function paintAllStatic() {
  document.querySelectorAll<DotCanvas>("canvas.pl-canvas").forEach((c) => {
    c._restInk = undefined;
    paintLogoStatic(c);
  });
}

let started = false;

/** Start the global engine once (idempotent). */
export function ensureDotEngine() {
  if (started || typeof window === "undefined") return;
  started = true;

  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) paintAllStatic();
  });

  const frame = (now: number) => {
    const t = now / 1000;
    const inkc = inkOf();
    document.querySelectorAll<DotCanvas>("canvas.pl-canvas").forEach((cvs) => {
      try {
        if (!maskCache[cvs.dataset.slug || ""]) return;
        const tile = cvs.closest(".tech-tile");
        const lit =
          !!tile &&
          (tile.classList.contains("active") ||
            tile.classList.contains("primary") ||
            tile.matches(":hover"));
        if (!lit && cvs._restInk === inkc) return; // nothing to repaint
        drawLogo(cvs, lit, t, inkc);
      } catch {
        /* ignore */
      }
    });
    requestAnimationFrame(frame);
  };
  requestAnimationFrame(frame);
}
