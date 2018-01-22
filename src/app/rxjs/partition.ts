import { Component, OnInit } from '@angular/core';
import { Observable } from 'Rxjs';


@Component({
    selector: 'partition',
    template: '<h3 id="h3" class="pluck h3">partition</h3>'
})
export class PartitionComponent implements OnInit {
    constructor() { }

    /**
	 * partition(predicate: function(value: T, index: number): boolean, thisArg: any): [Observable<T>, Observable<T>]
	 * partition 输出有两个 Observables 的数组，这两个 Observables 是通过给定的 predicate 函数将源 Observable 的值进行划分得到的。
	 * 该数组的第一个 Observable 发出 predicate 参数 返回 true 的源值。第二个 Observable 发出 predicate 参数返回 false 的源值。第一个像是 filter ，而第二个像是 predicate 取反的 filter 。
	 */
    ngOnInit() {
        const clickAction = Observable.fromEvent(document, 'click')
            .pluck('target', 'id')
            .partition(v => v === 'h3');

        clickAction[0].subscribe(x => {
            console.log('点击元素为 h3 标签');
        });

        clickAction[1].subscribe(x => {
            console.log('点击元素非 h3 标签');
        });
    }
}
