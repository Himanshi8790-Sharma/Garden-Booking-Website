"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FiMaximize2,
  FiX,
  FiHeart,
  FiGift,
  FiSun,
  FiMusic,
  FiDroplet,
  FiStar,
} from "react-icons/fi";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface GalleryItem {
  id: string;
  src: string;
  title: string;
  description: string;
  category: string;
  icon: React.ElementType;
  spanClass: string;
  heightClass: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "anniversary",
    src: "/images/anniversary.webp",
    title: "Anniversary Celebrations",
    description:
      "Romantic settings for celebrating love, togetherness, and beautiful milestones.",
    category: "Anniversary",
    icon: FiHeart,
    spanClass: "md:col-span-7",
    heightClass: "h-[360px] sm:h-[460px]",
  },
  {
    id: "birthday",
    src: "/images/birthday.webp",
    title: "Birthday Celebrations",
    description:
      "Fun-filled spaces designed for memorable birthday moments with family and friends.",
    category: "Birthday",
    icon: FiGift,
    spanClass: "md:col-span-5",
    heightClass: "h-[360px] sm:h-[460px]",
  },
  {
    id: "garden",
    src: "/images/garden.webp",
    title: "Our Beautiful Garden",
    description:
      "Open green lawns surrounded by nature, perfect for peaceful gatherings and celebrations.",
    category: "Garden",
    icon: FiSun,
    spanClass: "md:col-span-5",
    heightClass: "h-[330px] sm:h-[400px]",
  },
  {
    id: "party",
    src: "/images/party.webp",
    title: "Evening Parties",
    description:
      "Bring your celebrations to life with music, lights, laughter, and great company.",
    category: "Party",
    icon: FiMusic,
    spanClass: "md:col-span-7",
    heightClass: "h-[330px] sm:h-[400px]",
  },
  {
    id: "pool",
    src: "/images/pool.webp",
    title: "Poolside Moments",
    description:
      "Relax, celebrate, and make a splash with a refreshing private pool experience.",
    category: "Swimming Pool",
    icon: FiDroplet,
    spanClass: "md:col-span-6",
    heightClass: "h-[340px] sm:h-[420px]",
  },
  {
    id: "wedding",
    src: "/images/wedding.webp",
    title: "Beautiful Weddings",
    description:
      "A charming outdoor setting where your special day becomes a beautiful memory.",
    category: "Wedding",
    icon: FiStar,
    spanClass: "md:col-span-6",
    heightClass: "h-[340px] sm:h-[420px]",
  },
];

