"use client";

import Link from "next/link";
import { FiArrowRight, FiCheckCircle, FiTag } from "react-icons/fi";

export default function GardenBookingCard() {
  return (
    <section className="py-12 md:py-20 bg-surface relative overflow-hidden">
      {/* Decorative backdrop glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--accent)]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Booking Card Box */}
        <div className="relative rounded-3xl bg-gradient-to-b from-[var(--primary-dark)] to-[#081710] border-2 border-[var(--accent)]/40 p-6 sm:p-10 md:p-12 text-center text-white shadow-2xl overflow-hidden group hover:border-[var(--accent)] transition-all duration-300">
          {/* Shimmer / Accent Corner Decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[var(--accent)]/30 to-transparent rounded-bl-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[var(--accent)]/20 to-transparent rounded-tr-full pointer-events-none" />

          {/* Tag Header */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--accent)] text-[var(--primary-dark)] text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 shadow-md">
            <FiTag className="w-4 h-4" />
            <span>विशेष बुकिंग ऑफर</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[var(--background)] tracking-tight">
            गार्डन बुकिंग
          </h2>

          <p className="mt-3 text-base sm:text-lg text-slate-300 font-sans max-w-xl mx-auto">
            गार्डन बुकिंग केवल <span className="text-[var(--accent-light)] font-semibold">₹41,000/-</span> में उपलब्ध है। शादी, सगाई, पार्टी एवं विशेष अवसरों के लिए बेहतरीन स्थान।
          </p>

          {/* Prominent Price Display */}
          <div className="my-8 py-6 px-4 sm:px-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md max-w-md mx-auto flex flex-col items-center justify-center gap-1 shadow-inner">
            <span className="text-xs sm:text-sm uppercase tracking-widest text-[var(--accent-light)] font-medium">
              गार्डन बुकिंग केवल
            </span>
            <div className="text-4xl sm:text-5xl md:text-6xl font-serif font-extrabold text-[var(--accent-light)] drop-shadow-md tracking-tight">
              ₹41,000/-
            </div>
            <span className="text-xs text-slate-400 mt-1">
              (सभी सुविधाओं सहित बुकिंग शुल्क)
            </span>
          </div>

          {/* Quick Feature Highlights */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-300 mb-8">
            <div className="flex items-center gap-1.5">
              <FiCheckCircle className="w-4 h-4 text-[var(--accent)]" />
              <span>विशाल गार्डन लॉन</span>
            </div>
            <div className="flex items-center gap-1.5">
              <FiCheckCircle className="w-4 h-4 text-[var(--accent)]" />
              <span>स्विमिंग पूल सुविधा</span>
            </div>
            <div className="flex items-center gap-1.5">
              <FiCheckCircle className="w-4 h-4 text-[var(--accent)]" />
              <span>पार्किंग एवं सुरक्षा</span>
            </div>
          </div>

          {/* CTA Navigation Button to /booking-details */}
          <div className="pt-2">
            <Link
              href="/booking-details"
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] hover:from-[var(--accent-light)] hover:to-[var(--accent)] text-[var(--primary-dark)] font-bold text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[var(--accent)]/50"
            >
              <span>बुकिंग की पूरी जानकारी देखें</span>
              <FiArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
