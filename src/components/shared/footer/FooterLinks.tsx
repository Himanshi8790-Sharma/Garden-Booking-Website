import React from "react";
import Link from "next/link";

export default function FooterLinks() {
    const sitemapLinks = [
        { name: "Home", href: "/", label: "Go to Home page" },
        { name: "Garden Photos", href: "/gallery", label: "Go to Garden Photos" },
        { name: "Booking Availability", href: "/booking-details", label: "Check Booking Availability" },
        { name: "Pricing & Packages", href: "/pricing", label: "Go to Pricing page" },
        { name: "Booking Details (₹41,000)", href: "/booking-details", label: "View Garden Booking Details" },
        { name: "Additional Package (₹10,000)", href: "/additional-package", label: "View Additional Package Details" },
        // { name: "Contact Us", href: "/contact", label: "Go to Contact page" },
    ];

    return (
        <div className="md:col-span-2 flex flex-col items-start">
            <h4 className="text-[10px] uppercase tracking-[0.25em] text-[#E6D4B8] font-bold font-sans mb-5">
                Quick Links
            </h4>
            <ul className="flex flex-col gap-3 text-xs font-sans text-slate-400">
                {sitemapLinks.map((link, idx) => (
                    <li key={idx}>
                        <Link href={link.href} aria-label={link.label} className="hover:text-white transition-colors">
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
