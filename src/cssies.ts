import { writeFileSync } from 'fs';
import { Style } from './css/Style';

export enum Modes {
    RETURN,
    PRINT,
    WRITE,
    APPLY
}

export interface Options {
    mode?: Modes,
    file?: string,
    formated?: boolean
}

export function cssies(options: Options, ...styles: Style[]) {
    if(!options.mode) options.mode = Modes.RETURN;
    if(!options.formated) options.formated = false;
    let output = styles.join('');
    if(options.formated) output = output
        .replace(/[{}]/gm, (l) => `${l}\n`)
        .replace(/.*?;/gm, (m) => `    ${m}\n`)
        .replace(/[:,]/gm, (l) => `${l} `);
    
    switch(options.mode) {
    case Modes.RETURN:
        return output;
    case Modes.PRINT:
        console.log(output);
        return;
    case Modes.WRITE:
        if(typeof window !== 'undefined') throw Error('Cannot be used on the web');
        if(!options.file) throw Error('Missing parameter "file" for cssies mode "WRITE"');
        writeFileSync(options.file, output);
        return;
    case Modes.APPLY:
        if(typeof window === 'undefined') throw Error('Can only be used on the web');
        const styleElement = document.createElement('style');
        styleElement.innerHTML = output;
        document.head.appendChild(styleElement);
        return;
    default:
        throw Error('No mode was given');
    }
}