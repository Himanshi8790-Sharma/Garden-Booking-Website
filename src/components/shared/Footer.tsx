"use client";

import React from "react";
import Link from "next/link";
import FooterCTA from "./footer/FooterCTA";
import FooterBrand from "./footer/FooterBrand";
import FooterLinks from "./footer/FooterLinks";
import FooterContact from "./footer/FooterContact";
import FooterMap from "./footer/FooterMap";

export default function Footer() {
    return (
        <footer className="relative w-full bg-[#080B11] text-slate-400 pt-20 pb-12 px-6 md:px-12 flex justify-center border-t border-[#0d121c] overflow-hidden">
            {/* Top Accent Gradient Line */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ab432c]/30 to-transparent" />

            {/* Soft Ambient Corner Glow */}
            <div className="absolute -bottom-36 -right-36 w-80 h-80 bg-[#ab432c]/4 rounded-full blur-[90px] pointer-events-none" />

            <div className="w-full max-w-7xl flex flex-col gap-16 relative z-10">
                
                {/* Row 1: Brand Statement & Primary CTA */}
                <FooterCTA />

                {/* Row 2: Informational Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start">
                    <FooterBrand />
                    <FooterLinks />
                    <FooterContact />
                    <FooterMap />
                </div>

                {/* Row 3: Copyright Bar */}
                <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-sans text-slate-400 uppercase tracking-widest">
                    <span>
                        &copy; {new Date().getFullYear()} Jodha Holidays. All rights reserved.
                    </span>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-slate-400 transition-colors">Terms & Conditions</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}
