export type Lang = "fr" | "en" | "cn";

export type Localized<T = string> = Record<Lang, T>;

export type LinkType = "live" | "github" | "figma" | "linear" | "npm" | "doc";

export interface ProjectLink {
  type: LinkType;
  label: string;
  url: string;
}

export interface Metric {
  k: string;
  v: string;
}

export interface Project {
  slug: string;
  index: string;
  title: string;
  year: string;
  kind: Localized;
  role: Localized;
  accent: string;
  tagline: Localized;
  description: Localized;
  stack: string[];
  metrics: Metric[];
  links: ProjectLink[];
}

export interface Experience {
  period: string;
  /** "pro" = professional experience, "edu" = education/formation */
  type: "pro" | "edu";
  org: string;
  place?: Localized;
  role: Localized;
  note: Localized;
}

export interface StackItem {
  name: string;
  logo: string;
  primary?: boolean;
}

export interface StackGroup {
  id: string;
  label: Localized;
  note: Localized;
  items: StackItem[];
}

export interface Tool {
  name: string;
  use: Localized;
}

export interface Social {
  label: string;
  handle: string;
  url: string;
}
