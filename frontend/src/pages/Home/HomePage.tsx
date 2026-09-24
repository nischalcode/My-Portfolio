import { MotionConfig } from "framer-motion";

import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import { AboutSection } from "@/pages/About/AboutSection";
import { ContactSection } from "@/pages/Contact/ContactSection";
import { EducationSection } from "@/pages/Education/EducationSection";
import { ExperienceSection } from "@/pages/Experience/ExperienceSection";
import { HeroSection } from "@/pages/Home/HeroSection";
import { ProjectsSection } from "@/pages/Projects/ProjectsSection";
import { SkillsSection } from "@/pages/Skills/SkillsSection";

export function HomePage() {
  return (
    <MotionConfig reducedMotion="user">
      <div id="top" className="min-h-screen overflow-x-clip bg-background text-foreground">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <EducationSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
