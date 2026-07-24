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
    metrics: [{ k: "Contexte", v: "Alternance" }],
    links: [{ type: "figma", label: "Figma", url: "https://figma.com" }],
  },
  {
    slug: "one-shot-booth",
    index: "02",
    title: "OneShot Booth",
    year: "2026",
    kind: { fr: "Site vitrine", en: "Marketing site", cn: "营销网站" },
    role: {
      fr: "Conception & développement front-end",
      en: "Front-end design & build",
      cn: "前端设计与开发",
    },
    accent: "#E8437E",
    tagline: {
      fr: "Le site vitrine d'un service de location de photobooth pour événements.",
      en: "The marketing site for an event photobooth rental service.",
      cn: "活动拍照亭租赁服务的营销网站。",
    },
    description: {
      fr: "Site vitrine pour OneShot Booth, un service de location de photobooth (borne 360°, miroir magique, cabine classique) pour mariages, anniversaires et événements d'entreprise. Présentation des formules, réservation en ligne et galeries d'événements, dans une interface moderne et ludique. Construit avec Next.js et TypeScript, déployé sur Vercel.",
      en: "A marketing site for OneShot Booth, an event photobooth rental service (360° booth, magic mirror, classic cabin) for weddings, birthdays and corporate events. Showcases packages, online booking and event galleries in a modern, playful interface. Built with Next.js and TypeScript, deployed on Vercel.",
      cn: "为 OneShot Booth 打造的营销网站——一家为婚礼、生日和企业活动提供拍照亭租赁的服务商（360° 拍照亭、魔镜、经典亭）。以现代、活泼的界面展示套餐、在线预订和活动相册。使用 Next.js 和 TypeScript 构建，部署于 Vercel。",
    },
    stack: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Vercel"],
    metrics: [{ k: "Contexte", v: "Alternance" }],
    links: [
      { type: "live", label: "Live", url: "https://one-shot-booth.vercel.app" },
    ],
  },
  {
    slug: "hephaistos-paris",
    index: "03",
    title: "Héphaïstos Paris",
    year: "2026",
    kind: {
      fr: "Site de marque — pré-lancement",
      en: "Brand site — pre-launch",
      cn: "品牌网站 — 预售",
    },
    role: {
      fr: "Conception & développement front-end",
      en: "Front-end design & build",
      cn: "前端设计与开发",
    },
    accent: "#C77B3B",
    tagline: {
      fr: "Le site d'une marque de soins pour hommes, made in France.",
      en: "The site for a French men's skincare brand.",
      cn: "法国男士护肤品牌的网站。",
    },
    description: {
      fr: "Landing de pré-lancement pour Héphaïstos, une marque de soins masculins made in France qui pense le soin comme une discipline quotidienne. Présentation de la gamme « Les Fondations » (nettoyant, sérum, crème), narration de marque autour de la mythologie grecque et inscription en accès anticipé. Esthétique sombre et minimaliste, construite avec Next.js, TypeScript et Tailwind CSS.",
      en: "Pre-launch landing page for Héphaïstos, a made-in-France men's skincare brand that frames grooming as daily discipline. Showcases the \"Les Fondations\" line (cleanser, serum, cream), a brand narrative rooted in Greek mythology, and early-access signup. Dark, minimalist aesthetic, built with Next.js, TypeScript and Tailwind CSS.",
      cn: "Héphaïstos 的预售落地页——一个法国男士护肤品牌，将护理视为日常自律。展示「Les Fondations」系列（洁面、精华、面霜），围绕希腊神话的品牌叙事，以及抢先体验注册。深色极简风格，使用 Next.js、TypeScript 和 Tailwind CSS 构建。",
    },
    stack: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Vercel"],
    metrics: [{ k: "Contexte", v: "Freelance" }],
    links: [
      { type: "live", label: "Live", url: "https://hephaistos-ochre.vercel.app" },
    ],
  },
  {
    slug: "la-maison-du-gout",
    index: "04",
    title: "La Maison du Goût",
    year: "2026",
    kind: {
      fr: "Site vitrine & click-and-collect",
      en: "Marketing site & click-and-collect",
      cn: "营销网站与线上下单自提",
    },
    role: {
      fr: "Conception & développement front-end",
      en: "Front-end design & build",
      cn: "前端设计与开发",
    },
    accent: "#C79A3A",
    tagline: {
      fr: "Le site d'une fromagerie-boucherie artisanale.",
      en: "The site for an artisanal cheese and butcher shop.",
      cn: "手工奶酪与肉铺的网站。",
    },
    description: {
      fr: "Site vitrine pour La Maison du Goût, une fromagerie-boucherie artisanale (produits halal). Au programme : click-and-collect en 30 minutes, composition de plateaux sur mesure (fromages, charcuterie, accompagnements), commande à table par QR code et offre traiteur pour les professionnels. Interface moderne et épurée, construite avec Next.js, TypeScript et Tailwind CSS.",
      en: "A marketing site for La Maison du Goût, an artisanal cheese and butcher shop (halal products). Features 30-minute click-and-collect, custom platter builder (cheeses, charcuterie, sides), QR-code table ordering and a catering offer for professionals. Clean, modern interface, built with Next.js, TypeScript and Tailwind CSS.",
      cn: "为 La Maison du Goût 打造的营销网站——一家手工奶酪肉铺（清真产品）。功能包括 30 分钟线上下单自提、定制拼盘（奶酪、熟食、配菜）、二维码桌边点单，以及面向商户的餐饮供应服务。简洁现代的界面，使用 Next.js、TypeScript 和 Tailwind CSS 构建。",
    },
    stack: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Vercel"],
    metrics: [{ k: "Contexte", v: "Alternance" }],
    links: [
      { type: "live", label: "Live", url: "https://la-maison-du-gout.vercel.app" },
    ],
  },
  {
    slug: "sk-beaute",
    index: "05",
    title: "SK Beauté",
    year: "2026",
    kind: { fr: "Site vitrine", en: "Marketing site", cn: "营销网站" },
    role: {
      fr: "Conception & développement front-end",
      en: "Front-end design & build",
      cn: "前端设计与开发",
    },
    accent: "#D98BA5",
    tagline: {
      fr: "Le site vitrine d'un institut d'épilation et d'onglerie.",
      en: "The site for a hair-removal and nail-care institute.",
      cn: "脱毛与美甲工作室的营销网站。",
    },
    description: {
      fr: "Site vitrine pour SK Beauté, un institut de beauté spécialisé dans l'épilation au fil et à la cire ainsi que les soins des mains et des pieds. Présentation claire des prestations et des forfaits, avec une grille tarifaire transparente. Interface douce et fonctionnelle, construite avec Next.js, TypeScript et Tailwind CSS.",
      en: "A marketing site for SK Beauté, a beauty institute specialising in threading and waxing hair removal alongside manicure and pedicure care. Clear presentation of services and packages with transparent pricing. Soft, functional interface, built with Next.js, TypeScript and Tailwind CSS.",
      cn: "为 SK Beauté 打造的营销网站——一家专注于线雕脱毛、蜜蜡脱毛以及手足护理的美容工作室。清晰展示服务与套餐，价格透明。柔和实用的界面，使用 Next.js、TypeScript 和 Tailwind CSS 构建。",
    },
    stack: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Vercel"],
    metrics: [{ k: "Contexte", v: "Alternance" }],
    links: [
      { type: "live", label: "Live", url: "https://sk-beaute.vercel.app" },
    ],
  },
  {
    slug: "lenahya-beauty",
    index: "06",
    title: "Lenahya Beauty",
    year: "2026",
    kind: {
      fr: "Site vitrine & réservation",
      en: "Marketing site & booking",
      cn: "营销网站与预约",
    },
    role: {
      fr: "Conception & développement front-end",
      en: "Front-end design & build",
      cn: "前端设计与开发",
    },
    accent: "#C04E7C",
    tagline: {
      fr: "Le site d'un institut de beauté indien à Bondy.",
      en: "The site for an Indian beauty salon in Bondy.",
      cn: "邦迪一家印度美容院的网站。",
    },
    description: {
      fr: "Site vitrine pour Lenahya Beauty, un institut de beauté indien à Bondy proposant épilation au fil, soins du visage, manucure, pédicure et tatouage indien. Présentation des prestations, grille tarifaire et réservation via Treatwell, autour de la promesse « l'art du soin, à prix doux ». Construit avec Next.js, TypeScript et Tailwind CSS.",
      en: "A marketing site for Lenahya Beauty, an Indian beauty salon in Bondy offering threading, facials, manicure, pedicure and Indian tattooing. Presents services, a pricing grid and Treatwell booking around the promise \"quality care at gentle prices\". Built with Next.js, TypeScript and Tailwind CSS.",
      cn: "为 Lenahya Beauty 打造的营销网站——位于邦迪的一家印度美容院，提供线雕脱毛、面部护理、美甲、美足和印度纹身。展示服务、价目表并通过 Treatwell 预约，秉持「优质护理，亲民价格」的理念。使用 Next.js、TypeScript 和 Tailwind CSS 构建。",
    },
    stack: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Vercel"],
    metrics: [{ k: "Contexte", v: "Alternance" }],
    links: [
      { type: "live", label: "Live", url: "https://lenahya-beauty.vercel.app" },
    ],
  },
];

export const getProject = (slug: string) => PROJECTS.find((p) => p.slug === slug);
