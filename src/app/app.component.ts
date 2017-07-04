import { Component, TemplateRef, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import {ReactiveFormsModule, FormsModule, FormBuilder, FormArray} from '@angular/forms';
import { Observable, Subject, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';
import { NG_TAB } from './directive/index';
import { COMPONENT_TAB } from './component/index';
import { RXJS_TAB } from './rxjs/index';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'loading';
    
    @ViewChild('tpl') tpl: TemplateRef<any>;
    
    nav: any = {
        tab: [
            {
                id: 0,
                name: 'ng'
            },
            {
                id: 1,
                name: 'rxjs'
            },
            {
                id: 2,
                name: 'component'
            }
        ],
        index: 0
    };
    
    activeIndex: number = 0;
    tabs: Array<any>;
    
    constructor () {
        let observable = Observable.interval(1000).take(10),
            behaviorSubject = new BehaviorSubject(0),
            multicasted = observable.multicast(new ReplaySubject(3)).refCount();
        
        let observerA = {
                next: x => {
                    console.warn('A Next:' + x);
                },
                complete: () => {
                    console.error('A Complete');
                }
            },
            observerB = {
                next: x => {
                    console.warn('B Next:' + x);
                },
                complete: () => {
                    console.warn('B Complete');
                }
            },
            observerF = {
                next: x => {
                    // console.error('First Next:' + x);
                },
                complete: () => {
                    // console.error('First Complete');
                }
            },
            observerS = {
                next: x => {
                    console.error('Second Next:' + x);
                },
                complete: () => {
                    console.error('Second Complete');
                }
            };
        
        // multicasted.subscribe(observerF);
        // observable.subscribe(observerA);
        
        
        setTimeout(() => {
            // multicasted.subscribe(observerS);
            // observable.subscribe(observerB);
        }, 3000);
        
        console.info('raw', String.raw`${'test'}`);
    }
    
    ngOnInit () {
        this.switchNav();
    }
    
    /**
     * 切换二级 tab
     *
     * @param index
     */
    switchTab (index:number) {
        this.activeIndex = index;
    }
    
    /**
     * 切换导航
     *
     * @param index
     */
    switchNav (index: number = 0) {
        let currentTab;
        switch (index) {
            case 1:
                currentTab = RXJS_TAB;
                break;
            case 2:
                currentTab = COMPONENT_TAB;
                break;
            default:
                currentTab = NG_TAB;
        }
        
        this.activeIndex = currentTab[0].id;
        this.nav.index = index;
        this.tabs = currentTab;
    }
}
