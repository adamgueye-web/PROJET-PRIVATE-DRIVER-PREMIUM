import { Container, Eyebrow, SectionTitle } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { steps } from "@/lib/site";

export function HowItWorks() {
  return (
    <section className="bg-cream py-[clamp(64px,8vw,120px)] text-ink">
      <Container>
        <Eyebrow tone="terracotta">Comment ça marche</Eyebrow>
        <SectionTitle className="mb-14">Trois étapes, quinze minutes.</SectionTitle>

        <div className="relative grid gap-8 [grid-template-columns:repeat(auto-fit,minmax(240px,1fr))]">
          {/* Fil conducteur entre les pastilles : seulement quand les trois
              étapes tiennent sur une ligne (3 × 240px + 2 × 32px de gouttière). */}
          <div
            className="absolute inset-x-0 top-5 hidden h-px bg-ink/8 min-[832px]:block"
            aria-hidden="true"
          />

          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 80} className="relative">
              <span className="inline-flex size-10 items-center justify-center rounded-full border border-ink/12 bg-cream text-[15px] font-semibold text-gold tabular-nums">
                {step.number}
              </span>
              <h3 className="mt-5 mb-2 font-display text-[22px] font-medium">
                {step.title}
              </h3>
              <p className="text-base leading-relaxed text-stone">{step.text}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
