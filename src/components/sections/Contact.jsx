import Reveal from "../shared/Reveal";
import { BustMark, GreekKey } from "../shared/Motifs";
import { getSection } from "../../data/sections";

// The two places a visitor can actually go and find the house are given the
// weight of destinations rather than being set as a line of text.
const destinations = [
  {
    kind: "Website",
    label: "marcusscent.com",
    href: "https://marcusscent.com",
  },
  {
    kind: "Instagram",
    label: "@marcusscent",
    href: "https://instagram.com/marcusscent",
  },
];

const direct = [
  { kind: "Telephone", label: "+962 78 124 3839", href: "tel:+962781243839" },
  { kind: "Email", label: "info@marcusscent.com", href: "mailto:info@marcusscent.com" },
];

export default function Contact() {
  const section = getSection("contact");

  return (
    <section
      id="contact"
      className="relative py-32 md:py-44 px-5 bg-ink overflow-hidden grain flex flex-col items-center justify-center text-center"
    >
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(120vw,900px)] h-[min(120vw,900px)] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(201,162,92,0.13) 0%, rgba(201,162,92,0.04) 40%, transparent 70%)",
        }}
      />

      <Reveal
        stagger
        className="relative z-10 flex flex-col items-center gap-7 max-w-2xl w-full"
        style={{ "--stagger-step": "120ms" }}
      >
        <div className="flex items-center gap-3">
          <span className="font-display text-xs tracking-[0.3em] text-gold/80">
            {section?.numeral}
          </span>
          <span aria-hidden="true" className="w-6 h-px bg-gold/30" />
          <span className="font-display text-xs md:text-[13px] tracking-[0.35em] uppercase text-gold">
            Contact
          </span>
        </div>

        <BustMark className="w-12 h-14 text-gold" />

        <h2 className="font-display text-4xl md:text-6xl uppercase tracking-[0.06em] text-cream leading-[1.05]">
          Join the Waitlist
        </h2>

        <GreekKey className="w-44 text-gold/55" />

        <div className="w-full grid sm:grid-cols-2 gap-4 md:gap-5 mt-2">
          {destinations.map((d) => (
            <a
              key={d.href}
              href={d.href}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col items-center gap-2 border border-gold/35 hover:border-gold px-6 py-7 md:py-8 transition-colors duration-500"
            >
              <span className="font-display text-xs tracking-[0.3em] uppercase text-gold/80 group-hover:text-gold transition-colors duration-500">
                {d.kind}
              </span>
              <span className="font-display text-lg md:text-2xl tracking-[0.06em] text-cream group-hover:text-gold-soft transition-colors duration-500 break-all">
                {d.label}
              </span>
            </a>
          ))}
        </div>

        <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-10">
          {direct.map((d) => (
            <a
              key={d.href}
              href={d.href}
              className="group flex flex-col items-center gap-1.5 hover:text-gold transition-colors duration-500"
            >
              <span className="font-display text-xs tracking-[0.28em] uppercase text-gold/70">
                {d.kind}
              </span>
              <span className="font-body text-lg md:text-xl text-cream-dim group-hover:text-gold transition-colors duration-500 tabular-nums">
                {d.label}
              </span>
            </a>
          ))}
        </div>

        <a
          href="mailto:info@marcusscent.com?subject=Waitlist"
          className="group relative mt-5 overflow-hidden border border-gold px-10 py-4 font-display text-xs md:text-[13px] tracking-[0.28em] uppercase text-gold transition-colors duration-500 hover:text-ink"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-gold origin-bottom scale-y-0 transition-transform duration-500 ease-out group-hover:scale-y-100"
          />
          <span className="relative">Join the Waitlist</span>
        </a>

        <p className="font-script text-2xl md:text-4xl text-gold-soft mt-10 leading-snug">
          Not for everyone.
          <span className="block">That&rsquo;s the point.</span>
        </p>
      </Reveal>
    </section>
  );
}
