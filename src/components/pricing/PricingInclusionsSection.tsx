"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiSun, FiDroplet, FiClock, FiShield, FiUsers, FiTruck } from "react-icons/fi";
import { venueInclusionsList } from "./pricingData";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const iconMap = [FiSun, FiDroplet, FiClock, FiShield, FiUsers, FiTruck];

export default function PricingInclusionsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (itemsRef.current.length > 0) {
        gsap.fromTo(
          itemsRef.current,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
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
      aria-label="What's Included Facilities"
      className="w-full py-24 px-6 md:px-12 lg:px-20 bg-[var(--background-secondary)] border-b border-[var(--border)] relative"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl flex flex-col items-center">
          <span className="text-xs uppercase tracking-[0.25em] text-[var(--accent)] font-semibold px-3.5 py-1 bg-[var(--accent)]/10 rounded-full border border-[var(--accent)]/20 mb-3 font-sans">
            Comprehensive Facilities
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[var(--foreground)] leading-tight font-normal">
            What&apos;s Included In <br />
            <span className="italic font-light text-[var(--primary)]">
              Your Booking
            </span>
          </h2>
          <p className="mt-4 text-[var(--foreground-muted)] font-sans font-light text-base md:text-lg">
            Every booking comes standard with essential venue privileges and dedicated support staff to ensure your event runs smoothly.
          </p>
        </div>

        {/* Feature Breakdown Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {venueInclusionsList.map((item, index) => {
            const Icon = iconMap[index % iconMap.length];

            return (
              <div
                key={index}
                ref={(el) => {
                  if (el) itemsRef.current[index] = el;
                }}
                className="group p-8 rounded-3xl bg-[var(--card)] border border-[var(--border)] hover:border-[var(--accent)]/40 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center text-xl group-hover:bg-[var(--primary)] group-hover:text-white transition-all duration-500">
                    <Icon />
                  </div>

                  <h3 className="text-xl font-serif font-normal text-[var(--foreground)] mt-6">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm font-sans font-light text-[var(--foreground-muted)] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[var(--border)] flex items-center justify-between">
                  <span className="text-[10px] font-sans font-semibold uppercase tracking-wider text-[var(--accent)]">
                    Standard Privilege
                  </span>
                  <div
                    className="w-2 h-2 rounded-full bg-[var(--primary)]"
                    aria-hidden="true"
                  />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
