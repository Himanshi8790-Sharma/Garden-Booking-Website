"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiSun, FiDroplet, FiShield, FiStar, FiArrowRight } from "react-icons/fi";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface HighlightItem {
  icon: React.ElementType;
  title: string;
  desc: string;
}

const venueHighlights: HighlightItem[] = [
  {
    icon: FiSun,
    title: "Spacious Outdoor Garden",
    desc: "12,000+ sq. ft. manicured lawn surrounded by natural flora.",
  },
  {
    icon: FiDroplet,
    title: "Private Swimming Pool",
    desc: "Azure filtered pool area ideal for daytime & evening bashes.",
  },
  {
    icon: FiStar,
    title: "Outdoor Celebrations",
    desc: "Sun-kissed brunches or starlit dinners with custom setups.",
  },
  {
    icon: FiShield,
    title: "100% Private Events",
    desc: "Gated exclusive access with dedicated security & parking.",
  },
];

export default function EventsPageFeatured() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Image clip-path unmasking
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          {
            opacity: 0,
            scale: 1.1,
            clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
          },
          {
            opacity: 1,
            scale: 1,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            duration: 1.2,
            ease: "power3.inOut",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
            },
          }
        );
      }

      // Content reveal
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
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
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Featured Venue Experience"
      className="w-full py-24 px-6 md:px-12 lg:px-20 bg-[var(--background-secondary)] border-b border-[var(--border)] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Image Showcase */}
        <div className="lg:col-span-6 relative">
          <div
            ref={imageRef}
            className="relative w-full h-[400px] sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl border-4 border-[var(--card)] group"
          >
            <Image
              src="/images/garden.webp"
              alt="Helping Garden Club spacious outdoor lawn setting"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-[var(--primary-dark)]/75 via-transparent to-transparent"
              aria-hidden="true"
            />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-xs uppercase tracking-widest text-[var(--accent-light)] font-sans font-medium">
                The Venue Advantage
              </span>
              <p className="text-xl font-serif font-normal text-white mt-0.5">
                Open-Air Lawns &amp; Starlit Gazebos
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Highlights Grid */}
        <div ref={contentRef} className="lg:col-span-6 flex flex-col justify-center">
          <span className="text-xs uppercase tracking-[0.25em] text-[var(--accent)] font-semibold mb-3 px-3.5 py-1 bg-[var(--accent)]/10 rounded-full border border-[var(--accent)]/20 font-sans w-fit">
            Featured Experience
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[var(--foreground)] leading-[1.15] font-normal">
            Designed For Memorable <br />
            <span className="italic font-light text-[var(--primary)]">
              Outdoor Gatherings
            </span>
          </h2>

          <p className="mt-4 text-[var(--foreground-muted)] font-sans font-light text-base md:text-lg leading-relaxed">
            Our venue blends natural serenity with modern event infrastructure, giving your guests an atmosphere of true luxury and privacy.
          </p>

          {/* 4 Concise Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            {venueHighlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex items-start gap-3.5 p-4 rounded-2xl bg-[var(--card)] border border-[var(--border)] shadow-sm hover:border-[var(--accent)]/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center text-xl flex-shrink-0 mt-0.5">
                    <Icon />
                  </div>
                  <div>
                    <h3 className="text-sm font-serif font-medium text-[var(--foreground)]">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[var(--foreground-muted)] font-sans font-light mt-0.5 leading-snug">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8">
            <Link
              href="/#booking"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[var(--primary)] text-white font-sans text-xs uppercase tracking-widest font-semibold rounded-full hover:bg-[var(--primary-dark)] transition-all duration-300 shadow-md hover:shadow-xl active:scale-95 cursor-pointer"
            >
              <span>Explore Booking Packages</span>
              <FiArrowRight />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
