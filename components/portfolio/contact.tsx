import { ArrowUp, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { portfolio } from "@/content/portfolio";

export function Contact() {
  return (
    <footer id="contact" className="pb-4">
      <Card className="gap-7 bg-transparent py-0 shadow-none ring-0">
        <CardHeader className="px-0">
          <div className="flex items-center justify-between gap-5 font-mono text-[9px] tracking-widest text-muted-foreground">
            <span>03 / WHAT’S NEXT?</span>
            <span className="hidden sm:inline">
              GOOD THINGS START WITH A HELLO.
            </span>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col items-start justify-between gap-8 px-0 py-5 xl:flex-row xl:items-center">
          <div>
            <h2 className="text-4xl leading-tight font-normal tracking-tighter md:text-5xl">
              Let’s make
              <br />
              <em className="font-serif font-normal text-primary">
                something matter.
              </em>
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Have an idea, an opportunity, or a good story?
            </p>
          </div>
          {portfolio.email ? (
            <Button
              render={<a href={`mailto:${portfolio.email}`} />}
              nativeButton={false}
              size="lg"
            >
              Say hello
              <ArrowUpRight data-icon="inline-end" aria-hidden="true" />
            </Button>
          ) : (
            <div className="flex flex-col gap-3">
              <Button variant="outline" size="lg" disabled>
                Say hello
                <ArrowUpRight data-icon="inline-end" aria-hidden="true" />
              </Button>
              <Badge
                variant="secondary"
                className="font-normal tracking-normal normal-case"
              >
                A new conversation, soon.
              </Badge>
            </div>
          )}
        </CardContent>
        <Separator />
        <CardFooter className="flex-wrap justify-between gap-4 px-0 pb-2 text-[10px] text-muted-foreground">
          <span>
            © {portfolio.copyrightYear} {portfolio.name.join(" ")}
          </span>
          <span className="hidden font-mono text-[8px] tracking-widest sm:inline">
            DESIGNED WITH INTENTION.
          </span>
          <Button
            render={<a href="#home" />}
            nativeButton={false}
            variant="ghost"
            size="sm"
          >
            Back to top
            <ArrowUp data-icon="inline-end" aria-hidden="true" />
          </Button>
        </CardFooter>
      </Card>
    </footer>
  );
}
