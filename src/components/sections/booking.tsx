import { CircleCheck, MessageCircle } from "lucide-react";
import { Container, Eyebrow, SectionTitle } from "@/components/ui";
import { defaultWaText, waLink } from "@/lib/site";

/** Réservation : un seul canal, WhatsApp. Pas de formulaire, donc pas de backend. */
export function Booking() {
  return (
    <section
      id="reserver"
      className="scroll-mt-18 bg-ink py-[clamp(64px,8vw,120px)]"
    >
      <Container className="flex flex-col items-center text-center">
        <Eyebrow>Réservation</Eyebrow>
        <SectionTitle className="mb-5 max-w-[620px]">
          Dites-nous votre trajet.
        </SectionTitle>
        <p className="mb-9 max-w-[520px] text-base leading-relaxed text-mist">
          Envoyez-nous votre trajet, votre date et le nombre de passagers sur
          WhatsApp. Un message, un prix, c&apos;est réglé.
        </p>

        <a
          href={waLink(defaultWaText)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-14 items-center justify-center gap-2.5 rounded-full bg-gold px-8 text-base font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-gold-dark"
        >
          <MessageCircle className="size-4.5 text-whatsapp" aria-hidden="true" />
          Réserver via WhatsApp
        </a>

        <p className="mt-5 flex items-center gap-2 text-sm font-medium text-white">
          <CircleCheck className="size-[15px] text-emerald-deep" aria-hidden="true" />
          Disponible 24h/24
        </p>
      </Container>
    </section>
  );
}
