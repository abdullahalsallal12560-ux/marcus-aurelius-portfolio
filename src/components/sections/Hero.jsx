import { GreekKey } from "../shared/Motifs";
import Reveal from "../shared/Reveal";

/**
 * The cover. Deliberately typographic: no video, no photograph — just the
 * mark, the wordmark and a great deal of air. The brand's own line is that
 * the fragrance "doesn't need loud colors to prove itself", and the cover is
 * the first place to demonstrate that rather than assert it.
 */
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-ink px-5 grain"
    >
      {/* a single, very soft pool of warmth behind the mark */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(115vw,1000px)] h-[min(115vw,1000px)] rounded-full opacity-70"
        style={{
          background:
            "radial-gradient(circle, rgba(201,162,92,0.14) 0%, rgba(201,162,92,0.05) 38%, transparent 68%)",
        }}
      />

      <Reveal
        stagger
        className="relative z-10 flex flex-col items-center text-center gap-7 max-w-2xl"
        style={{ "--stagger-step": "160ms" }}
      >
        <h1 className="sr-only">Marcus Aurelius Perfumes</h1>

        <img
          src="/images/brand/logo-lockup.png"
          alt="Marcus Aurelius Perfumes"
          className="w-60 sm:w-72 md:w-[22rem] h-auto"
          fetchPriority="high"
        />

        <GreekKey repeat={10} className="w-44 md:w-60 h-4 text-gold/55" />

        <p className="font-display text-[11px] md:text-sm tracking-[0.42em] uppercase text-cream-dim">
          Not for everyone.
          <span className="block mt-2 text-gold">That&rsquo;s the point.</span>
        </p>

        <div className="flex flex-col items-center gap-1.5 mt-8 font-body text-sm text-cream-dim/70">
          <a href="https://marcusscent.com" className="hover:text-gold transition-colors">
            marcusscent.com
          </a>
          <a href="mailto:info@marcusscent.com" className="hover:text-gold transition-colors">
            info@marcusscent.com
          </a>
          <span className="font-display text-[10px] tracking-[0.3em] text-gold/50 mt-3">2026</span>
        </div>
      </Reveal>

      <a
        href="#business-idea"
        aria-label="Scroll to the business idea"
        className="group absolute bottom-10 z-10 flex flex-col items-center gap-3"
      >
        <span className="font-display text-[9px] tracking-[0.4em] uppercase text-cream-dim/50 group-hover:text-gold transition-colors">
          Scroll
        </span>
        <span aria-hidden="true" className="relative block w-px h-12 bg-cream-dim/20 overflow-hidden">
          <span className="absolute inset-x-0 top-0 h-5 bg-gold animate-[heroCue_2.6s_ease-in-out_infinite]" />
        </span>
      </a>

      <style>{`
        @keyframes heroCue {
          0%   { transform: translateY(-110%); opacity: 0; }
          35%  { opacity: 1; }
          100% { transform: translateY(320%); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
