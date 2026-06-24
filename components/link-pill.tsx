import type { ProjectLink } from "@/content/types";
import { Icons, linkIcon } from "./icons";

export function LinkPill({ link }: { link: ProjectLink }) {
  return (
    <a className="linkpill" href={link.url} target="_blank" rel="noreferrer" data-hot>
      {linkIcon(link.type)}
      <span>{link.label}</span>
      {Icons.arrowUpRight}
    </a>
  );
}
