"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiPhoneCall, FiMail, FiMapPin, FiClock, FiMessageCircle, FiArrowUpRight } from "react-icons/fi";
import { contactConfig } from "./contactData";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ContactInfoCards() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (cardsRef.current.length > 0) {
        gsap.fromTo(
          cardsRef.current,
          { opacity: 0, y: 35, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.85,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const infoOptions = [
    {
      title: "Call Direct",
      label: contactConfig.phoneNumberText,
      href: contactConfig.phoneLink,
      icon: FiPhoneCall,
      isExternal: false,
      tag: "Immediate Phone Support",
    },
    {
      title: "WhatsApp Chat",
      label: "Instant Message Concierge",
      href: contactConfig.whatsappLink,
      icon: FiMessageCircle,
      isExternal: true,
      tag: "Quick Messaging",
    },
    {
      title: "Email Us",
      label: contactConfig.emailText,
      href: contactConfig.emailLink,
      icon: FiMail,
      isExternal: false,
      tag: "Event Proposals & Quotes",
    },
    {
      title: "Venue Location",
      label: "Jaipur, Rajasthan",
      href: contactConfig.mapDirectionsLink,
      icon: FiMapPin,
      isExternal: true,
      tag: "Google Maps Directions",
    },
    {
      title: "Enquiry Hours",
      label: contactConfig.hoursText,
      href: "#form",
      icon: FiClock,
      isExternal: false,
      tag: "Open 7 Days A Week",
    },
  ];

  return (
    <section
      ref={sectionRef}
      aria-label="Contact Information Options"
      className="w-full py-16 px-6 md:px-12 lg:px-20 bg-[var(--background)] border-b border-[var(--border)] relative"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {infoOptions.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="group p-6 rounded-3xl bg-[var(--card)] border border-[var(--border)] hover:border-[var(--accent)]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center text-xl group-hover:bg-[var(--primary)] group-hover:text-white transition-all duration-300">
                    <Icon />
                  </div>
                  <a
                    href={item.href}
                    target={item.isExternal ? "_blank" : undefined}
                    rel={item.isExternal ? "noopener noreferrer" : undefined}
                    aria-label={`Connect via ${item.title}`}
                    className="w-8 h-8 rounded-full bg-[var(--background-secondary)] text-[var(--foreground-muted)] group-hover:text-[var(--accent)] flex items-center justify-center transition-colors"
                  >
                    <FiArrowUpRight className="text-base" />
                  </a>
                </div>

                <h3 className="text-lg font-serif font-normal text-[var(--foreground)] mt-5">
                  {item.title}
                </h3>
                <p className="text-xs font-sans font-light text-[var(--foreground-muted)] mt-1 line-clamp-2">
                  {item.label}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[var(--border)] flex items-center justify-between">
                <span className="text-[10px] font-sans font-semibold uppercase tracking-wider text-[var(--accent)]">
                  {item.tag}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
