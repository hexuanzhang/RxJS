import { Component } from '@angular/core';

@Component({
    selector: 'selector',
    template: `
		<h3>Angular 2 Component selectors</h3>
		<hr>
		Element: <selector-tag></selector-tag>
		<hr>
		Attribute: <span selector-attr="attr"></span>
		<hr>
		Class: <span class="selector-class"></span>
		<hr>
		Not: <span class="selector"></span>
	`
})
export class SelectorComponent {
    constructor() {
    }
}
