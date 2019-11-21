import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { sprintf } from 'sprintf-js';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  public time = '?';

  public constructor() { }

  public ngOnInit() {
    setInterval(() => this.refreshTime(), 200);
  }

  private refreshTime() {
    const now = new Date();
    const h = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();
    this.time = sprintf('%02d:%02d:%02d', h, min, sec);
  }

}
