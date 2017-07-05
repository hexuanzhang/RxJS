import { Component, ViewEncapsulation } from '@angular/core';

@Component ({
	selector: 'encapsulation',
	encapsulation: ViewEncapsulation.Native,
	template: `<h3>viewEncapsulation</h3>`,
	styles: [`
		h3 {
			font-size: 13px;
			color: darkblue;
		}
	`]
})
export class EncapsulationComponent {
	constructor () {}
	
	/**
	 * 枚举类 ViewEncapsulation 包括三个成员：Native、Emulated、None
	 *      Native: 
	 */
}