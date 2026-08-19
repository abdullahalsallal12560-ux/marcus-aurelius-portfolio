import SectionHeading from "../shared/SectionHeading";
import Reveal from "../shared/Reveal";
import { useT } from "../../i18n/useLocale";

export default function BusinessModel() {
  const t = useT();
  return (
    <section id="business-model" className="py-28 md:py-40 px-5 bg-ink">
      <div className="max-w-3xl mx-auto text-center">
        <SectionHeading id="business-model" eyebrow="How We Sell" title="Business Model" />

        <Reveal stagger className="flex flex-col items-center">
          <p className="font-display text-3xl md:text-5xl lg:text-6xl uppercase tracking-[0.06em] text-gold leading-[1.1] mb-3">
            {t.businessModel.headline}
          </p>
          <span aria-hidden="true" className="block w-20 h-px bg-gold/40 mb-9" />

          <p className="font-body text-lg md:text-xl leading-relaxed text-cream-dim">
            {t.businessModel.lead}
            <span className="text-cream">{t.businessModel.emphasis}</span>
            {t.businessModel.rest}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
