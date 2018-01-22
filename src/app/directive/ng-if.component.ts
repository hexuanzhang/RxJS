import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'Rxjs';

@Component({
    selector: 'ng-if',
    templateUrl: './ng-if.html'
})
export class NgIfComponent implements OnInit {

    isActive = false;
    asyncObj: Observable<any>;

    constructor() { }

    ngOnInit() {
        this.asyncObj = this.getObservable();
    }

    getObservable(): Observable<any> {
        return Observable
            .interval(1000)
            .take(10)
            .map(v => {
                return v % 5 === 0 ? null : {
                    num: v,
                    bool: v % 2 === 0
                };
            });
    }
}
