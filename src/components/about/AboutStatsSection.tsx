"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowUpRight } from "react-icons/fi";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Stat {
  value: number;
  suffix: string;
  label: string;
  size: string;
  position: string;
  variant: "accent" | "primary" | "dark" | "light";
}

const stats: Stat[] = [
  {
    value: 500,
    suffix: "+",
    label: "Happy Guests",
    size: "w-52 h-52 sm:w-56 sm:h-56 lg:w-64 lg:h-64",
    position:
      "top-0 left-[8%] sm:left-[10%] lg:left-[7%]",
    variant: "accent",
  },
  {
    value: 36,
    suffix: "K+",
    label: "Sq. Ft. Space",
    size: "w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40",
    position:
      "top-[22%] left-[50%] sm:left-[53%] lg:left-[54%]",
    variant: "light",
  },
  {
    value: 1,
    suffix: "",
    label: "Beautiful Venue",
    size: "w-36 h-36 sm:w-40 sm:h-40 lg:w-44 lg:h-44",
    position:
      "bottom-[15%] left-[0%] sm:left-[3%] lg:left-[0%]",
    variant: "dark",
  },
  {
    value: 100,
    suffix: "%",
    label: "Private Celebrations",
    size: "w-56 h-56 sm:w-60 sm:h-60 lg:w-72 lg:h-72",
    position:
      "bottom-[-8%] left-[30%] sm:left-[32%] lg:left-[29%]",
    variant: "primary",
  },
];

