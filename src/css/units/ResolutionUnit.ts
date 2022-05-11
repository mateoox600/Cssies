
const values = {
    DPI: 'dpi',
    DPCM: 'dpcm',
    DPPX: 'dppx',
    X: 'x' 
};

type ValueKeys = keyof typeof values;

export class ResolutionUnit<N extends ValueKeys = ValueKeys> {

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