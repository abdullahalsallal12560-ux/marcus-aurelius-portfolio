import SectionHeading from "../shared/SectionHeading";
import Reveal from "../shared/Reveal";

const values = [
  { n: "01", title: "Precision", body: "Every detail is reviewed multiple times before release, without rushing." },
  { n: "02", title: "Authenticity", body: "No imitation, no cutting corners. Every fragrance is an original blend." },
  { n: "03", title: "Exclusivity", body: "Not for everyone, by design. Built for those who can carry a strong identity." },
  { n: "04", title: "Patience over Speed", body: "Time is treated as an investment, not an obstacle." },
  {
    n: "05",
    title: "Confidence & Pride",
    body: "The brand sells a feeling of distinction, and that feeling shows in every decision, from product to marketing.",
  },
];

export default function CoreValues() {
  return (
    <section id="core-values" className="py-28 md:py-40 px-5 bg-ink-soft">
      <div className="max-w-5xl mx-auto">
        <SectionHeading id="core-values" eyebrow="What We Stand For" title="Core Values" />

        <Reveal stagger className="flex flex-col">
          {values.map((v) => (
            <div
              key={v.n}
              className="group grid grid-cols-[3.5rem_1fr] md:grid-cols-[8rem_16rem_1fr] items-baseline gap-x-5 gap-y-2 py-7 md:py-9 border-t border-gold/15 transition-colors duration-700 hover:border-gold/40"
            >
              <span className="font-display text-3xl md:text-6xl text-gold/45 group-hover:text-gold/75 transition-colors duration-700 tabular-nums leading-none">
                {v.n}
              </span>
              <h3 className="font-display text-base md:text-2xl tracking-[0.14em] uppercase text-cream col-start-2">
                {v.title}
              </h3>
              <p className="font-body text-base md:text-lg text-cream-dim leading-relaxed col-start-2 md:col-start-3">
                {v.body}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
