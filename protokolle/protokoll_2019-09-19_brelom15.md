# Protokoll FIVU/SX 5AHME (2019/20)

* **Thema:** Installation Node.js, Angular, Angular CLI
* **Datum:** 19.9.2019
* **Gefehlt:** -
* **Erstellt von:** Breitenthaler
* **Protokoll letzte Einheit:** [hir](protokoll_2019_09_12_sx.md)
* **Protokoll nächste Einheit**

----------------------------------------------------------------------------------------------

## Inhaltsverzeichnis

1. [Mobile Computing](#mobile-computing)  
2.

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

*package.json:* Beinhaltet die Information welche Versionen der einzelnen Module vorhanden ist.

*index.html:* Beinhaltet den grundlegenden Aufbau der Websteite. Allerdings wird hierbei nur auf die Angular Application
(app-root) verwiesen.
```
<body>
  <app-root></app-root>
</body>

```
*main.ts:* Startet die App mittels Typescript.

Die eigentliche Programmierarbeit wird im Verzeichniss `src/app` in den Dateien *app.components.html*, *app.components.css* und
*app.components.ts* durchgeführt.

## Aufbau einer Webseite

Eine Webseite besteht grundlegend aus drei Komponenten. Einer HTML, einer CSS und einer Java / Typescript Komponente, welche alle einen individuellen Aufgabenbereich haben.  

### HTML

 HTML (Hypertext Markup Language) ist Auszeichnungssprache mit welcher die Grundlegende Struktur einer Webseite deffiniert wird.
 Mit solch einem Quellcode lassen sich Elemente wie Texte, Überschriften und Bilder mittels sogennanten Tags über den Browser
 in einer simplen Struktur Darstellen. Tags werden mittels "< ... >" gekennzeichnet, bobei es ein Start und ein Endtag gibt.
 Der zwischen den Tags stehende kontnennt wird je nach art nun ander dargestellt bzw.: definiert.  

 Syntax Beispiel:
 ```
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

CSS (Cascading Style Sheets) ist eine Syle Sheet Sprache welche benutzt wird um dem Rohen HTML Kontent "Farbe" zu verleihen.
Somit kann man nun gewissen HTML Elementen eine Gewisse Schriftart, Farbe oder Form zuteilen.  
Hierbei besteht eine solche Datei nur aus Anweisungen welche HTML Komponente wie auszusehen hat.  

Anweisungs Beispiel:
```
Komponente X {
  Eigenschaft 1;
  ...
  Eigenschaft n;
}

```

### Java / TypeScript

Java / TypeScript ist eien Skriptsprache welche genutzt wird um Inhalte zu verändern, nachzuladen oder zu generieren und so die Möglichkeiten von HTML und CSS zu erweitern. Hierbei ist allerdings zu beachten, dass JavaScript nict viel mit dem Echten Java zu tun hat. Dienahmensgebung ist ein reiner Markezing Akt gewesen.






## Bearbeitung des Projects
