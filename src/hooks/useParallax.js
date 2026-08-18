import { useEffect, useRef, useState } from "react";

/**
 * Subtle vertical parallax for editorial imagery. Returns a ref and a
 * translate value in px. Disabled entirely under reduced motion and below
 * the given viewport width, where it costs more than it gives.
 */
export default function useParallax({ strength = 28, minWidth = 768 } = {}) {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || window.innerWidth < minWidth) return;

    let frame = null;

    const measure = () => {
      frame = null;
      const node = ref.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const vh = window.innerHeight;
      if (rect.bottom < 0 || rect.top > vh) return;
      // -1 when the element is entering, +1 when leaving
      const progress = (rect.top + rect.height / 2 - vh / 2) / (vh / 2 + rect.height / 2);
      setOffset(progress * strength);
    };

    const onScroll = () => {
      if (frame === null) frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, [strength, minWidth]);

  return [ref, offset];
}
