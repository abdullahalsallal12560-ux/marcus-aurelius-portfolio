import SectionHeading from "../shared/SectionHeading";
import Reveal from "../shared/Reveal";
import { GreekKey } from "../shared/Motifs";

export default function RevenueStreams() {
  return (
    <section id="revenue-streams" className="py-28 md:py-40 px-5 bg-ink-soft">
      <div className="max-w-3xl mx-auto">
        <SectionHeading id="revenue-streams" eyebrow="How We Earn" title="Revenue Streams" />

        {/* Intentionally held: this section's content is still being confirmed by
            the brand. Presented as a deliberate editorial hold rather than an
            empty box, so it reads as considered in a static screenshot.
            TODO: Revenue Streams content pending confirmation */}
        <Reveal
          stagger
          className="flex flex-col items-center text-center border border-gold/20 px-8 py-16 md:py-20"
        >
          <GreekKey className="w-40 text-gold/55 mb-8" />
          <p className="font-script text-3xl md:text-4xl text-gold-soft mb-4">In development</p>
          <p className="font-display text-xs md:text-[13px] tracking-[0.32em] uppercase text-cream-dim/85 max-w-sm leading-relaxed">
            This section is being finalised with the brand
          </p>
          <GreekKey className="w-40 text-gold/55 mt-8" />
        </Reveal>
      </div>
    </section>
  );
}
