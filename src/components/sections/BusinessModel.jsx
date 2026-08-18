import SectionHeading from "../shared/SectionHeading";
import Reveal from "../shared/Reveal";

export default function BusinessModel() {
  return (
    <section id="business-model" className="py-28 md:py-40 px-5 bg-ink">
      <div className="max-w-3xl mx-auto text-center">
        <SectionHeading id="business-model" eyebrow="How We Sell" title="Business Model" />

        <Reveal stagger className="flex flex-col items-center">
          <p className="font-display text-3xl md:text-5xl lg:text-6xl uppercase tracking-[0.06em] text-gold leading-[1.1] mb-3">
            Direct&#8209;to&#8209;Consumer
          </p>
          <span aria-hidden="true" className="block w-20 h-px bg-gold/40 mb-9" />

          <p className="font-body text-lg md:text-xl leading-relaxed text-cream-dim">
            Marcus Aurelius operates on a{" "}
            <span className="text-cream">Direct-to-Consumer (D2C)</span> model — selling directly to
            customers through its own website and social channels, without intermediaries in the
            initial phase. This preserves full control over the customer experience, from packaging
            to communication, and protects the exclusivity the brand is built on. Releases are
            produced in limited batches to reinforce demand and maintain brand value.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
