
// "use client";

// import { useEffect, useRef } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import gsap from "gsap";
// import { FiChevronRight, FiStar } from "react-icons/fi";

// export default function AboutPageHero() {
//   const heroRef = useRef<HTMLElement>(null);
//   const titleRef = useRef<HTMLHeadingElement>(null);
//   const subtitleRef = useRef<HTMLParagraphElement>(null);

//   useEffect(() => {
//     const prefersReducedMotion =
//       typeof window !== "undefined" &&
//       window.matchMedia("(prefers-reduced-motion: reduce)").matches;

//     if (prefersReducedMotion) return;

//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({
//         defaults: { ease: "power3.out" },
//       });

//       if (titleRef.current) {
//         tl.fromTo(
//           titleRef.current,
//           { opacity: 0, y: 40 },
//           { opacity: 1, y: 0, duration: 1.1 }
//         );
//       }

//       if (subtitleRef.current) {
//         tl.fromTo(
//           subtitleRef.current,
//           { opacity: 0, y: 25 },
//           { opacity: 1, y: 0, duration: 0.8 },
//           "-=0.7"
//         );
//       }
//     }, heroRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <header
//       ref={heroRef}
//       className="relative w-full min-h-155 sm:min-h-170 md:min-h-175 lg:min-h-180 text-white flex items-center justify-center overflow-hidden">
//       {/* Background Image */}
//       <div className="absolute inset-0 z-0">
//         <Image
//           src="/image/heromain.png"
//           alt="Helping Garden Club garden and outdoor event venue in Jaipur"
//           fill
//           priority
//           sizes="100vw"
//           className="object-cover object-center"
//         />

//         {/* Dark Overlay */}
//         <div
//           className="absolute inset-0 bg-linear-to-b from-(--primary-dark)/90 via-(--primary-dark)/50 to-(--background-dark) "/>
//       </div>

//       {/* Decorative Orbs */}
//       <div
//         className="absolute -top-24 -left-24 w-64 h-64 sm:w-80 sm:h-80 bg-(--accent)/15 rounded-full  blur-3xl pointer-events-none "
//         aria-hidden="true"
//       />

//       <div
//         className="absolute -bottom-24 -right-24 w-72 h-72 sm:w-96 sm:h-96 bg-(--primary-light)/20 rounded-full blur-3xl pointer-events-none "
//         aria-hidden="true"
//       />

//       {/* Hero Content */}
//       <div
//         className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-6 pt-20 sm:pt-24 md:pt-16 text-center flex flex-col items-center ">
//         {/* Breadcrumb */}
//         <nav
//           aria-label="Breadcrumb"
//           className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-sans uppercase tracking-[0.16em] sm:tracking-[0.2em] text-(--accent-light) mb-5 sm:mb-6 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 ">
//           <Link
//             href="/"
//             className="hover:text-white transition-colors"
//           >
//             Home
//           </Link>

//           <FiChevronRight
//             className="text-xs text-(--accent-light) shrink-0"
//             aria-hidden="true"
//           />

//           <span className="text-white font-semibold">
//             About Us
//           </span>
//         </nav>

//         {/* Main Heading */}
//         <h1
//           ref={titleRef}
//           className="max-w-4xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-normal text-white leading-[1.08] tracking-tight ">
//           Crafting Unforgettable
//           <br />
//           <span className="italic font-light text-(--accent-light)">
//             Outdoor Celebrations
//           </span>
//         </h1>

//         {/* SEO-Friendly Description */}
//         <p
//           ref={subtitleRef}
//           className="mt-5 sm:mt-6 max-w-xl sm:max-w-2xl text-sm sm:text-base md:text-lg text-slate-200 font-sans font-light leading-relaxed ">
//           Discover Helping Garden Club, a beautiful garden venue in Jaipur
//           for weddings, birthdays, anniversaries, parties, and private
//           celebrations.
//         </p>

//         {/* Feature Badge */}
//         <div
//           className="mt-7 sm:mt-8 inline-flex max-w-[92%] sm:max-w-none items-center justify-center gap-2 text-[10px] sm:text-xs font-sans font-medium text-(--accent-light) px-3.5 sm:px-4 py-2 rounded-full bg-(--primary)/60 backdrop-blur-md border border-(--accent)/30 text-center">
//           <FiStar
//             className="text-sm shrink-0"
//             aria-hidden="true"
//           />

//           <span>
//             3600+ Sq. Ft. Lawn • Swimming Pool • Private Events
//           </span>
//         </div>
//       </div>
//     </header>
//   );
// }
"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { FiArrowUpRight, FiChevronRight } from "react-icons/fi";

