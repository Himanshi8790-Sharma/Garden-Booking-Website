
// "use client";

// import { useEffect, useRef, useState } from "react";
// import Image from "next/image";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import {
//   FiStar,
//   FiArrowLeft,
//   FiArrowRight,
//   FiHeart,
// } from "react-icons/fi";
// import { FaQuoteLeft } from "react-icons/fa";

// if (typeof window !== "undefined") {
//   gsap.registerPlugin(ScrollTrigger);
// }

// interface Testimonial {
//   id: string;
//   quote: string;
//   author: string;
//   role: string;
//   eventType: string;
//   rating: number;
//   avatar: string;
// }

// const testimonials: Testimonial[] = [
//   {
//     id: "t1",
//     quote:
//       "The garden was such a beautiful setting for our wedding. The greenery, open space and peaceful atmosphere made the entire celebration feel truly special.",
//     author: "Priya & Rohan",
//     role: "Bride & Groom",
//     eventType: "Wedding Celebration",
//     rating: 5,
//     avatar: "/assets/avatar_one.png",
//   },
//   {
//     id: "t2",
//     quote:
//       "We celebrated a birthday here and absolutely loved the space. The garden gave everyone room to enjoy themselves while the pool made the celebration even more fun.",
//     author: "Ananya Mehta",
//     role: "Birthday Host",
//     eventType: "Birthday Party",
//     rating: 5,
//     avatar: "/assets/avatar_two.png",
//   },
//   {
//     id: "t3",
//     quote:
//       "Our anniversary celebration felt intimate and beautiful. The garden looked lovely in the evening and created exactly the warm atmosphere we wanted.",
//     author: "Vikram & Family",
//     role: "Family Celebration",
//     eventType: "Anniversary",
//     rating: 5,
//     avatar: "/assets/avatar_three.png",
//   },
//   {
//     id: "t4",
//     quote:
//       "A wonderful place for a family gathering. There was plenty of open space for everyone, and the whole venue felt comfortable, private and welcoming.",
//     author: "Neha Sharma",
//     role: "Family Host",
//     eventType: "Family Celebration",
//     rating: 5,
//     avatar: "/assets/avatar_one.png",
//   },
//   {
//     id: "t5",
//     quote:
//       "The pool area was the highlight of our celebration. Everyone had a great time and the garden gave us the perfect space to spend the whole day together.",
//     author: "Karan & Friends",
//     role: "Celebration Host",
//     eventType: "Pool Party",
//     rating: 5,
//     avatar: "/assets/avatar_two.png",
//   },
//   {
//     id: "t6",
//     quote:
//       "From the beautiful surroundings to the relaxed atmosphere, everything came together perfectly. It was a lovely place to celebrate with our loved ones.",
//     author: "Meera & Family",
//     role: "Event Host",
//     eventType: "Private Celebration",
//     rating: 5,
//     avatar: "/assets/avatar_three.png",
//   },
// ];

// export default function TestimonialsSection() {
//   const sectionRef = useRef<HTMLElement>(null);
//   const headerRef = useRef<HTMLDivElement>(null);
//   const sliderRef = useRef<HTMLDivElement>(null);

//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);

//   const active = testimonials[activeIndex];

//   /* -----------------------------------------
//      SECTION REVEAL
//   ----------------------------------------- */

//   useEffect(() => {
//     const reducedMotion =
//       typeof window !== "undefined" &&
//       window.matchMedia("(prefers-reduced-motion: reduce)").matches;

//     if (reducedMotion) return;

//     const ctx = gsap.context(() => {
//       gsap.fromTo(
//         headerRef.current,
//         {
//           opacity: 0,
//           y: 25,
//         },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 0.75,
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top 82%",
//             once: true,
//           },
//         }
//       );

//       gsap.fromTo(
//         sliderRef.current,
//         {
//           opacity: 0,
//           y: 30,
//         },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 0.8,
//           delay: 0.1,
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: sliderRef.current,
//             start: "top 85%",
//             once: true,
//           },
//         }
//       );
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   /* -----------------------------------------
//      CHANGE SLIDE
//   ----------------------------------------- */

//   const changeSlide = (direction: "next" | "prev") => {
//     if (isAnimating) return;

