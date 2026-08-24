import { ArrowRight } from "lucide-react";
import { Container, Eyebrow, GoldButton, PhotoSlot, SectionTitle } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { defaultWaText, services, waLink } from "@/lib/site";

export function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-18 bg-cream pb-[clamp(64px,8vw,120px)] text-ink"
    >
      <Container>
        <Eyebrow tone="terracotta">Nos services</Eyebrow>
        <SectionTitle className="mb-12 max-w-[640px]">
          Quatre façons de rouler avec nous.
        </SectionTitle>

        <div className="grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 80}>
              <article className="h-full overflow-hidden rounded-2xl border border-ink/8 bg-white shadow-[0_4px_24px_rgba(10,23,33,0.08)] transition hover:-translate-y-1">
                <PhotoSlot label={service.photo} className="aspect-4/3" />
                <div className="p-6">
                  <h3 className="mb-2.5 font-display text-[22px] font-medium">
                    {service.title}
                  </h3>
                  <p className="text-base leading-relaxed text-stone">
                    {service.text}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-5">
          <GoldButton href={waLink(defaultWaText)}>
            Réserver
            <ArrowRight className="size-[17px]" aria-hidden="true" />
          </GoldButton>
          <span className="text-base text-stone">
            Réponse sous 15 minutes, prix fixe annoncé avant le départ.
          </span>
        </div>
      </Container>
    </section>
  );
}
