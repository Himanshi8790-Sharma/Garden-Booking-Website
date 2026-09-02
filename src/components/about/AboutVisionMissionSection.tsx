"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowUpRight, FiSun } from "react-icons/fi";
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutVisionMissionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statementRef = useRef<HTMLHeadingElement>(null);
  const blocksRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (statementRef.current) {
        gsap.fromTo(
          statementRef.current,
          {
            opacity: 0,
            y: 45,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: statementRef.current,
              start: "top 82%",
              once: true,
            },
          }
        );
      }

      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            delay: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 82%",
              once: true,
            },
          }
        );
      }

      if (blocksRef.current.length) {
        gsap.fromTo(
          blocksRef.current,
          {
            opacity: 0,
            y: 25,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 78%",
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
      aria-labelledby="vision-mission-heading"
      className="
        relative
        w-full
        overflow-hidden
        bg-[var(--background)]
        border-b
        border-[var(--border)]
        px-5
        sm:px-8
        md:px-12
        lg:px-16
        py-20
        sm:py-24
        lg:py-28
      "
    >
      {/* Soft decorative elements */}
      <div
        aria-hidden="true"
        className="
          absolute
          -top-28
          -right-28
          w-72
          h-72
          rounded-full
          bg-[var(--accent)]/5
          blur-3xl
          pointer-events-none
        "
      />

      <div
        aria-hidden="true"
        className="
          absolute
          -bottom-32
          -left-32
          w-80
          h-80
          rounded-full
          bg-[var(--primary)]/5
          blur-3xl
          pointer-events-none
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* =====================================================
            TOP LABEL
        ====================================================== */}

        <div className="flex items-center gap-3 mb-8">
          <span
            className="
              flex
              items-center
              justify-center
              w-8
              h-8
              rounded-full
              border
              border-[var(--border)]
              text-[var(--accent)]
            "
          >
            <FiSun
              className="text-sm"
              aria-hidden="true"
            />
          </span>

          <span
            className="
              text-[10px]
              sm:text-xs
              uppercase
              tracking-[0.25em]
              font-sans
              font-semibold
              text-[var(--foreground-muted)]
            "
          >
            Our Purpose
          </span>
        </div>

        {/* =====================================================
            BIG STATEMENT
        ====================================================== */}

        <div className="max-w-5xl">
          <h2
            ref={statementRef}
            id="vision-mission-heading"
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              xl:text-[5.5rem]
              font-serif
              font-normal
              leading-[0.98]
              tracking-[-0.035em]
              text-[var(--foreground)]
            "
          >
            We create spaces where
            <br />

            <span
              className="
                italic
                font-light
                text-[var(--primary)]
              "
            >
              celebrations feel effortless.
            </span>
          </h2>
        </div>

        {/* =====================================================
            DIVIDER
        ====================================================== */}

        <div
          className="
            mt-12
            sm:mt-14
            lg:mt-16
            h-px
            w-full
            bg-[var(--border)]
          "
          aria-hidden="true"
        />

        {/* =====================================================
            VISION + MISSION CONTENT
        ====================================================== */}

        <div
          ref={contentRef}
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-10
            md:gap-0
            md:divide-x
            md:divide-[var(--border)]
          "
        >

          {/* ================= VISION ================= */}

          <div
            ref={(el) => {
              if (el) blocksRef.current[0] = el;
            }}
            className="
              md:pr-10
              lg:pr-16
              pt-10
              sm:pt-12
            "
          >
            <div className="flex items-center justify-between mb-7">
              <span
                className="
                  text-[10px]
                  sm:text-xs
                  uppercase
                  tracking-[0.22em]
                  font-sans
                  font-semibold
                  text-[var(--accent)]
                "
              >
                01 / Vision
              </span>

              <FiArrowUpRight
                className="
                  text-lg
                  text-[var(--foreground-muted)]
                "
                aria-hidden="true"
              />
            </div>

            <h3
              className="
                text-3xl
                sm:text-4xl
                lg:text-[2.8rem]
                font-serif
                font-normal
                leading-[1.08]
                text-[var(--foreground)]
              "
            >
              Every moment
              <br />
              deserves to feel
              <br />
              <span
                className="
                  italic
                  font-light
                  text-[var(--primary)]
                "
              >
                special.
              </span>
            </h3>

            <p
              className="
                mt-6
                max-w-lg
                text-sm
                sm:text-base
                leading-7
                font-sans
                font-light
                text-[var(--foreground-muted)]
              "
            >
              Our vision is to create a beautiful and comfortable
              garden venue in Jaipur where families can celebrate
              their most meaningful occasions with ease.
            </p>
          </div>

          {/* ================= MISSION ================= */}

          <div
            ref={(el) => {
              if (el) blocksRef.current[1] = el;
            }}
            className="
              md:pl-10
              lg:pl-16
              pt-10
              sm:pt-12
            "
          >
            <div className="flex items-center justify-between mb-7">
              <span
                className="
                  text-[10px]
                  sm:text-xs
                  uppercase
                  tracking-[0.22em]
                  font-sans
                  font-semibold
                  text-[var(--accent)]
                "
              >
                02 / Mission
              </span>

              <FiArrowUpRight
                className="
                  text-lg
                  text-[var(--foreground-muted)]
                "
                aria-hidden="true"
              />
            </div>

            <h3
              className="
                text-3xl
                sm:text-4xl
                lg:text-[2.8rem]
                font-serif
                font-normal
                leading-[1.08]
                text-[var(--foreground)]
              "
            >
              Thoughtful spaces,
              <br />
              made for
              <br />
              <span
                className="
                  italic
                  font-light
                  text-[var(--primary)]
                "
              >
                your moments.
              </span>
            </h3>

            <p
              className="
                mt-6
                max-w-lg
                text-sm
                sm:text-base
                leading-7
                font-sans
                font-light
                text-[var(--foreground-muted)]
              "
            >
              Our mission is to provide a well-maintained outdoor
              space, flexible event facilities, and personalized
              service for weddings, birthdays, anniversaries,
              parties, and private celebrations.
            </p>
          </div>
        </div>

        {/* =====================================================
            BOTTOM STATEMENT
        ====================================================== */}

        <div
          className="
            mt-12
            sm:mt-14
            lg:mt-16
            pt-5
            border-t
            border-[var(--border)]
            flex
            flex-col
            sm:flex-row
            sm:items-center
            sm:justify-between
            gap-2
          "
        >
          <span
            className="
              text-[9px]
              sm:text-[10px]
              uppercase
              tracking-[0.2em]
              font-sans
              text-[var(--foreground-muted)]
            "
          >
            Helping Garden Club · Jaipur
          </span>

          <span
            className="
              text-xs
              sm:text-sm
              font-serif
              italic
              text-[var(--primary)]
            "
          >
            Beautiful spaces. Meaningful celebrations.
          </span>
        </div>

      </div>
    </section>
  );
}