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
      // Background parallax
      if (bgImageRef.current && sectionRef.current) {
        gsap.fromTo(
          bgImageRef.current,
          {
            scale: 1.25,
            yPercent: -8,
          },
          {
            scale: 1,
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

      // Content reveal
      if (contentRef.current && sectionRef.current) {
        gsap.fromTo(
          contentRef.current,
          {
            opacity: 0,
            y: 50,
            scale: 0.95,
          },
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
      id="pool"
      aria-labelledby="pool-section-heading"
      className="
        relative
        w-full
        min-h-130
        sm:min-h-145
        lg:min-h-165
        flex
        items-center
        justify-center
        overflow-hidden
        bg-black
        text-white
      "
    >
      {/* =========================================
          BACKGROUND IMAGE
      ========================================== */}
      <div
        ref={bgImageRef}
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      >
        <Image
          src="/images/pool.webp"
          alt=""
          fill
          priority={false}
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Dark overlay for readability */}
        <div
          className="
            absolute
            inset-0
            bg-linear-to-r
            from-(--primary-dark)/90
            via-(--primary-dark)/75
            to-black/85
          "
        />

        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* =========================================
          AMBIENT DECORATIONS
      ========================================== */}
      <div
        className="
          absolute
          -top-24
          left-1/4
          w-72
          h-72
          sm:w-96
          sm:h-96
          bg-cyan-500/10
          rounded-full
          blur-[110px]
          pointer-events-none
        "
        aria-hidden="true"
      />

      <div
        className="
          absolute
          -bottom-24
          right-1/4
          w-72
          h-72
          sm:w-96
          sm:h-96
          bg-(--accent)/15
          rounded-full
          blur-[110px]
          pointer-events-none
        "
        aria-hidden="true"
      />

      {/* =========================================
          MAIN CONTENT
      ========================================== */}
      <div
        ref={contentRef}
        className="
          relative
          z-10
          w-full
          max-w-4xl
          mx-auto
          px-4
          sm:px-6
          py-14
          sm:py-20
          text-center
          flex
          flex-col
          items-center
        "
      >
        {/* Eyebrow */}
        <div
          className="
            inline-flex
            items-center
            gap-1.5
            sm:gap-2
            px-3
            sm:px-4
            py-1.5
            rounded-full
            bg-cyan-950/80
            border
            border-cyan-400/30
            text-cyan-300
            text-[9px]
            sm:text-xs
            font-sans
            uppercase
            tracking-[0.16em]
            sm:tracking-[0.2em]
            mb-4
            sm:mb-6
            backdrop-blur-md
          "
        >
          <FiDroplet
            aria-hidden="true"
            className="text-cyan-400 text-xs sm:text-sm"
          />

          <span>Swimming Pool Venue</span>
        </div>

        {/* Heading */}
        <h2
          id="pool-section-heading"
          className="
            text-3xl
            sm:text-5xl
            md:text-6xl
            font-serif
            text-white
            font-normal
            leading-[1.08]
            tracking-tight
          "
        >
          Celebrate by the Pool
          <br className="hidden sm:block" />

          <span className="italic font-light text-cyan-200">
            in a Relaxed Setting
          </span>
        </h2>

        {/* SEO-friendly description */}
        <p
          className="
            mt-4
            sm:mt-6
            text-slate-200
            font-sans
            font-light
            text-sm
            sm:text-lg
            md:text-xl
            max-w-2xl
            leading-relaxed
          "
        >
          Enjoy our swimming pool for pool parties, birthday celebrations,
          summer gatherings, and private events at Helping Garden Club.
        </p>

        {/* =========================================
            FEATURE TAGS
        ========================================== */}
        <div
          className="
            mt-5
            sm:mt-8
            flex
            flex-wrap
            justify-center
            gap-2
            sm:gap-3
            md:gap-6
            text-[10px]
            sm:text-sm
            font-sans
            font-medium
            text-cyan-100
          "
          aria-label="Swimming pool features"
        >
          <span
            className="
              px-3
              sm:px-4
              py-1.5
              sm:py-2
              bg-white/10
              rounded-full
              backdrop-blur-md
              border
              border-white/15
            "
          >
            Poolside Celebrations
          </span>

          <span
            className="
              px-3
              sm:px-4
              py-1.5
              sm:py-2
              bg-white/10
              rounded-full
              backdrop-blur-md
              border
              border-white/15
            "
          >
            Private Pool
          </span>

          <span
            className="
              px-3
              sm:px-4
              py-1.5
              sm:py-2
              bg-white/10
              rounded-full
              backdrop-blur-md
              border
              border-white/15
            "
          >
            Summer Gatherings
          </span>
        </div>

        {/* =========================================
            ACTION BUTTONS
        ========================================== */}
        <div
          className="
            mt-7
            sm:mt-10
            flex
            flex-wrap
            items-center
            justify-center
            gap-2.5
            sm:gap-4
          "
        >
          <Link
            href="#booking"
            aria-label="Book the swimming pool at Helping Garden Club"
            className="
              px-5
              py-3
              sm:px-8
              sm:py-4
              bg-(--accent)
              text-black
              font-sans
              text-[10px]
              sm:text-xs
              uppercase
              tracking-[0.12em]
              sm:tracking-widest
              font-bold
              rounded-full
              hover:bg-(--accent-light)
              transition-all
              duration-300
              flex
              items-center
              gap-1.5
              sm:gap-2
              shadow-2xl
              hover:scale-105
              active:scale-95
            "
          >
            <span>Book Pool</span>

            <FiArrowRight
              aria-hidden="true"
              className="text-sm sm:text-base"
            />
          </Link>

          <Link
            href="#gallery"
            aria-label="View Helping Garden Club swimming pool gallery"
            className="
              px-5
              py-3
              sm:px-8
              sm:py-4
              bg-white/10
              border
              border-white/30
              text-white
              font-sans
              text-[10px]
              sm:text-xs
              uppercase
              tracking-[0.12em]
              sm:tracking-widest
              font-semibold
              rounded-full
              hover:bg-white/20
              transition-all
              duration-300
              backdrop-blur-sm
            "
          >
            View Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}

