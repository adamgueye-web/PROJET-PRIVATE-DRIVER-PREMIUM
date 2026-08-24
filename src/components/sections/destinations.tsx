"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container, Eyebrow, PhotoSlot, SectionTitle } from "@/components/ui";
import { destinations, waLink } from "@/lib/site";

export function Destinations() {
  const scroller = useRef<HTMLDivElement>(null);

  const scrollBy = (offset: number) =>
    scroller.current?.scrollBy({ left: offset, behavior: "smooth" });

  return (
    <section className="bg-cream pb-[clamp(64px,8vw,120px)] text-ink">
      <Container>
        <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
          <div>
            <Eyebrow tone="terracotta">Destinations populaires</Eyebrow>
            <SectionTitle>Le Sénégal, au prix annoncé.</SectionTitle>
          </div>
          <div className="flex gap-2.5">
            <button
              type="button"
              onClick={() => scrollBy(-320)}
              aria-label="Destination précédente"
              className="grid size-12 cursor-pointer place-items-center rounded-full border border-ink/12 bg-white text-ink transition hover:border-gold"
            >
              <ArrowLeft className="size-4.5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(320)}
              aria-label="Destination suivante"
              className="grid size-12 cursor-pointer place-items-center rounded-full border border-ink/12 bg-white text-ink transition hover:border-gold"
            >
              <ArrowRight className="size-4.5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div
          ref={scroller}
          className="scroller flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2"
        >
          {destinations.map((destination) => (
            <article
              key={destination.name}
              className="flex-[0_0_300px] snap-start overflow-hidden rounded-2xl border border-ink/8 bg-white shadow-[0_4px_24px_rgba(10,23,33,0.08)]"
            >
              <PhotoSlot label={destination.photo} className="aspect-3/2" />
              <div className="p-5">
                <h3 className="mb-1.5 font-display text-[22px] font-medium">
                  {destination.name}
                </h3>
                <p className="mb-3.5 text-sm text-stone tabular-nums">
                  {destination.meta}
                </p>
                <a
                  href={waLink(
                    `Bonjour SenegalDrive, je souhaite un devis pour un trajet vers ${destination.name}.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-ink/12 bg-white px-5 py-3 text-[15px] font-medium text-ink transition hover:border-gold"
                >
                  Réserver ce trajet
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
