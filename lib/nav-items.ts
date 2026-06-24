import type { Dict } from "@/content/i18n";

export interface NavItem {
  path: string; // route segment ("" = home)
  key: keyof Dict["nav"];
  num: string;
}

export const NAV_ITEMS: NavItem[] = [
  { path: "", key: "index", num: "00" },
  { path: "work", key: "work", num: "01" },
  { path: "about", key: "about", num: "02" },
  { path: "stack", key: "stack", num: "03" },
  { path: "contact", key: "contact", num: "04" },
];

export const href = (path: string) => `/${path}`;
