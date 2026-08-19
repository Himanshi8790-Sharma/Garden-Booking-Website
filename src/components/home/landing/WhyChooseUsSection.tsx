"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiSun, FiDroplet, FiShield, FiSliders, FiSmile } from "react-icons/fi";

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
    description: "Over 12,000 sq. ft. of manicured lawns surrounded by natural greenery and floral arches, perfect for daylight photos & starlit evenings.",
    highlight: "12,000+ Sq Ft Lawn",
  },
  {
    icon: FiDroplet,
    title: "Refreshing Swimming Pool",
    description: "A crystal-clear private pool area designed for pool parties, daytime cocktail hours, and refreshing celebration breaks.",
    highlight: "Private Pool Access",
  },
  {
    icon: FiShield,
    title: "Perfect For Private Events",
    description: "Completely enclosed venue providing ultimate privacy, gated security, and dedicated parking for your exclusive guests.",
    highlight: "100% Private & Gated",
  },
  {
    icon: FiSliders,
    title: "Flexible Event Setup",
    description: "Modular seating arrangements, stage designs, lighting rigs, and catering stations tailored to your exact party size and theme.",
    highlight: "Custom Decor Options",
  },
  {
    icon: FiSmile,
    title: "Memorable Atmosphere",
    description: "Combining royal elegance with natural tranquility to ensure your guests take home unforgettable memories of your special day.",
    highlight: "Unmatched Hospitality",
  },
];

export default function WhyChooseUsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header reveal
      gsap.fromTo(
        ".why-header",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      // Feature items staggered reveal
      if (itemsRef.current.length > 0) {
        gsap.fromTo(
          itemsRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".why-grid",
              start: "top 80%",
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
      className="w-full py-24 px-6 md:px-12 lg:px-20 bg-surface border-b border-theme relative overflow-hidden"
    >
      {/* Background Accent glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-[var(--primary)]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div className="why-header text-center max-w-2xl flex flex-col items-center">
          <span className="text-xs uppercase tracking-[0.25em] text-accent-custom font-semibold px-3 py-1 bg-[var(--accent)]/10 rounded-full border border-[var(--accent)]/20 mb-3">
            Distinctive Quality
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-main leading-tight font-normal">
            Why Choose Our <br />
            <span className="italic font-light text-primary-custom">
              Garden Venue
            </span>
          </h2>
          <p className="mt-4 text-muted-custom font-sans font-light text-base md:text-lg">
            We blend natural majesty, contemporary luxury, and total exclusivity to create the ultimate venue for your celebrations.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="why-grid w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {features.map((item, index) => {
            const Icon = item.icon;
            const isCenterHighlight = index === 1;

            return (
              <div
                key={index}
                ref={(el) => {
                  if (el) itemsRef.current[index] = el;
                }}
                className={`group p-8 rounded-3xl transition-all duration-500 border flex flex-col justify-between ${
                  isCenterHighlight
                    ? "bg-primary text-white border-primary-dark shadow-2xl scale-100 lg:-translate-y-2"
                    : "bg-card-custom text-main border-theme hover:border-[var(--accent)]/40 hover:shadow-xl"
                }`}
              >
                <div>
                  {/* Icon Badge */}
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-transform duration-500 group-hover:scale-110 ${
                      isCenterHighlight
                        ? "bg-accent-light/20 text-accent-light"
                        : "bg-[var(--primary)]/10 text-primary-custom"
                    }`}
                  >
                    <Icon />
                  </div>

                  <h3
                    className={`text-xl font-serif font-normal mt-6 ${
                      isCenterHighlight ? "text-white" : "text-main"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`mt-3 text-sm font-sans font-light leading-relaxed ${
                      isCenterHighlight ? "text-slate-200" : "text-muted-custom"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 border-theme/40 flex items-center justify-between">
                  <span
                    className={`text-[11px] font-sans font-semibold uppercase tracking-wider ${
                      isCenterHighlight ? "text-accent-light" : "text-accent-custom"
                    }`}
                  >
                    {item.highlight}
                  </span>
                  <div
                    className={`w-2 h-2 rounded-full ${
                      isCenterHighlight ? "bg-accent-light" : "bg-[var(--primary)]"
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
