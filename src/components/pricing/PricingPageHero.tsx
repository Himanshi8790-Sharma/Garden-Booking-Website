"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { FiChevronRight, FiTag } from "react-icons/fi";

export default function PricingPageHero() {
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
          { opacity: 0, y: 35 },
          { opacity: 1, y: 0, duration: 1.0 }
        );
      }

      if (subtitleRef.current) {
        tl.fromTo(
          subtitleRef.current,
          { opacity: 0, y: 20 },
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
      aria-label="Pricing Hero Banner"
      className="relative w-full h-[58vh] min-h-[420px] max-h-[560px] bg-[var(--primary-dark)] text-white flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/garden.webp"
          alt="Helping Garden Club Scenic Overview"
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

      {/* Decorative Glow Orbs */}
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
          <span className="text-white font-semibold">Venue Packages &amp; Pricing</span>
        </nav>

        <h1
          ref={titleRef}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-normal text-white leading-[1.1] tracking-tight"
        >
          Celebrate Beautifully, <br />
          <span className="italic font-light text-[var(--accent-light)]">
            Your Way
          </span>
        </h1>

        <p
          ref={subtitleRef}
          className="mt-6 text-slate-200 font-sans font-light text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed"
        >
          Transparent venue options crafted for intimate family soirees, vibrant pool bashes, and fairytale weddings.
        </p>

        <div className="mt-8 flex items-center gap-2 text-xs font-sans font-medium text-[var(--accent-light)] px-4 py-2 rounded-full bg-[var(--primary)]/60 backdrop-blur-md border border-[var(--accent)]/30">
          <FiTag className="text-sm" />
          <span>Editable Starting Packages • Tailored Event Hosting</span>
        </div>
      </div>
    </section>
  );
}
