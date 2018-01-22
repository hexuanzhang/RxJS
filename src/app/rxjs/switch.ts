import { Component, OnInit } from '@angular/core';
import { Observable } from 'Rxjs';

@Component({
    selector: 'switch',
    template: '<h3 id="h3">switch</h3>' +
        '<span>{{value}}</span>'
})
export class SwitchComponent implements OnInit {

    value: string | number = '';

    constructor() { }

    /**
	 * 将高阶 Observable 扁平化处理为一阶 Observable, 并发出最新订阅的内部 Observable
	 *      switch 订阅发出 Observables 的 Observable，也就是高阶 Observable 。
	 *      当有新的内部 Observable 发出时，取消订阅上一个内部 Observable 并 订阅新的内部 Observable
	 */
    ngOnInit() {
        Observable.fromEvent(document.getElementById('h3'), 'click')
            .map(event => {
                this.value = '倒计时准备...';
                return Observable.interval(1000);
            })  // 每次点击返回一个 interval Observable
            .switch() // switched 在这的本质上是每次点击重新启动计时器
            .subscribe(x => {
                this.value = x;
            });
    }
}
