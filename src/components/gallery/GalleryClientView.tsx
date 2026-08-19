"use client";

import { useState } from "react";
import GalleryPageHero from "./GalleryPageHero";
import GalleryCategoryFilter from "./GalleryCategoryFilter";
import GalleryEditorialLayout from "./GalleryEditorialLayout";
import GalleryLightboxModal from "./GalleryLightboxModal";
import GalleryPageCTA from "./GalleryPageCTA";
import { galleryPhotos, GalleryPhoto } from "./galleryData";

export default function GalleryClientView() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [lightboxPhoto, setLightboxPhoto] = useState<GalleryPhoto | null>(null);

  // Filter photos list
  const filteredPhotos =
    activeCategory === "all"
      ? galleryPhotos
      : galleryPhotos.filter((p) => p.category === activeCategory);

  const handleNavigateLightbox = (newIndex: number) => {
    if (newIndex >= 0 && newIndex < filteredPhotos.length) {
      setLightboxPhoto(filteredPhotos[newIndex]);
    }
  };

  return (
    <div className="w-full">
      {/* 1. Gallery Hero Banner */}
      <GalleryPageHero />

      {/* 2. Category Filter Navigation */}
      <GalleryCategoryFilter
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        photoCount={filteredPhotos.length}
      />

      {/* 3. Art-Directed Editorial Composition Layout */}
      <GalleryEditorialLayout
        photos={filteredPhotos}
        onOpenLightbox={setLightboxPhoto}
      />

      {/* 4. Full-Screen Interactive Lightbox Modal */}
      <GalleryLightboxModal
        photo={lightboxPhoto}
        photosList={filteredPhotos}
        onClose={() => setLightboxPhoto(null)}
        onNavigate={handleNavigateLightbox}
      />

      {/* 5. Minimal Elegant CTA Section */}
      <GalleryPageCTA />
    </div>
  );
}
