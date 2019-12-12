import { Component, OnInit } from '@angular/core';
import { DataService, IDataRecord } from '../services/data.service';


interface ITableRecord {
  row: number;
  date: string;
  time: string;
  temp: string;
  humidity: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  public COLNAMES = [
    '#', 'Datum', 'Zeit', 'Temperatur/°C', 'Feuchtigkeit/%'
  ];

  public records: ITableRecord[] = [];

  public constructor(private dataServices: DataService) {
    this.dataServices = dataServices;
    this.dataServices.addDataListener({
      push: (r) => this.pushData(r),
      remove: null,
      clear: () => this.clearData()
    });
  }

  private clearData() {
    this.records = [];
  }

  private pushData(r: IDataRecord) {
    const rt: ITableRecord = {
      row: this.records.length + 1,
      date: r.time.toLocaleDateString(),
      time: r.time.toLocaleTimeString(),
      temp: '' + r.temp,
      humidity: '' + r.humidity
    };
  }

  ngOnInit() {
  }

}
