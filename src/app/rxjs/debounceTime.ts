import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component ({
	selector: 'dobounceTime',
	template: '<h3>dobounceTime</h3>'
})
export class DobounceTimeComponent implements OnInit {
	constructor () {}
	
	ngOnInit () {
		// Observable.interval(1500).dobounceTime(2000).subscribe(x => {
		// 	console.info(x);
		// });
	}
}