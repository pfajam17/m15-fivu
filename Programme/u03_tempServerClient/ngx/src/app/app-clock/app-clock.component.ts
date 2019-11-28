import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { sprintf } from 'sprintf-js';

@Component({
  selector: 'app-clock',
  templateUrl: './app-clock.component.html',
  styleUrls: ['./app-clock.component.css']
})
export class AppClockComponent implements OnInit {

  public time = '?';

  public constructor () { }

  ngOnInit () {
    setInterval( () => {

    }, 200);
  }

  private refreshTime () {
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();
    this.time = sprintf('%02d:%02d:%02d', h, m, s);
  }

}
