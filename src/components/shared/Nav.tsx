'use client';
import { useEffect, useRef, RefObject } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { linkEase } from './animations';
import Link from 'next/link';

interface LinkItem {
    title: string;
    href: string;
}

interface Props {
    wrapperRef: RefObject<HTMLDivElement | null>;
    onLinkClick?: () => void;
}

const links: LinkItem[] = [
    { title: 'Home', href: '/' },
    { title: 'About', href: '/about' },
    { title: 'Tour Packages', href: '/tour-packages' },
    { title: 'Gallery', href: '/gallery' },
    { title: 'Testimonial', href: '/testimonials' },
    { title: 'Contact', href: '/contact' },
];

export default function Nav({ wrapperRef, onLinkClick }: Props) {
    const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
    const watermarkRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();

    useEffect(() => {
        const linkEls = linkRefs.current;

        gsap.set(linkEls, { opacity: 0, rotateX: 90, y: 80, x: -20 });
        gsap.set(watermarkRef.current, { opacity: 0, y: 40 });

        linkEls.forEach((el, i) => {
            gsap.to(el, {
                opacity: 1,
                rotateX: 0,
                y: 0,
                x: 0,
                duration: 0.65,
                delay: 0.5 + i * 0.1,
                ease: linkEase,
            });
        });

        gsap.to(watermarkRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.85,
            delay: 0.8,
            ease: 'power3.out',
        });
    }, []);

    const handleLinkClick = () => {
        if (onLinkClick) {
            onLinkClick();
        }
    };

    const isActiveLink = (href: string) => {
        if (href === '/') {
            return pathname === '/';
        }
        return pathname === href || pathname?.startsWith(`${href}/`);
    };

    return (
        <div
            ref={wrapperRef}
            className="relative flex h-full flex-col justify-between box-border px-6 sm:px-10 pt-[80px] sm:pt-[100px] pb-8 sm:pb-[50px]"
        >
            <div className="flex flex-col gap-[10px] z-10">
                {links.map((link, i) => {
                    const active = isActiveLink(link.href);
                    return (
                        <div key={`b_${i}`} className="[perspective:120px] [perspective-origin:bottom]">
                            <div style={{ transformStyle: 'preserve-3d' }}>
                                <Link
                                    href={link.href}
                                    aria-label={`Navigate to ${link.title}`}
                                    ref={(el) => {
                                        linkRefs.current[i] = el;
                                    }}
                                    onClick={handleLinkClick}
                                    className={`no-underline text-[32px] sm:text-[46px] block transition-colors ${active
                                        ? 'text-[#ab432c]'
                                        : 'text-[#0f172a] hover:text-[#ab432c]'
                                        }`}
                                >
                                    {link.title}
                                    {active && (
                                        <span className="ml-3 text-[#ab432c] text-sm sm:text-base font-light">
                                            ✦
                                        </span>
                                    )}
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Watermark 'JODHA' (very light, half cut off at the bottom) */}
            <div
                ref={watermarkRef}
                className="absolute bottom-0 left-0 right-0 h-[15vw] sm:h-[4.5rem] overflow-hidden pointer-events-none select-none z-0"
                style={{ opacity: 0 }}
            >
                <span className="absolute top-0 left-0 right-0 text-8xl sm:text-[7.2rem] font-serif italic font-light text-[#0f172a]/[0.05] leading-none tracking-normal block text-center select-none whitespace-nowrap">
                    JODHA
                </span>
            </div>
        </div>
    );
}