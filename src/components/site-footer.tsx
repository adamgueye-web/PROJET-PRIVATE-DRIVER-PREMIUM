import { Brand } from "@/components/brand";
import { Container } from "@/components/ui";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/8 bg-ink py-[clamp(56px,7vw,96px)]">
      <Container>
        <div>
          <div className="mb-3.5">
            <Brand as="block" />
          </div>
          {/* Baseline sur une seule ligne : pas de largeur maximale. */}
          <p className="text-base text-mist">{site.baseline}</p>
        </div>

        {/* Réserve la hauteur de la barre d'action fixe sur mobile. */}
        <div className="h-16 min-[821px]:hidden" />
      </Container>
    </footer>
  );
}
