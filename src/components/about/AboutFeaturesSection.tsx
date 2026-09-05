
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FiArrowUpRight,
  FiMapPin,
  FiHeart,
  FiGift,
  FiDroplet,
  FiUsers,
} from "react-icons/fi";
import { GiPalmTree } from "react-icons/gi";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface VenueFeature {
  number: string;
  icon: React.ElementType;
  title: string;
  description: string;
}

const features: VenueFeature[] = [
  {
    number: "01",
    icon: GiPalmTree,
    title: "Beautiful & Spacious Garden",
    description:
      "A well-maintained outdoor garden space in Jaipur, ideal for comfortable gatherings, dining, decorations, and memorable celebrations.",
  },
  {
    number: "02",
    icon: FiHeart,
    title: "Perfect for Weddings & Functions",
    description:
      "Create beautiful wedding celebrations and family functions in a private garden setting designed for special occasions.",
  },
  {
    number: "03",
    icon: FiGift,
    title: "Birthdays & Anniversaries",
    description:
      "A welcoming birthday party and anniversary venue in Jaipur for intimate celebrations, family gatherings, and private parties.",
  },
  {
    number: "04",
    icon: FiDroplet,
    title: "Swimming Pool Facility",
    description:
      "Enjoy a refreshing swimming pool venue for daytime celebrations, pool parties, get-togethers, and relaxed private events.",
  },
  {
    number: "05",
    icon: FiMapPin,
    title: "Convenient Jaipur Location",
    description:
      "Located in Jaipur, our garden venue offers an accessible setting for families and guests looking for a private event space.",
  },
  {
    number: "06",
    icon: FiUsers,
    title: "Personalized Service",
    description:
      "We work closely with you to understand your celebration, support your arrangements, and help create an experience that feels personal.",
  },
];

