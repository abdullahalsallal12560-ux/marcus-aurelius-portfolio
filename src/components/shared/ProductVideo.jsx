import { useEffect, useRef, useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";

/**
 * The dominant visual for a product that has its own footage.
 *
 * These clips were shot for the brand, so they are shown exactly as filmed ,
 * no duotone, no grain, no feathered mask. The frame is a plain rectangle
 * with a single gold hairline, which reads as a piece of brand film rather
 * than as a decorative texture.
 *
 * The footage is portrait, so the frame is held at a native 9:16 and never
 * cropped or letterboxed into the 4:5 slot the photographed products use.
 *
 * Playback is tied to visibility on every device, phones included: the clip
 * starts when it scrolls into view and pauses when it leaves, so it never
 * burns battery off-screen. Under prefers-reduced-motion the poster frame is
 * rendered instead and no video is downloaded at all.
 */
export default function ProductVideo({ src, poster, alt, className = "" }) {
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const videoRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (reducedMotion) return;
    const node = videoRef.current;
    if (!node || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.25 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [reducedMotion]);

  useEffect(() => {
    const node = videoRef.current;
    if (!node) return;
    if (inView) {
      // Autoplay can still be refused (low-power mode); failing is harmless,
      // the poster frame simply stays up.
      node.play().catch(() => {});
    } else {
      node.pause();
    }
  }, [inView]);

  const frame =
    "relative w-full aspect-[9/16] overflow-hidden border border-gold/60 bg-ink-soft";

  if (reducedMotion) {
    return (
      <div className={`${frame} ${className}`}>
        <img src={poster} alt={alt} className="w-full h-full object-cover" />
      </div>
    );
  }

  return (
    <div className={`${frame} ${className}`}>
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={alt}
      />
    </div>
  );
}
