import { NumberUnit } from '../Units';

const values = {
    DPI: 'dpi',
    DPCM: 'dpcm',
    DPPX: 'dppx',
    X: 'x' 
};

export class ResolutionUnitClass<S = keyof typeof values> extends NumberUnit<S> {

}

export const ResolutionUnit = NumberUnit.from(ResolutionUnitClass, values);