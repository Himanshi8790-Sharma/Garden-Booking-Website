import { RefObject } from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

interface Props {
    titleRef: RefObject<HTMLHeadingElement | null>;
    subtitleRef: RefObject<HTMLParagraphElement | null>;
    ctaRef: RefObject<HTMLDivElement | null>;
}

export default function HeroContent({ titleRef, subtitleRef, ctaRef }: Props) {
    return (
        <div className="flex flex-col items-start max-w-[85%] md:max-w-3xl">
           <h1
    ref={titleRef}
    className="text-[2.25rem] sm:text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[6.25rem] font-semibold text-white tracking-tight leading-[1.05] font-sans"
    style={{ opacity: 0 }}
>
    Celebrate{" "}
    <span className="font-serif italic font-light text-[#f08a70]">
        Beautiful
    </span>{" "}
    <br />
    Moments
</h1>
            <p
                ref={subtitleRef}
                className="text-white max-w-lg mt-4 leading-relaxed font-light font-sans"
                style={{ opacity: 0 }}
            >
               Celebrate weddings, birthdays, anniversaries and special moments in our beautiful garden venue.
            </p>

            {/* Dual CTA Links */}
            <div
                ref={ctaRef}
                className="mt-8 flex flex-wrap items-center gap-4"
                style={{ opacity: 0 }}
            >
                <Link
                    href="/contact"
                    className="px-6 py-3.5 bg-[#ab432c] text-white font-semibold tracking-wider uppercase text-xs rounded-full transition-transform hover:scale-105 active:scale-95 duration-300 cursor-pointer font-sans flex items-center gap-2"
                >
                    <span>Book Your Garden</span>
                    <FiArrowRight className="text-sm" />
                </Link>
                <Link
                    href="/tour-packages"
                    className="px-6 py-3.5 bg-transparent border border-white/30 text-white font-semibold tracking-wider uppercase text-xs rounded-full hover:bg-white/10 hover:border-white/45 transition-[background-color,border-color,transform] active:scale-95 duration-300 cursor-pointer font-sans"
                >
                    <span>Explore Our Venue</span>
                </Link>
            </div>
        </div>
    );
}
