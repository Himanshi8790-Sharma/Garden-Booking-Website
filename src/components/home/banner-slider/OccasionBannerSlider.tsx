"use client";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import OccasionBannerSlide from "./OccasionBannerSlide";
import { occasionBannerSlides } from "@/src/constants/occasionBanner";

export default function OccasionBannerSlider() {
    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    // Auto-play slider with viewport checking
    useEffect(() => {
        if (isHovered) return;

        const container = containerRef.current;
        let isVisible = true;

        // IntersectionObserver to only autoplay when the section is visible
        const observer = new IntersectionObserver(
            ([entry]) => {
                isVisible = entry.isIntersecting;
            },
            { threshold: 0.05 }
        );

        if (container) observer.observe(container);

        const interval = setInterval(() => {
            if (isVisible) {
                setCurrentSlide((prev) => (prev + 1) % occasionBannerSlides.length);
            }
        }, 5000);

        return () => {
            clearInterval(interval);
            observer.disconnect();
        };
    }, [isHovered]);

    // Handle GSAP sliding translation
    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        gsap.to(track, {
            xPercent: -20 * currentSlide, // 5 slides, each is 20% of the 500% width track
            duration: 0.8,
            ease: "power2.inOut"
        });
    }, [currentSlide]);

    return (
        <section
            ref={containerRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="w-full bg-[#FAF9F6] py-16 px-6 md:px-12 flex justify-center"
        >
            {/* Main Outer Banner wrapper */}
            <div className="w-full max-w-7xl overflow-hidden rounded-[2rem] shadow-xl relative h-[210px] md:h-[260px] bg-slate-950">

                {/* Sliding Track (500% width) */}
                <div
                    ref={trackRef}
                    className="flex flex-row w-[500%] h-full"
                >
                    {occasionBannerSlides.map((slide, index) => (
                        <OccasionBannerSlide
                            key={index}
                            slide={slide}
                            currentSlide={currentSlide}
                            slidesCount={occasionBannerSlides.length}
                            onDotClick={setCurrentSlide}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}
