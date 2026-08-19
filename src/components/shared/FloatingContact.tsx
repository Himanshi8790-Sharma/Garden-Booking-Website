"use client";

import { FaWhatsapp, FaPhone } from "react-icons/fa6";
import { PHONE_LINK, WHATSAPP_FLOATING_LINK } from "@/src/constants/links"

export default function FloatingContact() {
    return (
        <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex flex-col gap-4">
            {/* Phone Calling Button */}
            <a
                href={PHONE_LINK}
                className="group relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#ab432c] text-white flex items-center justify-center transition-transform hover:scale-110 active:scale-95 duration-300 cursor-pointer"
                aria-label="Call Specialist"
            >
                {/* Visual pulse ring (no shadow/blur) */}
                <span className="absolute inset-0 rounded-full bg-[#ab432c] animate-ping opacity-30 pointer-events-none"></span>
                <FaPhone className="relative z-10 w-5 h-5 md:w-6 md:h-6" />
                
                {/* Tooltip (Solid bg, no shadow/blur) */}
                <div className="absolute right-14 md:right-16 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-[#1c355e] text-white text-xs font-semibold rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none font-sans uppercase tracking-wider">
                    Call Specialist
                </div>
            </a>

            {/* WhatsApp Chat Button */}
            <a
                href={WHATSAPP_FLOATING_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center transition-transform hover:scale-110 active:scale-95 duration-300 cursor-pointer"
                aria-label="Chat on WhatsApp"
            >
                {/* Visual pulse ring (no shadow/blur) */}
                <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 pointer-events-none"></span>
                <FaWhatsapp className="relative z-10 w-6 h-6 md:w-7 md:h-7" />

                {/* Tooltip (Solid bg, no shadow/blur) */}
                <div className="absolute right-14 md:right-16 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-[#1c355e] text-white text-xs font-semibold rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none font-sans uppercase tracking-wider">
                    Chat on WhatsApp
                </div>
            </a>
        </div>
    );
}
