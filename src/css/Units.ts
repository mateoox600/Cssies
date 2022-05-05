import { Color } from './Color';
import { AngleUnit } from './units/AngleUnit';
import { LengthsUnit } from './units/LengthsUnit';
import { ResolutionUnit } from './units/ResolutionUnit';
import { TimeUnit } from './units/TimeUnit';

export type Unit = 
    LengthsUnit |
    AngleUnit |
    TimeUnit |
    ResolutionUnit |
    Color;