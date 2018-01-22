/**
 * Created by zhx on 17/7/3.
 */
import { Component, OnInit } from '@angular/core';
import { Observable } from 'Rxjs';

@Component({
    selector: 'distinctUntilKeyChanged',
    template: '<h3 id="h3">distinctUntilKeyChanged</h3>'
})
export class DistinctUntilKeyChangedComponent implements OnInit {

    value: string | number = '';

    numberBefore: string;
    numberAfter: string;

    constructor() { }

    /**
	 *  distinctUntilKeyChanged(key: string, compare: function): Observable
	 *  发出与前一项不相同的项，通过 key 来对比两项是否相同
	 *  如果提供了 compare 函数，则调用函数判断是否应该发送这个值，如果未提供，则使用相等检查
	 */
    ngOnInit() {
        Observable.of({
            id: '0',
            name: 'ab'
        }, {
            id: '1',
            name: 'abc'
        }, {
            id: '2',
            name: 'abc'
        }).distinctUntilKeyChanged('name')
        // .distinctUntilKeyChanged('name', (x, y) => x.substring(0, 2) === y.substring(0, 2))
        .subscribe(x => {
            console.log(x);
        });
    }
}
