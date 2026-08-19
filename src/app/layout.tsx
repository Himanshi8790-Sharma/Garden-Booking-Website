
import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/shared/Header";
import FloatingContact from "../components/shared/FloatingContact";
import Footer from "../components/shared/Footer";



export const metadata: Metadata = {
    title: {
        default: "Jodha Holidays | Luxury Rajasthan Tours & Royal Heritage Journeys",
        template: "%s | Jodha Holidays"
    },
    description: "Discover India's land of kings with Jodha Holidays. We plan bespoke luxury tours, heritage palace hotel bookings, private driver excursions, and desert safaris starting from Jaipur, Rajasthan.",
    keywords: ["Rajasthan tours", "Jaipur luxury travel agency", "heritage hotel booking Jaipur", "Rajasthan royal tour packages", "desert safari Jaisalmer", "custom holiday planning Rajasthan"],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
        >
            <body className="min-h-full flex flex-col">
                <Header />
                {children}
                <Footer />
                <FloatingContact />
            </body>
        </html>
    );
}

