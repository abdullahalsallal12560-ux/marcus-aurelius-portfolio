// Vite can only glob-import files that live inside the source tree, not
// public/ (public assets bypass the module graph entirely) — so real product
// photography lives in src/assets/products/<slug>/ and gets picked up here
// automatically, with no filename wiring required per product.
const modules = import.meta.glob("/src/assets/products/*/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}", {
  eager: true,
  import: "default",
});

// The hero is chosen by an explicit, reserved filename rather than by
// "whichever file happens to sort first" — the source photography arrives with
// messy, non-descriptive names (IMG_2181, Gemini_Generated_Image_…), so
// alphabetical order is not a meaningful editorial order. Every other file in
// the folder is gallery, ordered numerically.
const HERO_BASENAME = "0-bottle-main";

const bySlug = {};

for (const [path, url] of Object.entries(modules)) {
  const match = path.match(/\/products\/([^/]+)\/([^/]+)$/);
  if (!match) continue;
  const [, slug, filename] = match;
  const basename = filename.replace(/\.[^.]+$/, "");
  (bySlug[slug] ??= []).push({ filename, basename, url });
}

for (const slug of Object.keys(bySlug)) {
  bySlug[slug].sort((a, b) => a.filename.localeCompare(b.filename, undefined, { numeric: true }));
}

/**
 * Returns { hero, gallery } for a product slug.
 *
 *   hero     the file named `0-bottle-main.*`, or — if a folder has not been
 *            normalised yet — the first file, so nothing renders empty.
 *   gallery  every remaining image in the folder, numerically ordered. The
 *            full folder is exposed; callers decide how many to show.
 *
 * Both are empty when no folder/files exist yet, so callers can fall back to
 * a placeholder.
 */
export function getProductImages(slug) {
  const entries = bySlug[slug] ?? [];
  if (entries.length === 0) return { hero: null, gallery: [] };

  const heroIndex = entries.findIndex((e) => e.basename.toLowerCase() === HERO_BASENAME);
  const index = heroIndex === -1 ? 0 : heroIndex;

  return {
    hero: entries[index].url,
    gallery: entries.filter((_, i) => i !== index).map((e) => e.url),
  };
}
