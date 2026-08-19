"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiStar } from "react-icons/fi";
import { FaQuoteLeft } from "react-icons/fa";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  eventType: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote: "Our wedding reception here was an absolute dream. The open garden lighting was ethereal and every guest was awestruck by the natural ambiance. Highly recommended!",
    author: "Priya & Rohan Sharma",
    role: "Bride & Groom",
    eventType: "Grand Wedding Reception",
    rating: 5,
    avatar: "/assets/avatar_one.png",
  },
  {
    id: "t2",
    quote: "Hosted my 30th birthday pool party at this garden. The pool area was sparkling clean, the decor setup was seamless, and the venue privacy made it top-notch.",
    author: "Ananya Mehta",
    role: "Birthday Host",
    eventType: "30th Birthday Pool Bash",
    rating: 5,
    avatar: "/assets/avatar_two.png",
  },
  {
    id: "t3",
    quote: "We celebrated our parents' 50th golden anniversary here. The spacious lawn allowed setup for 300+ guests with dining gazebos. Truly a memorable evening!",
    author: "Vikram & Family",
    role: "Event Organizer",
    eventType: "50th Anniversary Gala",
    rating: 5,
    avatar: "/assets/avatar_three.png",
  },
];

export default function TestimonialsSection() {
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
        ".reviews-header",
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

      // Staggered perspective reveal for cards
      if (cardsRef.current.length > 0) {
        gsap.fromTo(
          cardsRef.current,
          { opacity: 0, y: 45, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            stagger: 0.16,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".reviews-grid",
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
      aria-label="Guest Testimonials Section"
      className="w-full py-28 px-6 md:px-12 lg:px-20 bg-[var(--background-secondary)] border-b border-[var(--border)] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div className="reviews-header text-center max-w-2xl flex flex-col items-center">
          <span className="text-xs uppercase tracking-[0.25em] text-[var(--accent)] font-semibold px-3.5 py-1 bg-[var(--accent)]/10 rounded-full border border-[var(--accent)]/20 mb-3 font-sans">
            Guest Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[var(--foreground)] leading-tight font-normal">
            Loved By Couples &amp; <br />
            <span className="italic font-light text-[var(--primary)]">
              Celebration Hosts
            </span>
          </h2>
          <p className="mt-4 text-[var(--foreground-muted)] font-sans font-light text-base md:text-lg">
            Read firsthand experiences from host families and couples who created lifelong memories at our venue.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="reviews-grid w-full grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {testimonials.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="group p-8 rounded-3xl bg-[var(--card)] border border-[var(--border)] hover:border-[var(--accent)]/40 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-between relative"
            >
              {/* Top Quote Mark Icon */}
              <div className="absolute top-6 right-6 text-3xl text-[var(--accent)]/20 group-hover:text-[var(--accent)]/40 transition-colors">
                <FaQuoteLeft />
              </div>

              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-amber-500 mb-6">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <FiStar key={i} className="fill-amber-400 text-amber-400 text-sm" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm font-sans font-light text-[var(--foreground)] leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author Footer */}
              <div className="mt-8 pt-6 border-t border-[var(--border)] flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[var(--accent)]/30 flex-shrink-0">
                  <Image
                    src={item.avatar}
                    alt={item.author}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-base font-serif text-[var(--foreground)] font-normal leading-snug">
                    {item.author}
                  </h3>
                  <p className="text-xs font-sans text-[var(--accent)] font-medium mt-0.5">
                    {item.eventType}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
