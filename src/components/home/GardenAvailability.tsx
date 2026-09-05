"use client";

import { FiCalendar, FiCheckCircle, FiInfo, FiSmartphone } from "react-icons/fi";

/**
 * ============================================================================
 * GOOGLE CALENDAR EMBED CONFIGURATION
 * ============================================================================
 * To connect your Google Calendar:
 * 1. Open Google Calendar on phone or computer.
 * 2. Go to Calendar Settings -> Integrate calendar.
 * 3. Make the calendar Public (Access permissions -> Make available to public).
 * 4. Copy the "Embed code" src URL or Public Calendar ID.
 * 5. Add NEXT_PUBLIC_GOOGLE_CALENDAR_EMBED_URL in your .env.local file:
 *    NEXT_PUBLIC_GOOGLE_CALENDAR_EMBED_URL="https://calendar.google.com/calendar/embed?src=YOUR_CALENDAR_ID%40group.calendar.google.com&ctz=Asia%2FKolkata"
 * ============================================================================
 */

// Fallback Google Calendar URL (Public Indian Holidays / General Calendar view as clean demonstration)
// Replace with your real Google Calendar embed URL when available.
const DEFAULT_CALENDAR_EMBED_URL =
  "https://calendar.google.com/calendar/embed?src=dsfamilygroupjpr%40gmail.com&ctz=Asia%2FKolkata";

export default function GardenAvailability() {
  const calendarEmbedUrl =
    process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMBED_URL || DEFAULT_CALENDAR_EMBED_URL;

  return (
    <section className="py-12 md:py-16 bg-surface-secondary relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-(--primary)/10 border border-(--primary)/20 text-(--primary) text-xs sm:text-sm font-medium mb-3">
            <FiCalendar className="w-4 h-4 text-(--accent)" />
            <span>लाइव तारीखें (Live Calendar)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-(--primary-dark) tracking-tight">
          बुकिंग कैलेंडर
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-custom font-sans leading-relaxed">
            हमारे गार्डन की उपलब्ध और बुक तिथियां देखें।
          </p>
          <div className="w-16 h-1 bg-(--accent) mx-auto mt-4 rounded-full" />
        </div>

        {/* Calendar Card Container */}
        <div className="bg-card-custom rounded-2xl shadow-xl border border-(--border) p-4 sm:p-6 md:p-8">
          {/* Status info bar */}
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-(--primary-dark) text-white text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <FiCheckCircle className="w-5 h-5 text-(--accent) shrink-0" />
              <span>
                <strong>लाइव अपडेट:</strong> बुक की गई तिथियां गूगल कैलेंडर पर अपडेट होती हैं।
              </span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <FiSmartphone className="w-4 h-4 text-(--accent-light) shrink-0" />
              <span className="text-xs">मोबाइल कैलेंडर से प्रबंधित</span>
            </div>
          </div>

          {/* Google Calendar Iframe Wrapper */}
          <div className="relative w-full overflow-hidden rounded-xl border border-(--border) bg-white shadow-inner min-h-95 sm:min-h-120 md:min-h-[550px]">
            <iframe
              src={calendarEmbedUrl}
              style={{ border: 0 }}
              className="w-full h-[420px] sm:h-[500px] md:h-[600px] rounded-xl"
              loading="lazy"
              title="Garden Availability Google Calendar"
            />
          </div>

          {/* Helpful note for visitors */}
          <div className="mt-4 flex items-center justify-center gap-2 text-xs sm:text-sm text-muted-custom">
            <FiInfo className="w-4 h-4 text-[var(--accent)] flex-shrink-0" />
            <span>
              अपनी मनपसंद तारीख की बुकिंग के लिए नीचे दिए गए बटन या व्हाट्सएप द्वारा संपर्क करें।
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
