"use client";

import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { portfolio } from "@/content/portfolio";

export function SelectedWork() {
  const [openProjects, setOpenProjects] = useState<string[]>([]);

  useEffect(() => {
    // Project links in the sidebar also open the corresponding case study.
    const openLinkedProject = () => {
      const id = window.location.hash.slice(1);
      if (portfolio.projects.some((project) => project.id === id)) {
        setOpenProjects((current) =>
          current.includes(id) ? current : [...current, id],
        );
      }
    };
    openLinkedProject();
    window.addEventListener("hashchange", openLinkedProject);
    return () => window.removeEventListener("hashchange", openLinkedProject);
  }, []);

  return (
    <section
      id="work"
      className="py-10 md:py-12"
      aria-labelledby="work-heading"
    >
      <div className="flex items-center justify-between gap-5 font-mono text-[9px] tracking-widest text-muted-foreground">
        <span>02 / SELECTED WORK</span>
        <span className="hidden sm:inline">A FEW THINGS I’VE BEEN MAKING</span>
      </div>
      <h2
        id="work-heading"
        className="my-8 text-4xl font-normal tracking-tighter md:text-5xl"
      >
        Ideas, made real<span className="text-primary">.</span>
      </h2>
      <Accordion
        multiple
        value={openProjects}
        onValueChange={setOpenProjects}
        className="border-y border-border"
      >
        {portfolio.projects.map((project, index) => (
          <AccordionItem
            key={project.id}
            id={project.id}
            value={project.id}
            className="scroll-mt-20 border-border"
          >
            <AccordionTrigger className="items-center gap-4 py-7 font-normal hover:no-underline sm:gap-6">
              <span className="font-mono text-[10px] text-muted-foreground">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="flex-1">
                <span className="block text-xl tracking-tight">
                  {project.name}
                </span>
                <span className="mt-2 block text-xs leading-relaxed text-muted-foreground">
                  {project.description}
                </span>
              </span>
              <Badge
                variant="secondary"
                className="hidden text-[9px] font-normal tracking-normal normal-case lg:inline-flex"
              >
                {project.category}
              </Badge>
              <span className="hidden font-mono text-[10px] text-muted-foreground sm:inline">
                {project.year}
              </span>
            </AccordionTrigger>
            <AccordionContent className="pb-6 sm:pl-10">
              <Card size="sm" className="gap-3 shadow-none ring-0">
                <CardHeader>
                  <Badge className="text-primary">
                    Project preview / placeholder
                  </Badge>
                  <CardDescription>
                    {project.category} · {project.year}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {project.details}
                  </p>
                </CardContent>
              </Card>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <Separator className="mt-12" />
    </section>
  );
}
