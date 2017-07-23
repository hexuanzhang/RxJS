import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component ({
	selector: 'catch',
	template: '<h3>catch</h3>'
})
export class CatchComponent implements OnInit {
	constructor () {}
	
	/**
	 * catch(selector: function): Observable
	 *
	 * 捕获 observable 中的错误，可以通过返回一个新的 observable 或者抛出错误对象来处理
	 * selector 函数接受 err 参数，即错误对象，还接受 catch 参数，即源 Observable，当需要“重试”的时候返回它即可（与 'retry' 操作符相似）。
	 * 任何被selector返回的 observable 都会被用来代替源 observable。
	 */
	ngOnInit () {
		Observable.from(Array.from({length: 15}, (v, i) => i))
			.map(n => {
				if(n > 0) {
					throw 'error'
				}
				
				return n;
			})
			.catch((err, origin) => origin.delay(1500))
			.debounceTime(1000)
			.take(3)
			.subscribe(
				x => console.log(new Date().getTime(), x),
				err => console.error(err)
			);
	}
}