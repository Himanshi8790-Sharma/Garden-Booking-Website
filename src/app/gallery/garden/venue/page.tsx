import { Metadata } from "next";
import CategoryGalleryView, {
  GalleryItemImage,
} from "../../../../components/gallery/CategoryGalleryView";

export const metadata: Metadata = {
  title: "Garden Venue Gallery in Jaipur | Helping Garden Club",
  description:
    "Explore Helping Garden Club's beautiful garden venue, outdoor spaces and event areas in Jaipur.",
  keywords: [
    "Garden Venue Gallery in Jaipur",
    "Helping Garden Club venue photos",
    "outdoor event lawn Jaipur",
  ],
};

const venueImages: GalleryItemImage[] = [
  {
    src: "/image/garden1.jpeg",
    title: "मुख्य गार्डन लॉन व्यू (Main Lawn View)",
    alt: "Helping Garden Club garden venue in Jaipur",
    category: "Garden Venue",
  },
  {
    src: "/image/garden2.jpeg",
    title: "हरा-भरा गार्डन एवं लैंडस्केप (Lush Greenery)",
    alt: "Lush green lawn and outdoor landscape at Helping Garden Club Jaipur",
    category: "Garden Venue",
  },
  {
    src: "/image/garden3.jpeg",
    title: "ओपन-एयर सीटिंग एरिया (Outdoor Lawn)",
    alt: "Outdoor seating area at Helping Garden Club event venue Jaipur",
    category: "Garden Venue",
  },
  {
    src: "/image/garden4.jpeg",
    title: "नाइट गार्डन लाइट व्यू (Night Lawn View)",
    alt: "Night illumination of Helping Garden Club lawn in Jaipur",
    category: "Garden Venue",
  },
  {
    src: "/image/garden5.jpeg",
    title: "गार्डन वॉकवे व सजावट (Garden Walkway)",
    alt: "Garden walkway and event space at Helping Garden Club Jaipur",
    category: "Garden Venue",
  },
  {
    src: "/image/garden6.jpeg",
    title: "प्राकृतिक सुंदरता एवं पेड़ (Natural Trees)",
    alt: "Lush green trees and natural garden setting in Jaipur venue",
    category: "Garden Venue",
  },
  {
    src: "/image/garden7.jpeg",
    title: "इवेंट सीटिंग अरेंजमेंट (Event Seating)",
    alt: "Event seating arrangement at Helping Garden Club venue Jaipur",
    category: "Garden Venue",
  },
  {
    src: "/image/garden8.jpeg",
    title: "गार्डन प्रवेश द्वार (Garden Entrance)",
    alt: "Main entrance gate of Helping Garden Club event venue Jaipur",
    category: "Garden Venue",
  },
];

export default function GardenVenueGalleryPage() {
  return (
    <main className="w-full min-h-screen bg-surface">
      <CategoryGalleryView
        title="Garden Venue Gallery"
        subtitle="Beautiful Garden Venue, Lawns & Outdoor Architecture in Jaipur"
        badge="Garden Venue"
        backUrl="/gallery/garden"
        backLabel="← Garden Gallery"
        images={venueImages}
      />
    </main>
  );
}
