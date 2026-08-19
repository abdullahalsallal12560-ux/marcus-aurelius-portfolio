import SectionHeading from "../shared/SectionHeading";
import Reveal from "../shared/Reveal";

const blocks = [
  {
    label: "Vision",
    body: "For Marcus Aurelius to stand among the world’s recognized niche fragrance houses. Not a regional brand, but one that competes internationally on quality, identity, and presence.",
  },
  {
    label: "Mission",
    body: "Every detail, no matter how small, is reviewed and refined before it reaches the public. Developing a single fragrance can take up to two years to get the notes exactly right; a single social media post can take four or five days to reach the intended look. Precision and patience are not a side detail here. They are the foundation of the work.",
  },
];

export default function VisionMission() {
  return (
    <section id="vision-mission" className="py-28 md:py-40 px-5 bg-ink">
      <div className="max-w-5xl mx-auto">
        <SectionHeading id="vision-mission" eyebrow="Where We're Going" title="Vision &amp; Mission" />

        <div className="grid md:grid-cols-2 gap-14 md:gap-20">
          {blocks.map((b, i) => (
            <Reveal key={b.label} variant={i === 0 ? "left" : "right"} delay={i * 120}>
              <h3 className="font-script text-4xl md:text-5xl text-gold mb-6">{b.label}</h3>
              <span aria-hidden="true" className="block w-14 h-px bg-gold/40 mb-6" />
              <p className="font-body text-lg md:text-xl leading-relaxed text-cream-dim">{b.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
