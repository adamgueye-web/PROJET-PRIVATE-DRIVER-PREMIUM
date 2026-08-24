import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container, Eyebrow, GoldButton, SectionTitle } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { defaultWaText, vehicleFeatures, waLink } from "@/lib/site";
import van2 from "@/images/van-2.webp";
import van3 from "@/images/van-3.webp";
import van4 from "@/images/van-4.webp";

export function Vehicle() {
  return (
    <section
      id="vehicule"
      className="scroll-mt-18 bg-ink pt-16 pb-[clamp(64px,8vw,120px)]"
    >
      <Container>
        <div className="grid items-center gap-12 [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]">
          <Reveal>
            <Eyebrow>Le véhicule</Eyebrow>
            <SectionTitle className="mb-5">
              Vans identiques. Un seul standard.
            </SectionTitle>
            <p className="mb-7 text-[17px] leading-relaxed text-mist">
              Quel que soit le van qui vient vous chercher, vous obtenez exactement
              le même véhicule, le même équipement, le même niveau de propreté. Pas
              de loterie.
            </p>

            <ul className="flex flex-wrap gap-2.5">
              {vehicleFeatures.map((feature) => (
                <li
                  key={feature}
                  className="rounded-full border border-white/8 px-4 py-2.25 text-sm text-white"
                >
                  {feature}
                </li>
              ))}
            </ul>

            <GoldButton href={waLink(defaultWaText)} className="mt-7">
              Réserver ce van
              <ArrowRight className="size-[17px]" aria-hidden="true" />
            </GoldButton>
          </Reveal>

          <Reveal className="grid grid-cols-2 gap-3">
            {/* Le fond bleu nuit de cette photo prolonge celui de la section. */}
            <div className="relative col-span-2 aspect-video overflow-hidden rounded-[20px] border border-white/8">
              <Image
                src={van3}
                alt="Van noir de trois quarts avant, carrosserie brillante"
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover"
                placeholder="blur"
              />
            </div>
            {/* Cadre en 3/2 : le van de profil tient sans que le recadrage
                n'entame les pare-chocs. */}
            <div className="relative aspect-3/2 overflow-hidden rounded-[20px] border border-white/8">
              <Image
                src={van2}
                alt="Van noir vu de profil, portes latérales coulissantes"
                fill
                sizes="(min-width: 1024px) 275px, 50vw"
                className="object-cover"
                placeholder="blur"
              />
            </div>
            <div className="relative aspect-3/2 overflow-hidden rounded-[20px] border border-white/8">
              <Image
                src={van4}
                alt="Van noir de profil côté conducteur, sur fond clair"
                fill
                sizes="(min-width: 1024px) 275px, 50vw"
                className="object-cover"
                placeholder="blur"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
