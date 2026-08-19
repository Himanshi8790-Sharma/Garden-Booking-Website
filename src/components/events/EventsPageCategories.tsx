"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowUpRight } from "react-icons/fi";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface EventCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  badge: string;
}

const occasions: EventCategory[] = [
  {
    id: "weddings",
    title: "Weddings & Receptions",
    subtitle: "Fairytale Open-Air Ceremonies",
    description: "Exchange vows under starry skies and lush canopy foliage with grand banquet mandap setups.",
    image: "/images/wedding.webp",
    badge: "Weddings",
  },
  {
    id: "birthdays",
    title: "Birthday Celebrations",
    subtitle: "Vibrant Outdoor Parties",
    description: "Unforgettable birthday bashes with pool access, customized DJ sound, and spacious play areas.",
    image: "/images/birthday.webp",
    badge: "Birthdays",
  },
  {
    id: "anniversaries",
    title: "Anniversary Celebrations",
    subtitle: "Romance & Timeless Memories",
    description: "Intimate candlelit dinners or golden milestone gatherings surrounded by natural greenery.",
    image: "/images/anniversary.webp",
    badge: "Anniversaries",
  },
  {
    id: "family",
    title: "Family & Private Events",
    subtitle: "Exclusive Gated Gatherings",
    description: "Private venue access for family reunions, cocktail soirees, and exclusive VIP events.",
    image: "/assets/pkg_family.webp",
    badge: "Private Events",
  },
  {
    id: "pool",
    title: "Pool Parties & Soirees",
    subtitle: "Refreshing Poolside Experience",
    description: "Sparkling private swimming pool access with poolside lounge beds and ambient starlit lighting.",
    image: "/images/pool.webp",
    badge: "Swimming Pool",
  },
];

export default function EventsPageCategories() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Header unmasking reveal
      gsap.fromTo(
        ".categories-header",
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      // Clean straight card reveal
      if (cardsRef.current.length > 0) {
        gsap.fromTo(
          cardsRef.current,
          { opacity: 0, y: 40, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.85,
            stagger: 0.14,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".categories-grid",
              start: "top 80%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="categories"
      aria-label="Event Categories Showcase"
      className="w-full py-24 px-6 md:px-12 lg:px-20 bg-[var(--background)] border-b border-[var(--border)] relative"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div className="categories-header text-center max-w-2xl flex flex-col items-center">
          <span className="text-xs uppercase tracking-[0.25em] text-[var(--accent)] font-semibold px-3.5 py-1 bg-[var(--accent)]/10 rounded-full border border-[var(--accent)]/20 mb-3 font-sans">
            Our Celebration Offerings
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[var(--foreground)] leading-tight font-normal">
            Tailored Experiences For <br />
            <span className="italic font-light text-[var(--primary)]">
              Every Special Occasion
            </span>
          </h2>
          <p className="mt-4 text-[var(--foreground-muted)] font-sans font-light text-base md:text-lg">
            Discover our versatile garden spaces, sparkling pool amenities, and bespoke decor settings crafted for your event.
          </p>
        </div>

        {/* Visual Cards Grid */}
        <div className="categories-grid w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {occasions.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="group relative rounded-3xl overflow-hidden bg-[var(--card)] shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col h-[420px] border border-[var(--border)] hover:border-[var(--accent)]/50 cursor-pointer"
            >
              {/* Card Image Wrapper */}
              <div className="relative w-full h-[64%] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[var(--primary-dark)]/90 via-[var(--primary-dark)]/30 to-transparent transition-opacity duration-500 group-hover:opacity-90"
                  aria-hidden="true"
                />
                
                <span className="absolute top-4 left-4 text-[10px] uppercase tracking-widest bg-[var(--primary-dark)]/80 text-[var(--accent-light)] px-3 py-1 rounded-full backdrop-blur-md border border-white/10 font-semibold font-sans">
                  {item.badge}
                </span>

                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all duration-500 group-hover:bg-[var(--accent)] group-hover:text-black group-hover:rotate-45">
                  <FiArrowUpRight className="text-lg" />
                </div>

                <div className="absolute bottom-4 left-6 right-6 transition-transform duration-500 group-hover:-translate-y-1">
                  <h3 className="text-xl font-serif text-white font-normal leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[var(--accent-light)] font-sans font-light tracking-wide mt-0.5">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              {/* Concise Description Footer */}
              <div className="p-6 flex flex-col justify-between flex-1 bg-[var(--card)]">
                <p className="text-xs sm:text-sm text-[var(--foreground-muted)] font-sans font-light leading-relaxed line-clamp-2">
                  {item.description}
                </p>

                <div className="pt-3 flex items-center justify-between border-t border-[var(--border)] mt-2">
                  <Link
                    href="/#booking"
                    className="text-xs font-semibold uppercase tracking-wider text-[var(--primary)] group-hover:text-[var(--accent)] transition-colors duration-300 font-sans flex items-center gap-1"
                  >
                    <span>Reserve Space</span>
                    <span>&rarr;</span>
                  </Link>
                  <span className="text-[10px] font-sans text-[var(--foreground-muted)] uppercase tracking-widest">
                    Available Year-Round
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
