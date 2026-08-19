"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiCalendar, FiPhoneCall, FiArrowRight } from "react-icons/fi";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function PricingPageCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (containerRef.current && sectionRef.current) {
        gsap.fromTo(
          containerRef.current,
          { opacity: 0, y: 40, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
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
      id="contact"
      aria-label="Let's Plan Your Celebration CTA"
      className="w-full py-24 px-6 md:px-12 lg:px-20 bg-[var(--background)] relative overflow-hidden border-t border-[var(--border)]"
    >
      <div
        ref={containerRef}
        className="max-w-7xl mx-auto rounded-[2.5rem] relative overflow-hidden bg-gradient-to-br from-[var(--primary-dark)] via-[#0C2217] to-black text-white shadow-2xl p-10 sm:p-16 lg:p-20 border border-[var(--accent)]/30"
      >
        {/* Background Overlay Image */}
        <div className="absolute inset-0 z-0 opacity-25 mix-blend-overlay pointer-events-none">
          <Image
            src="/assets/contact_cta_bg_desktop.webp"
            alt="Venue Ambience Background"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Ambient Radial Orbs */}
        <div
          className="absolute top-0 right-0 w-96 h-96 bg-[var(--accent)]/15 rounded-full blur-[120px] pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--primary-light)]/20 rounded-full blur-[120px] pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
          <span className="text-xs uppercase tracking-[0.25em] text-[var(--accent-light)] font-semibold px-4 py-1.5 bg-white/10 rounded-full border border-white/15 mb-6 backdrop-blur-md font-sans">
            Transparent Venue Booking
          </span>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-normal text-white leading-[1.1] tracking-tight">
            Let&apos;s Plan Your <br />
            <span className="italic font-light text-[var(--accent-light)]">
              Celebration
            </span>
          </h2>

          <p className="mt-6 text-slate-200 font-sans font-light text-base sm:text-lg md:text-xl leading-relaxed">
            Tell us what you&apos;re planning and our event team will help you select the ideal venue arrangement for your date.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link
              href="/#booking"
              className="px-8 py-4 bg-[var(--accent)] text-black font-sans text-xs uppercase tracking-widest font-bold rounded-full hover:bg-[var(--accent-light)] transition-all duration-300 flex items-center gap-2 shadow-2xl hover:scale-105 active:scale-95 cursor-pointer"
            >
              <FiCalendar className="text-base" />
              <span>Check Date Availability</span>
              <FiArrowRight className="text-base" />
            </Link>

            <a
              href="tel:+919799498256"
              className="px-8 py-4 bg-white/10 border border-white/30 text-white font-sans text-xs uppercase tracking-widest font-semibold rounded-full hover:bg-white/20 transition-all duration-300 flex items-center gap-2 backdrop-blur-md active:scale-95 cursor-pointer"
            >
              <FiPhoneCall className="text-base text-[var(--accent-light)]" />
              <span>Contact Us</span>
            </a>
          </div>

          <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-xs text-slate-300 font-sans font-light">
            <span>✨ No Hidden Venue Fees</span>
            <span>•</span>
            <span>📍 Pre-Booking Site Visits</span>
            <span>•</span>
            <span>📞 Direct Venue Concierge</span>
          </div>

        </div>
      </div>
    </section>
  );
}
