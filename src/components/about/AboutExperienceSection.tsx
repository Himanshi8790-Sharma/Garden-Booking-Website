"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowRight } from "react-icons/fi";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface EventCategory {
  title: string;
  subtitle: string;
  seoDescription: string;
  image: string;
  badge: string;
}

const categories: EventCategory[] = [
  {
    title: "Open-Air Weddings & Receptions",
    subtitle: "Magical Weddings Under Starlit Skies",
    seoDescription: "Host your dream open-air wedding venue celebration. Our spacious lawns allow grand mandaps, floral archways, stage illuminations, and banquet dining for over 500 guests.",
    image: "/images/wedding.webp",
    badge: "Weddings",
  },
  {
    title: "Birthday Parties & Theme Bashes",
    subtitle: "Vibrant Outdoor Celebrations",
    seoDescription: "Make birthday parties extra special with custom decor, poolside DJ setups, live food stalls, and ample open space for kids and adults alike.",
    image: "/images/birthday.webp",
    badge: "Birthdays",
  },
  {
    title: "Anniversary Celebrations",
    subtitle: "Romance & Timeless Milestone Moments",
    seoDescription: "Celebrate milestone anniversaries with candlelit outdoor gazebos, live acoustic music, and elegant floral arrangements tailored for intimate family gatherings.",
    image: "/images/anniversary.webp",
    badge: "Anniversaries",
  },
  {
    title: "Family & Private Events",
    subtitle: "Exclusive Gated Gatherings",
    seoDescription: "Enjoy complete venue privacy for family reunions, cocktail soirees, and corporate mixers with private parking, dedicated staff, and customized seating.",
    image: "/assets/pkg_family.webp",
    badge: "Private Events",
  },
  {
    title: "Swimming Pool Facility & Parties",
    subtitle: "Refreshing Poolside Amenity",
    seoDescription: "Make your celebration more refreshing! Book our filtered private swimming pool area equipped with sunbed loungers, ambient night lights, and poolside bar setups.",
    image: "/images/pool.webp",
    badge: "Swimming Pool",
  },
];

export default function AboutExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (cardsRef.current.length > 0) {
        gsap.fromTo(
          cardsRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
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
      aria-label="Tailored Event Experiences"
      className="w-full py-24 px-6 md:px-12 lg:px-20 bg-[var(--background-secondary)] border-b border-[var(--border)] relative"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl flex flex-col items-center">
          <span className="text-xs uppercase tracking-[0.25em] text-[var(--accent)] font-semibold mb-3 px-3.5 py-1 bg-[var(--accent)]/10 rounded-full border border-[var(--accent)]/20 font-sans">
            Supported Celebrations
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[var(--foreground)] leading-tight font-normal">
            Bespoke Event Spaces <br />
            <span className="italic font-light text-[var(--primary)]">
              Tailored For Every Milestone
            </span>
          </h2>
          <p className="mt-4 text-[var(--foreground-muted)] font-sans font-light text-base md:text-lg">
            Our versatile garden booking venue seamlessly adapts to match your aesthetic, guest count, and celebration vision.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {categories.map((cat, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="group rounded-3xl overflow-hidden bg-[var(--card)] border border-[var(--border)] shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col h-[440px] hover:border-[var(--accent)]/40"
            >
              {/* Image Container */}
              <div className="relative w-full h-[60%] overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[var(--primary-dark)]/90 via-[var(--primary-dark)]/30 to-transparent"
                  aria-hidden="true"
                />
                <span className="absolute top-4 left-4 text-[10px] uppercase tracking-widest bg-[var(--primary-dark)]/80 text-[var(--accent-light)] px-3 py-1 rounded-full backdrop-blur-md border border-white/10 font-semibold font-sans">
                  {cat.badge}
                </span>

                <div className="absolute bottom-4 left-6 right-6">
                  <h3 className="text-xl font-serif text-white font-normal leading-snug">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-[var(--accent-light)] font-sans font-light mt-0.5">
                    {cat.subtitle}
                  </p>
                </div>
              </div>

              {/* Text Description */}
              <div className="p-6 flex flex-col justify-between flex-1 bg-[var(--card)]">
                <p className="text-xs sm:text-sm text-[var(--foreground-muted)] font-sans font-light leading-relaxed line-clamp-3">
                  {cat.seoDescription}
                </p>

                <div className="pt-4 border-t border-[var(--border)] flex items-center justify-between mt-2">
                  <Link
                    href="/#booking"
                    className="text-xs uppercase tracking-wider font-semibold font-sans text-[var(--primary)] group-hover:text-[var(--accent)] transition-colors flex items-center gap-1.5"
                  >
                    <span>Reserve Space</span>
                    <FiArrowRight />
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
