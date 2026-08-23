"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroSocials from "./HeroSocials";

export default function HeroSection() {
  const [videoReady, setVideoReady] = useState(false);
  const containerRef = useRef<HTMLElement>(null);
  const contentWrapperRef = useRef<HTMLDivElement>(null);

  // Refs for GSAP animation selectors
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const socialIconsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // Title line/words slide up smoothly
      if (titleRef.current) {
        tl.fromTo(
          titleRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.3 }
        );
      }

      // Subtitle slides up
      if (subtitleRef.current) {
        tl.fromTo(
          subtitleRef.current,
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9 },
          "-=0.9"
        );
      }

      // CTA buttons slide up with slight scale
      if (ctaRef.current) {
        tl.fromTo(
          ctaRef.current,
          { y: 25, opacity: 0, scale: 0.96 },
          { y: 0, opacity: 1, scale: 1, duration: 0.9 },
          "-=0.7"
        );
      }

      // Socials row
      if (socialIconsRef.current) {
        tl.fromTo(
          socialIconsRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.8"
        );
      }

      // Interactive subtle mouse parallax on desktop
      if (!prefersReducedMotion && containerRef.current && contentWrapperRef.current) {
        const handleMouseMove = (e: MouseEvent) => {
          const { innerWidth, innerHeight } = window;
          const xPos = (e.clientX / innerWidth - 0.5) * 16;
          const yPos = (e.clientY / innerHeight - 0.5) * 12;

          gsap.to(contentWrapperRef.current, {
            x: xPos,
            y: yPos,
            duration: 1.2,
            ease: "power2.out",
          });
        };

        const heroEl = containerRef.current;
        heroEl.addEventListener("mousemove", handleMouseMove);

        return () => {
          heroEl.removeEventListener("mousemove", handleMouseMove);
        };
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen max-h-225 bg-black overflow-hidden flex flex-col justify-between"
    >
      {/* Subtle dark overlay over background */}
      <div className="absolute inset-0 bg-black/30 z-15 pointer-events-none" />

      {/* Background elements with scale & parallax */}
      <HeroBackground
        onVideoReady={() => setVideoReady(true)}
        videoReady={videoReady}
      />

      {/* Bottom Content Area with Mouse Parallax */}
      <div className="relative z-20 w-full px-6 pb-8 md:px-12 md:pb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8 mt-auto">
        <div
          ref={contentWrapperRef}
          className="flex flex-col items-start max-w-[85%] md:max-w-3xl transition-transform duration-300"
        >
          <HeroContent
            titleRef={titleRef}
            subtitleRef={subtitleRef}
            ctaRef={ctaRef}
          />
          <HeroSocials socialIconsRef={socialIconsRef} />
        </div>
      </div>
    </section>
  );
}
