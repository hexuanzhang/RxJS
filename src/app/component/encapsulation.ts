import { Component, ViewEncapsulation } from '@angular/core';

@Component({
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
    constructor() {
    }

    /**
	 * 枚举类 ViewEncapsulation 包括三个成员：Native、Emulated、None
	 *      Native: 使用原生 Shadow Dom 特性
	 *      Emulated: 默认设置，使用 Angular 提供的样式包装机制来封装组件，使组件的样式不影响其他组件
	 *      None：使用原生样式，不使用 Shadow Dom 和样式包装机制
	 */
}
