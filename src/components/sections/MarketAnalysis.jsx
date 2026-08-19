import SectionHeading from "../shared/SectionHeading";
import Reveal from "../shared/Reveal";

/** Typographic emphasis for figures already present in the copy. */
function Fig({ children }) {
  return (
    <span className="font-display text-gold text-[1.25em] leading-none tracking-[0.02em] tabular-nums">
      {children}
    </span>
  );
}

const markets = [
  {
    label: "Global",
    body: (
      <>
        The global perfume market is valued at roughly <Fig>$60–70B</Fig> in 2026. Within it, the
        niche fragrance segment is the fastest-growing category — projected to reach approximately{" "}
        <Fig>$4.85B</Fig> by 2026, growing at around <Fig>9.1%</Fig> annually versus roughly 2.7% for
        the mass market. Consumer research shows about <Fig>62%</Fig> of buyers prefer niche
        fragrances over mass-market products, and premium gifting accounts for nearly half of niche
        demand. Key global competitors include Maison Francis Kurkdjian, Creed, Xerjoff, and Amouage.
      </>
    ),
  },
  {
    label: "MENA / Regional",
    body: (
      <>
        The Middle East perfume market is valued at roughly <Fig>$4B</Fig> in 2026 and is projected to
        grow at approximately <Fig>7.5%</Fig> annually. Fragrance is deeply embedded in the
        region&rsquo;s culture and hospitality traditions, and regional fragrance sales are growing at
        roughly <Fig>11%</Fig> annually — with oud-based compositions growing over <Fig>20%</Fig>{" "}
        year-over-year. Leading regional players include Ajmal, Rasasi, and Swiss Arabian. The
        opportunity lies in the gap between traditional oud-heavy fragrances and Western-style niche
        perfumes — a space Marcus Aurelius occupies directly through blends like Romeo di Roma.
      </>
    ),
  },
  {
    label: "Jordan / Local",
    body: (
      <>
        Jordan&rsquo;s fragrance market shows rising demand for scents rooted in regional identity.
        Amman itself has a dense concentration of perfume retail. Local competitors range from budget
        domestic brands offering imitation scents to international niche distributors (like
        Scenti/Samco Trading, carrying brands such as Nishane) selling at premium import prices. The
        gap: no locally designed and produced brand currently competes at true international niche
        quality and identity — which is exactly the space Marcus Aurelius is built to fill.
      </>
    ),
  },
];

export default function MarketAnalysis() {
  return (
    <section id="market-analysis" className="py-28 md:py-40 px-5 bg-ink">
      <div className="max-w-6xl mx-auto">
        <SectionHeading id="market-analysis" eyebrow="Where We Compete" title="Market Analysis" />

        <Reveal stagger className="grid md:grid-cols-3 gap-6 md:gap-8">
          {markets.map((m, i) => (
            <div
              key={m.label}
              className="group relative border-t-2 border-gold/40 pt-6 md:pt-8 transition-colors duration-700 hover:border-gold"
            >
              <div className="flex items-baseline gap-3 mb-5">
                <span className="font-display text-xs tracking-[0.3em] text-gold/80 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-sm md:text-base tracking-[0.2em] uppercase text-cream">
                  {m.label}
                </h3>
              </div>
              <p className="font-body text-base md:text-lg text-cream-dim leading-[1.85]">{m.body}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
