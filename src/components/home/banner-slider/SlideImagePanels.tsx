"use client";
import Image from "next/image";

interface Props {
    images: [string, string, string];
    title: string;
}

export default function SlideImagePanels({ images, title }: Props) {
    return (
        <>
            {/* Mobile Single Image Panel */}
            <div
                className="absolute inset-y-0 md:hidden pointer-events-none"
                style={{
                    left: "55%",
                    width: "45%",
                    clipPath: "polygon(22.22% 0, 100% 0, 100% 100%, 0% 100%)"
                }}
            >
                <Image
                    src={images[0]}
                    alt={`${title} mobile`}
                    fill
                    sizes="(max-width: 768px) 45vw, 0px"
                    className="object-cover"
                />
            </div>

            {/* Desktop 3-Image Skewed Panels */}
            <div
                className="absolute inset-y-0 hidden md:block pointer-events-none"
                style={{
                    left: "32%",
                    width: "36%",
                    clipPath: "polygon(27.78% 0, 100% 0, 72.22% 100%, 0% 100%)"
                }}
            >
                <Image
                    src={images[0]}
                    alt={`${title} detail 1`}
                    fill
                    sizes="(max-width: 768px) 0px, 460px"
                    className="object-cover"
                />
            </div>
            <div
                className="absolute inset-y-0 hidden md:block pointer-events-none"
                style={{
                    left: "58%",
                    width: "26%",
                    clipPath: "polygon(38.46% 0, 100% 0, 61.54% 100%, 0% 100%)"
                }}
            >
                <Image
                    src={images[1]}
                    alt={`${title} detail 2`}
                    fill
                    sizes="(max-width: 768px) 0px, 333px"
                    className="object-cover"
                />
            </div>
            <div
                className="absolute inset-y-0 hidden md:block pointer-events-none"
                style={{
                    left: "74%",
                    width: "26%",
                    clipPath: "polygon(38.46% 0, 100% 0, 100% 100%, 0% 100%)"
                }}
            >
                <Image
                    src={images[2]}
                    alt={`${title} detail 3`}
                    fill
                    sizes="(max-width: 768px) 0px, 333px"
                    className="object-cover"
                />
            </div>
        </>
    );
}
