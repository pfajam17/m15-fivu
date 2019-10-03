# Protokoll FIVU/hoflam 5AHME (2019/20)

* **Thema:** HTML, CSS, TypeScript
* **Datum:** 26.09.2019
* **Gefehlt:** Nicolas Perl
* **Erstellt von:** Lara Hofer
* **Protokoll letzte Einheit:** *[Lorenz Breitenthaler](https://github.com/HTLMechatronics/m15-fivu/blob/brelom15/protokolle/protokoll_2019-09-19_brelom15.md)*
* **Protokoll nächste Einheit:**

----------------------------------------------------------------------------------------------

## Inhaltsverzeichnis

1. [HTML](#HTML)
    1. [Was ist HTML?](#was-ist-HTML)
    2. [HTML Basics](#HTML-Basics)
2. [CSS](#CSS)
    1. [Was ist CSS?](#was-ist-CSS)
    2. [CSS Basics](#CSS-Basics)
3. [TypeScript](#TypeScript)
    1. [Einführung in TypesScript](#einführung-in-typescript)

----------------------------------------------------------------------------------------------

## HTML

### Was ist HTML?

[HTML](https://de.wikipedia.org/wiki/Hypertext_Markup_Language) oder *Hypertext Markup Language*, ist eine der häufigsten Codeformen der Welt. Es wird auf so ziemlich jeder Webseite verwendet und ermöglicht es Webdesignern, Texte, Bilder, Videos und andere Inhalte klar darzustellen. 
HTML ist eine textbasierte Auszeichnungssprache\*¹ zur Strukturierung elektronischer Dokumente wie Texte mit Hyperlinks, Bildern und anderen Inhalten. HTML-Dokumente sind die Grundlage des World Wide Web und werden von Webbrowsern dargestellt. Neben den vom Browser angezeigten Inhalten können HTML-Dateien zusätzliche Angaben in Form von Metainformationen\*² enthalten, z. B. über die im Text verwendeten Sprachen, den Autor oder den zusammengefassten Inhalt des Textes.

Die aktuelle Version ist seit dem 14. Dezember 2017 _HTML 5.2_ die bereits von vielen aktuellen Webbrowsern und anderen Layout-Engines unterstützt wird. Auch die _Extensible Hypertext Markup Language_ (XHTML) wird durch HTML5 ersetzt.

HTML dient dazu, einen Text zu strukturieren, nicht aber zu formatieren. Dazu verwendet man [CSS](#CSS). 

\*¹ = eine maschinenlesbare Sprache für die Gliederung und Formatierung von Texten und anderen Daten

\*²  Metadaten sind Daten zum HTML Dokument

Quelle: https://de.wikipedia.org/wiki/Hypertext_Markup_Language

### HTML Basics
In dem Tuturial auf der Seite [w3schools - HTML](https://www.w3schools.com/html/) kann man alles genauere über HTML nachlesen. Weiters ist dieses Tuturial in dem Dokument [HTMLDOC](https://github.com/HTL-Turm/documents/blob/master/HTML/HTMLDOC.odt) zusammengefasst. 

**Wichtige Begriffe:**

```< !DOCTYPE html >``` → definiert Dokument als HTML5

```<!DOCTYPE>``` → Deklaration stellt den Dokumenttyp dar und hilft Browsern, Websiten korrekt anzuzeigen

-   darf nur einmal oben auf der Seite erscheinen
-   unterscheidet nicht zwischen Groß- & Kleinschreibung
    

```<html>``` → Stammelement einer HTML Seite

```<head>```→ enthält Meta Informationen zum Dokument

```<title>``` → gibt Titel für das Dokument an

```<body>``` → enthält den sichtbaren Seiteninhalt

**Headings**: von ```<h1>``` bis ```<h6>```

**Paragraphs**: ``<p>`` ``</p>``

```<p>``` … Start Tag (opening tag)

```</p>```  … End Tag (closing tag)

**Links**: ```<a>```..```</a>``` → Ziel im Attribut „href“

**Bilder**: ```<img>```

-   _src:_ source file (Quelldatei)
    
-   _alt:_ alternative text
    
-   _width, height:_ werden als Attribute dargestellt (Weite und Höhe)
    

**Buttons** → ```<button>``` Click me ```</button>```

**Listen**:

-   ```<ul>``` → ungeordnete Liste/Aufzählung
    
-   ```<ol>``` → geordnete Liste/nummerierte Liste
    
    -   ```<li>```  → Listenelement
    

**Beispiel: my-first-ng-app**

*Überschrift:*

```<h1  style="color:blueviolet">My First project with Angular</h1>```

*Button:* 
Mit```<button>``` wird ein Button erstellt. Damit er funktioniert braucht man eine Methode in Typescript (weiteres dazu im Abschnitt [TypeScript](#TypeScript)). Die Zusatzinformation *(click)* wird angegeben, damit das Programm weiß was ich tun möchte.

```
<button  (click)="onButtonClicked()">Hello</button>
``` 

*Paragraph:*

```
<p id="mycomponent">
{{myWelcome}}
</p> 

<p  class="myClass">
das soll ein text sein
</p>
```

*geordnete Liste (ol = ordered list):*

```
<ol>

<li>first</li>
<li>second</li>
<li>third</li>

</ol>
```

 *ungeordnete Liste (ul = unordered list):*
 
 ```
<ul  class ="myClass">

<li>first point</li>
<li><strong>second point</strong> </li>

</ul>
```

 *Link:*  
 
```
<a  target="_blank"  href="https://www.google.at/">Google Link</a>
```

*Bild:*

```
<img  src="https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80">
```

## CSS


### Was ist CSS?

 [CSS](https://de.wikipedia.org/wiki/Cascading_Style_Sheets) (Cascading Style Sheets) genannt, ist eine Stylesheet-Sprache für elektronische Dokumente und zusammen mit HTML und DOM* eine der Kernsprachen des World Wide Webs. Sie ist ein sogenannter „living standard“ (_lebendiger Standard_) und wird vom World Wide Web Consortium beständig weiterentwickelt. Mit CSS werden Gestaltungsanweisungen erstellt, die vor allem zusammen mit den Auszeichnungssprachen [HTML](https://de.wikipedia.org/wiki/Hypertext_Markup_Language "Hypertext Markup Language") und [XML](https://de.wikipedia.org/wiki/Extensible_Markup_Language "Extensible Markup Language") (zum Beispiel bei SVG) eingesetzt werden.

Quelle: https://de.wikipedia.org/wiki/Cascading_Style_Sheets

\* **Was ist DOM?**
Das DOM  (Document Object Model) ist die Schnittstelle zwischen HTML und dynamischem JavaScript. Alle Elemente werden zu Objekten, die dynamisch aufgerufen, verändert, hinzugefügt und gelöscht werden können.
![DOM](https://github.com/HTLMechatronics/m15-fivu/blob/hoflam15/images/DOM%20Diagram.svg)

### CSS Basics

= Styles & Colors

Es gibt 3 wesentliche Arten wir CSS erfolgen kann:
 -   Inline: mithilfe vom style Attribut  
 -   Intern: durch Verwendung eines Style ```<style>``` Elements im ```<head>``` Abschnitt
 -   Extern: mithilfe einer externen CSS – Datei (Stylesheet --> modernste Version )
    

*Inline CSS*

wird verwendet, um einem einzelnen HTML Element einen eindeutigen Stil zuzuweisen
 -   Inline CSS verwendet Style -Attribute eines HTML-Elements
```
<h1 style=“color:blue;“> >/h1>
```

*Internal CSS*

wird verwendet, um einen Stil für eine einzelne HTML-Seite zu definieren

 -   wird im Abschnitt ```<head>``` einer HTML-Seite in einem ```<style>``` -Element definiert
    
```
<head>
  <style>
    body {background-color: powderblue;}
    h1 {color:blue;}
    p {color:red;}
  </style>
</head>
```

*External CSS*

wird zum Definieren des Stils für viele HTML-Seiten verwendet
 -   mit externen Stylesheet kann man das Erscheinungsbild einer gesamte Website ändern, indem eine einzelne Datei geändert wird
    
```
<head>
  <link rel=“Stylesheet“ href=“styles.css“>
</head>
```
 - kann in einem beliebigen Texteditor geschrieben werden
 - Datei darf keinen HTML-CODE verwenden & wird mit .css gespeichert

Alles Nötige über CSS findet man im [CSS Tuturial](https://www.w3schools.com/css/default.asp).

**häufige Beispiele:**

*CSS Fonts (Schriften)*
-   Farbe: **color**
-   Schriftart: **font-family**  
-   Schriftgröße: **font-size**
   
**CSS Border/Rahmen**
-   Rahmen: border
Bsp.:
```
{ border :1px solid powderblue; }
```
 
*CSS Padding/“Polsterung“*

 definiert Abstand zwischen Text&Rand
-   padding
Bsp.:
```
{ padding:30px; }
```

*CSS Margin (Spanne)*

definiert einen Rand (Leerzeichen) außerhalb des Rahmens
-   margin 
```
{ margin:50px; }
```    



**Beispiel: my-first-ng-app**

*„id“ – Attribut*
-   gibt eine eindeutige ID für ein HTML-Element an (der Wert muss innerhalb des HTML-Dokuments eindeutig sein) 
-   kann von CSS und JavaScript verwendet werden, um bestimmte Aufgaben für das Element mit dem spezifischen ID-Wert auszuführen
-   um in CSS ein Element mit einer bestimmten ID auszuwählen ist ein Rautezeichen (#) vor dem ID-Element zu setzen 

```
#mycomponent {
  color:green
}
```

*„class“ - Attribut*
-   wird verwendet, um gleiche Stile für Elemente mit demselben Klassennamen zu definieren
-   alle HTML-Elemente erhalten mit demselben Klassenattribut denselben Stil

 ```
.myClass {
  color:blue
}
```

## TypeScript

### Einführung in TypeScript

[TypeScript](https://de.wikipedia.org/wiki/TypeScript) ist ein Programmiersprache, entwickelt von Microsoft. Es verfügt in Ergänzung zu JavaScript über ein stärkeres Typsystem, wie man es aus Programmiersprachen wie Java oder C# kennt. Durch die starke Typisierung kann der Compiler Funktionsaufrufe besser prüfen und es können Fehler bereits zur Compilezeit erkannt werden. Jeder [JavaScript](https://de.wikipedia.org/wiki/JavaScript "JavaScript")-Code ist auch gültiger TypeScript-Code und ist somit in allen Browsern und auf allen Plattformen ausführbar. Auch JavaScript Bibliotheken können in TypeScript verwendet werden.
In JavaScript werden Variablen mit *var* eingeleitet. In TypeScript hingegen können Variablen auch mit *cons* und *let* eingeleitet werden.

Um sich unter "TypeScript" was vorstellen zu können ist das einfachste Beispiel ein Button. Man kann mit HTML einen Button erstellen aber um ihn funktionstüchtig zu machen muss ein Code hinter dem Button stehen. In diesem Falle kann man in TypeScript den Button eine Methode zuweisen, die dem Button sagt was er zu tun hat.

**Beispiel: my-first-ng-app**

*HTML:*

```
<button  (click)="onButtonClicked()">Hello</button>
```
*TypeScript:*

```TypeScript
export  class  AppComponent {
  public  myWelcome  =  'Hello';
  private  cnt  =  1;
  
public  constructor() {
  console.log('app.component constructor');
  this.myWelcome  =  'Hello2';

  setInterval( () => {
    this.cnt++;
    this.myWelcome  =  'Hello '  +  this.cnt;
    console.log('cnt='  +  this.cnt);
  }, 1000);
}

public  onButtonClicked() {
  this.cnt=0;
}
```

