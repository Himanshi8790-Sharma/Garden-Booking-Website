"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiCheckCircle } from "react-icons/fi";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function PricingVisualSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (imageRef.current && sectionRef.current) {
        gsap.fromTo(
          imageRef.current,
          { scale: 1.15, yPercent: -6 },
          {
            scale: 1.0,
            yPercent: 6,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      }

      if (textRef.current && sectionRef.current) {
        gsap.fromTo(
          textRef.current,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
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
      aria-label="Venue Atmosphere Visual Showcase"
      className="relative w-full min-h-[500px] lg:min-h-[580px] flex items-center justify-center overflow-hidden bg-black text-white"
    >
      {/* Background Image with Parallax Scale */}
      <div ref={imageRef} className="absolute inset-0 w-full h-full">
        <Image
          src="/images/HeroGarden.jpg"
          alt="Helping Garden Club Venue Overview"
          fill
          priority={false}
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[var(--primary-dark)]/90 via-[var(--primary-dark)]/75 to-black/85"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/35" aria-hidden="true" />
      </div>

      {/* Floating Ambient Glowing Orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--accent)]/15 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Content */}
      <div
        ref={textRef}
        className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center flex flex-col items-center"
      >
        <span className="text-xs uppercase tracking-[0.25em] text-[var(--accent-light)] font-semibold px-4 py-1.5 bg-white/10 rounded-full border border-white/15 mb-6 backdrop-blur-md font-sans">
          The Venue Atmosphere
        </span>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-white font-normal leading-[1.15] tracking-tight">
          A Sanctuary of Lush Lawns &amp; <br />
          <span className="italic font-light text-[var(--accent-light)]">
            Sparkling Waters
          </span>
        </h2>

        <p className="mt-6 text-slate-200 font-sans font-light text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed">
          Over 12,000 square feet of manicured open space waiting to bring your wedding, birthday, or milestone celebration to life.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs font-sans font-medium text-slate-200">
          <span className="flex items-center gap-1.5">
            <FiCheckCircle className="text-[var(--accent-light)]" />
            100% Private Venue Access
          </span>
          <span className="flex items-center gap-1.5">
            <FiCheckCircle className="text-[var(--accent-light)]" />
            Filtered Private Swimming Pool
          </span>
          <span className="flex items-center gap-1.5">
            <FiCheckCircle className="text-[var(--accent-light)]" />
            Gated Security &amp; Parking
          </span>
        </div>
      </div>
    </section>
  );
}
