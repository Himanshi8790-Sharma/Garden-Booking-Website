import { Metadata } from "next";
import CategoryGalleryView, {
  GalleryItemImage,
} from "../../../../components/gallery/CategoryGalleryView";

export const metadata: Metadata = {
  title: "Birthday & Party Gallery in Jaipur | Helping Garden Club",
  description:
    "Explore birthday parties, celebrations and party setups at Helping Garden Club, Jaipur.",
  keywords: [
    "Birthday & Party Gallery in Jaipur",
    "birthday party venue Helping Garden Club",
    "anniversary venue Jaipur garden",
  ],
};

const birthdayImages: GalleryItemImage[] = [
  {
    src: "/image/birthday1.jpeg",
    title: "बर्थडे पार्टी डेकोरेशन (Birthday Party Setup)",
    alt: "Birthday party setup at Helping Garden Club Jaipur",
    category: "Birthday & Party",
  },
  {
    src: "/image/birthday2.jpeg",
    title: "बर्थडे सेलिब्रेशन एरिया (Celebration Lawn)",
    alt: "Birthday celebration lawn area at Helping Garden Club",
    category: "Birthday & Party",
  },
  {
    src: "/image/birthday3.jpeg",
    title: "पार्टी लाइटिंग एवं डेकोर (Balloon & Lights)",
    alt: "Party lighting and balloon setup at Helping Garden Club Jaipur",
    category: "Birthday & Party",
  },
  // {
  //   src: "/image/family.jpeg",
  //   title: "फैमिली सेलिब्रेशन एरिया (Family Event)",
  //   alt: "Family celebration area at Helping Garden Club Jaipur",
  //   category: "Birthday & Party",
  // },
  // {
  //   src: "/image/swing.jpeg",
  //   title: "गार्डन स्विंग / झूला (Garden Swing Area)",
  //   alt: "Garden swing for birthday parties at Helping Garden Club",
  //   category: "Birthday & Party",
  // },
  // {
  //   src: "/image/anniversary.jpeg",
  //   title: "एनीवर्सरी एवं रिसेप्शन (Anniversary Venue)",
  //   alt: "Anniversary party setup at Helping Garden Club Jaipur",
  //   category: "Birthday & Party",
  // },
];

export default function BirthdayPartyGalleryPage() {
  return (
    <main className="w-full min-h-screen bg-surface">
      <CategoryGalleryView
        title="Birthday & Party Gallery"
        subtitle="Birthday Celebrations, Anniversaries, Family Bashes & Night Parties in Jaipur"
        badge="Birthday & Party"
        backUrl="/gallery/garden"
        backLabel="← Garden Gallery"
        images={birthdayImages}
      />
    </main>
  );
}
