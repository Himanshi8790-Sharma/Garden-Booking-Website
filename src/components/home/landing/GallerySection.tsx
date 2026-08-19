"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiMaximize2, FiX } from "react-icons/fi";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface GalleryItem {
  id: string;
  src: string;
  title: string;
  category: string;
  spanClass: string;
  aspectClass: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    src: "/images/wedding.webp",
    title: "Grand Evening Wedding Lighting",
    category: "Weddings",
    spanClass: "md:col-span-8 lg:col-span-7",
    aspectClass: "h-[340px] sm:h-[440px]",
  },
  {
    id: "g2",
    src: "/assets/gallery_jaipur.webp",
    title: "Heritage Mandap Setup",
    category: "Decor",
    spanClass: "md:col-span-4 lg:col-span-5",
    aspectClass: "h-[340px] sm:h-[440px]",
  },
  {
    id: "g3",
    src: "/assets/gallery_udaipur.webp",
    title: "Royal Courtyard Banquet",
    category: "Celebrations",
    spanClass: "md:col-span-4 lg:col-span-4",
    aspectClass: "h-[300px] sm:h-[380px]",
  },
  {
    id: "g4",
    src: "/images/garden.webp",
    title: "Manicured Main Lawn & Floral Arch",
    category: "Outdoors",
    spanClass: "md:col-span-8 lg:col-span-8",
    aspectClass: "h-[300px] sm:h-[380px]",
  },
  {
    id: "g5",
    src: "/assets/gallery_kerala.webp",
    title: "Poolside Sundowner Lounge",
    category: "Pool Parties",
    spanClass: "md:col-span-6 lg:col-span-6",
    aspectClass: "h-[320px] sm:h-[400px]",
  },
  {
    id: "g6",
    src: "/assets/gallery_darjeeling.webp",
    title: "Evening Starlit Dining Setup",
    category: "Private Soirees",
    spanClass: "md:col-span-6 lg:col-span-6",
    aspectClass: "h-[320px] sm:h-[400px]",
  },
];

export default function GallerySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Header Masked Reveal
      gsap.fromTo(
        ".gallery-header",
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      // Staggered Clip-Path Scale Reveals & Parallax Scrub
      itemsRef.current.forEach((el, index) => {
        if (!el) return;

        // Clip-path unmasking
        gsap.fromTo(
          el,
          {
            opacity: 0,
            scale: 0.95,
            clipPath: "polygon(0 15%, 100% 0%, 100% 85%, 0% 100%)",
          },
          {
            opacity: 1,
            scale: 1,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            duration: 1.1,
            delay: (index % 3) * 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          }
        );

        // Subtle offset scroll parallax scrub on desktop
        if (window.innerWidth >= 768) {
          const parallaxSpeed = index % 2 === 0 ? -25 : 25;
          gsap.to(el, {
            y: parallaxSpeed,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="gallery"
      aria-label="Gallery Section"
      className="w-full py-28 px-6 md:px-12 lg:px-20 bg-[var(--background-secondary)] border-b border-[var(--border)] relative"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div className="gallery-header text-center max-w-2xl flex flex-col items-center">
          <span className="text-xs uppercase tracking-[0.25em] text-[var(--accent)] font-semibold px-3.5 py-1 bg-[var(--accent)]/10 rounded-full border border-[var(--accent)]/20 mb-3 font-sans">
            Visual Storytelling
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[var(--foreground)] leading-tight font-normal">
            Moments Captured In <br />
            <span className="italic font-light text-[var(--primary)]">
              Our Haven
            </span>
          </h2>
          <p className="mt-4 text-[var(--foreground-muted)] font-sans font-light text-base md:text-lg">
            Explore snapshots of grand weddings, intimate poolside gatherings, and mesmerizing evening illuminations hosted at our venue.
          </p>
        </div>

        {/* Editorial Masonry Grid */}
        <div className="gallery-grid w-full grid grid-cols-1 md:grid-cols-12 gap-6 mt-16">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => {
                if (el) itemsRef.current[index] = el;
              }}
              onClick={() => setActiveImage(item)}
              className={`group relative rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer border border-[var(--border)] hover:border-[var(--accent)]/60 ${item.spanClass} ${item.aspectClass}`}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 66vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Hover Dark Overlay with Accent Gradient */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-[var(--primary-dark)]/85 via-[var(--primary-dark)]/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500"
                aria-hidden="true"
              />

              {/* Expand Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-75">
                <FiMaximize2 className="text-base" />
              </div>

              {/* Floating Caption */}
              <div className="absolute bottom-6 left-6 right-6 text-white transform transition-transform duration-500 group-hover:-translate-y-1">
                <span className="text-[10px] uppercase tracking-widest text-[var(--accent-light)] font-sans font-semibold px-2.5 py-0.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10">
                  {item.category}
                </span>
                <h3 className="text-lg sm:text-xl font-serif font-normal text-white mt-2 leading-snug">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={() => setActiveImage(null)}
        >
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-2xl transition-colors cursor-pointer"
            aria-label="Close image preview"
          >
            <FiX />
          </button>

          <div
            className="relative max-w-5xl w-full h-[75vh] rounded-3xl overflow-hidden border border-white/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={activeImage.src}
              alt={activeImage.title}
              fill
              className="object-contain"
            />
            <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent text-white">
              <span className="text-xs uppercase tracking-widest text-[var(--accent-light)] font-semibold font-sans">
                {activeImage.category}
              </span>
              <h3 className="text-2xl font-serif text-white mt-1">
                {activeImage.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
