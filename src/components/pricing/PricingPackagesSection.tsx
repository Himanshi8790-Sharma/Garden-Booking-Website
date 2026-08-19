"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiCheck, FiCalendar, FiClock, FiUsers, FiArrowRight } from "react-icons/fi";
import { venuePackages } from "./pricingData";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function PricingPackagesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Header reveal
      gsap.fromTo(
        ".packages-header",
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

      // Clean STRAIGHT card entrance (NO tilt, NO rotation)
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
              trigger: ".packages-grid",
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
      id="packages"
      aria-label="Venue Celebration Packages"
      className="w-full py-24 px-6 md:px-12 lg:px-20 bg-[var(--background)] border-b border-[var(--border)] relative"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div className="packages-header text-center max-w-2xl flex flex-col items-center">
          <span className="text-xs uppercase tracking-[0.25em] text-[var(--accent)] font-semibold px-3.5 py-1 bg-[var(--accent)]/10 rounded-full border border-[var(--accent)]/20 mb-3 font-sans">
            Venue Hosting Packages
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[var(--foreground)] leading-tight font-normal">
            Thoughtfully Curated <br />
            <span className="italic font-light text-[var(--primary)]">
              Celebration Tiers
            </span>
          </h2>
          <p className="mt-4 text-[var(--foreground-muted)] font-sans font-light text-base md:text-lg">
            Choose the package option that fits your guest list and event vision. Rates serve as transparent starting points.
          </p>
        </div>

        {/* Editorial Packages Grid — Straight Cards Entrance */}
        <div className="packages-grid w-full grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16 items-stretch">
          {venuePackages.map((pkg, index) => {
            const isFeatured = pkg.isFeatured;

            return (
              <div
                key={pkg.id}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                className={`group rounded-3xl p-8 transition-all duration-500 flex flex-col justify-between border relative ${
                  isFeatured
                    ? "bg-gradient-to-b from-[var(--primary-dark)] via-[#0E2C1F] to-[var(--primary-dark)] text-white border-[var(--accent)]/40 shadow-2xl scale-100 lg:-translate-y-2"
                    : "bg-[var(--card)] text-[var(--foreground)] border-[var(--border)] hover:border-[var(--accent)]/40 shadow-lg hover:shadow-xl"
                }`}
              >
                {/* Featured Badge */}
                {isFeatured && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-widest bg-[var(--accent)] text-black px-4 py-1 rounded-full font-bold font-sans shadow-md">
                    {pkg.badge}
                  </span>
                )}

                <div>
                  {/* Header & Subtitle */}
                  <div className="flex flex-col items-start">
                    <span
                      className={`text-xs uppercase tracking-wider font-semibold font-sans ${
                        isFeatured ? "text-[var(--accent-light)]" : "text-[var(--accent)]"
                      }`}
                    >
                      {pkg.subtitle}
                    </span>
                    <h3
                      className={`text-2xl font-serif font-normal mt-1 ${
                        isFeatured ? "text-white" : "text-[var(--foreground)]"
                      }`}
                    >
                      {pkg.name}
                    </h3>
                  </div>

                  {/* Price Banner */}
                  <div className="mt-6 pt-6 border-t border-white/10 border-[var(--border)] flex flex-col">
                    <div className="flex items-baseline gap-2">
                      <span
                        className={`text-4xl sm:text-5xl font-serif font-bold tracking-tight ${
                          isFeatured ? "text-white" : "text-[var(--primary)]"
                        }`}
                      >
                        {pkg.pricePlaceholder}
                      </span>
                      <span
                        className={`text-xs font-sans font-light ${
                          isFeatured ? "text-slate-300" : "text-[var(--foreground-muted)]"
                        }`}
                      >
                        starting rate*
                      </span>
                    </div>
                    <span
                      className={`text-[11px] font-sans font-light mt-1 ${
                        isFeatured ? "text-slate-300" : "text-[var(--foreground-muted)]"
                      }`}
                    >
                      {pkg.priceNote}
                    </span>
                  </div>

                  {/* Meta Badges */}
                  <div className="mt-6 flex flex-wrap gap-2 text-xs font-sans font-medium">
                    <div
                      className={`px-3 py-1.5 rounded-full flex items-center gap-1.5 border ${
                        isFeatured
                          ? "bg-white/10 text-slate-200 border-white/15"
                          : "bg-[var(--background-secondary)] text-[var(--foreground)] border-[var(--border)]"
                      }`}
                    >
                      <FiUsers className="text-sm" />
                      <span>{pkg.guestCapacity}</span>
                    </div>
                    <div
                      className={`px-3 py-1.5 rounded-full flex items-center gap-1.5 border ${
                        isFeatured
                          ? "bg-white/10 text-slate-200 border-white/15"
                          : "bg-[var(--background-secondary)] text-[var(--foreground)] border-[var(--border)]"
                      }`}
                    >
                      <FiClock className="text-sm" />
                      <span>{pkg.duration}</span>
                    </div>
                  </div>

                  <p
                    className={`mt-4 text-xs sm:text-sm font-sans font-light leading-relaxed ${
                      isFeatured ? "text-slate-200" : "text-[var(--foreground-muted)]"
                    }`}
                  >
                    {pkg.description}
                  </p>

                  {/* Inclusions Checklist */}
                  <div className="mt-6 pt-6 border-t border-white/10 border-[var(--border)] space-y-3">
                    {pkg.inclusions.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs font-sans font-light">
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                            isFeatured
                              ? "bg-[var(--accent)]/20 text-[var(--accent-light)]"
                              : "bg-[var(--primary)]/10 text-[var(--primary)]"
                          }`}
                        >
                          <FiCheck className="text-[10px]" />
                        </div>
                        <span className={isFeatured ? "text-slate-200" : "text-[var(--foreground)]"}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Action Button */}
                <div className="mt-8 pt-6 border-t border-white/10 border-[var(--border)]">
                  <Link
                    href="#contact"
                    className={`w-full py-3.5 rounded-full font-sans text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-md ${
                      isFeatured
                        ? "bg-[var(--accent)] text-black hover:bg-[var(--accent-light)] shadow-xl hover:scale-102 active:scale-95"
                        : "bg-[var(--primary)] text-white hover:bg-[var(--primary-dark)] active:scale-95"
                    }`}
                  >
                    <FiCalendar className="text-sm" />
                    <span>Check Date Availability</span>
                    <FiArrowRight className="text-sm" />
                  </Link>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
