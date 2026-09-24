import { motion } from "framer-motion";

import { Reveal } from "@/components/Reveal/Reveal";
import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import { experienceMilestones } from "@/data/experience";
import { processSteps } from "@/data/process";

export function ExperienceSection() {
  return (
    <>
      <Reveal className="section-shell">
        <section id="journey" className="scroll-mt-24">
          <SectionHeading
            number="04"
            title="Development Journey"
            intro="A learning path, not a claim of professional employment."
          />
          <ol className="grid border-t border-border sm:grid-cols-2 lg:grid-cols-4">
            {experienceMilestones.map((item, index) => (
              <motion.li
                key={item}
                whileHover={{ backgroundColor: "var(--accent)" }}
                className="group border-b border-border p-5 sm:border-r"
              >
                <span className="font-mono text-xs text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-8 font-display text-lg font-semibold">{item}</p>
              </motion.li>
            ))}
          </ol>
        </section>
      </Reveal>

      <Reveal className="section-shell">
        <section aria-labelledby="process-title">
          <SectionHeading
            number="05"
            title="How I Build"
            intro="A straightforward process for turning a problem into a maintainable application."
          />
          <h2 id="process-title" className="sr-only">
            How I Build
          </h2>
          <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step, index) => (
              <motion.article
                key={step.title}
                whileHover={{ y: -3 }}
                className="min-h-44 bg-card p-5"
              >
                <span className="font-mono text-xs text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-9 font-display text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.detail}</p>
              </motion.article>
            ))}
          </div>
        </section>
      </Reveal>
    </>
  );
}
