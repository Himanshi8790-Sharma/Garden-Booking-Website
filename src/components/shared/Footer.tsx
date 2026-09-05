// "use client";

// import React from "react";
// import Link from "next/link";
// import FooterCTA from "./footer/FooterCTA";
// import FooterBrand from "./footer/FooterBrand";
// import FooterLinks from "./footer/FooterLinks";
// import FooterContact from "./footer/FooterContact";
// import FooterMap from "./footer/FooterMap";
// import FooterLocationQR from "./footer/FooterLocationQR";

// export default function Footer() {
//     return (
//         <footer className="relative w-full bg-[#080B11] text-slate-400 pt-14 md:pt-20 pb-24 sm:pb-16 md:pb-12 px-5 sm:px-6 md:px-12 flex justify-center border-t border-[#0d121c] overflow-hidden">
//             {/* Top Accent Gradient Line */}
//             <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ab432c]/30 to-transparent" />

//             {/* Soft Ambient Corner Glow */}
//             <div className="absolute -bottom-36 -right-36 w-80 h-80 bg-[#ab432c]/4 rounded-full blur-[90px] pointer-events-none" />

//             <div className="w-full max-w-7xl flex flex-col gap-12 md:gap-16 relative z-10">

//                 {/* Row 1: Brand Statement & Primary CTA */}
//                 {/* <FooterCTA /> */}

//                 {/* Row 2: Informational Grid */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-10 md:gap-12 lg:gap-16 items-start">
//                     {/* <FooterBrand /> */}
//                     {/* <FooterLinks /> */}
//                     <FooterContact />
//                     <FooterMap />
//                     <FooterLocationQR />
//                 </div>

//                 {/* Row 3: Copyright Bar */}
//                 <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-sans text-slate-400 uppercase tracking-widest text-center md:text-left">
//                     <span>
//                         &copy; {new Date().getFullYear()} Helping Garden Club. All rights reserved.
//                     </span>
//                     <div className="flex gap-6">
//                         <Link href="/privacy" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
//                         <Link href="/terms" className="hover:text-slate-400 transition-colors">Terms & Conditions</Link>
//                     </div>
//                 </div>

//             </div>
//         </footer>
//     );
// }
"use client";

import React from "react";
import Link from "next/link";
import FooterContact from "./footer/FooterContact";
import FooterMap from "./footer/FooterMap";
import FooterLocationQR from "./footer/FooterLocationQR";

export default function Footer() {
    return (
        <footer className="relative w-full bg-[#080B11] text-slate-400 pt-14 sm:pt-16 md:pt-20 pb-24 sm:pb-16 md:pb-12 px-5 sm:px-6 md:px-10 lg:px-12 flex justify-center border-t border-[#0d121c] overflow-hidden">

            {/* Top Accent Gradient Line */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#ab432c]/30 to-transparent" />

            {/* Soft Ambient Corner Glow */}
            <div className="absolute -bottom-36 -right-36 w-80 h-80 bg-[#ab432c]/5 rounded-full blur-[90px] pointer-events-none" />

            <div className="w-full max-w-7xl flex flex-col gap-12 sm:gap-14 md:gap-16 relative z-10">

                {/* Footer Information */}
                <div className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    lg:grid-cols-3
                    gap-10
                    sm:gap-8
                    md:gap-10
                    lg:gap-12
                    items-start
                ">

                    {/* Contact */}
                    <div className="w-full">
                        <FooterContact />
                    </div>

                    {/* Map */}
                    <div className="w-full">
                        <FooterMap />
                    </div>

                    {/* Location QR */}
                    <div className="w-full flex justify-start sm:justify-center lg:justify-end">
                        <FooterLocationQR />
                    </div>

                </div>

                {/* Copyright Bar */}
                <div className="
                    border-t
                    border-slate-900
                    pt-7
                    sm:pt-8
                    flex
                    flex-col
                    md:flex-row
                    justify-between
                    items-center
                    gap-4
                    text-[9px]
                    sm:text-[10px]
                    font-sans
                    text-slate-400
                    uppercase
                    tracking-widest
                    text-center
                    md:text-left
                ">

                    <span>
                        &copy; {new Date().getFullYear()} Helping Garden Club. All rights reserved.
                    </span>

                    <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 sm:gap-x-6">
                        <Link
                            href="/privacy"
                            className="hover:text-white transition-colors duration-300"
                        >
                            Privacy Policy
                        </Link>

                        <Link
                            href="/terms"
                            className="hover:text-white transition-colors duration-300"
                        >
                            Terms & Conditions
                        </Link>
                    </div>

                </div>

            </div>
        </footer>
    );
}