# Submission

`Marcus-Aurelius-Portfolio.pdf` is the document to upload to eLearning. 34 pages,
A4, real vector text rather than page images, so it is selectable and searchable.

## Why this exists alongside the website

The assignment brief accepts a personal website as the portfolio format, but the
submission itself is *files uploaded to eLearning* — a URL is not a file. This PDF
is that file, and it carries the live link inside it.

The two are not the same document. The site states the case; the PDF carries the
evidence. Figures that would be unwise to publish to competitors — the loaded cost
per bottle, the oil prices, the founding-circle round at half list — are set out in
full here and deliberately left off the public site.

## Rebuilding it

```
cd source && node build.cjs
```

The five `part*.html` files are concatenated in order and rendered through headless
Chromium. `part1.html` holds the stylesheet and the cover; the brand lockup is
embedded in it as base64 from `lockup.b64`, so the document has no external
dependencies except the Google Fonts request.

Editing the copy means editing the part files. The build is deterministic: same
input, same 34 pages.
