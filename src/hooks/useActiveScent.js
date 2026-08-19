import { useEffect } from "react";

/**
 * Hands the page over to whichever fragrance the reader is standing in front
 * of, by writing its slug to <html data-scent>. Every colour on the site
 * resolves from tokens keyed off that attribute, so this one write re-colours
 * the nav, the Contents rail and the section together.
 *
 * The test is "which card covers the middle of the viewport", not "which card
 * is most visible". A band rather than a line means the attribute comes off
 * in the gaps above the first card and below the last, so the collection
 * opens and closes on the house colourway instead of snapping into a
 * fragrance the moment the section appears.
 */
export default function useActiveScent(selector = "[data-scent-id]") {
  useEffect(() => {
    const root = document.documentElement;
    let frame = 0;

    const pick = () => {
      frame = 0;
      const middle = window.innerHeight / 2;
      let found = null;

      for (const el of document.querySelectorAll(selector)) {
        const box = el.getBoundingClientRect();
        if (box.top <= middle && box.bottom >= middle) {
          found = el.dataset.scentId;
          break;
        }
      }

      if (found) root.dataset.scent = found;
      else delete root.dataset.scent;
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(pick);
    };

    pick();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
      // leaving the section themed would strand the rest of the page in a
      // colourway that no longer has anything to do with what is on screen
      delete root.dataset.scent;
    };
  }, [selector]);
}
