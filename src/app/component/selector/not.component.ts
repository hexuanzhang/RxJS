import { Component } from '@angular/core';

@Component({
    selector: 'span.selector:not(.selector-not)',
    template: `not 选择器`
})
export class SelectorNotComponent {
    constructor() {
    }
}
