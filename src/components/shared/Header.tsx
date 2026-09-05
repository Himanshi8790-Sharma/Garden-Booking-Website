// components/shared/Header.tsx
'use client';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import ToggleButton from './ToggleButton';
import Nav from './Nav';
import { menuEase } from './animations';

export default function Header() {
    const [isActive, setIsActive] = useState(false);
    const [navMounted, setNavMounted] = useState(false);
    const [dimensions, setDimensions] = useState({
        width: 480,
        inset: 50,
    });

    const menuRef = useRef<HTMLDivElement>(null);
    const navWrapperRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();

    const toggleMenu = () => {
        setIsActive((prev) => {
            const next = !prev;
            if (next) setNavMounted(true);
            return next;
        });
    };

    const [prevPathname, setPrevPathname] = useState(pathname);

    if (pathname !== prevPathname) {
        setPrevPathname(pathname);
        if (isActive) {
            setIsActive(false);
        }
    }

    // Track window resize to ensure responsive menu dimensions
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setDimensions({
                width: width < 640 ? width : 480,
                inset: width < 640 ? 20 : 50,
            });
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Animate the menu container (open/close)
    useEffect(() => {
        if (!menuRef.current) return;

        const targetWidth = isActive ? dimensions.width : 100;
        const targetInset = isActive ? -dimensions.inset : 0;

        gsap.to(menuRef.current, {
            width: targetWidth,
            height: isActive ? '100vh' : 40,
            top: targetInset,
            right: targetInset,
            borderTopLeftRadius: 25,
            borderBottomLeftRadius: 25,
            borderTopRightRadius: isActive ? 0 : 25,
            borderBottomRightRadius: isActive ? 0 : 25,
            duration: 0.75,
            delay: isActive ? 0 : 0.35,
            ease: menuEase,
        });
    }, [isActive, dimensions]);

    // Animate Nav content in/out (mirrors AnimatePresence exit behaviour)
    useEffect(() => {
        if (!navWrapperRef.current) return;

        if (isActive) {
            gsap.set(navWrapperRef.current, { opacity: 1 });
        } else if (navMounted) {
            gsap.to(navWrapperRef.current, {
                opacity: 0,
                duration: 0.5,
                ease: 'power1.inOut',
                onComplete: () => setNavMounted(false),
            });
        }
    }, [isActive, navMounted]);

    return (
        <>
            {/* Sticky Logo */}
            <div className="absolute sm:fixed top-[12px] left-[20px] sm:top-[38px] sm:left-[50px] lg:top-[30px] lg:left-[50px] z-50">

                <Link href="/" aria-label="Helping Garden Club" className="block transition-transform duration-300 hover:scale-105 active:scale-95">
                    <div className="relative h-14 w-14 sm:h-16 sm:w-16 lg:h-20 lg:w-20">
                        <Image
                            src="/image/logo_final.webp"
                            alt="Helping Garden Club Logo"
                            fill
                            priority
                            fetchPriority="high"
                            sizes="(max-width: 640px) 56px, (max-width: 1024px) 64px, 80px"
                            className="object-contain object-left"
                        />

                    </div>
                </Link>
            </div>

            {/* Hamburger Menu Container */}
            {/* <div className="fixed right-[20px] top-[20px] sm:right-[50px] sm:top-[50px] z-50">
                <div
                    ref={menuRef}
                    className={`relative bg-[var(--background)] overflow-hidden transition-shadow duration-300 ${isActive ? 'shadow-2xl border-l border-black/5' : ''}`}
                    style={{
                        width: 100,
                        height: 40,
                        top: 0,
                        right: 0,
                        borderTopLeftRadius: 25,
                        borderBottomLeftRadius: 25,
                        borderTopRightRadius: 25,
                        borderBottomRightRadius: 25,
                    }}
                >
                    {navMounted && <Nav wrapperRef={navWrapperRef} onLinkClick={toggleMenu} />}
                </div>
                <ToggleButton isActive={isActive} toggleMenu={toggleMenu} />
            </div> */}
        </>
    );
}
