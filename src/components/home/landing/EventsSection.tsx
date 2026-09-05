"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowUpRight } from "react-icons/fi";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface EventOccasion {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tag: string;
}

const occasions: EventOccasion[] = [
  {
    id: "weddings",
    title: "Wedding Celebrations",
    subtitle: "Fairytale Open-Air Ceremonies",
    description: "Exchange vows under starry skies and lush canopy foliage with grand banquet setups.",
    image: "/image/weddingphoto.jpeg",
    tag: "Most Popular",
  },
  {
    id: "birthdays",
    title: "Birthday Parties",
    subtitle: "Vibrant Celebrations & Themes",
    description: "Unforgettable birthday bashes with pool access, customized decor, and music setups.",
    image: "/image/birthday.jpeg",
    tag: "Festive",
  },
  {
    id: "anniversaries",
    title: "Anniversary Parties",
    subtitle: "Romance & Timeless Memories",
    description: "Intimate candlelit dinners or lavish romantic gatherings with family and friends.",
    image: "/image/anniversary.jpeg",
    tag: "Intimate",
  },
 {
  id: "parties",
  title: "Birthday & Private Parties",
  subtitle: "Make Every Celebration Special",
  description:
    "Celebrate birthdays, anniversaries, and private parties with beautiful garden spaces, vibrant décor, ambient lighting, and a memorable party setup.",
  image: "/images/party.webp",
  tag: "Party Celebrations",
},
  {
    id: "family",
    title: "Family Celebrations",
    subtitle: "Reunions & Milestone Gatherings",
    description: "Spacious lawn areas with play space for kids, dining gazebos, and relaxing loungers.",
    image: "/image/family.jpeg",
    tag: "Gatherings",
  },
  {
    id: "private",
    title: "Private Events & Pool Parties",
    subtitle: "Exclusive VIP Venue Access",
    description: "Host private pool galas, corporate mixers, or cocktail soirees with private security.",
    image: "/image/swimming.png",
    tag: "Exclusive",
  },
];

export default function EventsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Header reveal
      gsap.fromTo(
        ".events-header",
        { opacity: 0, y: 35 },
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

      // Clean straight card entrance: opacity 0 -> 1, y 40 -> 0, scale 0.98 -> 1
      if (cardsRef.current.length > 0) {
        gsap.fromTo(
          cardsRef.current,
          { opacity: 0, y: 40, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.85,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".events-grid",
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
      id="events"
      aria-label="Tailored Event Occasions"
      className="w-full py-10 px-6 md:px-12 lg:px-20 bg-(--background-secondary) border-b border-(--border) relative"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div className="events-header text-center max-w-2xl flex flex-col items-center">
          <span className="text-xs uppercase tracking-[0.25em] text-(--accent) font-semibold px-3.5 py-1 bg-(--accent)/10 rounded-full border border-(--accent)/20 mb-3 font-sans">
            Tailored Occasions
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-(--foreground) leading-tight font-normal">
            Bespoke Celebrations <br />
            <span className="italic font-light text-(--primary)">
              For Every Milestone
            </span>
          </h2>
          <p className="mt-4 text-(--foreground-muted) font-sans font-light text-base md:text-lg">
            Whether planning an intimate family gathering or a lavish wedding reception, our versatile garden venue transforms to match your vision.
          </p>
        </div>

        {/* Cards Grid - Straight Natural Reveal */}
        <div className="events-grid w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {occasions.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="group relative rounded-3xl overflow-hidden bg-(--card) shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col h-107.5 border border-(--border) hover:border-(--accent)/50 cursor-pointer"
            >
              {/* Card Image Container */}
              <div className="relative w-full h-[62%] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                
                <div
                  className="absolute inset-0 bg-linear-to-t from-(--primary-dark)/90 via-(--primary-dark)/30 to-transparent transition-opacity duration-500 group-hover:opacity-90"
                  aria-hidden="true"
                />
                
                <span className="absolute top-4 left-4 text-[10px] uppercase tracking-widest bg-(--primary-dark)/70 text-(--accent-light) px-3 py-1 rounded-full backdrop-blur-md border border-white/10 font-semibold font-sans">
                  {item.tag}
                </span>

                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all duration-500 group-hover:bg-(--accent)group-hover:text-black group-hover:rotate-45">
                  <FiArrowUpRight className="text-lg" />
                </div>

                <div className="absolute bottom-4 left-6 right-6 transition-transform duration-500 group-hover:-translate-y-1">
                  <h3 className="text-xl font-serif text-white font-normal leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-(--accent-light) font-sans font-light tracking-wide mt-0.5">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              {/* Card Content Footer */}
              <div className="p-6 flex flex-col justify-between flex-1 bg-(--card)">
                <p className="text-xs sm:text-sm text-(--foreground-muted) font-sans font-light leading-relaxed line-clamp-2">
                  {item.description}
                </p>

                <div className="pt-3 flex items-center justify-between border-t border-(--border) mt-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-(--primary) group-hover:text-(--accent) transition-colors duration-300 font-sans">
                    Book Event Space
                  </span>
                  <Link
                    href="#booking"
                    className="text-xs font-sans text-(--foreground-muted) group-hover:text-(--foreground) transition-colors flex items-center gap-1 font-medium"
                  >
                    Details &rarr;
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
