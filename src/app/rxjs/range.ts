import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component ({
	selector: 'range',
	template: '<h3>range</h3>'
})
export class RangeComponent implements OnInit {
	constructor () {}
	
	/**
	 * static range(start: number, count: number, scheduler: Scheduler): Observable
	 * 创建一个 Observable，发出区间范围内的数字序列， 最后调用 complete 方法。
	 * 默认情况下, 不使用调度器仅仅同步的发送通知, 但是也可以可选的使用可选的调度器来控制发送。
	 */
	ngOnInit () {
		Observable.range(2, 5)
			.subscribe({
				next: (x) => {
					console.info(x);
				},
				error: (err) => {
					console.error(err);
				},
				complete: () => {
					console.info('complete');
				}
			})
	}
	
}