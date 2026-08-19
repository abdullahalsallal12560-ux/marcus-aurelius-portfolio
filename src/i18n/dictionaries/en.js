/**
 * The source copy. Every other dictionary falls back to this one key by key,
 * so anything not yet translated shows in English rather than disappearing.
 */
export default {
  nav: {
    brand: "Marcus Aurelius",
    contents: "Contents",
    waitlist: "Join the Waitlist",
    waitlistShort: "Waitlist",
    skip: "Skip to content",
    language: "Language",
    languageAria: "Choose a language",
  },

  contents: {
    railAria: "Table of contents",
    title: "Contents",
    close: "Close contents",
    back: "Back to the page",
  },

  // The Roman numerals stay Roman in all three: they are the portfolio's
  // structure, not a word, and the brief numbers the sections this way.
  sections: {
    hero: "Cover",
    "business-idea": "Business Idea",
    "company-overview": "Company Overview",
    "vision-mission": "Vision & Mission",
    "core-values": "Core Values",
    "business-model": "Business Model",
    products: "Products",
    "brand-identity": "Brand Identity",
    "thinking-method": "Thinking Method",
    "market-analysis": "Market Analysis",
    "smart-goals": "SMART Goals",
    "action-plan": "Action Plan",
    "revenue-streams": "Revenue Streams",
    "growth-strategy": "Growth Strategy",
    "website-strategy": "Website Strategy",
    "portfolio-design": "Portfolio & Design",
    contact: "Contact",
  },

  headings: {
    "business-idea": { eyebrow: "Why We Exist", title: "The Business Idea" },
    "company-overview": { eyebrow: "Who We Are", title: "Company Overview" },
    "vision-mission": { eyebrow: "Where We're Going", title: "Vision & Mission" },
    "core-values": { eyebrow: "What We Stand For", title: "Core Values" },
    "business-model": { eyebrow: "How We Sell", title: "Business Model" },
    products: {
      eyebrow: "The Collection",
      title: "Products",
      subtitle: "Four fragrances, four narratives, each produced in limited batches.",
    },
    "brand-identity": { eyebrow: "How We Present", title: "Brand Identity" },
    "thinking-method": { eyebrow: "How We Work", title: "Thinking Method" },
    "market-analysis": { eyebrow: "Where We Compete", title: "Market Analysis" },
    "smart-goals": { eyebrow: "What We're Measuring", title: "SMART Goals" },
    "action-plan": { eyebrow: "How We Get There", title: "Action Plan" },
    "revenue-streams": {
      eyebrow: "How We Earn",
      title: "Revenue Streams",
      subtitle:
        "Three ways the company earns, all of them direct. Nothing is sold through a middleman, and nothing is discounted to move it.",
    },
    "growth-strategy": { eyebrow: "How We Scale", title: "Growth Strategy" },
    "website-strategy": {
      eyebrow: "marcusscent.com",
      title: "Website Strategy",
      subtitle:
        "The company's actual digital presence, built custom, not on a template platform like Shopify, for full control over the user experience.",
    },
    "portfolio-design": { eyebrow: "Design Reasoning", title: "Portfolio Appearance & Design" },
  },

  businessIdea: [
    {
      title: "Problem",
      body: "The niche perfume market is split between two extremes: original, high-quality niche houses priced at $300 and above, and cheap niche-styled brands that cut corners on oil quality to compete on price. There is no middle ground offering real craftsmanship without exploitation.",
    },
    {
      title: "Solution",
      body: "Marcus Aurelius breaks that binary with exclusive, non-derivative blends, carefully selected oils, and fragrances engineered to be magnetic through composition alone, without relying on banned or synthetic pheromone additives.",
    },
    {
      title: "Unique Value Proposition",
      body: "This is not a perfume made to please everyone, and it is not meant to be wearable by everyone. That exclusivity is the point: a selective fragrance built for a defined identity, not a mass-market crowd-pleaser.",
    },
    {
      title: "Target Customers",
      body: "People who want distinction, not just a pleasant scent: buyers looking for individuality, a story, a persona, and quiet confidence before they are looking for a smell.",
    },
  ],

  coreValues: {
    items: [
      { title: "Precision", body: "Every detail is reviewed multiple times before release, without rushing." },
      { title: "Authenticity", body: "No imitation, no cutting corners. Every fragrance is an original blend." },
      { title: "Exclusivity", body: "Not for everyone, by design. Built for those who can carry a strong identity." },
      { title: "Patience over Speed", body: "Time is treated as an investment, not an obstacle." },
      { title: "Confidence & Pride", body: "The brand sells a feeling of distinction, and that feeling shows in every decision, from product to marketing." },
    ],
  },

  visionMission: [
    {
      label: "Vision",
      body: "For Marcus Aurelius to stand among the world's recognized niche fragrance houses. Not a regional brand, but one that competes internationally on quality, identity, and presence.",
    },
    {
      label: "Mission",
      body: "Every detail, no matter how small, is reviewed and refined before it reaches the public. Developing a single fragrance can take up to two years to get the notes exactly right; a single social media post can take four or five days to reach the intended look. Precision and patience are not a side detail here. They are the foundation of the work.",
    },
  ],

  businessModel: {
    headline: "Direct-to-Consumer",
    lead: "Marcus Aurelius operates on a ",
    emphasis: "Direct-to-Consumer (D2C)",
    rest: " model, selling directly to customers through its own website and social channels, without intermediaries in the initial phase. This preserves full control over the customer experience, from packaging to communication, and protects the exclusivity the brand is built on. Releases are produced in limited batches to reinforce demand and maintain brand value.",
  },

  hero: {
    srTitle: "Marcus Aurelius Perfumes",
    logoAlt: "Marcus Aurelius Perfumes",
    lineOne: "Not for everyone.",
    lineTwo: "That's the point.",
    year: "2026",
    scroll: "Scroll",
    scrollAria: "Scroll to the business idea",
  },
};
