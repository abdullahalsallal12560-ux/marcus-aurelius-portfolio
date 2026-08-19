import { LaurelDivider } from "./Motifs";
import Reveal from "./Reveal";
import { getSection } from "../../data/sections";
import { useT } from "../../i18n/useLocale";

/**
 * Shared section header. `id` looks up the section's Roman numeral from the
 * central registry so the numbering and the Table of Contents stay in sync.
 */
export default function SectionHeading({ id, eyebrow, title, subtitle, align = "center" }) {
  const t = useT();
  const section = id ? getSection(id) : null;
  // props stay the fallback, so a section that has not been keyed yet still renders
  const copy = (id && t.headings[id]) || {};
  const eyebrowText = copy.eyebrow ?? eyebrow;
  const titleText = copy.title ?? title;
  const subtitleText = copy.subtitle ?? subtitle;
  const centered = align !== "left";
  const alignment = centered ? "items-center text-center" : "items-start text-start";

  return (
    <Reveal stagger className={`flex flex-col ${alignment} gap-4 mb-14 md:mb-20`}>
      <div className={`flex items-center gap-3 ${centered ? "justify-center" : ""}`}>
        {section && (
          <>
            <span className="meta-label text-gold/90 tabular-nums">
              {section.numeral}
            </span>
            <span aria-hidden="true" className="w-6 h-px bg-gold/45" />
          </>
        )}
        {eyebrowText && (
          <span className="meta-label text-gold">
            {eyebrowText}
          </span>
        )}
      </div>

      <h2 className="font-display text-3xl md:text-5xl lg:text-6xl tracking-[0.06em] uppercase text-cream leading-[1.08]">
        {titleText}
      </h2>

      <LaurelDivider className="w-40 md:w-52 h-4 text-gold/70" />

      {subtitleText && (
        <p className="font-body text-base md:text-lg text-cream-dim max-w-2xl leading-relaxed">
          {subtitleText}
        </p>
      )}
    </Reveal>
  );
}
