# Protokoll 

-   **Thema:** Bootstrap Installation, Server Client Programm
-   **Datum:** 21.11.2019 + 29.11.2019
-   **Erstellt von:** Sarah Vezonik
-   **Protokoll letzte Einheit:** 
[Simon Szapacs](https://github.com/HTLMechatronics/m15-fivu/blob/szasim15/protokolle/protokoll_2019-11-14_szaszim15.md)
-   **Protokoll nächste Einheit:** Thomas Winter

# Inhaltsverzeichnis 

1. [Bootstrap Installation]()
2. [Server - Client - Programm]()  
   2.1. [Promise]()  
   2.2. [Striped rows]()   
   2.3. [Button]()     
   2.4. [Temperaturwert]()   
   2.5. [Clock]() 
3. [Theorie]()  
     3.1. [Architecture Overview]()  
     3.2. [aria describedby](https://github.com/HTLMechatronics/m15-fivu/blob/vezsam15/protokolle/protokoll_2019-11-21_vezsam15.md#aria-describedby)  
     3.3. [asynchron](https://github.com/HTLMechatronics/m15-fivu/blob/vezsam15/protokolle/protokoll_2019-11-21_vezsam15.md#asynchron)  
     3.4. [await](https://github.com/HTLMechatronics/m15-fivu/blob/vezsam15/protokolle/protokoll_2019-11-21_vezsam15.md#await)  
     3.5. [submit](https://github.com/HTLMechatronics/m15-fivu/blob/vezsam15/protokolle/protokoll_2019-11-21_vezsam15.md#submit)  

# Bootstrap

Um ständige Wartezeiten am Anfang der Stunden zu vermeiden, anbei nochmals die Anleitung zur Bootstrap Installation: 

Folgender Befehl ist im Terminal einzugeben, um Bootstrap zu installieren

    npm install bootstrap

Dann muss die Datei in das Projekt eingebunden werden, dazu muss die "angular.json" fmit folgende Zeile vervollständigt werde:

   ```typescript
    "node_modules/bootstrap/dist/css/bootstrap.min.css"
 ```
   
Nicht zu vergessen ist das Trennzeichen: 

```typescript
"styles": [
"src/styles.css",
"node_modules/bootstrap/dist/css/bootstrap.min.css"
],
```

Der nächste Befehl im Terminal ist folgender:

    npm install --save @ng-bootstrap/ng-bootstrap

Danach muss in der "app.module.ts" ein neuer Import eingefügt werden:

	import {NgbModule} from  '@ng-bootstrap/ng-bootstrap';
	
Der nächste Schritt ist das einbinden vom NgbModule:

```typescript
imports: [
NgbModule,
BrowserModule,
AppRoutingModule
],
```

Beispiel der vollständigen "ap.module.ts" :
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
Anbei noch die Homepage für die genau Anleitung um den Bootstrap auch offline ausführen zu können:
[Bootstrap Download Link](https://getbootstrap.com/)

# Server - Client - Programm
Unsere Aufgabe ist es, ein neues Programm, welches zum einen die Messdaten über ein Promise und die Uhrzeit in einem Interval erfasst, zu programmieren.
In der ersten und zweiten Einheit beschäftigten wir uns mit der Uhrzeit und einer Tabelle mit den Messwerten.
Server: Daten
Client: Daten in einer Tabelle, Titel, MinMax Anzeigen, Button Reset MinMax


# Promise

Das **`Promise-Objekt (dt./deutsch Ein Versprechens-Objekt, das später eingelöst wird)`** wird für asynchrone Berechnungen verwendet. Ein `Promise` kann sich in einem von drei Zuständen befinden:

-   _pending_: initialer Status, weder _fulfilled_ noch _rejected_. (dt. schwebend)
-   _fulfilled_ (erfüllt): Operation erfolgreich.
-   _rejected_ (zurück gewiesen): Operation gescheitert.

### **Syntax** 
```typescript
new Promise(_executor_);
new Promise(function(resolve, reject) { ... });
```

### **Parameter**

*executor (Ausführer)*  
Funktion mit den zwei Argumenten `resolve` und `reject`. Das erste Argument führt den Promise aus, das zweite verwirft ihn. Die Funktionen können ausgeführt werden, sobald die Operation durchgeführt wurde.

### **Beschreibung**

Das `**Promise**`-Interface repräsentiert einen Proxy für einen Wert, der nicht zwingend bekannt ist, wenn der Promise erstellt wird. Das erlaubt die Assoziation zwischen _Handler_ und dem Gelingen oder Fehlschlagen einer asynchronen Aktion. Mit diesem Mechanismus können asynchrone Methoden in gleicher Weise Werte zurück geben wie synchrone Methoden: Anstelle des endgültigen Wertes wird ein _Promise_ zurückgegeben, dass es zu einem Zeitpunkt in der Zukunft einen Wert geben wird.

Ein Promise mit dem Status _pending_ kann entweder zu _fulfilled_ mit Wert oder zu einem _rejected_ mit Grund werden. Wenn einer dieser Fälle eintritt, werden die assoziierten _Handler_, die über die _then_-Methode gequeued wurde, aufgerufen. Ist ein Promise bereits in fullfilled oder rejected und wird erst dann ein entsprechender _Handler_ hinzugefügt, dann wird dieser Handler aufgerufen. Es gibt somit keine _Race Conditions_ zwischen der Ausführung der asynchronen Aktion und dem Hinzufügen des _Handlers_.

Da die Methoden `Promise.prototype.then` und `Promise.prototype.catch` Promises zurückgeben, können sie aneinander gereiht werden (Komposition).

![Promise](https://mdn.mozillademos.org/files/8633/promises.png)

### Anwendung
```typescript
private  delayMs(ms:  number) {
	return  new  Promise <void> ( (res) => {
	setTimeout( () => {
	res();
	}, ms);
	});
}
// new <T>(executor: (resolve: (value?:  T  |  PromiseLike<T>)
// =>  void, reject: (reason?:  any) =>  void) =>  void):  Promise<T>;
```
# Tabelle

### Striped rows

Use `.table-striped` to add zebra-striping to any table row within the `<tbody>`.

### Syntax 
```typescript
<table class="table table-striped">
  ...
</table>
```

### Anwendung
```typescript
<table  class="table table-striped">
<thead>
<tr>
<th  scope="col">#</th>
<th  scope="col">Datum</th>
<th  scope="col">Zeit</th>
<th  scope="col">Temperatur</th>
<th  scope="col">Feuchtigkeit/%</th>
</tr>
</thead>
<tbody>
<tr>
<th  scope="row">1</th>
<td>4.3.2019</td>
<td>18:54:00</td>
<td>21.3</td>
<td>52</td>
</tr>
</tbody>
</table>
```
# Button

Verschiedenste Arten von Button auf:

[Button Bootstrap](http://holdirbootstrap.de/css/#buttons)

### Anwendung


```typescript
<button  type="button"  class="btn btn-primary"(click) = "onClick()"  [disabled] ="isBusy">
<span  *ngIf = "isBusy"  class="spinner-border spinner-border-sm"  role="status"  aria-hidden="true"></span>
<span  class="sr-only">Loading...</span>
Zurücksetzen
</button>
```
# Temperaturwert
Für den Minimal- und den Maximaltemperaturwert werden Anzeigefelder benötigt. Dies wurde folgendemaßen ausprogrammiert:

### Anwendung
```typescript
<div  class="form-group">
<label  for="inputMin">Minimalwert</label>
<input  type="text"  class="form-control"  id="Inputmin"  value ="{{tempMin}}"  readonly>
<small  id="minHelp"  class="form-text text-muted">Kleinster Temperaturwert</small>
</div>
<div  class="form-group">
<label  for="inputMAx">Maximalwert</label>
<input  type="text"  class="form-control"  id="InputMax"  value ="{{tempMin}}"  readonly>
<small  id="maxHelp"  class="form-text text-muted">Größter Temperaturwert</small>
</div>
```

# Clock 

### Intervall
We may decide to execute a function not right now, but at a certain time later. That’s called “scheduling a call”.

There are two methods for it:

-   `setTimeout` allows us to run a function once after the interval of time.
-   `setInterval` allows us to run a function repeatedly, starting after the interval of time, then repeating continuously at that interval.

These methods are not a part of JavaScript specification. But most environments have the internal scheduler and provide these methods. In particular, they are supported in all browsers and Node.js.

### Anwendung
```typescript
export  class  ClockComponent  implements  OnInit, OnDestroy {
public  time  =  '?';
private  timeHandle:  any;
public  constructor() { }
	public  ngOnInit() {
	this.refreshTime();
	this.timeHandle  =  setInterval(() =>  this.refreshTime(), 200);
}
public  ngOnDestroy() {
	if (this.timeHandle) {
	clearInerval(this.timeHandle);
}
this.timeHandle  =  null;
}
private  refreshTime() {
	const  now  =  new  Date();
	const  h  =  now.getHours();
	const  min  =  now.getMinutes();
	const  sec  =  now.getSeconds();
	this.time  =  sprintf('%02d:%02d:%02d', h, min, sec);
}
}
```


# Theorie


### Architecture Overview

Angular ist ein Framework zum Erstellen von Clientanwendungen in HTML und entweder JavaScript oder einer Sprache wie TypeScript, die mit JavaScript kompiliert wird.

Das Framework besteht aus mehreren Bibliotheken, von denen einige Core- und andere optional sind.

Sie schreiben Angular-Anwendungen, indem Sie HTML-Vorlagen mit angularisiertem Markup erstellen, Komponentenklassen zum Verwalten dieser Vorlagen schreiben, Anwendungslogik in Diensten hinzufügen und Komponenten und Dienste in Modulen packen.

Anschließend starten Sie die App, indem Sie das Root-Modul booten. Angular übernimmt, präsentiert Ihren Anwendungsinhalt in einem Browser und reagiert auf Benutzerverkehr.

Natürlich steckt noch mehr dahinter. Die Details erfahren Sie auf den folgenden Seiten. Konzentrieren Sie sich vorerst auf das Gesamtbild.

![Architecture](https://v2.angular.io/resources/images/devguide/architecture/overview2.png)

### aria describedby 

Das Attribut ` aria-descriptionbya` gibt die IDs der Elemente an, die das Objekt beschreiben. Es wird verwendet, um eine Beziehung zwischen Widgets oder Gruppen und dem beschriebenen Text herzustellen. Dies ist sehr ähnlich zu ` aria-labelledby:`  Eine Bezeichnung, die das Wesentliche eines Objekts beschreibt, während eine Beschreibung weitere Informationen enthält, die der Benutzer möglicherweise benötigt.

Das Attribut ` aria-descriptionby ` wird nicht nur für Formularelemente verwendet. Es wird auch verwendet, um statischen Text Widgets, Elementgruppen, Bereichen, Bereichen mit Überschriften, Definitionen und vielem mehr zuzuordnen. Der folgende Abschnitt mit Beispielen enthält weitere Informationen zur Verwendung der Attribute in diesen Fällen.

Dieses Attribut kann mit jedem typischen HTML-Formularelement verwendet werden. Es ist nicht auf Elemente beschränkt, die der ARIA-Rolle zugewiesen wurden.


### 	asynchron
Das Wort "asynchron" vor einer Funktion bedeutet eine einfache Sache: Eine Funktion gibt immer ein Versprechen zurück. Andere Werte werden automatisch in ein gelöstes Versprechen eingeschlossen.

Diese Funktion liefert zum Beispiel das Ergebnis 1:
```javascript
async function f() {
  return 1;
}
f().then(alert); // 1
```
### await

Das Schlüsselwort wait bewirkt, dass JavaScript wartet, bis dieses Versprechen erfüllt ist und das Ergebnis zurückgegeben wird.

Hier ist ein Beispiel mit einem Versprechen, das in 1 Sekunde aufgelöst wird:
```javascript
async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
  });

  let result = await promise; // wait until the promise resolves (*)

  alert(result); // "done!"
}

f();
```


### submit

Die Methode **submit()** sendet ein Formular ab und hat die gleiche Wirkung wie ein Button der in HTML mit `type="submit"` definiert wurde.

