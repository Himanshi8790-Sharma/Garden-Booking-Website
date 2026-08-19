"use client";
import { PHONE_LINK } from "@/src/constants/links";

interface Props {
    whatsappLink: string;
}

export default function SlideActions({ whatsappLink }: Props) {
    return (
        <div className="absolute bottom-4 right-4 md:bottom-6 md:right-8 z-20 flex gap-2 md:gap-3">
            {/* Speak Voice Line (tel:) */}
            <a
                href={PHONE_LINK}
                aria-label="Speak - Call concierge regarding this offer"
                className="px-4 md:px-5 py-1.5 md:py-2 rounded-full border border-white/40 text-white font-sans text-[10px] md:text-xs uppercase tracking-wider font-semibold bg-black/10 backdrop-blur-sm hover:bg-white hover:text-slate-900 transition-all duration-300 cursor-pointer"
            >
                Speak
            </a>
            {/* Details Inquiry Line (WhatsApp) */}
            <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Details - Inquire about this package on WhatsApp"
                className="px-4 md:px-5 py-1.5 md:py-2 rounded-full bg-[#ab432c] text-white font-sans text-[10px] md:text-xs uppercase tracking-wider font-semibold hover:bg-[#a64831] transition-all duration-300 shadow-md cursor-pointer"
            >
                Details
            </a>
        </div>
    );
}
