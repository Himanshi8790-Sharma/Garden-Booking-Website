
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
    title: "Outdoor Garden Venue",
    description:
      "3600+ sq. ft. garden space for weddings, birthdays, anniversaries, and private celebrations.",
    highlight: "3600+ Sq Ft Lawn",
  },
  {
    icon: FiDroplet,
    title: "Swimming Pool",
    description:
      "Private pool area for pool parties, summer gatherings, and relaxed celebrations.",
    highlight: "Private Pool Access",
  },
  {
    icon: FiShield,
    title: "Private & Peaceful",
    description:
      "A secure, enclosed venue with privacy, gated access, and dedicated parking.",
    highlight: "Private Venue",
  },
  {
    icon: FiSliders,
    title: "Flexible Setup",
    description:
      "Customize seating, lighting, stage, catering, and décor for your event.",
    highlight: "Flexible Setup",
  },
  {
    icon: FiSmile,
    title: "Memorable Celebrations",
    description:
      "A beautiful setting designed for comfortable and memorable family celebrations.",
    highlight: "Celebrate Beautifully",
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
      className="relative w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-surface border-b border-theme overflow-hidden">
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
          className="max-w-3xl mx-auto text-center mb-10 sm:mb-14 md:mb-24" > 
          <span
            className="inline-flex items-center text-[10px] sm:text-xs uppercase tracking-[0.28em] text-accent-custom font-semibold px-4 py-1.5 rounded-full bg-(--accent)/10 border border-(--accent)/20 " 
          >
            The Helping Garden Difference
          </span>

          <h2
           className="mt-4 sm:mt-5 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-normal leading-[1.05] text-main">
            More Than Just
            <br />

            <span className="italic font-light text-primary-custom">
              A Beautiful Venue
            </span>
          </h2>

          <p
         className="mt-4 sm:mt-5 max-w-xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed text-muted-custom font-sans font-light">
           Thoughtfully designed spaces, natural beauty, and the freedom to celebrate your way.
          </p>
        </div>

        {/* =========================================
            FEATURE SHOWCASE
        ========================================== */}
        <div className="relative">

          {/* Vertical Line */}
          <div
            className="hidden md:block absolute left-10.5 top-0 bottom-0 w-px bg-(--border) " />

<div className="grid grid-cols-2 gap-3 sm:gap-4 md:block md:space-y-8">
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
                   className="group grid grid-cols-1 md:grid-cols-[86px_1fr_auto] gap-3 md:gap-8 items-start md:items-center py-4 sm:py-5 md:py-10 px-3.5 sm:px-5 md:px-8 rounded-2xl md:rounded-4xl bg-card-custom/40 md:bg-transparent border border-theme md:border-transparent transition-all duration-500 hover:bg-card-custom hover:shadow-xl hover:border-theme">
                    {/* Number / Icon */}
                    <div className="relative flex items-center justify-start md:justify-center">
                      <div
                        className="relative z-10 w-10 h-10 sm:w-11 sm:h-11 md:w-16 md:h-16 rounded-full bg-(--background) border border-(--border) flex items-center justify-center text-primary-custom transition-all duration-500 group-hover:bg-primary group-hover:text-white group-hover:border-primary group-hover:scale-105">
<Icon className="text-base sm:text-lg md:text-2xl" />
                      </div>
                    </div>

                    {/* Main Content */}
                    <div>
                     <div className="flex items-center gap-2 mb-1.5 md:mb-2">
                        <span
                         className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-accent-custom font-semibold" >
                          0{index + 1}
                        </span>

                        <span
                        className="h-px w-5 md:w-8 bg-(--accent) opacity-50" />
                      </div>

                      <h3
                      className="text-sm sm:text-base md:text-3xl font-serif font-normal leading-tight text-main transition-colors duration-300 group-hover:text-primary-custom">
                        {item.title}
                      </h3>

                      <p
                       className="mt-1.5 md:mt-3 max-w-2xl text-[10px] sm:text-xs md:text-base leading-snug md:leading-relaxed text-muted-custom font-sans font-light">
                        {item.description}
                      </p>
                    </div>

                    {/* Highlight */}
                   
                  <div className="hidden md:flex md:min-w-45 md:justify-end">
                      <div
                       className="inline-flex items-center text-[9px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.28em] text-accent-custom font-semibold px-3 sm:px-4 py-1.5 rounded-full bg-(--accent)/10 border border-(--accent)/20"
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

   
      </div>
    </section>
  );
}

