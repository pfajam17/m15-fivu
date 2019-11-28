import { Component, OnInit, SystemJsNgModuleLoader, OnDestroy} from '@angular/core';
import { sprintf } from 'sprintf-js';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit, OnDestroy {

  public time = '?';
  private timerHandel: any;

  public constructor() { }

  public ngOnInit() {
    setInterval(() => this.refreshTime(), 200);
    this.timerHandel = setInterval( () => this.refreshTime(), 200);
  }

  ngOnDestroy(): void {
    if (this.timerHandel) {
      clearInterval(this.timerHandel);
    }
    this.timerHandel = null;
  }

  private refreshTime() {
    const now = new Date();
    const h = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();
    this.time = sprintf('%02d:%02d:%02d', h, min, sec);
  }

}
