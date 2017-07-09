import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component ({
	selector: 'throw',
	template: '<h3>throw</h3>'
})
export class ThrowComponent implements OnInit {
	constructor () {}
	
	/**
	 * static range(start: number, count: number, scheduler: Scheduler): Observable
	 * 创建一个 Observable，发出区间范围内的数字序列， 最后调用 complete 方法。
	 * 默认情况下, 不使用调度器仅仅同步的发送通知, 但是也可以可选的使用可选的调度器来控制发送。
	 */
	ngOnInit () {
		Observable.throw(new Error('throw'))
			.startWith('15')
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
			});
		
		Observable.interval(1000)
			.mergeMap(x => x === 1? Observable.throw('end') : Observable.of('start'))
			.subscribe({
				next:  x => {
					console.info(x);
				},
				error: err => {
					console.warn(err);
				}
			});
	}
	
}