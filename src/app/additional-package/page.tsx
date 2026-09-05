import { Metadata } from "next";
import Link from "next/link";
import { FiArrowLeft, FiPhone, FiCheckCircle, FiInfo, FiStar, FiPackage } from "react-icons/fi";

export const metadata: Metadata = {
  title: "बर्तन सुविधा पैकेज ₹10,000/- | Helping Garden Club",
  description:
    "Helping Garden Club जयपुर में ₹10,000/- बर्तन सुविधा (33 बर्तन व सामान सूची) एवं ₹1,500/- सफाई शुल्क की पूरी जानकारी।",
};

interface AdditionalItem {
  id: number;
  name: string;
  price: string;
}

const ADDITIONAL_ITEMS: AdditionalItem[] = [
  { id: 1, name: "देगचा", price: "20" },
  { id: 2, name: "परात", price: "20" },
  { id: 3, name: "चूल्हा", price: "15" },
  { id: 4, name: "कबगीर", price: "10" },
  { id: 5, name: "चन्ना", price: "8" },
  { id: 6, name: "डोरी", price: "6" },
  { id: 7, name: "डब", price: "15" },
  { id: 8, name: "कैंची", price: "2" },
  { id: 9, name: "भगोना", price: "10" },
  { id: 10, name: "छोटी प्लेट", price: "400" },
  { id: 11, name: "बड़ी प्लेट", price: "400" },
  { id: 12, name: "प्याले", price: "200" },
  { id: 13, name: "थाली", price: "30" },
  { id: 14, name: "ट्रे", price: "20" },
  { id: 15, name: "गमले स्टील", price: "10" },
  { id: 16, name: "जग", price: "10" },
  { id: 17, name: "बाल्टी", price: "10" },
  { id: 18, name: "तन्दूर", price: "2" },
  { id: 19, name: "तन्दूर का टब", price: "2" },
  { id: 20, name: "सालन का चम्मच", price: "4" },
  { id: 21, name: "डिस", price: "50" },
  { id: 22, name: "डिस के चम्मच", price: "50" },
  { id: 23, name: "भट्टी", price: "3" },
  { id: 24, name: "कढ़ाई", price: "2" },
  { id: 25, name: "सिगड़ी", price: "2" },
  { id: 26, name: "लगन", price: "2" },
  { id: 27, name: "टंकी", price: "4" },
  { id: 28, name: "बड़ी परात", price: "4" },
  { id: 29, name: "बाल्टी के चम्मच", price: "10" },
  { id: 30, name: "टेबल", price: "30" },
  { id: 31, name: "कुर्सी", price: "150" },
  { id: 32, name: "दरी", price: "5" },
  { id: 33, name: "त्रिपाल (15×15)", price: "1" },
];

