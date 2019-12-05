import { Component, OnInit } from '@angular/core';
import { DataService, IDataRecord } from 'src/app/services/data.service';

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
      clear: null
    });

    this.records.push({row: 1, date: '2019 12 05', time: '10:05:02', temp: '23.5', humidity: '45'});
    this.records.push({row: 2, date: '2019 12 05', time: '11:05:02', temp: '24.2', humidity: '35'});
  }

  private pushData(r: IDataRecord) {
    const rt: ITableRecord = {
      row: this.records.length + 1,
      data: r.time.toLocaleDateString,
      time: r.time.toLocaleTimeString,
      temp: '' + r.temp,
      humidity: '' + r.humidity
    };
    this.records.push(rt);
  }

  ngOnInit() {
  }

}
