import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FiArrowLeft, FiArrowRight, FiImage } from "react-icons/fi";

export const metadata: Metadata = {
  title: "गैलरी श्रेणियां | Photo Gallery | Helping Garden Club",
  description:
    "Helping Garden Club फोटो गैलरी - गार्डन एवं इवेन्ट्स या स्विमिंग पूल की तस्वीरें देखें।",
};

export default function GalleryIndexPage() {
  return (
    <main className="w-full min-h-screen bg-surface py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
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

        {/* Gallery Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--accent)]/15 border border-[var(--accent)]/30 text-[var(--primary)] text-xs font-semibold uppercase tracking-wider mb-3">
            <FiImage className="w-4 h-4 text-[var(--accent)]" />
            <span>गैलरी श्रेणियां (Photo Gallery)</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[var(--primary-dark)] tracking-tight">
            हमारे गार्डन की झलक
          </h1>
          <p className="mt-3 text-sm sm:text-base text-muted-custom font-sans leading-relaxed">
            अपनी मनपसंद श्रेणी की फोटो गैलरी देखने के लिए कार्ड पर क्लिक करें।
          </p>
          <div className="w-16 h-1 bg-[var(--accent)] mx-auto mt-4 rounded-full" />
        </div>

        {/* Two Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Card 1: Garden */}
          <Link
            href="/gallery/garden"
            className="group relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-xl border border-[var(--border)] bg-card-custom transition-all duration-300 hover:shadow-2xl hover:border-[var(--accent)] active:scale-[0.98]"
          >
            <Image
              src="/image/garden1.jpeg"
              alt="🌿 गार्डन एवं इवेन्ट्स"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            
            <div className="absolute top-4 left-4">
              <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-[var(--primary-dark)]/90 text-[var(--accent-light)] border border-[var(--accent)]/30 backdrop-blur-md">
                🌿 19 तस्वीरें
              </span>
            </div>

            <div className="absolute bottom-0 inset-x-0 p-6 text-white flex flex-col justify-end">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white group-hover:text-[var(--accent-light)] transition-colors">
                गार्डन एवं इवेन्ट्स
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                गार्डन लॉन, शादी, सगाई, बर्थडे एवं सजावट की फोटो गैलरी
              </p>
              <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary)] text-white text-xs sm:text-sm font-semibold w-fit shadow-md group-hover:bg-[var(--accent)] group-hover:text-[var(--primary-dark)] transition-colors">
                <span>तस्वीरें देखें</span>
                <FiArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>

          {/* Card 2: Swimming Pool */}
          <Link
            href="/gallery/pool"
            className="group relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-xl border border-[var(--border)] bg-card-custom transition-all duration-300 hover:shadow-2xl hover:border-[var(--accent)] active:scale-[0.98]"
          >
            <Image
              src="/image/pool1.jpeg"
              alt="🏊 स्विमिंग पूल"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

            <div className="absolute top-4 left-4">
              <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-[var(--primary-dark)]/90 text-[var(--accent-light)] border border-[var(--accent)]/30 backdrop-blur-md">
                🏊 5 तस्वीरें
              </span>
            </div>

            <div className="absolute bottom-0 inset-x-0 p-6 text-white flex flex-col justify-end">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white group-hover:text-[var(--accent-light)] transition-colors">
                स्विमिंग पूल
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                लक्जरी स्विमिंग पूल एवं पूल साइड पार्टी की फोटो गैलरी
              </p>
              <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary)] text-white text-xs sm:text-sm font-semibold w-fit shadow-md group-hover:bg-[var(--accent)] group-hover:text-[var(--primary-dark)] transition-colors">
                <span>तस्वीरें देखें</span>
                <FiArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
