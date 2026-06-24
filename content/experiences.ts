import type { Experience } from "./types";

/* type: "pro" (expérience professionnelle) | "edu" (formation) */
export const EXPERIENCES: Experience[] = [
  {
    period: "Nov. 2025 — Sept. 2026",
    type: "pro",
    org: "Kled Consulting",
    place: { fr: "Paris", en: "Paris", cn: "巴黎" },
    role: {
      fr: "Développeur full-stack & DevOps — alternance",
      en: "Full-stack & DevOps developer — apprenticeship",
      cn: "全栈与 DevOps 开发 — 学徒制",
    },
    note: {
      fr: "Conception de maquettes Figma et développement d'une PWA TMS (Transport Management System) en Next.js, Prisma, tRPC et shadcn. Déploiement sur Vercel et Neon, au sein d'une équipe Agile (Jira).",
      en: "Figma mockups and development of a TMS PWA (Transport Management System) with Next.js, Prisma, tRPC and shadcn. Deployed on Vercel and Neon, within an Agile team (Jira).",
      cn: "设计 Figma 原型并使用 Next.js、Prisma、tRPC 和 shadcn 开发 TMS（运输管理系统）PWA。部署于 Vercel 和 Neon，在敏捷团队中协作（Jira）。",
    },
  },
  {
    period: "Déc. 2024 — Janv. 2025",
    type: "pro",
    org: "Lambda Labs",
    place: { fr: "Paris", en: "Paris", cn: "巴黎" },
    role: {
      fr: "Développeur full-stack — stage",
      en: "Full-stack developer — internship",
      cn: "全栈开发 — 实习",
    },
    note: {
      fr: "Conception et développement d'une plateforme de recrutement (TypeScript, React, Next.js, MongoDB) : vérification par email (Nodemailer), rate limiter et fonctionnalité newsletter avec gestion des abonnements.",
      en: "Designed and built a recruitment platform (TypeScript, React, Next.js, MongoDB): email verification (Nodemailer), a rate limiter, and a newsletter feature with subscription management.",
      cn: "设计并开发招聘平台（TypeScript、React、Next.js、MongoDB）：邮件验证（Nodemailer）、限流器，以及带订阅管理的新闻订阅功能。",
    },
  },
  {
    period: "2025 — 2026",
    type: "edu",
    org: "Sorbonne Université",
    place: { fr: "Paris", en: "Paris", cn: "巴黎" },
    role: {
      fr: "Licence pro — Projet web et mobile",
      en: "Bachelor's — Web & mobile projects",
      cn: "职业学士 — Web 与移动端项目",
    },
    note: {
      fr: "Développement full-stack et UI/UX design, à la faculté des Sciences.",
      en: "Full-stack development and UI/UX design, at the Faculty of Sciences.",
      cn: "理学院的全栈开发与 UI/UX 设计课程。",
    },
  },
  {
    period: "2023 — 2025",
    type: "edu",
    org: "Lycée Turgot",
    place: { fr: "Paris", en: "Paris", cn: "巴黎" },
    role: {
      fr: "BTS SIO — option SLAM",
      en: "BTS SIO — SLAM track",
      cn: "BTS SIO — SLAM 方向",
    },
    note: {
      fr: "Développement web (PHP), programmation orientée objet, bases de données et cybersécurité.",
      en: "Web development (PHP), object-oriented programming, databases and cybersecurity.",
      cn: "Web 开发（PHP）、面向对象编程、数据库与网络安全。",
    },
  },
  {
    period: "2022 — 2023",
    type: "edu",
    org: "Lycée Turgot",
    place: { fr: "Paris", en: "Paris", cn: "巴黎" },
    role: {
      fr: "Baccalauréat général — mention AB",
      en: "Baccalauréat — honours",
      cn: "普通高中会考 — 良好",
    },
    note: {
      fr: "Spécialités Mathématiques, NSI et Physique-Chimie.",
      en: "Majors in Mathematics, Computer Science (NSI) and Physics-Chemistry.",
      cn: "主修数学、信息科学（NSI）与理化。",
    },
  },
];
