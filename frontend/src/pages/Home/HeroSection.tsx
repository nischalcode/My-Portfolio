import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/personal";

export function HeroSection() {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)] lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="min-w-0"
      >
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 font-mono text-xs font-medium text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-status" aria-hidden="true" />{" "}
          {personalInfo.statusBadge}
        </div>
        <p className="mb-2 font-mono text-sm font-semibold text-primary">Hi, I’m</p>
        <h1 className="font-display text-5xl font-semibold leading-[1.02] text-foreground sm:text-6xl lg:text-7xl xl:text-8xl">
          {personalInfo.name}.
        </h1>
        <p className="mt-5 font-display text-2xl font-medium text-muted-foreground sm:text-3xl">
          {personalInfo.title}
        </p>
        <p className="mt-2 font-mono text-sm text-primary sm:text-base">{personalInfo.subtitle}</p>
        <p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
          {personalInfo.aboutParagraph1}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button asChild size="lg">
            <a href="#projects">
              View projects <ArrowDown />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href={personalInfo.resume} target="_blank" rel="noreferrer">
              Résumé <Download />
            </a>
          </Button>
        </div>
        <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
          <a className="social-link" href={personalInfo.github} target="_blank" rel="noreferrer">
            <Github /> GitHub
          </a>
          <a className="social-link" href={personalInfo.linkedin} target="_blank" rel="noreferrer">
            <Linkedin /> LinkedIn
          </a>
          <a className="social-link" href={`mailto:${personalInfo.email}`}>
            <Mail /> Email
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.12 }}
        className="relative mx-auto w-full max-w-sm lg:max-w-md"
      >
        <div className="aspect-[4/5] overflow-hidden rounded-lg border border-border bg-project">
          {!imgError ? (
            <img
              src={personalInfo.profileImage}
              alt={personalInfo.name}
              className="h-full w-full object-cover"
              onError={() => setImgError(true)}
            />
          ) : (
            <div
              className="project-grid flex h-full items-end p-8"
              role="img"
              aria-label={`${personalInfo.name} profile image placeholder`}
            >
              <span className="font-display text-8xl font-semibold text-project-foreground/20">
                NJ
              </span>
            </div>
          )}
        </div>
        <div className="absolute -bottom-5 -left-3 rounded-md border border-border bg-background px-4 py-3 shadow-sm sm:-left-6">
          <p className="font-mono text-xs text-muted-foreground">BASED IN</p>
          <p className="mt-1 flex items-center gap-2 text-sm font-medium">
            <MapPin className="h-4 w-4 text-primary" /> {personalInfo.location}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
