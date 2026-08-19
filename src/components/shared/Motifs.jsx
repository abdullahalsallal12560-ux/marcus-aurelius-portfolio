// Recurring SVG line-art motifs for the Marcus Aurelius brand.
// All use currentColor so they inherit gold/cream via text color classes.

// Real brand mark (cropped from the uploaded logo, public/images/brand/logo-full.png)
// rendered as a currentColor mask so it still respects text-* color classes
// and hover/transition utilities exactly like the old hand-drawn SVG did.
export function BustMark({ className = "" }) {
  return (
    <span
      role="img"
      aria-label="Marcus Aurelius bust mark"
      className={`inline-block bg-current ${className}`}
      style={{
        WebkitMaskImage: "url(/images/brand/logo-bust.png)",
        maskImage: "url(/images/brand/logo-bust.png)",
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
      }}
    />
  );
}

// A true classical meander: one continuous baseline with a square spiral
// rising from it at every repeat, so the band reads as interlocking linework
// rather than as a row of separate bracket shapes.
//
// It is drawn as a CSS mask rather than an inline <svg> for three reasons.
// The tile repeats natively on the x-axis, so any width joins seamlessly with
// no half-drawn unit or visible seam. The mask is painted at exactly 1:1, so
// the stroke is a true hairline at every size — an inline SVG stretched to an
// arbitrary width scales its horizontal and vertical strokes by different
// amounts, which is what made the old band look thick and uneven. And every
// coordinate sits on a half-pixel, so each 1px stroke lands inside one device
// pixel instead of straddling two and smearing into what looked like a glow.
//
// bg-current keeps it inheriting text-* colour exactly as the old SVG did.
const MEANDER_TILE_W = 10;
const MEANDER_TILE_H = 10;

const MEANDER_MASK =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10'%3E" +
  "%3Cpath d='M0 8.5H10M2.5 8.5V2.5H8.5V5.5H5.5' fill='none' stroke='%23000' stroke-width='1'/%3E" +
  "%3C/svg%3E\")";

export function GreekKey({ className = "" }) {
  return (
    <span
      aria-hidden="true"
      className={`block bg-current ${className}`}
      style={{
        height: `${MEANDER_TILE_H}px`,
        WebkitMaskImage: MEANDER_MASK,
        maskImage: MEANDER_MASK,
        WebkitMaskRepeat: "repeat-x",
        maskRepeat: "repeat-x",
        WebkitMaskSize: `${MEANDER_TILE_W}px ${MEANDER_TILE_H}px`,
        maskSize: `${MEANDER_TILE_W}px ${MEANDER_TILE_H}px`,
        // left-aligned rather than centred: centring can land the tile on a
        // half-pixel and undo the crispness the half-pixel geometry buys
        WebkitMaskPosition: "0 0",
        maskPosition: "0 0",
      }}
    />
  );
}

export function CampanileIcon({ className = "" }) {
  // Venetian bell tower — Romeo di Roma
  return (
    <svg viewBox="0 0 60 100" fill="none" className={className} stroke="currentColor" strokeWidth="1.2">
      <rect x="20" y="30" width="20" height="55" />
      <line x1="20" y1="40" x2="40" y2="40" />
      <line x1="24" y1="48" x2="24" y2="56" />
      <line x1="36" y1="48" x2="36" y2="56" />
      <path d="M16 30 L30 14 L44 30 Z" />
      <line x1="30" y1="14" x2="30" y2="4" />
      <circle cx="30" cy="3" r="1.4" fill="currentColor" stroke="none" />
      <line x1="12" y1="85" x2="48" y2="85" />
      <line x1="8" y1="90" x2="52" y2="90" />
    </svg>
  );
}

export function AqueductIcon({ className = "" }) {
  // Roman aqueduct — Maximus
  return (
    <svg viewBox="0 0 100 60" fill="none" className={className} stroke="currentColor" strokeWidth="1.2">
      <line x1="4" y1="52" x2="96" y2="52" />
      {[6, 26, 46, 66, 86].map((x) => (
        <path key={x} d={`M${x} 52 L${x} 20 Q${x + 8} 12 ${x + 16} 20 L${x + 16} 52`} />
      ))}
      <line x1="4" y1="12" x2="96" y2="12" />
      <line x1="4" y1="8" x2="96" y2="8" />
    </svg>
  );
}

export function FountainIcon({ className = "" }) {
  // Roman fountain / basin — Maxima
  return (
    <svg viewBox="0 0 60 80" fill="none" className={className} stroke="currentColor" strokeWidth="1.2">
      <ellipse cx="30" cy="66" rx="22" ry="6" />
      <path d="M8 66 L12 50 L48 50 L52 66" />
      <ellipse cx="30" cy="50" rx="18" ry="5" />
      <rect x="24" y="30" width="12" height="20" />
      <ellipse cx="30" cy="30" rx="10" ry="3" />
      <line x1="30" y1="30" x2="30" y2="10" />
      <path d="M30 12 Q22 16 22 24" strokeWidth="0.9" />
      <path d="M30 12 Q38 16 38 24" strokeWidth="0.9" />
    </svg>
  );
}

export function LoversBalconyIcon({ className = "" }) {
  // Balcony arch with two rings — Roma Juliette
  return (
    <svg viewBox="0 0 80 90" fill="none" className={className} stroke="currentColor" strokeWidth="1.2">
      <path d="M14 40 V78 H66 V40" />
      <path d="M14 40 Q40 6 66 40" />
      <line x1="8" y1="78" x2="72" y2="78" />
      <line x1="26" y1="40" x2="26" y2="78" strokeWidth="0.8" />
      <line x1="40" y1="34" x2="40" y2="78" strokeWidth="0.8" />
      <line x1="54" y1="40" x2="54" y2="78" strokeWidth="0.8" />
      <circle cx="34" cy="20" r="5" />
      <circle cx="44" cy="22" r="5" />
    </svg>
  );
}

export function LaurelDivider({ className = "" }) {
  return (
    <svg viewBox="0 0 200 20" className={className} fill="none" stroke="currentColor" strokeWidth="1">
      <line x1="0" y1="10" x2="80" y2="10" pathLength="1" />
      <line x1="120" y1="10" x2="200" y2="10" pathLength="1" />
      <path d="M100 7 A3 3 0 1 1 100 13 A3 3 0 1 1 100 7" pathLength="1" />
      <path d="M100 10 L96 4 M100 10 L104 4 M100 10 L96 16 M100 10 L104 16" pathLength="1" />
    </svg>
  );
}
