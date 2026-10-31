"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { portfolio } from "@/content/portfolio";

export function SelectedWork() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section
      id="work"
      className="relative border-b border-border px-6 py-20 md:px-10 md:py-28"
      aria-labelledby="work-heading"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-[10px] tracking-[0.3em] text-muted-foreground uppercase"
        >
          Selected work
        </motion.p>

        <motion.h2
          id="work-heading"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-3xl font-light tracking-tight md:text-4xl"
        >
          Things I&rsquo;ve made<span className="text-primary">.</span>
        </motion.h2>

        {/* Project list */}
        <div className="border-t border-border">
          {portfolio.projects.map((project, index) => (
            <motion.div
              key={project.id}
              id={project.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group border-b border-border"
            >
              <button
                onClick={() =>
                  setExpanded(expanded === project.id ? null : project.id)
                }
                className="flex w-full cursor-pointer items-center gap-4 py-7 text-left transition-colors sm:gap-8"
                aria-expanded={expanded === project.id}
                aria-controls={`details-${project.id}`}
              >
                {/* Index */}
                <span className="w-8 shrink-0 font-mono text-[10px] text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Name + description */}
                <span className="flex-1">
                  <span className="block text-lg tracking-tight transition-colors group-hover:text-primary sm:text-xl">
                    {project.name}
                  </span>
                  <span className="mt-1 block text-xs text-muted-foreground">
                    {project.description}
                  </span>
                </span>

                {/* Category + year */}
                <Badge
                  variant="secondary"
                  className="hidden text-[9px] font-normal tracking-normal normal-case md:inline-flex"
                >
                  {project.category}
                </Badge>
                <span className="hidden font-mono text-[10px] text-muted-foreground sm:inline">
                  {project.year}
                </span>

                {/* Arrow */}
                <ArrowUpRight
                  className={`size-4 shrink-0 text-muted-foreground transition-transform duration-200 ${
                    expanded === project.id ? "rotate-90" : ""
                  }`}
                  aria-hidden
                />
              </button>

              {/* Expandable detail */}
              <AnimatePresence>
                {expanded === project.id && (
                  <motion.div
                    id={`details-${project.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 pl-12 sm:pl-16">
                      <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
                        {project.details}
                      </p>
                      <p className="mt-3 text-[10px] tracking-wider text-primary/70 uppercase">
                        {project.category} · {project.year}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
