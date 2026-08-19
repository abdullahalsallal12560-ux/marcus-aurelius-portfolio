import SectionHeading from "../shared/SectionHeading";
import Reveal from "../shared/Reveal";
import { BustMark, GreekKey } from "../shared/Motifs";

const digitalSwatches = [
  { hex: "#100E0B", name: "Ink", className: "bg-ink" },
  { hex: "#F5F0E8", name: "Cream", className: "bg-cream" },
  { hex: "#C9A25C", name: "Gold", className: "bg-gold" },
];

const physicalSwatches = [
  { hex: "#CBB08A", name: "Tan", className: "bg-tan" },
  { hex: "#8A6A3C", name: "Bronze", className: "bg-bronze" },
  { hex: "#E0C48D", name: "Gilt", className: "bg-gold-soft" },
];

// The per-pair registers documented further down the section. These are the
// same values the product cards animate to, kept here so the written identity
// and the built one cannot drift apart.
const pairs = [
  {
    name: "The Kinetic Pair",
    members: "Maximus · Maxima",
    mood: "Youth, motion, energy, a confident wildness. Cooler ground, brighter type, colour thrown across one diagonal.",
    swatches: [
      { hex: "#5E82A6", name: "Slate" },
      { hex: "#B5697C", name: "Rose" },
      { hex: "#14141B", name: "Lifted Ink" },
    ],
  },
  {
    name: "The Romantic Pair",
    members: "Romeo di Roma · Roma Juliette",
    mood: "Stillness, romantic intensity, restrained power. Deeper and warmer than the house black, and gold-forward.",
    swatches: [
      { hex: "#7A5240", name: "Oud" },
      { hex: "#A8672E", name: "Amber" },
      { hex: "#0D0A06", name: "Deep Ink" },
    ],
  },
];

function Swatches({ items }) {
  return (
    <div className="flex justify-center gap-3 mt-7">
      {items.map((s) => (
        <div key={s.hex} className="flex flex-col items-center gap-2">
          <span
            className={`block w-12 h-12 md:w-14 md:h-14 rounded-full border border-cream/15 ${s.className ?? ""}`}
            style={s.className ? undefined : { background: s.hex }}
          />
          <span className="meta-label-sm text-cream-dim text-center">
            {s.name}
          </span>
          <span className="font-body text-[13px] text-cream-dim tabular-nums">{s.hex}</span>
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
              visual noise. The fragrance doesn&rsquo;t need loud colors to prove itself.
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
              marble, and aged bronze: a different emotional register for the moment the customer
              physically holds the product.
            </p>
            <Swatches items={physicalSwatches} />
          </Reveal>
        </div>

        <Reveal className="border border-gold/25 p-8 md:p-10 mb-20">
          <h3 className="font-display text-lg tracking-[0.2em] uppercase text-cream mb-4 text-center">
            Collection Registers
          </h3>
          <p className="font-body text-base text-cream-dim leading-relaxed max-w-3xl mx-auto text-center">
            The collection is built as two pairs, and each pair carries its own visual mood inside the
            shared house identity. Maximus and Maxima are the energetic pair: youth, motion, and
            confident wildness, so their cards cool and lift, the type brightens, and colour moves
            across the panel on a diagonal. Romeo di Roma and Roma Juliette are the romantic pair:
            stillness, depth, and restrained power, so their ground goes warmer and deeper than the
            house black and the treatment leans back into gold, centred rather than directional. This
            is the same principle established fragrance houses use when a sub-collection is given its
            own visual register while the house identity stays recognisable underneath it. The black,
            cream and gold never leave: the navigation and the index rail hold that identity fixed on
            every screen, so the page always keeps its anchor.
          </p>

          <div className="grid md:grid-cols-2 gap-8 md:gap-10 mt-10">
            {pairs.map((p) => (
              <div key={p.name} className="text-center">
                <p className="font-script text-2xl text-gold-soft mb-1">{p.name}</p>
                <p className="meta-label text-gold mb-3">
                  {p.members}
                </p>
                <p className="font-body text-base text-cream-dim/90 leading-relaxed">{p.mood}</p>
                <Swatches items={p.swatches} />
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal stagger className="flex flex-col items-center gap-7">
          <BustMark className="w-12 h-14 text-gold" />
          <GreekKey className="w-64 md:w-96 text-gold/55" />
          <p className="font-display text-cream text-xl md:text-2xl tracking-wide">
            <span className="uppercase">Marcus Aurelius</span>{" "}
            <span className="font-script text-gold-soft normal-case">Perfumes</span>
          </p>
          <p className="font-body text-base text-cream-dim/85 max-w-lg text-center leading-relaxed">
            The bust mark, the Greek meander border, and the classical-serif-plus-script pairing recur
            across every touchpoint, digital and physical alike, tying the two identities together.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
