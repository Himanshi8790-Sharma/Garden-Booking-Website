import { RefObject } from "react";
import Image from "next/image";

interface Props {
    socialRef: RefObject<HTMLDivElement | null>;
}

export default function HeroSocialProof({ socialRef }: Props) {
    return (
        <div
            ref={socialRef}
            className="flex items-center self-start md:self-end bg-white/10 border border-white/20 px-4 py-2 rounded-2xl select-none"
            style={{ opacity: 0 }}
        >
            {/* Overlapping Avatar Group */}
            <div className="flex -space-x-3">
                <div className="relative w-8 h-8 rounded-full border border-black/50 overflow-hidden bg-neutral-950">
                    <Image
                        src="/assets/avatar_one.png"
                        alt="Traveler profile picture"
                        width={32}
                        height={32}
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="relative w-8 h-8 rounded-full border border-black/50 overflow-hidden bg-neutral-950">
                    <Image
                        src="/assets/avatar_two.png"
                        alt="Traveler profile picture"
                        width={32}
                        height={32}
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="relative w-8 h-8 rounded-full border border-black/50 overflow-hidden bg-neutral-950">
                    <Image
                        src="/assets/avatar_three.png"
                        alt="Traveler profile picture"
                        width={32}
                        height={32}
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>

            {/* Stats details */}
            <div className="flex flex-col text-left justify-center pl-3">
                <span className="text-white font-bold text-xs leading-none">
                    10K+
                </span>
                <span className="text-white/85 text-[9px] font-semibold uppercase tracking-wider leading-none mt-1">
                    satisfied clients
                </span>
            </div>
        </div>
    );
}
