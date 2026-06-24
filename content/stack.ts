import type { StackGroup, Tool } from "./types";

export const STACK_GROUPS: StackGroup[] = [
  {
    id: "main",
    label: { fr: "Stack principale", en: "Main stack", cn: "主力技术栈" },
    note: {
      fr: "Je suis avant tout développeur web, spécialisé sur Next.js et l'écosystème React. C'est là que je suis le plus à l'aise et le plus rapide.",
      en: "I'm a web developer first, specialised in Next.js and the React ecosystem. That's where I'm most comfortable and fastest.",
      cn: "我首先是一名 Web 开发者，专注于 Next.js 和 React 生态。这是我最得心应手、效率最高的领域。",
    },
    items: [
      { name: "Next.js", logo: "next", primary: true },
      { name: "React", logo: "react" },
      { name: "TypeScript", logo: "typescript" },
      { name: "JavaScript", logo: "javascript" },
      { name: "Tailwind CSS", logo: "tailwind" },
      { name: "shadcn/ui", logo: "shadcn" },
      { name: "Node.js", logo: "node" },
    ],
  },
  {
    id: "backend",
    label: { fr: "Backend & données", en: "Backend & data", cn: "后端与数据" },
    note: {
      fr: "Pour donner du fond aux interfaces : bases de données, ORM et API typées de bout en bout (tRPC, REST).",
      en: "To give interfaces substance: databases, ORM and end-to-end typed APIs (tRPC, REST).",
      cn: "为界面注入实质：数据库、ORM 与端到端类型安全的 API（tRPC、REST）。",
    },
    items: [
      { name: "PostgreSQL", logo: "postgres" },
      { name: "Prisma", logo: "prisma" },
      { name: "tRPC", logo: "trpc" },
      { name: "MongoDB", logo: "mongodb" },
    ],
  },
  {
    id: "libs",
    label: { fr: "Librairies principales", en: "Main libraries", cn: "核心库" },
    note: {
      fr: "Les briques que je retrouve sur la plupart de mes projets : data-fetching, state, validation et auth.",
      en: "The building blocks I reach for on most projects: data-fetching, state, validation and auth.",
      cn: "我在大多数项目中都会用到的基础库：数据获取、状态管理、校验与鉴权。",
    },
    items: [
      { name: "TanStack Query", logo: "reactquery" },
      { name: "Zustand", logo: "zustand" },
      { name: "Zod", logo: "zod" },
      { name: "Better Auth", logo: "betterauth" },
    ],
  },
  {
    id: "languages",
    label: { fr: "Autres langages", en: "Other languages", cn: "其他语言" },
    note: {
      fr: "Ce que j'ai appris en route et que je ressors quand le projet le demande.",
      en: "What I've picked up along the way and reach for when a project calls for it.",
      cn: "一路走来掌握的技能，在项目需要时随时取用。",
    },
    items: [
      { name: "Go", logo: "go" },
      { name: "Rust", logo: "rust" },
      { name: "Python", logo: "python" },
      { name: "Symfony", logo: "symfony" },
      { name: "PHP", logo: "php" },
    ],
  },
  {
    id: "tools",
    label: { fr: "Outils", en: "Tools", cn: "工具" },
    note: {
      fr: "Mon environnement de travail au quotidien : code, design, suivi et déploiement.",
      en: "My day-to-day working environment: code, design, tracking and deployment.",
      cn: "我的日常工作环境：编码、设计、任务跟踪与部署。",
    },
    items: [
      { name: "GitHub", logo: "github" },
      { name: "Docker", logo: "docker" },
      { name: "Figma", logo: "figma" },
      { name: "Linear", logo: "linear" },
      { name: "Jira", logo: "jira" },
      { name: "Notion", logo: "notion" },
      { name: "Vercel", logo: "vercel" },
    ],
  },
];

export const TOOLS: Tool[] = [
  { name: "VS Code", use: { fr: "Éditeur", en: "Editor", cn: "编辑器" } },
  { name: "GitHub", use: { fr: "Versioning & code", en: "Versioning & code", cn: "版本控制与代码" } },
  { name: "Docker", use: { fr: "Conteneurs", en: "Containers", cn: "容器" } },
  { name: "Figma", use: { fr: "Design & maquettes", en: "Design & mockups", cn: "设计与原型" } },
  { name: "Canva", use: { fr: "Visuels", en: "Visuals", cn: "视觉素材" } },
  { name: "Notion", use: { fr: "Notes & docs", en: "Notes & docs", cn: "笔记与文档" } },
  { name: "Jira", use: { fr: "Suivi Agile", en: "Agile tracking", cn: "敏捷跟踪" } },
  { name: "Vercel", use: { fr: "Déploiement", en: "Deployment", cn: "部署" } },
  { name: "Neon", use: { fr: "Base Postgres", en: "Postgres database", cn: "Postgres 数据库" } },
  { name: "AWS", use: { fr: "Cloud", en: "Cloud", cn: "云服务" } },
];
