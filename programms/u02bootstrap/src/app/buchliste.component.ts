import { Component } from '@angular/core';
import { Buch} from './data/buch';
@Component({
  selector: 'app-buchliste',
  templateUrl: './buchliste.component.html'
})
export class BuchListeComponent {

  private list: Buch [] = [] ;

  public constructor() {
  this.list.push(new Buch('Verurteilt', 'Rushdie', 200, false));
  this.list.push(new Buch('Mörder Ahoi', 'Agathe Christie', 300, false));
  this.list.push(new Buch('Leaders eats lats', 'Simon Sanek', 500, true));
  
  }
}
