# Product photography — auto-discovered

Drop image files into the matching folder — no filename wiring, no code
changes. `src/utils/productGallery.js` glob-imports every `.jpg`/`.png`/
`.jpeg`/`.webp` in these folders and picks them up on the next rebuild:

- `maxima/`
- `maximus/`
- `roma-juliette/`
- `romeo-di-roma/`

## Ordering

Files sort alphanumerically. **The first file becomes the hero shot**; the
next four become the thumbnail strip under that product's card. That is why
each folder has a `0-bottle-main.jpg` — the `0-` prefix pins it to first
position. Keep that convention when swapping a hero.

## These files are optimised

Originals are preserved in `media-source/products-original/` (gitignored, not
deployed). The copies here are resized to a 1400px long edge and saved as
progressive JPEG q82 — enough for a 2x retina display at the sizes actually
rendered.

This matters: the raw originals totalled **199MB** (one was 22MB), which
produced a 194MB build. Optimised, the same images are **7.6MB** and the whole
build is 12MB. If you drop new raw exports in here, re-run the optimisation
before deploying or the build will balloon again.

To re-optimise after adding files, the transform is: convert to RGB JPEG,
longest edge ≤1400px, quality 82, progressive. Any image tool will do it —
Squoosh, ImageMagick, or the Pillow snippet used originally.

## Why not `public/images/products/`?

`import.meta.glob` only sees files inside the source tree; `public/` bypasses
Vite's module graph entirely and is copied verbatim. Hence `src/assets/`,
unlike the brand logo and videos which are referenced by fixed paths.

An empty folder is safe — `getProductImages(slug)` returns
`{ hero: null, gallery: [] }` and the card falls back to its gold-gradient
placeholder.
