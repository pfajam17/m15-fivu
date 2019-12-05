import { Injectable } from '@angular/core';

export interface IDataRecord {
  time: Date;
  temp: number;
  humidity: number;
}

interface IDataListener {
  push: (record: IDataRecord) => void;
  remove: (index: number) => void;
  clear: () => void;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private records: IDataRecord [] = [];
  private listeners: IDataListener [] = [];

  constructor() {

      setTimeout(() => {
        this.add({time: new Date(), temp: 20.12, humidity: 33.2});
        this.add({time: new Date(), temp: 24.21, humidity: 66.6});
        this.add({time: new Date(), temp: 22.42, humidity: 53.7});
      }, 2000);
    }

  public addDataListener(l: IDataListener) {
    this.listeners.push(l);
  }

  public removeDataListener(l: IDataListener) {
    const i = this.listeners.findIndex( (item) => item === l ); // sucht das zu entfernende item, in der Liste
    this.listeners.splice(i, 1); // entfernt das Item
  }

  public add(d: IDataRecord) {
    this.records.push(d);
    for (const l of this.listeners) {
      try {
        l.push(d);
      } catch (error) {
        console.log('err');
      }
    }
  }
  public getCount(): number {
    return this.records.length;
  }

  public getValue(index: number): IDataRecord {
    return this.records[index];
  }
}
