interface Props {
    label: string;
}

export default function PerspectiveText({ label }: Props) {
    return (
        <div
            className="group/text relative flex h-full w-full items-center justify-center pointer-events-none
                 [transform-style:preserve-3d] transition-rotate duration-[750ms]
                 [transition-timing-function:cubic-bezier(0.76,0,0.24,1)]
                 group-hover:[transform:rotateX(90deg)]"
        >
            <p
                className="m-0 uppercase pointer-events-none transition-[translate,opacity] duration-[750ms]
                   [transition-timing-function:cubic-bezier(0.76,0,0.24,1)]
                   group-hover:-translate-y-full group-hover:opacity-0 [backface-visibility:hidden]"
            >
                {label}
            </p>
            <p
                className="m-0 uppercase pointer-events-none absolute opacity-0 origin-bottom
                   [transform:rotateX(-90deg)_translateY(9px)] transition-[rotate,opacity] duration-[750ms]
                   [transition-timing-function:cubic-bezier(0.76,0,0.24,1)]
                   group-hover:opacity-100 [backface-visibility:hidden]"
            >
                {label}
            </p>
        </div>
    );
}
