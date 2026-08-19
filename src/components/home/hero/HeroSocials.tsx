import { RefObject } from "react";
import Link from "next/link";
import { FaWhatsapp, FaPhone, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa6";

import { PHONE_LINK, WHATSAPP_HERO_LINK, INSTAGRAM_LINK,FACEBOOK_LINK,YOUTUBE_LINK, } from "@/src/constants/links";

interface Props {
    socialIconsRef: RefObject<HTMLDivElement | null>;
}

export default function HeroSocials({ socialIconsRef }: Props) {
    return (
        <div
            ref={socialIconsRef}
            className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4"
            style={{ opacity: 0 }}
        >
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#f08a70] font-bold font-sans select-none flex items-center gap-2">
                <span>⚡ Reach Out & Book Now</span>
            </span>
            <div className="hidden sm:block w-[1px] h-4 bg-white/25" />

            <div className="flex flex-wrap items-center gap-3">
                {/* WhatsApp booking link */}
                <Link
                    href={WHATSAPP_HERO_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Inquire on WhatsApp"
                    className="w-10 h-10 rounded-full bg-[#25D366]/15 border border-[#25D366]/40 text-[#25D366] flex items-center justify-center cursor-pointer hover:bg-[#25D366] hover:text-white transition-all duration-300 relative group"
                >
                    <FaWhatsapp className="w-5 h-5" />
                    {/* Tooltip */}
                    <div className="absolute bottom-full mb-2.5 left-1/2 -translate-x-1/2 px-2.5 py-1.5 bg-[#1c355e] text-white text-[9px] font-bold uppercase tracking-wider rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none font-sans z-20">
                        Inquire on WhatsApp
                    </div>
                </Link>

                {/* Call Booking Specialist link */}
                <Link
                    href={PHONE_LINK}
                    aria-label="Call Booking Specialist"
                    className="w-10 h-10 rounded-full bg-[#ab432c]/15 border border-[#ab432c]/40 text-[#f08a70] flex items-center justify-center cursor-pointer hover:bg-[#ab432c] hover:text-white transition-all duration-300 relative group"
                >
                    <FaPhone className="w-4 h-4" />
                    {/* Tooltip */}
                    <div className="absolute bottom-full mb-2.5 left-1/2 -translate-x-1/2 px-2.5 py-1.5 bg-[#1c355e] text-white text-[9px] font-bold uppercase tracking-wider rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none font-sans z-20">
                        Call Specialist
                    </div>
                </Link>

                {/* Instagram profile/DM link */}
                <Link
                    href={INSTAGRAM_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram DM"
                    className="w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white/85 flex items-center justify-center cursor-pointer hover:bg-white hover:text-[#1c355e] hover:border-white transition-all duration-300 relative group"
                >
                    <FaInstagram className="w-4 h-4" />
                    {/* Tooltip */}
                    <div className="absolute bottom-full mb-2.5 left-1/2 -translate-x-1/2 px-2.5 py-1.5 bg-[#1c355e] text-white text-[9px] font-bold uppercase tracking-wider rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none font-sans z-20">
                        Instagram DM
                    </div>
                </Link>

                {/* Facebook Messenger link */}
                <Link
                    href={FACEBOOK_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook Messenger"
                    className="w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white/85 flex items-center justify-center cursor-pointer hover:bg-white hover:text-[#1c355e] hover:border-white transition-all duration-300 relative group"
                >
                    <FaFacebook className="w-4 h-4" />
                    {/* Tooltip */}
                    <div className="absolute bottom-full mb-2.5 left-1/2 -translate-x-1/2 px-2.5 py-1.5 bg-[#1c355e] text-white text-[9px] font-bold uppercase tracking-wider rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none font-sans z-20">
                        Facebook Message
                    </div>
                </Link>

                {/* YouTube channel link */}
                <Link
                    href={YOUTUBE_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube Channel"
                    className="w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white/85 flex items-center justify-center cursor-pointer hover:bg-white hover:text-[#1c355e] hover:border-white transition-all duration-300 relative group"
                >
                    <FaYoutube className="w-4 h-4" />
                    {/* Tooltip */}
                    <div className="absolute bottom-full mb-2.5 left-1/2 -translate-x-1/2 px-2.5 py-1.5 bg-[#1c355e] text-white text-[9px] font-bold uppercase tracking-wider rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none font-sans z-20">
                        Watch Tours
                    </div>
                </Link>
            </div>
        </div>
    );
}