export default function AboutPageHero() {
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const sideRef = useRef<HTMLDivElement>(null);
  const watermarkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      if (labelRef.current) {
        tl.fromTo(
          labelRef.current,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
          }
        );
      }

      if (titleRef.current) {
        tl.fromTo(
          titleRef.current,
          {
            opacity: 0,
            y: 45,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
          },
          "-=0.35"
        );
      }

      if (subtitleRef.current) {
        tl.fromTo(
          subtitleRef.current,
          {
            opacity: 0,
            y: 25,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          "-=0.55"
        );
      }

      if (sideRef.current) {
        tl.fromTo(
          sideRef.current,
          {
            opacity: 0,
            x: 35,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.9,
          },
          "-=0.7"
        );
      }

      if (watermarkRef.current) {
        gsap.fromTo(
          watermarkRef.current,
          {
            opacity: 0,
            x: -60,
          },
          {
            opacity: 1,
            x: 0,
            duration: 1.4,
            delay: 0.2,
            ease: "power3.out",
          }
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <header
      ref={heroRef}
      aria-labelledby="about-page-title"
      className="
        relative
        w-full
        min-h-[560px]
        sm:min-h-[590px]
        md:min-h-[610px]
        lg:min-h-[630px]
        overflow-hidden
        bg-[var(--background)]
        text-[var(--foreground)]
        flex
        items-center
        border-b
        border-[var(--border)]
      "
    >
      {/* =====================================================
          LARGE BACKGROUND WATERMARK
      ====================================================== */}
      <div
        ref={watermarkRef}
        aria-hidden="true"
        className="
          absolute
          left-[-10px]
          sm:left-[-20px]
          md:left-[-35px]
          bottom-[-10px]
          sm:bottom-[-18px]
          pointer-events-none
          select-none
          overflow-hidden
          whitespace-nowrap
          z-0
        "
      >
        <span
          className="
            block
            text-[8rem]
            sm:text-[11rem]
            md:text-[14rem]
            lg:text-[17rem]
            xl:text-[19rem]
            leading-none
            font-sans
            font-semibold
            tracking-[-0.09em]
            text-[var(--foreground)]
            opacity-[0.035]
          "
        >
          ABOUT
        </span>
      </div>

      {/* =====================================================
          DECORATIVE CIRCLE
      ====================================================== */}
      <div
        aria-hidden="true"
        className="
          absolute
          -right-32
          -top-32
          w-80
          h-80
          sm:w-[420px]
          sm:h-[420px]
          rounded-full
          border
          border-[var(--accent)]/15
          z-0
        "
      />

      <div
        aria-hidden="true"
        className="
          absolute
          -right-20
          -top-20
          w-56
          h-56
          sm:w-72
          sm:h-72
          rounded-full
          border
          border-[var(--accent)]/10
          z-0
        "
      />

      {/* Small decorative dot */}
      <div
        aria-hidden="true"
        className="
          absolute
          right-[18%]
          top-[28%]
          w-2
          h-2
          rounded-full
          bg-[var(--accent)]
          opacity-60
          hidden
          md:block
        "
      />

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}
      <div
        ref={contentRef}
        className="
          relative
          z-10
          w-full
          max-w-7xl
          mx-auto
          px-5
          sm:px-8
          lg:px-12
          xl:px-20
          py-20
          sm:py-24
          lg:py-28
        "
      >
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-12
            gap-10
            lg:gap-12
            items-center
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================== */}
          <div className="lg:col-span-8">
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="
                flex
                items-center
                gap-1.5
                sm:gap-2
                mb-7
                sm:mb-8
                text-[10px]
                sm:text-xs
                font-sans
                uppercase
                tracking-[0.18em]
                text-[var(--foreground-muted)]
              "
            >
              <Link
                href="/"
                className="
                  hover:text-[var(--primary)]
                  transition-colors
                "
              >
                Home
              </Link>

              <FiChevronRight
                className="
                  text-xs
                  text-[var(--accent)]
                  shrink-0
                "
                aria-hidden="true"
              />

              <span className="text-[var(--foreground)] font-medium">
                About Us
              </span>
            </nav>

            {/* Small Label */}
            <div
              ref={labelRef}
              className="
                inline-flex
                items-center
                gap-2
                mb-5
                sm:mb-6
              "
            >
              <span
                className="
                  w-8
                  sm:w-10
                  h-px
                  bg-[var(--accent)]
                "
                aria-hidden="true"
              />

              <span
                className="
                  text-[10px]
                  sm:text-xs
                  uppercase
                  tracking-[0.24em]
                  font-sans
                  font-semibold
                  text-[var(--accent)]
                "
              >
                About Helping Garden Club
              </span>
            </div>

            {/* Main Heading */}
            <h1
              id="about-page-title"
              ref={titleRef}
              className="
                max-w-4xl
                text-[2.7rem]
                leading-[1.05]
                sm:text-5xl
                md:text-6xl
                lg:text-[4.5rem]
                xl:text-[5rem]
                font-serif
                font-normal
                tracking-tight
                text-[var(--foreground)]
              "
            >
              A Place Where
              <br />
              <span
                className="
                  italic
                  font-light
                  text-[var(--primary)]
                "
              >
                Moments Become Memories.
              </span>
            </h1>

            {/* Description */}
            <p
              ref={subtitleRef}
              className="
                mt-6
                sm:mt-7
                max-w-2xl
                text-sm
                sm:text-base
                md:text-lg
                leading-relaxed
                font-sans
                font-light
                text-[var(--foreground-muted)]
              "
            >
              Helping Garden Club is a garden venue in Jaipur for
              weddings, birthday parties, anniversaries, private
              gatherings, and memorable outdoor celebrations.
            </p>

            {/* Bottom Info */}
            <div
              className="
                mt-8
                sm:mt-9
                flex
                flex-wrap
                items-center
                gap-x-7
                gap-y-3
              "
            >
              <div className="flex items-center gap-2">
                <span
                  className="
                    w-1.5
                    h-1.5
                    rounded-full
                    bg-[var(--accent)]
                  "
                />

                <span
                  className="
                    text-[10px]
                    sm:text-xs
                    uppercase
                    tracking-[0.16em]
                    font-sans
                    text-[var(--foreground-muted)]
                  "
                >
                  Garden Events
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span
                  className="
                    w-1.5
                    h-1.5
                    rounded-full
                    bg-[var(--accent)]
                  "
                />

                <span
                  className="
                    text-[10px]
                    sm:text-xs
                    uppercase
                    tracking-[0.16em]
                    font-sans
                    text-[var(--foreground-muted)]
                  "
                >
                  Jaipur
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span
                  className="
                    w-1.5
                    h-1.5
                    rounded-full
                    bg-[var(--accent)]
                  "
                />

                <span
                  className="
                    text-[10px]
                    sm:text-xs
                    uppercase
                    tracking-[0.16em]
                    font-sans
                    text-[var(--foreground-muted)]
                  "
                >
                  Private Celebrations
                </span>
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT DECORATIVE AREA
          ================================================== */}
          <div
            ref={sideRef}
            className="
              lg:col-span-4
              flex
              lg:justify-end
              justify-start
            "
          >
            <div
              className="
                relative
                w-44
                h-44
                sm:w-52
                sm:h-52
                lg:w-60
                lg:h-60
                rounded-full
                border
                border-[var(--border)]
                flex
                items-center
                justify-center
              "
            >
              {/* Inner circle */}
              <div
                className="
                  absolute
                  inset-5
                  sm:inset-6
                  rounded-full
                  border
                  border-[var(--accent)]/25
                "
              />

              {/* Center */}
              <div className="relative z-10 text-center">
                <span
                  className="
                    block
                    text-[10px]
                    sm:text-xs
                    uppercase
                    tracking-[0.25em]
                    font-sans
                    text-[var(--foreground-muted)]
                  "
                >
                  Est.
                </span>

                <span
                  className="
                    block
                    mt-1
                    text-4xl
                    sm:text-5xl
                    lg:text-6xl
                    font-serif
                    font-normal
                    text-[var(--foreground)]
                  "
                >
                  01
                </span>

                <span
                  className="
                    block
                    mt-1
                    text-[9px]
                    sm:text-[10px]
                    uppercase
                    tracking-[0.18em]
                    font-sans
                    text-[var(--accent)]
                  "
                >
                  Our Story
                </span>
              </div>

              {/* Rotating-style decorative text */}
              <div
                className="
                  absolute
                  -top-3
                  left-1/2
                  -translate-x-1/2
                  px-3
                  bg-[var(--background)]
                "
              >
                <span
                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.25em]
                    font-sans
                    text-[var(--foreground-muted)]
                  "
                >
                  HELPING GARDEN CLUB
                </span>
              </div>

              {/* Arrow */}
              <div
                className="
                  absolute
                  bottom-1
                  right-1
                  sm:bottom-2
                  sm:right-2
                  w-9
                  h-9
                  sm:w-10
                  sm:h-10
                  rounded-full
                  bg-[var(--foreground)]
                  text-[var(--background)]
                  flex
                  items-center
                  justify-center
                "
              >
                <FiArrowUpRight
                  className="text-base sm:text-lg"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM LINE
      ====================================================== */}
      <div
        aria-hidden="true"
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-px
          bg-[var(--border)]
        "
      />
    </header>
  );
}