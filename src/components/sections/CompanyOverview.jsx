import SectionHeading from "../shared/SectionHeading";
import Reveal from "../shared/Reveal";
import { BustMark } from "../shared/Motifs";

const facts = [
  { label: "Industry", value: "Luxury niche fragrance (Eau de Parfum)" },
  {
    label: "Services",
    value:
      "Design and production of exclusive, limited-batch fragrances, each with its own visual identity and narrative: Maxima, Maximus, Romeo di Roma, Roma Juliette",
  },
  { label: "Location", value: "Amman, Jordan. Online-first, no physical retail location at present" },
];

// The section elsewhere claims the market splits between real niche houses and
// cheap imitators who cut corners on oil quality. These are the figures that
// turn that from an accusation into a demonstration, so they are pulled out of
// the prose and set where they cannot be skimmed past.
const proof = [
  { figure: "2 years", label: "Before a single bottle was sold" },
  { figure: "30+", label: "Formulations tried and rejected" },
  { figure: "40 days", label: "For one serious trial to finish" },
  { figure: "1,800 JOD", label: "Spent before any revenue existed" },
];

export default function CompanyOverview() {
  return (
    <section id="company-overview" className="relative py-28 md:py-40 px-5 bg-ink-soft overflow-hidden">
      {/* the mark, enlarged and barely there, anchoring the founding story */}
      <BustMark
        className="pointer-events-none absolute -end-16 top-1/3 w-[26rem] h-[32rem] text-gold/[0.04] hidden lg:block"
      />

      <div className="relative max-w-4xl mx-auto">
        <SectionHeading id="company-overview" eyebrow="Who We Are" title="Company Overview" />

        <Reveal stagger className="grid sm:grid-cols-3 gap-8 mb-24">
          {facts.map((f) => (
            <div key={f.label} className="text-center border-t border-gold/30 pt-4">
              <h3 className="field-label mb-2">{f.label}</h3>
              <p className="font-body text-sm md:text-base text-cream-dim leading-relaxed">{f.value}</p>
            </div>
          ))}
        </Reveal>

        <Reveal delay={150} className="max-w-2xl mx-auto">
          <h3 className="font-script text-3xl md:text-5xl text-gold-soft text-center mb-8">
            The Founding Story
          </h3>

          <p className="font-body text-lg md:text-xl leading-relaxed md:leading-loose text-cream-dim first-letter:font-display first-letter:text-6xl first-letter:leading-[0.85] first-letter:text-gold first-letter:me-3 first-letter:mt-1 first-letter:float-start">
            It began as a coffee-shop conversation between two friends: why does no fragrance carry
            these particular notes, and why not make one ourselves? There was no brand in
            mind. There was curiosity, and a rooftop.
          </p>
        </Reveal>

        <Reveal stagger className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gold/15 my-14 max-w-3xl mx-auto">
          {proof.map((p) => (
            <div key={p.figure} className="bg-ink-soft px-5 py-7 text-center flex flex-col gap-2">
              <span className="font-display text-2xl md:text-[1.75rem] text-gold leading-none tabular-nums">
                {p.figure}
              </span>
              <span className="font-body text-[13px] md:text-sm text-cream-dim/85 leading-snug">
                {p.label}
              </span>
            </div>
          ))}
        </Reveal>

        <Reveal
          delay={100}
          className="max-w-2xl mx-auto flex flex-col gap-6 font-body text-lg md:text-xl leading-relaxed md:leading-loose text-cream-dim"
        >
          <p>
            The manufacturing videos were discouraging: industrial machines the size of rooms.
            Then came the discovery that the houses actually worth their price still work by dropper,
            blend by hand, and leave a composition to macerate somewhere naturally cool. Simpler. And
            far more expensive.
          </p>

          <p>
            The first year went on finding a source. When one was found, European and reached
            through a Swiss intermediary, the first order of oils cost 500 dinars, and the
            blending was done in drinking glasses.
          </p>

          <p>
            More than thirty formulations followed. One smelled good but sat oily on the skin. One
            burned the nose. One was gone by midday. One smelled like everything already on the
            shelf. A serious trial takes forty days: a week frozen, then thirty days in darkness at a
            steady 16 to 19&deg;C. The rooftop provided that for nothing.
          </p>

          <p>
            The second year cost 1,300 dinars: new notes, dyes, better equipment, and alcohol
            rectified to <span className="text-cream">100%</span> where most perfumery, French houses
            included, works at 96%. A litre of it costs ten times as much.
          </p>

          <p>
            Specialists advised starting with cheap oils and buying the good ones once the formula
            worked. <span className="text-cream">That advice was refused.</span> The same note from a
            cheaper source is a different composition made a different way, and it shows in how long
            it lasts and in how it sits on the nose of someone wearing it all day. A compromise made
            at the start is not undone later.
          </p>

          <p>
            Romeo di Roma came out of an accident. Headphones on while his friend slept, a throwaway
            song playing, and one word in it stuck: pineapple. A note the niche houses use often, and
            one already sitting among the materials. It went in with caramel and vanilla.
          </p>

          <p>
            He wore it into the street. The compliments that came back were not expected.{" "}
            <span className="text-cream">Only then did it become a brand.</span>
          </p>

          <p className="font-body text-base text-cream-dim/70 italic border-t border-gold/20 pt-6">
            The rooftop belonged to the friend from that first conversation, who kept him company
            through most of it.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
