# Protokoll FIVU/brelom15 5AHME (2019/20)

* **Thema:** Installation VS Code, Erstes Project  
* **Datum:** 19.9.2019
* **Gefehlt:** Keiner
* **Erstellt von:** Breitenthaler
* **Protokoll 1. Einheit:** [protokoll_2019-09-12_sx.md](protokoll_2019-09-12_sx.md)
* **Protokoll 3. Einheit:** [protokoll_2019-09-26_hoflam15.md](protokoll_2019-09-26_hoflam15.md)

----------------------------------------------------------------------------------------------

## Inhaltsverzeichnis

1. [Installation von Visual Studio Code](#Installation-von-Visual-Studio-Code)  
2. [Analyse eines Angular Projects](#Analyse-eines-Angular-Projects  )
3. [Aufbau einer Webseite](#Aufbau-einer-Webseite)
    1. [HTML](#HTML)
    2. [CSS](#CSS)
    3. [Java / TypeScript](#Java-/-TypeScript)
4. [Bearbeitung des Projects](#Bearbeitung-des-Projects)

----------------------------------------------------------------------------------------------

## Installation von Visual Studio Code  

Visual Studio Code ist ein Quelltext-Editor von Microsoft welcher mit Hilfe der Extension
TSLint zur Programierung von TypeScript genutzt werden kann. Vorteil dieser IDE ist, dass sie auf jedem
Betriebssystem installiert werden kann und auch von dem Linux Package Maneger unterstützt wird, welches in weiterer Folge
 alle Vorteile dieses Tools mit sich bringt.   
Download Beschreibungen sowie Links sind auf der [Visual Studio Homepage](https://code.visualstudio.com) verfügbar.

## Analyse eines Angular Projects  

Ein von der Angular CLI erstelltes Projekt besteht grundsätzlich aus sehr vielen Dateien, da alle
verwendeten Module direkt im Projekt Ordner abgelegt sind. Dies ist erforderlich um die Module immer miteinander
kompatiebel zu halten, da diese im Wochentackt aktuallisiert werden. Besagte Dateien sind im **node_modules** Ordner abgelegt.

**Analyse weiterer Dateien:**

*package.json:* Beinhaltet die Information welche Versionen der einzelnen Module vorhanden ist.

*index.html:* Beinhaltet den grundlegenden Aufbau der Websteite. Allerdings wird hierbei nur auf die Angular Application
(app-root) verwiesen.
```html
<body>
  <app-root></app-root>
</body>

```
*main.ts:* Startet die App mittels Typescript.

Die eigentliche Programmierarbeit wird im Verzeichniss `src/app` in den Dateien *app.components.html*, *app.components.css* und
*app.components.ts* durchgeführt.

## Aufbau einer Webseite

Eine Webseite besteht grundlegend aus drei Komponenten. Einer HTML, einer CSS und einer Java / Typescript Komponente, welche alle einen individuellen Aufgabenbereich erfüllen.  

### HTML

 HTML (Hypertext Markup Language) ist eine Auszeichnungssprache mit welcher die Grundlegende Struktur einer Webseite deffiniert wird.
Mit solch einem Quellcode lassen sich Elemente wie Texte, Überschriften und Bilder mittels sogennanten Tags über den Browser in einer simplen Struktur darstellen. Tags werden mittels "< ... >" gekennzeichnet, bobei es ein Start und ein Endtag gibt. Der zwischen den Tags stehende Kontent wird je nach Art nun anders dargestellt bzw.: definiert.  

 Syntax Beispiel:
 ```HTML
 <!DOCTYPE html>
<html>
  <head>
    <title>Titel der Webseite</title>
    <!-- weitere Kopfinformationen -->
  </head>
  <body>
    <p>Inhalt der Webseite</p>
  </body>
</html>

 ```

### CSS

CSS (Cascading Style Sheets) ist eine Syle Sheet Sprache, welche benutzt wird um dem rohen HTML Kontent "Farbe" zu verleihen.
Somit kann man nun gewissen HTML Elementen eine gewisse Schriftart, Farbe oder Form zuteilen. Hierbei besteht eine solche Datei nur aus Anweisungen, welche HTML Komponente wie auszusehen hat.  

Anweisungs Beispiel:
```CSS
Komponente X {
  Eigenschaft 1;
  ...
  Eigenschaft n;
}

```

### Java / TypeScript

Java / TypeScript ist eien Skriptsprache welche genutzt wird um Inhalte zu verändern, nachzuladen oder zu generieren und so die Möglichkeiten von HTML und CSS zu erweitern. Hierbei ist allerdings zu beachten, dass JavaScript nict viel mit dem echten Java zu tun hat. Die Nahmensgebung ist ein reiner Marketing Akt gewesen.


## Bearbeitung des Projects

1. Als erstes sollte eine einfache Begrüßung unter einer Überschrift auf der Startseite dargestekllt werden.
Hierführ müssen Statische Elemente wie die Überschrift im HTML Code und Dynamische Elemente wie unsere Begrüßung in einer Variable im TypeScript Code angeführt werden.  

```TypeScript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public myWelcome = 'Hello';
  }
}
```
Um diese anschließend auf der Seite zu zeigen muss sie noch in der HTML Datei bekannt gegeben werden.

```HTML
<h1>My First project with Angular</h1>
{{myWelcome}}
```



2. Anschließend sollte nach der Begrüßung eine Zahl nach oben gezählt werden. Dies wird mit Hilfe eines Konstruktors und der Methode setInterval realiesier. Dies ist möglich das sich die Application automatisch aktuallisiert.  

```TypeScript
export class AppComponent {
  public myWelcome = 'Hello';
  private cnt = 0;

  public constructor() {
    this.myWelcome = 'Hello2';

    setInterval( () => {
      this.cnt++;
      this.myWelcome = 'Hello ' + this.cnt;
    }, 1000);
  }
}
```
