"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { ProjectCarousel } from "@/components/portfolio/project-carousel";
import { portfolio } from "@/content/portfolio";

export function SelectedWork() {
  return (
    <section
      id="work"
      className="relative border-b border-border px-6 py-20 md:px-10 md:py-28"
      aria-labelledby="work-heading"
    >
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-[10px] tracking-[0.3em] text-muted-foreground uppercase"
        >
          Projects
        </motion.p>
        <motion.h2
          id="work-heading"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-3xl font-light tracking-tight md:text-4xl"
        >
          Works and Contributions <span className="text-primary">:</span>
        </motion.h2>
        <div className="border-t border-border">
          {portfolio.projects.map((project, index) => (
            <motion.article
              key={project.id}
              id={project.id}
              aria-labelledby={`${project.id}-heading`}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-40px" }}
              transition={{ duration: 0.4 }}
              className="grid items-start gap-8 border-b border-border py-10 lg:grid-cols-[1.4fr_1fr] lg:gap-12 lg:py-12"
            >
              <ProjectCarousel media={project.media} name={project.name} />
              <div className="min-w-0 lg:py-2">
                <div className="mb-5 flex flex-wrap items-center gap-4">
                  <span className="font-mono text-[10px] text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <Badge
                    variant="secondary"
                    className="text-[10px] font-normal tracking-normal normal-case"
                  >
                    {project.category}
                  </Badge>
                  <span className="font-mono text-[10px] text-muted-foreground">
                    {project.year}
                  </span>
                </div>
                <h3
                  id={`${project.id}-heading`}
                  className="text-2xl font-light tracking-tight md:text-3xl"
                >
                  {project.name}
                </h3>
                <p className="mt-3 text-base text-foreground/85">
                  {project.description}
                </p>
                <p className="mt-5 text-sm leading-7 text-muted-foreground">
                  {project.details}
                </p>
                {project.showWebsite && (
                  <div className="mt-8 border-t border-border pt-5">
                    <p className="mb-3 text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                      Project website
                    </p>
                    {project.siteUrl ? (
                      <a
                        href={project.siteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${project.name} website (opens in a new tab)`}
                        className="inline-flex items-center gap-2 text-sm text-primary transition-colors hover:text-foreground"
                      >
                        Visit site{" "}
                        <ArrowUpRight className="size-4" aria-hidden />
                      </a>
                    ) : (
                      <p className="text-sm text-muted-foreground/70">
                        Link coming soon
                      </p>
                    )}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
