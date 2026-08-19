import {
  PHONE_LINK,
  PHONE_NUMBER_TEXT,
  EMAIL_LINK,
  EMAIL_TEXT,
  WHATSAPP_CONTACT_LINK,
  ADDRESS_TEXT,
  MAP_DIRECTIONS_LINK,
  INSTAGRAM_LINK,
} from "@/src/constants/links";

export const contactConfig = {
  phoneLink: PHONE_LINK,
  phoneNumberText: PHONE_NUMBER_TEXT,
  emailLink: EMAIL_LINK,
  emailText: EMAIL_TEXT,
  whatsappLink: WHATSAPP_CONTACT_LINK,
  addressText: ADDRESS_TEXT,
  mapDirectionsLink: MAP_DIRECTIONS_LINK,
  instagramLink: INSTAGRAM_LINK,
  hoursText: "9:00 AM – 9:00 PM (Monday - Sunday)",
};

export const eventTypesList = [
  "Wedding Ceremony & Reception",
  "Birthday Party Bash",
  "Anniversary Celebration",
  "Private VIP Event / Family Gathering",
  "Poolside Party & Soiree",
  "Other Celebration",
];

export const venuePackagesList = [
  "Essential Celebration Package",
  "Signature Celebration Package",
  "Grand Celebration Package",
  "Custom Venue Request",
];

export const contactReassurancePoints = [
  {
    title: "Discuss Event Requirements",
    desc: "Speak directly with our venue manager about catering, stage rigs, and seating.",
  },
  {
    title: "Explore Suitable Packages",
    desc: "Compare Essential, Signature, and Grand tiers tailored to your guest list.",
  },
  {
    title: "Check Date Availability",
    desc: "Instantly check preferred weekend and weekday event shift availability.",
  },
  {
    title: "Plan Pre-Booking Site Visits",
    desc: "Schedule a complimentary walkthrough of our lawns and private swimming pool.",
  },
];

export const contactFaqs = [
  {
    id: "cfaq-1",
    question: "How can I check venue date availability?",
    answer: "Simply submit our Event Enquiry Form with your preferred date or call us directly. Our team will verify date availability and get back to you within 2 to 4 hours.",
  },
  {
    id: "cfaq-2",
    question: "Can I schedule a venue site visit before booking?",
    answer: "Yes! We encourage pre-booking site visits. Contact us to schedule a convenient time to walk through the lawns, swimming pool area, and setup facilities.",
  },
  {
    id: "cfaq-3",
    question: "Can event packages and decor be customized?",
    answer: "Absolutely. Whether you want custom floral mandap setups, poolside DJ rigs, or specific catering gazebos, we tailor package options to your vision.",
  },
  {
    id: "cfaq-4",
    question: "How early should I enquiry about my wedding or event date?",
    answer: "For wedding receptions and peak weekend dates, we recommend contacting us 2 to 6 months in advance. Birthday and pool parties can typically be accommodated with 2 to 3 weeks notice.",
  },
  {
    id: "cfaq-5",
    question: "What happens after I submit the enquiry form?",
    answer: "Our event manager will review your submission, verify date availability, and contact you via phone or WhatsApp to discuss pricing details and setup requirements.",
  },
];
