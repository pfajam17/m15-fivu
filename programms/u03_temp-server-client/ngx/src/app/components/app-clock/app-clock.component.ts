import { Component, OnInit, OnDestroy } from '@angular/core';
import { sprintf } from 'sprintf-js';

@Component({
  selector: 'app-clock',
  templateUrl: './app-clock.component.html',
  styleUrls: ['./app-clock.component.css']
})
export class AppClockComponent implements OnInit, OnDestroy {

  public time = '?';

  private timerHandle: any;

  constructor() { }

  ngOnInit() {
    this.refreshTime();
    setInterval(() => this.refreshTime(), 200);
  }

  public ngOnDestroy() {
    if (this.timerHandle) {
      clearInterval(this.timerHandle);
    }
    this.timerHandle = null;
  }

  private refreshTime() {
    const now = new Date();
    const h = now.getHours();
    const min = now.getMinutes();
    const s = now.getSeconds();
    this.time = sprintf('%02d:%02d:%02d', h, min, s);
  }

}
