export interface VenuePackage {
  id: string;
  name: string;
  subtitle: string;
  pricePlaceholder: string;
  priceNote: string;
  guestCapacity: string;
  duration: string;
  isFeatured?: boolean;
  badge?: string;
  description: string;
  inclusions: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const venuePackages: VenuePackage[] = [
  {
    id: "essential",
    name: "Essential Celebration",
    subtitle: "Ideal for small & intimate gatherings",
    pricePlaceholder: "₹5,000",
    priceNote: "*Starting rate for daytime intimate events",
    guestCapacity: "Up to 100 Guests",
    duration: "6 Hours Venue Access",
    description: "Designed for small birthday parties, family reunions, and intimate anniversary gatherings.",
    inclusions: [
      "Access to 4,000+ sq. ft. Lawn Area",
      "Standard Guest Seating & Banquet Tables",
      "Basic Garden Lighting & Electrical Access",
      "Dedicated On-Site Venue Attendant",
      "Gated Parking & Entry Convenience",
    ],
  },
  {
    id: "signature",
    name: "Signature Celebration",
    subtitle: "Our most popular choice for parties & soirees",
    pricePlaceholder: "₹15,000",
    priceNote: "*Starting rate for full venue & pool bashes",
    guestCapacity: "Up to 300 Guests",
    duration: "8 Hours Venue Access",
    isFeatured: true,
    badge: "Most Popular Choice",
    description: "The complete celebration package with swimming pool access, spacious lawn, and setup support.",
    inclusions: [
      "Access to 8,000+ sq. ft. Manicured Lawn",
      "Filtered Private Swimming Pool & Sunbeds",
      "Enhanced Decorative Ambient Night Lighting",
      "Poolside Cocktail Bar Counter Setup",
      "Flexible Seating & Stage Layout Support",
      "Gated Security & Dedicated Event Staff",
    ],
  },
  {
    id: "grand",
    name: "Grand Celebration",
    subtitle: "For weddings, grand receptions & VIP galas",
    pricePlaceholder: "₹35,000",
    priceNote: "*Starting rate for full lawn & wedding bookings",
    guestCapacity: "Up to 500+ Guests",
    duration: "Full Day / Overnight Shift",
    description: "Exclusive full venue takeover tailored for fairytale weddings, ring ceremonies, and grand receptions.",
    inclusions: [
      "Exclusive Access to Full 12,000+ sq. ft. Lawn",
      "Complete Swimming Pool & Poolside Lounge",
      "Custom Mandap & Stage Decor Rigging Allowed",
      "Power Backup Generator & Heavy Lighting Setup",
      "Extended Shift Timings (Day or Starlit Night)",
      "VIP Concierge & Dedicated Venue Manager",
    ],
  },
];

export const venueInclusionsList = [
  {
    title: "12,000+ Sq. Ft. Lawn",
    desc: "Spacious manicured green open lawn for grand seating & stage mandaps.",
  },
  {
    title: "Filtered Swimming Pool",
    desc: "Crystal-clear private swimming pool with sunbed loungers & poolside bar.",
  },
  {
    title: "Flexible Shift Timings",
    desc: "Choose between sun-kissed daylight brunches or starlit evening bashes.",
  },
  {
    title: "100% Gated Privacy",
    desc: "Exclusive venue access reserved strictly for your private guests.",
  },
  {
    title: "On-Site Venue Support",
    desc: "Dedicated venue manager and assistance staff during your event shift.",
  },
  {
    title: "Gated Parking Access",
    desc: "Convenient entry and parking space for guest vehicles.",
  },
];

export const eventMatrixData = [
  { event: "Weddings & Receptions", suitablePackage: "Grand Celebration", capacity: "300 - 500+ Guests" },
  { event: "Birthday Parties & Bashes", suitablePackage: "Essential / Signature", capacity: "50 - 250 Guests" },
  { event: "Anniversary Celebrations", suitablePackage: "Essential / Signature", capacity: "50 - 200 Guests" },
  { event: "Private VIP & Family Events", suitablePackage: "Signature Celebration", capacity: "100 - 300 Guests" },
  { event: "Poolside Cocktail Parties", suitablePackage: "Signature Celebration", capacity: "50 - 200 Guests" },
];

export const bookingStepsData = [
  {
    number: "01",
    title: "Choose Your Package",
    desc: "Select between Essential, Signature, or Grand venue options based on your guest count.",
  },
  {
    number: "02",
    title: "Contact With Event Date",
    desc: "Check date availability and schedule an optional complimentary venue visit.",
  },
  {
    number: "03",
    title: "Discuss Custom Setup",
    desc: "Coordinate seating, decor rigs, pool usage, and timings with our venue manager.",
  },
  {
    number: "04",
    title: "Confirm Your Booking",
    desc: "Lock in your date with transparent booking terms and start planning your celebration.",
  },
];

export const pricingFaqs: FaqItem[] = [
  {
    id: "faq-1",
    question: "What types of events can be hosted at Helping Garden Club?",
    answer: "We host weddings, receptions, ring ceremonies, birthday bashes, milestone anniversary parties, family reunions, cocktail soirees, and private swimming pool events.",
  },
  {
    id: "faq-2",
    question: "Are the package prices fixed or customizable?",
    answer: "Our package rates serve as transparent starting points. Depending on your specific event duration, guest count, and optional add-ons (like decor or pool access), we customize quotes to suit your needs.",
  },
  {
    id: "faq-3",
    question: "Is the swimming pool available with event bookings?",
    answer: "Yes! Swimming pool access is included in Signature and Grand packages, and can be added to Essential bookings upon request.",
  },
  {
    id: "faq-4",
    question: "How far in advance should I book my event date?",
    answer: "For wedding receptions and peak weekend dates, we recommend booking 2 to 6 months in advance. For birthdays and family parties, 2 to 4 weeks advance notice is usually sufficient.",
  },
  {
    id: "faq-5",
    question: "Can I visit the venue before confirming my booking?",
    answer: "Absoluty! We encourage pre-booking venue visits so you can inspect the lawns, swimming pool, and setup arrangements in person.",
  },
  {
    id: "faq-6",
    question: "How do I check date availability?",
    answer: "Simply click 'Check Availability' or call us directly. Our venue team will confirm date availability instantly.",
  },
];
