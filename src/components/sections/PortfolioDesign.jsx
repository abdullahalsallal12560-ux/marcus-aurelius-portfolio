import SectionHeading from "../shared/SectionHeading";
import Reveal from "../shared/Reveal";
import { BustMark, GreekKey } from "../shared/Motifs";
import { useT } from "../../i18n/useLocale";

const specimens = [
  { face: "Cinzel", role: "Display: wordmark & headings", sample: "MARCVS", className: "font-display tracking-[0.1em]" },
  { face: "Playfair Display Italic", role: "Script accent: flourishes", sample: "Perfumes", className: "font-script" },
  { face: "EB Garamond", role: "Body: long-form reading", sample: "Aa", className: "font-body" },
];

export default function PortfolioDesign() {
  const t = useT();
  return (
    <section id="portfolio-design" className="py-28 md:py-40 px-5 bg-ink">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          id="portfolio-design"
          eyebrow="Design Reasoning"
          title="Portfolio Appearance &amp; Design"
        />

        <Reveal className="flex flex-col items-center gap-9 text-center mb-20">
          <BustMark className="w-11 h-13 text-gold" />

          <p className="font-body text-lg md:text-xl leading-relaxed text-cream-dim max-w-2xl">
            The dual color system exists because a brand and a product live in two different moments.
            Black and gold carry the digital first impression: a screen glanced at in seconds, where
            restraint and contrast do the work of standing out. Tan and bronze carry the physical
            unboxing moment: a slower, tactile experience where warmth and texture matter more than
            contrast. Neither palette is decorative; each is matched to how the customer is actually
            encountering the brand at that instant.
          </p>

          <GreekKey className="w-56 text-gold/55" />

          <p className="font-body text-lg md:text-xl leading-relaxed text-cream-dim max-w-2xl">
            The same logic drives the typography and the recurring motifs. The classical serif
            wordmark and the script &ldquo;Perfumes&rdquo; pairing echo the brand&rsquo;s Italian,
            Roman-influenced aesthetic without leaning on cliché. The bust mark and the Greek meander
            border repeat quietly across every section, never shouting, always present, because
            exclusivity is communicated through consistency and restraint, not volume.
          </p>
        </Reveal>

        {/* the three faces, shown rather than described */}
        <Reveal stagger className="grid sm:grid-cols-3 gap-px bg-gold/15">
          {specimens.map((s, i) => (
            <div key={s.face} className="bg-ink p-8 text-center flex flex-col items-center gap-4">
              <span className={`${s.className} text-5xl md:text-6xl text-cream leading-none`}>
                {s.sample}
              </span>
              <span aria-hidden="true" className="block w-8 h-px bg-gold/35" />
              <span className="meta-label text-gold">
                {s.face}
              </span>
              <span className="font-body text-sm text-cream-dim/85">{t.portfolioDesign.typefaces[i].role}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