export default function AdditionalPackagePage() {
  return (
    <main className="w-full min-h-screen bg-surface py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
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

        {/* Main Hero Header Section */}
        <div className="bg-gradient-to-b from-[var(--primary-dark)] to-[#0B1E16] rounded-3xl p-6 sm:p-10 text-center text-white shadow-2xl border border-[var(--accent)]/30 mb-8 sm:mb-12 relative overflow-hidden">
          {/* Subtle gold glow backdrop */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[var(--accent)]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <span className="px-3.5 py-1.5 rounded-full bg-[var(--accent)]/20 border border-[var(--accent)]/40 text-[var(--accent-light)] text-xs font-bold uppercase tracking-wider">
              Helping Garden Club • जयपुर
            </span>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold text-[var(--background)] mt-4 tracking-tight leading-tight">
              बर्तन सुविधा
            </h1>

            <p className="mt-2 text-sm sm:text-base text-[var(--accent-light)] font-medium">
              गार्डन बुकिंग के अतिरिक्त ₹10,000/-
            </p>

            {/* Prominent Price Display */}
            <div className="my-6 inline-flex flex-col items-center justify-center px-8 py-5 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md shadow-xl max-w-md w-full">
              <span className="text-xs uppercase tracking-widest text-[var(--accent-light)] font-semibold">
                बर्तन सुविधा मूल्य
              </span>
              <div className="text-4xl sm:text-5xl md:text-6xl font-serif font-black text-[var(--accent-light)] drop-shadow-md tracking-tight my-1">
                ₹10,000/-
              </div>
              <span className="text-xs text-slate-300">
                (गार्डन बुकिंग के अतिरिक्त ₹10,000/-)
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 font-sans max-w-xl mx-auto leading-relaxed">
              यह सुविधा मूल <span className="text-white font-semibold">₹41,000/-</span> गार्डन बुकिंग से अलग एक ऐच्छिक (optional) पैकेज है।
            </p>
          </div>
        </div>

        {/* ============================================================================
            ₹10,000 में उपलब्ध सामान — 33 ITEMS RESPONSIVE HTML GRID
            ============================================================================ */}
        <div className="bg-card-custom rounded-3xl p-5 sm:p-8 border border-[var(--border)] shadow-xl mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-[var(--primary)] text-[var(--accent)] shrink-0">
              <FiPackage className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[var(--primary-dark)]">
                ₹10,000 में उपलब्ध सामान
              </h2>
              <p className="text-xs sm:text-sm text-muted-custom">
                इस पैकेज में शामिल सभी 33 सामान एवं उनकी दरें:
              </p>
            </div>
          </div>

          {/* Responsive 33-Item Cards Grid */}
          {/* Desktop: 4 columns | Tablet: 3 columns | Mobile: 2 columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
            {ADDITIONAL_ITEMS.map((item) => (
              <div
                key={item.id}
                className="bg-surface-secondary/70 hover:bg-white rounded-2xl p-3.5 sm:p-4 border border-[var(--border)] shadow-xs hover:shadow-md hover:border-[var(--accent)]/60 transition-all duration-200 flex flex-col items-center justify-between text-center group"
              >
                {/* Item Name */}
                <span className="text-sm sm:text-base font-serif font-bold text-[var(--primary-dark)] group-hover:text-[var(--primary)] transition-colors leading-snug">
                  {item.name}
                </span>

                {/* Visually Highlighted Price */}
                <span className="mt-2.5 inline-block px-3 py-1 rounded-full bg-[var(--primary-dark)] text-[var(--accent-light)] text-xs sm:text-sm font-bold tracking-wide shadow-xs border border-[var(--accent)]/30">
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ============================================================================
            IMPORTANT NOTE FROM CLIENT SECTION (महत्वपूर्ण जानकारी)
            ============================================================================ */}
        <div className="mb-10 p-5 sm:p-6 rounded-2xl bg-amber-500/10 border-l-4 border-[var(--accent)] border-y border-r border-amber-500/20 shadow-md">
          <div className="flex items-center gap-2 mb-2 text-amber-900 font-bold text-base sm:text-lg">
            <FiInfo className="w-5 h-5 text-[var(--accent)] shrink-0" />
            <span>महत्वपूर्ण जानकारी</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
            "यह सामान सीटिंग खाने के हिसाब से दिया जायेगा। तन्दूर की चादर पार्टी को लानी है। जिस तारीख की बुकिंग है उसी तारीख को यह सामान मिलेगा। इसके अलावा कोई सामान लेते हैं तो अलग से चार्ज देना होगा।"
          </p>
        </div>

        {/* ============================================================================
            CLEANING CHARGE SECTION (सफाई शुल्क) — SEPARATE FROM ITEM GRID
            ============================================================================ */}
        <div className="mb-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-amber-950/10 via-amber-900/5 to-surface border border-amber-500/30 shadow-xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-900 text-xs font-bold border border-amber-500/30 mb-2">
                <FiInfo className="w-4 h-4 text-amber-700" />
                <span>सफाई एवं रखरखाव शुल्क</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-[var(--primary-dark)]">
                सफाई शुल्क
              </h3>
              <p className="text-xs sm:text-sm text-[var(--foreground-muted)] mt-1">
                सफाई शुल्क ₹1,500/- अलग से देय है।
              </p>
            </div>
            <div className="px-6 py-3 rounded-2xl bg-[var(--primary-dark)] text-white text-center shrink-0 border border-[var(--accent)]/40 shadow-lg">
              <span className="text-[11px] uppercase tracking-wider text-[var(--accent-light)] block">सफाई शुल्क</span>
              <span className="text-3xl font-serif font-extrabold text-[var(--accent-light)]">₹1,500/-</span>
            </div>
          </div>
        </div>

        {/* ============================================================================
            SUMMARY & CALL TO ACTION SECTION
            ============================================================================ */}
        <div className="p-6 sm:p-8 rounded-3xl bg-card-custom border border-[var(--border)] shadow-xl text-center space-y-4">
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-[var(--primary-dark)]">
            बर्तन सुविधा विवरण (Pricing Summary)
          </h3>

          <div className="max-w-md mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            <div className="p-4 rounded-2xl bg-surface-secondary border border-[var(--border)]">
              <span className="text-xs text-muted-custom font-medium block">बर्तन सुविधा</span>
              <span className="text-2xl font-serif font-bold text-[var(--primary-dark)]">₹10,000/-</span>
              <span className="text-xs text-emerald-700 font-medium block mt-1">✓ 33 सामान पैकेज</span>
            </div>

            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20">
              <span className="text-xs text-amber-900 font-medium block">सफाई शुल्क</span>
              <span className="text-2xl font-serif font-bold text-amber-900">+ ₹1,500/-</span>
              <span className="text-xs text-amber-800 font-medium block mt-1">+ अलग से देय</span>
            </div>
          </div>

          <div className="pt-2">
            <p className="text-base sm:text-lg font-serif font-bold text-[var(--primary-dark)]">
              कुल अतिरिक्त शुल्क: <span className="text-emerald-800 font-extrabold text-xl sm:text-2xl">₹11,500/-</span>
            </p>
            <p className="text-xs text-muted-custom max-w-lg mx-auto mt-1">
              (₹10,000/- बर्तन सुविधा + ₹1,500/- सफाई शुल्क)
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+919352729250"
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-full bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-bold text-base shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <FiPhone className="w-5 h-5 text-[var(--accent)]" />
              <span>बुकिंग के लिए कॉल करें (+91 93527 29250)</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
