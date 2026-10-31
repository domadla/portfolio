"use client";

import { ArrowDown } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { portfolio } from "@/content/portfolio";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-svh flex-col justify-end px-6 pb-16 pt-20 md:px-10 md:pb-20"
      aria-labelledby="hero-heading"
    >
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
        aria-hidden
      />

      <div className="relative z-10 max-w-4xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 text-[11px] tracking-[0.25em] text-primary uppercase"
        >
          {portfolio.location}
        </motion.p>

        <motion.h1
          id="hero-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-5xl leading-[1.05] font-light tracking-tight sm:text-7xl md:text-8xl lg:text-9xl"
          aria-label={portfolio.name.join(" ")}
        >
          {portfolio.name.map((part, i) => (
            <span key={i} className="block">
              {part}
              {i === portfolio.name.length - 1 && (
                <span className="text-primary">.</span>
              )}
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base"
        >
          {portfolio.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-10"
        >
          <Button
            render={<a href="#work" />}
            nativeButton={false}
            variant="outline"
            className="gap-3 border-muted-foreground/30 text-[10px]"
          >
            See work
            <ArrowDown className="size-3" data-icon="inline-end" aria-hidden />
          </Button>
        </motion.div>
      </div>

      {/* Bottom line accent */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="absolute bottom-0 left-0 right-0 h-px origin-left bg-border"
        aria-hidden
      />
    </section>
  );
}
