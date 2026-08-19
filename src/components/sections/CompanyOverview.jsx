import SectionHeading from "../shared/SectionHeading";
import Reveal from "../shared/Reveal";
import { BustMark } from "../shared/Motifs";
import { useT } from "../../i18n/useLocale";

/**
 * A paragraph carrying one highlighted phrase.
 *
 * The highlight is stored as the phrase itself rather than as an index or a
 * marker embedded in the string, because the phrase lands in a different
 * position in every language and a position would be wrong in two of three.
 */
function Paragraph({ text, emphasis }) {
  if (!emphasis || !text.includes(emphasis)) return <p>{text}</p>;

  const [before, ...after] = text.split(emphasis);
  return (
    <p>
      {before}
      <span className="text-cream">{emphasis}</span>
      {after.join(emphasis)}
    </p>
  );
}

export default function CompanyOverview() {
  const t = useT();

  return (
    <section id="company-overview" className="relative py-28 md:py-40 px-5 bg-ink-soft overflow-hidden">
      {/* the mark, enlarged and barely there, anchoring the founding story */}
      <BustMark
        className="pointer-events-none absolute -end-16 top-1/3 w-[26rem] h-[32rem] text-gold/[0.04] hidden lg:block"
      />

      <div className="relative max-w-4xl mx-auto">
        <SectionHeading id="company-overview" eyebrow="Who We Are" title="Company Overview" />

        <Reveal stagger className="grid sm:grid-cols-3 gap-8 mb-24">
          {t.companyOverview.facts.map((f) => (
            <div key={f.label} className="text-center border-t border-gold/30 pt-4">
              <h3 className="field-label mb-2">{f.label}</h3>
              <p className="font-body text-sm md:text-base text-cream-dim leading-relaxed">{f.value}</p>
            </div>
          ))}
        </Reveal>

        <Reveal delay={150} className="max-w-2xl mx-auto">
          <h3 className="font-script text-3xl md:text-5xl text-gold-soft text-center mb-8">
            {t.companyOverview.storyTitle}
          </h3>

          <p className="font-body text-lg md:text-xl leading-relaxed md:leading-loose text-cream-dim first-letter:font-display first-letter:text-6xl first-letter:leading-[0.85] first-letter:text-gold first-letter:me-3 first-letter:mt-1 first-letter:float-start">
            {t.companyOverview.lead}
          </p>
        </Reveal>

        {/* The site claims elsewhere that the market splits between real niche
            houses and cheap imitators who cut corners on oil quality. These
            are the figures that turn that from an accusation into a
            demonstration, so they are pulled out of the prose and set where
            they cannot be skimmed past. */}
        <Reveal stagger className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gold/15 my-14 max-w-3xl mx-auto">
          {t.companyOverview.proof.map((p) => (
            <div key={p.label} className="bg-ink-soft px-5 py-7 text-center flex flex-col gap-2">
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
          {t.companyOverview.paragraphs.map((p, i) => (
            <Paragraph key={i} text={p.text} emphasis={p.emphasis} />
          ))}

          <p className="font-body text-base text-cream-dim/70 italic border-t border-gold/20 pt-6">
            {t.companyOverview.credit}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
