"use client";

import Image from "next/image";
import { FiPlusCircle, FiCheck, FiInfo } from "react-icons/fi";

/**
 * ============================================================================
 * ADDITIONAL OPTION IMAGE CONFIGURATION
 * ============================================================================
 * Place or update the client's second image here when available.
 * Current default image: "/image/decoration.png" (or "/images/party.webp").
 * ============================================================================
 */
const ADDITIONAL_OPTION_IMAGE = "/image/decoration.png";

export default function AdditionalOptionCard() {
  return (
    <div className="my-10 pt-8 border-t-2 border-dashed border-[var(--accent)]/40">
      {/* Section Badge */}
      <div className="text-center max-w-xl mx-auto mb-8">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--accent)]/20 border border-[var(--accent)]/40 text-[var(--primary-dark)] text-xs font-bold uppercase tracking-wider">
          <FiPlusCircle className="w-4 h-4 text-[var(--accent)]" />
          <span>ऐच्छिक अतिरिक्त विकल्प (Optional Extra Facility)</span>
        </span>

        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--primary-dark)] mt-3">
          अतिरिक्त सुविधा (Optional Additional Facility)
        </h2>

        <div className="mt-3 inline-block px-4 py-2 rounded-xl bg-[var(--primary-dark)] text-[var(--accent-light)] font-serif font-extrabold text-2xl sm:text-3xl shadow-md border border-[var(--accent)]/40">
          + ₹10,000/- <span className="text-xs font-sans font-normal text-slate-300">(अतिरिक्त शुल्क)</span>
        </div>

        <p className="mt-3 text-xs sm:text-sm text-slate-600 font-sans max-w-md mx-auto">
          यह सुविधा ₹41,000/- की मूल गार्डन बुकिंग से अलग है। आवश्यकतानुसार इसे अतिरिक्त विकल्प के रूप में जोड़ा जा सकता है।
        </p>
      </div>

      {/* Main Card */}
      <div className="bg-gradient-to-br from-[var(--primary-dark)] to-[#091B13] rounded-3xl p-6 sm:p-8 text-white shadow-2xl border border-[var(--accent)]/30 overflow-hidden relative">
        {/* Shimmer backdrop */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--accent)]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center relative z-10">
          {/* Image Box */}
          <div className="md:col-span-5 relative h-56 sm:h-64 md:h-72 w-full rounded-2xl overflow-hidden border border-white/10 shadow-lg">
            <Image
              src={ADDITIONAL_OPTION_IMAGE}
              alt="अतिरिक्त सुविधा (₹10,000/- Extra Option)"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold bg-black/70 text-[var(--accent-light)] border border-[var(--accent)]/30 backdrop-blur-md">
              + ₹10,000/- एक्स्ट्रा
            </div>
          </div>

          {/* Details Content */}
          <div className="md:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-[var(--accent-light)] text-xs font-medium border border-white/10">
              <FiInfo className="w-4 h-4 text-[var(--accent)]" />
              <span>अलग से उपलब्ध (Separate Additional Facility)</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
              विशेष अतिरिक्त सजावट एवं सेवाएं
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed">
              मूल ₹41,000/- गार्डन बुकिंग के अतिरिक्त यदि आप विशेष सुविधाएं लेना चाहते हैं, तो ₹10,000/- अतिरिक्त शुल्क देकर इस प्रीमियम पैकेज को जोड़ा जा सकता है।
            </p>

            {/* Clear Price Separation Display */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2 text-xs sm:text-sm">
              <div className="flex justify-between items-center pb-2 border-b border-white/10">
                <span className="text-slate-300">मूल गार्डन बुकिंग मूल्य:</span>
                <span className="font-serif font-bold text-white text-base">₹41,000/-</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[var(--accent-light)] font-medium">अतिरिक्त सुविधा शुल्क:</span>
                <span className="font-serif font-bold text-[var(--accent-light)] text-base">+ ₹10,000/-</span>
              </div>
            </div>

            <div className="pt-2 text-xs text-slate-400 italic">
              * बुकिंग के समय अपनी आवश्यकतानुसार इस अतिरिक्त सुविधा का चयन करें।
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
