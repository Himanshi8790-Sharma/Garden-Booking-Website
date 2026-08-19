"use client";

import { useState } from "react";
import { FiChevronDown, FiHelpCircle } from "react-icons/fi";
import { contactFaqs } from "./contactData";

export default function ContactFaqSection() {
  const [openId, setOpenId] = useState<string | null>("cfaq-1");

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      aria-label="Frequently Asked Contact Questions"
      className="w-full py-24 px-6 md:px-12 lg:px-20 bg-[var(--background-secondary)] border-b border-[var(--border)] relative"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl flex flex-col items-center">
          <span className="text-xs uppercase tracking-[0.25em] text-[var(--accent)] font-semibold px-3.5 py-1 bg-[var(--accent)]/10 rounded-full border border-[var(--accent)]/20 mb-3 font-sans">
            Enquiry Guidance
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[var(--foreground)] leading-tight font-normal">
            Frequently Asked <br />
            <span className="italic font-light text-[var(--primary)]">
              Enquiry Questions
            </span>
          </h2>
          <p className="mt-4 text-[var(--foreground-muted)] font-sans font-light text-base md:text-lg">
            Find answers regarding response times, pre-booking site visits, and date confirmations.
          </p>
        </div>

        {/* Accessible Accordion List */}
        <div className="w-full mt-12 space-y-4">
          {contactFaqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="rounded-3xl bg-[var(--card)] border border-[var(--border)] overflow-hidden transition-all duration-300 shadow-sm hover:border-[var(--accent)]/40"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-sans font-medium text-base sm:text-lg text-[var(--foreground)] cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <FiHelpCircle className="text-[var(--accent)] text-xl flex-shrink-0" />
                    <span>{faq.question}</span>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full bg-[var(--background-secondary)] flex items-center justify-center text-[var(--primary)] transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[var(--primary)] text-white" : ""
                    }`}
                  >
                    <FiChevronDown />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm font-sans font-light text-[var(--foreground-muted)] leading-relaxed border-t border-[var(--border)]/60 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
