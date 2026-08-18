import { useEffect, useRef } from "react";
import { SECTIONS } from "../../data/sections";
import useActiveSection from "../../hooks/useActiveSection";
import { GreekKey } from "./Motifs";

/**
 * The portfolio's Table of Contents, in two coordinated forms:
 *
 *   1. A fixed vertical index rail (desktop) — one marker per section,
 *      showing the Roman numeral, expanding to the full title on hover.
 *   2. A full "Contents" overlay (all breakpoints) opened from the nav,
 *      listing all seventeen sections as an explicit, readable index.
 *
 * Both scroll to their section on click and reflect the section currently
 * being read.
 */

export function ContentsRail() {
  const activeId = useActiveSection();

  return (
    <nav
      aria-label="Table of contents"
      className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-1"
    >
      {SECTIONS.map(({ id, numeral, label }) => {
        const active = id === activeId;
        return (
          <a
            key={id}
            href={`#${id}`}
            aria-current={active ? "true" : undefined}
            className="group flex items-center justify-end gap-3 py-[3px] outline-offset-4"
          >
            <span
              className={`font-body text-[11px] tracking-wide whitespace-nowrap transition-all duration-500 ${
                active
                  ? "text-gold opacity-100 translate-x-0"
                  : "text-cream-dim/70 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
              }`}
            >
              {label}
            </span>
            <span
              className={`font-display text-[9px] tabular-nums transition-colors duration-500 ${
                active ? "text-gold" : "text-cream-dim/40 group-hover:text-gold-soft"
              }`}
            >
              {numeral}
            </span>
            <span
              aria-hidden="true"
              className={`h-px transition-all duration-500 ${
                active
                  ? "w-6 bg-gold"
                  : "w-2.5 bg-cream-dim/35 group-hover:w-4 group-hover:bg-gold-soft"
              }`}
            />
          </a>
        );
      })}
    </nav>
  );
}

export function ContentsOverlay({ open, onClose }) {
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
      aria-label="Table of contents"
      hidden={!open}
      className={`fixed inset-0 z-[60] bg-ink/97 backdrop-blur-sm transition-opacity duration-500 ${
        open ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="h-full overflow-y-auto px-6 py-8 md:py-12">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-start justify-between mb-8 md:mb-12">
            <div>
              <p className="font-display text-[10px] md:text-xs tracking-[0.35em] uppercase text-gold mb-2">
                Contents
              </p>
              <p className="font-script text-2xl md:text-3xl text-cream">
                Marcus Aurelius Perfumes
              </p>
            </div>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              className="font-display text-[10px] md:text-xs tracking-[0.25em] uppercase text-cream-dim hover:text-gold transition-colors border border-gold/30 hover:border-gold px-4 py-2.5"
            >
              Close
            </button>
          </div>

          <GreekKey repeat={20} className="w-full h-3 text-gold/30 mb-8" />

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
                      className={`font-display text-[11px] md:text-sm w-10 md:w-14 shrink-0 tracking-widest transition-colors ${
                        active ? "text-gold" : "text-gold/50 group-hover:text-gold"
                      }`}
                    >
                      {numeral}
                    </span>
                    <span
                      className={`font-display text-base md:text-2xl uppercase tracking-[0.12em] transition-colors ${
                        active ? "text-gold" : "text-cream group-hover:text-gold-soft"
                      }`}
                    >
                      {label}
                    </span>
                    <span
                      aria-hidden="true"
                      className="flex-1 border-b border-dotted border-cream-dim/20 translate-y-[-3px]"
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
