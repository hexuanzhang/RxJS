import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component ({
	selector: 'catch',
	template: '<h3>catch</h3>'
})
export class CatchComponent implements OnInit {
	constructor () {}
	
	_defer: any;
	
	ngOnInit () {
		Observable.of(1, 2, 3, 4, 5)
			.map(n => {
				if(n > 10) { throw 'error'}
				return n;
			})
			.catch((err, caught) => caught)
			.take(30)
			.subscribe(x => console.log(x));
	}
}