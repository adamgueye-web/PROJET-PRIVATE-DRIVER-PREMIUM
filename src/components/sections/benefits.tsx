import { PlaneLanding, Snowflake, Tag, UserCheck } from "lucide-react";
import { Container } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { benefits } from "@/lib/site";

const icons = {
  tag: Tag,
  "plane-landing": PlaneLanding,
  snowflake: Snowflake,
  "user-check": UserCheck,
} as const;

export function Benefits() {
  return (
    <section className="bg-cream py-[clamp(48px,6vw,72px)] text-ink">
      <Container className="grid gap-8 [grid-template-columns:repeat(auto-fit,minmax(230px,1fr))]">
        {benefits.map((benefit, i) => {
          const Icon = icons[benefit.icon];
          return (
            <Reveal key={benefit.title} delay={i * 80}>
              <Icon className="size-6.5 text-terracotta" aria-hidden="true" />
              <h3 className="mt-3.5 mb-1.5 font-display text-xl font-medium">
                {benefit.title}
              </h3>
              <p className="text-base leading-relaxed text-stone">{benefit.text}</p>
            </Reveal>
          );
        })}
      </Container>
    </section>
  );
}
