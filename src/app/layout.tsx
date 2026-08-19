// import type { Metadata } from "next";
// import { Inter, Playfair_Display } from "next/font/google";
// import "./globals.css";
// import Navbar from "@/src/layout/Navbar";

// // import Footer from "@/components/Footer";

// const playfair = Playfair_Display({
//   variable: "--font-heading",
//   subsets: ["latin"],
// });

// const inter = Inter({
//   variable: "--font-body",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Helping Garden | Events & Celebrations",
//   description:
//     "A beautiful garden venue for weddings, birthdays, anniversaries and special celebrations.",
// };

// export default function RootLayout({
//   children,
// }: LayoutProps<"/">) {
//   return (
//     <html
//       lang="en"
//       className={`${playfair.variable} ${inter.variable} h-full antialiased`}
//     >
//       <body className="min-h-full flex flex-col">
//         <Navbar />

//         <main className="flex-1">
//           {children}
//         </main>

//         {/* <Footer /> */}
//       </body>
//     </html>
//   );
// }
import type { Metadata } from "next";
import "./globals.css";
// import { Inter, Playfair_Display } from "next/font/google";
import Header from "../components/shared/Header";
import FloatingContact from "../components/shared/FloatingContact";
import Footer from "../components/shared/Footer";

// const inter = Inter({
//     subsets: ["latin"],
//     variable: "--font-inter",
//     display: "swap",
//     });

// const playfair = Playfair_Display({
//     subsets: ["latin"],
//     variable: "--font-playfair",
//     display: "swap",
// });

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

