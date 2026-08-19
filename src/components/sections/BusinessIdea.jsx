import SectionHeading from "../shared/SectionHeading";
import Reveal from "../shared/Reveal";

const items = [
  {
    n: "01",
    title: "Problem",
    body: "The niche perfume market is split between two extremes: original, high-quality niche houses priced at $300 and above, and cheap niche-styled brands that cut corners on oil quality to compete on price. There is no middle ground offering real craftsmanship without exploitation.",
  },
  {
    n: "02",
    title: "Solution",
    body: "Marcus Aurelius breaks that binary with exclusive, non-derivative blends, carefully selected oils, and fragrances engineered to be magnetic through composition alone — without relying on banned or synthetic pheromone additives.",
  },
  {
    n: "03",
    title: "Unique Value Proposition",
    body: "This is not a perfume made to please everyone, and it is not meant to be wearable by everyone. That exclusivity is the point: a selective fragrance built for a defined identity, not a mass-market crowd-pleaser.",
  },
  {
    n: "04",
    title: "Target Customers",
    body: "People who want distinction, not just a pleasant scent — buyers looking for individuality, a story, a persona, and quiet confidence before they are looking for a smell.",
  },
];

/** Thin gold rules that extend into the corners of a card on hover. */
function Corners() {
  const base =
    "pointer-events-none absolute w-5 h-5 border-gold transition-all duration-700 opacity-0 group-hover:opacity-100";
  return (
    <span aria-hidden="true">
      <span className={`${base} top-0 left-0 border-t border-l -translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0`} />
      <span className={`${base} top-0 right-0 border-t border-r translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0`} />
      <span className={`${base} bottom-0 left-0 border-b border-l -translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0`} />
      <span className={`${base} bottom-0 right-0 border-b border-r translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0`} />
    </span>
  );
}

export default function BusinessIdea() {
  return (
    <section id="business-idea" className="py-28 md:py-40 px-5 bg-ink">
      <div className="max-w-5xl mx-auto">
        <SectionHeading id="business-idea" eyebrow="Why We Exist" title="The Business Idea" />

        <Reveal stagger className="grid md:grid-cols-2 gap-6 md:gap-8">
          {items.map((item) => (
            <div
              key={item.title}
              className="group relative border border-gold/20 p-7 md:p-10 transition-colors duration-700 hover:border-gold/45"
            >
              <Corners />
              <div className="flex items-baseline gap-4 mb-4">
                <span className="font-display text-3xl md:text-4xl text-gold/45 group-hover:text-gold/70 transition-colors duration-700 tabular-nums">
                  {item.n}
                </span>
                <h3 className="font-display text-base md:text-lg tracking-[0.18em] uppercase text-gold">
                  {item.title}
                </h3>
              </div>
              <p className="font-body text-base md:text-lg leading-relaxed text-cream-dim">
                {item.body}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
