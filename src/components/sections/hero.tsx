import { ArrowRight } from "lucide-react";
import { GoldButton } from "@/components/ui";
import { defaultWaText, waLink } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="top"
      className="hero-bg relative flex min-h-[92vh] items-center py-[clamp(56px,8vw,104px)]"
    >
      <div className="grain-cross pointer-events-none absolute inset-0 opacity-4" />
      <div className="absolute right-6 bottom-6 z-1 font-mono text-[11px] tracking-[0.06em] text-white/35">
        [ photo van — corniche de Dakar, heure dorée ]
      </div>

      <div className="relative mx-auto w-full max-w-[1200px] px-6">
        <div className="max-w-[760px]">
          <p className="mb-5 text-xs font-medium tracking-[0.14em] text-gold uppercase">
            Transferts privés avec chauffeur · Dakar et régions
          </p>
          <h1 className="mb-5.5 font-display text-[clamp(36px,6.2vw,64px)] leading-[1.04] font-semibold tracking-[-0.02em] text-pretty">
            Arrivez{" "}
            <em className="font-serif font-normal text-gold italic">sereinement</em>.
            Partout au Sénégal.
          </h1>
          <p className="mb-9 max-w-[620px] text-[clamp(16px,1.4vw,17px)] leading-relaxed text-mist text-pretty">
            Transferts aéroport, mises à disposition et excursions en van climatisé
            avec chauffeur privé. Prix fixe annoncé à l&apos;avance, aucune
            négociation.
          </p>
        </div>

        <GoldButton href={waLink(defaultWaText)}>
          Réserver maintenant
          <ArrowRight className="size-[17px]" aria-hidden="true" />
        </GoldButton>
      </div>
    </section>
  );
}
