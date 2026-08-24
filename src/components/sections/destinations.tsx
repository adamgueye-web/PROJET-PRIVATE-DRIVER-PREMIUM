"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";
import { Container, Eyebrow, SectionTitle } from "@/components/ui";
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
              className="group relative flex flex-[0_0_290px] snap-start flex-col overflow-hidden rounded-2xl border border-ink/8 bg-white p-6 shadow-[0_4px_24px_rgba(10,23,33,0.06)] transition duration-300 hover:-translate-y-1 hover:border-gold/45 hover:shadow-[0_18px_44px_rgba(10,23,33,0.12)]"
            >
              {/* Filet doré qui se déploie au survol. */}
              <span
                className="absolute inset-x-0 top-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-gold to-transparent transition-transform duration-500 group-hover:scale-x-100"
                aria-hidden="true"
              />

              <div className="mb-5 flex items-start justify-between gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-ink text-gold transition-colors duration-300 group-hover:bg-ink-800">
                  <MapPin className="size-5" aria-hidden="true" />
                </span>
                <span className="rounded-full bg-terracotta/8 px-2.5 py-1 text-xs font-medium tracking-[0.08em] text-terracotta uppercase">
                  {destination.region}
                </span>
              </div>

              <h3 className="mb-5 font-display text-[26px] leading-tight font-medium">
                {destination.name}
              </h3>

              {/* Fiche : deux lignes de données séparées par un filet. */}
              <dl className="grid gap-2.5 border-t border-ink/8 pt-4 text-sm">
                <div className="flex items-baseline justify-between gap-3">
                  <dt className="text-stone">Depuis Dakar</dt>
                  <dd className="font-medium tabular-nums">{destination.duration}</dd>
                </div>
                <div className="flex items-baseline justify-between gap-3">
                  <dt className="text-stone">Tarif</dt>
                  <dd className="text-[17px] font-semibold whitespace-nowrap text-gold-dark tabular-nums">
                    {destination.price}
                  </dd>
                </div>
              </dl>

              <a
                href={waLink(
                  `Bonjour SenegalDrive, je souhaite un devis pour un trajet vers ${destination.name}.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex min-h-11 items-center justify-between gap-2 rounded-full border border-ink/12 px-5 py-3 text-[15px] font-medium text-ink transition group-hover:border-gold group-hover:bg-gold group-hover:text-ink"
              >
                Réserver ce trajet
                <ArrowRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
