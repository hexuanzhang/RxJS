/**
 * Created by zhx on 17/7/3.
 */
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component ({
	selector: 'distinctUntilChanged',
	template: '<h3 id="h3">distinctUntilChanged</h3>' +
	'<div>numberBefore: <span>{{ numberBefore }}</span></div>' +
	'<div>numberAfter: <span>{{ numberAfter }}</span></div>'
})
export class DistinctUntilChangedComponent implements OnInit {
	constructor () {}
	
	value: string | number = '';
	
	numberBefore: string;
	numberAfter: string;
	
	/**
	 *  distinctUntilChanged(compare: function): Observable
	 *  发出与前一项不相同的项，如果提供了 compare 函数，则调用函数判断是否应该发送这个值，如果未提供，则使用相等检查
	 */
	ngOnInit () {
		let nums: [number] = [1, 2, 1, 3, 5, 1, 2, 3, 4, 6, 5, 6],
			tmp = [];
		
		this.numberBefore = nums.join(', ');
		Observable.from(nums)
			.distinctUntilChanged()
			.subscribe(x => {
				tmp.push(x);
			});
		
		this.numberAfter = tmp.join(', ');
		
		Observable.of({
			id: '0',
			name: 'b'
		}, {
			id: '1',
			name: 'a'
		}, {
			id: '2',
			name: 'a'
		}).distinctUntilChanged((prev, current) => {
			return prev.name === current.name;
		}).subscribe(x => {
			console.info(x);
		});
	}
}