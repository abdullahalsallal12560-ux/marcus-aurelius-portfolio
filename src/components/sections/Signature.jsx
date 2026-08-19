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
 * The portrait is set in a fixed 4:5 frame rather than stretched to fill its
 * half of the grid. Filling the half meant the crop was decided by the
 * window: the source is a tall 9:16 portrait, so on a wide screen the
 * photograph had to scale up until it covered the full width and the head was
 * cut off top and bottom. A frame with its own aspect ratio crops the same
 * way at every size, so the composition is fixed and the face always sits
 * where it was placed.
 */
export default function Signature() {
  return (
    <section
      id="signature"
      aria-label="Site credit"
      className="relative bg-ink border-t border-gold/20 py-20 md:py-28"
    >
      <div className="grid md:grid-cols-2 items-center gap-12 md:gap-8 max-w-6xl mx-auto px-6">
        {/* ---------- portrait ---------- */}
        <Reveal variant="left" className="flex justify-center md:justify-end">
          <figure className="relative m-0 w-full max-w-[340px] md:max-w-[380px] aspect-[4/5] overflow-hidden border border-gold/40 grain portrait-vignette">
            <img
              src={asset("/images/brand/abdullah-portrait.jpg")}
              alt="Abdullah Al-Sallal"
              className="portrait-vintage absolute inset-0 w-full h-full object-cover object-[50%_26%]"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </Reveal>

        {/* ---------- attribution ---------- */}
        <Reveal
          stagger
          className="flex flex-col items-center md:items-start text-center md:text-left gap-7"
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
