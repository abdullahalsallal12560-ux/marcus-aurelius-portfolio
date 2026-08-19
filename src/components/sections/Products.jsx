import { useState } from "react";

import SectionHeading from "../shared/SectionHeading";
import Reveal from "../shared/Reveal";
import ProductImage from "../shared/ProductImage";
import ProductVideo from "../shared/ProductVideo";
import ScentWorlds from "../shared/ScentWorlds";
import useParallax from "../../hooks/useParallax";
import useActiveScent from "../../hooks/useActiveScent";
import { FountainIcon, AqueductIcon, CampanileIcon, LoversBalconyIcon } from "../shared/Motifs";
import Lightbox from "../shared/Lightbox";
import { getProductImages } from "../../utils/productGallery";
import { asset } from "../../utils/asset";

// Each fragrance owns the page while the reader is in front of it: ground,
// type, rules, accent and the pattern behind them all belong to it, and
// dissolve into the next one on the way down. The colourways themselves live
// in index.css, keyed off <html data-scent>, because the nav and the Contents
// rail have to travel with them, the collection is a passage through the
// house, not four websites.
//
// The collection still splits into the two pairs the brand identity section
// documents, and the split now carries a visual rule:
//
//   kinetic   Maximus + Maxima, youth, motion, energy. Light grounds.
//   romantic  Romeo di Roma + Roma Juliette, stillness and depth. Deep ones.
const products = [
  {
    slug: "maxima",
    name: "Maxima",
    tagline: "For Her",
    Icon: FountainIcon,
    pair: "Kinetic pair",
    // shot for the brand: the film leads, the bottle still joins the gallery
    video: {
      src: asset("/videos/maxima-accent.mp4"),
      poster: asset("/videos/maxima-accent-poster.jpg"),
      alt: "Maxima: golden hour, filmed for the house",
    },
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
    pair: "Kinetic pair",
    video: {
      src: asset("/videos/maximus-accent.mp4"),
      poster: asset("/videos/maximus-accent-poster.jpg"),
      alt: "Maximus: ocean, citrus and jasmine, filmed for the house",
    },
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
    pair: "Romantic pair",
    notes: {
      Top: "Vanilla, saffron, pineapple",
      Heart: "Leather, patchouli, caramel",
      Base: "Oud, sandalwood, musk",
    },
    benefits:
      "A rare pairing of saffron and vanilla against oud and leather: heavy and sensual without any banned additives, distinct from anything else on the market.",
    deliverables: "100ml bottle, Venetian-bell-tower-themed packaging, small-batch production.",
  },
  {
    slug: "roma-juliette",
    name: "Roma Juliette",
    tagline: "For Her",
    Icon: LoversBalconyIcon,
    pair: "Romantic pair",
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

function ProductCard({ product, index, reversed }) {
  const { slug, name, tagline, Icon, notes, benefits, deliverables, video, pair } = product;
  const { hero, gallery } = getProductImages(slug);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [parallaxRef, offset] = useParallax({ strength: 26 });

  // When footage leads, the bottle photograph is not dropped, it heads up the
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
    alt: i === 0 ? `${name}, eau de parfum` : `${name}, detail ${i}`,
    caption: name,
  }));

  // the plate carries the name in the colourway's own contrast pair, so it
  // reads the same whether the ground behind it is near-black or near-white
  const plate = (
    <div className="product-plate absolute -start-3 end-10 -bottom-6 z-10 px-5 py-3 md:px-6 md:py-4">
      <h3 className="font-display uppercase leading-[0.95] tracking-[0.04em] text-[clamp(1.4rem,3.6vw,2.3rem)]">
        {name}
      </h3>
      <p className="font-script text-base md:text-lg opacity-85 mt-1">{tagline}</p>
    </div>
  );

  return (
    <article
      data-scent-id={slug}
      className="product-card relative grid md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-10 items-start"
    >
      {/* ---------- imagery ---------- */}
      <div className={`relative z-10 ${reversed ? "md:order-2" : ""}`}>
        <Reveal variant={reversed ? "right" : "left"}>
          <figure className="mb-16 md:mb-24">
            {video ? (
              // Portrait footage, shown at its native ratio and untreated.
              <div className="relative max-w-[430px] mx-auto">
                <ProductVideo src={video.src} poster={video.poster} alt={video.alt} />
                {plate}
              </div>
            ) : (
              <div className="relative">
                <div className="relative overflow-hidden bg-ink-soft">
                  <div ref={parallaxRef} style={{ transform: `translate3d(0, ${offset}px, 0)` }}>
                    <ProductImage
                      src={hero}
                      alt={`${name}, eau de parfum`}
                      label={name}
                      aspect="aspect-[4/5]"
                      className="w-full scale-[1.08]"
                      onClick={() => setLightboxIndex(0)}
                    />
                  </div>
                </div>
                {plate}
              </div>
            )}
          </figure>
        </Reveal>

        {thumbs.length > 0 && (
          <Reveal className="grid grid-cols-4 gap-2 md:gap-3">
            {thumbs.map((url, i) => (
              <div key={url} className="overflow-hidden bg-ink-soft">
                <ProductImage
                  src={url}
                  alt={`${name}, detail ${i + 1}`}
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
            <span className="field-label tabular-nums">
              {String(index + 1).padStart(2, "0")} / {String(products.length).padStart(2, "0")}
            </span>
            <span aria-hidden="true" className="flex-1 h-px bg-gold/45" />
            <span className="field-label hidden sm:inline">{pair}</span>
            <Icon className="w-8 h-10 shrink-0 text-gold" />
          </div>

          <dl className="mb-8">
            {Object.entries(notes).map(([k, v]) => (
              <div
                key={k}
                className="grid grid-cols-[5rem_1fr] md:grid-cols-[6rem_1fr] gap-4 py-3 border-t border-gold/35"
              >
                <dt className="field-label pt-1">{k}</dt>
                <dd className="font-body text-base md:text-lg leading-snug text-cream">{v}</dd>
              </div>
            ))}
          </dl>

          <p className="font-body text-base leading-relaxed mb-4 text-cream-dim">
            <span className="field-label block mb-1.5">Benefits</span>
            {benefits}
          </p>

          <p className="font-body text-base leading-relaxed text-cream-dim">
            <span className="field-label block mb-1.5">Deliverables</span>
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
  useActiveScent();

  return (
    <section id="products" className="relative py-28 md:py-40 px-5 bg-ink-soft">
      <ScentWorlds />

      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionHeading
          id="products"
          eyebrow="The Collection"
          title="Products"
          subtitle="Four fragrances, four narratives, each produced in limited batches."
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
