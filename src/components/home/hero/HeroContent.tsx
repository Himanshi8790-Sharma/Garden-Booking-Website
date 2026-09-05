import { RefObject } from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

interface Props {
    titleRef: RefObject<HTMLHeadingElement | null>;
    subtitleRef: RefObject<HTMLParagraphElement | null>;
    ctaRef: RefObject<HTMLDivElement | null>;
}

export default function HeroContent({
    titleRef,
    subtitleRef,
    ctaRef,
}: Props) {
    return (
        <div className="w-full max-w-[320px] sm:max-w-[520px] md:max-w-3xl">

            {/* Heading */}
            <h1
                ref={titleRef}
                className="
                    text-[2.35rem]
                    leading-[1.05]
                    sm:text-5xl
                    sm:leading-[1.05]
                    md:text-7xl
                    lg:text-[5.5rem]
                    xl:text-[6.25rem]
                    font-semibold
                    text-white
                    tracking-[-0.03em]
                    font-sans
                "
                style={{ opacity: 0 }}
            >
                Celebrate{" "}
                <span className="font-serif italic font-light text-[#f08a70]">
                    Beautiful
                </span>{" "}
                <br className="hidden sm:block" />
                Moments
            </h1>

            {/* Description */}
            <p
                ref={subtitleRef}
                className="
                    mt-4
                    sm:mt-5
                    text-[13px]
                    sm:text-sm
                    md:text-base
                    leading-[1.6]
                    text-slate-200
                    font-light
                    font-sans
                    max-w-[300px]
                    sm:max-w-lg
                "
                style={{ opacity: 0 }}
            >
                Celebrate weddings, birthdays, anniversaries and special
                moments in our beautiful garden venue.
            </p>

            {/* CTA Buttons */}
            <div
                ref={ctaRef}
                className="
                    mt-6
                    sm:mt-8
                    flex
                    flex-col
                    sm:flex-row
                    items-stretch
                    sm:items-center
                    gap-3
                    sm:gap-4
                    w-full
                    sm:w-auto
                "
                style={{ opacity: 0 }}
            >
                {/* Book Button */}
                <Link
                    href="/booking-details"
                    className="
                        w-full
                        sm:w-auto
                        px-5
                        sm:px-6
                        py-3.5
                        sm:py-3.5
                        bg-[#ab432c]
                        text-white
                        font-semibold
                        tracking-[0.08em]
                        uppercase
                        text-[11px]
                        sm:text-xs
                        rounded-full
                        transition-all
                        hover:scale-105
                        hover:bg-[#b94d34]
                        active:scale-95
                        duration-300
                        cursor-pointer
                        font-sans
                        flex
                        items-center
                        justify-center
                        gap-2
                        shadow-lg
                    "
                >
                    <span>Book Your Garden</span>
                    <FiArrowRight className="text-sm shrink-0" />
                </Link>

                {/* Explore Button */}
                <Link
                    href="/additional-package"
                    className="
                        w-full
                        sm:w-auto
                        px-5
                        sm:px-6
                        py-3.5
                        sm:py-3.5
                        bg-transparent
                        border
                        border-white/35
                        text-white
                        font-semibold
                        tracking-[0.08em]
                        uppercase
                        text-[11px]
                        sm:text-xs
                        rounded-full
                        hover:bg-white/10
                        hover:border-white/50
                        transition-all
                        active:scale-95
                        duration-300
                        cursor-pointer
                        font-sans
                        flex
                        items-center
                        justify-center
                    "
                >
                    Explore Packages
                </Link>
            </div>
        </div>
    );
}