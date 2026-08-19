"use client";

import { useEffect } from "react";
import Image from "next/image";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { GalleryPhoto } from "./galleryData";

interface Props {
  photo: GalleryPhoto | null;
  photosList: GalleryPhoto[];
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export default function GalleryLightboxModal({
  photo,
  photosList,
  onClose,
  onNavigate,
}: Props) {
  const currentIndex = photo ? photosList.findIndex((p) => p.id === photo.id) : -1;

  useEffect(() => {
    if (!photo) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        if (currentIndex > 0) {
          onNavigate(currentIndex - 1);
        } else {
          onNavigate(photosList.length - 1);
        }
      } else if (e.key === "ArrowRight") {
        if (currentIndex < photosList.length - 1) {
          onNavigate(currentIndex + 1);
        } else {
          onNavigate(0);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [photo, currentIndex, photosList.length, onClose, onNavigate]);

  if (!photo || currentIndex === -1) return null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prev = currentIndex > 0 ? currentIndex - 1 : photosList.length - 1;
    onNavigate(prev);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const next = currentIndex < photosList.length - 1 ? currentIndex + 1 : 0;
    onNavigate(next);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/92 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8 animate-fadeIn"
      onClick={onClose}
    >
      {/* Top Header Bar */}
      <div
        className="w-full flex items-center justify-between z-10 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <span className="text-xs uppercase tracking-widest text-[var(--accent-light)] font-sans font-semibold px-3 py-1 bg-white/10 rounded-full border border-white/15">
            {photo.categoryLabel}
          </span>
          <span className="text-xs font-sans text-slate-300">
            {currentIndex + 1} of {photosList.length}
          </span>
        </div>

        <button
          onClick={onClose}
          className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-2xl transition-colors cursor-pointer"
          aria-label="Close Lightbox"
        >
          <FiX />
        </button>
      </div>

      {/* Main Image & Prev/Next Controls */}
      <div
        className="relative flex-1 w-full max-w-6xl mx-auto my-4 flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="absolute left-2 sm:left-4 z-20 w-12 h-12 rounded-full bg-black/50 hover:bg-white/20 text-white flex items-center justify-center text-2xl backdrop-blur-md transition-colors cursor-pointer border border-white/10"
          aria-label="Previous Photo"
        >
          <FiChevronLeft />
        </button>

        {/* Display Image */}
        <div className="relative w-full h-full max-h-[70vh] rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            priority
            className="object-contain"
          />
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-2 sm:right-4 z-20 w-12 h-12 rounded-full bg-black/50 hover:bg-white/20 text-white flex items-center justify-center text-2xl backdrop-blur-md transition-colors cursor-pointer border border-white/10"
          aria-label="Next Photo"
        >
          <FiChevronRight />
        </button>
      </div>

      {/* Bottom Caption Bar */}
      <div
        className="w-full max-w-4xl mx-auto text-center z-10 text-white pb-2"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-xl sm:text-2xl font-serif text-white font-normal">
          {photo.title}
        </h3>
        <p className="text-xs sm:text-sm font-sans text-slate-300 font-light mt-1">
          {photo.caption}
        </p>
      </div>
    </div>
  );
}
