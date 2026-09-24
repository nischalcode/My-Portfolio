import { ProjectCard } from "@/components/ProjectCard/ProjectCard";
import { Reveal } from "@/components/Reveal/Reveal";
import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <Reveal className="section-shell">
      <section id="projects" className="scroll-mt-24">
        <SectionHeading
          number="03"
          title="Featured Projects"
          intro="Selected projects from my full-stack learning journey."
        />
        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project) => (
            <div key={project.number} className={project.featured ? "lg:col-span-2" : ""}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
