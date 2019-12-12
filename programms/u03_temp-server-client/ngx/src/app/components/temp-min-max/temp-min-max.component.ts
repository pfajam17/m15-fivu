import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-temp-min-max',
  templateUrl: './temp-min-max.component.html',
  styleUrls: ['./temp-min-max.component.css']
})
export class TempMinMaxComponent implements OnInit {

  public tempMin = '?';
  public tempMax = '?';
  public isBusy = false;
  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    this.dataService.addDataListener({
      push: () => this.handleDataChanged(),
      remove: () => this.handleDataChanged(),
      clear: () => this.handleDataChanged()
    });
  }

  public async onClick() {
    console.log('click');
    this.isBusy = true;
    await this.delayMs(2000);
    this.isBusy = false;
    this.dataService.clear();
  }

  private handleDataChanged() {
    const cnt = this.dataService.getCount();
    if (cnt <= 0) {
      this.tempMin = 'n/a';
      this.tempMax = 'n/a';
    } else {
      const value = this.dataService.getValue(0).temp;
      let min = value;
      let max = value;
      for (let i = 1; i < cnt; i++) {
        min = value < min ? value : min;
        max = value > max ? value : max;
      }
      this.tempMin = '' + min;
      this.tempMax = '' + max;
    }
  }

  private async delayMs(ms: number) {
    return new Promise<void>((res) => {
      setTimeout(() => {
        res();
      }, ms);
    });
  }
}
