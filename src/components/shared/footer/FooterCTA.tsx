import { FaWhatsapp } from "react-icons/fa6";
import { WHATSAPP_FLOATING_LINK } from "@/src/constants/links";

export default function FooterCTA() {
    return (
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 pb-12 border-b border-slate-900">
            <div className="max-w-2xl flex flex-col gap-4">
                <div>
                    <h3 className="font-serif italic font-medium text-3xl md:text-4xl text-[#E6D4B8] leading-tight">
                        Make Your Celebration Special.
                    </h3>

                    <p className="text-xs text-slate-400 font-sans mt-2 leading-relaxed">
                        Book our garden for weddings, birthdays, anniversaries,
                        pool parties and special celebrations.
                    </p>
                </div>
            </div>

            <a
                href={WHATSAPP_FLOATING_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#ab432c] hover:bg-[#a64831] text-white px-6 py-3.5 rounded-full font-sans text-xs font-semibold tracking-wider uppercase transition-all duration-300 hover:scale-[1.03] shadow-md hover:shadow-lg cursor-pointer"
            >
                <FaWhatsapp className="text-base" />
                <span>Book on WhatsApp</span>
            </a>
        </div>
    );
}