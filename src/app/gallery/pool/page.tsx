import { Metadata } from "next";
import CategoryGalleryView, {
  GalleryItemImage,
} from "../../../components/gallery/CategoryGalleryView";

export const metadata: Metadata = {
  title: "Swimming Pool Gallery in Jaipur | Helping Garden Club",
  description:
    "Explore luxury swimming pool photos, poolside party areas and family celebrations at Helping Garden Club, Jaipur.",
  keywords: [
    "Swimming Pool Gallery in Jaipur",
    "pool party venue Jaipur",
    "Helping Garden Club swimming pool",
  ],
};

const poolImages: GalleryItemImage[] = [
  {
    src: "/image/pool1.jpeg",
    title: "डेलाइट स्विमिंग पूल (Daylight Pool View)",
    alt: "Daylight swimming pool view at Helping Garden Club Jaipur",
    category: "Swimming Pool",
  },
  {
    src: "/image/pool3.jpeg",
    title: "लक्जरी स्विमिंग पूल एवं लाउंज (Pool Deck)",
    alt: "Luxury swimming pool deck and lounge at Helping Garden Club",
    category: "Swimming Pool",
  },
  {
    src: "/image/pool4.jpeg",
    title: "पूल साइड पार्टी एरिया (Poolside Party Area)",
    alt: "Poolside party area at Helping Garden Club Jaipur",
    category: "Swimming Pool",
  },
  {
    src: "/image/pool5.jpeg",
    title: "नाइट स्विमिंग पूल लाइटिंग (Night Pool Lights)",
    alt: "Night swimming pool illumination at Helping Garden Club Jaipur",
    category: "Swimming Pool",
  },
  {
    src: "/images/pool.webp",
    title: "पूल पार्टी एवं ओपन-एयर बाश (Pool Bash Lawn)",
    alt: "Outdoor pool party bash lawn at Helping Garden Club venue",
    category: "Swimming Pool",
  },
];

export default function PoolGalleryPage() {
  return (
    <main className="w-full min-h-screen bg-surface">
      <CategoryGalleryView
        title="Swimming Pool Gallery"
        subtitle="हमारे साफ-सुथरे लक्जरी स्विमिंग पूल एवं पूल पार्टी की तस्वीरें"
        badge="Swimming Pool Gallery"
        backUrl="/"
        backLabel="← वापस जाएं (Back to Home)"
        images={poolImages}
      />
    </main>
  );
}
