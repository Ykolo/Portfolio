import { notFound } from "next/navigation";
import { ProjectDetail } from "@/components/project-detail";
import { PROJECTS } from "@/content/projects";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const idx = PROJECTS.findIndex((p) => p.slug === slug);
  if (idx === -1) notFound();
  const project = PROJECTS[idx];
  const next = PROJECTS[(idx + 1) % PROJECTS.length];
  return <ProjectDetail project={project} next={next} />;
}
