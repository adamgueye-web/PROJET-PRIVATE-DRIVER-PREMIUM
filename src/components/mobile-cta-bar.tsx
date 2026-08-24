import { MessageCircle } from "lucide-react";
import { defaultWaText, waLink } from "@/lib/site";

/**
 * Barre d'action fixe en bas d'écran, sous 821px.
 * Le décalage réservé dans le pied de page (`h-16`) suit le même point de rupture.
 */
export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-60 flex border-t border-white/8 bg-ink px-4 py-3 min-[821px]:hidden">
      <a
        href={waLink(defaultWaText)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-13 flex-1 items-center justify-center gap-2 rounded-full bg-gold text-[15px] font-semibold text-ink"
      >
        <MessageCircle className="size-[17px] text-whatsapp" aria-hidden="true" />
        Réserver via WhatsApp
      </a>
    </div>
  );
}
