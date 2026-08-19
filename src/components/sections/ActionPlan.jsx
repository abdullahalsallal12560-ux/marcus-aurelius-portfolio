import SectionHeading from "../shared/SectionHeading";
import Reveal from "../shared/Reveal";
import useReveal from "../../hooks/useReveal";

const phases = [
  {
    label: "Phase 1",
    title: "Setup",
    status: "Largely complete",
    body: "Brand identity, all four fragrances production-ready with finalized packaging, live website (marcusscent.com), and active Instagram presence. Remaining: final photography and asset consolidation before official launch.",
  },
  {
    label: "Phase 2",
    title: "Launch",
    status: "Next 6 months",
    body: "Complete market research (first 2 months), officially launch online sales (currently soft-launch/waitlist only), run a structured social media campaign, target the first 50 sales within 3 months of launch, and build early placement partnerships with select niche retailers.",
  },
  {
    label: "Phase 3",
    title: "Growth",
    status: "Post-validation",
    body: "Expand through brand-owned boutiques only — no third-party retail placement, to protect the exclusivity of the brand experience. Expand the product line, build a dedicated marketing and logistics team, and explore limited-edition creative collaborations.",
  },
];

export default function ActionPlan() {
  const [railRef, railVisible] = useReveal({ threshold: 0.2 });

  return (
    <section id="action-plan" className="py-28 md:py-40 px-5 bg-ink">
      <div className="max-w-5xl mx-auto">
        <SectionHeading id="action-plan" eyebrow="How We Get There" title="Action Plan" />

        <div ref={railRef} className="grid md:grid-cols-3 gap-12 md:gap-10 relative">
          {/* connector draws left to right as the plan comes into view */}
          <span
            aria-hidden="true"
            className={`hidden md:block absolute top-[0.4rem] left-0 right-0 h-px bg-gradient-to-r from-gold/50 via-gold/40 to-transparent draw-line ${
              railVisible ? "is-visible" : ""
            }`}
          />

          {phases.map((p, i) => (
            <Reveal key={p.label} delay={i * 160} className="relative flex flex-col">
              <span
                aria-hidden="true"
                className="hidden md:block w-[0.85rem] h-[0.85rem] rounded-full bg-gold ring-4 ring-ink mb-8"
              />
              <span className="font-display text-xs tracking-[0.3em] uppercase text-gold/80 mb-3">
                {p.label}
              </span>
              <h3 className="font-display text-2xl md:text-3xl tracking-[0.1em] uppercase text-cream mb-2">
                {p.title}
              </h3>
              <span className="font-script text-lg text-gold-soft mb-5">{p.status}</span>
              <p className="font-body text-base md:text-lg text-cream-dim leading-relaxed">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
