import useReveal from "../../hooks/useReveal";

/**
 * Scroll reveal wrapper.
 *
 *   variant  "rise" | "fade" | "left" | "right" | undefined (default lift)
 *   stagger  true  → direct children cascade in sequence instead of the
 *                    whole block appearing at once
 *   delay    ms before this block starts
 *
 * All motion here is disabled by the reduced-motion base layer in index.css.
 */
export default function Reveal({
  as: Tag = "div",
  className = "",
  variant,
  stagger = false,
  delay = 0,
  style = {},
  children,
  ...rest
}) {
  const [ref, visible] = useReveal();

  const variantClass = variant ? `reveal-${variant}` : "";
  const base = stagger ? "stagger" : "reveal";

  return (
    <Tag
      ref={ref}
      className={`${base} ${variantClass} ${visible ? "is-visible" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
