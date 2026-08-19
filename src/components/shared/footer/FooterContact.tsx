import React from "react";
import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";
import {
    PHONE_LINK,
    PHONE_NUMBER_TEXT,
    EMAIL_LINK,
    EMAIL_TEXT,
    ADDRESS_TEXT
} from "@/src/constants/links"

export default function FooterContact() {
    return (
        <div className="md:col-span-3 flex flex-col items-start">
            <h4 className="text-[10px] uppercase tracking-[0.25em] text-[#E6D4B8] font-bold font-sans mb-5">
                Office Location
            </h4>
            <div className="flex flex-col gap-4.5 text-xs font-sans text-slate-400 w-full">
                <div className="flex items-start gap-3 w-full">
                    <FiMapPin className="text-[#ab432c] text-base mt-0.5 flex-shrink-0" />
                    <p className="leading-relaxed">
                        {ADDRESS_TEXT}
                    </p>
                </div>
                <div className="flex flex-col gap-2 pt-2 border-t border-slate-900 w-full">
                    <a href={EMAIL_LINK} aria-label={`Send email to ${EMAIL_TEXT}`} className="flex items-center gap-2.5 hover:text-white transition-colors group">
                        <FiMail className="text-[#ab432c] group-hover:scale-110 transition-transform" />
                        <span>{EMAIL_TEXT}</span>
                    </a>
                    <a href={PHONE_LINK} aria-label={`Call concierge at ${PHONE_NUMBER_TEXT}`} className="flex items-center gap-2.5 hover:text-white transition-colors group">
                        <FiPhone className="text-[#ab432c] group-hover:scale-110 transition-transform" />
                        <span>{PHONE_NUMBER_TEXT}</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
