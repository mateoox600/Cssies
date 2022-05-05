import { Unit } from './Units';

export class Property<T extends keyof CSSStyleDeclaration> {

    public value: (string | Unit)[];

    constructor(public name: T, ...value: (string | Unit)[]) {
        this.value = value;
    }

    public toString() {
        return `${this.name.toString().replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)}:${this.value.join(' ')};`;
    }

}