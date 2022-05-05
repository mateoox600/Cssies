
const values = {
    DPI: 'dpi',
    DPCM: 'dpcm',
    DPPX: 'dppx',
    X: 'x' 
};

export class ResolutionUnit<N extends keyof typeof values = keyof typeof values> {

    public static values = values;

    constructor(public type: N, public value: number) { }

    public toString() {
        return `${this.value}${values[this.type]}`;
    }

    public static DPI(n: number) {
        return new ResolutionUnit('DPI', n);
    }
    public static DPCM(n: number) {
        return new ResolutionUnit('DPCM', n);
    }
    public static DPPX(n: number) {
        return new ResolutionUnit('DPPX', n);
    }
    public static X(n: number) {
        return new ResolutionUnit('X', n);
    }

}