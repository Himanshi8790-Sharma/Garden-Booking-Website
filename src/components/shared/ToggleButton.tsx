'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import PerspectiveText from './PerspectiveText';
import { menuEase } from './animations';
import { IoClose } from 'react-icons/io5';

interface Props {
    isActive: boolean;
    toggleMenu: () => void;
}

export default function ToggleButton({ isActive, toggleMenu }: Props) {
    const sliderRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.to(sliderRef.current, {
            top: isActive ? '-100%' : '0%',
            duration: 0.5,
            ease: menuEase,
        });

        gsap.to(buttonRef.current, {
            width: isActive ? 40 : 100,
            duration: 0.5,
            ease: menuEase,
        });
    }, [isActive]);

    return (
        <div
            ref={buttonRef}
            className="absolute top-0 right-0 h-[40px] cursor-pointer rounded-[25px] overflow-hidden shadow-md border border-black/5"
            style={{ width: 100 }}
        >
            <div ref={sliderRef} className="relative w-full h-full" style={{ top: '0%' }}>
                <div
                    className="group w-full h-full bg-[var(--background)] text-[#ab432c] cursor-pointer"
                    onClick={toggleMenu}
                    role="button"
                    aria-label="Open navigation menu"
                >
                    <PerspectiveText label="Menu" />
                </div>
                <div
                    className="w-full h-full bg-[#ab432c] text-white cursor-pointer flex items-center justify-center"
                    onClick={toggleMenu}
                    role="button"
                    aria-label="Close navigation menu"
                >
                    <IoClose size={22} />
                </div>
            </div>
        </div>
    );
}
