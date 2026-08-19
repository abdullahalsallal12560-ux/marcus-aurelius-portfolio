import { useState } from "react";

import SectionHeading from "../shared/SectionHeading";
import Reveal from "../shared/Reveal";
import ProductImage from "../shared/ProductImage";
import ProductVideo from "../shared/ProductVideo";
import useParallax from "../../hooks/useParallax";
import useReveal from "../../hooks/useReveal";
import { FountainIcon, AqueductIcon, CampanileIcon, LoversBalconyIcon } from "../shared/Motifs";
import Lightbox from "../shared/Lightbox";
import { getProductImages } from "../../utils/productGallery";
import { asset } from "../../utils/asset";

// The collection splits into two pairs, and each pair carries its own mood
// inside the shared house identity:
//
//   kinetic   Maximus + Maxima — youth, motion, energy. The card ground cools
//             and lifts, the type brightens, and a diagonal sweep carries the
//             accent across the panel.
//   romantic  Romeo di Roma + Roma Juliette — stillness and depth. The ground
//             goes warmer and deeper than the house black and the treatment
//             leans back into gold, centred rather than directional.
//
// Each fragrance also keeps its own muted accent, drawn from its composition.
// Everything here is contained to the card: the nav and the Contents rail
// never leave the fixed black-and-gold identity.
const products = [
  {
    slug: "maxima",
    name: "Maxima",
    tagline: "For Her",
    Icon: FountainIcon,
    accent: "#B5697C", // dusty rose — red berries, rose, caramel
    pair: "kinetic",
    // shot for the brand: the film leads, the bottle still joins the gallery
    video: {
      src: asset("/videos/maxima-accent.mp4"),
      poster: asset("/videos/maxima-accent-poster.jpg"),
      alt: "Maxima — golden hour, filmed for the house",
    },
    scrim: "default",
    notes: {
      Top: "Red berries, bergamot, sweet almond",
      Heart: "Jasmine, rose, caramel",
      Base: "Vanilla, white musk, woods",
    },
    benefits:
      "Long-lasting wear, everyday luxury without heaviness, a distinct identity that sets it apart from mainstream perfumes.",
    deliverables: "100ml bottle, brand-identity packaging, small-batch production.",
  },
  {
    slug: "maximus",
    name: "Maximus",
    tagline: "For Him",
    Icon: AqueductIcon,
    accent: "#5E82A6", // slate blue — sea breeze, citrus, cedar
    pair: "kinetic",
    video: {
      src: asset("/videos/maximus-accent.mp4"),
      poster: asset("/videos/maximus-accent-poster.jpg"),
      alt: "Maximus — ocean, citrus and jasmine, filmed for the house",
    },
    scrim: "strong",
    notes: {
      Top: "Orange, bergamot, lemon zest, sea breeze",
      Heart: "Grapefruit, pink pepper, cedarwood, jasmine",
      Base: "Leather, ambergris, sandalwood, white musk",
    },
    benefits:
      "A balance of freshness and strength, strong presence without being overpowering, excellent longevity from the leather-amber base.",
    deliverables: "100ml bottle, Roman-aqueduct-themed packaging, small-batch production.",
  },
  {
    slug: "romeo-di-roma",
    name: "Romeo di Roma",
    tagline: "Unisex, leaning masculine",
    Icon: CampanileIcon,
    accent: "#7A5240", // oud espresso — oud, leather, patchouli
    pair: "romantic",
    // mid-tone tan background — lifted a step for the long name
    scrim: "strong",
    notes: {
      Top: "Vanilla, saffron, pineapple",
      Heart: "Leather, patchouli, caramel",
      Base: "Oud, sandalwood, musk",
    },
    benefits:
      "A rare pairing of saffron and vanilla against oud and leather — heavy and sensual without any banned additives, distinct from anything else on the market.",
    deliverables: "100ml bottle, Venetian-bell-tower-themed packaging, small-batch production.",
  },
  {
    slug: "roma-juliette",
    name: "Roma Juliette",
    tagline: "For Her",
    Icon: LoversBalconyIcon,
    accent: "#A8672E", // dark honeyed amber — the liquid itself, aged roses
    pair: "romantic",
    // warm amber silk — smooth but light toward the base of the frame
    scrim: "strong",
    notes: {
      Top: "Saffron, jasmine, bergamot, mandarin, orange",
      Heart: "Tuberose, red fruits, rose, caramel, almond",
      Base: "Vanilla, tonka bean, white musk, amberwood, sandalwood",
    },
    benefits:
      "The most complex and layered composition of the four, classic Italian opulence, exceptional longevity.",
    deliverables:
      "100ml bottle, packaging themed around the Romeo & Juliette narrative, small-batch production.",
  },
];

// The name straddles the image's lower edge, so its descenders already sit on
// pure ink — the scrim only has to seat the upper half of the letterforms.
// Kept deliberately shallow so the photography survives intact.
const SCRIMS = {
  default: "h-[30%] bg-gradient-to-t from-ink/85 via-ink/35 to-transparent",
  strong: "h-[38%] bg-gradient-to-t from-ink/92 via-ink/50 to-transparent",
};

