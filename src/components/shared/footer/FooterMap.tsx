import React from "react";
import { MAP_IFRAME_URL } from "@/src/constants/links"

export default function FooterMap() {
    return (
        <div className="md:col-span-2 flex flex-col items-start w-full">
            <h4 className="text-[10px] uppercase tracking-[0.25em] text-[#E6D4B8] font-bold font-sans mb-5">
                Locate Us
            </h4>
            <div className="w-full rounded-2xl overflow-hidden border border-slate-900 shadow-sm h-[130px] hover:border-slate-800 transition-colors duration-300">
                <iframe
                    src={MAP_IFRAME_URL}
                    title="Google Maps showing office location of Jodha Holidays in Jaipur, Rajasthan, India"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                />
            </div>
        </div>
    );
}
