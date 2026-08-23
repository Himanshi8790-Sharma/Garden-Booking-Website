"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiDroplet, FiArrowRight } from "react-icons/fi";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function PoolSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Parallax scale scrub on background image
      if (bgImageRef.current && sectionRef.current) {
        gsap.fromTo(
          bgImageRef.current,
          { scale: 1.25, yPercent: -8 },
          {
            scale: 1.0,
            yPercent: 8,
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

      // Content Masked Fade & Scale
      if (contentRef.current && sectionRef.current) {
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: 50, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 68%",
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
      aria-label="Swimming Pool Experience Section"
      className="relative w-full min-h-145 lg:min-h-165 flex items-center justify-center overflow-hidden bg-black text-white"
    >
      {/* Background Image Container with Parallax Scale */}
      <div ref={bgImageRef} className="absolute inset-0 w-full h-full">
        <Image
          src="/images/pool.webp"
          alt="Luxury Swimming Pool Experience"
          fill
          priority={false}
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Layered Dark Overlay */}
        <div
          className="absolute inset-0 bg-linear-to-r from-(--primary-dark)/90 via-(--primary-dark)/75 to-black/85"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/35" aria-hidden="true" />
      </div>

      {/* Floating Ambient Glow */}
      <div
        className="absolute -top-24 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[110px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 right-1/4 w-96 h-96 bg-(--accent)/15 rounded-full blur-[110px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Main Content */}
      <div
        ref={contentRef}
        className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center flex flex-col items-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-400/30 text-cyan-300 text-xs font-sans uppercase tracking-[0.2em] mb-6 backdrop-blur-md">
          <FiDroplet className="text-cyan-400 text-sm animate-pulse" />
          <span>Exclusive Venue Amenity</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-white font-normal leading-[1.1] tracking-tight">
          Make Your Celebration <br />
          <span className="italic font-light text-cyan-200">
            More Refreshing
          </span>
        </h2>

        <p className="mt-6 text-slate-200 font-sans font-light text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed">
          Elevate your event with exclusive access to our sparkling turquoise swimming pool. Perfect for pool party bashes, sunny cocktail lounges, or late-night celebratory dips.
        </p>

        {/* Feature Tags */}
        <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-sans font-medium text-cyan-100">
          <span className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-md border border-white/15">
            🏊 Filtered Crystal Water
          </span>
          <span className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-md border border-white/15">
            🍹 Poolside Bar &amp; Sunbeds
          </span>
          <span className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-md border border-white/15">
            ✨ Starlit Ambient Lighting
          </span>
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="#booking"
            className="px-8 py-4 bg-(--accent) text-black font-sans text-xs uppercase tracking-widest font-bold rounded-full hover:bg-(--accent-light) transition-all duration-300 flex items-center gap-2 shadow-2xl hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Book Pool</span>
            <FiArrowRight className="text-base" />
          </Link>
          <Link
            href="#gallery"
            className="px-8 py-4 bg-white/10 border border-white/30 text-white font-sans text-xs uppercase tracking-widest font-semibold rounded-full hover:bg-white/20 transition-all duration-300 backdrop-blur-sm cursor-pointer"
          >
            View Pool Gallery
          </Link>
        </div>

      </div>
    </section>
  );
}
