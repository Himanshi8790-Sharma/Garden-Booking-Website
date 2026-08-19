"use client";
import { SlideItem} from "@/src/constants/occasionBanner";
import SlideGradientInfo from "./SlideGradientInfo";
import SlideImagePanels from "./SlideImagePanels";
import SlideActions from "./SlideActions";

interface Props {
    slide: SlideItem;
    currentSlide: number;
    slidesCount: number;
    onDotClick: (idx: number) => void;
}

export default function OccasionBannerSlide({
    slide,
    currentSlide,
    slidesCount,
    onDotClick
}: Props) {
    return (
        <div className="w-1/5 h-full relative overflow-hidden flex-shrink-0">
            {/* Left Info Area (Gradient & details) */}
            <SlideGradientInfo
                slide={slide}
                currentSlide={currentSlide}
                slidesCount={slidesCount}
                onDotClick={onDotClick}
            />

            {/* Right Images Area (Skewed Collage Panels) */}
            <SlideImagePanels
                images={slide.images}
                title={slide.title}
            />

            {/* Bottom-Right Action Buttons */}
            <SlideActions whatsappLink={slide.whatsappLink} />
        </div>
    );
}