function ProductCard({ product, index, reversed }) {
  const { slug, name, tagline, Icon, notes, benefits, deliverables, scrim, video, accent, pair } =
    product;
  const { hero, gallery } = getProductImages(slug);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [parallaxRef, offset] = useParallax({ strength: 26 });
  // one-way: the accent settles in as the card arrives and stays put
  const [accentRef, accentOn] = useReveal({ threshold: 0.15 });

  // When footage leads, the bottle photograph is not dropped — it heads up the
  // gallery, so every card keeps the same structure: one dominant visual, then
  // the full set of stills.
  const thumbs = video && hero ? [hero, ...gallery] : gallery;

  // Every photograph of this product, in display order, is enlargeable. When
  // the film leads there is no separate hero image, so the thumbnail row and
  // this list line up exactly; otherwise the hero occupies index 0.
  const allImages = [hero, ...gallery].filter(Boolean);
  const thumbOffset = video ? 0 : 1;
  const lightboxImages = allImages.map((src, i) => ({
    src,
    alt: i === 0 ? `${name} — eau de parfum` : `${name} — detail ${i}`,
    caption: name,
  }));

  return (
    <article
      ref={accentRef}
      style={{ "--accent": accent }}
      data-pair={pair}
      className={`product-card relative grid md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-10 items-start ${
        accentOn ? "accent-on" : ""
      }`}
    >
      {/* the pair's ground, dissolved at its edges so it reads as a shift in
          the light rather than as a pasted-on panel */}
      <div aria-hidden="true" className="card-ground pointer-events-none absolute z-0" />

      {/* ---------- imagery ---------- */}
      <div className={`relative z-10 ${reversed ? "md:order-2" : ""}`}>
        <Reveal variant={reversed ? "right" : "left"}>
          <figure className="relative mb-14 md:mb-20">
            {video ? (
              // Portrait footage, shown at its native ratio and untreated. No
              // scrim here — the name's own shadow carries it, so nothing is
              // laid over the film.
              <ProductVideo
                src={video.src}
                poster={video.poster}
                alt={video.alt}
                className="max-w-[430px] mx-auto"
              />
            ) : (
              <div className="relative overflow-hidden bg-ink-soft">
                <div ref={parallaxRef} style={{ transform: `translate3d(0, ${offset}px, 0)` }}>
                  <ProductImage
                    src={hero}
                    alt={`${name} — eau de parfum`}
                    label={name}
                    aspect="aspect-[4/5]"
                    className="w-full scale-[1.08]"
                    onClick={() => setLightboxIndex(0)}
                  />
                </div>
                {/* legibility scrim, tuned per hero image */}
                <div
                  aria-hidden="true"
                  className={`absolute inset-x-0 bottom-0 pointer-events-none ${SCRIMS[scrim] ?? SCRIMS.default}`}
                />
              </div>
            )}

            {/* the name straddles the lower edge — half on the visual,
                half on the page, so the descenders always sit on pure ink */}
            <figcaption className="absolute left-0 right-0 bottom-0 translate-y-1/2 px-4 md:px-6">
              <h3
                className="font-display uppercase text-cream leading-[0.95] tracking-[0.02em]
                           text-[clamp(1.9rem,5.2vw,3.6rem)]"
                style={{ textShadow: "0 2px 24px rgba(0,0,0,0.9), 0 1px 4px rgba(0,0,0,0.8)" }}
              >
                {name}
              </h3>
            </figcaption>
          </figure>
        </Reveal>

        {thumbs.length > 0 && (
          <Reveal className="grid grid-cols-4 gap-2 md:gap-3">
            {thumbs.map((url, i) => (
              <div key={url} className="overflow-hidden bg-ink-soft">
                <ProductImage
                  src={url}
                  alt={`${name} — detail ${i + 1}`}
                  label={name}
                  aspect="aspect-square"
                  className="w-full transition-transform duration-[1200ms] ease-out hover:scale-110"
                  onClick={() => setLightboxIndex(i + thumbOffset)}
                />
              </div>
            ))}
          </Reveal>
        )}
      </div>

      {/* ---------- detail ---------- */}
      <div className={`relative z-10 ${reversed ? "md:order-1" : ""} md:sticky md:top-28`}>
        <Reveal stagger variant="fade">
          <div className="flex items-center gap-4 mb-6">
            <span className="ac-text font-display text-xs tracking-[0.3em] tabular-nums">
              {String(index + 1).padStart(2, "0")} / {String(products.length).padStart(2, "0")}
            </span>
            <span aria-hidden="true" className="ac-rule flex-1 h-px" />
            <Icon className="ac-icon w-8 h-10 shrink-0" />
          </div>

          <p className="font-script text-2xl md:text-3xl text-gold-soft mb-8">{tagline}</p>

          <dl className="mb-8">
            {Object.entries(notes).map(([k, v]) => (
              <div
                key={k}
                className="ac-border grid grid-cols-[4.5rem_1fr] md:grid-cols-[5.5rem_1fr] gap-4 py-3 border-t"
              >
                <dt className="font-display text-xs md:text-[13px] uppercase tracking-[0.2em] text-gold pt-1">
                  {k}
                </dt>
                <dd className="card-fg font-body text-base md:text-lg leading-snug">{v}</dd>
              </div>
            ))}
          </dl>

          <p className="card-fg-dim font-body text-base leading-relaxed mb-4">
            <span className="font-display text-xs uppercase tracking-[0.2em] text-gold block mb-1.5">
              Benefits
            </span>
            {benefits}
          </p>

          <p className="card-fg-dim font-body text-base leading-relaxed">
            <span className="font-display text-xs uppercase tracking-[0.2em] text-gold block mb-1.5">
              Deliverables
            </span>
            {deliverables}
          </p>
        </Reveal>
      </div>

      <Lightbox
        images={lightboxImages}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onStep={setLightboxIndex}
      />
    </article>
  );
}

export default function Products() {
  return (
    <section id="products" className="py-28 md:py-40 px-5 bg-ink-soft">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          id="products"
          eyebrow="The Collection"
          title="Products"
          subtitle="Four fragrances, four narratives — each produced in limited batches."
        />

        <div className="flex flex-col gap-28 md:gap-44">
          {products.map((p, i) => (
            <ProductCard key={p.slug} product={p} index={i} reversed={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
