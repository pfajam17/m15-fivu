# Protokoll FIVU/kormam15 5AHME (2019/20)

* **Thema:** Typescript, HTML
* **Datum:** 17.10.2019
* **Gefehlt:** -
* **Erstellt von:** Orthofer David
* **Protokoll 5.Einheit:** [protokoll_2019-10-10_kormam15.md](https://github.com/HTLMechatronics/m15-fivu/blob/kormam15/protokolle/protokoll_2019-10-10_kormam15.md#number)
* **Protokoll 7.Einheit:** -

----------------------------------------------------------------------------------------------

## Inhaltsverzeichnis

1. [Git Verzeichnis clonen](#git-verzeichnis-clonen)
1. [TSLint](#tslint)
1. [Collections in Java und Typescript](#collections-in-java-und-typescript)
1. [Programm](#programm)

----------------------------------------------------------------------------------------------

## Git Verzeichnis clonen
Um vom Schulserver ein Git Verzeichnis clonen zu können wird der Befehl `git clone https://www.htl-mechatronik.at/git/m15/sx-fiv.git` benötigt (Hier Beispielsweise das FIV Verzeichnis).  
  
Um das in unserem Fall geklonte Angular Projekt ausführen zu können wird außerdem der Befehl `npm install` benötigt um etwaige Bibliotheken nachzuinstallieren.  
  
## TSLint
Lint (englisch für „Fussel“) ist eine Software zur statischen Code-Analyse. Davon abgeleitet hat sich das Verb linten (englisch to lint) für das Durchführen der statischen Code-Analyse etabliert.  
  
Lint war das erste einer ganzen Reihe von Werkzeugen zur statischen Code-Analyse von Quelltext von Computerprogrammen. Sein hauptsächlicher Verwendungszweck war es, die Schwächen der damals existierenden Compiler auszugleichen. Diese setzten über weite Strecken richtigen Quellcode voraus und führten nur rudimentäre Prüfungen durch. Neben dem Aufspüren von gefährlichen Konstrukten, wie nicht initialisierten Variablen, legte Lint auch großes Gewicht auf die Überprüfung eines einheitlichen Layouts des Quelltextes und auf das Erkennen nicht portabler Konstrukte, wie etwa Abhängigkeiten vom Betriebssystem oder vom Compiler.
  
TSLint (TS für Typescript) das bei uns zum Einsatz kommt ist davon abgeleitet.
  
[Quelle](https://de.wikipedia.org/wiki/Lint_(Programmierwerkzeug))  
  
## Collections in Java und Typescript
### Java
#### ArrayList  
ArrayList ist Teil des Collection Frameworks und im Paket java.util enthalten. Es bietet dynamische Arrays in Java. Es ist zwar langsamer als Standard-Arrays, kann jedoch in Programmen hilfreich sein, in denen viele Manipulationen im Array erforderlich sind. Die Implementierung ist nicht synchronisiert! 
  
[Quelle](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/ArrayList.html)
  
#### LinkedList  
Linked Lists sind lineare Datenstrukturen, in denen die Elemente nicht an zusammenhängenden Orten gespeichert sind und jedes Element ein separates Objekt mit einem Datenteil und einem Adressenteil ist. Die Elemente werden mit Zeigern und Adressen verknüpft. Jedes Element wird als Knoten (Node) bezeichnet. Die Implementierung ist nicht synchronisiert!  
  
[Quelle](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/LinkedList.html)  
  
#### Maps
Die Schnittstelle java.util.Map repräsentiert eine Zuordnung zwischen einem Schlüssel und einem Wert. Das Interface ist kein Untertyp des Interface Collection. Daher unterscheidet es sich ein wenig von den anderen Collections.
  
[Quelle](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Map.html)  
  
### Typescript 
#### Array  
Arrays sind Sammlungen von null oder mehr Elementen. Arrays sind eine der am häufigsten verwendeten Datenstrukturen, da sie einfach und schnell Informationen abrufen können.

Man kann sich ein Array als eine Schublade vorstellen, in der Dinge in Behältern aufbewahrt werden. Das Array verändert sich dynamisch.

![Array](https://adrianmejia.com/images/array-drawer.jpg)
  
#### Hashmap
Maps und Arrays beschreiben alle denselben abstrakten Datentyp. Hash-Map-Implementierungen unterscheiden sich jedoch von Tree-Map-Implementierungen darin, dass eine Hash-Tabelle und ein binärer Suchbaum verwendet werden. HashMap ist wie eine Schublade, in der Dinge in Behältern aufbewahrt und beschriftet werden.  
  
![HashMap](https://adrianmejia.com/images/hashmap-drawer.jpg)  
  
## Programm
*Anmerkungen zu Änderungen im Programm u02-bootstrap*  
  
### app.module.ts  
```Typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
Um Komponenten verwenden zu können müssen diese exportiert bzw. importiert werden.  
Bsp: `import { BuchListeComponent } from './buchliste.component';`  
  
### buch.component.ts  
```Typescript
import { Component } from '@angular/core';
import { Buch } from './data/buch';

@Component({
  selector: 'app-buchliste',
  templateUrl: './buchliste.component.html'
})
export class BuchListeComponent {

    public list: Buch [] = [];

    public constructor () {
        this.list.push(new Buch('Verurteilt', 'Rushdie', 200, false));
        this.list.push(new Buch('Mörder Ahoi', 'Agathe Christie', 300, false));
        this.list.push(new Buch('Die Gefährten', 'J.R.R Tolkien', 600, false));
    }
}
```  
Mit `public list: Buch [] = [];` wird ein Array erstellt das anschließend im Kontruktur gefüllt wird.  
Das Schlüsselwort `push` fügt dem Array neue Elemente hinzu.  
  
### buchliste.component.html  
```Typescript
<div class="container">
    <h6>
        Buchliste ({{list.length}}
           <span *ngIf="list.length !== 1">Bücher</span>
           <span *ngIf="list.length === 1">Buch</span>
        )
    </h6>
    <ul>
        <li *ngFor="let buch of list">
            {{buch.getName()}}
        </li>
    </ul>
    <table class="table table-striped">
        <thead>
            <tr>
                <th scope="col">Nr</th>
                <th scope="col">Name</th>
                <th scope="col">Author</th>
                <th scope="col">Seitenzahl</th>
                <th scope="col">Verliehen</th>
            </tr>
        </thead>            
        <tbody>
            <tr *ngFor="let buch of list; let i=index;">
                <td>{{i + 1}}</td>
                <td>{{buch.getName()}}</td>
                <td>{{buch.getAuthor()}}</td>
                <td>{{buch.getSeitenanzahl()}}</td>
                <td>{{buch.getVerliehen()}}</td>
            </tr>
        </tbody>
    </table>
</div>
```  
Mit dem Schlüsselwort `.length` kann angegeben werden wieviele Komponenten sich in der Liste befinden. Durch die zwei geschwungenen Klammern kommt es zur Interpolation (es wird auf die Liste zugegriffen).  
  
Außerdem wurden hier auch die **Direktiven** `Nglf` und `NgFor` verwendet.  
  
#### Nglf  
Die Direktive `Nglf` ist geeignet für Verzweigungen.  
Allgemeines Bsp: `<app-item-detail *ngIf="isActive" [item]="item"></app-item-detail>`  
  
#### NgFor  
In einer Art Schleife wird durch die Liste gegangen. In unserem Fall wird mittels Interpolation auf die Variable Buch zugegriffen und mittels `getter` der Name geholt.  
Allgemeines Bsp: `<div *ngFor="let item of items">{{item.name}}</div>`
