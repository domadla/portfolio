"use client";

import { ArrowUpRight, ArrowUp } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { portfolio } from "@/content/portfolio";

export function Contact() {
  const contacts = [
    {
      label: "Personal Email",
      value: portfolio.contact.personalEmail,
      href: portfolio.contact.personalEmail
        ? `mailto:${portfolio.contact.personalEmail}`
        : null,
      external: false,
    },
    {
      label: "Academic Email",
      value: portfolio.contact.academicEmail,
      href: portfolio.contact.academicEmail
        ? `mailto:${portfolio.contact.academicEmail}`
        : null,
      external: false,
    },
    {
      label: "Address",
      value: portfolio.contact.address,
      href: null,
      external: false,
    },
    ...portfolio.socials.map((social) => ({
      label: social.label,
      value: social.href,
      href: social.href,
      external: true,
    })),
  ];

  return (
    <footer
      id="contact"
      aria-labelledby="contact-heading"
      className="relative px-6 py-20 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-[10px] tracking-[0.3em] text-muted-foreground uppercase"
        >
          Contact
        </motion.p>
        <motion.h2
          id="contact-heading"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-light tracking-tight md:text-5xl lg:text-6xl"
        >
          Let&rsquo;s talk<span className="text-primary">.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground"
        >
          Have an idea, an opportunity, or a good story?
        </motion.p>
        <motion.dl
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-60px" }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-12 grid gap-x-12 sm:grid-cols-2 lg:grid-cols-3"
        >
          {contacts.map((contact) => (
            <div
              key={contact.label}
              className="min-w-0 border-t border-border py-7"
            >
              <dt className="mb-3 text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                {contact.label}
              </dt>
              <dd className="text-sm leading-7">
                {contact.href ? (
                  <a
                    href={contact.href}
                    target={contact.external ? "_blank" : undefined}
                    rel={contact.external ? "noopener noreferrer" : undefined}
                    className="inline-flex max-w-full items-start gap-2 text-foreground transition-colors hover:text-primary"
                  >
                    <span className="min-w-0 break-words [overflow-wrap:anywhere]">
                      {contact.value}
                    </span>
                    <ArrowUpRight
                      className="mt-1.5 size-4 shrink-0 text-primary"
                      aria-hidden
                    />
                  </a>
                ) : (
                  <span
                    className={
                      contact.value
                        ? "text-foreground"
                        : "text-muted-foreground/70"
                    }
                  >
                    {contact.value ?? "Coming soon"}
                  </span>
                )}
              </dd>
            </div>
          ))}
        </motion.dl>
        <Separator className="mt-12 mb-6" />
        <div className="flex flex-wrap items-center justify-between gap-4 text-[10px] text-muted-foreground">
          <span>
            &copy; {portfolio.copyrightYear} {portfolio.name.join(" ")}
          </span>
          <Button
            render={<a href="#home" />}
            nativeButton={false}
            variant="ghost"
            size="xs"
            className="text-[10px]"
          >
            Top{" "}
            <ArrowUp className="size-3" data-icon="inline-end" aria-hidden />
          </Button>
        </div>
      </div>
    </footer>
  );
}
