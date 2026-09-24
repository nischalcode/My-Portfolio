import { motion } from "framer-motion";

import { Reveal } from "@/components/Reveal/Reveal";
import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import { skillGroups } from "@/data/skills";

export function SkillsSection() {
  return (
    <Reveal className="section-shell">
      <section id="skills" className="scroll-mt-24">
        <SectionHeading
          number="02"
          title="Skills"
          intro="Technologies I use across the interface, server, database, and development workflow."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, index) => (
            <motion.article
              key={group.title}
              whileHover={{ y: -4 }}
              className="rounded-lg border border-border bg-card p-5"
            >
              <p className="font-mono text-xs font-semibold text-primary">0{index + 1}</p>
              <h3 className="mt-4 font-display text-xl font-semibold">{group.title}</h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full bg-secondary px-3 py-1.5 text-sm text-secondary-foreground"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
