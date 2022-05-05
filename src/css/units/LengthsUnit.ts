
const values = {
    Centimetters: 'cm',
    Millimeters: 'mm',
    QuartMillimeters: 'Q',
    Inches: 'in',
    Pixels: 'px',
    Points: 'pt',
    Picas: 'pc',
    EM: 'em',
    EX: 'ex',
    CH: 'ch',
    REM: 'rem',
    LH: 'lh',
    VW: 'vw',
    VH: 'vh',
    VMin: 'vmin',
    VMax: 'vmax',
    Percentage: '%'
};

export class LengthsUnit<N extends keyof typeof values = keyof typeof values> {

    public static values = values;

    constructor(public type: N, public value: number) { }

    public toString() {
        return `${this.value}${values[this.type]}`;
    }

    public static Centimetters(n: number) {
        return new LengthsUnit('Centimetters', n);
    }
    public static Millimeters(n: number) {
        return new LengthsUnit('Millimeters', n);
    }
    public static QuartMillimeters(n: number) {
        return new LengthsUnit('QuartMillimeters', n);
    }
    public static Inches(n: number) {
        return new LengthsUnit('Inches', n);
    }
    public static Pixels(n: number) {
        return new LengthsUnit('Pixels', n);
    }
    public static Points(n: number) {
        return new LengthsUnit('Points', n);
    }
    public static Picas(n: number) {
        return new LengthsUnit('Picas', n);
    }
    public static EM(n: number) {
        return new LengthsUnit('EM', n);
    }
    public static EX(n: number) {
        return new LengthsUnit('EX', n);
    }
    public static CH(n: number) {
        return new LengthsUnit('CH', n);
    }
    public static REM(n: number) {
        return new LengthsUnit('REM', n);
    }
    public static LH(n: number) {
        return new LengthsUnit('LH', n);
    }
    public static VW(n: number) {
        return new LengthsUnit('VW', n);
    }
    public static VH(n: number) {
        return new LengthsUnit('VH', n);
    }
    public static VMin(n: number) {
        return new LengthsUnit('VMin', n);
    }
    public static VMax(n: number) {
        return new LengthsUnit('VMax', n);
    }
    public static Percentage(n: number) {
        return new LengthsUnit('Percentage', n);
    }

}