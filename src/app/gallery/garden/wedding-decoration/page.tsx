import { Metadata } from "next";
import CategoryGalleryView, {
  GalleryItemImage,
} from "../../../../components/gallery/CategoryGalleryView";

export const metadata: Metadata = {
  title: "Wedding & Decoration Gallery in Jaipur | Helping Garden Club",
  description:
    "Explore wedding decorations, stage setups and beautiful event arrangements at Helping Garden Club, Jaipur.",
  keywords: [
    "Wedding & Decoration Gallery in Jaipur",
    "wedding setup Helping Garden Club",
    "stage decoration Jaipur garden",
  ],
};

const weddingImages: GalleryItemImage[] = [
  {
    src: "/image/wedding1.jpeg",
    title: "वेडिंग मण्डप डेकोरेशन (Mandap Setup)",
    alt: "Wedding mandap decoration at Helping Garden Club Jaipur",
    category: "Wedding & Decoration",
  },
  {
    src: "/image/wedding2.jpeg",
    title: "स्टेज फ्लावर डेकोरेशन (Floral Stage)",
    alt: "Floral stage decoration at Helping Garden Club wedding venue",
    category: "Wedding & Decoration",
  },
  {
    src: "/image/decoration1.jpeg",
    title: "पोल लाइट व रस्सी सजावट (Lighting Poles)",
    alt: "Decoration poles and lighting at Helping Garden Club Jaipur",
    category: "Wedding & Decoration",
  },
  {
    src: "/image/decoration2.jpeg",
    title: "फैमिली सीटिंग डेकोरेशन (Seating Decor)",
    alt: "Family seating arrangement and decor at Helping Garden Club",
    category: "Wedding & Decoration",
  },
  {
    src: "/image/decoration3.jpeg",
    title: "स्टेज सोफा एवं फ्लावर डेकोरेशन (Stage Couch)",
    alt: "Stage sofa and flower arrangement at Helping Garden Club",
    category: "Wedding & Decoration",
  },
  {
    src: "/image/decoration4.jpeg",
    title: "रेड कारपेट एवं एंट्री गेट (Red Carpet)",
    alt: "Red carpet entry gate decoration at Helping Garden Club",
    category: "Wedding & Decoration",
  },
  {
    src: "/image/decoration5.jpeg",
    title: "70 एल.ई.डी. लाइट डेकोरेशन (LED Illumination)",
    alt: "LED light setup at Helping Garden Club Jaipur",
    category: "Wedding & Decoration",
  },
  {
    src: "/image/decoration6.jpeg",
    title: "राजस्थानी कोठी एल.ई.डी. डेकोरेशन (Kothi Decor)",
    alt: "Rajasthani kothi LED illumination at Helping Garden Club",
    category: "Wedding & Decoration",
  },
];

export default function WeddingDecorationGalleryPage() {
  return (
    <main className="w-full min-h-screen bg-surface">
      <CategoryGalleryView
        title="Wedding & Decoration Gallery"
        subtitle="Wedding Setups, Stage Floral Decor, LED Lighting & Entry Gates in Jaipur"
        badge="Wedding & Decoration"
        backUrl="/gallery/garden"
        backLabel="← Garden Gallery"
        images={weddingImages}
      />
    </main>
  );
}
