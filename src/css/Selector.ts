

export class Selector {

    constructor(public selector: string | Selector[]) { }

    public toString(): string {
        if(Array.isArray(this.selector)) return this.selector.join('');
        return this.selector;
    }

    public static raw(string: string) {
        return new Selector(string);
    }

    public static all() {
        return new Selector('*');
    }

    public static element(elementName: string) {
        return new Selector(elementName);
    }

    public static id(idName: string) {
        return new Selector(`#${idName}`);
    }

    public static class(className: string) {
        return new Selector(`.${className}`);
    }

    public static multiple(...selectors: Selector[]) {
        return new Selector(selectors);
    }

    public static chain(...selectors: Selector[]) {
        return new Selector(selectors.join('>'));
    }

}