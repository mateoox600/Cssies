
const values = {
    Degres: 'deg',
    Grades: 'grad',
    Radian: 'rad',
    Turn: 'turn'
};

type ValueKeys = keyof typeof values;

export class AngleUnit<N extends ValueKeys = ValueKeys> {

    public static values = values;

    constructor(public type: N, public value: number) { }

    public toString() {
        return `${this.value}${values[this.type]}`;
    }

    public static Degres(n: number) {
        return new AngleUnit('Degres', n);
    }
    public static Grades(n: number) {
        return new AngleUnit('Grades', n);
    }
    public static Radian(n: number) {
        return new AngleUnit('Radian', n);
    }
    public static Turn(n: number) {
        return new AngleUnit('Turn', n);
    }

}