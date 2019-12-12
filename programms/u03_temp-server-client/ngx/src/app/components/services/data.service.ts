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

  private records: IDataRecord[] = [];
  private listeners: IDataListener[] = [];

  constructor() {
    setInterval( () => {
      const temp = Math.random() * 10 + 20;
      const humidity = Math.random() * 10 + 20;
      this.add({ time: new Date(), temp, humidity });
    }, 1000);
    // setTimeout(() => {
    //   this.add({ time: new Date(), temp: 20.12, humidity: 45.67 });
    //   this.add({ time: new Date(), temp: 20.123, humidity: 45.67 });
    //   this.add({ time: new Date(), temp: 20.234, humidity: 45.67 });
    //   this.add({ time: new Date(), temp: 20.234, humidity: 45.67 });
    // }, 2000);
  }

  public addDataListener(l: IDataListener) {
    this.listeners.push(l);
  }
  public removeDataListener(l: IDataListener) {
    const i = this.listeners.findIndex((item) => item === l);
    if (i >= 0) {
      this.listeners.splice(i, 1);
    }
  }
  public clear() {
    this.records = [];
    for (const l of this.listeners) {
      try {
        l.clear();
      } catch (err) {
        console.log('Fehler');
      }
    }
  }
  public add(d: IDataRecord) {
    this.records.push(d);
    for (const l of this.listeners) {
      try {
        l.push(d);
      } catch (err) {
        console.log('Fehler');
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
