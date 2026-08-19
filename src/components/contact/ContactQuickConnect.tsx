"use client";

import { FiPhoneCall, FiMessageCircle, FiMail, FiInstagram, FiArrowUpRight } from "react-icons/fi";
import { contactConfig } from "./contactData";

export default function ContactQuickConnect() {
  const quickLinks = [
    {
      title: "WhatsApp Chat",
      subtitle: "Instant Message",
      href: contactConfig.whatsappLink,
      icon: FiMessageCircle,
      isExternal: true,
      colorClass: "hover:bg-emerald-600 hover:text-white",
    },
    {
      title: "Call Direct",
      subtitle: contactConfig.phoneNumberText,
      href: contactConfig.phoneLink,
      icon: FiPhoneCall,
      isExternal: false,
      colorClass: "hover:bg-[var(--primary)] hover:text-white",
    },
    {
      title: "Send Email",
      subtitle: contactConfig.emailText,
      href: contactConfig.emailLink,
      icon: FiMail,
      isExternal: false,
      colorClass: "hover:bg-slate-800 hover:text-white",
    },
    {
      title: "Instagram",
      subtitle: "@jodhaholidays",
      href: contactConfig.instagramLink,
      icon: FiInstagram,
      isExternal: true,
      colorClass: "hover:bg-pink-600 hover:text-white",
    },
  ];

  return (
    <section
      aria-label="Quick Connect Options"
      className="w-full py-16 px-6 md:px-12 lg:px-20 bg-[var(--background)] border-b border-[var(--border)] relative"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <span className="text-xs uppercase tracking-[0.25em] text-[var(--accent)] font-semibold mb-3 font-sans">
          Instant Connection
        </span>
        <h2 className="text-2xl sm:text-3xl font-serif text-[var(--foreground)] font-normal text-center">
          Preferred Connection Channels
        </h2>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {quickLinks.map((item, index) => {
            const Icon = item.icon;

            return (
              <a
                key={index}
                href={item.href}
                target={item.isExternal ? "_blank" : undefined}
                rel={item.isExternal ? "noopener noreferrer" : undefined}
                className={`group p-6 rounded-3xl bg-[var(--card)] border border-[var(--border)] transition-all duration-300 flex items-center justify-between shadow-sm hover:shadow-xl ${item.colorClass}`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-[var(--primary)]/10 text-[var(--primary)] group-hover:bg-white/20 group-hover:text-white flex items-center justify-center text-xl transition-colors">
                    <Icon />
                  </div>
                  <div>
                    <h3 className="text-base font-serif font-medium text-[var(--foreground)] group-hover:text-white transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-sans font-light text-[var(--foreground-muted)] group-hover:text-white/80 transition-colors">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                <FiArrowUpRight className="text-xl text-[var(--foreground-muted)] group-hover:text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
