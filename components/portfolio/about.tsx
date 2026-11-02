"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { portfolio } from "@/content/portfolio";

export function About() {
  return (
    <section
      id="about"
      className="relative border-b border-border px-6 py-20 md:px-10 md:py-28"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-[10px] tracking-[0.3em] text-muted-foreground uppercase"
        >
          About
        </motion.p>

        <div className="grid items-start gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-20">
          {/* Text column */}
          <div>
            <motion.h2
              id="about-heading"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="text-4xl leading-tight font-light tracking-tight text-balance md:text-5xl"
            >
              {portfolio.introduction}
            </motion.h2>

            <div className="mt-10 space-y-7 md:mt-12 md:space-y-8">
              {portfolio.about.map((paragraph, index) => (
                <motion.p
                  key={paragraph}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-base leading-8 text-muted-foreground md:text-lg md:leading-9"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Interests */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 flex flex-wrap gap-3 md:mt-12"
            >
              {portfolio.interests.map((interest) => (
                <Badge
                  key={interest}
                  variant="outline"
                  className="border border-border px-4 py-2 text-xs font-normal tracking-normal normal-case"
                >
                  {interest}
                </Badge>
              ))}
            </motion.div>
          </div>

          {/* Portrait */}
          <motion.figure
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[3/4] w-full overflow-hidden bg-card"
          >
            <Image
              src={portfolio.images.portrait.src}
              alt={portfolio.images.portrait.alt}
              fill
              sizes="(max-width: 1024px) 90vw, 40vw"
              className="origin-top scale-130 object-cover object-top"
            />
            {/* Subtle overlay */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent"
              aria-hidden
            />
          </motion.figure>
        </div>
      </div>
    </section>
  );
}
