import { Component } from '@angular/core';

@Component({
	selector: '.selector-class',
	template: `类选择器`
})
export class SelectorClassComponent {
	constructor() {
	}
	
	/**
	 * 支持多个 class 选择器（.classA.classB）
	 */
}