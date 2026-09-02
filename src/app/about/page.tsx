import { Metadata } from "next";

import AboutPageHero from "../../components/about/AboutPageHero";
import AboutStorySection from "../../components/about/AboutStorySection";
import AboutStatsSection from "@/src/components/about/AboutStatsSection";
import AboutVisionMissionSection from "@/src/components/about/AboutVisionMissionSection";
import AboutFeaturesSection from "../../components/about/AboutFeaturesSection";
import AboutCTASection from "../../components/about/AboutCTASection";

export const metadata: Metadata = {
  title: "About Us | Helping Garden Club - Garden & Event Venue in Jaipur",

  description:
    "Learn about Helping Garden Club, a garden and event venue in Jaipur for weddings, birthday parties, anniversaries, private celebrations, and swimming pool events.",

  keywords: [
    "Helping Garden Club Jaipur",
    "garden venue in Jaipur",
    "wedding venue in Jaipur",
    "party garden in Jaipur",
    "birthday party venue in Jaipur",
    "anniversary party venue in Jaipur",
    "private event venue in Jaipur",
    "outdoor event venue in Jaipur",
    "swimming pool venue in Jaipur",
    "garden booking in Jaipur",
  ],

  openGraph: {
    title:
      "About Us | Helping Garden Club - Garden & Event Venue in Jaipur",

    description:
      "Discover Helping Garden Club, a beautiful garden and event venue in Jaipur for weddings, birthdays, anniversaries, private parties, and pool celebrations.",

    images: [
      {
        url: "/images/garden.webp",
        width: 1200,
        height: 630,
        alt: "Helping Garden Club garden and outdoor event venue in Jaipur",
      },
    ],

    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main className="w-full min-h-screen overflow-x-hidden">

      {/* 1. About Hero */}
      <AboutPageHero />

      {/* 2. Our Story / Who We Are */}
      <AboutStorySection />

      {/* 3. Venue Highlights & Quick Facts */}
      <AboutStatsSection />

      {/* 4. Our Vision & Mission */}
      <AboutVisionMissionSection />

      {/* 5. Why Choose Helping Garden Club */}
      <AboutFeaturesSection />

      {/* 6. Contact / Booking CTA */}
      <AboutCTASection />

    </main>
  );
}