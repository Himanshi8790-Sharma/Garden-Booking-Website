"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiSliders, FiMessageSquare, FiArrowRight } from "react-icons/fi";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function PricingCustomSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (cardRef.current && sectionRef.current) {
        gsap.fromTo(
          cardRef.current,
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
      aria-label="Planning Something Special Custom Events"
      className="w-full py-20 px-6 md:px-12 lg:px-20 bg-[var(--background-secondary)] border-b border-[var(--border)] relative overflow-hidden"
    >
      <div
        ref={cardRef}
        className="max-w-6xl mx-auto rounded-3xl p-8 sm:p-12 bg-[var(--card)] border border-[var(--border)] shadow-lg flex flex-col md:flex-row items-center justify-between gap-8"
      >
        <div className="flex items-start gap-5 max-w-2xl">
          <div className="w-14 h-14 rounded-2xl bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center text-2xl flex-shrink-0 mt-1">
            <FiSliders />
          </div>
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[var(--accent)] font-semibold font-sans">
              Tailored Arrangements
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-[var(--foreground)] font-normal mt-1">
              Planning Something Special?
            </h2>
            <p className="mt-2 text-sm font-sans font-light text-[var(--foreground-muted)] leading-relaxed">
              Need multi-day wedding shift access, custom mandap rigging, exclusive pool hours, or specialized food stall setups? We craft tailored quotes based on your exact requirements.
            </p>
          </div>
        </div>

        <div className="flex-shrink-0 w-full md:w-auto">
          <Link
            href="tel:+919799498256"
            className="w-full md:w-auto px-7 py-4 bg-[var(--primary)] text-white font-sans text-xs uppercase tracking-widest font-semibold rounded-full hover:bg-[var(--primary-dark)] transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-xl active:scale-95 cursor-pointer"
          >
            <FiMessageSquare className="text-base" />
            <span>Enquire For Custom Rates</span>
            <FiArrowRight className="text-base" />
          </Link>
        </div>
      </div>
    </section>
  );
}
