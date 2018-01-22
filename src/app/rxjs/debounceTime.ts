import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'dobounceTime',
  template: '<input type="text" id="text">' +
    '<div>input: <span>{{ value }}</span></div>'
})
export class DobounceTimeComponent implements OnInit {
  constructor() { }

  value: string;

  /**
   * 用于控制发送频率的操作符，与 delay 相似，延迟指定的时间再发送值，如果期间有新的值则只发送新的值
   */
  ngOnInit() {
    Observable.fromEvent(document.getElementById('text'), 'input')
      .debounceTime(500)
      .pluck('target', 'value')
      .map(v => String(v).trim())
      .filter(v => v !== '')
      .distinctUntilChanged()
      .subscribe(v => {
        console.info(v);
        this.value = String(v);
      });
  }
}
