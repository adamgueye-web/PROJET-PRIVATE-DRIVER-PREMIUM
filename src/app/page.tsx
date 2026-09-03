"use client";

import { useEffect, useRef, useState } from "react";
import Image, { getImageProps } from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  Check,
  CircleCheck,
  Clock,
  Map,
  MapPin,
  MessageCircle,
  PlaneLanding,
  Plus,
  Snowflake,
  Tag,
  UserCheck,
} from "lucide-react";

import heroDesktop from "@/images/hero-van-desktop.webp";
import heroMobile from "@/images/hero-van-mobile.webp";
import van3 from "@/images/van-3.webp";
import van4 from "@/images/van-4.webp";
import van5 from "@/images/van-5.webp";
import pajero1 from "@/images/pajero-1.webp";
import pajero2 from "@/images/pajero-2.webp";
import kiaSportage from "@/images/kia-sportage.jpeg";

// Lien WhatsApp direct : modifiez le numéro ou le texte pré-rempli ici si besoin
const WHATSAPP_NUMBER = "33698511669";
const waLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
const defaultWaLink = waLink(
  "Bonjour SenegalDrive, je souhaite un devis pour un transfert."
);

// Images du carrousel Van (3 photos)
const vanImages = [
  { src: van3, alt: "Van 7 places noir avec chauffeur privé au Sénégal" },
  { src: van4, alt: "Van moderne et climatisé vue extérieure trois-quarts" },
  { src: van5, alt: "Intérieur spacieux et confort du van pour passagers et bagages" },
];

