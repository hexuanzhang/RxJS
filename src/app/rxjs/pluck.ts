import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component ({
	selector: 'pluck',
	template: '<h3 id="h3" class="pluck h3">pluck</h3>'
})
export class PluckComponent implements OnInit {
	constructor () {}
	
	/**
	 * 获取订阅数据指定属性的值，若不存在，则返回 undefined
	 *      参数：...string 表示属性的深度，如 (a, b) 表示 object.a.b
	 */
	ngOnInit () {
		Observable.fromEvent(document.getElementById('h3'), 'click')
			.pluck('target', 'id') // tagName、nodeName、className、id、value、currentTarget
			.subscribe(x => {
				console.info(x);
			});
	}
}