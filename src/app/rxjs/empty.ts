import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component ({
	selector: 'empty',
	template: '<h3>empty</h3>'
})
export class EmptyComponent implements OnInit {
	constructor () {}
	
	/**
	 * 创建一个不发出数仅发出 complete 通知的 Observable
	 * 可以被用来和其他 Observables 进行组合， 如 mergeMap
	 */
	ngOnInit () {
		Observable.empty()
			.startWith(7)
			.subscribe(x => console.info(x));
	}
	
}