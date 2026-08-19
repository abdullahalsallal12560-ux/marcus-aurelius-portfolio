import { LaurelDivider } from "./Motifs";
import Reveal from "./Reveal";
import { getSection } from "../../data/sections";

/**
 * Shared section header. `id` looks up the section's Roman numeral from the
 * central registry so the numbering and the Table of Contents stay in sync.
 */
export default function SectionHeading({ id, eyebrow, title, subtitle, align = "center" }) {
  const section = id ? getSection(id) : null;
  const centered = align !== "left";
  const alignment = centered ? "items-center text-center" : "items-start text-left";

  return (
    <Reveal stagger className={`flex flex-col ${alignment} gap-4 mb-14 md:mb-20`}>
      <div className={`flex items-center gap-3 ${centered ? "justify-center" : ""}`}>
        {section && (
          <>
            <span className="meta-label tabular-nums">
              {section.numeral}
            </span>
            <span aria-hidden="true" className="w-6 h-px bg-gold/45" />
          </>
        )}
        {eyebrow && (
          <span className="meta-label">
            {eyebrow}
          </span>
        )}
      </div>

      <h2 className="font-display text-3xl md:text-5xl lg:text-6xl tracking-[0.06em] uppercase text-cream leading-[1.08]">
        {title}
      </h2>

      <LaurelDivider className="w-40 md:w-52 h-4 text-gold/70" />

      {subtitle && (
        <p className="font-body text-base md:text-lg text-cream-dim max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
