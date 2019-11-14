import { Component } from '@angular/core';
import { Buch } from './data/buch';
import { DataService } from './services/data.service';
@Component({
  selector: 'app-buchliste',
  templateUrl: './buchliste.component.html'
})
export class BuchListeComponent {

  public list: Buch[] = [];
  private dataService: DataService;

  public constructor(dataService: DataService) {
    this.dataService = dataService;
    dataService.add(new Buch('1984', 'George Orwell', 700, false));
    const promise: Promise<Buch[]> = dataService.getBuchListe();
    promise.then((liste: Buch[]) => {
      console.log('Promise liefert ergebnis...');
      this.list = this.list.concat(liste);
    });
    promise.catch((err) => {
      console.log('Fehler aufgetreten');
    })
  }

  public clear() {
    this.list = [];
    this.dataService.clear();
  }
}