//     setIsAnimating(true);

//     const nextIndex =
//       direction === "next"
//         ? (activeIndex + 1) % testimonials.length
//         : (activeIndex - 1 + testimonials.length) %
//           testimonials.length;

//     const currentCard = document.querySelector(
//       ".testimonial-main"
//     );

//     if (!currentCard) {
//       setActiveIndex(nextIndex);
//       setIsAnimating(false);
//       return;
//     }

//     const exitX = direction === "next" ? -28 : 28;

//     gsap.to(currentCard, {
//       opacity: 0,
//       x: exitX,
//       duration: 0.22,
//       ease: "power2.in",
//       onComplete: () => {
//         setActiveIndex(nextIndex);

//         requestAnimationFrame(() => {
//           gsap.fromTo(
//             ".testimonial-main",
//             {
//               opacity: 0,
//               x: -exitX,
//             },
//             {
//               opacity: 1,
//               x: 0,
//               duration: 0.38,
//               ease: "power3.out",
//               onComplete: () => {
//                 setIsAnimating(false);
//               },
//             }
//           );
//         });
//       },
//     });
//   };

//   /* -----------------------------------------
//      AUTO SLIDER
//   ----------------------------------------- */

//   useEffect(() => {
//     const timer = setInterval(() => {
//       changeSlide("next");
//     }, 6500);

//     return () => clearInterval(timer);
//   }, [activeIndex, isAnimating]);

//   return (
//     <section
//       ref={sectionRef}
//       aria-label="Guest Testimonials"
//       className="
//         relative
//         w-full
//         py-20
//         md:py-24
//         px-6
//         md:px-12
//         lg:px-20
//         bg-[var(--background-secondary)]
//         border-b
//         border-[var(--border)]
//         overflow-hidden
//       "
//     >
//       {/* Background glow */}

//       <div
//         className="
//           absolute
//           -top-40
//           -left-40
//           w-[420px]
//           h-[420px]
//           rounded-full
//           bg-[var(--primary)]/5
//           blur-3xl
//           pointer-events-none
//         "
//       />

//       <div
//         className="
//           absolute
//           -bottom-40
//           -right-40
//           w-[420px]
//           h-[420px]
//           rounded-full
//           bg-[var(--accent)]/5
//           blur-3xl
//           pointer-events-none
//         "
//       />

//       <div className="relative max-w-6xl mx-auto">

//         {/* -----------------------------------------
//             HEADER
//         ----------------------------------------- */}

//         <div
//           ref={headerRef}
//           className="
//             max-w-2xl
//             mx-auto
//             text-center
//             flex
//             flex-col
//             items-center
//           "
//         >
//           <span
//             className="
//               inline-flex
//               items-center
//               gap-2
//               text-[10px]
//               sm:text-xs
//               uppercase
//               tracking-[0.25em]
//               text-[var(--accent)]
//               font-semibold
//               px-3.5
//               py-1
//               bg-[var(--accent)]/10
//               rounded-full
//               border
//               border-[var(--accent)]/20
//               font-sans
//             "
//           >
//             <FiHeart className="text-xs" />
//             Guest Stories
//           </span>

//           <h2
//             className="
//               mt-4
//               text-3xl
//               sm:text-4xl
//               md:text-5xl
//               font-serif
//               text-[var(--foreground)]
//               leading-tight
//               font-normal
//             "
//           >
//             Moments Our Guests
//             <br />

//             <span className="italic font-light text-[var(--primary)]">
//               Loved The Most
//             </span>
//           </h2>

//           <p
//             className="
//               mt-4
//               max-w-xl
//               text-sm
//               md:text-base
//               text-[var(--foreground-muted)]
//               font-sans
//               font-light
//               leading-relaxed
//             "
//           >
//             A few words from families and friends who chose Helping Garden
//             Club for their special celebrations.
//           </p>
//         </div>

//         {/* -----------------------------------------
//             SLIDER
//         ----------------------------------------- */}

//         <div
//           ref={sliderRef}
//           className="
//             relative
//             mt-12
//             md:mt-14
//             max-w-5xl
//             mx-auto
//           "
//         >

//           {/* Desktop previous preview */}

