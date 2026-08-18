import Reveal from "../shared/Reveal";
import { BustMark, GreekKey } from "../shared/Motifs";
import { getSection } from "../../data/sections";

const links = [
  { label: "info@marcusscent.com", href: "mailto:info@marcusscent.com" },
  { label: "marcusscent.com", href: "https://marcusscent.com" },
  { label: "@marcusscent", href: "https://instagram.com/marcusscent" },
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
        className="relative z-10 flex flex-col items-center gap-7 max-w-xl"
        style={{ "--stagger-step": "120ms" }}
      >
        <div className="flex items-center gap-3">
          <span className="font-display text-[10px] tracking-[0.3em] text-gold/60">
            {section?.numeral}
          </span>
          <span aria-hidden="true" className="w-6 h-px bg-gold/30" />
          <span className="font-display text-[10px] md:text-xs tracking-[0.35em] uppercase text-gold">
            Contact
          </span>
        </div>

        <BustMark className="w-12 h-14 text-gold" />

        <h2 className="font-display text-4xl md:text-6xl uppercase tracking-[0.06em] text-cream leading-[1.05]">
          Join the Waitlist
        </h2>

        <GreekKey repeat={10} className="w-44 h-4 text-gold/55" />

        <div className="flex flex-col gap-2 font-body text-base md:text-lg text-cream-dim">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noreferrer" : undefined}
              className="relative inline-block hover:text-gold transition-colors duration-500"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="mailto:info@marcusscent.com?subject=Waitlist"
          className="group relative mt-5 overflow-hidden border border-gold px-10 py-4 font-display text-[11px] md:text-xs tracking-[0.28em] uppercase text-gold transition-colors duration-500 hover:text-ink"
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
