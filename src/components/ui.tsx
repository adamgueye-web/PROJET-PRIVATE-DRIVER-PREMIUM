import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1200px] px-6 ${className}`}>
      {children}
    </div>
  );
}

/** Sur-titre en capitales : doré sur fond sombre, terracotta sur fond crème. */
export function Eyebrow({
  children,
  tone = "gold",
}: {
  children: ReactNode;
  tone?: "gold" | "terracotta";
}) {
  return (
    <p
      className={`mb-4 text-xs font-medium tracking-[0.14em] uppercase ${
        tone === "gold" ? "text-gold" : "text-terracotta"
      }`}
    >
      {children}
    </p>
  );
}

export function SectionTitle({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`font-display text-[clamp(28px,3.4vw,44px)] leading-[1.1] font-semibold tracking-[-0.02em] ${className}`}
    >
      {children}
    </h2>
  );
}

/** Bouton doré principal, en pilule. */
export function GoldButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex h-14 items-center justify-center gap-2.5 rounded-full bg-gold px-8 text-base font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-gold-dark ${className}`}
    >
      {children}
    </a>
  );
}

/** Aplat rayé qui tient la place d'une photo à venir. */
export function PhotoSlot({
  label,
  tone = "light",
  className = "",
}: {
  label: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div
      className={`grid place-items-center p-3 text-center font-mono text-[11px] ${
        tone === "light" ? "hatch-light text-stone" : "hatch-dark text-mist"
      } ${className}`}
    >
      {label}
    </div>
  );
}
