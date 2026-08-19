import { useEffect, useState } from "react";

import SectionHeading from "../shared/SectionHeading";
import Reveal from "../shared/Reveal";
import useReveal from "../../hooks/useReveal";
import useMediaQuery from "../../hooks/useMediaQuery";
import { useT } from "../../i18n/useLocale";

// Three streams, tagged with the phase they belong to rather than listed flat,
// so the section reads against the Action Plan instead of floating free of it.
// Deliberately no revenue-share percentages: every other figure on this page is
// real, and inventing a split would be the one soft number in the set.
const streams = [
  {
    role: "Primary",
    phase: "Active",
    title: "Direct sales",
    lede: "100ml Eau de Parfum, sold only from marcusscent.com",
    body:
      "No shop, no distributor, no reseller taking a cut. This is not a limitation being explained away: rent, retail markup and distribution margin are what normally consume the price of a fragrance. Removing all three is what allows the oil to be the expensive part.",
  },
  {
    role: "Acquisition",
    phase: "Launching",
    title: "The discovery set",
    lede: "The full collection, four fragrances at 10ml each",
    body:
      "Ten millilitres is a size you can actually wear, not a vial. Nobody commits to a 100ml niche fragrance they have never smelled, and this answers that without ever quoting a lower price for a bottle: what the set costs is credited against the first full bottle. The trial pays for itself, and a buyer who liked it arrives already paid up.",
  },
  {
    role: "Growth",
    phase: "Planned",
    title: "Limited numbered edition",
    lede: "A fifth fragrance, made once. 100 numbered units, reserved and paid before production",
    body:
      "Packaging will cost more than the oil, which is the intention: at this price the buyer should be holding the reason, not just wearing it. Payment at reservation funds the run, so nothing is manufactured on speculation and no capital sits in stock that has not sold.",
  },
];

// First two weeks of the private soft launch. Revenue is at founding-circle
// pricing, which is why it is labelled as such rather than left to imply the
// list price, the arithmetic would not survive a reader checking it.
const tally = [
  { value: 36, label: "Bottles sold" },
  { value: 1400, label: "JOD revenue" },
  { value: 87.9, decimals: 1, suffix: "%", label: "Gross margin" },
  { value: 0, label: "JOD on marketing" },
];

/** Counts up once the strip arrives, so the figures land rather than appear. */
function Figure({ value, decimals = 0, suffix = "", running }) {
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (!running) return;
    if (reducedMotion || value === 0) {
      setShown(value);
      return;
    }

    let frame;
    const started = performance.now();
    const step = (now) => {
      const t = Math.min((now - started) / 3800, 1);
      // Quadratic rather than cubic ease-out. A cubic curve puts about 70% of
      // the count into the first quarter of the run, so the figure appears to
      // snap and then crawl, the reader arrives after the part worth seeing.
      // This spends the time more evenly and still settles rather than stops.
      setShown(value * t * (2 - t));
      if (t < 1) frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [running, value, decimals, reducedMotion]);

  return (
    <span className="tabular-nums">
      {shown.toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}

export default function RevenueStreams() {
  const t = useT();
  // Measured on the figures themselves, not on a wrapper: a tall wrapper can
  // never show 35% of itself on a short viewport, and the count would never
  // run. The negative margins hold the trigger back until the strip is well
  // inside the viewport rather than clipping its top edge, so the count starts
  // once the reader is actually looking at it.
  const [tallyRef, tallyOn] = useReveal({
    threshold: 0.35,
    rootMargin: "-18% 0px -22% 0px",
  });

  return (
    <section id="revenue-streams" className="py-28 md:py-40 px-5 bg-ink-soft">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          id="revenue-streams"
          eyebrow="How We Earn"
          title="Revenue Streams"
          subtitle="Three ways the company earns, all of them direct. Nothing is sold through a middleman, and nothing is discounted to move it."
        />

        <Reveal stagger className="grid md:grid-cols-3 gap-px bg-gold/15 mb-20">
          {streams.map((s, i) => (
            <div
              key={t.revenueStreams.streams[i].title}
              className="group relative bg-ink-soft p-8 md:p-9 flex flex-col gap-4 transition-colors duration-700 hover:bg-ink"
            >
              <div className="flex items-baseline justify-between gap-3">
                <span className="meta-label-sm text-gold/75 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="meta-label-sm text-gold border border-gold/50 px-3 py-1.5">
                  {t.revenueStreams.streams[i].phase}
                </span>
              </div>

              <div>
                <h3 className="field-label mb-1.5">{t.revenueStreams.streams[i].role}</h3>
                <p className="font-display text-xl md:text-2xl uppercase tracking-[0.04em] text-cream leading-tight">
                  {t.revenueStreams.streams[i].title}
                </p>
              </div>

              <p className="font-script text-lg md:text-xl text-gold-soft leading-snug">{t.revenueStreams.streams[i].lede}</p>
              <p className="font-body text-base text-cream-dim leading-relaxed">{t.revenueStreams.streams[i].body}</p>
            </div>
          ))}
        </Reveal>

        {/* the proof that any of this works */}
        <div>
          <Reveal className="text-center mb-8">
            <h3 className="font-script text-3xl md:text-4xl text-gold-soft mb-3">
              {t.revenueStreams.tractionTitle}
            </h3>
            <p className="font-body text-base md:text-lg text-cream-dim max-w-2xl mx-auto leading-relaxed">
              {t.revenueStreams.tractionLede}
            </p>
          </Reveal>

          <div ref={tallyRef} className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gold/15">
            {tally.map((figure, i) => (
              <div key={figure.label} className="bg-ink-soft px-5 py-9 text-center flex flex-col gap-2.5">
                <span className="font-display text-3xl md:text-[2.6rem] text-gold leading-none">
                  <Figure
                    value={figure.value}
                    decimals={figure.decimals}
                    suffix={figure.suffix}
                    running={tallyOn}
                  />
                </span>
                <span className="meta-label text-cream-dim">
                  {t.revenueStreams.tally[i]}
                </span>
              </div>
            ))}
          </div>

          <Reveal delay={200}>
            <p className="font-body text-base md:text-lg text-cream-dim leading-relaxed text-center max-w-2xl mx-auto mt-10">
              {t.revenueStreams.tractionNote
                .split(t.revenueStreams.tractionEmphasis)
                .flatMap((part, i) =>
                  i === 0
                    ? [part]
                    : [
                        <span key="em" className="text-cream">
                          {t.revenueStreams.tractionEmphasis}
                        </span>,
                        part,
                      ]
                )}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
