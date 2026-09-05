import { Metadata } from 'next';
import HeroSection from '../components/home/hero/HeroSection';
import OccasionBannerSlider from '../components/home/banner-slider/OccasionBannerSlider';

// New simplified homepage components
import GardenPhotos from '../components/home/GardenPhotos';
import GardenAvailability from '../components/home/GardenAvailability';
import GardenBookingCard from '../components/home/GardenBookingCard';

// Old unused homepage sections kept for potential future reuse
// import AboutSection from '../components/home/landing/AboutSection';
// import EventsSection from '../components/home/landing/EventsSection';
// import WhyChooseUsSection from '../components/home/landing/WhyChooseUsSection';
// import PoolSection from '../components/home/landing/PoolSection';
// import GallerySection from '../components/home/landing/GallerySection';
// import PricingSection from '../components/home/landing/PricingSection';
// import TestimonialsSection from '../components/home/landing/TestimonialsSection';
// import FinalCTASection from '../components/home/landing/FinalCTASection';

export const metadata: Metadata = {
    title: "Helping Garden Club | Luxury Wedding & Event Garden Venue",
    description:
        "Book our luxury garden venue for weddings, birthday parties, anniversaries, swimming pool bashes and private celebrations. Enjoy spacious outdoor lawns with a swimming pool.",

    keywords:
        "wedding garden, garden booking venue, birthday party garden, anniversary venue, swimming pool party venue, luxury party garden, event venue for rent",

    openGraph: {
        title: "Helping Garden Club | Luxury Wedding & Event Garden Venue",
        description:
            "A luxury garden venue for weddings, birthdays, anniversaries, pool parties and private celebrations.",
        images: ["/image/garden4.jpeg"],
        type: "website",
    },
};

export default function Home() {
    return (
        <main className="w-full min-h-screen overflow-x-hidden">
            <HeroSection />
            <OccasionBannerSlider />
            <GardenPhotos />
            
            <GardenBookingCard />
            <GardenAvailability />

            {/* Old sections disabled per client requirement
            <AboutSection />
            <EventsSection />
            <WhyChooseUsSection />
            <PoolSection />
            <GallerySection />
            <PricingSection />
            <TestimonialsSection />
            <FinalCTASection />
            */}
        </main>
    );
}
