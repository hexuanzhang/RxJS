import { Component, OnInit } from '@angular/core';

@Component ({
	selector: 'ng-class',
	templateUrl: './ng-class.html',
	styles: [`
		.blue {
			color: blue;
		}
		.disabled {
			color: #ccc;
		}
		.active {
			color: darkblue;
		}
	`]
})
export class NgClassComponent implements OnInit {
	constructor () {}
	
	isActive: boolean;
	
	ngOnInit() {
		this.isActive = true;
	}
}