//           <div
//             className="
//               hidden
//               lg:block
//               absolute
//               left-0
//               top-1/2
//               -translate-y-1/2
//               -translate-x-12
//               w-32
//               h-44
//               rounded-2xl
//               overflow-hidden
//               opacity-25
//               scale-90
//               pointer-events-none
//             "
//           >
//             <Image
//               src={
//                 testimonials[
//                   (activeIndex - 1 + testimonials.length) %
//                     testimonials.length
//                 ].avatar
//               }
//               alt=""
//               fill
//               className="object-cover"
//             />

//             <div className="absolute inset-0 bg-[var(--primary-dark)]/60" />
//           </div>

//           {/* Desktop next preview */}

//           <div
//             className="
//               hidden
//               lg:block
//               absolute
//               right-0
//               top-1/2
//               -translate-y-1/2
//               translate-x-12
//               w-32
//               h-44
//               rounded-2xl
//               overflow-hidden
//               opacity-25
//               scale-90
//               pointer-events-none
//             "
//           >
//             <Image
//               src={
//                 testimonials[
//                   (activeIndex + 1) % testimonials.length
//                 ].avatar
//               }
//               alt=""
//               fill
//               className="object-cover"
//             />

//             <div className="absolute inset-0 bg-[var(--primary-dark)]/60" />
//           </div>

//           {/* Main testimonial */}

//           <div
//             className="
//               testimonial-main
//               relative
//               max-w-3xl
//               mx-auto
//               rounded-[1.75rem]
//               md:rounded-[2rem]
//               bg-[var(--card)]
//               border
//               border-[var(--border)]
//               shadow-lg
//               overflow-hidden
//             "
//           >

//             {/* Top accent */}

//             <div
//               className="
//                 absolute
//                 top-0
//                 left-0
//                 w-full
//                 h-[2px]
//                 bg-gradient-to-r
//                 from-transparent
//                 via-[var(--accent)]
//                 to-transparent
//               "
//             />

//             <div
//               className="
//                 grid
//                 grid-cols-1
//                 md:grid-cols-[180px_1fr]
//                 min-h-[280px]
//                 md:min-h-[300px]
//               "
//             >

//               {/* Image */}

//               <div
//                 className="
//                   relative
//                   hidden
//                   md:block
//                   overflow-hidden
//                 "
//               >
//                 <Image
//                   src={active.avatar}
//                   alt={active.author}
//                   fill
//                   sizes="180px"
//                   className="
//                     object-cover
//                     transition-transform
//                     duration-700
//                   "
//                 />

//                 <div
//                   className="
//                     absolute
//                     inset-0
//                     bg-gradient-to-t
//                     from-[var(--primary-dark)]/70
//                     via-transparent
//                     to-transparent
//                   "
//                 />

//                 <div
//                   className="
//                     absolute
//                     bottom-5
//                     left-5
//                     text-white
//                   "
//                 >
//                   <span
//                     className="
//                       text-[9px]
//                       uppercase
//                       tracking-[0.18em]
//                       font-semibold
//                       text-[var(--accent-light)]
//                     "
//                   >
//                     {active.eventType}
//                   </span>
//                 </div>
//               </div>

//               {/* Content */}

//               <div
//                 className="
//                   relative
//                   flex
//                   flex-col
//                   justify-center
//                   px-7
//                   py-9
//                   sm:px-10
//                   md:px-12
//                 "
//               >

//                 {/* Quote icon */}

//                 <div
//                   className="
//                     absolute
//                     top-6
//                     right-7
//                     text-4xl
//                     text-[var(--accent)]/10
//                   "
//                 >
//                   <FaQuoteLeft />
//                 </div>

//                 {/* Mobile event */}

//                 <div
//                   className="
//                     md:hidden
//                     mb-4
//                     text-[9px]
//                     uppercase
//                     tracking-[0.18em]
//                     text-[var(--accent)]
//                     font-semibold
//                     font-sans
//                   "
//                 >
//                   {active.eventType}
//                 </div>

//                 {/* Stars */}

