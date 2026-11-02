"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Network } from "lucide-react";
import { skillGroups } from "@/content/skills";

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative scroll-mt-14 border-b border-border px-6 py-20 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, margin: "-40px" }}
          transition={{ duration: 0.4 }}
          className="mb-4 text-[10px] tracking-[0.3em] text-muted-foreground uppercase"
        >
          Skills
        </motion.p>
        <motion.h2
          id="skills-heading"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-3xl font-light tracking-tight md:mb-16 md:text-4xl"
        >
          Tools and Technologies I use<span className="text-primary">:</span>
        </motion.h2>

        <div className="border-t border-border">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-40px" }}
              transition={{ duration: 0.45 }}
              className="grid gap-6 border-b border-border py-8 md:grid-cols-[1fr_2fr] md:gap-10 md:py-10"
            >
              <div>
                <p
                  className="mb-3 font-mono text-[10px] text-primary"
                  aria-hidden
                >
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3
                  id={`skills-${group.id}`}
                  className="max-w-xs text-lg font-light tracking-tight md:text-xl"
                >
                  {group.title}
                </h3>
              </div>

              <ul
                aria-labelledby={`skills-${group.id}`}
                className="grid grid-cols-2 gap-3 lg:grid-cols-3"
              >
                {group.items.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex min-w-0 items-center gap-3 border border-border/70 bg-card/60 px-3 py-4 transition-colors hover:border-primary/50 hover:bg-card sm:px-4"
                  >
                    <span
                      className="flex size-8 shrink-0 items-center justify-center"
                      aria-hidden
                    >
                      {skill.icon ? (
                        <Image
                          src={`/icons/skills/${skill.icon}.svg`}
                          alt=""
                          width={28}
                          height={28}
                          className={`size-7 object-contain${skill.monochrome ? " brightness-0 invert" : ""}`}
                        />
                      ) : (
                        <Network className="size-7 text-primary" />
                      )}
                    </span>
                    <span className="min-w-0 text-xs leading-5 text-foreground/90 sm:text-sm">
                      {skill.name}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
