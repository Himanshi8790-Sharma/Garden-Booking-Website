import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FiArrowLeft, FiArrowRight, FiImage } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Garden & Event Gallery | Helping Garden Club Jaipur",
  description:
    "Explore our garden venue, wedding decorations, birthday celebrations and beautiful event setups in Jaipur.",
  keywords: [
    "garden venue Jaipur",
    "wedding decoration Jaipur",
    "birthday party venue Jaipur",
    "Helping Garden Club gallery",
  ],
};

const subCategories = [
  {
    id: "venue",
    title: "Garden Venue",
    subtitle: "Beautiful Garden Venue in Jaipur",
    description: "विशाल हरा-भरा गार्डन, प्राकृतिक लैंडस्केप, प्रवेश द्वार एवं सीटिंग एरिया",
    image: "/image/garden1.jpeg",
    link: "/gallery/garden/venue",
    count: "8 तस्वीरें",
    badge: "🌿 वेन्यू",
  },
  {
    id: "wedding-decoration",
    title: "Wedding & Decoration",
    subtitle: "Wedding & Event Decoration at Our Garden Venue",
    description: "भव्य वेडिंग सेटअप, स्टेज फ्लावर डेकोरेशन, रेड कारपेट एवं एल.ई.डी. सजावट",
    image: "/image/wedding1.jpeg",
    link: "/gallery/garden/wedding-decoration",
    count: "8 तस्वीरें",
    badge: "💐 डेकोरेशन",
  },
  {
    id: "birthday-party",
    title: "Birthday & Party",
    subtitle: "Birthday & Party Celebrations at Our Garden",
    description: "बर्थडे पार्टी, एनीवर्सरी, फैमिली इवेंट्स एवं नाइट पार्टी डेकोरेशन",
    image: "/image/birthday1.jpeg",
    link: "/gallery/garden/birthday-party",
    count: "6 तस्वीरें",
    badge: "🎂 पार्टी",
  },
];

export default function GardenGalleryIndexPage() {
  return (
    <main className="w-full min-h-screen bg-surface py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Top Back Navigation Link */}
        <div className="mb-6 sm:mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary)] text-white hover:bg-[var(--primary-dark)] transition-all text-xs sm:text-sm font-medium shadow-md group"
          >
            <FiArrowLeft className="w-4 h-4 text-[var(--accent)] group-hover:-translate-x-1 transition-transform" />
            <span>← वापस जाएं (Back to Home)</span>
          </Link>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--accent)]/15 border border-[var(--accent)]/30 text-[var(--primary)] text-xs font-semibold uppercase tracking-wider mb-3">
            <FiImage className="w-4 h-4 text-[var(--accent)]" />
            <span>Garden & Event Gallery</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[var(--primary-dark)] tracking-tight">
            Garden & Event Gallery
          </h1>
          <p className="mt-3 text-sm sm:text-base text-muted-custom font-sans leading-relaxed">
            Explore our garden venue, wedding decorations, birthday celebrations and beautiful event setups in Jaipur.
          </p>
          <div className="w-16 h-1 bg-[var(--accent)] mx-auto mt-4 rounded-full" />
        </div>

        {/* 3 Sub-Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {subCategories.map((cat) => (
            <Link
              key={cat.id}
              href={cat.link}
              className="group relative flex flex-col justify-between h-96 sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border border-[var(--border)] bg-card-custom transition-all duration-300 hover:shadow-2xl hover:border-[var(--accent)] active:scale-[0.98]"
            >
              {/* Background Image */}
              <Image
                src={cat.image}
                alt={cat.title + " - Helping Garden Club Jaipur"}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300 group-hover:from-black/95" />

              {/* Top Badge */}
              <div className="relative z-10 p-4 flex justify-between items-center">
                <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-[var(--primary-dark)]/90 text-[var(--accent-light)] border border-[var(--accent)]/30 backdrop-blur-md">
                  {cat.badge}
                </span>
                <span className="px-3 py-1 rounded-full text-[11px] font-medium bg-black/50 text-white border border-white/20 backdrop-blur-md">
                  {cat.count}
                </span>
              </div>

              {/* Bottom Content Area */}
              <div className="relative z-10 p-6 text-white flex flex-col justify-end">
                <span className="text-xs text-[var(--accent-light)] font-medium uppercase tracking-wider">
                  {cat.subtitle}
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white group-hover:text-[var(--accent-light)] transition-colors mt-1">
                  {cat.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 line-clamp-2">
                  {cat.description}
                </p>

                {/* View Photos CTA */}
                <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary)] text-white text-xs font-semibold w-fit shadow-md group-hover:bg-[var(--accent)] group-hover:text-[var(--primary-dark)] transition-all duration-200">
                  <span>View Photos</span>
                  <FiArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
