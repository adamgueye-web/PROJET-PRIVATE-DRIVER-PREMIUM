import { ArrowRight, Briefcase, Check, Clock, Map, PlaneLanding } from "lucide-react";
import { Container, Eyebrow, GoldButton, SectionTitle } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { defaultWaText, services, waLink } from "@/lib/site";

const icons = {
  "plane-landing": PlaneLanding,
  clock: Clock,
  map: Map,
  briefcase: Briefcase,
} as const;

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

        {/* 1, 2 puis 4 colonnes : jamais de quatrième carte orpheline. */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service, i) => {
            const Icon = icons[service.icon];
            return (
              <Reveal key={service.title} delay={i * 80} className="h-full">
                <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ink/8 bg-white p-6 shadow-[0_4px_24px_rgba(10,23,33,0.06)] transition duration-300 hover:-translate-y-1 hover:border-gold/45 hover:shadow-[0_18px_44px_rgba(10,23,33,0.12)] lg:p-7">
                  {/* Filet doré qui se déploie au survol. */}
                  <span
                    className="absolute inset-x-0 top-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-gold to-transparent transition-transform duration-500 group-hover:scale-x-100"
                    aria-hidden="true"
                  />

                  <div className="mb-6 flex items-start justify-between gap-4">
                    <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-ink text-gold transition-colors duration-300 group-hover:bg-ink-800">
                      <Icon className="size-5.5" aria-hidden="true" />
                    </span>
                    <span className="font-mono text-xs tracking-[0.14em] text-ink/25 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mb-2.5 font-display text-[22px] font-medium">
                    {service.title}
                  </h3>
                  <p className="text-base leading-relaxed text-stone">
                    {service.text}
                  </p>

                  {/* Pousse la liste en bas : les filets s'alignent entre cartes. */}
                  <div className="mt-6 grow" aria-hidden="true" />

                  <ul className="grid gap-2.5 border-t border-ink/8 pt-5">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2.5 text-sm text-ink/70"
                      >
                        <Check
                          className="size-3.5 shrink-0 text-terracotta"
                          aria-hidden="true"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
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
