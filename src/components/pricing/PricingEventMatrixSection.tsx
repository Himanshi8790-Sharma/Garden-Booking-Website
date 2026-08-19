"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiCheckCircle, FiUsers, FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import { eventMatrixData } from "./pricingData";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function PricingEventMatrixSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const rowsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (rowsRef.current.length > 0) {
        gsap.fromTo(
          rowsRef.current,
          { opacity: 0, y: 30 },
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
      aria-label="Event-Based Package Matrix"
      className="w-full py-24 px-6 md:px-12 lg:px-20 bg-[var(--background)] border-b border-[var(--border)] relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl flex flex-col items-center">
          <span className="text-xs uppercase tracking-[0.25em] text-[var(--accent)] font-semibold px-3.5 py-1 bg-[var(--accent)]/10 rounded-full border border-[var(--accent)]/20 mb-3 font-sans">
            Package Guidance
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[var(--foreground)] leading-tight font-normal">
            Package Recommendations <br />
            <span className="italic font-light text-[var(--primary)]">
              By Celebration Type
            </span>
          </h2>
          <p className="mt-4 text-[var(--foreground-muted)] font-sans font-light text-base md:text-lg">
            Find the ideal package match based on your celebration style and estimated guest count.
          </p>
        </div>

        {/* Visually Rich Matrix Layout */}
        <div className="w-full mt-16 space-y-4">
          {eventMatrixData.map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) rowsRef.current[index] = el;
              }}
              className="p-6 sm:p-8 rounded-3xl bg-[var(--card)] border border-[var(--border)] hover:border-[var(--accent)]/40 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-2xl bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center text-lg flex-shrink-0 font-serif font-bold">
                  0{index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-serif font-normal text-[var(--foreground)]">
                    {item.event}
                  </h3>
                  <div className="flex items-center gap-2 mt-1 text-xs font-sans text-[var(--foreground-muted)]">
                    <FiUsers className="text-[var(--accent)]" />
                    <span>Estimated Guest Capacity: {item.capacity}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-end pt-4 sm:pt-0 border-t sm:border-t-0 border-[var(--border)]">
                <div className="flex flex-col items-start sm:items-end">
                  <span className="text-[10px] uppercase tracking-widest text-[var(--foreground-muted)] font-sans">
                    Recommended Tier
                  </span>
                  <span className="text-sm font-sans font-semibold text-[var(--primary)] flex items-center gap-1.5 mt-0.5">
                    <FiCheckCircle className="text-[var(--accent)]" />
                    {item.suitablePackage}
                  </span>
                </div>

                <Link
                  href="#contact"
                  className="px-5 py-2.5 bg-[var(--background-secondary)] hover:bg-[var(--primary)] hover:text-white text-[var(--foreground)] font-sans text-xs uppercase tracking-wider font-semibold rounded-full border border-[var(--border)] transition-all duration-300 flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Book Date</span>
                  <FiArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
