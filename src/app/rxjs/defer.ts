import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'Rxjs';

@Component({
    selector: 'defer',
    template: '<h3>defer</h3>'
})
export class DeferComponent implements OnInit, OnDestroy {

    _defer: any;

    constructor() { }

    /**
	 * static defer(observableFactory: function(): SubscribableOrPromise): Observable
	 * 惰性创建 Observable, 当且仅当被订阅时为每个观察者创建新的 Observable
	 * 对每个订阅者而言，虽然订阅的是同一个 Observable, 但事实上每个订阅者获得的是只属于它们的 Observable。
	 */
    ngOnInit() {
        const _defer = Observable.defer(() => {
            if (Math.random() > 0.5) {
                return Observable.fromEvent(document, 'click');
            } else {
                return Observable.interval(1000);
            }
        });

        this._defer = _defer.subscribe(x => {
            console.log(x);
        });
    }

    ngOnDestroy() {
        this._defer.unsubscribe();
    }
}
