# -*- coding: utf-8 -*-
"""Measure the real paginated document rather than the pre-pagination layout.

The earlier check simulated page boundaries against a continuous scroll, which
ignores everything Chrome's paginator does with break-inside and break-after.
This reads the finished PDF, so what it reports is what the reader will see.
"""
import pymupdf, sys, os

D = os.path.dirname(os.path.abspath(__file__))
doc = pymupdf.open(os.path.join(D, "Marcus-Aurelius-Portfolio.pdf"))

MM = 72 / 25.4          # pdf points per mm
TOP_MARGIN = 22 * MM
BOT_MARGIN = 20 * MM

print("pages:", doc.page_count)
print()
print("page   first ink    last ink    top gap   bottom gap")

bad_top, bad_bottom, empty = [], [], []

for i, page in enumerate(doc):
    h = page.rect.height
    # images count as ink. Reading only text blocks is how a portrait sitting
    # one point from the paper edge went unnoticed through several checks.
    boxes = [(b[1], b[3]) for b in page.get_text("blocks") if b[4].strip()]
    for img in page.get_images(full=True):
        for r in page.get_image_rects(img[0]):
            boxes.append((r.y0, r.y1))
    if not boxes:
        empty.append(i + 1)
        continue

    first = min(b[0] for b in boxes)
    last = max(b[1] for b in boxes)
    top_gap = first
    bottom_gap = h - last

    # page 1 is the full-bleed cover and is meant to have no margin
    if i == 0:
        continue

    flag = ""
    if top_gap < TOP_MARGIN - 6:
        bad_top.append(i + 1); flag += "  ** high **"
    if bottom_gap < BOT_MARGIN - 6:
        bad_bottom.append(i + 1); flag += "  ** low **"

    if i < 12 or flag:
        print("%4d %10.1f %11.1f %10.1f %11.1f%s" % (
            i + 1, first, last, top_gap, bottom_gap, flag))

print()
print("expected top margin:    %.1f pt" % TOP_MARGIN)
print("expected bottom margin: %.1f pt" % BOT_MARGIN)
print()
print("pages breaking into the top margin:   ", bad_top or "none")
print("pages breaking into the bottom margin:", bad_bottom or "none")
print("blank pages:                          ", empty or "none")
