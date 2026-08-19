import SectionHeading from "../shared/SectionHeading";
import Reveal from "../shared/Reveal";
import { useT } from "../../i18n/useLocale";

/** Typographic emphasis for the figures already present in the copy. */
function Fig({ children }) {
  return (
    <span className="font-display text-gold text-[1.25em] leading-none tracking-[0.02em] tabular-nums">
      {children}
    </span>
  );
}

/**
 * The figures are set in gold display type inside running body copy. Holding
 * the copy as JSX would have frozen it in English, and holding it as plain
 * text would have lost the treatment, so the figures are marked with double
 * braces in the string and rendered back out here. A marker survives
 * translation; a JSX fragment does not.
 */
function Body({ text }) {
  return (
    <>
      {text.split(/\{\{(.+?)\}\}/g).map((part, i) =>
        i % 2 === 1 ? <Fig key={i}>{part}</Fig> : part
      )}
    </>
  );
}

export default function MarketAnalysis() {
  const t = useT();

  return (
    <section id="market-analysis" className="py-28 md:py-40 px-5 bg-ink">
      <div className="max-w-6xl mx-auto">
        <SectionHeading id="market-analysis" eyebrow="Where We Compete" title="Market Analysis" />

        <Reveal stagger className="grid md:grid-cols-3 gap-6 md:gap-8">
          {t.marketAnalysis.map((m, i) => (
            <div
              key={i}
              className="group relative border-t-2 border-gold/40 pt-6 md:pt-8 transition-colors duration-700 hover:border-gold"
            >
              <div className="flex items-baseline gap-3 mb-5">
                <span className="meta-label text-gold/90 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-sm md:text-base tracking-[0.2em] uppercase text-cream">
                  {m.label}
                </h3>
              </div>
              <p className="font-body text-base md:text-lg text-cream-dim leading-[1.85]">
                <Body text={m.body} />
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
