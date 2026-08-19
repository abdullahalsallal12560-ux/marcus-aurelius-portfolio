import { useCallback, useEffect, useRef } from "react";

/**
 * Click-to-enlarge for product photography.
 *
 * Opens over a near-opaque ink field with the image contained — never cropped
 * — inside the viewport. Closes on the X, on a click outside the image, and on
 * Escape. Stepping between the images of the same product costs almost nothing
 * once the set is already in hand, so the arrow keys and two edge controls are
 * wired up too.
 */
export default function Lightbox({ images, index, onClose, onStep }) {
  const closeRef = useRef(null);
  const lastFocused = useRef(null);
  const open = index !== null && index >= 0;

  const step = useCallback(
    (delta) => {
      if (images.length < 2) return;
      onStep((index + delta + images.length) % images.length);
    },
    [images.length, index, onStep]
  );

  useEffect(() => {
    if (!open) return;

    lastFocused.current = document.activeElement;
    closeRef.current?.focus();

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      // hand focus back to the thumbnail that opened this
      if (lastFocused.current instanceof HTMLElement) lastFocused.current.focus();
    };
  }, [open, onClose, step]);

  if (!open) return null;

  const current = images[index];
  const multiple = images.length > 1;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={current?.alt ?? "Enlarged product image"}
      onClick={onClose}
      className="fixed inset-0 z-[80] bg-ink/97 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
    >
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label="Close enlarged image"
        className="absolute top-4 right-4 md:top-6 md:right-8 z-10 font-display text-lg leading-none text-cream-dim hover:text-gold transition-colors border border-gold/40 hover:border-gold w-11 h-11 flex items-center justify-center"
      >
        &times;
      </button>

      {multiple && (
        <>
          <button
            type="button"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            className="absolute left-2 md:left-6 z-10 font-display text-2xl leading-none text-cream-dim hover:text-gold transition-colors w-11 h-16 flex items-center justify-center"
          >
            &lsaquo;
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            className="absolute right-2 md:right-6 z-10 font-display text-2xl leading-none text-cream-dim hover:text-gold transition-colors w-11 h-16 flex items-center justify-center"
          >
            &rsaquo;
          </button>
        </>
      )}

      {/* the image itself is not a close target — only the field around it */}
      <figure
        onClick={(e) => e.stopPropagation()}
        className="m-0 flex flex-col items-center gap-4 max-h-full"
      >
        <img
          src={current.src}
          alt={current.alt}
          className="max-h-[80vh] max-w-[90vw] object-contain border border-gold/25"
        />
        <figcaption className="font-display text-xs tracking-[0.25em] uppercase text-cream-dim/80 text-center">
          {current.caption ?? current.alt}
          {multiple && (
            <span className="ml-3 tabular-nums text-gold/80">
              {index + 1} / {images.length}
            </span>
          )}
        </figcaption>
      </figure>
    </div>
  );
}
