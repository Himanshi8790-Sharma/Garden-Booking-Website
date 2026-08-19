import { Metadata } from "next";

import ContactPageHero from "../../components/contact/ContactPageHero";
import ContactQuickConnect from "../../components/contact/ContactQuickConnect";
import ContactEnquiryForm from "../../components/contact/ContactEnquiryForm";
import ContactInfoCards from "../../components/contact/ContactInfoCards";
import ContactFaqSection from "../../components/contact/ContactFaqSection";
import ContactMapSection from "../../components/contact/ContactMapSection";
import ContactReassurance from "../../components/contact/ContactReassurance";
import ContactVisualSection from "../../components/contact/ContactVisualSection";

export const metadata: Metadata = {
  title: "Contact Us | Helping Garden Club - Jaipur Garden & Event Venue",

  description:
    "Get in touch with Helping Garden Club, Jaipur's beautiful garden and event venue for weddings, birthdays, anniversaries, private parties, swimming pool events, and celebrations.",

  keywords: [
    "contact Helping Garden Club",
    "garden venue Jaipur",
    "wedding venue Jaipur",
    "birthday party venue Jaipur",
    "anniversary venue Jaipur",
    "private event venue Jaipur",
    "swimming pool venue Jaipur",
    "garden booking Jaipur",
  ],

  openGraph: {
    title: "Contact Us | Helping Garden Club - Jaipur Garden & Event Venue",
    description:
      "Contact Helping Garden Club to book our beautiful garden venue for weddings, birthdays, anniversaries, private parties, and pool events in Jaipur.",
    images: ["/images/garden.webp"],
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main className="w-full min-h-screen overflow-x-hidden">
      {/* 1. Contact Hero */}
      <ContactPageHero />

      {/* 2. Quick Connect */}
      {/* <ContactQuickConnect /> */}

      {/* 3. Contact Information */}
      <ContactInfoCards />

      {/* 4. Enquiry Form */}
      <ContactEnquiryForm />

      {/* 5. Visual Section */}
      <ContactVisualSection />

      {/* 6. Reassurance / Why Contact Us */}
      {/* <ContactReassurance /> */}

      {/* 7. Location / Map */}
      <ContactMapSection />

      {/* 8. FAQs */}
      {/* <ContactFaqSection /> */}
    </main>
  );
}