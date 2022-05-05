import { Property } from './Property';
import { Selector } from './Selector';

export class Style {

    public selectors: Selector[] = [];
    public properties: Property<keyof CSSStyleDeclaration>[] = [];

    constructor(selectors: Selector | Selector[], ...properties: Property<keyof CSSStyleDeclaration>[]) {
        if(!Array.isArray(selectors)) selectors = [ selectors ];
        this.selectors = selectors;
        if(!Array.isArray(properties)) properties = [ properties ];
        this.properties = properties;
    }

    public toString() {
        return `${this.selectors.join(',')}{${this.properties.join('')}}`;
    }

}