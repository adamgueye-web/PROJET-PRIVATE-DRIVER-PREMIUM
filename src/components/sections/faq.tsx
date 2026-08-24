import { Plus } from "lucide-react";
import { Eyebrow, SectionTitle } from "@/components/ui";
import { faq } from "@/lib/site";

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-18 bg-cream py-[clamp(64px,8vw,120px)] text-ink">
      <div className="mx-auto w-full max-w-[860px] px-6">
        <Eyebrow tone="terracotta">FAQ</Eyebrow>
        <SectionTitle className="mb-10">Les questions qu&apos;on nous pose.</SectionTitle>

        {faq.map((item, i) => (
          <details
            key={item.question}
            className={`border-t border-ink/8 py-5.5 ${
              i === faq.length - 1 ? "border-b" : ""
            }`}
          >
            <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 text-[17px] font-medium">
              {item.question}
              <Plus
                className="faq-icon size-4.5 flex-none text-gold transition-transform"
                aria-hidden="true"
              />
            </summary>
            <p className="mt-3.5 max-w-[640px] text-base leading-relaxed text-stone">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
