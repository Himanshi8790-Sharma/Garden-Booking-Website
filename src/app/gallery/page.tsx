import { Metadata } from "next";
import GalleryClientView from "../../components/gallery/GalleryClientView";

export const metadata: Metadata = {
  title: "Photo Gallery | Helping Garden Club - Luxury Event Venue",
  description:
    "Explore our photo gallery of open-air weddings, birthday parties, anniversary celebrations, garden lawns, and swimming pool events at Helping Garden Club.",

  keywords: [
    "garden venue",
    "wedding venue",
    "event venue",
    "birthday celebrations",
    "anniversary celebrations",
    "garden parties",
    "swimming pool",
    "outdoor events",
  ],

  openGraph: {
    title: "Photo Gallery | Helping Garden Club - Luxury Event Venue",
    description:
      "Curated visual gallery of weddings, milestone celebrations, lush lawns, and swimming pool events.",
    images: ["/images/HeroGarden.jpg"],
    type: "website",
  },
};

export default function GalleryPage() {
  return (
    <main className="w-full min-h-screen overflow-x-hidden bg-[var(--background)]">
      <GalleryClientView />
    </main>
  );
}
