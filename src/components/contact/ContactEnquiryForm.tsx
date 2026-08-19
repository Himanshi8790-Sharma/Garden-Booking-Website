"use client";

import { useState } from "react";
import { FiCalendar, FiSend, FiCheckCircle, FiAlertCircle, FiUser, FiPhone, FiMail, FiUsers } from "react-icons/fi";
import { eventTypesList, venuePackagesList } from "./contactData";

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  eventType: string;
  eventDate: string;
  guestCount: string;
  preferredPackage: string;
  message: string;
}

export default function ContactEnquiryForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phone: "",
    email: "",
    eventType: eventTypesList[0],
    eventDate: "",
    guestCount: "",
    preferredPackage: venuePackagesList[1],
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!formData.fullName.trim()) {
      setErrorMsg("Please enter your full name.");
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMsg("Please enter a valid phone number.");
      return;
    }

    setIsSubmitting(true);

    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        eventType: eventTypesList[0],
        eventDate: "",
        guestCount: "",
        preferredPackage: venuePackagesList[1],
        message: "",
      });
    }, 1200);
  };

  return (
    <section
      id="form"
      aria-label="Event Enquiry Form"
      className="w-full py-24 px-6 md:px-12 lg:px-20 bg-[var(--background-secondary)] border-b border-[var(--border)] relative"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center max-w-2xl flex flex-col items-center">
          <span className="text-xs uppercase tracking-[0.25em] text-[var(--accent)] font-semibold px-3.5 py-1 bg-[var(--accent)]/10 rounded-full border border-[var(--accent)]/20 mb-3 font-sans">
            Direct Venue Enquiry
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[var(--foreground)] leading-tight font-normal">
            Check Date &amp; Reserve <br />
            <span className="italic font-light text-[var(--primary)]">
              Your Celebration
            </span>
          </h2>
          <p className="mt-4 text-[var(--foreground-muted)] font-sans font-light text-base md:text-lg">
            Fill out your details below. Our event manager will verify date availability and send you package information.
          </p>
        </div>

        {/* Form Container */}
        <div className="w-full mt-12 p-8 sm:p-12 rounded-[2.5rem] bg-[var(--card)] border border-[var(--border)] shadow-xl relative">
          
          {submitSuccess ? (
            <div className="py-12 flex flex-col items-center text-center animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center text-3xl mb-4">
                <FiCheckCircle />
              </div>
              <h3 className="text-2xl font-serif text-[var(--foreground)] font-normal">
                Enquiry Received Successfully!
              </h3>
              <p className="mt-3 text-sm font-sans font-light text-[var(--foreground-muted)] max-w-md">
                Thank you for contacting Helping Garden Club. Our venue concierge will verify date availability and reach out to you shortly via phone or WhatsApp.
              </p>
              <button
                onClick={() => setSubmitSuccess(false)}
                className="mt-8 px-6 py-3 bg-[var(--primary)] text-white font-sans text-xs uppercase tracking-widest font-semibold rounded-full hover:bg-[var(--primary-dark)] transition-colors cursor-pointer"
              >
                Send Another Enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Validation Error Banner */}
              {errorMsg && (
                <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-600 text-xs font-sans font-medium flex items-center gap-2">
                  <FiAlertCircle className="text-base flex-shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Grid Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Full Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="fullName" className="text-xs font-sans font-semibold uppercase tracking-wider text-[var(--foreground)]">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative flex items-center">
                    <FiUser className="absolute left-4 text-[var(--foreground-muted)]" />
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-[var(--background)] border border-[var(--border)] font-sans text-sm text-[var(--foreground)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="text-xs font-sans font-semibold uppercase tracking-wider text-[var(--foreground)]">
                    Phone / WhatsApp <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative flex items-center">
                    <FiPhone className="absolute left-4 text-[var(--foreground-muted)]" />
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="e.g. +91 98290 00000"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-[var(--background)] border border-[var(--border)] font-sans text-sm text-[var(--foreground)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-sans font-semibold uppercase tracking-wider text-[var(--foreground)]">
                    Email Address
                  </label>
                  <div className="relative flex items-center">
                    <FiMail className="absolute left-4 text-[var(--foreground-muted)]" />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-[var(--background)] border border-[var(--border)] font-sans text-sm text-[var(--foreground)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all"
                    />
                  </div>
                </div>

                {/* Event Type Select */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="eventType" className="text-xs font-sans font-semibold uppercase tracking-wider text-[var(--foreground)]">
                    Event Type
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-2xl bg-[var(--background)] border border-[var(--border)] font-sans text-sm text-[var(--foreground)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all cursor-pointer"
                  >
                    {eventTypesList.map((type, idx) => (
                      <option key={idx} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Event Date Picker */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="eventDate" className="text-xs font-sans font-semibold uppercase tracking-wider text-[var(--foreground)]">
                    Preferred Event Date
                  </label>
                  <div className="relative flex items-center">
                    <FiCalendar className="absolute left-4 text-[var(--foreground-muted)]" />
                    <input
                      id="eventDate"
                      name="eventDate"
                      type="date"
                      value={formData.eventDate}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-[var(--background)] border border-[var(--border)] font-sans text-sm text-[var(--foreground)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all cursor-pointer"
                    />
                  </div>
                  <span className="text-[10px] font-sans text-[var(--foreground-muted)] italic">
                    *Date availability will be confirmed by our team.
                  </span>
                </div>

                {/* Guest Count */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="guestCount" className="text-xs font-sans font-semibold uppercase tracking-wider text-[var(--foreground)]">
                    Estimated Guests
                  </label>
                  <div className="relative flex items-center">
                    <FiUsers className="absolute left-4 text-[var(--foreground-muted)]" />
                    <input
                      id="guestCount"
                      name="guestCount"
                      type="text"
                      placeholder="e.g. 150 guests"
                      value={formData.guestCount}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-[var(--background)] border border-[var(--border)] font-sans text-sm text-[var(--foreground)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all"
                    />
                  </div>
                </div>

              </div>

              {/* Preferred Package Select */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="preferredPackage" className="text-xs font-sans font-semibold uppercase tracking-wider text-[var(--foreground)]">
                  Preferred Venue Package
                </label>
                <select
                  id="preferredPackage"
                  name="preferredPackage"
                  value={formData.preferredPackage}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-2xl bg-[var(--background)] border border-[var(--border)] font-sans text-sm text-[var(--foreground)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all cursor-pointer"
                >
                  {venuePackagesList.map((pkg, idx) => (
                    <option key={idx} value={pkg}>
                      {pkg}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message Textarea */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs font-sans font-semibold uppercase tracking-wider text-[var(--foreground)]">
                  Message / Special Requirements
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your decor preferences, pool requirements, or timing shift..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-2xl bg-[var(--background)] border border-[var(--border)] font-sans text-sm text-[var(--foreground)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[var(--primary)] text-white font-sans text-xs uppercase tracking-widest font-bold rounded-full hover:bg-[var(--primary-dark)] transition-all duration-300 flex items-center justify-center gap-2 shadow-xl hover:scale-101 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Submitting Enquiry...</span>
                  ) : (
                    <>
                      <FiSend className="text-base" />
                      <span>Submit Event Enquiry</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}
