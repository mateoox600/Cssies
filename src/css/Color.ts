
export class Color {

    constructor(public r: number, public g: number, public b: number, public a = 1) { }

    public toString() {
        return `rgba(${this.r},${this.g},${this.b},${this.a})`;
    }

    public static rgb(r: number, g: number, b: number, a = 1) {
        return new Color(r, g, b, a);
    }
    public static hex(hex: string) {
        const [ rh, gh, bh, ah ] = hex.match(/.{2}/gm) as RegExpMatchArray;
        return new Color(parseInt(rh, 16), parseInt(gh, 16), parseInt(bh, 16), parseInt(ah || 'ff', 16) / 255);
    }
}