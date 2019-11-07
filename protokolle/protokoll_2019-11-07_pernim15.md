# FIVU Protokoll 5AHME


* **Thema:** Services & Promises in JavaScript/TypeScript
* **Datum:** 07.November 2019
* **Erstellt von:** Perl Nicolas, 5AHME, Kat.Nr. 10
* **Abwesend:** -
* **Protokoll der letzten Einheit:**  [zurück]()
* **Protokoll der nächsten Einheit:** [weiter]()

___

## Inhaltsverzeichnis

1. Services 
2. Promises
    1. Vergleich Java -Java Script 
   
___

## Services

Services sind Objekte, welche uns helfen können, Daten zwischen Komponenten auszutauschen. Getter-Methoden wären eine mögliche Lösung, wobei man bei dieser Realisierung jedoch erst das Objekt benötigen würde. 

In AngularJS ist ein Dienst eine Funktion oder ein Objekt, die bzw. das für Ihre AngularJS-Anwendung verfügbar und auf diese beschränkt ist. AngularJS verfügt über ca. 30 integrierte Dienste. Wenn ein Prozess komplex wird oder sich nur schwer testen lässt, kann ein Service-Objekt hilfreich sein, um die jeweilige Codebasis zu bereinigen. Für viele Survices kann man auch Objekte verwenden, die sich bereits im DOM befinden, für eigene AngularJS-Anwendung gelten jedoch einige Einschränkungen.

#### Beispiel Buchliste: 

Unsere Buchliste soll Daten von data.services erhalten (zentrale Klasse):  

**buchliste.components.ts**

```JS
import { Component, ComponentFactoryResolver } from '@angular/core';
import { Buch } from './data/buch';
import { DataService } from './data/services/data.services';

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
    const promise: Promise<Buch[]> = dataService.getBuchList();

    dataService.getBuchList().then((liste: Buch[]) => {
      console.log('Promise liefert Ergebnis...');
      this.list = this.list.concat(liste);
    });
    promise.catch((err) => {
      console.log('Fehler aufgetreten!');
    });
  }

  public clear() {
    this.list = [];
    this.dataService.clear();
  }
}
```

**app.modules.ts**

```JS
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { DataService } from './data/services/data.services'; //zu importierendes Service
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuchListeComponent } from './buchliste.component';

@NgModule({
  declarations: [
    AppComponent, BuchListeComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```
