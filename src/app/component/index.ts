import { AnimationsComponent } from './animations.component';
import { EncapsulationComponent } from './encapsulation';
import { Selector } from './selector/index';

export const COMPONENT = [
    AnimationsComponent,
    EncapsulationComponent,
    ...Selector
];

export const COMPONENT_TAB = [
    {
        id: 200,
        name: 'animations'
    },
    {
        id: 201,
        name: 'encapsulation'
    },
    {
        id: 202,
        name: 'selector'
    }
];
