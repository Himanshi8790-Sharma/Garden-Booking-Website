"use client";

import React from "react";
import Image from "next/image";

export default function FooterLocationQR() {
    return (
        <div className="flex flex-col items-start w-full">
            <h4 className="text-[10px] uppercase tracking-[0.25em] text-[#E6D4B8] font-bold font-sans mb-5">
                Find Us
            </h4>

            <div className="flex flex-col items-start">
                {/* QR Code */}
                <div
                    className="
                        w-[150px] h-[150px]
                        sm:w-[130px] sm:h-[130px]
                        md:w-[105px] md:h-[105px]
                        rounded-xl
                        overflow-hidden
                        bg-white
                        p-2
                        border border-slate-800
                        shadow-sm
                    "
                >
                    <Image
                        src="/image/garden-locationqr.png"
                        alt="QR code to open Helping Garden Club location in Google Maps"
                        width={150}
                        height={150}
                        className="w-full h-full object-contain"
                    />
                </div>

                <p className="mt-3 text-[10px] leading-relaxed text-slate-500 font-sans max-w-[170px] sm:max-w-[150px]">
                    Scan to open our location in Google Maps.
                </p>
            </div>
        </div>
    );
}

