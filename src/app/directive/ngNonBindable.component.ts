import { Component } from '@angular/core';

@Component({
    selector: 'ngNonBindable',
    templateUrl: './ngNonBindable.html'
})
export class NgNonBindableComponent {
    content: string = 'ngNonBindable';

    constructor() { }
}
