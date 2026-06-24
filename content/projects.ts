import type { Project } from "./types";

export const PROJECTS: Project[] = [
  {
    slug: "kled-tms",
    index: "01",
    title: "Kled TMS",
    year: "2026",
    kind: { fr: "PWA — produit métier", en: "PWA — business product", cn: "PWA — 企业产品" },
    role: { fr: "Conception & développement full-stack", en: "Full-stack design & build", cn: "全栈设计与开发" },
    accent: "#1FA971",
    tagline: {
      fr: "Une PWA de gestion de transport (TMS) pour Kled Consulting.",
      en: "A Transport Management System (TMS) PWA for Kled Consulting.",
      cn: "为 Kled Consulting 打造的运输管理系统（TMS）PWA。",
    },
    description: {
      fr: "Application web progressive de Transport Management System développée en alternance chez Kled Consulting. Des maquettes Figma jusqu'à la mise en production : interface dense et typée de bout en bout avec Next.js, Prisma et tRPC, composants shadcn, et déploiement sur Vercel et Neon. Le tout au sein d'une équipe Agile pilotée sur Jira.",
      en: "A progressive web app for transport management, built during my apprenticeship at Kled Consulting. From Figma mockups to production: a dense, end-to-end typed interface with Next.js, Prisma and tRPC, shadcn components, and deployment on Vercel and Neon — within an Agile team run on Jira.",
      cn: "在 Kled Consulting 实习期间开发的运输管理渐进式 Web 应用。从 Figma 原型到生产上线：使用 Next.js、Prisma 和 tRPC 构建端到端类型安全的密集界面，采用 shadcn 组件，部署于 Vercel 和 Neon，在以 Jira 管理的敏捷团队中协作完成。",
    },
    stack: ["Next.js", "TypeScript", "Prisma", "tRPC", "shadcn/ui", "Vercel", "Neon"],
    metrics: [
      { k: "Type", v: "PWA" },
      { k: "Stack", v: "T3-like" },
      { k: "Équipe", v: "Agile" },
    ],
    links: [{ type: "figma", label: "Figma", url: "https://figma.com" }],
  },
  {
    slug: "lambda-recrutement",
    index: "02",
    title: "Plateforme de recrutement",
    year: "2025",
    kind: { fr: "Application web", en: "Web application", cn: "Web 应用" },
    role: { fr: "Développement full-stack", en: "Full-stack development", cn: "全栈开发" },
    accent: "#2E6BFF",
    tagline: {
      fr: "Une plateforme de recrutement conçue chez Lambda Labs.",
      en: "A recruitment platform built at Lambda Labs.",
      cn: "在 Lambda Labs 打造的招聘平台。",
    },
    description: {
      fr: "Conception et développement d'une plateforme de recrutement lors de mon stage chez Lambda Labs. Côté produit : un système de vérification par email avec Nodemailer, un rate limiter pour protéger les endpoints sensibles, et une fonctionnalité de newsletter avec gestion complète des abonnements. Construit en TypeScript, React, Next.js et MongoDB.",
      en: "Designed and built a recruitment platform during my internship at Lambda Labs. On the product side: email verification with Nodemailer, a rate limiter to protect sensitive endpoints, and a newsletter feature with full subscription management. Built with TypeScript, React, Next.js and MongoDB.",
      cn: "在 Lambda Labs 实习期间设计并开发的招聘平台。产品层面包括：基于 Nodemailer 的邮件验证、保护敏感接口的限流器，以及带完整订阅管理的新闻订阅功能。使用 TypeScript、React、Next.js 和 MongoDB 构建。",
    },
    stack: ["TypeScript", "React", "Next.js", "MongoDB", "Nodemailer"],
    metrics: [
      { k: "Auth", v: "Email" },
      { k: "Sécurité", v: "Rate limit" },
      { k: "Stage", v: "2 mois" },
    ],
    links: [],
  },
];

export const getProject = (slug: string) => PROJECTS.find((p) => p.slug === slug);
