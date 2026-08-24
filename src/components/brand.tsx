import { site } from "@/lib/site";

/** Logo étoile + nom, réutilisé dans l'en-tête et le pied de page. */
export function Brand({ as = "link" }: { as?: "link" | "block" }) {
  const inner = (
    <>
      <span className="grid size-10 flex-none place-items-center rounded-xl bg-gold">
        <svg viewBox="0 0 24 24" className="block size-[19px]" aria-hidden="true">
          <polygon
            points="12,2.6 14.7,9.3 21.9,9.7 16.3,14.3 18.2,21.4 12,17.4 5.8,21.4 7.7,14.3 2.1,9.7 9.3,9.3"
            fill="#0A1721"
          />
        </svg>
      </span>
      <span className="grid gap-0.5">
        <span className="font-display text-xl leading-none tracking-[-0.02em]">
          <span className="font-medium">Senegal</span>
          <span className="font-semibold text-gold">Drive</span>
        </span>
        <span className="text-[9px] font-medium tracking-[0.22em] text-mist uppercase">
          {site.tagline}
        </span>
      </span>
    </>
  );

  if (as === "block") {
    return <div className="flex items-center gap-2.5 text-white">{inner}</div>;
  }

  return (
    <a href="#top" className="flex items-center gap-2.5 text-white">
      {inner}
    </a>
  );
}
