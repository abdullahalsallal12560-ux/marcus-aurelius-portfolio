import useReveal from "../../hooks/useReveal";
import { GreekKey } from "./Motifs";

/**
 * Boundary marker between sections, a meander band that draws itself in as
 * it enters view, flanked by hairlines that extend to the page edges.
 * Purely decorative, so it is hidden from assistive technology.
 */
export default function SectionDivider({ className = "" }) {
  const [ref, visible] = useReveal({ threshold: 0.4, rootMargin: "0px" });

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`flex items-center justify-center gap-4 px-5 py-2 ${className}`}
    >
      <span
        className={`h-px flex-1 max-w-[22vw] bg-gradient-to-r from-transparent to-gold/30 draw-line ${
          visible ? "is-visible" : ""
        }`}
        style={{ transformOrigin: "right center" }}
      />
      <span
        className={`draw-line draw-line-center shrink-0 ${visible ? "is-visible" : ""}`}
      >
        <GreekKey className="w-28 md:w-40 text-gold/55" />
      </span>
      <span
        className={`h-px flex-1 max-w-[22vw] bg-gradient-to-l from-transparent to-gold/30 draw-line ${
          visible ? "is-visible" : ""
        }`}
      />
    </div>
  );
}
