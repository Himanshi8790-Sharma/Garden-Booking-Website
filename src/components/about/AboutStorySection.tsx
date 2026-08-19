"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiCheckCircle, FiHeart, FiAward, FiSmile } from "react-icons/fi";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutStorySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageMainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 35 },
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

      if (imageMainRef.current) {
        gsap.fromTo(
          imageMainRef.current,
          { opacity: 0, scale: 0.95, y: 40 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: imageMainRef.current,
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
      aria-label="Our Story & Philosophy"
      className="w-full py-24 px-6 md:px-12 lg:px-20 bg-[var(--background)] border-b border-[var(--border)] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Visual Image Showcase */}
        <div className="lg:col-span-6 relative flex flex-col items-center lg:items-start order-2 lg:order-1">
          <div
            ref={imageMainRef}
            className="relative w-full max-w-lg lg:max-w-none h-[400px] sm:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-[var(--card)] group"
          >
            <Image
              src="/images/garden.webp"
              alt="Helping Garden Club scenic open-air wedding lawn"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-[var(--primary-dark)]/75 via-transparent to-transparent opacity-80"
              aria-hidden="true"
            />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-xs uppercase tracking-widest text-[var(--accent-light)] font-sans font-medium">
                Our Sanctuary
              </span>
              <h3 className="text-xl font-serif font-normal text-white mt-0.5">
                Manicured Grounds &amp; Floral Canopies
              </h3>
            </div>
          </div>

          {/* Overlapping Secondary Card */}
          <div className="relative lg:absolute -bottom-8 lg:-right-6 w-full sm:w-[280px] h-[190px] mt-6 lg:mt-0 rounded-2xl overflow-hidden shadow-2xl border-4 border-[var(--card)] bg-[var(--card)] z-10 group">
            <Image
              src="/assets/welcome_palace.webp"
              alt="Luxury decor setup for private celebrations"
              fill
              sizes="(max-width: 640px) 100vw, 280px"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-[var(--primary-dark)]/80 via-transparent to-transparent"
              aria-hidden="true"
            />
            <div className="absolute bottom-3 left-4 text-white">
              <span className="text-[10px] uppercase tracking-wider text-[var(--accent-light)] font-sans font-semibold">
                Royal Aesthetics
              </span>
              <p className="text-sm font-serif font-light text-white">
                Bespoke Decor Rigs &amp; Lighting
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Copy & Core Values */}
        <div ref={textRef} className="lg:col-span-6 flex flex-col justify-center order-1 lg:order-2">
          <span className="text-xs uppercase tracking-[0.25em] text-[var(--accent)] font-semibold mb-3 px-3.5 py-1 bg-[var(--accent)]/10 rounded-full border border-[var(--accent)]/20 font-sans w-fit">
            Our Story &amp; Heritage
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[var(--foreground)] leading-[1.15] font-normal">
            Where Nature Meets <br />
            <span className="italic font-light text-[var(--primary)]">
              Royal Celebration Excellence
            </span>
          </h2>

          <div className="mt-6 text-[var(--foreground-muted)] space-y-4 text-base md:text-lg leading-relaxed font-sans font-light">
            <p>
              Helping Garden Club was born out of a passion to offer a truly breathtaking <strong>garden venue</strong> in Jaipur. We envisioned a sanctuary where families could gather away from city noise and host grand <strong>wedding venues</strong>, festive <strong>birthday parties</strong>, intimate <strong>anniversary celebrations</strong>, and refreshing <strong>swimming pool</strong> bashes in complete privacy.
            </p>
            <p>
              Spanning over 12,000 square feet of manicured open-air lawn surrounded by towering palms and blooming floral arches, our venue is designed to give your guests an atmosphere of effortless luxury, timeless charm, and warm Rajasthani hospitality.
            </p>
          </div>

          {/* Key Values List */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[var(--border)]">
            <div className="flex flex-col items-start p-4 rounded-2xl bg-[var(--background-secondary)] border border-[var(--border)]">
              <FiHeart className="text-2xl text-[var(--accent)] mb-2" />
              <h3 className="text-sm font-serif font-medium text-[var(--foreground)]">Passionate Team</h3>
              <p className="text-xs text-[var(--foreground-muted)] font-sans font-light mt-1">Dedicated event coordinators for seamless planning.</p>
            </div>
            <div className="flex flex-col items-start p-4 rounded-2xl bg-[var(--background-secondary)] border border-[var(--border)]">
              <FiAward className="text-2xl text-[var(--primary)] mb-2" />
              <h3 className="text-sm font-serif font-medium text-[var(--foreground)]">Luxury Quality</h3>
              <p className="text-xs text-[var(--foreground-muted)] font-sans font-light mt-1">Impeccably maintained lawns &amp; crystal swimming pool.</p>
            </div>
            <div className="flex flex-col items-start p-4 rounded-2xl bg-[var(--background-secondary)] border border-[var(--border)]">
              <FiSmile className="text-2xl text-[var(--accent)] mb-2" />
              <h3 className="text-sm font-serif font-medium text-[var(--foreground)]">Total Privacy</h3>
              <p className="text-xs text-[var(--foreground-muted)] font-sans font-light mt-1">Gated exclusive access reserved solely for your guests.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
