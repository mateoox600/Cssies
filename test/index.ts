import { cssies, Style, Selector, Property, Modes, LengthsUnit, Color } from '../src';

const averageAthenaFollowerElement = Selector.element('average-athena-follower');

console.log(cssies(
    {
        mode: Modes.RETURN,
        formated: true
    },
    new Style(
        averageAthenaFollowerElement,
        new Property('width', LengthsUnit.Centimetters(150)),
        new Property('height', LengthsUnit.Centimetters(20)),
        new Property('blockSize', LengthsUnit.Centimetters(200)),
        new Property('backgroundColor', Color.hex('ff12e3'))
    ),
    new Style(
        [
            Selector.multiple(
                averageAthenaFollowerElement,
                Selector.class('vip'),
                Selector.id('giga-chad-mateoox')
            ),
            Selector.id('irl-tetra-chad-sigma-male')
        ],
        new Property('width', LengthsUnit.Centimetters(50)),
        new Property('height', LengthsUnit.Centimetters(190)),
        new Property('blockSize', LengthsUnit.Centimetters(75)),
        new Property('backgroundColor', Color.hex('880808'))
    ),
    new Style(
        Selector.chain(
            Selector.multiple(
                Selector.element('h2'),
                Selector.class('classed')
            ),
            Selector.id('ids')
        ),
        new Property('border', 'solid', LengthsUnit.Pixels(2), Color.rgb(0, 255, 0)),
        new Property('borderRadius', LengthsUnit.Pixels(10))
    )
));