// Images du carrousel SUV (mix Pajero & Kia Sportage - 3 photos)
const suvImages = [
  { src: pajero1, alt: "SUV Mitsubishi Pajero avec chauffeur privé à Dakar" },
  { src: kiaSportage, alt: "SUV Kia Sportage blanc élégant et tout confort" },
  { src: pajero2, alt: "SUV Mitsubishi Pajero haut de gamme pour les trajets au Sénégal" },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [showMobileCta, setShowMobileCta] = useState(false);
  const [vanSlide, setVanSlide] = useState(0);
  const [suvSlide, setSuvSlide] = useState(0);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const heroCtaRef = useRef<HTMLAnchorElement>(null);

  // Défilement automatique des photos toutes les 2 secondes
  useEffect(() => {
    const timer = setInterval(() => {
      setVanSlide((prev) => (prev + 1) % vanImages.length);
      setSuvSlide((prev) => (prev + 1) % suvImages.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);

      // Affiche le bouton mobile dès que le bouton principal du Hero n'est plus visible (dépassé par le haut)
      if (heroCtaRef.current) {
        const rect = heroCtaRef.current.getBoundingClientRect();
        setShowMobileCta(rect.bottom <= 80);
      } else {
        setShowMobileCta(y > 350);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const scrollDestinations = (offset: number) => {
    scrollerRef.current?.scrollBy({ left: offset, behavior: "smooth" });
  };

  // Image d'arrière-plan du Hero optimisée selon le format d'écran
  const heroDesktopProps = getImageProps({
    alt: "Van noir avec chauffeur privé au bord de l'océan, au coucher du soleil",
    sizes: "100vw",
    priority: true,
    src: heroDesktop,
    width: 1376,
    height: 768,
  }).props;

  const heroMobileProps = getImageProps({
    alt: "Van noir avec chauffeur privé au bord de l'océan, au coucher du soleil",
    sizes: "100vw",
    priority: true,
    src: heroMobile,
    width: 768,
    height: 1376,
  }).props;

  return (
    <div className="min-h-screen bg-ink text-white selection:bg-gold selection:text-ink">
      {/* =========================================================================
          1. EN-TÊTE / NAVIGATION
         ========================================================================= */}
      <header
        className="sticky top-0 z-40 border-b border-white/8 backdrop-blur-[14px] transition-colors"
        style={{
          background: scrolled ? "rgba(10,23,33,0.92)" : "rgba(10,23,33,0.55)",
        }}
      >
        <div className="mx-auto flex h-18 max-w-[1200px] items-center justify-between gap-6 px-6">
          {/* Logo */}
          <a href="#top" className="flex items-center gap-2.5 text-white">
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
                Chauffeur privé
              </span>
            </span>
          </a>

          {/* Liens de navigation (Desktop) */}
          <nav className="hidden items-center gap-8 min-[821px]:flex">
            <a href="#services" className="text-[15px] text-mist transition-colors hover:text-white">
              Services
            </a>
            <a href="#tarifs" className="text-[15px] text-mist transition-colors hover:text-white">
              Tarifs
            </a>
            <a href="#vehicule" className="text-[15px] text-mist transition-colors hover:text-white">
              La flotte
            </a>
            <a href="#faq" className="text-[15px] text-mist transition-colors hover:text-white">
              FAQ
            </a>
          </nav>

          {/* Bouton CTA Header */}
          <a
            href={defaultWaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-h-12 items-center rounded-full bg-gold px-6.5 py-[15px] text-[15px] font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-gold-dark min-[821px]:inline-flex"
          >
            Réserver
          </a>
        </div>
      </header>

      <main>
        {/* =========================================================================
            2. HERO SECTION
           ========================================================================= */}
        <section
          id="top"
          className="hero-bg relative flex min-h-[92vh] items-start py-[clamp(56px,8vw,104px)] md:items-center"
        >
          <picture>
            <source media="(min-width: 768px)" srcSet={heroDesktopProps.srcSet} />
            <source srcSet={heroMobileProps.srcSet} />
            <img
              src={heroDesktopProps.src}
              alt="Van noir avec chauffeur privé au bord de l'océan, au coucher du soleil"
              className="absolute inset-0 size-full object-cover object-[70%_center] md:object-center"
            />
          </picture>

          {/* Voile de lisibilité sombre */}
          <div
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,23,33,0.95)_0%,rgba(10,23,33,0.82)_34%,rgba(10,23,33,0.34)_62%,rgba(10,23,33,0.6)_100%)] md:bg-[linear-gradient(90deg,rgba(10,23,33,0.97)_0%,rgba(10,23,33,0.91)_42%,rgba(10,23,33,0.5)_68%,rgba(10,23,33,0.2)_100%)]"
            aria-hidden="true"
          />

          <div className="relative mx-auto w-full max-w-[1200px] px-6">
            <div className="max-w-[760px]">
              <p className="mb-5 text-xs font-medium tracking-[0.14em] text-gold uppercase">
                Transferts &amp; location avec chauffeur · Dakar et régions
              </p>
              <h1 className="mb-5.5 font-display text-[clamp(36px,6.2vw,64px)] leading-[1.04] font-semibold tracking-[-0.02em] text-pretty">
                Arrivez{" "}
                <em className="font-serif font-normal text-gold italic">sereinement</em>.
                Partout au Sénégal.
              </h1>
              <p className="mb-9 max-w-[620px] text-[clamp(16px,1.4vw,17px)] leading-relaxed text-mist text-pretty">
                Transferts aéroport, locations avec chauffeur et excursions. Van ou SUV
                climatisé selon votre trajet. Prix fixe annoncé à l&apos;avance, aucune
                négociation.
              </p>
            </div>

            <a
              ref={heroCtaRef}
              href={defaultWaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center gap-2.5 rounded-full bg-gold px-8 text-base font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-gold-dark"
            >
              Réserver maintenant
              <ArrowRight className="size-[17px]" aria-hidden="true" />
            </a>
          </div>
        </section>

        {/* =========================================================================
            3. AVANTAGES CLÉS
           ========================================================================= */}
        <section className="bg-cream py-[clamp(48px,6vw,72px)] text-ink">
          <div className="mx-auto w-full max-w-[1200px] px-6 grid gap-8 [grid-template-columns:repeat(auto-fit,minmax(230px,1fr))]">
            {/* Avantage 1 */}
            <div>
              <Tag className="size-6.5 text-terracotta" aria-hidden="true" />
              <h3 className="mt-3.5 mb-1.5 font-display text-xl font-medium">
                Prix fixe garanti
              </h3>
              <p className="text-base leading-relaxed text-stone">
                Pas de surprise à l&apos;arrivée.
              </p>
            </div>

            {/* Avantage 2 */}
            <div>
              <PlaneLanding className="size-6.5 text-terracotta" aria-hidden="true" />
              <h3 className="mt-3.5 mb-1.5 font-display text-xl font-medium">
                Ponctualité suivie
              </h3>
              <p className="text-base leading-relaxed text-stone">
                On suit votre vol en temps réel.
              </p>
            </div>

            {/* Avantage 3 */}
            <div>
              <Snowflake className="size-6.5 text-terracotta" aria-hidden="true" />
              <h3 className="mt-3.5 mb-1.5 font-display text-xl font-medium">
                Véhicules récents
              </h3>
              <p className="text-base leading-relaxed text-stone">
                Climatisés, wifi, eau offerte.
              </p>
            </div>

            {/* Avantage 4 */}
            <div>
              <UserCheck className="size-6.5 text-terracotta" aria-hidden="true" />
              <h3 className="mt-3.5 mb-1.5 font-display text-xl font-medium">
                Chauffeurs formés
              </h3>
              <p className="text-base leading-relaxed text-stone">
                Discrets, ponctuels, bilingues.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            4. SERVICES
           ========================================================================= */}
        <section
          id="services"
          className="scroll-mt-18 bg-cream pb-[clamp(64px,8vw,120px)] text-ink"
        >
          <div className="mx-auto w-full max-w-[1200px] px-6">
            <p className="mb-4 text-xs font-medium tracking-[0.14em] text-terracotta uppercase">
              Nos services
            </p>
            <h2 className="mb-12 max-w-[640px] font-display text-[clamp(28px,3.4vw,44px)] leading-[1.1] font-semibold tracking-[-0.02em]">
              Quatre façons de rouler avec nous.
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {/* Service 1 */}
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ink/8 bg-white p-6 shadow-[0_4px_24px_rgba(10,23,33,0.06)] transition duration-300 hover:-translate-y-1 hover:border-gold/45 hover:shadow-[0_18px_44px_rgba(10,23,33,0.12)] lg:p-7">
                <span
                  className="absolute inset-x-0 top-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-gold to-transparent transition-transform duration-500 group-hover:scale-x-100"
                  aria-hidden="true"
                />
                <div className="mb-6 flex items-start justify-between gap-4">
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-ink text-gold transition-colors duration-300 group-hover:bg-ink-800">
                    <PlaneLanding className="size-5.5" aria-hidden="true" />
                  </span>
                  <span className="font-mono text-xs tracking-[0.14em] text-ink/25 tabular-nums">
                    01
                  </span>
                </div>
                <h3 className="mb-2.5 font-display text-[22px] font-medium">
                  Transfert aéroport AIBD
                </h3>
                <p className="text-base leading-relaxed text-stone">
                  Accueil personnalisé avec pancarte à votre nom, aide aux bagages, trajet direct vers votre hôtel ou votre résidence.
                </p>
                <div className="mt-6 grow" aria-hidden="true" />
                <ul className="grid gap-2.5 border-t border-ink/8 pt-5">
                  <li className="flex items-center gap-2.5 text-sm text-ink/70">
                    <Check className="size-3.5 shrink-0 text-terracotta" aria-hidden="true" />
                    Accueil pancarte
                  </li>
                  <li className="flex items-center gap-2.5 text-sm text-ink/70">
                    <Check className="size-3.5 shrink-0 text-terracotta" aria-hidden="true" />
                    Vol suivi en direct
                  </li>
                  <li className="flex items-center gap-2.5 text-sm text-ink/70">
                    <Check className="size-3.5 shrink-0 text-terracotta" aria-hidden="true" />
                    60 min d&apos;attente incluses
                  </li>
                </ul>
              </article>

              {/* Service 2 */}
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ink/8 bg-white p-6 shadow-[0_4px_24px_rgba(10,23,33,0.06)] transition duration-300 hover:-translate-y-1 hover:border-gold/45 hover:shadow-[0_18px_44px_rgba(10,23,33,0.12)] lg:p-7">
                <span
                  className="absolute inset-x-0 top-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-gold to-transparent transition-transform duration-500 group-hover:scale-x-100"
                  aria-hidden="true"
                />
                <div className="mb-6 flex items-start justify-between gap-4">
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-ink text-gold transition-colors duration-300 group-hover:bg-ink-800">
                    <Clock className="size-5.5" aria-hidden="true" />
                  </span>
                  <span className="font-mono text-xs tracking-[0.14em] text-ink/25 tabular-nums">
                    02
                  </span>
                </div>
                <h3 className="mb-2.5 font-display text-[22px] font-medium">
                  Location avec chauffeur
                </h3>
                <p className="text-base leading-relaxed text-stone">
                  Un véhicule et son chauffeur, de la demi-journée à plusieurs jours. Van pour les groupes, SUV pour la ville et les trajets à quelques-uns.
                </p>
                <div className="mt-6 grow" aria-hidden="true" />
                <ul className="grid gap-2.5 border-t border-ink/8 pt-5">
                  <li className="flex items-center gap-2.5 text-sm text-ink/70">
                    <Check className="size-3.5 shrink-0 text-terracotta" aria-hidden="true" />
                    Demi-journée à multi-jours
                  </li>
                  <li className="flex items-center gap-2.5 text-sm text-ink/70">
                    <Check className="size-3.5 shrink-0 text-terracotta" aria-hidden="true" />
                    Chauffeur dédié
                  </li>
                  <li className="flex items-center gap-2.5 text-sm text-ink/70">
                    <Check className="size-3.5 shrink-0 text-terracotta" aria-hidden="true" />
                    Van ou SUV
                  </li>
                </ul>
              </article>

              {/* Service 3 */}
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ink/8 bg-white p-6 shadow-[0_4px_24px_rgba(10,23,33,0.06)] transition duration-300 hover:-translate-y-1 hover:border-gold/45 hover:shadow-[0_18px_44px_rgba(10,23,33,0.12)] lg:p-7">
                <span
                  className="absolute inset-x-0 top-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-gold to-transparent transition-transform duration-500 group-hover:scale-x-100"
                  aria-hidden="true"
                />
                <div className="mb-6 flex items-start justify-between gap-4">
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-ink text-gold transition-colors duration-300 group-hover:bg-ink-800">
                    <Map className="size-5.5" aria-hidden="true" />
                  </span>
                  <span className="font-mono text-xs tracking-[0.14em] text-ink/25 tabular-nums">
                    03
                  </span>
                </div>
                <h3 className="mb-2.5 font-display text-[22px] font-medium">
                  Excursions et régions
                </h3>
                <p className="text-base leading-relaxed text-stone">
                  Saly, Saint-Louis, Lac Rose, Sine Saloum, Touba. Aller-retour ou circuit sur plusieurs jours.
                </p>
                <div className="mt-6 grow" aria-hidden="true" />
                <ul className="grid gap-2.5 border-t border-ink/8 pt-5">
                  <li className="flex items-center gap-2.5 text-sm text-ink/70">
                    <Check className="size-3.5 shrink-0 text-terracotta" aria-hidden="true" />
                    Aller-retour ou circuit
                  </li>
                  <li className="flex items-center gap-2.5 text-sm text-ink/70">
                    <Check className="size-3.5 shrink-0 text-terracotta" aria-hidden="true" />
                    Tout le Sénégal
                  </li>
                  <li className="flex items-center gap-2.5 text-sm text-ink/70">
                    <Check className="size-3.5 shrink-0 text-terracotta" aria-hidden="true" />
                    Même chauffeur
                  </li>
                </ul>
              </article>

              {/* Service 4 */}
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ink/8 bg-white p-6 shadow-[0_4px_24px_rgba(10,23,33,0.06)] transition duration-300 hover:-translate-y-1 hover:border-gold/45 hover:shadow-[0_18px_44px_rgba(10,23,33,0.12)] lg:p-7">
                <span
                  className="absolute inset-x-0 top-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-gold to-transparent transition-transform duration-500 group-hover:scale-x-100"
                  aria-hidden="true"
                />
                <div className="mb-6 flex items-start justify-between gap-4">
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-ink text-gold transition-colors duration-300 group-hover:bg-ink-800">
                    <Briefcase className="size-5.5" aria-hidden="true" />
                  </span>
                  <span className="font-mono text-xs tracking-[0.14em] text-ink/25 tabular-nums">
                    04
                  </span>
                </div>
                <h3 className="mb-2.5 font-display text-[22px] font-medium">
                  Corporate et événementiel
                </h3>
                <p className="text-base leading-relaxed text-stone">
                  Délégations, séminaires, ONG, mariages. Facturation entreprise et devis sur mesure.
                </p>
                <div className="mt-6 grow" aria-hidden="true" />
                <ul className="grid gap-2.5 border-t border-ink/8 pt-5">
                  <li className="flex items-center gap-2.5 text-sm text-ink/70">
                    <Check className="size-3.5 shrink-0 text-terracotta" aria-hidden="true" />
                    Facturation entreprise
                  </li>
                  <li className="flex items-center gap-2.5 text-sm text-ink/70">
                    <Check className="size-3.5 shrink-0 text-terracotta" aria-hidden="true" />
                    Plusieurs véhicules
                  </li>
                  <li className="flex items-center gap-2.5 text-sm text-ink/70">
                    <Check className="size-3.5 shrink-0 text-terracotta" aria-hidden="true" />
                    Devis sur mesure
                  </li>
                </ul>
              </article>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a
                href={defaultWaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 items-center justify-center gap-2.5 rounded-full bg-gold px-8 text-base font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-gold-dark"
              >
                Réserver
                <ArrowRight className="size-[17px]" aria-hidden="true" />
              </a>
              <span className="text-base text-stone">
                Réponse sous 15 minutes, prix fixe annoncé avant le départ.
              </span>
            </div>
          </div>
        </section>

        {/* =========================================================================
            5. TARIFS TRANSPARENTS
           ========================================================================= */}
        <section
          id="tarifs"
          className="scroll-mt-18 bg-ink py-[clamp(64px,8vw,120px)]"
        >
          <div className="mx-auto w-full max-w-[1200px] px-6">
            <p className="mb-4 text-xs font-medium tracking-[0.14em] text-gold uppercase">
              Tarifs transparents
            </p>
            <h2 className="mb-12 max-w-[640px] font-display text-[clamp(28px,3.4vw,44px)] leading-[1.1] font-semibold tracking-[-0.02em]">
              Des prix fixes, affichés à l&apos;avance.
            </h2>

            <div className="overflow-hidden rounded-2xl border border-white/8">
              {/* En-tête desktop */}
              <div className="hidden grid-cols-[2.4fr_1fr_1fr] bg-white/4 px-6 py-4 text-xs font-medium tracking-[0.14em] text-mist uppercase md:grid">
                <span>Trajet</span>
                <span>Durée</span>
                <span className="text-right">À partir de</span>
              </div>

              {/* Ligne Tarif 1 */}
              <div className="grid items-center border-t border-white/8 px-5 py-5 md:grid-cols-[2.4fr_1fr_1fr] md:gap-4 md:px-6 md:py-5.5">
                <span className="text-[17px] text-white">
                  AIBD → Dakar
                  <span className="mt-1 block text-sm text-mist md:mt-0 md:inline md:text-[17px]">
                    {" "}(Plateau, Almadies, Ngor)
                  </span>
                </span>
                <div className="mt-3.5 flex items-center justify-between gap-4 md:mt-0 md:contents">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/6 px-2.5 py-1 text-sm whitespace-nowrap text-mist tabular-nums md:bg-transparent md:px-0 md:py-0 md:text-base">
                    <Clock className="size-3.5 shrink-0 md:hidden" aria-hidden="true" />
                    ~1h10
                  </span>
                  <span className="shrink-0 text-[19px] font-semibold whitespace-nowrap text-gold tabular-nums md:text-right">
                    <span className="mr-1.5 text-sm font-normal text-mist md:hidden">dès</span>
                    30 000 FCFA
                  </span>
                </div>
              </div>

              {/* Ligne Tarif 2 */}
              <div className="grid items-center border-t border-white/8 px-5 py-5 md:grid-cols-[2.4fr_1fr_1fr] md:gap-4 md:px-6 md:py-5.5">
                <span className="text-[17px] text-white">
                  AIBD → Saly / Mbour
                </span>
                <div className="mt-3.5 flex items-center justify-between gap-4 md:mt-0 md:contents">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/6 px-2.5 py-1 text-sm whitespace-nowrap text-mist tabular-nums md:bg-transparent md:px-0 md:py-0 md:text-base">
                    <Clock className="size-3.5 shrink-0 md:hidden" aria-hidden="true" />
                    ~1h
                  </span>
                  <span className="shrink-0 text-[19px] font-semibold whitespace-nowrap text-gold tabular-nums md:text-right">
                    <span className="mr-1.5 text-sm font-normal text-mist md:hidden">dès</span>
                    45 000 FCFA
                  </span>
                </div>
              </div>

              {/* Ligne Tarif 3 */}
              <div className="grid items-center border-t border-white/8 px-5 py-5 md:grid-cols-[2.4fr_1fr_1fr] md:gap-4 md:px-6 md:py-5.5">
                <span className="text-[17px] text-white">
                  Dakar → Saint-Louis
                </span>
                <div className="mt-3.5 flex items-center justify-between gap-4 md:mt-0 md:contents">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/6 px-2.5 py-1 text-sm whitespace-nowrap text-mist tabular-nums md:bg-transparent md:px-0 md:py-0 md:text-base">
                    <Clock className="size-3.5 shrink-0 md:hidden" aria-hidden="true" />
                    ~4h
                  </span>
                  <span className="shrink-0 text-[19px] font-semibold whitespace-nowrap text-gold tabular-nums md:text-right">
                    <span className="mr-1.5 text-sm font-normal text-mist md:hidden">dès</span>
                    110 000 FCFA
                  </span>
                </div>
              </div>

              {/* Ligne Tarif 4 */}
              <div className="grid items-center border-t border-white/8 px-5 py-5 md:grid-cols-[2.4fr_1fr_1fr] md:gap-4 md:px-6 md:py-5.5">
                <span className="text-[17px] text-white">
                  Dakar → Lac Rose
                  <span className="mt-1 block text-sm text-mist md:mt-0 md:inline md:text-[17px]">
                    {" "}(aller-retour + attente)
                  </span>
                </span>
                <div className="mt-3.5 flex items-center justify-between gap-4 md:mt-0 md:contents">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/6 px-2.5 py-1 text-sm whitespace-nowrap text-mist tabular-nums md:bg-transparent md:px-0 md:py-0 md:text-base">
                    <Clock className="size-3.5 shrink-0 md:hidden" aria-hidden="true" />
                    demi-journée
                  </span>
                  <span className="shrink-0 text-[19px] font-semibold whitespace-nowrap text-gold tabular-nums md:text-right">
                    <span className="mr-1.5 text-sm font-normal text-mist md:hidden">dès</span>
                    40 000 FCFA
                  </span>
                </div>
              </div>

              {/* Ligne Tarif 5 */}
              <div className="grid items-center border-t border-white/8 px-5 py-5 md:grid-cols-[2.4fr_1fr_1fr] md:gap-4 md:px-6 md:py-5.5">
                <span className="text-[17px] text-white">
                  Mise à disposition Dakar
                </span>
                <div className="mt-3.5 flex items-center justify-between gap-4 md:mt-0 md:contents">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/6 px-2.5 py-1 text-sm whitespace-nowrap text-mist tabular-nums md:bg-transparent md:px-0 md:py-0 md:text-base">
                    <Clock className="size-3.5 shrink-0 md:hidden" aria-hidden="true" />
                    journée (8h)
                  </span>
                  <span className="shrink-0 text-[19px] font-semibold whitespace-nowrap text-gold tabular-nums md:text-right">
                    <span className="mr-1.5 text-sm font-normal text-mist md:hidden">dès</span>
                    90 000 FCFA
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap items-center justify-between gap-6">
              <p className="max-w-[620px] text-base leading-relaxed text-mist">
                Tous les prix incluent le carburant, le péage, le chauffeur et
                l&apos;attente. Pas de supplément bagage. Pas de majoration de nuit.
              </p>
              <a
                href={defaultWaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 items-center justify-center gap-2.5 rounded-full bg-gold px-8 text-base font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-gold-dark"
              >
                Réserver un trajet
                <ArrowRight className="size-[17px]" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        {/* =========================================================================
            6. LA FLOTTE (VÉHICULES)
           ========================================================================= */}
        <section
          id="vehicule"
          className="scroll-mt-18 bg-ink pt-16 pb-[clamp(64px,8vw,120px)]"
        >
          <div className="mx-auto w-full max-w-[1200px] px-6">
            <div className="mb-11 max-w-[640px]">
              <p className="mb-4 text-xs font-medium tracking-[0.14em] text-gold uppercase">
                La flotte
              </p>
              <h2 className="mb-5 font-display text-[clamp(28px,3.4vw,44px)] leading-[1.1] font-semibold tracking-[-0.02em]">
                Van ou SUV. Le bon véhicule pour chaque trajet.
              </h2>
              <p className="text-[17px] leading-relaxed text-mist">
                Le van pour les transferts et les groupes, le SUV pour la location
                avec chauffeur et les trajets à quelques-uns. Même exigence
                d&apos;entretien et de propreté, quel que soit le véhicule qui vient
                vous chercher.
              </p>
            </div>

            <div className="grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]">
              {/* Carte Véhicule 1 : Van */}
              <article className="flex h-full flex-col overflow-hidden rounded-[20px] border border-white/8 bg-ink-900 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                {/* Carrousel d'images automatique 2s */}
                <div className="relative aspect-video overflow-hidden">
                  {vanImages.map((image, idx) => (
                    <Image
                      key={idx}
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 1024px) 560px, 100vw"
                      className={`object-cover transition-opacity duration-700 ${
                        idx === vanSlide ? "opacity-100" : "opacity-0 pointer-events-none"
                      }`}
                      priority={idx === 0}
                    />
                  ))}
                  <span className="absolute top-4 left-4 z-10 rounded-full bg-ink/85 px-3.5 py-1.5 text-xs font-medium tracking-[0.14em] text-gold uppercase backdrop-blur-md">
                    Van
                  </span>

                  {/* Points de pagination cliquables */}
                  <div className="absolute inset-x-0 bottom-3.5 z-10 flex items-center justify-center gap-2">
                    {vanImages.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setVanSlide(idx)}
                        aria-label={`Afficher la photo ${idx + 1}`}
                        className={`h-2 cursor-pointer rounded-full transition-all duration-300 ${
                          idx === vanSlide
                            ? "w-6 bg-gold"
                            : "w-2 bg-white/50 hover:bg-white/90"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex grow flex-col p-6 lg:p-7">
                  <h3 className="mb-2.5 font-display text-[22px] font-medium text-white">
                    Van 7 places
                  </h3>
                  <p className="mb-6 text-base leading-relaxed text-mist">
                    La référence des transferts aéroport : groupes, familles et bagages volumineux voyagent large et à l&apos;aise.
                  </p>
                  <ul className="mt-auto flex flex-wrap gap-2.5">
                    <li className="rounded-full border border-white/8 px-4 py-2 text-sm text-white">
                      10 passagers
                    </li>
                    <li className="rounded-full border border-white/8 px-4 py-2 text-sm text-white">
                      Grand volume bagages
                    </li>
                    <li className="rounded-full border border-white/8 px-4 py-2 text-sm text-white">
                      Climatisation
                    </li>
                  </ul>
                </div>
              </article>

              {/* Carte Véhicule 2 : SUV (Mitsubishi Pajero & Kia Sportage) */}
              <article className="flex h-full flex-col overflow-hidden rounded-[20px] border border-white/8 bg-ink-900 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                {/* Carrousel d'images automatique 2s */}
                <div className="relative aspect-video overflow-hidden">
                  {suvImages.map((image, idx) => (
                    <Image
                      key={idx}
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 1024px) 560px, 100vw"
                      className={`object-cover transition-opacity duration-700 ${
                        idx === suvSlide ? "opacity-100" : "opacity-0 pointer-events-none"
                      }`}
                      priority={idx === 0}
                    />
                  ))}
                  <span className="absolute top-4 left-4 z-10 rounded-full bg-ink/85 px-3.5 py-1.5 text-xs font-medium tracking-[0.14em] text-gold uppercase backdrop-blur-md">
                    SUV
                  </span>

                  {/* Points de pagination cliquables */}
                  <div className="absolute inset-x-0 bottom-3.5 z-10 flex items-center justify-center gap-2">
                    {suvImages.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setSuvSlide(idx)}
                        aria-label={`Afficher la photo ${idx + 1}`}
                        className={`h-2 cursor-pointer rounded-full transition-all duration-300 ${
                          idx === suvSlide
                            ? "w-6 bg-gold"
                            : "w-2 bg-white/50 hover:bg-white/90"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex grow flex-col p-6 lg:p-7">
                  <h3 className="mb-2.5 font-display text-[22px] font-medium text-white">
                    SUV — Confortables, spacieux &amp; climatisés
                  </h3>
                  <p className="mb-6 text-base leading-relaxed text-mist">
                    Idéal pour la location avec chauffeur : trajets à quelques-uns, déplacements d&apos;affaires, ville et circuits sur plusieurs jours au Sénégal.
                  </p>
                  <ul className="mt-auto flex flex-wrap gap-2.5">
                    <li className="rounded-full border border-white/8 px-4 py-2 text-sm text-white">
                      4 passagers
                    </li>
                    <li className="rounded-full border border-white/8 px-4 py-2 text-sm text-white">
                      Grand confort &amp; espace
                    </li>
                    <li className="rounded-full border border-white/8 px-4 py-2 text-sm text-white">
                      Climatisation
                    </li>
                  </ul>
                </div>
              </article>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a
                href={defaultWaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 items-center justify-center gap-2.5 rounded-full bg-gold px-8 text-base font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-gold-dark"
              >
                Réserver un véhicule
                <ArrowRight className="size-[17px]" aria-hidden="true" />
              </a>
              <span className="text-base text-mist">
                Van ou SUV : dites-nous votre trajet, on vous conseille.
              </span>
            </div>
          </div>
        </section>

        {/* =========================================================================
            7. COMMENT ÇA MARCHE
           ========================================================================= */}
        <section className="bg-cream py-[clamp(64px,8vw,120px)] text-ink">
          <div className="mx-auto w-full max-w-[1200px] px-6">
            <p className="mb-4 text-xs font-medium tracking-[0.14em] text-terracotta uppercase">
              Comment ça marche
            </p>
            <h2 className="mb-14 font-display text-[clamp(28px,3.4vw,44px)] leading-[1.1] font-semibold tracking-[-0.02em]">
              Trois étapes, quinze minutes.
            </h2>

            <div className="relative grid gap-8 [grid-template-columns:repeat(auto-fit,minmax(240px,1fr))]">
              <div
                className="absolute inset-x-0 top-5 hidden h-px bg-ink/8 min-[832px]:block"
                aria-hidden="true"
              />

              {/* Étape 1 */}
              <div className="relative">
                <span className="inline-flex size-10 items-center justify-center rounded-full border border-ink/12 bg-cream text-[15px] font-semibold text-gold tabular-nums">
                  01
                </span>
                <h3 className="mt-5 mb-2 font-display text-[22px] font-medium">
                  Vous demandez
                </h3>
                <p className="text-base leading-relaxed text-stone">
                  Un message WhatsApp. Réponse sous 15 minutes.
                </p>
              </div>

              {/* Étape 2 */}
              <div className="relative">
                <span className="inline-flex size-10 items-center justify-center rounded-full border border-ink/12 bg-cream text-[15px] font-semibold text-gold tabular-nums">
                  02
                </span>
                <h3 className="mt-5 mb-2 font-display text-[22px] font-medium">
                  On confirme
                </h3>
                <p className="text-base leading-relaxed text-stone">
                  Prix fixe, chauffeur assigné, contact partagé la veille.
                </p>
              </div>

              {/* Étape 3 */}
              <div className="relative">
                <span className="inline-flex size-10 items-center justify-center rounded-full border border-ink/12 bg-cream text-[15px] font-semibold text-gold tabular-nums">
                  03
                </span>
                <h3 className="mt-5 mb-2 font-display text-[22px] font-medium">
                  On vous conduit
                </h3>
                <p className="text-base leading-relaxed text-stone">
                  Le chauffeur est là avant vous. Vous montez, c&apos;est tout.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            8. DESTINATIONS POPULAIRES
           ========================================================================= */}
        <section className="bg-cream pb-[clamp(64px,8vw,120px)] text-ink">
          <div className="mx-auto w-full max-w-[1200px] px-6">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
              <div>
                <p className="mb-4 text-xs font-medium tracking-[0.14em] text-terracotta uppercase">
                  Destinations populaires
                </p>
                <h2 className="font-display text-[clamp(28px,3.4vw,44px)] leading-[1.1] font-semibold tracking-[-0.02em]">
                  Le Sénégal, au prix annoncé.
                </h2>
              </div>
              <div className="flex gap-2.5">
                <button
                  type="button"
                  onClick={() => scrollDestinations(-320)}
                  aria-label="Destination précédente"
                  className="grid size-12 cursor-pointer place-items-center rounded-full border border-ink/12 bg-white text-ink transition hover:border-gold"
                >
                  <ArrowLeft className="size-4.5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollDestinations(320)}
                  aria-label="Destination suivante"
                  className="grid size-12 cursor-pointer place-items-center rounded-full border border-ink/12 bg-white text-ink transition hover:border-gold"
                >
                  <ArrowRight className="size-4.5" aria-hidden="true" />
                </button>
              </div>
            </div>

            <div
              ref={scrollerRef}
              className="scroller flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2"
            >
              {/* Destination 1: Saly */}
              <article className="group relative flex flex-[0_0_290px] snap-start flex-col overflow-hidden rounded-2xl border border-ink/8 bg-white p-6 shadow-[0_4px_24px_rgba(10,23,33,0.06)] transition duration-300 hover:-translate-y-1 hover:border-gold/45 hover:shadow-[0_18px_44px_rgba(10,23,33,0.12)]">
                <span
                  className="absolute inset-x-0 top-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-gold to-transparent transition-transform duration-500 group-hover:scale-x-100"
                  aria-hidden="true"
                />
                <div className="mb-5 flex items-start justify-between gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-ink text-gold transition-colors duration-300 group-hover:bg-ink-800">
                    <MapPin className="size-5" aria-hidden="true" />
                  </span>
                  <span className="rounded-full bg-terracotta/8 px-2.5 py-1 text-xs font-medium tracking-[0.08em] text-terracotta uppercase">
                    Petite Côte
                  </span>
                </div>
                <h3 className="mb-5 font-display text-[26px] leading-tight font-medium">
                  Saly
                </h3>
                <dl className="grid gap-2.5 border-t border-ink/8 pt-4 text-sm">
                  <div className="flex items-baseline justify-between gap-3">
                    <dt className="text-stone">Depuis Dakar</dt>
                    <dd className="font-medium tabular-nums">1h15</dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-3">
                    <dt className="text-stone">Tarif</dt>
                    <dd className="text-[17px] font-semibold whitespace-nowrap text-gold-dark tabular-nums">
                      dès 45 000 FCFA
                    </dd>
                  </div>
                </dl>
                <a
                  href={waLink("Bonjour SenegalDrive, je souhaite un devis pour un trajet vers Saly.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex min-h-11 items-center justify-between gap-2 rounded-full border border-ink/12 px-5 py-3 text-[15px] font-medium text-ink transition group-hover:border-gold group-hover:bg-gold group-hover:text-ink"
                >
                  Réserver ce trajet
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
                </a>
              </article>

              {/* Destination 2: Saint-Louis */}
              <article className="group relative flex flex-[0_0_290px] snap-start flex-col overflow-hidden rounded-2xl border border-ink/8 bg-white p-6 shadow-[0_4px_24px_rgba(10,23,33,0.06)] transition duration-300 hover:-translate-y-1 hover:border-gold/45 hover:shadow-[0_18px_44px_rgba(10,23,33,0.12)]">
                <span
                  className="absolute inset-x-0 top-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-gold to-transparent transition-transform duration-500 group-hover:scale-x-100"
                  aria-hidden="true"
                />
                <div className="mb-5 flex items-start justify-between gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-ink text-gold transition-colors duration-300 group-hover:bg-ink-800">
                    <MapPin className="size-5" aria-hidden="true" />
                  </span>
                  <span className="rounded-full bg-terracotta/8 px-2.5 py-1 text-xs font-medium tracking-[0.08em] text-terracotta uppercase">
                    Nord
                  </span>
                </div>
                <h3 className="mb-5 font-display text-[26px] leading-tight font-medium">
                  Saint-Louis
                </h3>
                <dl className="grid gap-2.5 border-t border-ink/8 pt-4 text-sm">
                  <div className="flex items-baseline justify-between gap-3">
                    <dt className="text-stone">Depuis Dakar</dt>
                    <dd className="font-medium tabular-nums">4h</dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-3">
                    <dt className="text-stone">Tarif</dt>
                    <dd className="text-[17px] font-semibold whitespace-nowrap text-gold-dark tabular-nums">
                      dès 110 000 FCFA
                    </dd>
                  </div>
                </dl>
                <a
                  href={waLink("Bonjour SenegalDrive, je souhaite un devis pour un trajet vers Saint-Louis.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex min-h-11 items-center justify-between gap-2 rounded-full border border-ink/12 px-5 py-3 text-[15px] font-medium text-ink transition group-hover:border-gold group-hover:bg-gold group-hover:text-ink"
                >
                  Réserver ce trajet
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
                </a>
              </article>

              {/* Destination 3: Lac Rose */}
              <article className="group relative flex flex-[0_0_290px] snap-start flex-col overflow-hidden rounded-2xl border border-ink/8 bg-white p-6 shadow-[0_4px_24px_rgba(10,23,33,0.06)] transition duration-300 hover:-translate-y-1 hover:border-gold/45 hover:shadow-[0_18px_44px_rgba(10,23,33,0.12)]">
                <span
                  className="absolute inset-x-0 top-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-gold to-transparent transition-transform duration-500 group-hover:scale-x-100"
                  aria-hidden="true"
                />
                <div className="mb-5 flex items-start justify-between gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-ink text-gold transition-colors duration-300 group-hover:bg-ink-800">
                    <MapPin className="size-5" aria-hidden="true" />
                  </span>
                  <span className="rounded-full bg-terracotta/8 px-2.5 py-1 text-xs font-medium tracking-[0.08em] text-terracotta uppercase">
                    Grande Côte
                  </span>
                </div>
                <h3 className="mb-5 font-display text-[26px] leading-tight font-medium">
                  Lac Rose
                </h3>
                <dl className="grid gap-2.5 border-t border-ink/8 pt-4 text-sm">
                  <div className="flex items-baseline justify-between gap-3">
                    <dt className="text-stone">Depuis Dakar</dt>
                    <dd className="font-medium tabular-nums">50 min</dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-3">
                    <dt className="text-stone">Tarif</dt>
                    <dd className="text-[17px] font-semibold whitespace-nowrap text-gold-dark tabular-nums">
                      dès 40 000 FCFA
                    </dd>
                  </div>
                </dl>
                <a
                  href={waLink("Bonjour SenegalDrive, je souhaite un devis pour un trajet vers Lac Rose.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex min-h-11 items-center justify-between gap-2 rounded-full border border-ink/12 px-5 py-3 text-[15px] font-medium text-ink transition group-hover:border-gold group-hover:bg-gold group-hover:text-ink"
                >
                  Réserver ce trajet
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
                </a>
              </article>

              {/* Destination 4: Sine Saloum */}
              <article className="group relative flex flex-[0_0_290px] snap-start flex-col overflow-hidden rounded-2xl border border-ink/8 bg-white p-6 shadow-[0_4px_24px_rgba(10,23,33,0.06)] transition duration-300 hover:-translate-y-1 hover:border-gold/45 hover:shadow-[0_18px_44px_rgba(10,23,33,0.12)]">
                <span
                  className="absolute inset-x-0 top-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-gold to-transparent transition-transform duration-500 group-hover:scale-x-100"
                  aria-hidden="true"
                />
                <div className="mb-5 flex items-start justify-between gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-ink text-gold transition-colors duration-300 group-hover:bg-ink-800">
                    <MapPin className="size-5" aria-hidden="true" />
                  </span>
                  <span className="rounded-full bg-terracotta/8 px-2.5 py-1 text-xs font-medium tracking-[0.08em] text-terracotta uppercase">
                    Delta
                  </span>
                </div>
                <h3 className="mb-5 font-display text-[26px] leading-tight font-medium">
                  Sine Saloum
                </h3>
                <dl className="grid gap-2.5 border-t border-ink/8 pt-4 text-sm">
                  <div className="flex items-baseline justify-between gap-3">
                    <dt className="text-stone">Depuis Dakar</dt>
                    <dd className="font-medium tabular-nums">3h</dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-3">
                    <dt className="text-stone">Tarif</dt>
                    <dd className="text-[17px] font-semibold whitespace-nowrap text-gold-dark tabular-nums">
                      Sur devis
                    </dd>
                  </div>
                </dl>
                <a
                  href={waLink("Bonjour SenegalDrive, je souhaite un devis pour un trajet vers Sine Saloum.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex min-h-11 items-center justify-between gap-2 rounded-full border border-ink/12 px-5 py-3 text-[15px] font-medium text-ink transition group-hover:border-gold group-hover:bg-gold group-hover:text-ink"
                >
                  Réserver ce trajet
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
                </a>
              </article>

              {/* Destination 5: Touba */}
              <article className="group relative flex flex-[0_0_290px] snap-start flex-col overflow-hidden rounded-2xl border border-ink/8 bg-white p-6 shadow-[0_4px_24px_rgba(10,23,33,0.06)] transition duration-300 hover:-translate-y-1 hover:border-gold/45 hover:shadow-[0_18px_44px_rgba(10,23,33,0.12)]">
                <span
                  className="absolute inset-x-0 top-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-gold to-transparent transition-transform duration-500 group-hover:scale-x-100"
                  aria-hidden="true"
                />
                <div className="mb-5 flex items-start justify-between gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-ink text-gold transition-colors duration-300 group-hover:bg-ink-800">
                    <MapPin className="size-5" aria-hidden="true" />
                  </span>
                  <span className="rounded-full bg-terracotta/8 px-2.5 py-1 text-xs font-medium tracking-[0.08em] text-terracotta uppercase">
                    Centre
                  </span>
                </div>
                <h3 className="mb-5 font-display text-[26px] leading-tight font-medium">
                  Touba
                </h3>
                <dl className="grid gap-2.5 border-t border-ink/8 pt-4 text-sm">
                  <div className="flex items-baseline justify-between gap-3">
                    <dt className="text-stone">Depuis Dakar</dt>
                    <dd className="font-medium tabular-nums">2h30</dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-3">
                    <dt className="text-stone">Tarif</dt>
                    <dd className="text-[17px] font-semibold whitespace-nowrap text-gold-dark tabular-nums">
                      Sur devis
                    </dd>
                  </div>
                </dl>
                <a
                  href={waLink("Bonjour SenegalDrive, je souhaite un devis pour un trajet vers Touba.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex min-h-11 items-center justify-between gap-2 rounded-full border border-ink/12 px-5 py-3 text-[15px] font-medium text-ink transition group-hover:border-gold group-hover:bg-gold group-hover:text-ink"
                >
                  Réserver ce trajet
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
                </a>
              </article>

              {/* Destination 6: Somone */}
              <article className="group relative flex flex-[0_0_290px] snap-start flex-col overflow-hidden rounded-2xl border border-ink/8 bg-white p-6 shadow-[0_4px_24px_rgba(10,23,33,0.06)] transition duration-300 hover:-translate-y-1 hover:border-gold/45 hover:shadow-[0_18px_44px_rgba(10,23,33,0.12)]">
                <span
                  className="absolute inset-x-0 top-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-gold to-transparent transition-transform duration-500 group-hover:scale-x-100"
                  aria-hidden="true"
                />
                <div className="mb-5 flex items-start justify-between gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-ink text-gold transition-colors duration-300 group-hover:bg-ink-800">
                    <MapPin className="size-5" aria-hidden="true" />
                  </span>
                  <span className="rounded-full bg-terracotta/8 px-2.5 py-1 text-xs font-medium tracking-[0.08em] text-terracotta uppercase">
                    Petite Côte
                  </span>
                </div>
                <h3 className="mb-5 font-display text-[26px] leading-tight font-medium">
                  Somone
                </h3>
                <dl className="grid gap-2.5 border-t border-ink/8 pt-4 text-sm">
                  <div className="flex items-baseline justify-between gap-3">
                    <dt className="text-stone">Depuis Dakar</dt>
                    <dd className="font-medium tabular-nums">1h20</dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-3">
                    <dt className="text-stone">Tarif</dt>
                    <dd className="text-[17px] font-semibold whitespace-nowrap text-gold-dark tabular-nums">
                      dès 45 000 FCFA
                    </dd>
                  </div>
                </dl>
                <a
                  href={waLink("Bonjour SenegalDrive, je souhaite un devis pour un trajet vers Somone.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex min-h-11 items-center justify-between gap-2 rounded-full border border-ink/12 px-5 py-3 text-[15px] font-medium text-ink transition group-hover:border-gold group-hover:bg-gold group-hover:text-ink"
                >
                  Réserver ce trajet
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* =========================================================================
            9. SECTION RÉSERVATION WHATSAPP
           ========================================================================= */}
        <section
          id="reserver"
          className="scroll-mt-18 bg-ink py-[clamp(64px,8vw,120px)]"
        >
          <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center px-6 text-center">
            <p className="mb-4 text-xs font-medium tracking-[0.14em] text-gold uppercase">
              Réservation
            </p>
            <h2 className="mb-5 max-w-[620px] font-display text-[clamp(28px,3.4vw,44px)] leading-[1.1] font-semibold tracking-[-0.02em]">
              Dites-nous votre trajet.
            </h2>
            <p className="mb-9 max-w-[520px] text-base leading-relaxed text-mist">
              Envoyez-nous votre trajet, votre date et le nombre de passagers sur
              WhatsApp. Un message, un prix, c&apos;est réglé.
            </p>

            <a
              href={defaultWaLink}
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
          </div>
        </section>

        {/* =========================================================================
            10. FAQ
           ========================================================================= */}
        <section id="faq" className="scroll-mt-18 bg-cream py-[clamp(64px,8vw,120px)] text-ink">
          <div className="mx-auto w-full max-w-[860px] px-6">
            <p className="mb-4 text-xs font-medium tracking-[0.14em] text-terracotta uppercase">
              FAQ
            </p>
            <h2 className="mb-10 font-display text-[clamp(28px,3.4vw,44px)] leading-[1.1] font-semibold tracking-[-0.02em]">
              Les questions qu&apos;on nous pose.
            </h2>

            {/* Question 1 */}
            <details className="border-t border-ink/8 py-5.5">
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 text-[17px] font-medium">
                Que se passe-t-il si mon vol a du retard ?
                <Plus className="faq-icon size-4.5 flex-none text-gold transition-transform" aria-hidden="true" />
              </summary>
              <p className="mt-3.5 max-w-[640px] text-base leading-relaxed text-stone">
                Nous suivons votre vol en temps réel et ajustons l&apos;heure d&apos;arrivée du chauffeur. 60 minutes d&apos;attente sont incluses après l&apos;atterrissage, sans supplément.
              </p>
            </details>

            {/* Question 2 */}
            <details className="border-t border-ink/8 py-5.5">
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 text-[17px] font-medium">
                Comment puis-je payer ?
                <Plus className="faq-icon size-4.5 flex-none text-gold transition-transform" aria-hidden="true" />
              </summary>
              <p className="mt-3.5 max-w-[640px] text-base leading-relaxed text-stone">
                Wave, Orange Money ou espèces au chauffeur. Pour les entreprises, facturation avec virement possible.
              </p>
            </details>

            {/* Question 3 */}
            <details className="border-t border-ink/8 py-5.5">
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 text-[17px] font-medium">
                Combien de valises puis-je emporter ?
                <Plus className="faq-icon size-4.5 flex-none text-gold transition-transform" aria-hidden="true" />
              </summary>
              <p className="mt-3.5 max-w-[640px] text-base leading-relaxed text-stone">
                Jusqu&apos;à 6 grandes valises et les bagages à main correspondants. Aucun supplément bagage. Au-delà, dites-le nous : nous adaptons.
              </p>
            </details>

            {/* Question 4 */}
            <details className="border-t border-ink/8 py-5.5">
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 text-[17px] font-medium">
                Puis-je réserver pour plusieurs jours ?
                <Plus className="faq-icon size-4.5 flex-none text-gold transition-transform" aria-hidden="true" />
              </summary>
              <p className="mt-3.5 max-w-[640px] text-base leading-relaxed text-stone">
                Oui. Mise à disposition à la journée ou circuit sur plusieurs jours, avec le même chauffeur du début à la fin.
              </p>
            </details>

            {/* Question 5 */}
            <details className="border-t border-ink/8 py-5.5">
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 text-[17px] font-medium">
                Puis-je annuler ma réservation ?
                <Plus className="faq-icon size-4.5 flex-none text-gold transition-transform" aria-hidden="true" />
              </summary>
              <p className="mt-3.5 max-w-[640px] text-base leading-relaxed text-stone">
                Annulation gratuite jusqu&apos;à 12 heures avant le départ. Aucun prépaiement n&apos;est exigé pour bloquer un créneau.
              </p>
            </details>

            {/* Question 6 */}
            <details className="border-t border-b border-ink/8 py-5.5">
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 text-[17px] font-medium">
                Intervenez-vous en dehors de Dakar ?
                <Plus className="faq-icon size-4.5 flex-none text-gold transition-transform" aria-hidden="true" />
              </summary>
              <p className="mt-3.5 max-w-[640px] text-base leading-relaxed text-stone">
                Partout au Sénégal : Saly, Mbour, Somone, Saint-Louis, Lac Rose, Sine Saloum, Touba, et toute destination sur devis.
              </p>
            </details>
          </div>
        </section>
      </main>

      {/* =========================================================================
          11. PIED DE PAGE / FOOTER
         ========================================================================= */}
      <footer className="border-t border-white/8 bg-ink py-[clamp(56px,7vw,96px)]">
        <div className="mx-auto w-full max-w-[1200px] px-6">
          <div>
            <div className="mb-3.5">
              <div className="flex items-center gap-2.5 text-white">
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
                    Chauffeur privé
                  </span>
                </span>
              </div>
            </div>
            <p className="text-base text-mist">
              Arrivez sereinement. Partout au Sénégal.
            </p>
          </div>

          {/* Espace réservé pour la barre mobile */}
          <div className="h-16 min-[821px]:hidden" />
        </div>
      </footer>

      {/* =========================================================================
          12. BARRE FIXE CTA MOBILE (affichée uniquement sur mobile/tablette)
         ========================================================================= */}
      <div
        className="fixed inset-x-0 bottom-0 z-60 flex border-t border-white/8 bg-ink px-4 py-3 transition-all duration-300 min-[821px]:hidden"
        style={{
          transform: showMobileCta ? "translateY(0)" : "translateY(100%)",
          opacity: showMobileCta ? 1 : 0,
          pointerEvents: showMobileCta ? "auto" : "none",
        }}
      >
        <a
          href={defaultWaLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-13 flex-1 items-center justify-center gap-2 rounded-full bg-gold text-[15px] font-semibold text-ink shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
        >
          <MessageCircle className="size-[17px] text-whatsapp" aria-hidden="true" />
          Réserver via WhatsApp
        </a>
      </div>
    </div>
  );
}
