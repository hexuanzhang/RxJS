import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component ({
	selector: 'distinct',
	template: '<h3 id="h3">distinct</h3>' +
	'<div>numberBefore: <span>{{ numberBefore }}</span></div>' +
	'<div>numberAfter: <span>{{ numberAfter }}</span></div>'
})
export class DistinctComponent implements OnInit {
	constructor () {}
	
	value: string | number = '';
	
	numberBefore: string;
	numberAfter: string;
	
	/**
	 *  distinct(keySelector: function, flushes: Observable): Observable
	 *  去重操作，如果提供 keySelector 函数，则根据对应的 key 去重
	 */
	ngOnInit () {
		let nums: [number] = [1, 2, 1, 3, 5, 1, 2, 3, 4, 6, 5, 6],
			tmp = [];
		
		this.numberBefore = nums.join(', ');
		Observable.from(nums)
			.distinct()
			.subscribe(x => {
				tmp.push(x);
			});
		
		this.numberAfter = tmp.join(', ');
		
		Observable.of({
			id: '0',
			name: 'a'
		}, {
			id: '1',
			name: 'b'
		}, {
			id: '3',
			name: 'a'
		}).distinct(o => o.name)
			.subscribe(x => {
				console.info(x);
			});
	}
}