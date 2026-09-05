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
      // Header reveal
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
        }
      );

      // Pricing card reveal
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
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const venueInclusions = [
    "Garden venue booking from ₹52,500",
    "Outdoor space for private celebrations",
    "Suitable for weddings, birthdays & anniversaries",
    "Ideal for parties and family gatherings",
    "Swimming pool available separately for ₹8,000",
    "Flexible options based on your event needs",
  ];

  return (
    <section
      ref={sectionRef}
      id="booking"
      aria-labelledby="pricing-heading"
      className="
        w-full
        py-10
        sm:py-14
        md:py-16
        px-4
        sm:px-6
        md:px-12
        lg:px-20
        bg-(--background)
        border-b
        border-(--border)
        relative
        overflow-hidden
      "
    >
      {/* Background Accent */}
      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-100
          h-100
          sm:w-150
          sm:h-150
          bg-(--primary)/5
          rounded-full
          blur-3xl
          pointer-events-none
        "
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto flex flex-col items-center">

        {/* =========================================
            SECTION HEADER
        ========================================== */}
        <div
          className="
            pricing-header
            text-center
            max-w-2xl
            flex
            flex-col
            items-center
          "
        >
          <span
            className="
              text-[9px]
              sm:text-xs
              uppercase
              tracking-[0.18em]
              sm:tracking-[0.25em]
              text-(--accent)
              font-semibold
              px-3
              sm:px-3.5
              py-1
              bg-(--accent)/10
              rounded-full
              border
              border-(--accent)/20
              mb-3
              font-sans
            "
          >
            Garden Venue Pricing
          </span>

          <h2
            id="pricing-heading"
            className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              font-serif
              text-(--foreground)
              leading-tight
              font-normal
            "
          >
            Simple Pricing
            <br />

            <span className="italic font-light text-(--primary)">
              For Your Celebration
            </span>
          </h2>

          <p
            className="
              mt-3
              sm:mt-4
              max-w-xl
              text-(--foreground-muted)
              font-sans
              font-light
              text-sm
              sm:text-base
              md:text-lg
              leading-relaxed
            "
          >
            Explore garden venue and swimming pool options for weddings,
            birthdays, anniversaries, parties, and private celebrations.
          </p>
        </div>

        {/* =========================================
            PRICING CARD
        ========================================== */}
        <div
          ref={cardRef}
          className="
            w-full
            mt-10
            sm:mt-14
            md:mt-16
            rounded-3xl
            md:rounded-[2.5rem]
            bg-linear-to-br
            from-(--primary-dark)
            via-[#0F2D20]
            to-(--primary-dark)
            text-white
            shadow-2xl
            overflow-hidden
            border
            border-(--accent)/30
            relative
          "
        >
          {/* Corner Accent */}
          <div
            className="
              absolute
              top-0
              right-0
              w-48
              h-48
              sm:w-80
              sm:h-80
              bg-(--accent)/10
              rounded-full
              blur-3xl
              pointer-events-none
            "
            aria-hidden="true"
          />

          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-12
              gap-6
              sm:gap-8
              p-5
              sm:p-8
              md:p-12
              lg:p-16
              items-center
            "
          >

            {/* =========================================
                LEFT — PRICE
            ========================================== */}
            <div
              className="
                lg:col-span-5
                flex
                flex-col
                items-start
                border-b
                lg:border-b-0
                lg:border-r
                border-white/10
                pb-6
                sm:pb-8
                lg:pb-0
                lg:pr-12
              "
            >
              <span
                className="
                  text-[9px]
                  sm:text-xs
                  uppercase
                  tracking-[0.16em]
                  sm:tracking-[0.2em]
                  text-(--accent-light)
                  font-medium
                  font-sans
                "
              >
                Garden Venue Booking
              </span>

              {/* Price */}
              <div className="mt-2 sm:mt-3 flex flex-wrap items-baseline gap-1.5 sm:gap-2">
                <span
                  className="
                    text-3xl
                    sm:text-5xl
                    md:text-6xl
                    font-serif
                    font-bold
                    text-white
                    tracking-tight
                  "
                >
                  {STARTING_PRICE}
                </span>

                <span
                  className="
                    text-[10px]
                    sm:text-sm
                    font-sans
                    text-slate-300
                    font-light
                  "
                >
                  onwards
                </span>
              </div>

              <p
                className="
                  mt-3
                  sm:mt-4
                  text-[10px]
                  sm:text-xs
                  font-sans
                  text-slate-300
                  font-light
                  leading-relaxed
                  max-w-md
                "
              >
                Garden venue pricing starts from ₹52,500. Final pricing may
                vary based on event type, date, duration, guest count, and
                selected services.
              </p>

              {/* =========================================
                  QUICK DETAILS
              ========================================== */}
              <div className="mt-5 sm:mt-8 flex flex-col gap-2 sm:gap-3 w-full">

                <div
                  className="
                    flex
                    items-center
                    gap-2.5
                    sm:gap-3
                    p-2.5
                    sm:p-3
                    rounded-xl
                    sm:rounded-2xl
                    bg-white/5
                    border
                    border-white/10
                    text-[10px]
                    sm:text-xs
                    font-sans
                    text-slate-200
                  "
                >
                  <FiCalendar
                    aria-hidden="true"
                    className="
                      text-(--accent-light)
                      text-sm
                      sm:text-base
                      shrink-0
                    "
                  />

                  <span>Garden venue for private celebrations</span>
                </div>

                <div
                  className="
                    flex
                    items-center
                    gap-2.5
                    sm:gap-3
                    p-2.5
                    sm:p-3
                    rounded-xl
                    sm:rounded-2xl
                    bg-white/5
                    border
                    border-white/10
                    text-[10px]
                    sm:text-xs
                    font-sans
                    text-slate-200
                  "
                >
                  <FiUsers
                    aria-hidden="true"
                    className="
                      text-(--accent-light)
                      text-sm
                      sm:text-base
                      shrink-0
                    "
                  />

                  <span>Weddings, birthdays &amp; family events</span>
                </div>

                <div
                  className="
                    flex
                    items-center
                    gap-2.5
                    sm:gap-3
                    p-2.5
                    sm:p-3
                    rounded-xl
                    sm:rounded-2xl
                    bg-white/5
                    border
                    border-white/10
                    text-[10px]
                    sm:text-xs
                    font-sans
                    text-slate-200
                  "
                >
                  <FiDroplet
                    aria-hidden="true"
                    className="
                      text-(--accent-light)
                      text-sm
                      sm:text-base
                      shrink-0
                    "
                  />

                  <span>Swimming pool available — ₹8,000</span>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-5 sm:mt-8 w-full">
                <Link
                  href="#contact"
                  aria-label="Enquire about garden venue booking"
                  className="
                    w-full
                    py-3
                    sm:py-4
                    px-4
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
                    justify-center
                    gap-1.5
                    sm:gap-2
                    shadow-xl
                    hover:scale-102
                    active:scale-95
                  "
                >
                  <FiCalendar
                    aria-hidden="true"
                    className="text-sm sm:text-base"
                  />

                  <span>Check Your Date</span>

                  <FiArrowRight
                    aria-hidden="true"
                    className="text-sm sm:text-base"
                  />
                </Link>
              </div>
            </div>

            {/* =========================================
                RIGHT — INCLUSIONS
            ========================================== */}
            <div
              className="
                lg:col-span-7
                flex
                flex-col
                justify-center
                lg:pl-4
              "
            >
              <h3
                className="
                  text-xl
                  sm:text-2xl
                  font-serif
                  text-white
                  font-normal
                  mb-1
                "
              >
                What&apos;s Included
              </h3>

              <p
                className="
                  text-[9px]
                  sm:text-xs
                  text-(--accent-light)
                  font-sans
                  uppercase
                  tracking-[0.15em]
                  mb-4
                  sm:mb-6
                "
              >
                Venue Highlights
              </p>

              <div
                className="
                  grid
                  grid-cols-1
                  sm:grid-cols-2
                  gap-2
                  sm:gap-4
                "
              >
                {venueInclusions.map((inclusion, idx) => (
                  <div
                    key={idx}
                    className="
                      flex
                      items-start
                      gap-2
                      sm:gap-3
                      p-2.5
                      sm:p-4
                      rounded-xl
                      sm:rounded-2xl
                      bg-white/5
                      border
                      border-white/10
                      hover:bg-white/10
                      transition-colors
                    "
                  >
                    <div
                      className="
                        w-5
                        h-5
                        sm:w-6
                        sm:h-6
                        rounded-full
                        bg-(--accent)/20
                        text-(--accent-light)
                        flex
                        items-center
                        justify-center
                        shrink-0
                        mt-0.5
                      "
                    >
                      <FiCheck
                        aria-hidden="true"
                        className="text-xs sm:text-sm"
                      />
                    </div>

                    <span
                      className="
                        text-[10px]
                        sm:text-sm
                        font-sans
                        font-light
                        text-slate-200
                        leading-snug
                      "
                    >
                      {inclusion}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom Note */}
              <div
                className="
                  mt-4
                  sm:mt-8
                  p-3
                  sm:p-4
                  rounded-xl
                  sm:rounded-2xl
                  bg-black/30
                  border
                  border-white/10
                  text-center
                "
              >
                <p
                  className="
                    text-[10px]
                    sm:text-xs
                    font-sans
                    text-slate-300
                    font-light
                    leading-relaxed
                  "
                >
                  Planning a celebration? Contact us for availability,
                  event requirements, and booking options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