export default function GallerySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Header animation
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          {
            opacity: 0,
            y: 40,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 80%",
            },
          },
        );
      }

      // Gallery item animations
      itemsRef.current.forEach((item, index) => {
        if (!item) return;

        gsap.fromTo(
          item,
          {
            opacity: 0,
            y: 50,
            scale: 0.97,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            delay: (index % 2) * 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
            },
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Prevent background scrolling when lightbox is open
  useEffect(() => {
    if (activeImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [activeImage]);

  // Close lightbox with Escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="gallery"
      aria-label="Helping Garden Club Gallery"
      className="relative w-full py-15 px-6 bg-(--background-secondary) border-b border-(--border) overflow-hidden "
    >
      {/* =========================================
          BACKGROUND DECORATION
      ========================================== */}

      <div
        className="absolute -top-32 -right-32 w-105 h-105 rounded-full bg-(--primary)/5 blur-3xl pointer-events-none "
        aria-hidden="true"
      />

      <div
        className="absolute bottom-0 -left-40 w-95 h-95 rounded-full bg-(--accent)/5 blur-3xl pointer-events-none "
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto">
        {/* =========================================
            SECTION HEADER
        ========================================== */}

        <div
          ref={headerRef}
          className="max-w-3xl mx-auto text-center flex flex-col items-center "
        >
          <span className="inline-flex items-center text-[10px] sm:text-xs uppercase tracking-[0.28em] text-(--accent) font-semibold px-4 py-1.5 bg-(--accent)/10 rounded-full border border-(--accent)/20 font-sans ">
            Our Gallery
          </span>

          <h2 className="mt-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-(--foreground) leading-[1.05] font-normal ">
            Moments Made
            <br />
            <span className="italic font-light text-(--primary)">
              Beautiful
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-(--foreground-muted) font-sans font-light text-base md:text-lg leading-relaxed ">
            Take a glimpse at the spaces and celebrations that make Helping
            Garden Club a beautiful place to gather, celebrate, and create
            lasting memories.
          </p>
        </div>

        {/* =========================================
            GALLERY GRID
        ========================================== */}

        <div className=" w-full grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6 mt-16 md:mt-20 ">
          {galleryItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                ref={(el) => {
                  if (el) {
                    itemsRef.current[index] = el;
                  }
                }}
                onClick={() => setActiveImage(item)}
                className={`group relative overflow-hidden rounded-[1.75rem]  border border-(--border) cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 ${item.spanClass} ${item.heightClass}
                `}
              >
                {/* Image */}
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 "
                />

                {/* Dark Gradient */}
                <div
                  className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500 "
                  aria-hidden="true"
                />

                {/* Top Category */}
                <div className="absolute top-5 left-5 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/25 backdrop-blur-md border border-white/15 text-white ">
                  <Icon className="text-sm text-(--accent-light)" />

                  <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.18em] font-semibold font-sans">
                    {item.category}
                  </span>
                </div>

                {/* Expand Button */}
                <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ">
                  <FiMaximize2 className="text-sm" />
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 text-white transform transition-transform duration-500 group-hover:-translate-y-1">
                  <h3 className="text-xl sm:text-2xl font-serif font-normal leading-tight text-white ">
                    {item.title}
                  </h3>

                  <p
                    className="mt-2 max-w-lg text-xs sm:text-sm leading-relaxed text-white/75 font-sans font-light opacity-90 ">
                    {item.description}
                  </p>

                  <div className="mt-4 h-px w-0 bg-(--accent-light) group-hover:w-16 transition-all duration-500 " />
                </div>
              </div>
            );
          })}
        </div>

        {/* =========================================
            BOTTOM CTA
        ========================================== */}

        <div className="mt-14 md:mt-16 flex justify-center ">
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full border border-(--primary)/40 text-(--primary) text-xs uppercase tracking-[0.16em] font-semibold font-sans hover:bg-(--primary) hover:text-white transition-all duration-300 "
          >
            <span>Plan Your Celebration</span>

            <span className="text-base transition-transform duration-300 group-hover:translate-x-1 ">
              →
            </span>
          </a>
        </div>
      </div>

      {/* =========================================
          LIGHTBOX
      ========================================== */}

      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 "
          onClick={() => setActiveImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${activeImage.title} image preview`}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={() => setActiveImage(null)}
            className="absolute top-5 right-5 sm:top-7 sm:right-7 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white flex items-center justify-center transition-all duration-300 cursor-pointer "
            aria-label="Close image preview"
          >
            <FiX className="text-xl" />
          </button>

          {/* Image Container */}
          <div
            className="relative w-full max-w-6xl h-[70vh] sm:h-[78vh] rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={activeImage.src}
              alt={activeImage.title}
              fill
              sizes="100vw"
              className="object-contain"
            />

            {/* Lightbox Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 bg-linear-to-t from-black/90 via-black/50 to-transparent text-white ">
              <span className="text-[10px] uppercase tracking-[0.2em] text-(--accent-light) font-semibold font-sans ">
                {activeImage.category}
              </span>

              <h3 className="text-xl sm:text-3xl font-serif text-white mt-1 ">
                {activeImage.title}
              </h3>

              <p className="mt-2 max-w-2xl text-sm text-white/70 font-sans font-light ">
                {activeImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
