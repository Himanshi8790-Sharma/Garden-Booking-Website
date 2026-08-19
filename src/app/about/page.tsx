import { Metadata } from "next";
import AboutPageHero from "../../components/about/AboutPageHero";
import AboutStorySection from "../../components/about/AboutStorySection";
import AboutExperienceSection from "../../components/about/AboutExperienceSection";
import AboutFeaturesSection from "../../components/about/AboutFeaturesSection";
import AboutCTASection from "../../components/about/AboutCTASection";

export const metadata: Metadata = {
  title: "About Us | Helping Garden Club - Luxury Garden & Event Venue",
  description:
    "Learn about Helping Garden Club, Jaipur's premier luxury garden venue for weddings, birthday parties, anniversaries, swimming pool bashes, and private celebrations.",

  keywords: [
    "garden venue",
    "wedding venue",
    "birthday party venue",
    "anniversary venue",
    "private event venue",
    "outdoor event venue",
    "swimming pool venue",
    "garden booking",
  ],

  openGraph: {
    title: "About Us | Helping Garden Club - Luxury Garden & Event Venue",
    description:
      "Discover Jaipur's premier luxury garden venue for weddings, birthday parties, anniversaries, and private pool events.",
    images: ["/images/garden.webp"],
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main className="w-full min-h-screen overflow-x-hidden">
      {/* 1. Hero Header */}
      <AboutPageHero />

      {/* 2. Our Story & Philosophy */}
      <AboutStorySection />

      {/* 3. Supported Occasions & Experiences */}
      <AboutExperienceSection />

      {/* 4. Why Choose Us / Venue Highlights */}
      <AboutFeaturesSection />

      {/* 5. High-Impact Closing CTA */}
      <AboutCTASection />
    </main>
  );
}