//                 <div className="flex items-center gap-1 mb-5">
//                   {Array.from({
//                     length: active.rating,
//                   }).map((_, index) => (
//                     <FiStar
//                       key={index}
//                       className="
//                         w-3.5
//                         h-3.5
//                         fill-[var(--accent)]
//                         text-[var(--accent)]
//                       "
//                     />
//                   ))}
//                 </div>

//                 {/* Quote */}

//                 <blockquote
//                   className="
//                     max-w-2xl
//                     text-lg
//                     sm:text-xl
//                     md:text-[1.35rem]
//                     font-serif
//                     text-[var(--foreground)]
//                     leading-relaxed
//                   "
//                 >
//                   &ldquo;{active.quote}&rdquo;
//                 </blockquote>

//                 {/* Author */}

//                 <div className="mt-6">
//                   <h3
//                     className="
//                       text-base
//                       md:text-lg
//                       font-serif
//                       text-[var(--foreground)]
//                     "
//                   >
//                     {active.author}
//                   </h3>

//                   <p
//                     className="
//                       mt-0.5
//                       text-[10px]
//                       uppercase
//                       tracking-[0.15em]
//                       text-[var(--foreground-muted)]
//                       font-sans
//                     "
//                   >
//                     {active.role}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* -----------------------------------------
//               CONTROLS
//           ----------------------------------------- */}

//           <div
//             className="
//               mt-6
//               flex
//               items-center
//               justify-center
//               gap-4
//             "
//           >
//             {/* Previous */}

//             <button
//               type="button"
//               onClick={() => changeSlide("prev")}
//               disabled={isAnimating}
//               aria-label="Previous testimonial"
//               className="
//                 w-9
//                 h-9
//                 rounded-full
//                 border
//                 border-[var(--border)]
//                 bg-[var(--card)]
//                 text-[var(--foreground)]
//                 flex
//                 items-center
//                 justify-center
//                 hover:border-[var(--accent)]
//                 hover:text-[var(--primary)]
//                 transition-all
//                 duration-300
//                 disabled:opacity-40
//                 cursor-pointer
//               "
//             >
//               <FiArrowLeft className="text-sm" />
//             </button>

//             {/* Dots */}

//             <div className="flex items-center gap-2">
//               {testimonials.map((item, index) => (
//                 <button
//                   key={item.id}
//                   type="button"
//                   aria-label={`Show testimonial ${index + 1}`}
//                   onClick={() => {
//                     if (index === activeIndex || isAnimating) return;

//                     changeSlide(
//                       index > activeIndex ? "next" : "prev"
//                     );
//                   }}
//                   className={`
//                     h-1.5
//                     rounded-full
//                     transition-all
//                     duration-300
//                     cursor-pointer
//                     ${
//                       index === activeIndex
//                         ? "w-7 bg-[var(--primary)]"
//                         : "w-1.5 bg-[var(--border)] hover:bg-[var(--accent)]"
//                     }
//                   `}
//                 />
//               ))}
//             </div>

//             {/* Next */}

//             <button
//               type="button"
//               onClick={() => changeSlide("next")}
//               disabled={isAnimating}
//               aria-label="Next testimonial"
//               className="
//                 w-9
//                 h-9
//                 rounded-full
//                 border
//                 border-[var(--border)]
//                 bg-[var(--card)]
//                 text-[var(--foreground)]
//                 flex
//                 items-center
//                 justify-center
//                 hover:border-[var(--accent)]
//                 hover:text-[var(--primary)]
//                 transition-all
//                 duration-300
//                 disabled:opacity-40
//                 cursor-pointer
//               "
//             >
//               <FiArrowRight className="text-sm" />
//             </button>
//           </div>

//           {/* Counter */}

