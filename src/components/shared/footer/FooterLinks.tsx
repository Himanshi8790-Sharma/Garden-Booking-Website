import React from "react";
import Link from "next/link";

export default function FooterLinks() {
    const sitemapLinks = [
        { name: "Home", href: "/", label: "Go to Home page" },
        { name: "About Us", href: "/about", label: "Go to About page" },
        { name: "Tour Packages", href: "/tour-packages", label: "Go to Tour Packages page" },
        { name: "Gallery", href: "/gallery", label: "Go to Gallery page" },
        { name: "Testimonials", href: "/testimonials", label: "Go to Testimonials page" },
        { name: "Contact Us", href: "/contact", label: "Go to Contact page" },
        { name: "FAQs", href: "/faqs", label: "Go to FAQs page" },
    ];

    return (
        <div className="md:col-span-2 flex flex-col items-start">
            <h4 className="text-[10px] uppercase tracking-[0.25em] text-[#E6D4B8] font-bold font-sans mb-5">
                Sitemap
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
