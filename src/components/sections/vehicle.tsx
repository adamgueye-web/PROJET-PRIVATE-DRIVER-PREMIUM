import Image, { type StaticImageData } from "next/image";
import { ArrowRight } from "lucide-react";
import { Container, Eyebrow, GoldButton, SectionTitle } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { defaultWaText, fleet, waLink } from "@/lib/site";
import van3 from "@/images/van-3.webp";
import kiaSportage from "@/images/kia-sportage.jpeg";

/** Une photo par famille de véhicule, dans l'ordre de `fleet`. */
const fleetImages: Record<string, { src: StaticImageData; alt: string }> = {
  Van: {
    src: van3,
    alt: "Van noir de trois quarts avant, carrosserie brillante",
  },
  SUV: {
    src: kiaSportage,
    alt: "Kia Sportage blanche de trois quarts avant, garée en ville à Dakar",
  },
};

export function Vehicle() {
  return (
    <section
      id="vehicule"
      className="scroll-mt-18 bg-ink pt-16 pb-[clamp(64px,8vw,120px)]"
    >
      <Container>
        <Reveal className="mb-11 max-w-[640px]">
          <Eyebrow>La flotte</Eyebrow>
          <SectionTitle className="mb-5">
            Van ou SUV. Le bon véhicule pour chaque trajet.
          </SectionTitle>
          <p className="text-[17px] leading-relaxed text-mist">
            Le van pour les transferts et les groupes, le SUV pour la location
            avec chauffeur et les trajets à quelques-uns. Même exigence
            d&apos;entretien et de propreté, quel que soit le véhicule qui vient
            vous chercher.
          </p>
        </Reveal>

        <div className="grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]">
          {fleet.map((vehicle, i) => {
            const image = fleetImages[vehicle.kind];
            return (
              <Reveal key={vehicle.kind} delay={i * 90}>
                <article className="flex h-full flex-col overflow-hidden rounded-[20px] border border-white/8 bg-ink-900">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 1024px) 560px, 100vw"
                      className="object-cover"
                      placeholder="blur"
                    />
                    <span className="absolute top-4 left-4 rounded-full bg-ink/80 px-3.5 py-1.5 text-xs font-medium tracking-[0.14em] text-gold uppercase backdrop-blur-sm">
                      {vehicle.kind}
                    </span>
                  </div>

                  <div className="flex grow flex-col p-6 lg:p-7">
                    <h3 className="mb-2.5 font-display text-[22px] font-medium text-white">
                      {vehicle.title}
                    </h3>
                    <p className="mb-6 text-base leading-relaxed text-mist">
                      {vehicle.text}
                    </p>

                    <ul className="mt-auto flex flex-wrap gap-2.5">
                      {vehicle.features.map((feature) => (
                        <li
                          key={feature}
                          className="rounded-full border border-white/8 px-4 py-2.25 text-sm text-white"
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-10 flex flex-wrap items-center gap-5">
          <GoldButton href={waLink(defaultWaText)}>
            Réserver un véhicule
            <ArrowRight className="size-[17px]" aria-hidden="true" />
          </GoldButton>
          <span className="text-base text-mist">
            Van ou SUV : dites-nous votre trajet, on vous conseille.
          </span>
        </Reveal>
      </Container>
    </section>
  );
}
