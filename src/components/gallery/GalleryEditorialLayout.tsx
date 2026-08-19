"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiMaximize2 } from "react-icons/fi";
import { GalleryPhoto } from "./galleryData";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Props {
  photos: GalleryPhoto[];
  onOpenLightbox: (photo: GalleryPhoto) => void;
}

export default function GalleryEditorialLayout({
  photos,
  onOpenLightbox,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      itemsRef.current.forEach((el, index) => {
        if (!el) return;

        // Clip-path unmasking & scale reveal
        gsap.fromTo(
          el,
          {
            opacity: 0,
            scale: 0.95,
            clipPath: "polygon(0 12%, 100% 0%, 100% 88%, 0% 100%)",
          },
          {
            opacity: 1,
            scale: 1,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            duration: 1.1,
            delay: (index % 3) * 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [photos]);

  if (photos.length === 0) {
    return (
      <div className="w-full py-20 text-center text-[var(--foreground-muted)] font-sans font-light text-base">
        No moments found in this category. Select another filter to view photos.
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="w-full max-w-7xl mx-auto px-6 md:px-12 py-12 flex flex-col gap-12 sm:gap-16"
    >
      {/* 1. Feature Banner Section (First Item if available) */}
      {photos.length > 0 && (
        <div
          ref={(el) => {
            if (el) itemsRef.current[0] = el;
          }}
          onClick={() => onOpenLightbox(photos[0])}
          className="group relative w-full h-[360px] sm:h-[480px] lg:h-[560px] rounded-3xl overflow-hidden shadow-2xl border border-[var(--border)] cursor-pointer hover:border-[var(--accent)]/50 transition-all duration-500"
        >
          <Image
            src={photos[0].src}
            alt={photos[0].alt}
            fill
            sizes="100vw"
            priority
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[var(--primary-dark)]/90 via-[var(--primary-dark)]/35 to-transparent"
            aria-hidden="true"
          />

          <div className="absolute top-6 right-6 w-11 h-11 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-75">
            <FiMaximize2 className="text-lg" />
          </div>

          <div className="absolute bottom-8 left-8 right-8 text-white">
            <span className="text-xs uppercase tracking-widest text-[var(--accent-light)] font-sans font-semibold px-3 py-1 bg-white/10 rounded-full border border-white/15 backdrop-blur-md">
              {photos[0].categoryLabel} • Featured Moment
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif text-white font-normal mt-3 leading-snug">
              {photos[0].title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 font-sans font-light mt-1 max-w-xl">
              {photos[0].caption}
            </p>
          </div>
        </div>
      )}

      {/* 2. Asymmetric Dual Composition (Portrait + Landscape pair) */}
      {photos.length > 2 && (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Portrait Card */}
          <div
            ref={(el) => {
              if (el) itemsRef.current[1] = el;
            }}
            onClick={() => onOpenLightbox(photos[1])}
            className="md:col-span-5 group relative h-[440px] sm:h-[520px] rounded-3xl overflow-hidden shadow-xl border border-[var(--border)] cursor-pointer hover:border-[var(--accent)]/50 transition-all duration-500"
          >
            <Image
              src={photos[1].src}
              alt={photos[1].alt}
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-[var(--primary-dark)]/85 via-[var(--primary-dark)]/25 to-transparent"
              aria-hidden="true"
            />
            <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
              <FiMaximize2 className="text-base" />
            </div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-[10px] uppercase tracking-widest text-[var(--accent-light)] font-sans font-semibold">
                {photos[1].categoryLabel}
              </span>
              <h3 className="text-xl font-serif text-white font-normal mt-1">
                {photos[1].title}
              </h3>
            </div>
          </div>

          {/* Landscape Card */}
          <div
            ref={(el) => {
              if (el) itemsRef.current[2] = el;
            }}
            onClick={() => onOpenLightbox(photos[2])}
            className="md:col-span-7 group relative h-[380px] sm:h-[480px] rounded-3xl overflow-hidden shadow-xl border border-[var(--border)] cursor-pointer hover:border-[var(--accent)]/50 transition-all duration-500"
          >
            <Image
              src={photos[2].src}
              alt={photos[2].alt}
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-[var(--primary-dark)]/85 via-[var(--primary-dark)]/25 to-transparent"
              aria-hidden="true"
            />
            <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
              <FiMaximize2 className="text-base" />
            </div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-[10px] uppercase tracking-widest text-[var(--accent-light)] font-sans font-semibold">
                {photos[2].categoryLabel}
              </span>
              <h3 className="text-xl font-serif text-white font-normal mt-1">
                {photos[2].title}
              </h3>
            </div>
          </div>
        </div>
      )}

      {/* 3. Overlapping Layer Cluster (if 5+ photos) */}
      {photos.length > 4 && (
        <div className="relative w-full py-6">
          <div
            ref={(el) => {
              if (el) itemsRef.current[3] = el;
            }}
            onClick={() => onOpenLightbox(photos[3])}
            className="group relative w-full h-[380px] sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-[var(--border)] cursor-pointer"
          >
            <Image
              src={photos[3].src}
              alt={photos[3].alt}
              fill
              sizes="100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-[var(--primary-dark)]/80 via-transparent to-transparent"
              aria-hidden="true"
            />
            <div className="absolute bottom-6 left-6 right-6 text-white max-w-lg">
              <span className="text-xs uppercase tracking-widest text-[var(--accent-light)] font-sans font-semibold">
                {photos[3].categoryLabel}
              </span>
              <h3 className="text-2xl font-serif text-white font-normal mt-1">
                {photos[3].title}
              </h3>
            </div>
          </div>

          {/* Overlapping Floating Inset Card */}
          <div
            ref={(el) => {
              if (el) itemsRef.current[4] = el;
            }}
            onClick={() => onOpenLightbox(photos[4])}
            className="relative lg:absolute -bottom-8 lg:right-12 w-full sm:w-[320px] lg:w-[380px] h-[240px] sm:h-[260px] mt-6 lg:mt-0 rounded-3xl overflow-hidden shadow-2xl border-4 border-[var(--card)] bg-[var(--card)] z-20 cursor-pointer group"
          >
            <Image
              src={photos[4].src}
              alt={photos[4].alt}
              fill
              sizes="(max-width: 640px) 100vw, 380px"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-[var(--primary-dark)]/85 via-transparent to-transparent"
              aria-hidden="true"
            />
            <div className="absolute bottom-4 left-5 right-5 text-white">
              <span className="text-[10px] uppercase tracking-wider text-[var(--accent-light)] font-sans font-semibold">
                {photos[4].categoryLabel}
              </span>
              <h4 className="text-base font-serif text-white font-normal mt-0.5">
                {photos[4].title}
              </h4>
            </div>
          </div>
        </div>
      )}

      {/* 4. Masonry Grid for Remaining Photos */}
      {photos.length > 5 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
          {photos.slice(5).map((item, idx) => {
            const globalIndex = idx + 5;
            return (
              <div
                key={item.id}
                ref={(el) => {
                  if (el) itemsRef.current[globalIndex] = el;
                }}
                onClick={() => onOpenLightbox(item)}
                className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-[var(--border)] hover:border-[var(--accent)]/50 h-[360px]"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[var(--primary-dark)]/85 via-[var(--primary-dark)]/20 to-transparent"
                  aria-hidden="true"
                />

                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <FiMaximize2 className="text-base" />
                </div>

                <div className="absolute bottom-6 left-6 right-6 text-white transform transition-transform duration-500 group-hover:-translate-y-1">
                  <span className="text-[10px] uppercase tracking-widest text-[var(--accent-light)] font-sans font-semibold px-2.5 py-0.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10">
                    {item.categoryLabel}
                  </span>
                  <h3 className="text-lg font-serif font-normal text-white mt-2 leading-snug">
                    {item.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
