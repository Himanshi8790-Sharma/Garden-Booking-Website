
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

  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const socialIconsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power4.out" },
      });

      if (titleRef.current) {
        tl.fromTo(
          titleRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.3 }
        );
      }

      if (subtitleRef.current) {
        tl.fromTo(
          subtitleRef.current,
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9 },
          "-=0.9"
        );
      }

      if (ctaRef.current) {
        tl.fromTo(
          ctaRef.current,
          { y: 25, opacity: 0, scale: 0.96 },
          { y: 0, opacity: 1, scale: 1, duration: 0.9 },
          "-=0.7"
        );
      }

      if (socialIconsRef.current) {
        tl.fromTo(
          socialIconsRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.8"
        );
      }

      // Desktop mouse parallax only
      if (
        !prefersReducedMotion &&
        containerRef.current &&
        contentWrapperRef.current
      ) {
        const handleMouseMove = (e: MouseEvent) => {
          // Don't run parallax on mobile
          if (window.innerWidth < 768) return;

          const { innerWidth, innerHeight } = window;

          const xPos = (e.clientX / innerWidth - 0.5) * 16;
          const yPos = (e.clientY / innerHeight - 0.5) * 12;

          gsap.to(contentWrapperRef.current, {
            x: xPos,
            y: yPos,
            duration: 1.2,
            ease: "power2.out",
            overwrite: "auto",
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
      className="
        relative
        w-full
        h-[85svh]
        min-h-[520px]
        max-h-[750px]
        md:h-screen
        md:min-h-[620px]
        md:max-h-[900px]
        bg-black
        overflow-hidden
        flex
        flex-col
        justify-between
      "
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/35 z-[15] pointer-events-none" />

      {/* Background */}
      <HeroBackground
        onVideoReady={() => setVideoReady(true)}
        videoReady={videoReady}
      />

      {/* Content */}
      <div
        className="
          relative
          z-20
          w-full
          px-4
          xs:px-5
          sm:px-6
          md:px-12
          pb-6
          sm:pb-9
          md:pb-16
          pt-20
          sm:pt-24
          md:pt-0
          flex
          flex-col
          md:flex-row
          md:items-end
          md:justify-between
          gap-5
          md:gap-8
          mt-auto
        "
      >
        <div
          ref={contentWrapperRef}
          className="
            flex
            flex-col
            items-start
            w-full
            max-w-full
            sm:max-w-[90%]
            md:max-w-3xl
            will-change-transform
          "
        >
          <HeroContent
            titleRef={titleRef}
            subtitleRef={subtitleRef}
            ctaRef={ctaRef}
          />

          {/* <HeroSocials socialIconsRef={socialIconsRef} /> */}
        </div>
      </div>
    </section>
  );
}

