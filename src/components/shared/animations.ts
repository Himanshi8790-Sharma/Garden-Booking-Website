type EaseFn = (t: number) => number;

function bezier(x1: number, y1: number, x2: number, y2: number): EaseFn {
    const A = (a1: number, a2: number) => 1.0 - 3.0 * a2 + 3.0 * a1;
    const B = (a1: number, a2: number) => 3.0 * a2 - 6.0 * a1;
    const C = (a1: number) => 3.0 * a1;

    const calcBezier = (t: number, a1: number, a2: number) =>
        ((A(a1, a2) * t + B(a1, a2)) * t + C(a1)) * t;
    const getSlope = (t: number, a1: number, a2: number) =>
        3.0 * A(a1, a2) * t * t + 2.0 * B(a1, a2) * t + C(a1);

    const getTForX = (x: number) => {
        let t = x;
        for (let i = 0; i < 4; i++) {
            const slope = getSlope(t, x1, x2);
            if (slope === 0) return t;
            const currentX = calcBezier(t, x1, x2) - x;
            t -= currentX / slope;
        }
        return t;
    };

    return (x: number) => {
        if (x1 === y1 && x2 === y2) return x;
        return calcBezier(getTForX(x), y1, y2);
    };
}

export const menuEase = bezier(0.76, 0, 0.24, 1);      // used for menu, slider, perspective text
export const linkEase = bezier(0.215, 0.61, 0.355, 1); // used for nav link "perspective" animation
