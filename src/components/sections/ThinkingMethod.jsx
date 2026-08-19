import SectionHeading from "../shared/SectionHeading";
import Reveal from "../shared/Reveal";
import useReveal from "../../hooks/useReveal";

const steps = [
  { n: "01", title: "Discover", body: "Identifying the real gap in the market: the space between overpriced originality and cheap imitation." },
  { n: "02", title: "Define", body: "Defining the identity of each fragrance beyond “a nice smell”: a persona, a story, a place." },
  { n: "03", title: "Design", body: "Designing the scent composition and the visual identity together, so neither feels separate from the other." },
  { n: "04", title: "Develop", body: "Up to two years of iterative formula development to get every note exactly right." },
  { n: "05", title: "Deploy", body: "A careful, unrushed launch. Nothing reaches the public before it has been reviewed and refined." },
  { n: "06", title: "Optimize", body: "Continuous refinement, down to how long a single social media post takes to get right: four to five days." },
];

export default function ThinkingMethod() {
  const [railRef, railVisible] = useReveal({ threshold: 0.05 });

  return (
    <section id="thinking-method" className="py-28 md:py-40 px-5 bg-ink-soft">
      <div className="max-w-3xl mx-auto">
        <SectionHeading id="thinking-method" eyebrow="How We Work" title="Thinking Method" />

        <div ref={railRef} className="relative">
          {/* the spine, drawing itself downward as the section is read */}
          <span
            aria-hidden="true"
            className="absolute left-[1.15rem] md:left-[2.15rem] top-2 bottom-2 w-px bg-gradient-to-b from-gold/50 via-gold/30 to-transparent origin-top transition-transform duration-[2000ms] ease-out"
            style={{ transform: `scaleY(${railVisible ? 1 : 0})` }}
          />

          <Reveal stagger className="flex flex-col">
            {steps.map((s) => (
              <div
                key={s.n}
                className="group relative grid grid-cols-[2.4rem_1fr] md:grid-cols-[4.4rem_1fr] gap-5 md:gap-8 pb-10 md:pb-14 last:pb-0"
              >
                <div className="relative flex justify-start">
                  <span className="relative z-10 flex items-center justify-center w-[2.3rem] h-[2.3rem] md:w-[4.3rem] md:h-[4.3rem] rounded-full bg-ink-soft border border-gold/30 group-hover:border-gold transition-colors duration-700">
                    <span className="font-display text-xs md:text-lg text-gold/70 group-hover:text-gold transition-colors duration-700 tabular-nums">
                      {s.n}
                    </span>
                  </span>
                </div>

                <div className="pt-1 md:pt-4">
                  <h3 className="font-display text-lg md:text-2xl tracking-[0.16em] uppercase text-cream mb-2">
                    {s.title}
                  </h3>
                  <p className="font-body text-base md:text-lg text-cream-dim leading-relaxed max-w-xl">
                    {s.body}
                  </p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
