"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FiCheck,
  FiCalendar,
  FiArrowRight,
  FiUsers,
  FiDroplet,
} from "react-icons/fi";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const STARTING_PRICE = "₹52,500";
export default function PricingSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Header — clean fade + upward reveal
      gsap.fromTo(
        ".pricing-header",
        {
          opacity: 0,
          y: 0,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 82%",
            once: true,
          },
        },
      );

      // Pricing Card — clean fade + upward reveal
      if (cardRef.current) {
        gsap.fromTo(
          cardRef.current,
          {
            opacity: 0,
            y: 35,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cardRef.current,
              start: "top 88%",
              once: true,
            },
          },
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const venueInclusions = [
    "Main garden venue booking starting from ₹52,500",
    "Beautiful outdoor space for private celebrations",
    "Ideal for weddings, birthdays & anniversaries",
    "Perfect for parties and special gatherings",
    "Swimming pool available separately for ₹8,000",
    "Additional event requirements can be discussed",
  ];

  return (
    <section
      ref={sectionRef}
      id="booking"
      aria-label="Booking & Rates Section"
      className="w-full py-28 px-6 md:px-12 lg:px-20 bg-(--background) border-b border-(--border) relative overflow-hidden"
    >
      {/* Soft Background Accent Circle */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-(--primary)/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="pricing-header text-center max-w-2xl flex flex-col items-center">
          <span className="text-xs uppercase tracking-[0.25em] text-(--accent) font-semibold px-3.5 py-1 bg-(--accent)/10 rounded-full border border-(--accent)/20 mb-3 font-sans">
            Venue &amp; Booking
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-(--foreground) leading-tight font-normal">
            Choose The Space
            <br />
            <span className="italic font-light text-(--primary)">
              For Your Celebration
            </span>
          </h2>

          <p className="mt-4 text-(--foreground-muted) font-sans font-light text-base md:text-lg">
            From beautiful garden celebrations to refreshing poolside
            gatherings, choose the experience that fits your occasion.
          </p>
        </div>

        {/* Pricing Experience Showcase */}
        <div
          ref={cardRef}
          className="w-full mt-16 rounded-[2.5rem] bg-linear-to-br from-(--primary-dark) via-[#0F2D20] to-(--primary-dark) text-white shadow-2xl overflow-hidden border border-(--accent)/30 relative"
        >
          {/* Metallic Corner Shimmer */}
          <div
            className="absolute top-0 right-0 w-80 h-80 bg-(--accent)/10 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 sm:p-12 lg:p-16 items-center">
            {/* Left: Pricing Details */}
            <div className="lg:col-span-5 flex flex-col items-start border-b lg:border-b-0 lg:border-r border-white/10 pb-8 lg:pb-0 lg:pr-12">
              <span className="text-xs uppercase tracking-[0.2em] text-(--accent-light) font-medium font-sans">
                Main Garden Booking
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
                *Garden venue pricing starts from ₹52,500. Final pricing may
                vary depending on your event type, date, duration, guest
                requirements, and selected services.
              </p>

              {/* Badges */}
              <div className="mt-8 flex flex-col gap-3 w-full">
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10 text-xs font-sans text-slate-200">
                  <FiCalendar className="text-(--accent-light) text-base shrink-0" />
                  <span>Garden Venue For Private Celebrations</span>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10 text-xs font-sans text-slate-200">
                  <FiUsers className="text-(--accent-light) text-base shrink-0" />
                  <span>Suitable For Weddings, Parties &amp; Gatherings</span>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10 text-xs font-sans text-slate-200">
                  <FiDroplet className="text(--accent-light) text-base shrink-0" />
                  <span>Swimming Pool Available Separately — ₹8,000</span>
                </div>
              </div>

              <div className="mt-8 w-full">
                <Link
                  href="#contact"
                  className="w-full py-4 bg-(--accent) text-black font-sans text-xs uppercase tracking-widest font-bold rounded-full hover:bg-(--accent-light) transition-all duration-300 flex items-center justify-center gap-2 shadow-xl hover:scale-102 active:scale-95 cursor-pointer"
                >
                  <FiCalendar className="text-base" />
                  <span>Enquire For Your Date</span>
                  <FiArrowRight className="text-base" />
                </Link>
              </div>
            </div>

            {/* Right: Included Amenities Checklist */}
            <div className="lg:col-span-7 flex flex-col justify-center lg:pl-4">
              <h3 className="text-2xl font-serif text-white font-normal mb-2">
                Make Your Celebration Your Own
              </h3>

              <p className="text-xs text-(--accent-light) font-sans uppercase tracking-wider mb-6">
                What You Can Expect
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {venueInclusions.map((inclusion, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <div className="w-6 h-6 rounded-full bg-(--accent)/20 text-(--accent-light) flex items-center justify-center shrink-0 mt-0.5">
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
                  Planning something special? Contact us to discuss your event,
                  requirements, and available options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
