import SectionHeading from "../shared/SectionHeading";
import Reveal from "../shared/Reveal";
import { BustMark, GreekKey } from "../shared/Motifs";
import { useT } from "../../i18n/useLocale";

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
  const t = useT();
  return (
    <div className="flex justify-center gap-3 mt-7">
      {items.map((s) => (
        <div key={s.hex} className="flex flex-col items-center gap-2">
          <span
            className={`block w-12 h-12 md:w-14 md:h-14 rounded-full border border-cream/15 ${s.className ?? ""}`}
            style={s.className ? undefined : { background: s.hex }}
          />
          <span className="meta-label-sm text-cream-dim text-center">
            {t.brandIdentity.swatchNames[s.name] ?? s.name}
          </span>
          <span className="font-body text-[13px] text-cream-dim tabular-nums">{s.hex}</span>
        </div>
      ))}
    </div>
  );
}

/* A heading for one of the five things the brief names under Brand Identity.
   Set apart from the card headings below it so the five read as the structure
   of the section rather than as five more boxes. */
function GroupHeading({ children }) {
  return (
    <div className="flex items-center gap-5 mb-9">
      <span className="h-px flex-1 bg-gold/25" />
      <h3 className="font-display text-gold text-base md:text-lg tracking-[0.24em] uppercase whitespace-nowrap">
        {children}
      </h3>
      <span className="h-px flex-1 bg-gold/25" />
    </div>
  );
}

export default function BrandIdentity() {
  const t = useT();
  return (
    <section id="brand-identity" className="py-28 md:py-40 px-5 bg-ink">
      <div className="max-w-5xl mx-auto">
        <SectionHeading id="brand-identity" eyebrow="How We Present" title="Brand Identity" />

        {/* ---------------------------------------------------------- logo */}
        <GroupHeading>{t.brandIdentity.logo.title}</GroupHeading>

        <Reveal className="border border-gold/25 bg-black/40 p-8 md:p-12 mb-20">
          <div className="flex flex-col items-center gap-6 mb-10">
            <BustMark className="w-20 h-24 md:w-24 md:h-28 text-cream" />
            <p className="font-display text-cream text-2xl md:text-3xl tracking-wide text-center">
              <span className="uppercase">Marcus Aurelius</span>{" "}
              <span className="font-script text-gold-soft normal-case">Perfumes</span>
            </p>
          </div>

          <p className="font-body text-cream-dim leading-relaxed max-w-3xl mx-auto text-center mb-10">
            {t.brandIdentity.logo.body}
          </p>

          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {t.brandIdentity.logo.parts.map((part) => (
              <div key={part.name} className="text-center">
                <p className="meta-label-sm text-gold mb-3">{part.name}</p>
                <p className="font-body text-[15px] text-cream-dim/90 leading-relaxed">{part.note}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* ------------------------------------------------------- colours */}
        <GroupHeading>{t.brandIdentity.groupTitles.colours}</GroupHeading>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10 mb-20">
          <Reveal variant="left" className="border border-gold/25 bg-black/40 p-8 md:p-10 text-center">
            <h3 className="font-display text-lg tracking-[0.2em] uppercase text-cream mb-4">
              {t.brandIdentity.digital.title}
            </h3>
            <p className="font-body text-cream-dim leading-relaxed">
              {t.brandIdentity.digital.body}
            </p>
            <Swatches items={digitalSwatches} />
          </Reveal>

          <Reveal
            variant="right"
            className="border border-bronze/40 p-8 md:p-10 text-center"
            style={{ background: "linear-gradient(160deg, #3a2c18, #201808)" }}
          >
            <h3 className="font-display text-lg tracking-[0.2em] uppercase text-cream mb-4">
              {t.brandIdentity.physical.title}
            </h3>
            <p className="font-body text-cream-dim leading-relaxed">
              {t.brandIdentity.physical.body}
            </p>
            <Swatches items={physicalSwatches} />
          </Reveal>
        </div>

        {/* ---------------------------------------------------- typography */}
        <GroupHeading>{t.brandIdentity.typography.title}</GroupHeading>

        <Reveal className="border border-gold/25 p-8 md:p-10 mb-20">
          <p className="font-body text-cream-dim leading-relaxed max-w-3xl mx-auto text-center mb-10">
            {t.brandIdentity.typography.body}
          </p>

          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {t.brandIdentity.typography.faces.map((face) => (
              <div key={face.name} className="text-center">
                {/* Each specimen is set in the face it describes, so the row is
                    the evidence rather than a list of names. */}
                <p
                  className={`text-cream text-3xl md:text-4xl mb-3 ${
                    face.name === "Cinzel"
                      ? "font-display tracking-[0.12em]"
                      : face.name.startsWith("Playfair")
                        ? "font-script italic text-gold-soft"
                        : "font-body"
                  }`}
                >
                  Aa
                </p>
                <p className="meta-label-sm text-gold mb-2">{face.name}</p>
                <p className="font-body text-[15px] text-cream-dim/90 leading-relaxed">
                  {face.role}. {face.reason}
                </p>
              </div>
            ))}
          </div>

          <p className="font-body text-[15px] text-cream-dim/85 leading-relaxed max-w-3xl mx-auto text-center mt-10 pt-8 border-t border-gold/15">
            {t.brandIdentity.typography.arabic}
          </p>
        </Reveal>

        {/* ------------------------------------------------- design system */}
        <GroupHeading>{t.brandIdentity.system.title}</GroupHeading>

        <Reveal className="border border-gold/25 p-8 md:p-10 mb-20">
          <p className="font-body text-cream-dim leading-relaxed max-w-3xl mx-auto text-center mb-9">
            {t.brandIdentity.system.body}
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-8">
            {t.brandIdentity.system.layers.map((layer) => (
              <div key={layer.name} className="border-t border-gold/25 pt-4">
                <p className="meta-label-sm text-gold mb-2">{layer.name}</p>
                <p className="font-body text-[15px] text-cream-dim/90 leading-relaxed">{layer.note}</p>
              </div>
            ))}
          </div>

          <p className="font-body text-[15px] text-cream-dim/85 leading-relaxed max-w-3xl mx-auto text-center mt-9 pt-8 border-t border-gold/15">
            {t.brandIdentity.system.note}
          </p>
        </Reveal>

        {/* -------------------------------------------------- visual style */}
        <GroupHeading>{t.brandIdentity.groupTitles.visual}</GroupHeading>

        <Reveal className="border border-gold/25 p-8 md:p-10 mb-20">
          <h3 className="font-display text-lg tracking-[0.2em] uppercase text-cream mb-4 text-center">
            {t.brandIdentity.registers.title}
          </h3>
          <p className="font-body text-base text-cream-dim leading-relaxed max-w-3xl mx-auto text-center">
            {t.brandIdentity.registers.body}
          </p>

          <div className="grid md:grid-cols-2 gap-8 md:gap-10 mt-10">
            {pairs.map((p) => (
              <div key={p.name} className="text-center">
                <p className="font-script text-2xl text-gold-soft mb-1">{t.brandIdentity.pairNames[p.name] ?? p.name}</p>
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
            {t.brandIdentity.motifs}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
