import SectionHeading from "../shared/SectionHeading";
import Reveal from "../shared/Reveal";
import { BustMark, GreekKey } from "../shared/Motifs";

const digitalSwatches = [
  { hex: "#111111", name: "Ink", className: "bg-ink" },
  { hex: "#F5F0E8", name: "Cream", className: "bg-cream" },
  { hex: "#C9A25C", name: "Gold", className: "bg-gold" },
];

const physicalSwatches = [
  { hex: "#CBB08A", name: "Tan", className: "bg-tan" },
  { hex: "#8A6A3C", name: "Bronze", className: "bg-bronze" },
  { hex: "#E0C48D", name: "Gilt", className: "bg-gold-soft" },
];

function Swatches({ items }) {
  return (
    <div className="flex justify-center gap-3 mt-7">
      {items.map((s) => (
        <div key={s.hex} className="flex flex-col items-center gap-2">
          <span
            className={`block w-12 h-12 md:w-14 md:h-14 rounded-full border border-cream/15 ${s.className}`}
          />
          <span className="font-display text-[8px] md:text-[9px] tracking-[0.2em] uppercase text-cream-dim/70">
            {s.name}
          </span>
          <span className="font-body text-[10px] text-cream-dim/45 tabular-nums">{s.hex}</span>
        </div>
      ))}
    </div>
  );
}

export default function BrandIdentity() {
  return (
    <section id="brand-identity" className="py-28 md:py-40 px-5 bg-ink">
      <div className="max-w-5xl mx-auto">
        <SectionHeading id="brand-identity" eyebrow="How We Present" title="Brand Identity" />

        <div className="grid md:grid-cols-2 gap-8 md:gap-10 mb-20">
          <Reveal variant="left" className="border border-gold/25 bg-black/40 p-8 md:p-10 text-center">
            <h3 className="font-display text-lg tracking-[0.2em] uppercase text-cream mb-4">
              Digital Identity
            </h3>
            <p className="font-body text-cream-dim leading-relaxed">
              Black background, cream text, muted gold accents. Used for the website, social media,
              and all online communication. Chosen to convey strength and quiet confidence without
              visual noise — the fragrance doesn&rsquo;t need loud colors to prove itself.
            </p>
            <Swatches items={digitalSwatches} />
          </Reveal>

          <Reveal
            variant="right"
            className="border border-bronze/40 p-8 md:p-10 text-center"
            style={{ background: "linear-gradient(160deg, #3a2c18, #201808)" }}
          >
            <h3 className="font-display text-lg tracking-[0.2em] uppercase text-cream mb-4">
              Physical Identity
            </h3>
            <p className="font-body text-cream-dim leading-relaxed">
              Tan / bronze tones on packaging and labels. Chosen to evoke the warmth of Roman stone,
              marble, and aged bronze — a different emotional register for the moment the customer
              physically holds the product.
            </p>
            <Swatches items={physicalSwatches} />
          </Reveal>
        </div>

        <Reveal stagger className="flex flex-col items-center gap-7">
          <BustMark className="w-12 h-14 text-gold" />
          <GreekKey repeat={16} className="w-64 md:w-96 h-4 text-gold/45" />
          <p className="font-display text-cream text-xl md:text-2xl tracking-wide">
            <span className="uppercase">Marcus Aurelius</span>{" "}
            <span className="font-script text-gold-soft normal-case">Perfumes</span>
          </p>
          <p className="font-body text-sm md:text-base text-cream-dim/70 max-w-lg text-center leading-relaxed">
            The bust mark, the Greek meander border, and the classical-serif-plus-script pairing recur
            across every touchpoint — digital and physical alike — tying the two identities together.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
