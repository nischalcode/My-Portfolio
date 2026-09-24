import { Reveal } from "@/components/Reveal/Reveal";
import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import { education } from "@/data/education";

export function EducationSection() {
  return (
    <Reveal className="section-shell">
      <section aria-labelledby="education-title">
        <SectionHeading number="06" title="Education" />
        <div className="grid gap-6 rounded-lg border border-border bg-card p-6 sm:p-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div className="min-w-0">
            <p className="font-mono text-xs font-semibold text-primary">{education.duration}</p>
            <h3
              id="education-title"
              className="mt-4 font-display text-2xl font-semibold sm:text-3xl"
            >
              {education.degree}
            </h3>
            <p className="mt-3 text-muted-foreground">
              {education.institution} · {education.university}
            </p>
          </div>
          <span className="w-fit rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground">
            {education.status}
          </span>
        </div>
      </section>
    </Reveal>
  );
}
