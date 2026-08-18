import { useState } from "react";

/**
 * Renders the real image if it exists at the given src; otherwise falls back
 * to a soft gold-gradient placeholder bearing the product name, so the
 * layout never breaks before real photography is dropped into /public/images.
 */
export default function ProductImage({ src, alt, label, className = "", aspect = "aspect-[3/4]" }) {
  const [errored, setErrored] = useState(false);

  if (!src || errored) {
    return (
      <div
        className={`${aspect} ${className} flex items-center justify-center rounded-sm border border-gold/30 bg-gradient-to-br from-[#2a2416] via-[#1c1912] to-[#0d0c08] p-6 text-center`}
      >
        <span className="font-display text-sm tracking-[0.2em] text-gold-soft uppercase">
          {label}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`${aspect} ${className} object-cover`}
      onError={() => setErrored(true)}
    />
  );
}
