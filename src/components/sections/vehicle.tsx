import { ArrowRight } from "lucide-react";
import { Container, Eyebrow, GoldButton, PhotoSlot, SectionTitle } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { defaultWaText, vehicleFeatures, waLink } from "@/lib/site";

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
            <PhotoSlot
              label="van, extérieur 3/4 avant"
              tone="dark"
              className="col-span-2 aspect-video rounded-[20px]"
            />
            <PhotoSlot
              label="intérieur, sièges"
              tone="dark"
              className="aspect-4/3 rounded-[20px]"
            />
            <PhotoSlot
              label="coffre chargé"
              tone="dark"
              className="aspect-4/3 rounded-[20px]"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
