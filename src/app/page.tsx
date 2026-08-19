import { Metadata } from 'next';
import HeroSection from '../components/home/hero/HeroSection';
import OccasionBannerSlider from '../components/home/banner-slider/OccasionBannerSlider';
// import DestinationsGrid from "@/components/home/destinations/DestinationsGrid";
// import GallerySection from "@/components/home/gallery/GallerySection";
// import ReviewsSection from "@/components/home/reviews/ReviewsSection";
// import ProcessSection from "@/components/home/process/ProcessSection";
// import WhyChooseUs from "@/components/home/features/WhyChooseUs";
// import FaqSection from "@/components/home/faq/FaqSection";
export const metadata: Metadata = {
    title: "Helping Garden Club | Wedding & Party Garden in Jaipur",
    description:
        "Book our beautiful garden venue in Jaipur for weddings, birthday parties, anniversaries, pool parties and private celebrations. Enjoy a spacious outdoor venue with a swimming pool.",

    keywords:
        "wedding garden Jaipur, garden booking Jaipur, birthday party venue Jaipur, anniversary party venue Jaipur, wedding venue Jaipur, swimming pool party Jaipur, party garden Jaipur, garden for rent Jaipur",

    openGraph: {
        title: "Helping Garden Club | Wedding & Party Garden in Jaipur",
        description:
            "A beautiful garden venue for weddings, birthdays, anniversaries, pool parties and private celebrations in Jaipur.",
        images: ["/images/HeroGarden.jpg"],
        type: "website",
    },
};

export default function Home() {
    return (
        <main className="w-full min-h-screen">
            <HeroSection />
            <OccasionBannerSlider />
            {/* <DestinationsGrid />
            <GallerySection />
            <ReviewsSection />
            <ProcessSection />
            <WhyChooseUs />
            <FaqSection /> */}
        </main>
    );
}
