"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { certifications } from "@/content/certifications";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

export function Certifications() {
  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
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
          Certifications
        </motion.p>
        <motion.h2
          id="certifications-heading"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-3xl font-light tracking-tight md:mb-16 md:text-4xl"
        >
          Practical Learning<span className="text-primary">.</span>
        </motion.h2>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((certification, index) => (
            <motion.li
              key={certification.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (index % 4) * 0.06 }}
              className="flex min-w-0 flex-col border border-border bg-card/60 p-6 transition-colors hover:border-primary/50 hover:bg-card"
            >
              <div className="mb-7 flex h-32 items-center justify-center">
                <Image
                  src={certification.image}
                  alt={`${certification.name} badge`}
                  width={112}
                  height={112}
                  className={`size-28 object-contain${certification.id === "ccst-networking" ? "bg-white p-2" : ""}`}
                />
              </div>
              <h3 className="text-sm leading-6 font-medium text-foreground">
                {certification.name}
              </h3>
              <p className="mt-2 text-xs leading-5 text-muted-foreground">
                {certification.issuer}
              </p>
              <div className="mt-auto pt-6">
                <div className="space-y-1 text-xs leading-5 text-muted-foreground">
                  {certification.issuedOn && (
                    <p>
                      Issued{" "}
                      <time dateTime={certification.issuedOn}>
                        {dateFormatter.format(new Date(certification.issuedOn))}
                      </time>
                    </p>
                  )}
                  {certification.expiresOn && (
                    <p>
                      Expires{" "}
                      <time dateTime={certification.expiresOn}>
                        {dateFormatter.format(
                          new Date(certification.expiresOn),
                        )}
                      </time>
                    </p>
                  )}
                </div>
                <a
                  href={certification.credentialUrl ?? certification.badgeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${certification.credentialUrl ? "Show certification" : "View badge details"}: ${certification.name} (opens in a new tab)`}
                  className="mt-5 inline-flex items-center gap-2 text-xs text-primary underline-offset-4 transition-colors hover:text-foreground hover:underline"
                >
                  {certification.credentialUrl
                    ? "Show certification"
                    : "View details"}
                  <ArrowUpRight className="size-3.5 shrink-0" aria-hidden />
                </a>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
