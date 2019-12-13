import { Component, OnInit, OnDestroy } from '@angular/core';
import { sprintf } from 'sprintf-js';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit, OnDestroy {

  public time = '?';

  private timerHandler: any;

  constructor() { }

  ngOnInit() {
    this.refreshTime();
    this.timerHandler = setInterval( () => this.refreshTime(), 200);
  }
  public ngOnDestroy() {
    if (this.timerHandler) {
      clearInterval(this.timerHandler);
    }
    this.timerHandler = null;
  }

  private refreshTime() {
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();
    this.time = sprintf('%02d:%02d:%02d', h, m, s);
  }

}
