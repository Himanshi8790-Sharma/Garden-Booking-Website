"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface FeatureHighlight {
  title: string;
  desc: string;
}

const keyHighlights: FeatureHighlight[] = [
  {
    title: "Spacious Outdoor Garden",
    desc: "Over 12,000 sq. ft. of manicured green lawns framed by lush tropical foliage and floral canopy paths.",
  },
  {
    title: "Weddings & Grand Receptions",
    desc: "Fairytale open-air wedding venue setups with customizable mandaps, stage lighting, and starlit banquets.",
  },
  {
    title: "Birthday & Anniversary Parties",
    desc: "Vibrant outdoor celebrations and romantic milestone gatherings tailored to your personal style.",
  },
  {
    title: "Refreshing Swimming Pool",
    desc: "Crystal-clear private swimming pool area ideal for poolside cocktail soirees and sunny day bashes.",
  },
  {
    title: "Family & Private Events",
    desc: "Complete venue privacy for intimate family reunions, cocktail mixers, and exclusive corporate events.",
  },
  {
    title: "Flexible Outdoor Celebration Space",
    desc: "Modular arrangements allowing customized seating, catering stations, music, and decorative setups.",
  },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageMainRef = useRef<HTMLDivElement>(null);
  const imageSubRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Heading Masked Unmask Reveal
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { opacity: 0, y: 40, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" },
          {
            opacity: 1,
            y: 0,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
            },
          }
        );
      }

      // 2. Text & highlights staggered reveal
      gsap.fromTo(
        [textRef.current, statsRef.current],
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
          },
        }
      );

      // 3. Main Image Clip-Path Unmasking
      if (imageMainRef.current) {
        gsap.fromTo(
          imageMainRef.current,
          {
            opacity: 0,
            scale: 1.1,
            clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
          },
          {
            opacity: 1,
            scale: 1,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            duration: 1.3,
            ease: "power3.inOut",
            scrollTrigger: {
              trigger: imageMainRef.current,
              start: "top 80%",
            },
          }
        );
      }

      // 4. Secondary Floating Image Parallax Shift
      if (imageSubRef.current && sectionRef.current) {
        gsap.fromTo(
          imageSubRef.current,
          { opacity: 0, y: 60, scale: 0.92 },
          {
            opacity: 1,
            scale: 1,
            y: -20,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: imageSubRef.current,
              start: "top 85%",
            },
          }
        );

        // Continuous parallax scrub on scroll
        gsap.to(imageSubRef.current, {
          y: -45,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      aria-label="About Our Garden Venue"
      className="relative w-full py-28 px-6 md:px-12 lg:px-20 bg-[var(--background)] overflow-hidden border-b border-[var(--border)]"
    >
      {/* Soft Background Accent Orb */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--primary-light)]/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Content */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <div ref={headingRef} className="flex flex-col items-start overflow-hidden">
            <span className="text-xs uppercase tracking-[0.25em] text-[var(--accent)] font-semibold mb-3 px-3.5 py-1 bg-[var(--accent)]/10 rounded-full border border-[var(--accent)]/20 font-sans">
              About Our Venue
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[var(--foreground)] leading-[1.15] font-normal">
              An Extraordinary <br />
              <span className="italic font-light text-[var(--primary)]">
                Garden &amp; Event Venue
              </span>{" "}
              For Life&apos;s Milestones
            </h2>
          </div>

          <div
            ref={textRef}
            className="mt-6 text-[var(--foreground-muted)] space-y-4 text-base md:text-lg leading-relaxed font-sans font-light"
          >
            <p>
              Welcome to our premier <strong>garden venue</strong>, a serene sanctuary thoughtfully designed for hosting extraordinary <strong>outdoor celebrations</strong> and <strong>private events</strong>. Nestled within lush green surroundings, our property offers the ideal setting whether you are searching for an enchanting <strong>wedding venue</strong> or a versatile space for milestone celebrations.
            </p>
            <p>
              From fairytale weddings and glamorous receptions to energetic <strong>birthday parties</strong>, romantic <strong>anniversary celebrations</strong>, and refreshing <strong>swimming pool</strong> bashes, our dedicated event venue elevates every occasion into an unforgettable memory.
            </p>

            {/* Key Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {keyHighlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-2xl bg-[var(--background-secondary)] border border-[var(--border)] transition-all duration-300 hover:border-[var(--accent)]/50 hover:shadow-md"
                >
                  <FiCheckCircle className="text-[var(--accent)] text-lg flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs font-sans font-semibold text-[var(--foreground)] uppercase tracking-wider">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[var(--foreground-muted)] font-sans font-light mt-0.5 leading-snug">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Venue Statistics & Action Button */}
          <div
            ref={statsRef}
            className="mt-10 pt-8 border-t border-[var(--border)] flex flex-wrap items-center justify-between gap-6"
          >
            <div className="flex items-center gap-8">
              <div>
                <p className="text-3xl sm:text-4xl font-serif font-semibold text-[var(--primary)]">
                  12,000+
                </p>
                <p className="text-xs uppercase tracking-wider text-[var(--foreground-muted)] font-sans">
                  Sq. Ft. Outdoor Lawn
                </p>
              </div>
              <div
                className="w-px h-10 bg-[var(--border)]"
                aria-hidden="true"
              />
              <div>
                <p className="text-3xl sm:text-4xl font-serif font-semibold text-[var(--accent)]">
                  500+
                </p>
                <p className="text-xs uppercase tracking-wider text-[var(--foreground-muted)] font-sans">
                  Guest Capacity
                </p>
              </div>
            </div>

            <Link
              href="#events"
              className="px-6 py-3.5 bg-[var(--primary)] text-white font-sans text-xs uppercase tracking-widest font-semibold rounded-full hover:bg-[var(--primary-dark)] transition-all duration-300 flex items-center gap-2 shadow-lg shadow-[var(--primary)]/15 hover:shadow-xl active:scale-95 cursor-pointer"
            >
              <span>Explore Event Types</span>
              <FiArrowRight />
            </Link>
          </div>
        </div>

        {/* Right Column: Visual Layout with Clip-Path & Parallax */}
        <div className="lg:col-span-6 relative flex flex-col items-center lg:items-end">
          {/* Main Image with Clip-Path Unmasking */}
          <div
            ref={imageMainRef}
            className="relative w-full max-w-lg lg:max-w-none h-[400px] sm:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-[var(--card)] group"
          >
            <Image
              src="/images/garden.webp"
              alt="Lush outdoor garden venue manicured lawn and floral pathways"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-[var(--primary-dark)]/70 via-transparent to-transparent opacity-80"
              aria-hidden="true"
            />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-xs uppercase tracking-widest text-[var(--accent-light)] font-sans font-medium">
                Manicured Lawns
              </span>
              <p className="text-xl font-serif font-normal text-white mt-0.5">
                Lush Outdoor Garden &amp; Floral Canopy
              </p>
            </div>
          </div>

          {/* Secondary Inset Image with Parallax Scrub */}
          <div
            ref={imageSubRef}
            className="relative lg:absolute -bottom-10 lg:-left-6 w-full sm:w-[280px] h-[200px] mt-6 lg:mt-0 rounded-2xl overflow-hidden shadow-2xl border-4 border-[var(--card)] bg-[var(--card)] z-10 group"
          >
            <Image
              src="/assets/welcome_palace.webp"
              alt="Royal heritage event venue entryway and celebration setup"
              fill
              sizes="(max-width: 640px) 100vw, 280px"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-[var(--primary-dark)]/80 via-transparent to-transparent"
              aria-hidden="true"
            />
            <div className="absolute bottom-3 left-4 text-white">
              <span className="text-[10px] uppercase tracking-wider text-[var(--accent-light)] font-sans font-semibold">
                Event Decor
              </span>
              <p className="text-sm font-serif font-light text-white">
                Elegant Decor &amp; Stage Setups
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
