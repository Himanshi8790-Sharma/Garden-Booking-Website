import Link from "next/link";
import { FaInstagram, FaFacebook, FaLinkedinIn, FaPinterestP, FaXTwitter } from "react-icons/fa6";
import {
    INSTAGRAM_LINK,
    FACEBOOK_LINK,
    LINKEDIN_LINK,
    PINTEREST_LINK,
    TWITTER_LINK
} from "@/src/constants/links"

export default function FooterBrand() {
    const socialItems = [
        { icon: <FaInstagram />, href: INSTAGRAM_LINK, label: "Instagram" },
        { icon: <FaFacebook />, href: FACEBOOK_LINK, label: "Facebook" },
        { icon: <FaXTwitter />, href: TWITTER_LINK, label: "Twitter" },
        { icon: <FaLinkedinIn />, href: LINKEDIN_LINK, label: "LinkedIn" },
        { icon: <FaPinterestP />, href: PINTEREST_LINK, label: "Pinterest" }
    ];

    return (
        <div className="md:col-span-4 flex flex-col items-start gap-4">
            <Link href="/" aria-label="Jodha Holidays home" className="font-serif italic font-semibold text-white text-xl tracking-wider hover:text-white/90 transition-colors">
                Jodha Holidays
            </Link>
            <p className="text-xs text-slate-400 font-sans leading-relaxed max-w-sm">
                Tailoring luxury itineraries, authentic palace hotel bookings, and private driver excursions across Rajasthan&apos;s historic cities.
            </p>

            <div className="flex gap-2.5 mt-3">
                {socialItems.map((social, sIdx) => (
                    <a
                        key={sIdx}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full border border-slate-900 bg-slate-900/20 flex items-center justify-center text-slate-500 hover:text-[#ab432c] hover:border-[#ab432c]/40 hover:bg-[#ab432c]/5 transition-all duration-300"
                        aria-label={social.label}
                    >
                        <span className="text-[13px]">{social.icon}</span>
                    </a>
                ))}
            </div>
        </div>
    );
}
