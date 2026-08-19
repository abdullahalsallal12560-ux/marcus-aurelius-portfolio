import { useEffect, useRef } from "react";
import { SECTIONS } from "../../data/sections";
import { useT } from "../../i18n/useLocale";
import useActiveSection from "../../hooks/useActiveSection";
import { GreekKey } from "./Motifs";

/**
 * The portfolio's Table of Contents, in two coordinated forms:
 *
 *   1. A fixed vertical index rail (desktop), one row per section, showing
 *      the Roman numeral and the section title.
 *   2. A full "Contents" overlay (all breakpoints) opened from the nav,
 *      listing all seventeen sections as an explicit, readable index.
 *
 * Both scroll to their section on click and reflect the section currently
 * being read.
 */

export function ContentsRail() {
  const t = useT();
  const activeId = useActiveSection();

  return (
    <nav
      aria-label={t.contents.railAria}
      // The labelled rail needs roughly 200px of gutter beside the 1152px
      // content column, which only exists from 1536px up, so titles are
      // permanently visible there. Below that the rail stays, numerals only,
      // with the title revealed on hover rather than printed over the text.
      //
      // It used to disappear entirely under 1280px, which on a 125%-scaled
      // Windows display is what a maximised window reports at default zoom:
      // the rail vanished at the most ordinary setting there is. Between 1240
      // and 1280 it draws itself tighter instead, pulling in against the edge
      // and shortening the marker, which buys back the ~30px it needs to
      // clear the widest section.
      className="hidden min-[1240px]:flex fixed end-2 xl:end-5 2xl:end-8 top-1/2 -translate-y-1/2 z-40 flex-col gap-0.5"
    >
      {SECTIONS.map(({ id, numeral, label }) => {
        const active = id === activeId;
        return (
          <a
            key={id}
            href={`#${id}`}
            aria-current={active ? "true" : undefined}
            className="group relative flex items-center justify-end gap-2 xl:gap-3 py-[7px] outline-offset-4"
          >
            {/* Below 2xl the title is lifted out of flow and made inert, so the
                rail reserves no width it is not actually drawing, otherwise
                an invisible 100px+ strip would sit over the text column and
                swallow its clicks. */}
            <span
              className={`pointer-events-none absolute inset-y-0 end-full me-3 flex items-center font-body text-sm leading-none whitespace-nowrap transition-opacity duration-500 2xl:static 2xl:me-0 2xl:inset-auto 2xl:pointer-events-auto 2xl:opacity-100 ${
                active
                  ? // The active title was the one exception that still printed
                    // itself over the text column below 2xl, which is where it
                    // collided with anything sitting near the right edge. It
                    // now follows the same rule as the rest: hover only until
                    // there is a gutter wide enough to hold it.
                    "text-gold opacity-0 group-hover:opacity-100 2xl:opacity-100"
                  : "text-cream-dim/75 opacity-0 group-hover:opacity-100 group-hover:text-cream"
              }`}
            >
              {t.sections[id] ?? label}
            </span>
            <span
              className={`font-display text-[13px] leading-none tabular-nums transition-colors duration-500 ${
                active ? "text-gold" : "text-cream-dim/75 group-hover:text-gold-soft"
              }`}
            >
              {numeral}
            </span>
            {/* the active marker is a filled, longer rule, a difference in
                length and weight, not only in colour */}
            <span
              aria-hidden="true"
              className={`transition-all duration-500 ${
                active
                  ? "w-5 xl:w-9 h-0.5 bg-gold"
                  : "w-2.5 xl:w-3.5 h-px bg-cream-dim/45 group-hover:w-4 xl:group-hover:w-6 group-hover:bg-gold-soft"
              }`}
            />
          </a>
        );
      })}
    </nav>
  );
}

export function ContentsOverlay({ open, onClose }) {
  const t = useT();
  const activeId = useActiveSection();
  const closeRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={t.contents.railAria}
      hidden={!open}
      className={`fixed inset-0 z-[60] bg-ink/97 backdrop-blur-sm transition-opacity duration-500 ${
        open ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="h-full overflow-y-auto px-6 py-8 md:py-12">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-start justify-between mb-8 md:mb-12">
            <div>
              <p className="meta-label text-gold mb-2">
                {t.contents.title}
              </p>
              <p className="font-script text-2xl md:text-3xl text-cream">
                Marcus Aurelius Perfumes
              </p>
            </div>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              className="meta-label text-cream-dim hover:text-gold transition-colors border border-gold/40 hover:border-gold px-4 py-2.5"
            >
              Close
            </button>
          </div>

          <GreekKey className="w-full text-gold/50 mb-8" />

          <ol className="flex flex-col">
            {SECTIONS.map(({ id, numeral, label }) => {
              const active = id === activeId;
              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={onClose}
                    aria-current={active ? "true" : undefined}
                    className="group flex items-baseline gap-4 md:gap-6 py-2.5 md:py-3 border-b border-cream-dim/10 hover:border-gold/40 transition-colors"
                  >
                    <span
                      className={`font-display text-[13px] md:text-base w-10 md:w-14 shrink-0 tracking-widest transition-colors ${
                        active ? "text-gold" : "text-gold/70 group-hover:text-gold"
                      }`}
                    >
                      {numeral}
                    </span>
                    <span
                      className={`font-display text-base md:text-2xl uppercase tracking-[0.12em] transition-colors ${
                        active ? "text-gold" : "text-cream group-hover:text-gold-soft"
                      }`}
                    >
                      {t.sections[id] ?? label}
                    </span>
                    <span
                      aria-hidden="true"
                      className="flex-1 border-b border-dotted border-cream-dim/25 translate-y-[-3px]"
                    />
                  </a>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}
