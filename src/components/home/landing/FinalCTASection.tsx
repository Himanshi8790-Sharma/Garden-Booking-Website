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

export default function FinalCTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const prefersReducedMotion =
  //     typeof window !== "undefined" &&
  //     window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  //   if (prefersReducedMotion) return;

  //   const ctx = gsap.context(() => {
  //     if (containerRef.current && sectionRef.current) {
  //       gsap.fromTo(
  //         containerRef.current,
  //         {
  //           opacity: 0,
  //           y: 0,
  //           scale: 0,
  //           clipPath: "polygon(0 10%, 100% 0%, 100% 90%, 0% 100%)",
  //         },
  //         {
  //           opacity: 1,
  //           y: 0,
  //           scale: 1,
  //           clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
  //           duration: 1.2,
  //           ease: "power3.out",
  //           scrollTrigger: {
  //             trigger: sectionRef.current,
  //             start: "top 75%",
  //           },
  //         }
  //       );
  //     }
  //   }, sectionRef);

  //   return () => ctx.revert();
  // }, []);
useEffect(() => {
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion) return;

  const ctx = gsap.context(() => {
    if (containerRef.current && sectionRef.current) {
      gsap.fromTo(
        containerRef.current,
        {
          opacity: 0,
          y: 45,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
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
      aria-label="Final Call To Action"
      className="w-full py-24 px-6 md:px-12 lg:px-20 bg-(--background) relative overflow-hidden"
    >
     <div
  ref={containerRef}
  className="max-w-7xl mx-auto rounded-[2.5rem] relative overflow-hidden bg-linear-to-br from-(--primary-dark) via-[#0F2D20] to-(--primary-dark) text-white shadow-2xl p-10 sm:p-16 lg:p-20 border border-(--accent)/30"
>
        {/* Background CTA Image with Mask */}
        <div className="absolute inset-0 z-0 opacity-25 mix-blend-overlay pointer-events-none">
          <Image
            src="/assets/contact_cta_bg_desktop.webp"
            alt="Venue Garden Ambience Background"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Ambient Radial Orbs */}
        <div
          className="absolute top-0 right-0 w-96 h-96 bg-(--accent)/15 rounded-full blur-[120px] pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 w-96 h-96 bg(--primary-light)/20 rounded-full blur-[120px] pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
          <span className="text-xs uppercase tracking-[0.25em] text-(--accent-light) font-semibold px-4 py-1.5 bg-white/10 rounded-full border border-white/15 mb-6 backdrop-blur-md font-sans">
            Reserve Your Special Date
          </span>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-normal text-white leading-[1.1] tracking-tight">
            Your Celebration <br />
            <span className="italic font-light text-(--accent-light)">
              Starts Here
            </span>
          </h2>

          <p className="mt-6 text-slate-200 font-sans font-light text-base sm:text-lg md:text-xl leading-relaxed">
            Let us help you bring your dream wedding, birthday bash, or private gathering to life in our stunning garden venue. Get in touch with our event planners today.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link
              href="#booking"
              className="px-8 py-4 bg-(--accent) text-black font-sans text-xs uppercase tracking-widest font-bold rounded-full hover:bg-(--accent-light) transition-all duration-300 flex items-center gap-2 shadow-2xl hover:scale-105 active:scale-95 cursor-pointer"
            >
              <FiCalendar className="text-base" />
              <span>Book Your Event</span>
              <FiArrowRight className="text-base" />
            </Link>

            <a
              href="tel:+919799498256"
              className="px-8 py-4 bg-white/10 border border-white/30 text-white font-sans text-xs uppercase tracking-widest font-semibold rounded-full hover:bg-white/20 transition-all duration-300 flex items-center gap-2 backdrop-blur-md active:scale-95 cursor-pointer"
            >
              <FiPhoneCall className="text-base text-(--accent-light)" />
              <span>Contact Us</span>
            </a>
          </div>

          <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-xs text-slate-300 font-sans font-light">
            <span>✨ Instant Confirmation</span>
            <span>•</span>
            <span>📍 Easy Venue Visits</span>
            <span>•</span>
            <span>📞 Direct Concierge</span>
          </div>

        </div>
      </div>
    </section>
  );
}