export default function AboutFeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
const cardsRef = useRef<HTMLElement[]>([]);
  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set(headerRef.current, {
          opacity: 1,
          y: 0,
        });

        gsap.set(cardsRef.current, {
          opacity: 1,
          y: 0,
        });

        return;
      }

      /* Section heading animation */
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          {
            opacity: 0,
            y: 35,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 78%",
              once: true,
            },
          }
        );
      }

      /* Cards animation */
      if (cardsRef.current.length > 0) {
        gsap.fromTo(
          cardsRef.current,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 65%",
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
      aria-labelledby="why-choose-us-heading"
      className="
        relative
        w-full
        overflow-hidden
        bg-[var(--background)]
        border-b
        border-[var(--border)]
        py-20
        sm:py-24
        lg:py-28
        px-5
        sm:px-8
        lg:px-12
        xl:px-20
      "
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          absolute
          -top-40
          -right-40
          w-80
          h-80
          sm:w-[420px]
          sm:h-[420px]
          rounded-full
          border
          border-[var(--accent)]/10
        "
      />

      <div
        aria-hidden="true"
        className="
          absolute
          bottom-[-160px]
          left-[-160px]
          w-80
          h-80
          sm:w-[430px]
          sm:h-[430px]
          rounded-full
          border
          border-[var(--primary)]/10
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* =================================================
            HEADER
        ================================================== */}

        <div
          ref={headerRef}
          className="
            grid
            grid-cols-1
            lg:grid-cols-12
            gap-7
            lg:gap-12
            items-end
            mb-12
            sm:mb-14
            lg:mb-16
          "
        >
          {/* Heading */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-5">
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
                  tracking-[0.23em]
                  font-sans
                  font-semibold
                  text-[var(--accent)]
                "
              >
                Why Choose Us
              </span>
            </div>

            <h2
              id="why-choose-us-heading"
              className="
                max-w-3xl
                text-3xl
                sm:text-4xl
                md:text-5xl
                lg:text-[3.6rem]
                xl:text-[4rem]
                leading-[1.08]
                tracking-tight
                font-serif
                font-normal
                text-[var(--foreground)]
              "
            >
              Everything You Need for a
              <br className="hidden sm:block" />

              <span
                className="
                  italic
                  font-light
                  text-[var(--primary)]
                "
              >
                Beautiful Celebration.
              </span>
            </h2>
          </div>

          {/* Description */}
          <div className="lg:col-span-5 lg:pb-1">
            <p
              className="
                max-w-xl
                text-sm
                sm:text-base
                leading-relaxed
                font-sans
                font-light
                text-[var(--foreground-muted)]
              "
            >
              From a spacious garden lawn to a private swimming pool,
              Helping Garden Club offers a comfortable setting for
              weddings, birthday parties, anniversaries, family
              functions, and private celebrations in Jaipur.
            </p>
          </div>
        </div>

        {/* =================================================
            FEATURE GRID
        ================================================== */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-px
            bg-[var(--border)]
            border
            border-[var(--border)]
          "
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.number}
                ref={(el) => {
                  if (el) {
                    cardsRef.current[index] = el;
                  }
                }}
                className="
                  group
                  relative
                  min-h-[270px]
                  sm:min-h-[285px]
                  lg:min-h-[300px]
                  bg-[var(--background)]
                  p-6
                  sm:p-7
                  lg:p-8
                  flex
                  flex-col
                  justify-between
                  overflow-hidden
                  transition-colors
                  duration-500
                  hover:bg-[var(--background-secondary)]
                "
              >
                {/* Large Background Number */}
                <span
                  aria-hidden="true"
                  className="
                    absolute
                    right-3
                    top-[-8px]
                    text-[6rem]
                    sm:text-[7rem]
                    lg:text-[7.5rem]
                    leading-none
                    font-sans
                    font-semibold
                    tracking-[-0.08em]
                    text-[var(--foreground)]
                    opacity-[0.035]
                    select-none
                    transition-all
                    duration-500
                    group-hover:opacity-[0.07]
                    group-hover:translate-x-1
                  "
                >
                  {feature.number}
                </span>

                {/* Top Row */}
                <div className="relative z-10 flex items-start justify-between">
                  {/* Icon */}
                  <div
                    className="
                      w-12
                      h-12
                      sm:w-13
                      sm:h-13
                      rounded-full
                      border
                      border-[var(--border)]
                      bg-[var(--background-secondary)]
                      text-[var(--primary)]
                      flex
                      items-center
                      justify-center
                      text-xl
                      transition-all
                      duration-500
                      group-hover:bg-[var(--primary)]
                      group-hover:text-white
                      group-hover:border-[var(--primary)]
                      group-hover:rotate-6
                    "
                  >
                    <Icon aria-hidden="true" />
                  </div>

                  {/* Number */}
                  <span
                    className="
                      text-[10px]
                      sm:text-xs
                      uppercase
                      tracking-[0.18em]
                      font-sans
                      font-medium
                      text-[var(--foreground-muted)]
                    "
                  >
                    {feature.number}
                  </span>
                </div>

                {/* Content */}
                <div className="relative z-10 mt-10">
                  <h3
                    className="
                      text-xl
                      sm:text-[1.35rem]
                      font-serif
                      font-normal
                      leading-tight
                      text-[var(--foreground)]
                      max-w-[280px]
                    "
                  >
                    {feature.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      max-w-md
                      text-xs
                      sm:text-sm
                      font-sans
                      font-light
                      leading-relaxed
                      text-[var(--foreground-muted)]
                    "
                  >
                    {feature.description}
                  </p>
                </div>

                {/* Bottom */}
                <div
                  className="
                    relative
                    z-10
                    mt-6
                    pt-4
                    border-t
                    border-[var(--border)]
                    flex
                    items-center
                    justify-between
                  "
                >
                  <span
                    className="
                      text-[9px]
                      sm:text-[10px]
                      uppercase
                      tracking-[0.18em]
                      font-sans
                      font-semibold
                      text-[var(--accent)]
                    "
                  >
                    Helping Garden Club
                  </span>

                  <span
                    className="
                      w-8
                      h-8
                      rounded-full
                      border
                      border-[var(--border)]
                      flex
                      items-center
                      justify-center
                      text-[var(--foreground)]
                      transition-all
                      duration-500
                      group-hover:bg-[var(--foreground)]
                      group-hover:text-[var(--background)]
                      group-hover:border-[var(--foreground)]
                    "
                  >
                    <FiArrowUpRight
                      className="
                        text-sm
                        transition-transform
                        duration-500
                        group-hover:rotate-45
                      "
                      aria-hidden="true"
                    />
                  </span>
                </div>

                {/* Hover line */}
                <span
                  aria-hidden="true"
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-0.5
                    w-0
                    bg-[var(--accent)]
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />
              </article>
            );
          })}
        </div>

        {/* =================================================
            BOTTOM NOTE
        ================================================== */}

        <div
          className="
            mt-7
            flex
            flex-col
            sm:flex-row
            sm:items-center
            sm:justify-between
            gap-3
          "
        >
          <p
            className="
              text-[10px]
              sm:text-xs
              uppercase
              tracking-[0.16em]
              font-sans
              text-[var(--foreground-muted)]
            "
          >
            Garden Venue · Weddings · Parties · Private Events
          </p>

          <div className="flex items-center gap-2">
            <span
              className="
                w-1.5
                h-1.5
                rounded-full
                bg-[var(--accent)]
              "
              aria-hidden="true"
            />

            <span
              className="
                text-[10px]
                sm:text-xs
                font-sans
                text-[var(--foreground-muted)]
              "
            >
              Jaipur, Rajasthan
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}