import { Component, OnInit } from '@angular/core';
import { Observable } from 'Rxjs';

@Component({
    selector: 'fromPromise',
    template: '<h3>fromPromise</h3>'
})
export class FromPromiseComponent implements OnInit {
    constructor() { }

    /**
	 * 将 Promise 转化为 Observable。
	 * 如果 Promise resolves一个值, 则 Observable 发出这个值然后完成。 如果 Promise 被 rejected, Observable 则会调用 error 方法。
	 */
    ngOnInit() {
        const _promise = new Promise((resolve, reject) => {
            // resolve(1);
            // reject(new Error('exception'));
        });

        Observable.fromPromise(_promise)
            .subscribe({
                next: (x) => {
                    console.log(x);
                },
                error: (err) => {
                    console.error(err);
                },
                complete: () => {
                    console.log('complete');
                }
            });
    }
}
