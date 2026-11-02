"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronLeft, ChevronRight, Images } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ProjectMedia } from "@/content/portfolio";

export function ProjectCarousel({
  media,
  name,
}: {
  media: ProjectMedia[];
  name: string;
}) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduceMotion = useReducedMotion();
  const current = media[index];

  function goTo(next: number) {
    videoRef.current?.pause();
    setDirection(next > index ? 1 : -1);
    setIndex((next + media.length) % media.length);
    setFailedSrc(null);
  }

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={`${name} media`}
      className="min-w-0 border border-border bg-card"
    >
      <div
        role="group"
        aria-roledescription="slide"
        aria-label={current ? `${index + 1} of ${media.length}` : "No media"}
        className="relative flex aspect-video items-center justify-center overflow-hidden"
      >
        <AnimatePresence initial={false} mode="wait" custom={direction}>
          <motion.div
            key={`${index}-${current?.src ?? "empty"}`}
            custom={direction}
            variants={{
              enter: (slideDirection: number) => ({
                opacity: 0,
                x: reduceMotion ? 0 : slideDirection * 40,
              }),
              active: { opacity: 1, x: 0 },
              exit: (slideDirection: number) => ({
                opacity: 0,
                x: reduceMotion ? 0 : slideDirection * -40,
              }),
            }}
            initial="enter"
            animate="active"
            exit="exit"
            transition={{ duration: reduceMotion ? 0 : 0.2, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {!current || failedSrc === current.src ? (
              <div className="px-6 text-center text-muted-foreground">
                <Images
                  className="mx-auto mb-4 size-8 text-primary/60"
                  aria-hidden
                />
                <p className="text-sm">
                  {current
                    ? "This preview is unavailable."
                    : "Project previews coming soon"}
                </p>
                <p className="mt-2 text-xs text-muted-foreground/70">{name}</p>
              </div>
            ) : current.type === "video" ? (
              <video
                ref={videoRef}
                key={`${index}-${current.src}`}
                src={current.src}
                poster={current.poster}
                controls
                playsInline
                preload="metadata"
                aria-label={current.alt}
                className="h-full w-full object-contain"
                onError={() => setFailedSrc(current.src)}
              >
                {current.captions && (
                  <track
                    kind="captions"
                    src={current.captions}
                    srcLang="en"
                    label="English"
                    default
                  />
                )}
                Your browser does not support this video.
              </video>
            ) : (
              <Image
                key={`${index}-${current.src}`}
                src={current.src}
                alt={current.alt}
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-contain"
                onError={() => setFailedSrc(current.src)}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
      {media.length > 0 && (
        <div className="flex items-center justify-between gap-3 border-t border-border px-4 py-3">
          <p
            aria-live="polite"
            aria-atomic="true"
            className="text-xs text-muted-foreground"
          >
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(media.length).padStart(2, "0")}
            <span className="ml-3">
              {current.type === "video" ? "Video" : "Image"}
            </span>
          </p>
          {media.length > 1 && (
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon-sm"
                onClick={() => goTo(index - 1)}
                aria-label={`Previous preview for ${name}`}
              >
                <ChevronLeft aria-hidden />
              </Button>
              <Button
                variant="outline"
                size="icon-sm"
                onClick={() => goTo(index + 1)}
                aria-label={`Next preview for ${name}`}
              >
                <ChevronRight aria-hidden />
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
