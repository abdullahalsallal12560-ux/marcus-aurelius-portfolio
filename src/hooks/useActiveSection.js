import { useEffect, useState } from "react";
import { SECTIONS } from "../data/sections";

/**
 * Tracks which section currently occupies the viewport, for the Table of
 * Contents active state. Uses scroll position rather than IntersectionObserver
 * so that tall and short sections behave consistently.
 */
export default function useActiveSection() {
  const [activeId, setActiveId] = useState(SECTIONS[0].id);

  useEffect(() => {
    let frame = null;

    const measure = () => {
      frame = null;
      const line = window.innerHeight * 0.35; // reading line, upper third
      let current = SECTIONS[0].id;

      for (const { id } of SECTIONS) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= line) current = id;
      }

      // pin the last entry once the page is scrolled to the bottom
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) {
        current = SECTIONS[SECTIONS.length - 1].id;
      }

      setActiveId(current);
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
  }, []);

  return activeId;
}
