
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FiSun,
  FiDroplet,
  FiShield,
  FiSliders,
  FiSmile,
  FiArrowUpRight,
} from "react-icons/fi";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface FeatureItem {
  icon: React.ElementType;
  title: string;
  description: string;
  highlight: string;
}

const features: FeatureItem[] = [
  {
    icon: FiSun,
    title: "Beautiful Outdoor Space",
    description:
      "12,000+ sq. ft. of lush lawns surrounded by natural greenery — perfect for elegant daytime celebrations and magical evenings.",
    highlight: "12,000+ Sq Ft Lawn",
  },
  {
    icon: FiDroplet,
    title: "Refreshing Swimming Pool",
    description:
      "A private pool area made for relaxed afternoons, poolside celebrations, cocktail hours, and memorable summer gatherings.",
    highlight: "Private Pool Access",
  },
  {
    icon: FiShield,
    title: "Private & Peaceful",
    description:
      "Enjoy your celebration in a comfortable, enclosed environment with privacy, gated access, and dedicated parking.",
    highlight: "100% Private & Gated",
  },
  {
    icon: FiSliders,
    title: "Made Your Way",
    description:
      "From seating and lighting to stages, catering, and décor — shape the space around your celebration and your style.",
    highlight: "Flexible Setup",
  },
  {
    icon: FiSmile,
    title: "Moments Worth Remembering",
    description:
      "A beautiful blend of greenery, elegance, and warm hospitality designed to turn ordinary gatherings into lasting memories.",
    highlight: "Memorable Experience",
  },
];

export default function WhyChooseUsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const featureRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header reveal
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          {
            opacity: 0,
            y: 40,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 80%",
            },
          }
        );
      }

      // Feature reveal
      featureRefs.current.forEach((item, index) => {
        if (!item) return;

        gsap.fromTo(
          item,
          {
            opacity: 0,
            y: 60,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            delay: index * 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-15 px-6  bg-surface border-b border-theme overflow-hidden ">
      {/* Background Decorations */}
      <div
        className="absolute -top-40 -right-40 w-125 h-125 rounded-full bg-(--primary)/5 blur-3xl pointer-events-none "/>

      <div
        className="absolute bottom-0 -left-40 w-100 h-100 rounded-full bg-(--accent)/5 blur-3xl pointer-events-none "
      />

      <div className="relative max-w-7xl mx-auto">

        {/* =========================================
            HEADER
        ========================================== */}
        <div
          ref={headerRef}
          className="max-w-3xl mx-auto text-center mb-20 md:mb-24 " > 
          <span
            className="inline-flex items-center text-[10px] sm:text-xs uppercase tracking-[0.28em] text-accent-custom font-semibold px-4 py-1.5 rounded-full bg-(--accent)/10 border border-(--accent)/20 " 
          >
            The Helping Garden Difference
          </span>

          <h2
            className="mt-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-normal leading-[1.05] text-main ">
            More Than Just
            <br />

            <span className="italic font-light text-primary-custom">
              A Beautiful Venue
            </span>
          </h2>

          <p
            className="mt-6 max-w-2xl mx-auto text-base md:text-lg leading-relaxed text-muted-custom font-sans font-light">
            Thoughtfully designed spaces, natural beauty, and the freedom to
            celebrate your way — all in one memorable destination.
          </p>
        </div>

        {/* =========================================
            FEATURE SHOWCASE
        ========================================== */}
        <div className="relative">

          {/* Vertical Line */}
          <div
            className="hidden md:block absolute left-10.5 top-0 bottom-0 w-px bg-(--border) " />

          <div className="space-y-6 md:space-y-8">
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  ref={(el) => {
                    if (el) featureRefs.current[index] = el;
                  }}
                  className="relative"
                >
                  <div
                    className="group grid grid-cols-1 md:grid-cols-[86px_1fr_auto] gap-6 md:gap-8 items-center py-8 md:py-10 px-5 md:px-8 rounded-4xl transition-all duration-500 hover:bg-card-custom hover:shadow-xl border border-transparent  hover:border-theme ">
                    {/* Number / Icon */}
                    <div className="relative flex items-center justify-start md:justify-center">
                      <div
                        className="relative z-10 w-14 h-14 md:w-16 md:h-16 rounded-full bg-(--background) border border-(--border) flex items-center justify-center text-primary-custom transition-all duration-500 group-hover:bg-primary group-hover:text-white group-hover:border-primary group-hover:scale-105 ">
                        <Icon className="text-xl md:text-2xl" />
                      </div>
                    </div>

                    {/* Main Content */}
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span
                          className="text-[10px] uppercase tracking-[0.2em] text-accent-custom font-semibold " >
                          0{index + 1}
                        </span>

                        <span
                          className="h-px w-8 bg-(--accent) opacity-50 " />
                      </div>

                      <h3
                        className="text-2xl md:text-3xl font-serif font-normal text-main transition-colors duration-300 group-hover:text-primary-custom ">
                        {item.title}
                      </h3>

                      <p
                        className="mt-3 max-w-2xl text-sm md:text-base leading-relaxed text-muted-custom font-sans font-light ">
                        {item.description}
                      </p>
                    </div>

                    {/* Highlight */}
                    <div
                      className="md:min-w-45 flex md:justify-end ">
                      <div
                        className="inline-flex items-center gap-2 text-[10px] md:text-xs uppercase tracking-[0.16em] text-accent-custom font-semibold border-b border-(--accent)/30 pb-1.5 "
                      >
                        <span>{item.highlight}</span>

                        <FiArrowUpRight
                          className="text-sm transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 " /> 
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================
            BOTTOM STATEMENT
        ========================================== */}
        {/* <div
          className="
            mt-20
            md:mt-24
            pt-10
            border-t
            border-theme
            flex
            flex-col
            md:flex-row
            items-start
            md:items-center
            justify-between
            gap-6
          "
        >
          <p
            className="
              max-w-xl
              text-xl
              md:text-2xl
              font-serif
              text-main
              leading-relaxed
            "
          >
            <span className="italic text-primary-custom">
              Your celebration.
            </span>{" "}
            Your people. Your perfect setting.
          </p>

          <span
            className="
              text-[10px]
              uppercase
              tracking-[0.25em]
              text-muted-custom
              font-semibold
            "
          >
            Celebrate beautifully
          </span>
        </div> */}
      </div>
    </section>
  );
}

