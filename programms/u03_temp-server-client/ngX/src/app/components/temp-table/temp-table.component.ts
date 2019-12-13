import { Component, OnInit } from '@angular/core';
import { DataService, IDataRecord } from '../../services/data.service';

interface ITableRecord {
    row: number;
    date: string;
    time: string;
    temp: string;
    humidity: string;
}

@Component({
  selector: 'app-temp-table',
  templateUrl: './temp-table.component.html',
  styleUrls: ['./temp-table.component.css']
})
export class TempTableComponent implements OnInit {

  public COLNAMES = [
    '#',
    'Datum',
    'Zeit',
    'Temperatur / °C',
    'Feuchtigkeit / %'
  ];

  public records: ITableRecord [] = [];


  constructor(private dataService: DataService) {
    this.dataService.addDataListener({
      push: (r) => this.pushData(r),
      remove: null,
      clear: () => this.clearData()
    });

  }

  private pushData(r: IDataRecord) {
    const rt: ITableRecord = {
      row: this.records.length + 1,
      date: r.time.toLocaleDateString(),
      time: r.time.toLocaleTimeString(),
      temp: '' + r.temp,
      humidity: '' + r.humidity
    };
    this.records.push(rt);
  }

  private clearData() {
    this.records = [];
  }

  ngOnInit() {
  }

}
