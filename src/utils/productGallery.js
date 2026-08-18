// Vite can only glob-import files that live inside the source tree, not
// public/ (public assets bypass the module graph entirely) — so real product
// photography lives in src/assets/products/<slug>/ and gets picked up here
// automatically, with no filename wiring required per product.
const modules = import.meta.glob("/src/assets/products/*/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}", {
  eager: true,
  import: "default",
});

const bySlug = {};

for (const [path, url] of Object.entries(modules)) {
  const match = path.match(/\/products\/([^/]+)\/([^/]+)$/);
  if (!match) continue;
  const [, slug, filename] = match;
  (bySlug[slug] ??= []).push({ filename, url });
}

for (const slug of Object.keys(bySlug)) {
  bySlug[slug].sort((a, b) => a.filename.localeCompare(b.filename, undefined, { numeric: true }));
}

/**
 * Returns { hero, gallery } for a product slug — hero is the first image
 * (alphanumeric-sorted filename), gallery is every remaining image. Both
 * are empty when no folder/files exist yet, so callers can fall back to a
 * placeholder.
 */
export function getProductImages(slug) {
  const images = (bySlug[slug] ?? []).map((entry) => entry.url);
  return { hero: images[0] ?? null, gallery: images.slice(1) };
}
