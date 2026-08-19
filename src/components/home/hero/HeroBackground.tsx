"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Props {
  onVideoReady: () => void;
  videoReady: boolean;
}

export default function HeroBackground({
  onVideoReady,
  videoReady,
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    const video = videoRef.current;
    const wrapper = wrapperRef.current;
    if (!video || !wrapper) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    video.src = "/images/wedding.mp4";
    video.load();

    const handleCanPlay = () => {
      onVideoReady();
      if (!document.hidden) {
        video.play().catch(() => {});
      }
    };

    video.addEventListener("canplay", handleCanPlay);

    const section = wrapper.closest("section");

    const ctx = gsap.context(() => {
      if (!prefersReducedMotion && section) {
        // Initial Cinematic Scale Entrance
        gsap.fromTo(
          wrapper,
          { scale: 1.16 },
          { scale: 1, duration: 2.2, ease: "power3.out" }
        );

        // Scroll Parallax Scrub
        gsap.to(wrapper, {
          yPercent: 14,
          scale: 1.08,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      if (section) {
        ScrollTrigger.create({
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          onEnter: () => video.play().catch(() => {}),
          onEnterBack: () => video.play().catch(() => {}),
          onLeave: () => video.pause(),
          onLeaveBack: () => video.pause(),
        });
      }
    }, wrapperRef);

    return () => {
      video.pause();
      video.removeEventListener("canplay", handleCanPlay);
      ctx.revert();
    };
  }, [onVideoReady]);

  return (
    <div ref={wrapperRef} className="absolute inset-0 w-full h-full z-0 overflow-hidden">
      <Image
        src="/images/HeroGarden.jpg"
        alt="Helping Garden Club Hero Background"
        fill
        priority
        sizes="100vw"
        className="z-0 object-cover"
      />

      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 z-10 h-full w-full object-cover"
        style={{
          opacity: videoReady ? 1 : 0,
          transition: "opacity 0.7s ease-in-out",
        }}
      />
    </div>
  );
}