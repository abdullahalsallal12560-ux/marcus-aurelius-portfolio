import { useEffect, useState } from "react";

import { LocaleProvider } from "./i18n/LocaleProvider";
import { useT } from "./i18n/useLocale";

import Nav from "./components/shared/Nav";
import Footer from "./components/shared/Footer";
import SectionDivider from "./components/shared/SectionDivider";
import { ContentsRail, ContentsOverlay } from "./components/shared/TableOfContents";

import Hero from "./components/sections/Hero";
import BusinessIdea from "./components/sections/BusinessIdea";
import CompanyOverview from "./components/sections/CompanyOverview";
import VisionMission from "./components/sections/VisionMission";
import CoreValues from "./components/sections/CoreValues";
import BusinessModel from "./components/sections/BusinessModel";
import Products from "./components/sections/Products";
import BrandIdentity from "./components/sections/BrandIdentity";
import ThinkingMethod from "./components/sections/ThinkingMethod";
import MarketAnalysis from "./components/sections/MarketAnalysis";
import SmartGoals from "./components/sections/SmartGoals";
import ActionPlan from "./components/sections/ActionPlan";
import RevenueStreams from "./components/sections/RevenueStreams";
import GrowthStrategy from "./components/sections/GrowthStrategy";
import WebsiteStrategy from "./components/sections/WebsiteStrategy";
import PortfolioDesign from "./components/sections/PortfolioDesign";
import Contact from "./components/sections/Contact";
import Signature from "./components/sections/Signature";

function Portfolio() {
  const t = useT();
  const [contentsOpen, setContentsOpen] = useState(false);

  useEffect(() => {
    // The browser resolves #anchors before React has rendered the sections, so
    // a deep link (a shared Table of Contents entry, a bookmark) would land at
    // the top of the page. Re-apply it once the markup actually exists.
    const id = decodeURIComponent(window.location.hash.replace("#", ""));
    if (id) {
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "auto", block: "start" });
      });
    }

    // ?settled=1 resolves every reveal immediately, for capturing static
    // screenshots (e.g. for the report) with no risk of catching mid-animation.
    if (new URLSearchParams(window.location.search).has("settled")) {
      document.documentElement.classList.add("motion-settled");
    }
  }, []);

  return (
    <>
      <a
        href="#business-idea"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:start-3 focus:z-[70] focus:bg-gold focus:text-ink focus:px-4 focus:py-2 focus:font-display focus:font-semibold focus:text-[13px] focus:tracking-[0.2em] focus:uppercase"
      >
        {t.nav.skip}
      </a>

      {/* While the Contents overlay is open everything behind it is inert, so
          clicks and keyboard focus cannot reach the page underneath. */}
      <div inert={contentsOpen ? "" : undefined}>
        <Nav onOpenContents={() => setContentsOpen(true)} />
        <ContentsRail />
      </div>

      <ContentsOverlay open={contentsOpen} onClose={() => setContentsOpen(false)} />

      <main inert={contentsOpen ? "" : undefined}>
        <Hero />
        <BusinessIdea />
        <SectionDivider />
        <CompanyOverview />
        <VisionMission />
        <SectionDivider />
        <CoreValues />
        <BusinessModel />
        <Products />
        <BrandIdentity />
        <SectionDivider />
        <ThinkingMethod />
        <MarketAnalysis />
        <SectionDivider />
        <SmartGoals />
        <ActionPlan />
        <RevenueStreams />
        <SectionDivider />
        <GrowthStrategy />
        <WebsiteStrategy />
        <PortfolioDesign />
        <Contact />
        {/* outside the seventeen numbered sections, no numeral, not in the rail */}
        <Signature />
      </main>

      <div inert={contentsOpen ? "" : undefined}>
        <Footer />
      </div>
    </>
  );
}

/**
 * The provider wraps the page rather than living inside it, because switching
 * language rewrites <html lang> and <html dir> and every section below has to
 * re-render against the new dictionary at the same moment.
 */
export default function App() {
  return (
    <LocaleProvider>
      <Portfolio />
    </LocaleProvider>
  );
}
