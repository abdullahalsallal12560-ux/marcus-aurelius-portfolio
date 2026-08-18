# /public/images and /public/videos

Assets referenced by fixed URL. For the auto-discovered product photography
see `src/assets/products/README.md`.

## `images/brand/`
- `logo-mark.svg` — the early hand-drawn line-art bust. **No longer used in
  the UI**; kept only as a fallback reference.
- `logo-full.png` — the original supplied lockup, black background.
- `logo-bust.png` — the bust cropped out of `logo-full.png` on a transparent
  background. Rendered through a CSS mask by the `BustMark` component, which
  is why it recolours with `text-gold` etc. Used in the nav, footer, Company
  Overview, Brand Identity, Portfolio Design and Contact.
- `logo-lockup.png` — the full lockup (bust + wordmark) on transparency,
  original two-tone colour preserved. Used at large size on the cover.

## `videos/`
Both clips are 9:16 phone footage. They are **not** used as full-bleed
backgrounds — cropping portrait video into a landscape band threw away ~65% of
every frame. Instead each is a contained "light shaft": native aspect ratio,
edges dissolved with a radial mask, gold duotone + grain, via `VideoAccent`.

- `maxima-accent.mp4` + `maxima-accent-poster.jpg` — golden-hour water.
  Placed with **Maxima** (the feminine line).
- `maximus-accent.mp4` + `maximus-accent-poster.jpg` — ocean, citrus and
  jasmine. Placed with **Maximus**, whose note pyramid is literally sea
  breeze, orange/lemon/grapefruit and jasmine.

Encoded to 540×960, H.264 CRF 31, no audio, faststart. The pair went from
**32.6MB to 2.8MB**. Uncompressed originals are in `media-source/`
(gitignored).

On phones and under `prefers-reduced-motion`, `VideoAccent` renders the poster
JPEG as a plain `<img>` — no `<video>` element is created at all, so there is
no download and no battery cost.

## Capturing static screenshots

Append `?settled=1` to the URL (e.g. `.../?settled=1#products`). Every scroll
reveal resolves instantly, so a screenshot can never catch a section
mid-animation or empty — useful for the report document.
