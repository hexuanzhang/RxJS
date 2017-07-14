import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component ({
	selector: 'from',
	template: '<h3>from</h3>'
})
export class FromComponent implements OnInit {
	constructor () {}
	
	/**
	 * 将 Promise、类数组对象、迭代器对象 (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#iterable) 转化为 Observable ，该 Observable 发出 promise、数组或者迭代器的成员。
	 * 字符串会被当做字符数组。
	 */
	ngOnInit () {
		Observable.from([1, 2, 3])
			.subscribe(x => {
				console.info(x);
			});
		
		Observable.from('abc')
			.subscribe(x => {
				console.info(x);
			});
	}
	
}