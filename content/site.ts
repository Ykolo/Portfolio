import type { Localized, Social } from "./types";

export const SITE: {
  name: string;
  handle: string;
  location: Localized;
  available: Localized;
  email: string;
  socials: Social[];
  role: Localized;
} = {
  name: "Loïc Lau",
  handle: "@loiclau",
  location: { fr: "Paris, France", en: "Paris, France", cn: "法国，巴黎" },
  available: {
    fr: "Disponible — septembre 2026",
    en: "Available — September 2026",
    cn: "可接洽 — 2026 年 9 月",
  },
  email: "loiclaupro@gmail.com",
  socials: [
    { label: "GitHub", handle: "Ykolo", url: "https://github.com/Ykolo" },
    {
      label: "LinkedIn",
      handle: "in/loic-lau",
      url: "https://www.linkedin.com/in/loic-lau-9b036b283/",
    },
  ],
  role: {
    fr: "Développeur full-stack web",
    en: "Full-stack web developer",
    cn: "全栈 Web 开发者",
  },
};
