"use client";

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

// Le masquage doit être posé avant la peinture, sinon le contenu clignote.
// Sur le rendu serveur il n'y a pas de DOM : on retombe sur useEffect.
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

type Phase = "visible" | "hidden" | "shown";

/**
 * Fait apparaître son contenu quand il entre dans le viewport.
 *
 * Le HTML est rendu visible par défaut : sans JavaScript, ou pour un élément
 * déjà au-dessus de la ligne de flottaison, rien n'est masqué. La transition
 * est neutralisée par `prefers-reduced-motion` (voir globals.css).
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<Phase>("visible");

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (el.getBoundingClientRect().top <= window.innerHeight * 0.85) return;
    setPhase("hidden");
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || phase !== "hidden") return;

    let timer = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        timer = window.setTimeout(() => setPhase("shown"), delay);
        observer.disconnect();
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
    };
  }, [phase, delay]);

  const revealClass =
    phase === "hidden" ? "reveal" : phase === "shown" ? "reveal reveal-shown" : "";

  return (
    <div ref={ref} className={`${revealClass} ${className}`.trim()}>
      {children}
    </div>
  );
}
