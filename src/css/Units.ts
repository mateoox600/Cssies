import { Color } from './Color';

export class NumberUnit<S> {

    constructor(public number: number, public suffix: S) { }

    public toString() {
        return `${this.number}${this.suffix}`;
    }

    public valueOf() {
        return this.number;
    }

    public static from<Class extends typeof NumberUnit, Key extends string>(c: Class, unitsValues: Record<Key, string>) {
        type Values = typeof unitsValues[Key];
        return (Object.entries(unitsValues) as [ Key, Values ][])
            .map(([ key, str ]) => {
                return {
                    key,
                    f: (n: number) => new c(n, str)
                };
            }).reduce((acc: Record<string, (n: number) => NumberUnit<string>>, v) => {
                acc[v.key] = v.f;
                return acc;
            }, {}) as Record<Key, (n: number) => Class extends NumberUnit<Key> ? NumberUnit<Key> : NumberUnit<Key>>;
    }

}

export type Unit = NumberUnit<string> | Color;