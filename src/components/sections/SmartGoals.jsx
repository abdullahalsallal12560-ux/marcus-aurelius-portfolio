import SectionHeading from "../shared/SectionHeading";
import Reveal from "../shared/Reveal";

const goals = [
  {
    horizon: "6 months",
    body: "Launch the online store and complete the first real sale within 6 months, including final photography, product assembly, and activating sales channels.",
  },
  {
    horizon: "2 months",
    body: "Complete comprehensive market research — competitor analysis, target customer behavior, and final pricing strategy — within 2 months, before going to market.",
  },
  {
    horizon: "6 months",
    body: "Reach 1,000 engaged social media followers within 6 months, as a customer base foundation ahead of launch.",
  },
  {
    horizon: "3 months",
    body: "Achieve the first 50 sales within 3 months of launch, as an early signal of market acceptance.",
  },
];

export default function SmartGoals() {
  return (
    <section id="smart-goals" className="py-28 md:py-40 px-5 bg-ink-soft">
      <div className="max-w-5xl mx-auto">
        <SectionHeading id="smart-goals" eyebrow="What We're Measuring" title="SMART Goals" />

        <Reveal stagger className="grid sm:grid-cols-2 gap-px bg-gold/15">
          {goals.map((g, i) => (
            <div
              key={i}
              className="group relative bg-ink-soft p-8 md:p-10 transition-colors duration-700 hover:bg-ink"
            >
              <div className="flex items-baseline justify-between mb-5">
                <span className="font-display text-4xl md:text-6xl text-gold/42 group-hover:text-gold/70 transition-colors duration-700 tabular-nums leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-xs md:text-[13px] tracking-[0.28em] uppercase text-gold/90 border border-gold/45 px-3 py-1.5">
                  {g.horizon}
                </span>
              </div>
              <p className="font-body text-base md:text-lg text-cream-dim leading-relaxed">{g.body}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
