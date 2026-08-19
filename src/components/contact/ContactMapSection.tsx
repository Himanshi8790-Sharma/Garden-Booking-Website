"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiMapPin, FiNavigation } from "react-icons/fi";
import { MAP_IFRAME_URL, MAP_DIRECTIONS_LINK, ADDRESS_TEXT } from "@/src/constants/links";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ContactMapSection() {
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
      aria-label="Venue Location Map"
      className="w-full py-24 px-6 md:px-12 lg:px-20 bg-[var(--background-secondary)] border-b border-[var(--border)] relative"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl flex flex-col items-center">
          <span className="text-xs uppercase tracking-[0.25em] text-[var(--accent)] font-semibold px-3.5 py-1 bg-[var(--accent)]/10 rounded-full border border-[var(--accent)]/20 mb-3 font-sans">
            Prime Location
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[var(--foreground)] leading-tight font-normal">
            Visit Our Garden <br />
            <span className="italic font-light text-[var(--primary)]">
              Venue Location
            </span>
          </h2>
          <p className="mt-4 text-[var(--foreground-muted)] font-sans font-light text-base md:text-lg">
            Conveniently situated with ample gated parking space for guest arrivals.
          </p>
        </div>

        {/* Map & Address Box Container */}
        <div
          ref={cardRef}
          className="w-full mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[var(--card)] p-4 sm:p-6 rounded-[2.5rem] border border-[var(--border)] shadow-xl"
        >
          {/* Left: Responsive Google Maps Iframe */}
          <div className="lg:col-span-8 relative w-full h-[360px] sm:h-[440px] rounded-3xl overflow-hidden shadow-inner border border-[var(--border)]">
            <iframe
              src={MAP_IFRAME_URL}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Helping Garden Club Google Maps Location"
              className="w-full h-full filter saturate-105"
            />
          </div>

          {/* Right: Address & Directions Card */}
          <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between h-full bg-[var(--background-secondary)] rounded-3xl border border-[var(--border)]">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center text-xl mb-4">
                <FiMapPin />
              </div>

              <span className="text-xs uppercase tracking-widest text-[var(--accent)] font-semibold font-sans">
                Official Address
              </span>

              <h3 className="text-xl font-serif font-normal text-[var(--foreground)] mt-1">
                Helping Garden Club
              </h3>

              <p className="mt-3 text-xs sm:text-sm font-sans font-light text-[var(--foreground-muted)] leading-relaxed">
                {ADDRESS_TEXT}
              </p>

              <div className="mt-6 space-y-2 text-xs font-sans text-[var(--foreground-muted)]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--primary)]" />
                  <span>Ample Private Gated Parking</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--primary)]" />
                  <span>Convenient Access for Buses &amp; Cars</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[var(--border)]">
              <a
                href={MAP_DIRECTIONS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-[var(--primary)] text-white font-sans text-xs uppercase tracking-widest font-semibold rounded-full hover:bg-[var(--primary-dark)] transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:scale-102 active:scale-95 cursor-pointer"
              >
                <FiNavigation className="text-base" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
