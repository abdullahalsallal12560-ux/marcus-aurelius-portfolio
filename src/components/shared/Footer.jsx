import { BustMark, GreekKey } from "./Motifs";

export default function Footer() {
  return (
    <footer className="border-t border-gold/20 py-10 px-5">
      <GreekKey className="w-full text-gold/50 mb-8" />
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <div className="flex items-center gap-2">
          <BustMark className="w-5 h-6 text-gold" />
          <span className="meta-label-sm text-cream-dim">
            Marcus Aurelius Perfumes
          </span>
        </div>
        <p className="font-script text-sm text-gold-soft">Not for everyone. That's the point.</p>
        <p className="font-body text-sm text-cream-dim/80">© 2026 Marcus Aurelius Perfumes</p>
      </div>

    </footer>
  );
}
