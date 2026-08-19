import SectionHeading from "../shared/SectionHeading";
import Reveal from "../shared/Reveal";

const pillars = [
  {
    title: "Marketing",
    body: "High-quality visual content across Instagram rather than broad paid advertising. Scarcity itself is a marketing tool: the waitlist, limited editions, and the brand's own tagline (“This isn't trying to impress you”) create curiosity instead of mass reach.",
  },
  {
    title: "Partnerships",
    body: "Selective, carefully chosen collaborations only: luxury and fashion-aligned voices for exposure, never third-party resale of the product itself.",
  },
  {
    title: "Technology",
    body: "The existing custom-built website (marcusscent.com) remains the sole direct sales channel. Investment goes into improving the site experience itself rather than expanding to third-party marketplaces, to preserve full control over the customer journey.",
  },
  {
    title: "Expansion",
    body: "Vertical, not horizontal. Brand-owned boutiques only, each designed as a full sensory experience rather than a shelf display, with future geographic expansion (particularly the Gulf) following the same fully-owned model.",
  },
];

export default function GrowthStrategy() {
  return (
    <section id="growth-strategy" className="py-28 md:py-40 px-5 bg-ink">
      <div className="max-w-6xl mx-auto">
        <SectionHeading id="growth-strategy" eyebrow="How We Scale" title="Growth Strategy" />

        <Reveal stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {pillars.map((p, i) => (
            <div key={p.title} className="group">
              <span
                aria-hidden="true"
                className="block h-px bg-gold/35 mb-5 origin-left transition-all duration-700 group-hover:bg-gold"
              />
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-display text-xs text-gold/75 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-sm md:text-base tracking-[0.2em] uppercase text-gold">
                  {p.title}
                </h3>
              </div>
              <p className="font-body text-base text-cream-dim leading-relaxed">{p.body}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
