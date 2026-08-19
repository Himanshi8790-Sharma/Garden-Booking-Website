import { Metadata } from "next";
import EventsPageHero from "../../components/events/EventsPageHero";
import EventsPageCategories from "../../components/events/EventsPageCategories";
import EventsPageFeatured from "../../components/events/EventsPageFeatured";
import EventsPageWhyUs from "../../components/events/EventsPageWhyUs";
import EventsPageGallery from "../../components/events/EventsPageGallery";
import EventsPageCTA from "../../components/events/EventsPageCTA";

export const metadata: Metadata = {
  title: "Events & Celebrations | Helping Garden Club - Luxury Venue",
  description:
    "Explore weddings, birthday parties, anniversaries, family celebrations, and pool parties hosted at Helping Garden Club in Jaipur.",

  keywords: [
    "garden event venue",
    "wedding venue",
    "birthday party venue",
    "anniversary celebration",
    "private events",
    "outdoor celebrations",
    "pool parties",
  ],

  openGraph: {
    title: "Events & Celebrations | Helping Garden Club - Luxury Venue",
    description:
      "Celebrate your weddings, birthday bashes, anniversary galas, and swimming pool parties at Helping Garden Club.",
    images: ["/images/wedding.webp"],
    type: "website",
  },
};

export default function EventsPage() {
  return (
    <main className="w-full min-h-screen overflow-x-hidden">
      {/* 1. Full-Width Hero Section */}
      <EventsPageHero />

      {/* 2. Visual Event Categories Showcase */}
      <EventsPageCategories />

      {/* 3. Featured Experience Split Layout */}
      <EventsPageFeatured />

      {/* 4. Why Celebrate Here */}
      <EventsPageWhyUs />

      {/* 5. Visual Gallery Showcase */}
      <EventsPageGallery />

      {/* 6. High-Impact Booking CTA */}
      <EventsPageCTA />
    </main>
  );
}
