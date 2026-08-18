import SectionHeading from "../shared/SectionHeading";
import Reveal from "../shared/Reveal";
import ProductImage from "../shared/ProductImage";
import VideoAccent from "../shared/VideoAccent";
import useParallax from "../../hooks/useParallax";
import { FountainIcon, AqueductIcon, CampanileIcon, LoversBalconyIcon } from "../shared/Motifs";
import { getProductImages } from "../../utils/productGallery";

const products = [
  {
    slug: "maxima",
    name: "Maxima",
    tagline: "For Her",
    Icon: FountainIcon,
    // hero sits on dark grass — the default scrim carries the name comfortably
    scrim: "default",
    accent: {
      src: "/videos/maxima-accent.mp4",
      poster: "/videos/maxima-accent-poster.jpg",
      alt: "Golden hour on the water — the Maxima mood",
      caption: "Warmth, worn lightly",
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
    // brightest hero of the four (turquoise water + lemons) — needs the deep scrim
    scrim: "strong",
    accent: {
      src: "/videos/maximus-accent.mp4",
      poster: "/videos/maximus-accent-poster.jpg",
      alt: "Ocean, citrus and jasmine — the Maximus note pyramid",
      caption: "Sea breeze, citrus, jasmine",
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
  const { slug, name, tagline, Icon, notes, benefits, deliverables, scrim, accent } = product;
  const { hero, gallery } = getProductImages(slug);
  const [parallaxRef, offset] = useParallax({ strength: 26 });

  const thumbs = gallery.slice(0, 4);

  return (
    <article className="grid md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-10 items-start">
      {/* ---------- imagery ---------- */}
      <div className={reversed ? "md:order-2" : ""}>
        <Reveal variant={reversed ? "right" : "left"}>
          <figure className="relative mb-14 md:mb-20">
            <div className="relative overflow-hidden bg-ink-soft">
              <div ref={parallaxRef} style={{ transform: `translate3d(0, ${offset}px, 0)` }}>
                <ProductImage
                  src={hero}
                  alt={`${name} — eau de parfum`}
                  label={name}
                  aspect="aspect-[4/5]"
                  className="w-full scale-[1.08]"
                />
              </div>
              {/* legibility scrim, tuned per hero image */}
              <div
                aria-hidden="true"
                className={`absolute inset-x-0 bottom-0 pointer-events-none ${SCRIMS[scrim] ?? SCRIMS.default}`}
              />
            </div>

            {/* the name straddles the lower edge — half on the photograph,
                half on the page, so the descenders always sit on pure ink */}
            <figcaption className="absolute left-0 right-0 bottom-0 translate-y-1/2 px-4 md:px-6">
              <h3
                className="font-display uppercase text-cream leading-[0.95] tracking-[0.02em]
                           text-[clamp(1.9rem,5.2vw,3.6rem)]"
                style={{ textShadow: "0 2px 24px rgba(0,0,0,0.85), 0 1px 4px rgba(0,0,0,0.7)" }}
              >
                {name}
              </h3>
            </figcaption>
          </figure>
        </Reveal>

        {thumbs.length > 0 && (
          <Reveal stagger className="grid grid-cols-4 gap-2 md:gap-3">
            {thumbs.map((url, i) => (
              <div key={url} className="overflow-hidden bg-ink-soft">
                <ProductImage
                  src={url}
                  alt={`${name} — detail ${i + 1}`}
                  label={name}
                  aspect="aspect-square"
                  className="w-full transition-transform duration-[1200ms] ease-out hover:scale-110"
                />
              </div>
            ))}
          </Reveal>
        )}

        {accent && (
          <Reveal className="mt-8 md:mt-10 flex justify-center">
            <VideoAccent
              src={accent.src}
              poster={accent.poster}
              alt={accent.alt}
              caption={accent.caption}
              className="w-[210px] md:w-[250px] aspect-[9/16]"
            />
          </Reveal>
        )}
      </div>

      {/* ---------- detail ---------- */}
      <div className={`${reversed ? "md:order-1" : ""} md:sticky md:top-28`}>
        <Reveal stagger variant="fade">
          <div className="flex items-center gap-4 mb-6">
            <span className="font-display text-xs tracking-[0.3em] text-gold/60 tabular-nums">
              {String(index + 1).padStart(2, "0")} / {String(products.length).padStart(2, "0")}
            </span>
            <span aria-hidden="true" className="flex-1 h-px bg-gold/20" />
            <Icon className="w-8 h-10 text-gold shrink-0" />
          </div>

          <p className="font-script text-2xl md:text-3xl text-gold-soft mb-8">{tagline}</p>

          <dl className="mb-8">
            {Object.entries(notes).map(([k, v]) => (
              <div
                key={k}
                className="grid grid-cols-[4.5rem_1fr] md:grid-cols-[5.5rem_1fr] gap-4 py-3 border-t border-gold/20"
              >
                <dt className="font-display text-[10px] md:text-xs uppercase tracking-[0.2em] text-gold pt-1">
                  {k}
                </dt>
                <dd className="font-body text-base md:text-lg text-cream leading-snug">{v}</dd>
              </div>
            ))}
          </dl>

          <p className="font-body text-sm md:text-base text-cream-dim leading-relaxed mb-4">
            <span className="font-display text-[10px] uppercase tracking-[0.2em] text-gold block mb-1.5">
              Benefits
            </span>
            {benefits}
          </p>

          <p className="font-body text-sm md:text-base text-cream-dim/80 leading-relaxed">
            <span className="font-display text-[10px] uppercase tracking-[0.2em] text-gold block mb-1.5">
              Deliverables
            </span>
            {deliverables}
          </p>
        </Reveal>
      </div>
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
