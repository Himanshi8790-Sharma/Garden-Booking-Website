
// import type { Metadata } from "next";
// import "./globals.css";
// import Header from "../components/shared/Header";
// import FloatingContact from "../components/shared/FloatingContact";
// import Footer from "../components/shared/Footer";



// export const metadata: Metadata = {
//     title: {
//         default: "Jodha Holidays | Luxury Rajasthan Tours & Royal Heritage Journeys",
//         template: "%s | Jodha Holidays"
//     },
//     description: "Discover India's land of kings with Jodha Holidays. We plan bespoke luxury tours, heritage palace hotel bookings, private driver excursions, and desert safaris starting from Jaipur, Rajasthan.",
//     keywords: ["Rajasthan tours", "Jaipur luxury travel agency", "heritage hotel booking Jaipur", "Rajasthan royal tour packages", "desert safari Jaisalmer", "custom holiday planning Rajasthan"],
// };

// export default function RootLayout({
//     children,
// }: Readonly<{
//     children: React.ReactNode;
// }>) {
//     return (
//         <html
//             lang="en"
//         >
//             <body className="min-h-full flex flex-col">
//                 <Header />
//                 {children}
//                 <Footer />
//                 <FloatingContact />
//             </body>
//         </html>
//     );
// }

import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/shared/Header";
import FloatingContact from "../components/shared/FloatingContact";
import Footer from "../components/shared/Footer";

export const metadata: Metadata = {
    title: {
        default: "Helping Garden Club | Garden & Event Venue in Jaipur",
        template: "%s | Helping Garden Club",
    },
    description:
        "Celebrate your special moments at Helping Garden Club, Jaipur. A beautiful garden and event venue for weddings, birthday parties, anniversaries, family celebrations, and private events, with swimming pool facilities available for booking.",
    keywords: [
        "Helping Garden Club",
        "garden in Jaipur",
        "garden for wedding in Jaipur",
        "wedding venue Jaipur",
        "party garden Jaipur",
        "birthday party venue Jaipur",
        "anniversary party venue Jaipur",
        "event venue Jaipur",
        "swimming pool booking Jaipur",
        "garden booking Jaipur",
        "wedding garden near Jaipur",
        "party venue in Jaipur",
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="min-h-full flex flex-col">
                <Header />
                {children}
                <Footer />
                <FloatingContact />
            </body>
        </html>
    );
}