import { Metadata } from "next";
import Link from "next/link";
import { FiArrowLeft, FiPhone, FiCheckCircle } from "react-icons/fi";
import BookingTermsList from "../../components/booking/BookingTermsList";
import AdditionalOptionCard from "../../components/booking/AdditionalOptionCard";

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
              गार्डन बुकिंग केवल ₹41,000/-
            </h1>

            {/* Prominent Price Badge */}
            <div className="my-6 inline-flex flex-col items-center justify-center px-8 py-4 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md shadow-xl">
              <span className="text-xs uppercase tracking-widest text-[var(--accent-light)] font-semibold">
                बेस गार्डन बुकिंग शुल्क
              </span>
              <div className="text-4xl sm:text-5xl md:text-6xl font-serif font-black text-[var(--accent-light)] drop-shadow-md tracking-tight my-1">
                ₹41,000/-
              </div>
              <span className="text-xs text-slate-300">
                (70 LED लाइट, 3 रूम, हॉल, किचन व स्विमिंग पूल सहित)
              </span>
            </div>

            <p className="text-sm sm:text-base text-slate-300 font-sans max-w-xl mx-auto">
              हमारे गार्डन में शादी, सगाई, जन्मदिन एवं सभी पारिवारिक उत्सवों के लिए संपूर्ण सुविधाएं उपलब्ध हैं। नीचे दिए गए 11 बिंदुओं में बुकिंग की पूरी जानकारी देखें।
            </p>
          </div>
        </div>

        {/* 11 Numbered Booking Conditions Section */}
        <BookingTermsList />

        {/* ₹10,000 Additional Option Section */}
        <AdditionalOptionCard />

        {/* Summary Price Comparison Box */}
        <div className="my-8 p-6 sm:p-8 rounded-3xl bg-card-custom border border-[var(--border)] shadow-xl text-center space-y-4">
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-[var(--primary-dark)]">
            मूल्य विवरण एवं बुकिंग (Pricing Summary)
          </h3>

          <div className="max-w-md mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            <div className="p-4 rounded-2xl bg-surface-secondary border border-[var(--border)]">
              <span className="text-xs text-muted-custom font-medium block">गार्डन बुकिंग (Base)</span>
              <span className="text-2xl font-serif font-bold text-[var(--primary-dark)]">₹41,000/-</span>
              <span className="text-xs text-emerald-700 font-medium block mt-1">✓ आवश्यक मूल बुकिंग</span>
            </div>

            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20">
              <span className="text-xs text-amber-900 font-medium block">अतिरिक्त सुविधा (Option)</span>
              <span className="text-2xl font-serif font-bold text-amber-900">+ ₹10,000/-</span>
              <span className="text-xs text-amber-800 font-medium block mt-1">+ ऐच्छिक (Optional)</span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-muted-custom max-w-lg mx-auto pt-2">
            * ₹10,000/- एक अतिरिक्त विकल्प है, जो ₹41,000/- में शामिल नहीं है। अपनी इच्छानुसार बुकिंग के समय इसका चयन कर सकते हैं।
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+919829012345"
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-full bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-bold text-base shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <FiPhone className="w-5 h-5 text-[var(--accent)]" />
              <span>बुकिंग के लिए कॉल करें (+91 98290 12345)</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
