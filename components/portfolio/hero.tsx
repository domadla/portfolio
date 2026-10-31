import Image from "next/image";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { portfolio } from "@/content/portfolio";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import styles from "./hero.module.css";

export function Hero() {
  return (
    <section id="home" className={styles.hero} aria-labelledby="hero-heading">
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
        <figure className={styles.portrait}>
          <Image
            src={portfolio.images.portrait.src}
            alt={portfolio.images.portrait.alt}
            fill
            preload
            sizes="(max-width: 700px) 85vw, (max-width: 1200px) 40vw, 460px"
          />
        </figure>
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
