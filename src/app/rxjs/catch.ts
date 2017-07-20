import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';

@Component ({
	selector: 'catch',
	template: '<h3>catch</h3>'
})
export class CatchComponent implements OnInit, OnDestroy {
	constructor () {}
	
	_defer: any;
	
	ngOnInit () {
		let _defer = Observable.defer(() => {
			if (Math.random() > 0.5) {
				return Observable.fromEvent(document, 'click');
			} else {
				return Observable.interval(1000);
			}
		});
		
		this._defer = _defer.subscribe(x => {
			console.info(x);
		});
	}
	
	ngOnDestroy () {
		this._defer.unsubscribe();
	}
}