import { Component, OnInit, OnDestroy } from '@angular/core';
import { Scheduler } from 'rxjs';

@Component ({
	selector: 'asap',
	template: '<h3>asap</h3>'
})
export class AsapComponent implements OnInit, OnDestroy {
	constructor () {}
	
	asap: any;
	
	/**
	 * asap 尽可能快的异步地执行任务
	 * 如果之前有 asap 任务，则按任务创建顺序依次执行
	 */
	ngOnInit () {
		this.asap = Scheduler.asap.schedule(() => {
			console.info('first--asap');
		});
		
		Scheduler.asap.schedule(() => {
			console.info('second--asap');
		});
	}
	
	ngOnDestroy() {
		this.asap.unsubscribe();
	}
}