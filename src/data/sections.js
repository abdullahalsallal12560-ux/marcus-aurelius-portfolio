// Single source of truth for the 17 required portfolio sections.
// Drives both the Table of Contents (index nav) and the Roman numeral
// shown on each section heading, so the two can never drift apart.

export const SECTIONS = [
  { id: "hero", numeral: "I", label: "Cover" },
  { id: "business-idea", numeral: "II", label: "Business Idea" },
  { id: "company-overview", numeral: "III", label: "Company Overview" },
  { id: "vision-mission", numeral: "IV", label: "Vision & Mission" },
  { id: "core-values", numeral: "V", label: "Core Values" },
  { id: "business-model", numeral: "VI", label: "Business Model" },
  { id: "products", numeral: "VII", label: "Products" },
  { id: "brand-identity", numeral: "VIII", label: "Brand Identity" },
  { id: "thinking-method", numeral: "IX", label: "Thinking Method" },
  { id: "market-analysis", numeral: "X", label: "Market Analysis" },
  { id: "smart-goals", numeral: "XI", label: "SMART Goals" },
  { id: "action-plan", numeral: "XII", label: "Action Plan" },
  { id: "revenue-streams", numeral: "XIII", label: "Revenue Streams" },
  { id: "growth-strategy", numeral: "XIV", label: "Growth Strategy" },
  { id: "website-strategy", numeral: "XV", label: "Website Strategy" },
  { id: "portfolio-design", numeral: "XVI", label: "Portfolio & Design" },
  { id: "contact", numeral: "XVII", label: "Contact" },
];

const bySlug = Object.fromEntries(SECTIONS.map((s) => [s.id, s]));

export function getSection(id) {
  return bySlug[id] ?? null;
}
