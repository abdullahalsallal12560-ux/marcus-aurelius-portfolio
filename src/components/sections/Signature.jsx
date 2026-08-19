import Reveal from "../shared/Reveal";
import { GreekKey } from "../shared/Motifs";
import { asset } from "../../utils/asset";

/**
 * The closing signature.
 *
 * Deliberately outside the seventeen numbered portfolio sections: it carries
 * no Roman numeral, is absent from SECTIONS, and so never appears in the
 * Contents rail or the Contents overlay — the brief requires exactly
 * seventeen, and this is not one of them.
 *
 * A split: the portrait holds one half outright, the attribution the other.
 * The photograph is already lit for this palette, so nothing is laid over it.
 */
export default function Signature() {
  return (
    <section
      id="signature"
      aria-label="Site credit"
      className="relative bg-ink border-t border-gold/20"
    >
      <div className="grid md:grid-cols-2 items-stretch">
        {/* ---------- portrait ---------- */}
        <Reveal variant="left" className="relative min-h-[62vh] md:min-h-[78vh]">
          <img
            src={asset("/images/brand/abdullah-portrait.jpg")}
            alt="Abdullah Al-Sallal"
            className="absolute inset-0 w-full h-full object-cover object-[50%_15%]"
            loading="lazy"
            decoding="async"
          />
          {/* only where the two halves meet, so the edge dissolves into the
              page instead of ending on a hard seam */}
          <div
            aria-hidden="true"
            className="absolute inset-y-0 right-0 w-24 pointer-events-none hidden md:block bg-gradient-to-r from-transparent to-ink"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-24 pointer-events-none md:hidden bg-gradient-to-b from-transparent to-ink"
          />
        </Reveal>

        {/* ---------- attribution ---------- */}
        <Reveal
          stagger
          className="flex flex-col items-center justify-center text-center gap-7 px-6 py-20 md:py-28 xl:pr-[190px] 2xl:pr-[210px]"
          style={{ "--stagger-step": "140ms" }}
        >
          <GreekKey className="w-40 text-gold/55" />

          <p className="font-script text-3xl md:text-5xl text-gold-soft leading-[1.25] max-w-md">
            The Mastermind Behind The Masterpiece
          </p>

          <span aria-hidden="true" className="w-16 h-px bg-gold/50" />

          <p className="font-display text-xl md:text-3xl uppercase tracking-[0.22em] text-cream">
            Abdullah Al-Sallal
          </p>
        </Reveal>
      </div>
    </section>
  );
}
