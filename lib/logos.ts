/* ============================================================
   Real brand logos via the `simple-icons` package (the same set
   react-icons/si wraps). Each entry carries the official SVG path
   (rasterised into a dot mask) plus an optional brand colour.
   Monochrome brands (next, shadcn, expo, vercel, github…) keep
   `hex` undefined so they stay ink even when lit — matching the
   design. A few logos are multi-colour (`colors`) or have no
   official icon and fall back to a dotted monogram (`letter`).
   ============================================================ */
import {
  siBetterauth,
  siDocker,
  siExpo,
  siFigma,
  siGit,
  siGithub,
  siGo,
  siJavascript,
  siJira,
  siLaravel,
  siLinear,
  siMongodb,
  siNextdotjs,
  siNodedotjs,
  siNotion,
  siPhp,
  siPostgresql,
  siPrisma,
  siPython,
  siReact,
  siReactquery,
  siRust,
  siShadcnui,
  siSupabase,
  siSymfony,
  siTailwindcss,
  siTrpc,
  siTypescript,
  siVercel,
  siZod,
} from "simple-icons";
import { DOT_RES } from "./dot-engine";

export interface LogoDef {
  /** mask cache key */
  slug: string;
  /** official Simple Icons SVG path (omit for letter monograms) */
  path?: string;
  /** dotted monogram fallback when no brand icon exists */
  letter?: string;
  /** brand colour without `#`; undefined → stays ink even when lit */
  hex?: string;
  /** per-dot colour when lit, for multi-colour brands (x,y in 0..DOT_RES-1) */
  colors?: (x: number, y: number) => string;
}

const colored = (key: string, icon: { path: string }, hex: string): LogoDef => ({
  slug: key,
  path: icon.path,
  hex,
});
const mono = (key: string, icon: { path: string }): LogoDef => ({ slug: key, path: icon.path });
const multi = (
  key: string,
  icon: { path: string },
  colors: (x: number, y: number) => string,
  hex: string
): LogoDef => ({ slug: key, path: icon.path, colors, hex });
const letter = (key: string, char: string, hex: string): LogoDef => ({ slug: key, letter: char, hex });

/* Python: blue snake (top-left) interlocking with the yellow one (bottom-right). */
const pythonColors = (x: number, y: number) => (x + y < DOT_RES ? "#3776AB" : "#FFD43B");

/* Figma: 3 shapes on the left column, 2 on the right. */
const figmaColors = (x: number, y: number) => {
  const top = DOT_RES * 0.36;
  const mid = DOT_RES * 0.64;
  if (x < DOT_RES / 2) {
    if (y < top) return "#F24E1E"; // orange
    if (y < mid) return "#A259FF"; // purple
    return "#0ACF83"; // green
  }
  return y < mid ? "#FF7262" : "#1ABCFE"; // salmon / blue
};

export const LOGOS: Record<string, LogoDef> = {
  // Main stack
  next: mono("next", siNextdotjs),
  react: colored("react", siReact, "61DAFB"),
  typescript: colored("typescript", siTypescript, "3178C6"),
  javascript: colored("javascript", siJavascript, "F7DF1E"),
  tailwind: colored("tailwind", siTailwindcss, "06B6D4"),
  shadcn: mono("shadcn", siShadcnui),
  node: colored("node", siNodedotjs, "5FA04E"),
  // Backend & data
  postgres: colored("postgres", siPostgresql, "336791"),
  prisma: colored("prisma", siPrisma, "5A67D8"),
  supabase: colored("supabase", siSupabase, "3FCF8E"),
  trpc: colored("trpc", siTrpc, "398CCB"),
  mongodb: colored("mongodb", siMongodb, "47A248"),
  // Main libraries
  reactquery: colored("reactquery", siReactquery, "FF4154"),
  zod: colored("zod", siZod, "408AFF"),
  betterauth: mono("betterauth", siBetterauth),
  zustand: letter("zustand", "Zu", "B6713B"),
  // Languages
  go: colored("go", siGo, "00ADD8"),
  rust: colored("rust", siRust, "CE412B"),
  python: multi("python", siPython, pythonColors, "3776AB"),
  symfony: mono("symfony", siSymfony),
  php: colored("php", siPhp, "777BB4"),
  expo: mono("expo", siExpo),
  laravel: colored("laravel", siLaravel, "FF2D20"),
  // Tools
  github: mono("github", siGithub),
  git: colored("git", siGit, "F05032"),
  docker: colored("docker", siDocker, "2496ED"),
  figma: multi("figma", siFigma, figmaColors, "F24E1E"),
  linear: colored("linear", siLinear, "5E6AD2"),
  jira: colored("jira", siJira, "0052CC"),
  notion: mono("notion", siNotion),
  vercel: mono("vercel", siVercel),
};

export const getLogo = (key: string): LogoDef | undefined => LOGOS[key];
