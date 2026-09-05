"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import Image from "next/image";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

export interface LightboxImage {
  src: string;
  title: string;
  category?: string;
  description?: string;
}

interface GalleryLightboxProps {
  isOpen: boolean;
  initialIndex?: number;
  onClose: () => void;
  images: LightboxImage[];
}

export default function GalleryLightbox({
  isOpen,
  initialIndex = 0,
  onClose,
  images,
}: GalleryLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex, isOpen]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    },
    [isOpen, onClose, handleNext, handlePrev]
  );

  // Mobile Touch Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

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
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/95 backdrop-blur-md p-2 sm:p-4 select-none animate-fadeIn"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      {/* Modal Card */}
      <div
        className="relative flex flex-col items-center justify-between w-full h-full max-w-5xl max-h-[94vh] mx-auto overflow-hidden rounded-2xl bg-[var(--primary-dark)]/95 border border-[var(--accent)]/30 text-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Header */}
        <div className="w-full flex items-center justify-between px-4 py-3 bg-black/40 border-b border-white/10 z-20">
          <div className="flex items-center space-x-3">
            <span className="inline-flex items-center justify-center px-3 py-1 text-xs font-bold rounded-full bg-[var(--accent)] text-[var(--primary-dark)]">
              {currentIndex + 1} / {images.length}
            </span>
            <h3 className="text-xs sm:text-sm font-serif font-medium text-slate-200 truncate max-w-[200px] sm:max-w-sm">
              {currentImg.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-[var(--accent)] hover:text-[var(--primary-dark)] transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <FiX className="w-6 h-6" />
          </button>
        </div>

        {/* Display Image Area */}
        <div className="relative flex-1 w-full flex items-center justify-center p-2 sm:p-4 overflow-hidden">
          <div className="relative w-full h-full max-h-[72vh] flex items-center justify-center">
            <Image
              src={currentImg.src}
              alt={currentImg.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1000px"
              className="object-contain transition-all duration-300 rounded-lg"
            />
          </div>

          {/* Previous Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-black/60 hover:bg-[var(--accent)] text-white hover:text-[var(--primary-dark)] transition-all duration-200 border border-white/20 hover:border-transparent focus:outline-none shadow-lg z-10"
            aria-label="Previous image"
          >
            <FiChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          {/* Next Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-black/60 hover:bg-[var(--accent)] text-white hover:text-[var(--primary-dark)] transition-all duration-200 border border-white/20 hover:border-transparent focus:outline-none shadow-lg z-10"
            aria-label="Next image"
          >
            <FiChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
        </div>

        {/* Footer info & Swipe tip */}
        <div className="w-full bg-black/40 border-t border-white/10 p-3 flex flex-col items-center gap-1 text-center">
          <p className="text-xs sm:text-sm font-medium text-slate-200">
            {currentImg.title}
          </p>
          <span className="text-[10px] text-slate-400 font-sans">
            (स्वाइप करें या एरो का उपयोग करें / Swipe or use arrows to view)
          </span>
        </div>
      </div>
    </div>
  );
}
