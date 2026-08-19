"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiCheck, FiCalendar, FiArrowRight, FiShield, FiClock, FiUsers } from "react-icons/fi";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const STARTING_PRICE = "₹5,000";

export default function PricingSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        ".pricing-header",
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

      // Main Card Unmasking Reveal
      if (cardRef.current) {
        gsap.fromTo(
          cardRef.current,
          {
            opacity: 0,
            y: 50,
            scale: 0.96,
            clipPath: "polygon(0 10%, 100% 0%, 100% 90%, 0% 100%)",
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardRef.current,
              start: "top 80%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const venueInclusions = [
    "Full Exclusive Access to 12,000+ sq. ft. Lawns",
    "Private Swimming Pool & Sunbed Lounge Access",
    "Flexible Event Configurations (Day/Night Shifts)",
    "Dedicated On-Site Venue Manager & Support Staff",
    "Gated Parking & Private Entry Way",
    "Power Backup & Lighting Rig Setup Allowed",
  ];

  return (
    <section
      ref={sectionRef}
      id="booking"
      aria-label="Booking & Rates Section"
      className="w-full py-28 px-6 md:px-12 lg:px-20 bg-[var(--background)] border-b border-[var(--border)] relative overflow-hidden"
    >
      {/* Soft Background Accent Circle */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--primary)]/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div className="pricing-header text-center max-w-2xl flex flex-col items-center">
          <span className="text-xs uppercase tracking-[0.25em] text-[var(--accent)] font-semibold px-3.5 py-1 bg-[var(--accent)]/10 rounded-full border border-[var(--accent)]/20 mb-3 font-sans">
            Simple &amp; Transparent Rates
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[var(--foreground)] leading-tight font-normal">
            Reserve Your Date <br />
            <span className="italic font-light text-[var(--primary)]">
              With Confidence
            </span>
          </h2>
          <p className="mt-4 text-[var(--foreground-muted)] font-sans font-light text-base md:text-lg">
            Experience luxury venue hosting tailored to your occasion size and customized requirements.
          </p>
        </div>

        {/* Pricing Experience Showcase */}
        <div
          ref={cardRef}
          className="w-full mt-16 rounded-[2.5rem] bg-gradient-to-br from-[var(--primary-dark)] via-[#0F2D20] to-[var(--primary-dark)] text-white shadow-2xl overflow-hidden border border-[var(--accent)]/30 relative"
        >
          {/* Metallic Corner Shimmer */}
          <div
            className="absolute top-0 right-0 w-80 h-80 bg-[var(--accent)]/10 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 sm:p-12 lg:p-16 items-center">
            
            {/* Left: Pricing Details */}
            <div className="lg:col-span-5 flex flex-col items-start border-b lg:border-b-0 lg:border-r border-white/10 pb-8 lg:pb-0 lg:pr-12">
              <span className="text-xs uppercase tracking-[0.2em] text-[var(--accent-light)] font-medium font-sans">
                Starting Package Rate
              </span>
              
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-4xl sm:text-6xl font-serif font-bold text-white tracking-tight">
                  {STARTING_PRICE}
                </span>
                <span className="text-sm font-sans text-slate-300 font-light">
                  / starting price*
                </span>
              </div>

              <p className="mt-4 text-xs font-sans text-slate-300 font-light leading-relaxed">
                *Prices vary based on event type, guest count, season, and optional add-on amenities (catering, decor, music).
              </p>

              {/* Badges */}
              <div className="mt-8 flex flex-col gap-3 w-full">
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10 text-xs font-sans text-slate-200">
                  <FiClock className="text-[var(--accent-light)] text-base flex-shrink-0" />
                  <span>Flexible Booking Timings (Day &amp; Night)</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10 text-xs font-sans text-slate-200">
                  <FiUsers className="text-[var(--accent-light)] text-base flex-shrink-0" />
                  <span>Accommodates up to 500+ Guests</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10 text-xs font-sans text-slate-200">
                  <FiShield className="text-[var(--accent-light)] text-base flex-shrink-0" />
                  <span>Instant Date Availability Confirmation</span>
                </div>
              </div>

              <div className="mt-8 w-full">
                <Link
                  href="#contact"
                  className="w-full py-4 bg-[var(--accent)] text-black font-sans text-xs uppercase tracking-widest font-bold rounded-full hover:bg-[var(--accent-light)] transition-all duration-300 flex items-center justify-center gap-2 shadow-xl hover:scale-102 active:scale-95 cursor-pointer"
                >
                  <FiCalendar className="text-base" />
                  <span>Check Availability</span>
                  <FiArrowRight className="text-base" />
                </Link>
              </div>
            </div>

            {/* Right: Included Amenities Checklist */}
            <div className="lg:col-span-7 flex flex-col justify-center lg:pl-4">
              <h3 className="text-2xl font-serif text-white font-normal mb-2">
                What&apos;s Included In Your Booking
              </h3>
              <p className="text-xs text-[var(--accent-light)] font-sans uppercase tracking-wider mb-6">
                Premium Event Privileges
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {venueInclusions.map((inclusion, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <div className="w-6 h-6 rounded-full bg-[var(--accent)]/20 text-[var(--accent-light)] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <FiCheck className="text-sm" />
                    </div>
                    <span className="text-xs sm:text-sm font-sans font-light text-slate-200 leading-snug">
                      {inclusion}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 rounded-2xl bg-black/30 border border-white/10 text-center">
                <p className="text-xs font-sans text-slate-300 font-light">
                  Need custom catering, stage setups, or DJ sound systems? We assist with trusted vendor partners!
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
