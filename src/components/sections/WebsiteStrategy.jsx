import SectionHeading from "../shared/SectionHeading";
import Reveal from "../shared/Reveal";

const pages = [
  { name: "Home", body: "Video hero (“Luxury, Captured in Scent”) with direct links to the Collection and the brand Story." },
  { name: "Shop / Collection", body: "All four fragrances with SKU, pricing, and dual product/lifestyle imagery." },
  { name: "Story", body: "The founding narrative." },
  { name: "Atelier / Ingredients", body: "Editorial content on ingredient philosophy and craftsmanship." },
  { name: "Founders", body: "Personal introduction to the people behind the brand." },
  { name: "Contact & Order Tracking", body: "Direct contact channel and order tracking system." },
];

export default function WebsiteStrategy() {
  return (
    <section id="website-strategy" className="py-28 md:py-40 px-5 bg-ink-soft">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          id="website-strategy"
          eyebrow="marcusscent.com"
          title="Website Strategy"
          subtitle="The company's actual digital presence, built custom, not on a template platform like Shopify, for full control over the user experience."
        />

        <Reveal stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/15">
          {pages.map((p, i) => (
            <div
              key={p.name}
              className="group relative bg-ink-soft p-7 md:p-8 transition-colors duration-700 hover:bg-ink"
            >
              <span className="font-display text-xs text-gold/70 tabular-nums block mb-3">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-sm md:text-base tracking-[0.16em] uppercase text-gold mb-2.5 transition-colors duration-700 group-hover:text-gold-soft">
                {p.name}
              </h3>
              <p className="font-body text-base text-cream-dim leading-relaxed">{p.body}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
