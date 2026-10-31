"use client";

import { ArrowUpRight, ArrowUp } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { portfolio } from "@/content/portfolio";

export function Contact() {
  return (
    <footer id="contact" className="relative px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-[10px] tracking-[0.3em] text-muted-foreground uppercase"
        >
          Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-light tracking-tight md:text-5xl lg:text-6xl"
        >
          Let&rsquo;s talk<span className="text-primary">.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground"
        >
          Have an idea, an opportunity, or a good story?
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="mt-10"
        >
          {portfolio.email ? (
            <Button
              render={<a href={`mailto:${portfolio.email}`} />}
              nativeButton={false}
              size="lg"
            >
              Say hello
              <ArrowUpRight data-icon="inline-end" aria-hidden />
            </Button>
          ) : (
            <Button variant="outline" size="lg" disabled>
              Say hello
              <ArrowUpRight data-icon="inline-end" aria-hidden />
            </Button>
          )}
        </motion.div>

        {/* Links row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 flex flex-wrap gap-6"
        >
          {portfolio.socials.map((s) =>
            s.href ? (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                {s.label}
                <ArrowUpRight className="size-3" aria-hidden />
              </a>
            ) : (
              <span key={s.label} className="text-xs text-muted-foreground/50">
                {s.label}
              </span>
            ),
          )}
        </motion.div>

        {/* Footer */}
        <Separator className="mt-16 mb-6" />
        <div className="flex flex-wrap items-center justify-between gap-4 text-[10px] text-muted-foreground">
          <span>
            © {portfolio.copyrightYear} {portfolio.name.join(" ")}
          </span>
          <Button
            render={<a href="#home" />}
            nativeButton={false}
            variant="ghost"
            size="xs"
            className="text-[10px]"
          >
            Top
            <ArrowUp className="size-3" data-icon="inline-end" aria-hidden />
          </Button>
        </div>
      </div>
    </footer>
  );
}
