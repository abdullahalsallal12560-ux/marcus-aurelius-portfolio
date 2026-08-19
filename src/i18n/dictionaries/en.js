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
