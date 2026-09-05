import { Metadata } from "next";
import Link from "next/link";
import { FiArrowLeft, FiPhone } from "react-icons/fi";
import BookingTermsList from "../../components/booking/BookingTermsList";

export const metadata: Metadata = {
  title: "गार्डन बुकिंग केवल ₹41,000/- | Helping Garden Club",
  description:
    "Helping Garden Club जयपुर में गार्डन बुकिंग केवल ₹41,000/-। सभी 11 नियम, सुविधाएं एवं ₹10,000/- अतिरिक्त विकल्प की पूरी जानकारी।",
};

export default function BookingDetailsPage() {
  return (
    <main className="w-full min-h-screen bg-surface py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Top Back Navigation Link */}
        <div className="mb-6 sm:mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary)] text-white hover:bg-[var(--primary-dark)] transition-all text-xs sm:text-sm font-medium shadow-md group"
          >
            <FiArrowLeft className="w-4 h-4 text-[var(--accent)] group-hover:-translate-x-1 transition-transform" />
            <span>← वापस होम पर जाएं</span>
          </Link>
        </div>

        {/* Hero Header Section */}
        <div className="bg-gradient-to-b from-[var(--primary-dark)] to-[#0B1E16] rounded-3xl p-6 sm:p-10 text-center text-white shadow-2xl border border-[var(--accent)]/30 mb-8 sm:mb-12 relative overflow-hidden">
          {/* Subtle gold glow backdrop */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[var(--accent)]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <span className="px-3.5 py-1.5 rounded-full bg-[var(--accent)]/20 border border-[var(--accent)]/40 text-[var(--accent-light)] text-xs font-bold uppercase tracking-wider">
              Helping Garden Club • जयपुर
            </span>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold text-[var(--background)] mt-4 tracking-tight leading-tight">
              गार्डन बुकिंग केवल 
            </h1>

            {/* Prominent Price Badge */}
            <div className="my-6 inline-flex flex-col items-center justify-center px-8 py-4 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md shadow-xl">
              <span className="text-xs uppercase tracking-widest text-[var(--accent-light)] font-semibold">
                 गार्डन बुकिंग शुल्क
              </span>
              <div className="text-4xl sm:text-5xl md:text-6xl font-serif font-black text-[var(--accent-light)] drop-shadow-md tracking-tight my-1">
                ₹41,000/-
              </div>
             
            </div>

            <p className="text-sm sm:text-base text-slate-300 font-sans max-w-xl mx-auto">
              हमारे गार्डन में शादी, सगाई, जन्मदिन एवं सभी पारिवारिक उत्सवों के लिए संपूर्ण सुविधाएं उपलब्ध हैं। नीचे दिए गए 11 बिंदुओं में बुकिंग की पूरी जानकारी देखें।
            </p>
          </div>
        </div>

        {/* 11 Numbered Booking Conditions Section */}
        <BookingTermsList />

        {/* Summary Price Comparison Box */}
        <div className="my-8 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[var(--primary-dark)] to-[#091B13] border border-[var(--accent)]/30 shadow-2xl text-center space-y-4 text-white relative overflow-hidden">

          {/* Soft Background Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--accent)]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">

            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
              मूल्य विवरण एवं बुकिंग (Pricing Summary)
            </h3>

            <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">

              {/* Base Price */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-xs text-slate-300 font-medium block">
                  गार्डन बुकिंग (Base)
                </span>

                <span className="text-2xl font-serif font-bold text-white">
                  ₹41,000/-
                </span>

                <span className="text-xs text-emerald-300 font-medium block mt-1">
                  ✓ आवश्यक मूल बुकिंग
                </span>
              </div>

              {/* Optional Facility */}
              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-400/20">
                <span className="text-xs text-amber-200 font-medium block">
                  बर्तन सुविधा (Option)
                </span>

                <span className="text-2xl font-serif font-bold text-[var(--accent-light)]">
                  + ₹10,000/-
                </span>

          
              </div>

              {/* Additional Charges */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-xs text-slate-300 font-medium block">
                  अतिरिक्त शुल्क
                </span>

                <span className="text-2xl font-serif font-bold text-white">
                  + ₹1,500/-
                </span>

                <span className="text-xs text-slate-400 font-medium block mt-1">
                  + अतिरिक्त शुल्क
                </span>
              </div>

            </div>

            {/* Total */}
            <div className="pt-2">
              <span className="text-xs uppercase tracking-widest text-slate-400 font-medium">
                कुल राशि (Total)
              </span>

              <div className="text-3xl sm:text-4xl font-serif font-bold text-[var(--accent-light)] mt-1">
                ₹52,500/-
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto pt-2">
              * ₹41,000/- गार्डन बुकिंग शुल्क है। ₹10,000/- बर्तन सुविधा का
               शुल्क है और ₹1,500/- सफाई शुल्क है। सभी शुल्क
              बुकिंग के समय स्पष्ट किए जाएंगे।
            </p>

            {/* Call Button */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+919352729250"
                className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-full bg-[var(--accent)] hover:bg-[var(--accent)]/90 text-[var(--primary-dark)] font-bold text-base shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <FiPhone className="w-5 h-5" />
                <span>बुकिंग के लिए कॉल करें (+91 93527 29250)</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </main>
  );
}
