import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { EventEmitter } from 'events';

@Component ({
	selector: 'fromEvent',
	template: '<input id="fromEvent">'
})
export class FromEventComponent implements OnInit, OnDestroy {
	constructor () {}
	
	documentSubscribe: any;
	h3Subscribe: any;
	
	/**
	 * 通过给目标添加事件监听器的方式创建 Observable
	 * 事件类型可以是 DOM 事件，或者 Node 的 EventEmitter 事件等
	 * 当 Observable 被订阅的时候事件处理函数会被添加, 当取消订阅的时候会将事件处理函数移除。
	 */
	ngOnInit () {
		let _emitter = new EventEmitter();
		
		this.documentSubscribe = Observable.fromEvent(document, 'click')
			.pluck('target', 'tagName')
			.subscribe(x => {
				console.info('document:', x);
			});
		
		this.h3Subscribe = Observable.fromEvent(document.getElementById('fromEvent'), 'input', (event) => ({event, data: '123'}))
			.pluck('data')
			.subscribe(x => {
				console.info(x);
			});
		
		Observable.fromEvent(_emitter, 'data', (x, y) => ({x, y}))
			.subscribe(x => {
				console.info(x);
			});
		
		_emitter.emit('data', 'x', 'y');
	}
	
	ngOnDestroy () {
		this.documentSubscribe.unsubscribe();
		this.h3Subscribe.unsubscribe();
	}
}