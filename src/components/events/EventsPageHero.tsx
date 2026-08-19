"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { FiChevronRight, FiCalendar, FiArrowDown } from "react-icons/fi";

export default function EventsPageHero() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      if (titleRef.current) {
        tl.fromTo(
          titleRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1.1 }
        );
      }

      if (subtitleRef.current) {
        tl.fromTo(
          subtitleRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.7"
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      aria-label="Events Hero Banner"
      className="relative w-full h-[65vh] min-h-[460px] max-h-[620px] bg-[var(--primary-dark)] text-white flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/wedding.webp"
          alt="Luxury Open Air Event Venue Setting"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[var(--primary-dark)]/90 via-[var(--primary-dark)]/75 to-[var(--background-dark)]"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
      </div>

      {/* Ambient Glowing Orbs */}
      <div
        className="absolute -top-20 -left-20 w-80 h-80 bg-[var(--accent)]/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 -right-20 w-96 h-96 bg-[var(--primary-light)]/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center mt-12">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs font-sans uppercase tracking-[0.2em] text-[var(--accent-light)] mb-4 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15"
        >
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <FiChevronRight className="text-xs text-[var(--accent-light)]" />
          <span className="text-white font-semibold">Events &amp; Celebrations</span>
        </nav>

        <h1
          ref={titleRef}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-normal text-white leading-[1.1] tracking-tight"
        >
          Celebrate Every <br />
          <span className="italic font-light text-[var(--accent-light)]">
            Special Moment
          </span>
        </h1>

        <p
          ref={subtitleRef}
          className="mt-6 text-slate-200 font-sans font-light text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed"
        >
          From fairytale weddings and energetic birthday bashes to romantic anniversaries and private pool parties in Jaipur.
        </p>

        {/* Action Button & Scroll Indicator */}
        <div className="mt-8 flex items-center gap-4">
          <Link
            href="#categories"
            className="px-6 py-3.5 bg-[var(--accent)] text-black font-sans text-xs uppercase tracking-widest font-bold rounded-full hover:bg-[var(--accent-light)] transition-all duration-300 flex items-center gap-2 shadow-xl hover:scale-105 active:scale-95 cursor-pointer"
          >
            <FiCalendar className="text-sm" />
            <span>Explore Occasions</span>
          </Link>
          <a
            href="#categories"
            aria-label="Scroll to Event Categories"
            className="w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 backdrop-blur-md animate-bounce"
          >
            <FiArrowDown className="text-base" />
          </a>
        </div>
      </div>
    </section>
  );
}
