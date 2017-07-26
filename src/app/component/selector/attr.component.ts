import { Component } from '@angular/core';

@Component({
	selector: '[selector-attr=attr]',
	template: `属性选择器`
})
export class SelectorAttrComponent {
	constructor() {
	}
	
	/**
	 * 支持 [selector-attr] 和 [selector-attr=value] 两种属性选择器，其它属性选择器暂不支持。
	 */
}