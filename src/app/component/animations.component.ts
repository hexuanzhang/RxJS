/**
 * Created by zhx on 17/7/4.
 */
import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

const ANIMATION_STATUS = ['on', 'off'];

@Component ({
	selector: 'animations',
	templateUrl: './animations.html',
	animations: [
		trigger('hoverTrigger', [
			state(ANIMATION_STATUS[0], style({
				fontSize: '15px'
			})),
			state(ANIMATION_STATUS[1], style({
				fontSize: '10px'
			})),
			transition(`${ANIMATION_STATUS[0]} => ${ANIMATION_STATUS[1]}`, animate('500ms ease-in')),
			transition(`${ANIMATION_STATUS[1]} => ${ANIMATION_STATUS[0]}`, animate('500ms ease-out'))
		])
	]
})
export class AnimationsComponent implements OnInit {
	constructor () {}
	
	count: number = 1;
	status: string;
	
	ngOnInit () {
		this.status = ANIMATION_STATUS[this.count % 2];
	}
	
	changeStatus () {
		this.status = ANIMATION_STATUS[(++this.count) % 2];
	}
}