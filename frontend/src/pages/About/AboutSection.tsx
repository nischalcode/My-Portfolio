import { Reveal } from "@/components/Reveal/Reveal";
import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import { personalInfo } from "@/data/personal";

export function AboutSection() {
  return (
    <>
      <section className="border-y border-border bg-muted/40">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 md:grid-cols-[9rem_minmax(0,1fr)] md:items-center lg:px-8">
          <p className="font-mono text-xs font-semibold text-primary">
            {personalInfo.currentFocusYear}
          </p>
          <p className="max-w-3xl text-lg leading-8 text-foreground">
            {personalInfo.currentFocusText}
          </p>
        </div>
      </section>

      <Reveal className="section-shell">
        <section id="about" className="scroll-mt-24">
          <SectionHeading
            number="01"
            title="About"
            intro="Learning by building, testing, and improving practical software."
          />
          <div className="grid gap-8 md:grid-cols-[9rem_minmax(0,1fr)]">
            <div className="hidden md:block" />
            <div className="grid max-w-4xl gap-6 text-lg leading-8 text-muted-foreground md:grid-cols-2">
              <p>{personalInfo.aboutParagraph1}</p>
              <p>{personalInfo.aboutParagraph2}</p>
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
}
