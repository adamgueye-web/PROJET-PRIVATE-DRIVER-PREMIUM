import { ArrowRight } from "lucide-react";
import { Container, Eyebrow, GoldButton, SectionTitle } from "@/components/ui";
import { defaultWaText, fares, waLink } from "@/lib/site";

// Sous md la ligne se plie : le trajet au-dessus, durée et prix côte à côte.
const row = "grid gap-1.5 md:gap-4 md:[grid-template-columns:2.4fr_1fr_1fr]";

export function Pricing() {
  return (
    <section
      id="tarifs"
      className="relative scroll-mt-18 bg-ink py-[clamp(64px,8vw,120px)]"
    >
      <div className="grain-gold pointer-events-none absolute inset-0 opacity-4" />

      <Container className="relative">
        <Eyebrow>Tarifs transparents</Eyebrow>
        <SectionTitle className="mb-12 max-w-[640px]">
          Des prix fixes, affichés à l&apos;avance.
        </SectionTitle>

        <div className="overflow-hidden rounded-2xl border border-white/8">
          <div
            className={`${row} hidden bg-white/4 px-6 py-4 text-xs font-medium tracking-[0.14em] text-mist uppercase md:grid`}
          >
            <span>Trajet</span>
            <span>Durée</span>
            <span className="text-right">À partir de</span>
          </div>

          {fares.map((fare) => (
            <div
              key={fare.route}
              className={`${row} items-center border-t border-white/8 px-6 py-5.5`}
            >
              <span className="text-[17px] text-white">
                {fare.route}
                {"detail" in fare && fare.detail ? (
                  <span className="text-mist"> {fare.detail}</span>
                ) : null}
              </span>
              {/* md:contents rend les deux valeurs directement à la grille. */}
              <div className="flex items-baseline justify-between gap-4 md:contents">
                <span className="text-base text-mist tabular-nums">
                  {fare.duration}
                </span>
                <span className="text-[19px] font-semibold text-gold tabular-nums md:text-right">
                  {fare.price}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap items-center justify-between gap-6">
          <p className="max-w-[620px] text-base leading-relaxed text-mist">
            Tous les prix incluent le carburant, le péage, le chauffeur et
            l&apos;attente. Pas de supplément bagage. Pas de majoration de nuit.
          </p>
          <GoldButton href={waLink(defaultWaText)}>
            Réserver un trajet
            <ArrowRight className="size-[17px]" aria-hidden="true" />
          </GoldButton>
        </div>
      </Container>
    </section>
  );
}
