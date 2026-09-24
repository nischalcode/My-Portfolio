import { motion } from "framer-motion";
import { Code2, ExternalLink, Github, Radio, WalletCards } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  const VisualIcon =
    project.number === "01" ? Radio : project.number === "02" ? WalletCards : Code2;
  const hasLinks = Boolean(project.githubUrl || project.liveUrl);

  return (
    <motion.article
      whileHover={{ y: -5 }}
      className={`group grid overflow-hidden rounded-lg border border-border bg-card ${
        project.featured ? "lg:grid-cols-[1.15fr_1fr]" : "grid-rows-[13rem_1fr]"
      }`}
    >
      <div className="relative flex min-h-52 flex-col justify-between overflow-hidden bg-project p-6 sm:p-8">
        <div className="project-grid absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="relative flex items-center justify-between">
          <span className="font-mono text-xs font-semibold uppercase text-project-foreground/70">
            {project.visualLabel}
          </span>
          <VisualIcon className="h-5 w-5 text-primary" aria-hidden="true" />
        </div>
        <div className="relative font-mono text-5xl font-semibold text-project-foreground/15 sm:text-7xl">
          {project.number}
        </div>
      </div>
      <div className="flex min-w-0 flex-col p-6 sm:p-8">
        <p className="font-mono text-xs font-semibold text-primary">PROJECT {project.number}</p>
        <h3 className="mt-3 font-display text-2xl font-semibold leading-tight text-card-foreground sm:text-3xl">
          {project.title}
        </h3>
        <p className="mt-4 leading-7 text-muted-foreground">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-border bg-background px-3 py-1 font-mono text-xs text-muted-foreground"
            >
              {technology}
            </span>
          ))}
        </div>
        {hasLinks ? (
          <div className="mt-auto flex flex-wrap gap-3 pt-7">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground transition-colors hover:bg-accent"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
            ) : null}
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <ExternalLink className="h-4 w-4" /> Live Demo
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </motion.article>
  );
}