export default function AboutStatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const ballsRef = useRef<HTMLDivElement[]>([]);
  const numberRefs = useRef<HTMLSpanElement[]>([]);
  const contentRef = useRef<HTMLDivElement>(null);

  const addBallRef = (el: HTMLDivElement | null) => {
    if (el && !ballsRef.current.includes(el)) {
      ballsRef.current.push(el);
    }
  };

  const addNumberRef = (el: HTMLSpanElement | null) => {
    if (el && !numberRefs.current.includes(el)) {
      numberRefs.current.push(el);
    }
  };

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      /*
       * ---------------------------------------------
       * REDUCED MOTION
       * ---------------------------------------------
       */
      if (prefersReducedMotion) {
        ballsRef.current.forEach((ball) => {
          gsap.set(ball, {
            opacity: 1,
            scale: 1,
            y: 0,
            x: 0,
          });
        });

        numberRefs.current.forEach((number, index) => {
          if (number) {
            number.textContent = `${stats[index].value}`;
          }
        });

        if (contentRef.current) {
          gsap.set(contentRef.current, {
            opacity: 1,
            x: 0,
          });
        }

        return;
      }

      /*
       * ---------------------------------------------
       * INITIAL BALL POSITION
       * ---------------------------------------------
       *
       * Balls start slightly above the section and
       * then drop down with a bounce.
       */
      ballsRef.current.forEach((ball) => {
        gsap.set(ball, {
          opacity: 0,
          y: -220,
          scale: 0.65,
          rotation: -8,
        });
      });

      /*
       * ---------------------------------------------
       * CONTENT INITIAL POSITION
       * ---------------------------------------------
       */
      if (contentRef.current) {
        gsap.set(contentRef.current, {
          opacity: 0,
          x: 40,
        });
      }

      /*
       * ---------------------------------------------
       * SCROLL TRIGGER
       * ---------------------------------------------
       */
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 72%",
        once: true,

        onEnter: () => {
          /*
           * BALL DROP / BOUNCE ANIMATION
           */
          const ballTimeline = gsap.timeline();

          ballsRef.current.forEach((ball, index) => {
            ballTimeline.to(
              ball,
              {
                opacity: 1,
                y: 0,
                scale: 1,
                rotation: 0,
                duration: 1.15,
                ease: "bounce.out",
              },
              index === 0 ? 0 : "-=0.82"
            );
          });

          /*
           * CONTENT ANIMATION
           */
          if (contentRef.current) {
            gsap.to(contentRef.current, {
              opacity: 1,
              x: 0,
              duration: 1,
              delay: 0.35,
              ease: "power3.out",
            });
          }

          /*
           * NUMBER COUNTING
           */
          numberRefs.current.forEach((number, index) => {
            const stat = stats[index];

            const counter = {
              value: 0,
            };

            gsap.to(counter, {
              value: stat.value,
              duration: 1.8,
              delay: 0.45 + index * 0.12,
              ease: "power2.out",

              onUpdate: () => {
                if (number) {
                  number.textContent = Math.floor(
                    counter.value
                  ).toLocaleString("en-IN");
                }
              },
            });
          });
        },
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  /*
   * ---------------------------------------------
   * BALL COLOR / THEME CLASSES
   * ---------------------------------------------
   */
  const getVariantClasses = (
    variant: Stat["variant"]
  ) => {
    switch (variant) {
      case "accent":
        return `
          bg-[var(--accent)]
          text-[var(--foreground)]
        `;

      case "primary":
        return `
          bg-[var(--primary)]
          text-white
        `;

      case "dark":
        return `
          bg-[var(--primary-dark)]
          text-white
        `;

      case "light":
      default:
        return `
          bg-[var(--background-secondary)]
          text-[var(--foreground)]
          border
          border-[var(--border)]
        `;
    }
  };

  return (
    <section
      ref={sectionRef}
      aria-labelledby="about-stats-heading"
      className="
        relative
        w-full
        overflow-hidden
        bg-[var(--background-secondary)]
        py-20
        sm:py-24
        lg:py-28
        px-5
        sm:px-8
        lg:px-12
        xl:px-20
        border-b
        border-[var(--border)]
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
          lg:gap-12
          items-center
        "
      >
        {/* =================================================
            LEFT — FLOATING STAT BALLS
        ================================================== */}
        <div
          className="
            relative
            lg:col-span-7
            w-full
            h-[570px]
            sm:h-[620px]
            lg:h-[590px]
            order-2
            lg:order-1
          "
          aria-label="Helping Garden Club venue statistics"
        >
          {/* Very subtle background ring */}
          <div
            className="
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-[280px]
              h-[280px]
              sm:w-[360px]
              sm:h-[360px]
              lg:w-[420px]
              lg:h-[420px]
              rounded-full
              border
              border-[var(--border)]
              opacity-50
            "
            aria-hidden="true"
          />

          {/* Decorative small dots */}
          <span
            className="
              absolute
              top-[12%]
              right-[8%]
              w-2
              h-2
              rounded-full
              bg-[var(--accent)]
              opacity-60
            "
            aria-hidden="true"
          />

          <span
            className="
              absolute
              bottom-[12%]
              right-[12%]
              w-1.5
              h-1.5
              rounded-full
              bg-[var(--primary)]
              opacity-50
            "
            aria-hidden="true"
          />

          {/* STAT BALLS */}
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              ref={addBallRef}
              className={`
                absolute
                ${stat.position}
                ${stat.size}
                ${getVariantClasses(stat.variant)}
                rounded-full
                flex
                flex-col
                items-center
                justify-center
                text-center
                shadow-xl
                z-10
                will-change-transform
                select-none
              `}
            >
              {/* Number */}
              <div
                className="
                  flex
                  items-baseline
                  justify-center
                  leading-none
                "
              >
                <span
                  ref={addNumberRef}
                  className="
                    text-4xl
                    sm:text-5xl
                    lg:text-6xl
                    font-sans
                    font-semibold
                    tracking-tight
                  "
                >
                  0
                </span>

                <span
                  className="
                    ml-0.5
                    text-xl
                    sm:text-2xl
                    lg:text-3xl
                    font-sans
                    font-semibold
                  "
                >
                  {stat.suffix}
                </span>
              </div>

              {/* Label */}
              <span
                className="
                  mt-2
                  max-w-[80%]
                  text-[10px]
                  sm:text-xs
                  lg:text-sm
                  font-sans
                  font-medium
                  leading-tight
                "
              >
                {stat.label}
              </span>
            </div>
          ))}

          {/* Bottom tiny label */}
          <div
            className="
              absolute
              bottom-1
              left-1/2
              -translate-x-1/2
              whitespace-nowrap
              text-[9px]
              sm:text-[10px]
              uppercase
              tracking-[0.22em]
              font-sans
              text-[var(--foreground-muted)]
            "
          >
            Our Space · Your Celebration
          </div>
        </div>

        {/* =================================================
            RIGHT — CONTENT
        ================================================== */}
        <div
          ref={contentRef}
          className="
            lg:col-span-5
            order-1
            lg:order-2
          "
        >
          {/* Label */}
          <div className="mb-5">
            <span
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[var(--accent)]/20
                bg-[var(--accent)]/10
                px-3.5
                py-1.5
                text-[10px]
                sm:text-xs
                uppercase
                tracking-[0.2em]
                font-sans
                font-semibold
                text-[var(--accent)]
              "
            >
              <span
                className="
                  w-1.5
                  h-1.5
                  rounded-full
                  bg-[var(--accent)]
                "
              />

              Our Numbers
            </span>
          </div>

          {/* Heading */}
          <h2
            id="about-stats-heading"
            className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-[3.4rem]
              xl:text-[3.7rem]
              leading-[1.08]
              tracking-tight
              font-serif
              font-normal
              text-[var(--foreground)]
            "
          >
            A Space Made for
            <br />
            <span
              className="
                italic
                font-light
                text-[var(--primary)]
              "
            >
              Meaningful Moments.
            </span>
          </h2>

          {/* Description */}
          <p
            className="
              mt-6
              max-w-xl
              text-sm
              sm:text-base
              leading-relaxed
              font-sans
              font-light
              text-[var(--foreground-muted)]
            "
          >
            From intimate gatherings to joyful celebrations, Helping
            Garden Club gives you a beautiful outdoor space in Jaipur
            where every occasion can feel special.
          </p>

          {/* Small divider */}
          <div
            className="
              mt-7
              w-14
              h-px
              bg-[var(--accent)]
            "
          />

          {/* Supporting text */}
          <p
            className="
              mt-5
              max-w-lg
              text-xs
              sm:text-sm
              leading-relaxed
              font-sans
              font-light
              text-[var(--foreground-muted)]
            "
          >
            A spacious garden lawn, swimming pool and private setting
            come together to create an easygoing venue for weddings,
            birthdays, anniversaries and private events.
          </p>

          {/* Bottom link-style element */}
          <div
            className="
              mt-7
              inline-flex
              items-center
              gap-3
              text-[10px]
              sm:text-xs
              uppercase
              tracking-[0.18em]
              font-sans
              font-semibold
              text-[var(--foreground)]
            "
          >
            <span>Celebrate With Us</span>

            <span
              className="
                flex
                items-center
                justify-center
                w-9
                h-9
                rounded-full
                border
                border-[var(--border)]
                text-[var(--foreground)]
              "
            >
              <FiArrowUpRight
                className="text-sm"
                aria-hidden="true"
              />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}