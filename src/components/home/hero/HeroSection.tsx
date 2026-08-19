"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroSocials from "./HeroSocials";

export default function HeroSection() {
    const [videoReady, setVideoReady] = useState(false);

    // Refs for GSAP animation selectors
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const socialIconsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
    console.log("GSAP effect running");
    console.log("title:", titleRef.current);
    console.log("subtitle:", subtitleRef.current);
    console.log("cta:", ctaRef.current);
    console.log("social:", socialIconsRef.current);

    const ctx = gsap.context(() => {
        // ...
    });

    return () => ctx.revert();
}, []);

    useEffect(() => {
        // GSAP Animations setup
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

            // 2. Title slides up and fades in
            if (titleRef.current) {
                tl.fromTo(
                    titleRef.current,
                    { y: 40, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1.2 }
                );
            }

            // 3. Subtitle slides up and fades in
            if (subtitleRef.current) {
                tl.fromTo(
                    subtitleRef.current,
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8 },
                    "-=0.9"
                );
            }

            // 4. CTA buttons slide up
            if (ctaRef.current) {
                tl.fromTo(
                    ctaRef.current,
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8 },
                    "-=0.7"
                );
            }

            // 6. Integrated Social Row fades in and slides up
            if (socialIconsRef.current) {
                tl.fromTo(
                    socialIconsRef.current,
                    { y: 15, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8 },
                    "-=0.8"
                );
            }
        });

        return () => ctx.revert();
    }, []);

    return (
        <section className="relative w-full h-screen max-h-[900px] bg-black overflow-hidden flex flex-col justify-between">
            {/* Subtle dark overlay over the video background (15% opacity, z-15 to stay on top of the z-10 video) */}
            <div className="absolute inset-0 bg-black/25 z-[15] pointer-events-none" />

            {/* Background elements */}
            <HeroBackground
                onVideoReady={() => setVideoReady(true)}
                videoReady={videoReady}
            />

            {/* Bottom Content Area */}
            <div className="relative z-20 w-full px-6 pb-8 md:px-12 md:pb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8 mt-auto">

                {/* Heading, descriptions, CTAs and follow socials row */}
                <div className="flex flex-col items-start max-w-[85%] md:max-w-3xl">
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
