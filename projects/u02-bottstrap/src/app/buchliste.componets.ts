import { Component } from '@angular/core';
import { Buch } from './data/buch';
import { DataService } from './data/services/data.service';

@Component({
  selector: 'app-buchliste',
  templateUrl: './buchliste.component.html',
})
export class BuchlisteComponent {


  public list: Buch [] = [];
  private dataService: DataService;

    public constructor(dataService: DataService) {
      dataService.add(new Buch('1984', 'Gergoe Orwell', 700, false));
      const promise: Promise<Buch []> = dataService.getBuchListe();
      dataService.getBuchListe().then( (liste: Buch []) => {
      console.log('Promise liefert Ergebnis');
      this.list = this.list.concat(liste);
      });
      promise.catch ( (err) => {
        console.log('Fehler uist aufgerteten');
      });
    }

    public clear() {
      this.list = [];
      this.dataService.clear();
    }
}

