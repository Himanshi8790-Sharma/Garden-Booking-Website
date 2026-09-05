"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiMaximize2, FiImage } from "react-icons/fi";
import GalleryLightbox, { LightboxImage } from "./GalleryLightbox";

export interface GalleryItemImage extends LightboxImage {
  alt: string;
}

interface CategoryGalleryViewProps {
  title: string;
  subtitle: string;
  badge: string;
  backUrl?: string;
  backLabel?: string;
  images: GalleryItemImage[];
}

export default function CategoryGalleryView({
  title,
  subtitle,
  badge,
  backUrl = "/",
  backLabel = "← वापस जाएं (Back to Home)",
  images,
}: CategoryGalleryViewProps) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
    setIsLightboxOpen(true);
  };

  return (
    <div className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Top Back Navigation Link */}
      <div className="mb-6 sm:mb-8">
        <Link
          href={backUrl}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary)] text-white hover:bg-[var(--primary-dark)] transition-all text-xs sm:text-sm font-medium shadow-md group"
        >
          <FiArrowLeft className="w-4 h-4 text-[var(--accent)] group-hover:-translate-x-1 transition-transform" />
          <span>{backLabel}</span>
        </Link>
      </div>

      {/* Gallery Header */}
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--accent)]/15 border border-[var(--accent)]/30 text-[var(--primary)] text-xs font-semibold uppercase tracking-wider mb-3">
          <FiImage className="w-4 h-4 text-[var(--accent)]" />
          <span>{badge}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[var(--primary-dark)] tracking-tight">
          {title}
        </h1>
        <p className="mt-3 text-sm sm:text-base text-muted-custom font-sans leading-relaxed">
          {subtitle}
        </p>
        <div className="w-16 h-1 bg-[var(--accent)] mx-auto mt-4 rounded-full" />
      </div>

      {/* Mobile-First Responsive Images Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {images.map((img, index) => (
          <div
            key={img.src + index}
            onClick={() => openLightbox(index)}
            className="group relative h-64 sm:h-72 md:h-80 rounded-2xl overflow-hidden shadow-lg border border-[var(--border)] bg-card-custom cursor-pointer transition-all duration-300 hover:shadow-2xl hover:border-[var(--accent)] active:scale-[0.98]"
          >
            {/* Image */}
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 group-hover:from-black/90" />

            {/* Expand Icon Button */}
            <div className="absolute top-3 right-3 p-2 rounded-full bg-black/40 hover:bg-[var(--accent)] text-white hover:text-[var(--primary-dark)] backdrop-blur-md transition-all duration-300 transform group-hover:scale-110">
              <FiMaximize2 className="w-4 h-4" />
            </div>

            {/* Content Title */}
            <div className="absolute bottom-0 inset-x-0 p-4 text-white flex flex-col justify-end">
              <h3 className="text-base sm:text-lg font-serif font-bold text-white group-hover:text-[var(--accent-light)] transition-colors">
                {img.title}
              </h3>
              <span className="text-[11px] text-slate-300 mt-0.5">
                क्लिक करें बड़ा देखें ({index + 1} / {images.length})
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <GalleryLightbox
        isOpen={isLightboxOpen}
        initialIndex={activeImageIndex}
        onClose={() => setIsLightboxOpen(false)}
        images={images}
      />
    </div>
  );
}
