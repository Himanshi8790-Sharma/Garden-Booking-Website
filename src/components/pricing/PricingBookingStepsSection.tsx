"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { bookingStepsData } from "./pricingData";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function PricingBookingStepsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (stepsRef.current.length > 0) {
        gsap.fromTo(
          stepsRef.current,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            stagger: 0.14,
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
      aria-label="Booking Process Steps"
      className="w-full py-24 px-6 md:px-12 lg:px-20 bg-[var(--background)] border-b border-[var(--border)] relative"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl flex flex-col items-center">
          <span className="text-xs uppercase tracking-[0.25em] text-[var(--accent)] font-semibold px-3.5 py-1 bg-[var(--accent)]/10 rounded-full border border-[var(--accent)]/20 mb-3 font-sans">
            Simple Process
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[var(--foreground)] leading-tight font-normal">
            Four Steps To Secure <br />
            <span className="italic font-light text-[var(--primary)]">
              Your Celebration Date
            </span>
          </h2>
          <p className="mt-4 text-[var(--foreground-muted)] font-sans font-light text-base md:text-lg">
            We make reserving your event date straightforward, transparent, and hassle-free.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {bookingStepsData.map((step, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) stepsRef.current[index] = el;
              }}
              className="group p-8 rounded-3xl bg-[var(--card)] border border-[var(--border)] hover:border-[var(--accent)]/40 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <span className="text-3xl font-serif font-bold text-[var(--primary)] opacity-40 group-hover:opacity-100 group-hover:text-[var(--accent)] transition-all duration-300">
                  {step.number}
                </span>

                <h3 className="text-xl font-serif font-normal text-[var(--foreground)] mt-4">
                  {step.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm font-sans font-light text-[var(--foreground-muted)] leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[var(--border)] flex items-center justify-between">
                <span className="text-[10px] font-sans font-semibold uppercase tracking-wider text-[var(--accent)]">
                  Step {step.number}
                </span>
                <div
                  className="w-2 h-2 rounded-full bg-[var(--primary)]"
                  aria-hidden="true"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
