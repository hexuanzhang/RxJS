import { Component, OnInit } from '@angular/core';

@Component ({
	selector: 'ng-style',
	templateUrl: './ng-style.html',
	styles: [`
		span { 
			display: inline-block;
			border: 1px solid #ccc;
			text-align: center;
			padding: 5px;
			margin: 10px;
		}
	`]
})
export class NgStyleComponent implements OnInit {
	constructor () {}
	
	ngOnInit() {
		
	}
}