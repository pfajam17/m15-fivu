# FIVU Protokoll 5AHME


* **Thema:** Services, Promises in JavaScript/TypeScript
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
}
```
