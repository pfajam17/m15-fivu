
# Protokoll FIVU/SX 5AHME (2019/20)

* **Thema:** CSS , Framework, Bootstrip
* **Datum:** 04.10.2019
* **Gefehlt:** 
* **Erstellt von:** Stefan Hörmann
* **Protokoll letzte Einheit:** [Protokoll 26.10.2019](protokoll_2019-09-12_hoflam15.md)
* **Protokoll nächste Einheit**

----------------------------------------------------------------------------------------------

## Inhaltsverzeichnis

1. [CascadingStyleSheets](#CSS)  
2. [Frame Work](#Framework)
   1. [Bootstrap](#Bootstrap)
	   1. [Enstehung Bootstrap](#Enstehung)
	   2. [Einbinden in VisualStudio](#Einbindung)
	 2. [Grid-Layout](#Grid-Layout) 
	 3. [Components](#Components)
	 4. [Border-Utilities](#Border-Utilities)


----------------------------------------------------------------------------------------------

## CSS

Quelle:  [Cascading Style Sheets]

> **Cascading Style Sheet**, kurz CSS genannt, ist eine Stylesheet-Sprache für elektronische Dokumente und zusammen mit HTML und DOM eine der Kernsprachen des World Wide Webs. Sie ist ein sogenannter "living standard" und wird vom World Wide Web Consortium bestätigt weiterentwickelt. Mit CSS werden Gestaltungsanweisungen erstellt, die vor allem zusammen mit den Auszeichnungsprachen HTML und XML eingesetzt werden.

Vereinfacht gesagt heißt dass, das CSS dazu benutzt wird, bestimmte stilistische Bausteine die von HTML Dokumenten genutzt werden, zentral in einer Datei zu speichern und für alle HTML Dokumente zu verwenden.

Durch CSS werden die HTML-Dokumente wesentlich kürzer und schneller, da die Design-Anwendungen ausgelagert sind. Der Website-Treiber muss nicht bei jedem Dokument darauf achten, dass die notwendigen Design-Anweisungen vorhanden sind, dies verringert den Verwaltungsaufwand. Auch kann dem Browser mitgeteilt werden, wie lange CSS-Dateien nutzbar sind. Somit muss der Browser die Datei nicht jedes mal erneut laden.

### Entstehung CSS
Der erste Vorschlag für Web-Stylesheets entstand 1993, am 10. Oktober 1994 veröffentlichte ein Mitarbeiter des CERNs einen Vorschlag für "Cascading HTML style sheets". Später schließt sich Håkon Wium Lie mit Bert Bos zusammen, die sich entschieden CSS gemeinsam zu entwickeln. Zeitgleich arbeiteten auch andere an einer Stylesheet-Sprache, jedoch gelang es Lie und Bos zuerst, einheitliche Regeln zu definieren, die über mehrere Stylesheets hinweg und innerhalb eines einzigen Stylesheets darüber entscheiden, welche CSS-Formatierung auf das betreffende Element angewendet werden sollen.

-------------------

## Framework

Quelle:  [Framework]
 > Ein **Framework** (englisch für Rahmenstruktur) ist ein Programmiergerüst, das in der Softwaretechnik, insbesondere im Rahmen der objektorientierten Softwareentwicklung sowie bei komponentenbasierten Entwicklungsansätzen, verwendet wird. Im allgemeineren Sinne bezeichnet man mit **Framework** auch einen Ordnungsrahmen.

### Bootstrap
Bootstrap ist ein freies Frontend-CSS-Framework basierend auf der MIT-Liezens. Es enthält auf HTML und CSS basierende Gestaltungsvorlagen und optionale JavaScript Erweiterungen. Es zählt zu den populärsten Frameworks. Die aktuelle Version ist V4.

#### Enstehung
Quelle:  [Bootsrap]
>Im Jahr 2011 erdachte Twitter Bootstrap als eine interne Lösung, mit deren Hilfe Inkonsistenzen zwischen den Entwickler- und Designerteams beseitigt werden sollten. Twitter hatte seine Plattform quasi so aufgebaut, dass keine bestimmte Code-Struktur vorlag.

#### Einbindung
Es gibt 2 Möglichkeiten Bootstrap in ein HTML-Dokument einzubinden, die erste Möglichkeit ist, das  Framework von außen zu laden, dies geschiet durch das Verlinken einer externen CSS-Datei. Die 2. Möglichkeit ist die Bootstrap Datei herunterzuladen und diese somit ins Projekt einfügen.

##### Verlinken einer externen CSS-Datei
Am einfachsten ist es, alle Style-Informationen in einer CSS-Datei zusammenfassen und diese im im head-Teil des HTML-Dokuments zu referieren.

```HTML
<!doctype  html>
<html  lang="en">
<head>
<meta  charset="utf-8">
<title>U02bootstrap</title>
<base  href="/">
<meta  name="viewport"  content="width=device-width, initial-scale=1">
<link  rel="icon"  type="image/x-icon"  href="favicon.ico">
<link  rel="stylesheet"  href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"  crossorigin="anonymous">
</head>
<body>
<app-root></app-root>
</body>
</html>
```
So wird dem Browser gesagt, dass die Datei  "bootstrap.min.css" geladen werden muss, um den Inhalt des HTML-Dokuments korrekt auszulesen.


##### Herunterladen der Bootstrap Datei
Da nur durch das Einfügen des Links entsteht das Problem, dass man das Projekt offline nicht ausführen kann, da die Informationen nicht über den Link hineingeladen werden können. 
Um dieses Problem zu beheben kann mann die Bootstrap files in das Projekt einbinden. Die genaue Anleitung dazu findet man auf der  Bootstrap Website: [https://getbootstrap.com/][Bootstrap].

Der einfachste Weg Bootstrap herunterzuladen ist das Terminal zu öffnen und folgenden Befehl auszuführen: 

```bash
npm install bootstrap
```

Danach muss die Datei in das Projekt eingebunden werden, dazu muss in der "angular.json" die Line -
```html
"node_modules/bootstrap/dist/css/bootstrap.min.css"
```
-einfügen. Jedoch muss man nach dem einfügen ein Trennzeichen zwischen den einzelnen Lines einfügen, dies sollte so Aussehen:
```html
"styles": [
"src/styles.css",
"node_modules/bootstrap/dist/css/bootstrap.min.css"
],
```

Noch dazu muss im Terminal folgender Befehl eingegeben werden: 

``` bash
npm install --save @ng-bootstrap/ng-bootstrap
```
Danach muss in der "app.module.ts" folgendes geändert werden:
	1. es muss ein neuer Import eingefügt werden:
```typescript
	import {NgbModule} from  '@ng-bootstrap/ng-bootstrap';
	```
2. es muss NgbModule eingebunden werden: 
```typescript
imports: [
NgbModule,
BrowserModule,
AppRoutingModule
],
```

Die gesamte "ap.module.ts" sollte danach so aussehen:
```typescript 
import { BrowserModule } from  '@angular/platform-browser';
import { NgModule } from  '@angular/core';
import {NgbModule} from  '@ng-bootstrap/ng-bootstrap'; 

import { AppRoutingModule } from  './app-routing.module';
import { AppComponent } from  './app.component'; 

@NgModule({
declarations: [
AppComponent
],
imports: [
NgbModule,
BrowserModule,
AppRoutingModule
],
providers: [],
bootstrap: [AppComponent]
})
export  class  AppModule { }
```
----

### Grid-Layout

Das Rastersystem von Bootstrap verwendet eine Reihe von Containern, Zeilen und Spalten zum Layouten und Ausrichten von Inhalten. 
Mehr zu diesem Thema hier: [https://getbootstrap.com/docs/4.3/layout/grid/](https://getbootstrap.com/docs/4.3/layout/grid/)

----

### Components
Man kann diverse Componenten durch Bootstrap einfügen, hier werden einige dieser Komponenten genauer erklärt und gezeigt

####  Alerts
 Alerts bieten Kontext bezogene Rückmeldungen für Benutzeraktionen, sie sind flexibel in Länge und Form.
####  Breadcrumb
Zeigt den aktuellen Dateipfad an und setzt automatisch Trennzeichen.
#### Buttons 
Buttons können in verschiedenen Farben, Formen oder auch Größen eingefügt werden.
______

Alle Components sowie Beschreibungen finden Sie hier: [https://getbootstrap.com/docs/4.3/components/alerts/](https://getbootstrap.com/docs/4.3/components/alerts/)

____

### Border-Utilities
Border Utilities werden verwendet um den Rahmen und den Rahmenradius eines Elements schnell zu gestalten. Ideal für Bilder, Schaltflächen oder andere Elemente.

Genaueres zu den Border Utilities hier: [https://getbootstrap.com/docs/4.3/utilities/borders/](https://getbootstrap.com/docs/4.3/utilities/borders/)

[Cascading Style Sheets]: https://de.wikipedia.org/wiki/Cascading_Style_Sheets
[Framework]: https://de.wikipedia.org/wiki/Framework
[Bootsrap]: https://www.prestashop.com/de/blog/was-ist-bootstrap-die-geschichte-und-der-hype-teil-1-von-2
[Bootstrap]: [https://getbootstrap.com/](https://getbootstrap.com/)

