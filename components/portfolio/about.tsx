import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { portfolio } from "@/content/portfolio";

export function About() {
  return (
    <section
      id="about"
      className="pt-10 md:pt-12"
      aria-labelledby="about-heading"
    >
      <div className="flex items-center justify-between gap-5 font-mono text-[9px] tracking-widest text-muted-foreground">
        <span>ABOUT ME</span>
        <ArrowUpRight className="size-4 text-primary" aria-hidden="true" />
      </div>
      <div className="mt-10 grid gap-8 pb-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2
            id="about-heading"
            className="max-w-sm font-serif text-4xl leading-tight tracking-tight text-balance md:text-5xl"
          >
            {portfolio.introduction}
          </h2>
          <p className="mt-6 font-serif text-base text-primary italic">
            Always a work in progress.
          </p>
        </div>
        <div className="space-y-5">
          {portfolio.about.map((paragraph, index) => (
            <p
              key={paragraph}
              className={
                index === 0
                  ? "text-sm leading-7 text-foreground"
                  : "text-sm leading-7 text-muted-foreground"
              }
            >
              {paragraph}
            </p>
          ))}
          <Card
            id="background"
            size="sm"
            className="mt-7 gap-3 border border-border shadow-none ring-0"
          >
            <CardHeader>
              <h3 className="font-mono text-[9px] tracking-widest text-muted-foreground">
                CURRENTLY EXPLORING
              </h3>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-3">
              {portfolio.interests.map((interest) => (
                <Badge
                  key={interest}
                  variant="outline"
                  className="rounded-full border border-border px-3 py-1.5 text-[10px] font-normal tracking-normal normal-case"
                >
                  {interest}
                </Badge>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
      <Separator />
    </section>
  );
}
