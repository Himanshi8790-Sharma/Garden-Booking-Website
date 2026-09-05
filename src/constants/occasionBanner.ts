export interface SlideItem {
    title: string;
    icon: string;
    destinations: string[];
    promo: string;
    images: [string, string, string];
    whatsappLink: string;
}

export const occasionBannerSlides: SlideItem[] = [
    {
        title: "Wedding Garden Booking",
        icon: "💍",
        destinations: ["Wedding", "Marriage", "Engagement", "Reception"],
        promo: "Beautiful Outdoor Venue | Spacious Garden & Event Setup",
        images: [
            "/image/wedding2.jpeg",
            "/image/decoration2.jpeg",
            "/image/pool5.jpeg",
        ],
        whatsappLink:
            "https://wa.me/919799498256?text=Hello!%20I'm%20interested%20in%20booking%20the%20garden%20for%20a%20wedding.",
    },
    {
        title: "Birthday Party Venue",
        icon: "🎂",
        destinations: ["Birthday Party", "Kids Party", "Family Party", "Celebration"],
        promo: "Perfect Party Venue | Garden Space & Swimming Pool",
        images: [
            "/image/birthday.webp",
            "/image/pool5.jpeg",
            "/image/decoration2.jpeg",
        ],
        whatsappLink:
            "https://wa.me/919799498256?text=Hello!%20I'm%20interested%20in%20booking%20the%20garden%20for%20a%20birthday%20party.",
    },
    {
        title: "Anniversary Celebrations",
        icon: "❤️",
        destinations: ["Anniversary", "Couples", "Family", "Special Moments"],
        promo: "Celebrate Together | Beautiful Garden Setting & Pool",
        images: [
            "/image/anniversary.jpeg",
            "/image/decoration2.jpeg",
            "/image/pool5.jpeg",
        ],
        whatsappLink:
            "https://wa.me/919799498256?text=Hello!%20I'm%20interested%20in%20booking%20the%20garden%20for%20an%20anniversary%20celebration.",
    },
    {
        title: "Swimming Pool Party",
        icon: "🏊",
        destinations: ["Pool Party", "Friends", "Family", "Weekend Party"],
        promo: "Refresh & Celebrate | Swimming Pool & Garden Venue",
        images: [
            "/image/pool5.jpeg",
            "/image/decoration2.jpeg",
            "/image/party.webp",
        ],
        whatsappLink:
            "https://wa.me/919799498256?text=Hello!%20I'm%20interested%20in%20booking%20the%20garden%20for%20a%20swimming%20pool%20party.",
    },
    {
        title: "Private Party & Events",
        icon: "🎉",
        destinations: ["Private Party", "Get Together", "Family Events", "Celebrations"],
        promo: "Make It Special | Spacious Garden For Every Occasion",
        images: [
            "/image/party.webp",
            "/image/decoration2.jpeg",
            "/image/wedding2.jpeg",
        ],
        whatsappLink:
            "https://wa.me/919799498256?text=Hello!%20I'm%20interested%20in%20booking%20the%20garden%20for%20a%20private%20party%20or%20event.",
    },
];