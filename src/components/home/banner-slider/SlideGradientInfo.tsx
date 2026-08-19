"use client";
import { SlideItem } from "@/src/constants/occasionBanner";

interface Props {
    slide: SlideItem;
    currentSlide: number;
    slidesCount: number;
    onDotClick: (idx: number) => void;
}

export default function SlideGradientInfo({
    slide,
    currentSlide,
    slidesCount,
    onDotClick
}: Props) {
    const dotsArray = Array.from({ length: slidesCount });

    return (
        <>
            {/* Mobile Gradient Info Area */}
            <div
                className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#9b1c55] via-[#801b50] to-[#51136b] flex flex-col justify-center pl-6 pr-[50%] md:hidden z-10"
                style={{ clipPath: "polygon(0 0, 65% 0, 55% 100%, 0 100%)" }}
            >
                <div className="flex items-center gap-1.5 mb-1">
                    <span className="text-lg">{slide.icon}</span>
                    <h2 className="text-white text-sm font-semibold tracking-wide font-serif italic">
                        {slide.title}
                    </h2>
                </div>
                <div className="h-[1px] bg-white/20 my-1.5 w-[85%]" />
                <p className="text-white/95 text-[10px] font-medium tracking-wide">
                    {slide.destinations.join(" • ")}
                </p>
                <p className="text-amber-300 text-[10px] font-bold tracking-wide mt-1.5 uppercase">
                    {slide.promo}
                </p>

                {/* Mobile Pagination Dots */}
                <div className="flex gap-1.5 mt-3">
                    {dotsArray.map((_, dotIdx) => (
                        <button
                            key={dotIdx}
                            onClick={(e) => {
                                e.stopPropagation();
                                onDotClick(dotIdx);
                            }}
                            className="w-6 h-6 flex items-center justify-center cursor-pointer focus:outline-none bg-transparent border-0"
                            aria-label={`Go to slide ${dotIdx + 1}`}
                        >
                            <span
                                className={`w-1.5 h-1.5 rounded-full border border-white transition-all duration-300 ${currentSlide === dotIdx ? "bg-white scale-110" : "bg-transparent opacity-40"
                                    }`}
                            />
                        </button>
                    ))}
                </div>
            </div>

            {/* Desktop Gradient Info Area */}
            <div
                className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#9b1c55] via-[#801b50] to-[#51136b] flex flex-col justify-center pl-12 pr-[72%] hidden md:flex z-10"
                style={{ clipPath: "polygon(0 0, 42% 0, 32% 100%, 0 100%)" }}
            >
                <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{slide.icon}</span>
                    <h2 className="text-white text-xl lg:text-2xl font-semibold tracking-wide font-serif italic">
                        {slide.title}
                    </h2>
                </div>
                <div className="h-[1px] bg-white/20 my-2.5 w-[70%]" />
                <p className="text-white/95 text-xs lg:text-sm font-medium tracking-wide">
                    {slide.destinations.join(" • ")}
                </p>
                <p className="text-amber-300 text-xs lg:text-sm font-bold tracking-wide mt-2 uppercase">
                    {slide.promo}
                </p>

                {/* Desktop Pagination Dots */}
                <div className="flex gap-2 mt-4">
                    {dotsArray.map((_, dotIdx) => (
                        <button
                            key={dotIdx}
                            onClick={(e) => {
                                e.stopPropagation();
                                onDotClick(dotIdx);
                            }}
                            className="w-7 h-7 flex items-center justify-center cursor-pointer focus:outline-none bg-transparent border-0"
                            aria-label={`Go to slide ${dotIdx + 1}`}
                        >
                            <span
                                className={`w-2 h-2 rounded-full border border-white transition-all duration-300 ${currentSlide === dotIdx ? "bg-white scale-110" : "bg-transparent opacity-40 hover:opacity-100"
                                    }`}
                            />
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
}
