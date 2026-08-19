import { Metadata } from "next";
import PricingPageHero from "../../components/pricing/PricingPageHero";
import PricingPackagesSection from "../../components/pricing/PricingPackagesSection";
import PricingInclusionsSection from "../../components/pricing/PricingInclusionsSection";
import PricingEventMatrixSection from "../../components/pricing/PricingEventMatrixSection";
import PricingCustomSection from "../../components/pricing/PricingCustomSection";
import PricingBookingStepsSection from "../../components/pricing/PricingBookingStepsSection";
import PricingFaqSection from "../../components/pricing/PricingFaqSection";
import PricingVisualSection from "../../components/pricing/PricingVisualSection";
import PricingPageCTA from "../../components/pricing/PricingPageCTA";

export const metadata: Metadata = {
  title: "Venue Packages & Pricing | Helping Garden Club - Luxury Venue",
  description:
    "Transparent venue packages for weddings, birthday parties, anniversaries, and private pool events at Helping Garden Club in Jaipur.",

  keywords: [
    "garden venue pricing",
    "wedding venue pricing",
    "birthday party venue",
    "event venue",
    "garden booking",
    "private event venue",
    "pool party venue",
  ],

  openGraph: {
    title: "Venue Packages & Pricing | Helping Garden Club - Luxury Venue",
    description:
      "Explore transparent venue pricing, package inclusions, event-based recommendations, and booking steps for your next celebration.",
    images: ["/images/garden.webp"],
    type: "website",
  },
};

export default function PricingPage() {
  return (
    <main className="w-full min-h-screen overflow-x-hidden bg-[var(--background)]">
      {/* 1. Hero Header */}
      <PricingPageHero />

      {/* 2. Editorial Package Selector */}
      <PricingPackagesSection />

      {/* 3. Included Venue Privileges */}
      <PricingInclusionsSection />

      {/* 4. Event-to-Package Recommendation Matrix */}
      <PricingEventMatrixSection />

      {/* 5. Custom Event Request Bar */}
      <PricingCustomSection />

      {/* 6. 4-Step Booking Process */}
      <PricingBookingStepsSection />

      {/* 7. Accessible Accordion FAQ */}
      <PricingFaqSection />

      {/* 8. Full-Bleed Venue Visual Reminder */}
      <PricingVisualSection />

      {/* 9. Final Pricing & Availability Conversion Area */}
      <PricingPageCTA />
    </main>
  );
}
