import useMediaQuery from "../../hooks/useMediaQuery";

/**
 * A contained, art-directed video accent — the "light shaft" treatment.
 *
 * The source clips are 9:16 phone footage. Rather than cropping them into a
 * landscape band (which threw away ~65% of every frame), the video is kept at
 * its native portrait ratio in a narrow column, its edges dissolved with a
 * radial mask, and pushed through a gold duotone so it reads as brand texture
 * rather than stock footage.
 *
 * On phones, and whenever reduced motion is requested, the poster frame is
 * rendered as a plain image — no video element, so no download and no battery
 * cost.
 */
export default function VideoAccent({
  src,
  poster,
  alt,
  className = "",
  caption,
}) {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const useVideo = isDesktop && !reducedMotion;

  return (
    <figure className={`relative ${className}`}>
      <div className="relative grain overflow-hidden">
        {useVideo ? (
          <video
            className="w-full h-full object-cover duotone-gold mask-shaft"
            src={src}
            poster={poster}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={alt}
          />
        ) : (
          <img
            className="w-full h-full object-cover duotone-gold mask-shaft"
            src={poster}
            alt={alt}
            loading="lazy"
            decoding="async"
          />
        )}
      </div>

      {caption && (
        <figcaption className="mt-3 font-display text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-gold/60 text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
