import { NumberUnit } from '../Units';

const values = {
    Degres: 'deg',
    Grades: 'grad',
    Radian: 'rad',
    Turn: 'turn'
};

export class AngleUnitClass<S = keyof typeof values> extends NumberUnit<S> {

}

export const AngleUnit = NumberUnit.from(AngleUnitClass, values);