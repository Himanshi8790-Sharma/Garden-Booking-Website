import { RefObject } from "react";

interface Props {
    headerRef: RefObject<HTMLDivElement | null>;
}

export default function HeroHeader({ headerRef }: Props) {
    return (
        <header
            ref={headerRef}
            className="relative z-10 w-full flex justify-between items-center px-6 py-6 md:px-12 md:py-8"
            style={{ opacity: 0 }} // Prevent flash before GSAP runs
        >
            {/* Left Badge: Royal Tour */}
            <div className="flex items-center gap-2 bg-white/10 border border-white/20 text-white px-4 py-1.5 rounded-full text-[10px] font-semibold tracking-widest uppercase select-none font-sans text-shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ab432c] animate-pulse" />
                <span>Royal Tour</span>
            </div>
        </header>
    );
}
