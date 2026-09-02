
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowDown } from "react-icons/fi";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutStorySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const watermarkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Left content animation
      if (leftRef.current) {
        gsap.fromTo(
          leftRef.current,
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
              trigger: sectionRef.current,
              start: "top 75%",
            },
          }
        );
      }

      // Timeline animation
      if (timelineRef.current) {
        const items = timelineRef.current.querySelectorAll(".story-step");

        gsap.fromTo(
          items,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: timelineRef.current,
              start: "top 75%",
            },
          }
        );
      }

      // Watermark animation
      if (watermarkRef.current) {
        gsap.fromTo(
          watermarkRef.current,
          {
            opacity: 0,
            x: -40,
          },
          {
            opacity: 1,
            x: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: watermarkRef.current,
              start: "top 85%",
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
      aria-labelledby="about-story-heading"
      className="
        relative
        w-full
        overflow-hidden
        bg-[var(--background)]
        py-15
      
       
        px-5
        sm:px-8
        lg:px-12
        xl:px-20
        border-b border-[var(--border)]
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          grid
          grid-cols-1
          lg:grid-cols-12
          gap-14
          lg:gap-16
        "
      >
        {/* =====================================================
            LEFT SIDE — STORY + IMAGE
        ====================================================== */}
        <div
          ref={leftRef}
          className="
            lg:col-span-6
            relative
            flex
            flex-col
            justify-start
          "
        >
          {/* Small Label */}
          <div className="mb-5">
            <span
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-[var(--accent)]/20
                bg-[var(--accent)]/10
                px-4
                py-1.5
                text-[10px]
                sm:text-xs
                font-sans
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[var(--accent)]
              "
            >
              Our Story
            </span>
          </div>

          {/* Heading */}
          <h2
            id="about-story-heading"
            className="
              max-w-xl
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-[3.4rem]
              xl:text-[3.8rem]
              leading-[1.08]
              tracking-tight
              font-serif
              font-normal
              text-[var(--foreground)]
            "
          >
            A Garden Created for
            <br />
            <span
              className="
                italic
                font-light
                text-[var(--primary)]
              "
            >
              Beautiful Celebrations.
            </span>
          </h2>

          {/* Image */}
          <div
            className="
              relative
              mt-10
              w-full
              h-[360px]
              sm:h-[440px]
              lg:h-[480px]
              rounded-2xl
              overflow-hidden
              group
              z-10
            "
          >
            <Image
              src="/image/heromain.png"
              alt="Owners of Helping Garden Club at their garden event venue in Jaipur"
              fill
              sizes="
                (max-width: 640px) 100vw,
                (max-width: 1024px) 50vw,
                50vw
              "
              className="
                object-cover
                object-center
                transition-transform
                duration-700
                ease-out
                group-hover:scale-[1.03]
              "
            />

            {/* Soft image overlay */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-[var(--primary-dark)]/45
                via-transparent
                to-transparent
                opacity-70
              "
              aria-hidden="true"
            />

            {/* Owner / Partner label */}
            <div
              className="
                absolute
                bottom-5
                left-5
                sm:bottom-6
                sm:left-6
                z-10
              "
            >
              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.2em]
                  font-sans
                  font-medium
                  text-white/80
                "
              >
                Helping Garden Club
              </p>

              <p
                className="
                  mt-1
                  text-lg
                  sm:text-xl
                  font-serif
                  text-white
                "
              >
                Our People, Our Place
              </p>
            </div>
          </div>

          {/* =================================================
              LARGE LIGHT WATERMARK
          ================================================== */}
          <div
            ref={watermarkRef}
            className="
              absolute
              left-[-20px]
              sm:left-[-35px]
              lg:left-[-45px]
              bottom-[-8px]
              sm:bottom-[-12px]
              w-[calc(100%+40px)]
              overflow-hidden
              pointer-events-none
              select-none
              z-0
              whitespace-nowrap
            "
            aria-hidden="true"
          >
            <span
              className="
                block
                text-[5.5rem]
                sm:text-[8rem]
                md:text-[9rem]
                lg:text-[8.5rem]
                xl:text-[10rem]
                leading-none
                font-sans
                font-semibold
                tracking-[-0.06em]
                text-[var(--foreground)]
                opacity-[0.045]
              "
            >
              GARDEN
            </span>
          </div>
        </div>

        {/* =====================================================
            RIGHT SIDE — STORY TIMELINE
        ====================================================== */}
        <div
          ref={timelineRef}
          className="
            lg:col-span-6
            relative
            lg:pt-5
          "
        >
          {/* Vertical Timeline */}
          <div
            className="
              absolute
              left-[11px]
              top-5
              bottom-5
              w-px
              bg-[var(--border)]
              hidden
              sm:block
            "
            aria-hidden="true"
          />

          {/* STEP 01 */}
          <article
            className="
              story-step
              relative
              sm:pl-16
              pb-12
              sm:pb-14
            "
          >
            {/* Timeline Dot */}
            <div
              className="
                absolute
                left-[5px]
                top-0
                hidden
                sm:flex
                w-3
                h-3
                rounded-full
                bg-[var(--foreground)]
                ring-8
                ring-[var(--background)]
              "
              aria-hidden="true"
            />

            <div className="flex items-center gap-2 mb-5">
              <span
                className="
                  flex
                  items-center
                  justify-center
                  w-6
                  h-6
                  rounded-full
                  bg-[var(--foreground)]
                  text-[var(--background)]
                "
              >
                <FiArrowDown className="text-xs" />
              </span>

              <span
                className="
                  text-[10px]
                  sm:text-xs
                  font-sans
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-[var(--foreground)]
                "
              >
                Step_01
              </span>
            </div>

            <h3
              className="
                text-2xl
                sm:text-3xl
                font-serif
                font-normal
                text-[var(--foreground)]
                leading-tight
              "
            >
              Why We Started
            </h3>

            <p
              className="
                mt-4
                max-w-lg
                text-sm
                sm:text-base
                leading-relaxed
                font-sans
                font-light
                text-[var(--foreground-muted)]
              "
            >
              Helping Garden Club was created with a simple idea — to give
              families a beautiful and comfortable space in Jaipur where
              they can celebrate their most special moments together.
            </p>
          </article>

          {/* STEP 02 */}
          <article
            className="
              story-step
              relative
              sm:pl-16
              pb-12
              sm:pb-14
            "
          >
            <div
              className="
                absolute
                left-[5px]
                top-0
                hidden
                sm:flex
                w-3
                h-3
                rounded-full
                bg-[var(--foreground)]
                ring-8
                ring-[var(--background)]
              "
              aria-hidden="true"
            />

            <div className="flex items-center gap-2 mb-5">
              <span
                className="
                  flex
                  items-center
                  justify-center
                  w-6
                  h-6
                  rounded-full
                  bg-[var(--foreground)]
                  text-[var(--background)]
                "
              >
                <FiArrowDown className="text-xs" />
              </span>

              <span
                className="
                  text-[10px]
                  sm:text-xs
                  font-sans
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-[var(--foreground)]
                "
              >
                Step_02
              </span>
            </div>

            <h3
              className="
                text-2xl
                sm:text-3xl
                font-serif
                font-normal
                text-[var(--foreground)]
                leading-tight
              "
            >
              A Place for Every Celebration
            </h3>

            <p
              className="
                mt-4
                max-w-lg
                text-sm
                sm:text-base
                leading-relaxed
                font-sans
                font-light
                text-[var(--foreground-muted)]
              "
            >
              From weddings and birthday parties to anniversaries and
              private gatherings, our garden offers an open-air setting
              designed around different kinds of celebrations.
            </p>
          </article>

          {/* STEP 03 */}
          <article
            className="
              story-step
              relative
              sm:pl-16
              pb-12
              sm:pb-14
            "
          >
            <div
              className="
                absolute
                left-[5px]
                top-0
                hidden
                sm:flex
                w-3
                h-3
                rounded-full
                bg-[var(--foreground)]
                ring-8
                ring-[var(--background)]
              "
              aria-hidden="true"
            />

            <div className="flex items-center gap-2 mb-5">
              <span
                className="
                  flex
                  items-center
                  justify-center
                  w-6
                  h-6
                  rounded-full
                  bg-[var(--foreground)]
                  text-[var(--background)]
                "
              >
                <FiArrowDown className="text-xs" />
              </span>

              <span
                className="
                  text-[10px]
                  sm:text-xs
                  font-sans
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-[var(--foreground)]
                "
              >
                Step_03
              </span>
            </div>

            <h3
              className="
                text-2xl
                sm:text-3xl
                font-serif
                font-normal
                text-[var(--foreground)]
                leading-tight
              "
            >
              More Than Just a Venue
            </h3>

            <p
              className="
                mt-4
                max-w-lg
                text-sm
                sm:text-base
                leading-relaxed
                font-sans
                font-light
                text-[var(--foreground-muted)]
              "
            >
              We combine a spacious garden lawn, swimming pool and
              thoughtfully maintained surroundings to create a relaxed
              setting for memorable outdoor events.
            </p>
          </article>

          {/* STEP 04 */}
          <article
            className="
              story-step
              relative
              sm:pl-16
            "
          >
            <div
              className="
                absolute
                left-[5px]
                top-0
                hidden
                sm:flex
                w-3
                h-3
                rounded-full
                bg-[var(--foreground)]
                ring-8
                ring-[var(--background)]
              "
              aria-hidden="true"
            />

            <div className="flex items-center gap-2 mb-5">
              <span
                className="
                  flex
                  items-center
                  justify-center
                  w-6
                  h-6
                  rounded-full
                  bg-[var(--foreground)]
                  text-[var(--background)]
                "
              >
                <FiArrowDown className="text-xs" />
              </span>

              <span
                className="
                  text-[10px]
                  sm:text-xs
                  font-sans
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-[var(--foreground)]
                "
              >
                Step_04
              </span>
            </div>

            <h3
              className="
                text-2xl
                sm:text-3xl
                font-serif
                font-normal
                text-[var(--foreground)]
                leading-tight
              "
            >
              Our Promise
            </h3>

            <p
              className="
                mt-4
                max-w-lg
                text-sm
                sm:text-base
                leading-relaxed
                font-sans
                font-light
                text-[var(--foreground-muted)]
              "
            >
              Our goal is simple: a well-kept venue, a welcoming
              atmosphere and a celebration experience that feels special
              from the moment your guests arrive.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}