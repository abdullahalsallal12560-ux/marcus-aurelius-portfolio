import Reveal from "../shared/Reveal";
import { BustMark, GreekKey } from "../shared/Motifs";
import { getSection } from "../../data/sections";
import { useT } from "../../i18n/useLocale";

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
  const t = useT();
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
          <span className="meta-label text-gold/90">
            {section?.numeral}
          </span>
          <span aria-hidden="true" className="w-6 h-px bg-gold/30" />
          <span className="meta-label text-gold">
            {t.contactSection.eyebrow}
          </span>
        </div>

        <BustMark className="w-12 h-14 text-gold" />

        <h2 className="font-display text-4xl md:text-6xl uppercase tracking-[0.06em] text-cream leading-[1.05]">
          {t.contactSection.title}
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
              <span className="meta-label text-gold/85 group-hover:text-gold transition-colors duration-500">
                {t.contactSection.kinds[d.kind.toLowerCase()] ?? d.kind}
              </span>
              <span
                dir="ltr"
                className="font-display text-lg md:text-2xl tracking-[0.06em] text-cream group-hover:text-gold-soft transition-colors duration-500 break-all"
              >
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
              <span className="meta-label-sm text-gold/85">
                {t.contactSection.kinds[d.kind.toLowerCase()] ?? d.kind}
              </span>
              <span
                dir="ltr"
                className="font-body text-lg md:text-xl text-cream-dim group-hover:text-gold transition-colors duration-500 tabular-nums"
              >
                {d.label}
              </span>
            </a>
          ))}
        </div>

        <a
          href="mailto:info@marcusscent.com?subject=Waitlist"
          className="group relative mt-5 overflow-hidden border border-gold px-10 py-4 meta-label text-gold transition-colors duration-500 hover:text-ink"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-gold origin-bottom scale-y-0 transition-transform duration-500 ease-out group-hover:scale-y-100"
          />
          <span className="relative">{t.contactSection.title}</span>
        </a>

        {/* Brief item 17 asks for an invitation to collaborate, and the
            section closed on a customer call to action instead. Kept below
            the waitlist rather than beside it: buying is what most readers
            came for, and working together is the quieter second door. */}
        <div className="mt-12 pt-9 border-t border-gold/20 w-full flex flex-col items-center gap-3">
          <h3 className="meta-label text-gold">{t.contactSection.invitation}</h3>
          <p className="font-body text-base md:text-lg text-cream-dim leading-relaxed max-w-xl">
            {t.contactSection.invitationBody}
          </p>
        </div>

        <p className="font-script text-2xl md:text-4xl text-gold-soft mt-10 leading-snug">
          {t.hero.lineOne}
          <span className="block">{t.hero.lineTwo}</span>
        </p>
      </Reveal>
    </section>
  );
}
