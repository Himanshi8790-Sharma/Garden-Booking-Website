
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

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const video = videoRef.current;
        if (!video) return;

        video.src = "/images/wedding.mp4";
        video.load();

        const handleCanPlay = () => {
            onVideoReady();

            if (!document.hidden) {
                video.play().catch((error) => {
                    console.log("Video autoplay failed:", error);
                });
            }
        };

        video.addEventListener("canplay", handleCanPlay);

        const section = video.closest("section");

        let trigger: ScrollTrigger | null = null;

        if (section) {
            trigger = ScrollTrigger.create({
                trigger: section,
                start: "top bottom",
                end: "bottom top",

                onEnter: () => {
                    video.play().catch(() => {});
                },

                onEnterBack: () => {
                    video.play().catch(() => {});
                },

                onLeave: () => {
                    video.pause();
                },

                onLeaveBack: () => {
                    video.pause();
                },
            });
        }

        return () => {
            video.pause();
            video.removeEventListener("canplay", handleCanPlay);
            trigger?.kill();
        };
    }, [onVideoReady]);

    return (
        <>
            <Image
                src="/images/HeroGarden.jpg"
                alt="Jodha Holidays Hero Background"
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
                    transition: "opacity 0.5s ease-in-out",
                }}
            />
        </>
    );
}