//           <div
//             className="
//               mt-3
//               text-center
//               text-[9px]
//               uppercase
//               tracking-[0.2em]
//               text-[var(--foreground-muted)]
//               font-sans
//             "
//           >
//             {String(activeIndex + 1).padStart(2, "0")}{" "}
//             /{" "}
//             {String(testimonials.length).padStart(2, "0")}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FiStar,
  FiArrowLeft,
  FiArrowRight,
  FiHeart,
} from "react-icons/fi";
import { FaQuoteLeft } from "react-icons/fa";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  eventType: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "The garden was such a beautiful setting for our wedding. The greenery, open space and peaceful atmosphere made the entire celebration feel truly special.",
    author: "Priya & Rohan",
    role: "Bride & Groom",
    eventType: "Wedding Celebration",
    rating: 5,
    avatar: "/images/wedding.webp",
  },
  {
    id: "t2",
    quote:
      "We celebrated a birthday here and absolutely loved the space. The garden gave everyone room to enjoy themselves while the pool made the celebration even more fun.",
    author: "Ananya Mehta",
    role: "Birthday Host",
    eventType: "Birthday Party",
    rating: 5,
    avatar: "/images/birthday.webp",
  },
  {
    id: "t3",
    quote:
      "Our anniversary celebration felt intimate and beautiful. The garden looked lovely in the evening and created exactly the warm atmosphere we wanted.",
    author: "Vikram & Family",
    role: "Family Celebration",
    eventType: "Anniversary",
    rating: 5,
    avatar: "/images/anniversary.webp",
  },
  {
    id: "t4",
    quote:
      "A wonderful place for a family gathering. There was plenty of open space for everyone, and the whole venue felt comfortable, private and welcoming.",
    author: "Neha Sharma",
    role: "Family Host",
    eventType: "Family Celebration",
    rating: 5,
    avatar: "/images/garden.webp",
  },
  {
    id: "t5",
    quote:
      "The pool area was the highlight of our celebration. Everyone had a great time and the garden gave us the perfect space to spend the whole day together.",
    author: "Karan & Friends",
    role: "Celebration Host",
    eventType: "Pool Party",
    rating: 5,
    avatar: "/images/pool.webp",
  },
  {
    id: "t6",
    quote:
      "From the beautiful surroundings to the relaxed atmosphere, everything came together perfectly. It was a lovely place to celebrate with our loved ones.",
    author: "Meera & Family",
    role: "Event Host",
    eventType: "Private Celebration",
    rating: 5,
    avatar: "/images/party.webp",
  },
];

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const active = testimonials[activeIndex];

  /* -----------------------------------------
     SECTION REVEAL
  ----------------------------------------- */

  useEffect(() => {
    const reducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        {
          opacity: 0,
          y: 25,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 82%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        sliderRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sliderRef.current,
            start: "top 85%",
            once: true,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /* -----------------------------------------
     CHANGE SLIDE
  ----------------------------------------- */

  const changeSlide = (direction: "next" | "prev") => {
    if (isAnimating) return;

    setIsAnimating(true);

    const nextIndex =
      direction === "next"
        ? (activeIndex + 1) % testimonials.length
        : (activeIndex - 1 + testimonials.length) %
          testimonials.length;

    const currentCard = document.querySelector(".testimonial-main");

    if (!currentCard) {
      setActiveIndex(nextIndex);
      setIsAnimating(false);
      return;
    }

    const exitX = direction === "next" ? -28 : 28;

    gsap.to(currentCard, {
      opacity: 0,
      x: exitX,
      duration: 0.22,
      ease: "power2.in",
      onComplete: () => {
        setActiveIndex(nextIndex);

        requestAnimationFrame(() => {
          gsap.fromTo(
            ".testimonial-main",
            {
              opacity: 0,
              x: -exitX,
            },
            {
              opacity: 1,
              x: 0,
              duration: 0.38,
              ease: "power3.out",
              onComplete: () => {
                setIsAnimating(false);
              },
            },
          );
        });
      },
    });
  };

  /* -----------------------------------------
     AUTO SLIDER
  ----------------------------------------- */

  useEffect(() => {
    const timer = setInterval(() => {
      changeSlide("next");
    }, 6500);

    return () => clearInterval(timer);
  }, [activeIndex, isAnimating]);

  return (
    <section
      ref={sectionRef}
      aria-label="Guest Testimonials"
      className="
        relative
        w-full
        py-15
      
        px-6
       
        bg-[var(--background-secondary)]
        border-b
        border-[var(--border)]
        overflow-hidden
      "
    >
      {/* Background glow */}

      <div
        className="
          absolute
          -top-40
          -left-40
          w-[420px]
          h-[420px]
          rounded-full
          bg-[var(--primary)]/5
          blur-3xl
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          -bottom-40
          -right-40
          w-[420px]
          h-[420px]
          rounded-full
          bg-[var(--accent)]/5
          blur-3xl
          pointer-events-none
        "
      />

      <div className="relative max-w-6xl mx-auto">

        {/* -----------------------------------------
            HEADER
        ----------------------------------------- */}

        <div
          ref={headerRef}
          className="
            max-w-2xl
            mx-auto
            text-center
            flex
            flex-col
            items-center
          "
        >
          <span
            className="
              inline-flex
              items-center
              gap-2
              text-[10px]
              sm:text-xs
              uppercase
              tracking-[0.25em]
              text-[var(--accent)]
              font-semibold
              px-3.5
              py-1
              bg-[var(--accent)]/10
              rounded-full
              border
              border-[var(--accent)]/20
              font-sans
            "
          >
            <FiHeart className="text-xs" />
            Guest Stories
          </span>

          <h2
            className="
              mt-4
              text-3xl
              sm:text-4xl
              md:text-5xl
              font-serif
              text-[var(--foreground)]
              leading-tight
              font-normal
            "
          >
            Moments Our Guests
            <br />

            <span className="italic font-light text-[var(--primary)]">
              Loved The Most
            </span>
          </h2>

          <p
            className="
              mt-4
              max-w-xl
              text-sm
              md:text-base
              text-[var(--foreground-muted)]
              font-sans
              font-light
              leading-relaxed
            "
          >
            A few words from families and friends who chose Helping Garden
            Club for their special celebrations.
          </p>
        </div>

        {/* -----------------------------------------
            SLIDER
        ----------------------------------------- */}

        <div
          ref={sliderRef}
          className="
            relative
            mt-12
            md:mt-14
            max-w-5xl
            mx-auto
          "
        >

          {/* Desktop previous preview */}

          <div
            className="
              hidden
              lg:block
              absolute
              left-0
              top-1/2
              -translate-y-1/2
              -translate-x-12
              w-32
              h-44
              rounded-2xl
              overflow-hidden
              opacity-25
              scale-90
              pointer-events-none
            "
          >
            <Image
              src={
                testimonials[
                  (activeIndex - 1 + testimonials.length) %
                    testimonials.length
                ].avatar
              }
              alt=""
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-[var(--primary-dark)]/60" />
          </div>

          {/* Desktop next preview */}

          <div
            className="
              hidden
              lg:block
              absolute
              right-0
              top-1/2
              -translate-y-1/2
              translate-x-12
              w-32
              h-44
              rounded-2xl
              overflow-hidden
              opacity-25
              scale-90
              pointer-events-none
            "
          >
            <Image
              src={
                testimonials[
                  (activeIndex + 1) % testimonials.length
                ].avatar
              }
              alt=""
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-[var(--primary-dark)]/60" />
          </div>

          {/* Main testimonial */}

          <div
            className="
              testimonial-main
              relative
              max-w-3xl
              mx-auto
              rounded-[1.75rem]
              md:rounded-[2rem]
              bg-[var(--card)]
              border
              border-[var(--border)]
              shadow-lg
              overflow-hidden
            "
          >

            {/* Top accent */}

            <div
              className="
                absolute
                top-0
                left-0
                w-full
                h-[2px]
                bg-gradient-to-r
                from-transparent
                via-[var(--accent)]
                to-transparent
              "
            />

            <div
              className="
                grid
                grid-cols-1
                md:grid-cols-[180px_1fr]
                min-h-[280px]
                md:min-h-[300px]
              "
            >

              {/* Event Image */}

              <div
                className="
                  relative
                  hidden
                  md:block
                  overflow-hidden
                "
              >
                <Image
                  src={active.avatar}
                  alt={active.eventType}
                  fill
                  sizes="180px"
                  className="
                    object-cover
                    transition-transform
                    duration-700
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[var(--primary-dark)]/70
                    via-transparent
                    to-transparent
                  "
                />

                <div
                  className="
                    absolute
                    bottom-5
                    left-5
                    text-white
                  "
                >
                  <span
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.18em]
                      font-semibold
                      text-[var(--accent-light)]
                    "
                  >
                    {active.eventType}
                  </span>
                </div>
              </div>

              {/* Content */}

              <div
                className="
                  relative
                  flex
                  flex-col
                  justify-center
                  px-7
                  py-9
                  sm:px-10
                  md:px-12
                "
              >

                {/* Quote icon */}

                <div
                  className="
                    absolute
                    top-6
                    right-7
                    text-4xl
                    text-[var(--accent)]/10
                  "
                >
                  <FaQuoteLeft />
                </div>

                {/* Mobile event */}

                <div
                  className="
                    md:hidden
                    mb-4
                    text-[9px]
                    uppercase
                    tracking-[0.18em]
                    text-[var(--accent)]
                    font-semibold
                    font-sans
                  "
                >
                  {active.eventType}
                </div>

                {/* Stars */}

                <div className="flex items-center gap-1 mb-5">
                  {Array.from({
                    length: active.rating,
                  }).map((_, index) => (
                    <FiStar
                      key={index}
                      className="
                        w-3.5
                        h-3.5
                        fill-[var(--accent)]
                        text-[var(--accent)]
                      "
                    />
                  ))}
                </div>

                {/* Quote */}

                <blockquote
                  className="
                    max-w-2xl
                    text-lg
                    sm:text-xl
                    md:text-[1.35rem]
                    font-serif
                    text-[var(--foreground)]
                    leading-relaxed
                  "
                >
                  &ldquo;{active.quote}&rdquo;
                </blockquote>

                {/* Author */}

                <div className="mt-6">
                  <h3
                    className="
                      text-base
                      md:text-lg
                      font-serif
                      text-[var(--foreground)]
                    "
                  >
                    {active.author}
                  </h3>

                  <p
                    className="
                      mt-0.5
                      text-[10px]
                      uppercase
                      tracking-[0.15em]
                      text-[var(--foreground-muted)]
                      font-sans
                    "
                  >
                    {active.role}
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* -----------------------------------------
              CONTROLS
          ----------------------------------------- */}

          <div
            className="
              mt-6
              flex
              items-center
              justify-center
              gap-4
            "
          >

            {/* Previous */}

            <button
              type="button"
              onClick={() => changeSlide("prev")}
              disabled={isAnimating}
              aria-label="Previous testimonial"
              className="
                w-9
                h-9
                rounded-full
                border
                border-[var(--border)]
                bg-[var(--card)]
                text-[var(--foreground)]
                flex
                items-center
                justify-center
                hover:border-[var(--accent)]
                hover:text-[var(--primary)]
                transition-all
                duration-300
                disabled:opacity-40
                cursor-pointer
              "
            >
              <FiArrowLeft className="text-sm" />
            </button>

            {/* Dots */}

            <div className="flex items-center gap-2">
              {testimonials.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  aria-label={`Show testimonial ${index + 1}`}
                  onClick={() => {
                    if (index === activeIndex || isAnimating) return;

                    changeSlide(
                      index > activeIndex ? "next" : "prev",
                    );
                  }}
                  className={`
                    h-1.5
                    rounded-full
                    transition-all
                    duration-300
                    cursor-pointer
                    ${
                      index === activeIndex
                        ? "w-7 bg-[var(--primary)]"
                        : "w-1.5 bg-[var(--border)] hover:bg-[var(--accent)]"
                    }
                  `}
                />
              ))}
            </div>

            {/* Next */}

            <button
              type="button"
              onClick={() => changeSlide("next")}
              disabled={isAnimating}
              aria-label="Next testimonial"
              className="
                w-9
                h-9
                rounded-full
                border
                border-[var(--border)]
                bg-[var(--card)]
                text-[var(--foreground)]
                flex
                items-center
                justify-center
                hover:border-[var(--accent)]
                hover:text-[var(--primary)]
                transition-all
                duration-300
                disabled:opacity-40
                cursor-pointer
              "
            >
              <FiArrowRight className="text-sm" />
            </button>
          </div>

          {/* Counter */}

          <div
            className="
              mt-3
              text-center
              text-[9px]
              uppercase
              tracking-[0.2em]
              text-[var(--foreground-muted)]
              font-sans
            "
          >
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(testimonials.length).padStart(2, "0")}
          </div>

        </div>
      </div>
    </section>
  );
}