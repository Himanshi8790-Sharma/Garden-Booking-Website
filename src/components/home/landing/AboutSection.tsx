"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface FeatureHighlight {
  title: string;
  desc: string;
}

const keyHighlights: FeatureHighlight[] = [
  {
    title: "Spacious Garden",
    desc: "12,000+ sq. ft. of lush outdoor space.",
  },
  {
    title: "Weddings & Receptions",
    desc: "Beautiful settings for your special day.",
  },
  {
    title: "Birthdays & Anniversaries",
    desc: "Celebrate every milestone in style.",
  },
  {
    title: "Swimming Pool",
    desc: "Perfect for relaxed poolside gatherings.",
  },
  {
    title: "Private Events",
    desc: "A comfortable space for family and friends.",
  },
  {
    title: "Flexible Setup",
    desc: "Create the celebration you have imagined.",
  },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageMainRef = useRef<HTMLDivElement>(null);
  const imageSubRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Heading reveal
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          {
            opacity: 0,
            y: 40,
            clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
          },
          {
            opacity: 1,
            y: 0,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
            },
          },
        );
      }

      // Content reveal
      gsap.fromTo(
        [textRef.current, statsRef.current],
        {
          opacity: 0,
          y: 35,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
          },
        },
      );

      // Main image reveal
      if (imageMainRef.current) {
        gsap.fromTo(
          imageMainRef.current,
          {
            opacity: 0,
            scale: 1.1,
            clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
          },
          {
            opacity: 1,
            scale: 1,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            duration: 1.3,
            ease: "power3.inOut",
            scrollTrigger: {
              trigger: imageMainRef.current,
              start: "top 80%",
            },
          },
        );
      }

      // Floating image reveal
      if (imageSubRef.current && sectionRef.current) {
        gsap.fromTo(
          imageSubRef.current,
          {
            opacity: 0,
            y: 60,
            scale: 0.92,
          },
          {
            opacity: 1,
            scale: 1,
            y: -20,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: imageSubRef.current,
              start: "top 85%",
            },
          },
        );

        // Parallax
        gsap.to(imageSubRef.current, {
          y: -45,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      aria-label="About Helping Garden Club"
      className="relative w-full py-20 md:py-24 lg:py-28 px-6 md:px-12 lg:px-20 bg-(--background) overflow-hidden  border-b border-(--border)"
    >
      {/* Background Accent */}
      <div
        className="absolute top-0 right-0 w-100 h-100 md:w-125 md:h-125 bg-(--primary-light)/5 rounded-full blur-3xl pointer-events-none "
        aria-hidden="true"
      />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ">
        {/* =========================================
            LEFT CONTENT
        ========================================== */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          {/* Heading */}
          <div
            ref={headingRef}
            className="flex flex-col items-start overflow-hidden"
          >
            {/* Eyebrow */}
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-(--accent) font-semibold mb-4 px-3.5 py-1.5 bg-(--accent)/10 rounded-full border border-(--accent)/20 font-sans ">
              About Helping Garden Club
            </span>

            {/* Main Heading */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-serif text-(--foreground) leading-[1.05] font-normal">
              Where Beautiful
              <br />
              <span className="italic font-light text-(--primary)">
                Moments Begin
              </span>
            </h2>
          </div>

          {/* Description */}
          <div
            ref={textRef}
            className="mt-7 text-(--foreground-muted) text-base md:text-lg leading-relaxed font-sans font-light "
          >
            <p className="max-w-2xl">
              Surrounded by lush greenery and open skies, Helping Garden Club
              offers an elegant setting for weddings, birthdays, anniversaries,
              poolside gatherings, and private celebrations.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-7">
              {keyHighlights.map((item, idx) => (
                <div
                  key={idx}
                  className="group flex items-start gap-3 p-3.5 rounded-2xl bg-(--background-secondary) border border-(--border) transition-all duration-300 hover:border-(--accent)/50 hover:shadow-md"
                >
                  <FiCheckCircle className="text-(--accent) text-lg shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110 " />

                  <div>
                    <h3 className="text-xs font-sans font-semibold text-(--foreground) uppercase tracking-wider ">
                      {item.title}
                    </h3>

                    <p className="text-xs text-(--foreground-muted) font-sans font-light mt-1 leading-snug ">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* =========================================
              STATS + CTA
          ========================================== */}
          <div
            ref={statsRef}
            className="mt-9 pt-7 border-t border-(--border) flex flex-wrap items-center justify-between gap-6 "
          >
            {/* Stats */}
            <div className="flex items-center gap-7 sm:gap-9">
              {/* Lawn */}
              <div>
                <p className="text-3xl sm:text-4xl font-serif font-semibold text-(--primary) ">
                  12,000+
                </p>

                <p className="text-[10px] sm:text-xs uppercase tracking-wider text-(--foreground-muted) font-sans  mt-1">
                  Sq. Ft. Lawn
                </p>
              </div>

              {/* Divider */}
              <div className="w-px h-10 bg-(--border)" aria-hidden="true" />

              {/* Capacity */}
              <div>
                <p className="text-3xl sm:text-4xl font-serif font-semibold text-(--accent) ">
                  500+
                </p>

                <p className="text-[10px] sm:text-xs uppercase tracking-wider text-(--foreground-muted) font-sans mt-1 ">
                  Guest Capacity
                </p>
              </div>
            </div>

            {/* CTA */}
            <Link
              href="#events"
              className="px-6 py-3.5 bg-(--primary) text-white font-text-xs uppercase tracking-widest font-semibold rounded-full hover:bg-(--primary-dark) transition-all duration-300 flex items-center gap-2 shadow-lg shadow-(--primary)/15 hover:shadow-xl hover:-translate-y-0.5 active:scale-95 cursor-pointer "
            >
              <span>Explore Events</span>
              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* =========================================
            RIGHT VISUALS
        ========================================== */}
        <div className="lg:col-span-6 relative flex flex-col items-center lg:items-end mt-4 lg:mt-0 ">
          {/* Main Image */}
          <div
            ref={imageMainRef}
            className="relative w-full max-w-lg lg:max-w-none h-95 sm:h-120 lg:h-140 rounded-4xl overflow-hidden shadow-2xl border-4 border-(--card) group"
          >
            <Image
              src="/image/heromain.png"
              alt="Lush outdoor garden venue at Helping Garden Club"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 "
            />

            {/* Image Overlay */}
            <div
              className="absolute inset-0 bg-linear-to-t from-(--primary-dark)/75 via-transparent to-transparent "
              aria-hidden="true"
            />

            {/* Image Text */}
            <div className="absolute bottom-7 left-7 right-7 text-white">
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-(--accent-light) font-sans font-medium ">
                The Garden
              </span>

              <p className="text-xl sm:text-2xl font-serif font-normal text-white mt-1 ">
                A Beautiful Space to Celebrate
              </p>
            </div>
          </div>

          {/* =========================================
              FLOATING SECOND IMAGE
          ========================================== */}
          <div
            ref={imageSubRef}
            className="relative lg:absolute -bottom-10 lg:-left-8 w-full sm:w-70 h-47.5 sm:h-50 mt-5 lg:mt-0 rounded-2xl overflow-hidden shadow-2xl border-4 border-(--card) bg-(--card) z-10 group"
          >
            <Image
              src="/image/swimming.png"
              alt="Elegant event decor and celebration setup"
              fill
              sizes="(max-width: 640px) 100vw, 280px"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 "
            />

            {/* Overlay */}
            <div
              className="absolute inset-0 bg-linear-to-t from-(--primary-dark)/80 via-transparent to-transparent "
              aria-hidden="true"
            />

            {/* Text */}
            <div className="absolute bottom-4 left-5 text-white">
              <span className="text-[9px] uppercase tracking-[0.2em] text-(--accent-light) font-sans font-semibold">
                Celebrate in Style
              </span>

              <p className="text-sm font-serif font-light text-white mt-0.5">
                Elegant Decor & Setups
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
