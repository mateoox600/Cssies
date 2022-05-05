import { NumberUnit } from '../Units';

const values = {
    Seconds: 's',
    Milliseconds: 'ms'
};

export class TimeUnitClass<S = keyof typeof values> extends NumberUnit<S> {

}

export const TimeUnit = NumberUnit.from(TimeUnitClass, values);