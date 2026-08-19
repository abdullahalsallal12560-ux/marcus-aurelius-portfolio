import { useEffect, useState } from "react";
import { GreekKey } from "../shared/Motifs";
import { asset } from "../../utils/asset";
import Reveal from "../shared/Reveal";
import useMediaQuery from "../../hooks/useMediaQuery";

/**
 * The cover. The brand's own film runs behind the mark, but held well back:
 * darkened, desaturated and carrying the same grain as the rest of the page,
 * so it reads as atmosphere rather than as a showreel. The brand's line is
 * that the fragrance "doesn't need loud colors to prove itself", and a hero
 * that lets its own footage shout would contradict it.
 *
 * Under prefers-reduced-motion the poster frame is rendered instead and the
 * clip is never downloaded.
 */
export default function Hero() {
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  // useMediaQuery reports false until it has mounted, and false here means
  // "motion is fine", so trusting it on the first paint would fire off the
  // 2.6MB download before we know the visitor asked for stillness. Waiting a
  // commit costs nothing: the poster is the clip's own first frame, so it
  // holds the cover until the video takes over.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const showVideo = mounted && !reducedMotion;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-ink px-5 grain"
    >
      {/* the film, and everything that holds it back */}
      <div aria-hidden="true" className="absolute inset-0">
        <img
          src={asset("/videos/hero-background-poster.jpg")}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "saturate(0.7) brightness(0.82)" }}
          fetchPriority="high"
        />
        {showVideo && (
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src={asset("/videos/hero-background.mp4")}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            style={{ filter: "saturate(0.7) brightness(0.82)" }}
          />
        )}

        {/* Three passes, because the footage swings from near-black smoke to a
            sunlit face and the wordmark has to hold at both ends: a flat scrim,
            a pool of ink under the centre so the mark never lands on bare skin,
            and a vignette to close the corners. */}
        <div className="absolute inset-0 bg-ink/62" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 58% 62% at 50% 48%, rgba(16,14,11,0.66) 0%, rgba(16,14,11,0.34) 52%, transparent 80%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 28%, rgba(16,14,11,0.5) 74%, rgba(16,14,11,0.9) 100%)",
          }}
        />
      </div>

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
          src={asset("/images/brand/logo-lockup.png")}
          alt="Marcus Aurelius Perfumes"
          className="w-60 sm:w-72 md:w-[22rem] h-auto"
          fetchPriority="high"
        />

        <GreekKey className="w-44 md:w-60 text-gold/55" />

        <p className="font-display text-xs md:text-sm tracking-[0.42em] uppercase text-cream-dim">
          Not for everyone.
          <span className="block mt-2 text-gold">That&rsquo;s the point.</span>
        </p>

        <div className="flex flex-col items-center gap-1.5 mt-8 font-body text-base text-cream-dim/85">
          <a href="https://marcusscent.com" className="hover:text-gold transition-colors">
            marcusscent.com
          </a>
          <a href="mailto:info@marcusscent.com" className="hover:text-gold transition-colors">
            info@marcusscent.com
          </a>
          <span className="font-display text-xs tracking-[0.3em] text-gold/75 mt-3">2026</span>
        </div>
      </Reveal>

      <a
        href="#business-idea"
        aria-label="Scroll to the business idea"
        className="group absolute bottom-10 z-10 flex flex-col items-center gap-3"
      >
        <span className="font-display text-xs tracking-[0.4em] uppercase text-cream-dim/75 group-hover:text-gold transition-colors">
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
