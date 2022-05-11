
const values = {
    Seconds: 's',
    Milliseconds: 'ms'
};

type ValueKeys = keyof typeof values;

export class TimeUnit<N extends ValueKeys = ValueKeys> {

    public static values = values;

    constructor(public type: N, public value: number) { }

    public toString() {
        return `${this.value}${values[this.type]}`;
    }

    public static Seconds(n: number) {
        return new TimeUnit('Seconds', n);
    }
    public static Milliseconds(n: number) {
        return new TimeUnit('Milliseconds', n);
    }

}