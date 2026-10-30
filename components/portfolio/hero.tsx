import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, Asterisk } from "lucide-react";
import { portfolio } from "@/content/portfolio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import styles from "./hero.module.css";

export function Hero() {
  return (
    <section id="home" className={styles.hero} aria-labelledby="hero-heading">
      <header className={styles.topline}>
        <span>INDEPENDENT MIND. INTENTIONAL WORK.</span>
        <Badge variant="secondary" className="font-mono text-[8px] font-normal">
          PORTFOLIO — {portfolio.copyrightYear}
        </Badge>
      </header>
      <div className={styles.composition}>
        <div className={styles.introduction}>
          <p className={styles.eyebrow}>
            <span />
            HELLO, I’M
          </p>
          <h1 id="hero-heading" aria-label={portfolio.name.join(" ")}>
            {portfolio.name.map((name, index) => (
              <span key={index}>
                {name}
                {index === portfolio.name.length - 1 && (
                  <span className={styles.dot}>.</span>
                )}
              </span>
            ))}
          </h1>
          <p className={styles.role}>
            {portfolio.role}
            <ArrowUpRight size={19} strokeWidth={1.2} aria-hidden="true" />
          </p>
          <p className={styles.note}>{portfolio.heroNote}</p>
          <div className="flex flex-wrap gap-3">
            <Button render={<a href="#work" />} nativeButton={false}>
              Explore my work{" "}
              <ArrowDownRight data-icon="inline-end" aria-hidden="true" />
            </Button>
            <Button
              render={<a href="#about" />}
              nativeButton={false}
              variant="outline"
            >
              About me
            </Button>
          </div>
        </div>
        <div
          className={styles.collage}
          role="group"
          aria-label="A few things that inspire me"
        >
          <figure className={styles.landscape}>
            <div className={styles.imageWrap}>
              <Image
                src={portfolio.images.landscape.src}
                alt={portfolio.images.landscape.alt}
                fill
                sizes="(max-width: 700px) 42vw, 18vw"
              />
            </div>
            <figcaption>01 / THE IN-BETWEEN</figcaption>
          </figure>
          <figure className={styles.architecture}>
            <div className={styles.imageWrap}>
              <Image
                src={portfolio.images.architecture.src}
                alt={portfolio.images.architecture.alt}
                fill
                preload
                sizes="(max-width: 700px) 50vw, 23vw"
              />
              <span className={styles.imageLabel}>
                A different perspective.
              </span>
            </div>
          </figure>
          <figure className={styles.workspace}>
            <div className={styles.imageWrap}>
              <Image
                src={portfolio.images.workspace.src}
                alt={portfolio.images.workspace.alt}
                fill
                sizes="(max-width: 700px) 40vw, 17vw"
              />
            </div>
            <figcaption>02 / A WORK IN PROGRESS</figcaption>
          </figure>
          <Asterisk
            className={styles.flower}
            size={58}
            strokeWidth={1}
            aria-hidden="true"
          />
          <span className={styles.collageNote}>
            A few fragments
            <br />
            of my world.
          </span>
        </div>
      </div>
      <div className={styles.heroFooter}>
        <span>BASED IN {portfolio.location.toUpperCase()}</span>
        <span>
          SCROLL TO GET TO KNOW ME{" "}
          <ArrowDownRight size={13} aria-hidden="true" />
        </span>
      </div>
      <Separator />
    </section>
  );
}
