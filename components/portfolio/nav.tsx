"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { portfolio } from "@/content/portfolio";

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar */}
      <div className="relative flex h-14 items-center justify-between border-b border-border/50 bg-background/80 px-6 backdrop-blur-xl md:px-10">
        <a
          href="#home"
          className="text-sm font-medium tracking-tight"
          aria-label={`${portfolio.name.join(" ")} home`}
        >
          {portfolio.initials}
          <span className="text-primary">.</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] tracking-widest text-muted-foreground uppercase transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <Button
          variant="ghost"
          size="icon-sm"
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X aria-hidden /> : <Menu aria-hidden />}
        </Button>
      </div>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-14 z-40 flex flex-col gap-1 border-b border-border bg-background/95 p-6 backdrop-blur-xl md:hidden"
          >
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center justify-between border-b border-border/40 py-5 text-lg tracking-tight"
              >
                {link.label}
                <ArrowUpRight className="size-4 text-muted-foreground" />
              </motion.a>
            ))}

            <div className="mt-auto pt-6">
              <Separator className="mb-4" />
              <div className="flex gap-4 text-xs text-muted-foreground">
                {portfolio.socials.map((s) =>
                  s.href ? (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-foreground"
                    >
                      {s.label}
                    </a>
                  ) : (
                    <span key={s.label}>{s.label}</span>
                  ),
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
