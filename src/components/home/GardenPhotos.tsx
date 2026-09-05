"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiImage } from "react-icons/fi";

export default function GardenPhotos() {
  return (
    <section className="py-12 md:py-16 bg-surface relative overflow-hidden">
      {/* Decorative ambient backdrop glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--accent)]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--primary)]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent)]/15 border border-[var(--accent)]/30 text-[var(--primary)] text-xs sm:text-sm font-medium mb-3">
            <FiImage className="w-4 h-4 text-[var(--accent)]" />
            <span>Helping Garden Club</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[var(--primary-dark)] tracking-tight">
            हमारा गार्डन
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-custom font-sans leading-relaxed">
            हमारे गार्डन और स्विमिंग पूल की खूबसूरत झलकियाँ देखने के लिए नीचे कार्ड पर क्लिक करें।
          </p>
          <div className="w-16 h-1 bg-[var(--accent)] mx-auto mt-4 rounded-full" />
        </div>

        {/* EXACTLY TWO CATEGORY CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* CARD 1: GARDEN */}
          <Link
            href="/gallery/garden"
            className="group relative h-80 sm:h-96 md:h-[420px] rounded-3xl overflow-hidden shadow-xl border border-[var(--border)] bg-card-custom cursor-pointer transition-all duration-300 hover:shadow-2xl hover:border-[var(--accent)] active:scale-[0.98]"
          >
            <Image
              src="/image/garden1.jpeg"
              alt="🌿 गार्डन एवं इवेन्ट्स"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent transition-opacity duration-300 group-hover:from-black/90" />

            {/* Top Category Badge */}
            <div className="absolute top-4 left-4">
              <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-[var(--primary-dark)]/90 text-[var(--accent-light)] border border-[var(--accent)]/30 backdrop-blur-md">
                🌿 गार्डन
              </span>
            </div>

            {/* Bottom Content Box */}
            <div className="absolute bottom-0 inset-x-0 p-6 text-white flex flex-col justify-end">
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white group-hover:text-[var(--accent-light)] transition-colors">
                गार्डन एवं इवेन्ट्स
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 line-clamp-2">
                शादी, सगाई, बर्थडे पार्टी एवं भव्य आयोजनों की सुंदर फोटो गैलरी
              </p>

              {/* Action Button Label */}
              <div className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--primary)] text-white text-xs sm:text-sm font-semibold w-fit shadow-md group-hover:bg-[var(--accent)] group-hover:text-[var(--primary-dark)] transition-all duration-200">
                <span>तस्वीरें देखें</span>
                <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>

          {/* CARD 2: SWIMMING POOL */}
          <Link
            href="/gallery/pool"
            className="group relative h-80 sm:h-96 md:h-[420px] rounded-3xl overflow-hidden shadow-xl border border-[var(--border)] bg-card-custom cursor-pointer transition-all duration-300 hover:shadow-2xl hover:border-[var(--accent)] active:scale-[0.98]"
          >
            <Image
              src="/image/pool1.jpeg"
              alt="🏊 स्विमिंग पूल"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent transition-opacity duration-300 group-hover:from-black/90" />

            {/* Top Category Badge */}
            <div className="absolute top-4 left-4">
              <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-[var(--primary-dark)]/90 text-[var(--accent-light)] border border-[var(--accent)]/30 backdrop-blur-md">
                🏊 स्विमिंग पूल
              </span>
            </div>

            {/* Bottom Content Box */}
            <div className="absolute bottom-0 inset-x-0 p-6 text-white flex flex-col justify-end">
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white group-hover:text-[var(--accent-light)] transition-colors">
                स्विमिंग पूल
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 line-clamp-2">
                साफ-सुथरा आधुनिक स्विमिंग पूल एवं पूल पार्टी की फोटो गैलरी
              </p>

              {/* Action Button Label */}
              <div className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--primary)] text-white text-xs sm:text-sm font-semibold w-fit shadow-md group-hover:bg-[var(--accent)] group-hover:text-[var(--primary-dark)] transition-all duration-200">
                <span>तस्वीरें देखें</span>
                <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
