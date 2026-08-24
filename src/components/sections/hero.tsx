import { getImageProps } from "next/image";
import { ArrowRight } from "lucide-react";
import { GoldButton } from "@/components/ui";
import { defaultWaText, waLink } from "@/lib/site";
import heroDesktop from "@/images/hero-van-desktop.webp";
import heroMobile from "@/images/hero-van-mobile.webp";

/**
 * Deux cadrages pour une seule image affichée : le van est à droite en
 * paysage, en bas en portrait. `getImageProps` + `<picture>` laissent le
 * navigateur ne télécharger que le fichier correspondant au viewport.
 */
function HeroPicture() {
  // Pas de `quality` : Next 16 n'autorise que les valeurs de `images.qualities`,
  // dont la liste par défaut se limite à 75.
  const common = {
    alt: "Van noir avec chauffeur privé au bord de l'océan, au coucher du soleil",
    sizes: "100vw",
    priority: true,
  };

  const {
    props: { srcSet: desktop },
  } = getImageProps({ ...common, src: heroDesktop, width: 1376, height: 768 });

  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({ ...common, src: heroMobile, width: 768, height: 1376 });

  return (
    <picture>
      <source media="(min-width: 768px)" srcSet={desktop} />
      <source srcSet={mobile} />
      <img
        {...rest}
        alt={common.alt}
        className="absolute inset-0 size-full object-cover object-[70%_center] md:object-center"
      />
    </picture>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="hero-bg relative flex min-h-[92vh] items-start py-[clamp(56px,8vw,104px)] md:items-center"
    >
      <HeroPicture />

      {/* Voile de lisibilité : vertical en portrait, latéral en paysage. */}
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,23,33,0.95)_0%,rgba(10,23,33,0.82)_34%,rgba(10,23,33,0.34)_62%,rgba(10,23,33,0.6)_100%)] md:bg-[linear-gradient(90deg,rgba(10,23,33,0.97)_0%,rgba(10,23,33,0.91)_42%,rgba(10,23,33,0.5)_68%,rgba(10,23,33,0.2)_100%)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto w-full max-w-[1200px] px-6">
        <div className="max-w-[760px]">
          <p className="mb-5 text-xs font-medium tracking-[0.14em] text-gold uppercase">
            Transferts privés avec chauffeur · Dakar et régions
          </p>
          <h1 className="mb-5.5 font-display text-[clamp(36px,6.2vw,64px)] leading-[1.04] font-semibold tracking-[-0.02em] text-pretty">
            Arrivez{" "}
            <em className="font-serif font-normal text-gold italic">sereinement</em>.
            Partout au Sénégal.
          </h1>
          <p className="mb-9 max-w-[620px] text-[clamp(16px,1.4vw,17px)] leading-relaxed text-mist text-pretty">
            Transferts aéroport, mises à disposition et excursions en van climatisé
            avec chauffeur privé. Prix fixe annoncé à l&apos;avance, aucune
            négociation.
          </p>
        </div>

        <GoldButton href={waLink(defaultWaText)}>
          Réserver maintenant
          <ArrowRight className="size-[17px]" aria-hidden="true" />
        </GoldButton>
      </div>
    </section>
  );
}
