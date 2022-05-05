import { NumberUnit } from '../Units';

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
    VMax: 'vmax'
};

export class LengthsUnitClass<S = keyof typeof values> extends NumberUnit<S> {

}

export const LengthsUnit = NumberUnit.from(LengthsUnitClass, values);