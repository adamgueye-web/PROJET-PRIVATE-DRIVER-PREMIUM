"use client";

import { useEffect, useState } from "react";
import { Brand } from "@/components/brand";
import { defaultWaText, navLinks, waLink } from "@/lib/site";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-40 border-b border-white/8 backdrop-blur-[14px] transition-colors"
      style={{
        background: scrolled ? "rgba(10,23,33,0.92)" : "rgba(10,23,33,0.55)",
      }}
    >
      <div className="mx-auto flex h-18 max-w-[1200px] items-center justify-between gap-6 px-6">
        <Brand />

        {/* La navigation cède la place à la barre d'action fixe sur mobile. */}
        <nav className="hidden items-center gap-8 min-[821px]:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] text-mist transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={waLink(defaultWaText)}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden min-h-12 items-center rounded-full bg-gold px-6.5 py-[15px] text-[15px] font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-gold-dark min-[821px]:inline-flex"
        >
          Réserver
        </a>
      </div>
    </header>
  );
}
