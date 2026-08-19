"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiSun, FiDroplet, FiShield, FiSliders, FiClock, FiUsers } from "react-icons/fi";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface VenueFeature {
  icon: React.ElementType;
  title: string;
  description: string;
  tag: string;
}

const features: VenueFeature[] = [
  {
    icon: FiSun,
    title: "12,000+ Sq. Ft. Lawn",
    description: "Spacious open garden space framed by natural flora, suitable for banquet dining, stage mandate, and guest lounging.",
    tag: "Spacious Ground",
  },
  {
    icon: FiDroplet,
    title: "Private Swimming Pool",
    description: "Azure filtered swimming pool access ideal for sunny daytime pool parties, cocktail mixers, and night lighting dips.",
    tag: "Pool Access",
  },
  {
    icon: FiShield,
    title: "100% Gated Privacy",
    description: "Exclusive access reserved strictly for your private guests, equipped with gated security and dedicated vehicle parking.",
    tag: "Exclusive VIP",
  },
  {
    icon: FiSliders,
    title: "Flexible Decor Setups",
    description: "Modular stage rigs, floral canopy pathways, audio-visual setups, and custom lighting tailored to your theme.",
    tag: "Custom Layouts",
  },
  {
    icon: FiClock,
    title: "Day & Night Shifts",
    description: "Choose between sun-kissed daylight brunches or starlit evening dinners with full ambient illumination.",
    tag: "Flexible Shift",
  },
  {
    icon: FiUsers,
    title: "500+ Guest Capacity",
    description: "Ample room for large wedding receptions or cozy configurations for intimate family milestone gatherings.",
    tag: "Large Capacity",
  },
];

export default function AboutFeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (itemsRef.current.length > 0) {
        gsap.fromTo(
          itemsRef.current,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
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
      aria-label="Why Choose Our Venue"
      className="w-full py-24 px-6 md:px-12 lg:px-20 bg-[var(--background)] border-b border-[var(--border)] relative overflow-hidden"
    >
      {/* Background Orbs */}
      <div
        className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[var(--primary-light)]/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl flex flex-col items-center">
          <span className="text-xs uppercase tracking-[0.25em] text-[var(--accent)] font-semibold mb-3 px-3.5 py-1 bg-[var(--accent)]/10 rounded-full border border-[var(--accent)]/20 font-sans">
            Venue Advantages
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[var(--foreground)] leading-tight font-normal">
            Why Choose Our <br />
            <span className="italic font-light text-[var(--primary)]">
              Garden &amp; Pool Venue
            </span>
          </h2>
          <p className="mt-4 text-[var(--foreground-muted)] font-sans font-light text-base md:text-lg">
            We deliver exceptional privacy, natural beauty, and modern event infrastructure for weddings, birthdays, and private parties.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                ref={(el) => {
                  if (el) itemsRef.current[index] = el;
                }}
                className="group p-8 rounded-3xl bg-[var(--card)] border border-[var(--border)] hover:border-[var(--accent)]/40 shadow-md hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center text-2xl group-hover:bg-[var(--primary)] group-hover:text-white transition-all duration-500">
                    <Icon />
                  </div>

                  <h3 className="text-xl font-serif font-normal text-[var(--foreground)] mt-6">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm font-sans font-light text-[var(--foreground-muted)] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[var(--border)] flex items-center justify-between">
                  <span className="text-[11px] font-sans font-semibold uppercase tracking-wider text-[var(--accent)]">
                    {item.tag}
                  </span>
                  <div
                    className="w-2 h-2 rounded-full bg-[var(--primary)]"
                    aria-hidden="true"
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
