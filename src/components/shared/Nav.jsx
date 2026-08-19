import { useEffect, useState } from "react";
import { BustMark } from "./Motifs";

export default function Nav({ onOpenContents }) {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = null;

    const measure = () => {
      frame = null;
      const max = document.body.scrollHeight - window.innerHeight;
      setScrolled(window.scrollY > 40);
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-700 ${
        scrolled ? "bg-ink/90 backdrop-blur-md border-b border-gold/15" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-5 md:px-10 py-3 md:py-4">
        <a href="#hero" className="flex items-center gap-2 md:gap-3 group">
          <BustMark className="w-7 h-8 md:w-8 md:h-9 text-gold group-hover:text-gold-soft transition-colors duration-500" />
          <span className="font-display text-xs sm:text-[13px] md:text-sm tracking-[0.18em] sm:tracking-[0.25em] uppercase text-cream whitespace-nowrap">
            Marcus Aurelius
          </span>
        </a>

        <div className="flex items-center gap-2 md:gap-4">
          <button
            type="button"
            onClick={onOpenContents}
            aria-haspopup="dialog"
            className="group flex items-center gap-2 font-display text-xs md:text-[13px] tracking-[0.2em] uppercase text-cream-dim hover:text-gold transition-colors px-2 py-2"
          >
            <span aria-hidden="true" className="flex flex-col gap-[3px]">
              <span className="block w-4 h-px bg-current" />
              <span className="block w-4 h-px bg-current" />
              <span className="block w-2.5 h-px bg-current transition-all duration-500 group-hover:w-4" />
            </span>
            Contents
          </button>

          <a
            href="#contact"
            className="font-display text-xs md:text-[13px] tracking-[0.2em] uppercase border border-gold text-gold px-3 py-2 md:px-5 md:py-2.5 hover:bg-gold hover:text-ink transition-colors duration-500"
          >
            <span className="hidden sm:inline">Join the Waitlist</span>
            <span className="sm:hidden">Waitlist</span>
          </a>
        </div>
      </div>

      {/* reading progress */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-px bg-gold/70 origin-left"
        style={{ width: `${progress * 100}%` }}
      />
    </nav>
  );
}
