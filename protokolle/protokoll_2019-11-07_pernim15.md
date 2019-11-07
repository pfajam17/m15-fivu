# FIVU Protokoll 5AHME


* **Thema:** Services & Promises in JavaScript/TypeScript
* **Datum:** 07.November 2019
* **Erstellt von:** Perl Nicolas, 5AHME, Kat.Nr. 10
* **Abwesend:** -
* **Protokoll der letzten Einheit:**  [zurück]()
* **Protokoll der nächsten Einheit:** [weiter]()

___

## Inhaltsverzeichnis 

1. [Services](#Services) 
    1.[Timing Ereignisse](#Timing-Ereignisse) 
2. [Promises](#Promises) 
    1. [Vergleich Java mit Java Script](#Vergleich-Java-mit-Java-Script) 
    2. [Syntax](#Syntax) 
3. [Programme](#Programme) 
   
___

## Services

Services sind Objekte, welche uns helfen können, Informationen zwischen Klassen auszutauschen, die sich nicht kennen. Getter-Methoden wären eine mögliche Lösung, wobei man bei dieser Realisierung jedoch erst das Objekt benötigen würde. 

In AngularJS ist ein Dienst eine Funktion oder ein Objekt, die bzw. das für Ihre AngularJS-Anwendung verfügbar und auf diese beschränkt ist. AngularJS verfügt über ca. 30 integrierte Dienste. Wenn ein Prozess komplex wird oder sich nur schwer testen lässt, kann ein Service-Objekt hilfreich sein, um die jeweilige Codebasis zu bereinigen. Für viele Services kann man auch Objekte verwenden, die sich bereits im DOM befinden, für eigene AngularJS-Anwendung gelten jedoch einige Einschränkungen.

#### Beispiel Buchliste: 

Unsere Buchliste soll Daten von data.services erhalten (zentrale Klasse). Meist ist hierzu ein eigener Ordner namens Services zu erstellen.   

### Timing-Ereignisse 

Das window object ermöglicht die Ausführung von Code in festgelegten Zeitintervallen. 

Diese Zeitintervalle werden als Zeitsteuerungsereignisse bezeichnet. 

Die beiden wichtigsten Methoden zur Verwendung mit JavaScript sind: 
```JS
    setTimeout (Funktion, Millisekunden) 
```
- Führt eine Funktion aus, nachdem eine bestimmte Anzahl von Millisekunden gewartet wurde. 
    
```JS
    setInterval (Funktion, Millisekunden) 
```
- Entspricht setTimeout(), wiederholt jedoch die Ausführung der Funktion kontinuierlich. 

___ 

## Promises 

### Vergleich Java mit Java Script 

| Java | Java Script |  
| --------------------------------------- | -------- |   
| mehrere Threads - Stichwort Multithreading | nicht Multithreading fähig - soll einfacher sein | 
|   | Lösung: Promises | 

Das Promise-Objekt (dt./deutsch Ein Versprechens-Objekt, das später eingelöst wird) wird für asynchrone Berechnungen verwendet. Ein Promise kann sich in einem von drei Zuständen befinden: 

- pending: initialer Status, weder fulfilled noch rejected. (dt. schwebend) 
- fulfilled (erfüllt): Operation erfolgreich. 
- rejected (zurück gewiesen): Operation gescheitert. 


#### Syntax: 
```JS
new Promise(executor);
new Promise(function(resolve, reject) { ... });
```

executor (Ausführer)
    Funktion mit den zwei Argumenten resolve und reject. Das erste Argument führt den Promise aus, das zweite verwirft ihn. Die Funktionen können ausgeführt werden, sobald die Operation durchgeführt wurde. 
    
![](https://mdn.mozillademos.org/files/8633/promises.png) 


[**Quelle**](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)

Siehe Beispiel: 'buchliste' ist erst nach einer bestimmten Zeit verfügbar 
-> deshalb wird ein sog. Promise (Versprechen) verwendet 

___

## Programme

**buchliste.components.ts**

```JS
import { Component, ComponentFactoryResolver } from '@angular/core';
import { Buch } from './data/buch';
import { DataService } from './data/services/data.service';     //DataService importieren

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
      console.log('Promise liefert Ergebnis...');   //Statusausgabe an Terminal
      this.list = this.list.concat(liste);
    });
    promise.catch((err) => {                //mögliche Fehler mit promise.catch abfangen
      console.log('Fehler aufgetreten!');   //Statusausgabe an Terminal
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

import { DataService } from './data/services/data.service'; //zu importierendes Service
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

**data.service.ts**

```JS
import { Injectable } from '@angular/core';
import { Buch } from 'src/app/data/buch';
import { reject } from 'q';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    public list: Buch[] = [];

    public constructor() {
        this.list.push(new Buch('Verurteilt', 'Rushdie', 200, false));
        this.list.push(new Buch('Mörder Ahoi', 'Agathe Christie', 300, false));
        this.list.push(new Buch('Die Gefährten', 'J.R.R. Tolkien,', 600, true));
    }
    
    public getBuchList(): Promise<Buch[]> {     //funktioniert wie in Java 'doInBackground()' 
        try {
            /*Eine mögliche Realisierung: 
            return new Promise<Buch []>( (resolved,reject) => this.getBuchListeDoInBackground() );*/ 
            
            return new Promise<Buch[]>( (resolve, reject) => {
                console.log('Promise gesendet...');             //Statusausgabe an Terminal
                // ...
                // ...
                // setIntervall();
                setTimeout(() => {
                    console.log('Promise beendet...');          //Statusausgabe an Terminal
                    const result: Buch[] = this.list;
                    resolve(result);
                }, 5000);
            });
        } catch (err) {        //falls der Server z.B. nicht antworten kann, muss der Error abgefangen werden 
            reject(err);
        }
        /*Eine weitere mögliche Realisierung:
        return new Promise<Buch []>(this.getBuchListeDoInBackground);*/
    }

    public add(buch: Buch) {
        this.list.push(buch);
    }

    public clear() {    
        throw new Error("Method not implemented");
    }

    private getBuchListeDoInBackground() {

    }
}
```

___

