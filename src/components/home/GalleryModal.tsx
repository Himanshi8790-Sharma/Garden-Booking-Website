"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { FiX, FiChevronLeft, FiChevronRight, FiMaximize2 } from "react-icons/fi";

export interface GalleryImage {
  src: string;
  title: string;
  category?: string;
  description?: string;
}

interface GalleryModalProps {
  isOpen: boolean;
  initialIndex?: number;
  onClose: () => void;
  images: GalleryImage[];
}

export default function GalleryModal({
  isOpen,
  initialIndex = 0,
  onClose,
  images,
}: GalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex, isOpen]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    },
    [isOpen, onClose, handleNext, handlePrev]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || images.length === 0) return null;

  const currentImg = images[currentIndex];

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-md transition-all duration-300 p-2 sm:p-4 md:p-6 select-none"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      {/* Container - prevent click propagation */}
      <div
        className="relative flex flex-col items-center justify-between w-full h-full max-w-6xl max-h-[92vh] mx-auto overflow-hidden rounded-2xl bg-[var(--primary-dark)]/95 border border-[var(--accent)]/30 text-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="w-full flex items-center justify-between px-4 py-3 bg-[var(--primary-dark)]/90 border-b border-white/10 z-10">
          <div className="flex items-center space-x-3">
            <span className="inline-flex items-center justify-center px-3 py-1 text-xs font-semibold rounded-full bg-[var(--accent)] text-[var(--primary-dark)]">
              {currentIndex + 1} / {images.length}
            </span>
            <h3 className="text-sm sm:text-base font-serif font-medium text-[var(--background)] truncate max-w-[200px] sm:max-w-md">
              {currentImg.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-[var(--accent)] hover:text-[var(--primary-dark)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
            aria-label="Close modal"
          >
            <FiX className="w-6 h-6" />
          </button>
        </div>

        {/* Main Display Area */}
        <div className="relative flex-1 w-full flex items-center justify-center overflow-hidden p-2 sm:p-4 group">
          {/* Main Image */}
          <div className="relative w-full h-full max-h-[70vh] flex items-center justify-center">
            <Image
              src={currentImg.src}
              alt={currentImg.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              className="object-contain transition-all duration-300 rounded-lg"
            />
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-black/50 hover:bg-[var(--accent)] text-white hover:text-[var(--primary-dark)] transition-all duration-200 border border-white/20 hover:border-transparent focus:outline-none shadow-lg"
            aria-label="Previous image"
          >
            <FiChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-black/50 hover:bg-[var(--accent)] text-white hover:text-[var(--primary-dark)] transition-all duration-200 border border-white/20 hover:border-transparent focus:outline-none shadow-lg"
            aria-label="Next image"
          >
            <FiChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
        </div>

        {/* Footer / Description & Thumbnails */}
        <div className="w-full bg-[var(--primary-dark)]/90 border-t border-white/10 p-3 sm:p-4 flex flex-col items-center gap-3">
          {currentImg.description && (
            <p className="text-xs sm:text-sm text-center text-slate-300 max-w-2xl px-2">
              {currentImg.description}
            </p>
          )}

          {/* Thumbnails Row */}
          <div className="flex items-center justify-center gap-2 overflow-x-auto max-w-full py-1 px-2 no-scrollbar">
            {images.map((img, idx) => (
              <button
                key={img.src + idx}
                onClick={() => setCurrentIndex(idx)}
                className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all ${
                  idx === currentIndex
                    ? "border-[var(--accent)] scale-105 shadow-md shadow-[var(--accent)]/30"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  sizes="60px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
