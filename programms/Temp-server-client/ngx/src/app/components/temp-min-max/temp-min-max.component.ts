import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-temp-min-max',
  templateUrl: './temp-min-max.component.html',
  styleUrls: ['./temp-min-max.component.css']
})
export class TempMinMaxComponent implements OnInit {

  public tempMin = '?';
  public tempMax = '?';
  public isBusy: boolean;

  public constructor(private dataService: DataService) { }

  public ngOnInit() {
    this.dataService.addDataListener({
      push: () => this.handelDataChange(),
      remove: () => this.handelDataChange(),
      clear: () => this.handelDataChange()
    });
  }

  public async onClick() {
    //this.isBusy = true;
    //console.log('Click');
    //await this.delayMs(2000);
    //this.isBusy = false;
    this.dataService.clear();
  }

  private handelDataChange() {
    const cnt = this.dataService.getCount();
    if (cnt <= 0) {
      this.tempMin = 'n/a';
      this.tempMax = 'n/a';
    } else {
      let value0 = this.dataService.getValue(0).temp;
      let min = value0;
      let max = value0;
      for (let i = 1; i < cnt; i++) {
        const value = this.dataService.getValue(i).temp;
        min = value < min ? value : min;
        max = value > max ? value : max;
      }
      this.tempMin = '' + min;
      this.tempMax = '' + max;
    }

  }

  private async delayMs(ms: number) {
    return new Promise<void>( (res) => {
      setTimeout(() => {
        res();
      }, ms);
    });
  }
}
