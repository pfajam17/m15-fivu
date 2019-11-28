import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-min-max',
  templateUrl: './temp-min-max.component.html',
  styleUrls: ['./temp-min-max.component.css']
})
export class TempMinMaxComponent implements OnInit {

  public tempMin = '?';
  public tempMax = '?';
  public isBusy: boolean;

  public constructor() { }

  public ngOnInit() {
  }

  public async onClick() {
    this.isBusy = true;
    console.log('Click');
    await this.delayMs(2000);
    this.isBusy = false;
  }

  private async delayMs(ms: number) {
    return new Promise<void>( (res) => {
      setTimeout(() => {
        res();
      }, ms);
    });
  }
}
