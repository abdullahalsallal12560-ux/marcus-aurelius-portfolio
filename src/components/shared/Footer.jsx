import { BustMark, GreekKey } from "./Motifs";

export default function Footer() {
  return (
    <footer className="border-t border-gold/20 py-10 px-5">
      <GreekKey repeat={16} className="w-full h-3 text-gold/40 mb-8" />
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <div className="flex items-center gap-2">
          <BustMark className="w-5 h-6 text-gold" />
          <span className="font-display text-[11px] tracking-[0.25em] uppercase text-cream-dim">
            Marcus Aurelius Perfumes
          </span>
        </div>
        <p className="font-script text-sm text-gold-soft">Not for everyone. That's the point.</p>
        <p className="font-body text-xs text-cream-dim/70">© 2026 Marcus Aurelius Perfumes</p>
      </div>
    </footer>
  );
}
