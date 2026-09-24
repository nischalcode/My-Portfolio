import { ArrowRight } from "lucide-react";

import { ContactForm } from "@/components/ContactForm/ContactForm";
import { Reveal } from "@/components/Reveal/Reveal";
import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import { personalInfo } from "@/data/personal";

export function ContactSection() {
  return (
    <Reveal className="section-shell pb-24 sm:pb-32">
      <section id="contact" className="scroll-mt-24">
        <SectionHeading
          number="07"
          title="Let’s Connect"
          intro="I’m open to internship opportunities, project conversations, and thoughtful feedback."
        />
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <a
              href={`mailto:${personalInfo.email}`}
              className="break-all font-display text-xl font-semibold text-foreground hover:text-primary sm:text-2xl"
            >
              {personalInfo.email}
            </a>
            <p className="mt-4 font-mono text-sm text-muted-foreground">{personalInfo.phone}</p>
            <div className="mt-8 grid gap-3">
              <a
                className="contact-link"
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
              >
                <span>GitHub</span>
                <ArrowRight />
              </a>
              <a
                className="contact-link"
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <span>LinkedIn</span>
                <ArrowRight />
              </a>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </Reveal>
  );
}
