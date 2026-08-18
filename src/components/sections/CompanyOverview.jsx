import SectionHeading from "../shared/SectionHeading";
import Reveal from "../shared/Reveal";
import { BustMark } from "../shared/Motifs";

const facts = [
  { label: "Industry", value: "Luxury niche fragrance (Eau de Parfum)" },
  {
    label: "Services",
    value:
      "Design and production of exclusive, limited-batch fragrances, each with its own visual identity and narrative — Maxima, Maximus, Romeo di Roma, Roma Juliette",
  },
  { label: "Location", value: "Amman, Jordan — online-first, no physical retail location at present" },
];

export default function CompanyOverview() {
  return (
    <section id="company-overview" className="relative py-28 md:py-40 px-5 bg-ink-soft overflow-hidden">
      {/* the mark, enlarged and barely there, anchoring the founding story */}
      <BustMark
        className="pointer-events-none absolute -right-16 top-1/3 w-[26rem] h-[32rem] text-gold/[0.04] hidden lg:block"
      />

      <div className="relative max-w-4xl mx-auto">
        <SectionHeading id="company-overview" eyebrow="Who We Are" title="Company Overview" />

        <Reveal stagger className="grid sm:grid-cols-3 gap-8 mb-24">
          {facts.map((f) => (
            <div key={f.label} className="text-center border-t border-gold/30 pt-4">
              <h3 className="font-display text-xs tracking-[0.25em] uppercase text-gold mb-2">
                {f.label}
              </h3>
              <p className="font-body text-sm md:text-base text-cream-dim leading-relaxed">{f.value}</p>
            </div>
          ))}
        </Reveal>

        <Reveal delay={150} className="max-w-2xl mx-auto">
          <h3 className="font-script text-3xl md:text-5xl text-gold-soft text-center mb-8">
            The Founding Story
          </h3>
          <p className="font-body text-lg md:text-xl leading-relaxed md:leading-loose text-cream-dim first-letter:font-display first-letter:text-6xl first-letter:leading-[0.85] first-letter:text-gold first-letter:mr-3 first-letter:mt-1 first-letter:float-left">
            The brand began with an ordinary coffee shop conversation between two friends about Dior
            Sauvage — how, despite its price, it had become so widely imitated that it lost its sense
            of distinction. Drawn to an Italian aesthetic they both loved, they decided to create a
            fragrance meant only for themselves: something heavy in character but light on the nose,
            built around caramel, sugar, and pineapple notes. What started as trial and error became a
            formula they actually wore — and for the first time, despite years of wearing other
            people&rsquo;s perfumes, they received genuine, unprompted compliments on a scent they had
            made. That reaction became the seed of a real brand: one built on rarity, strength, and
            quiet confidence.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
