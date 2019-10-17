# Protokoll FIVU/kormam15 5AHME (2019/20)

* **Thema:** Java Script
* **Datum:** 10.10.2019
* **Gefehlt:** -
* **Erstellt von:** Korrenn Marwin
* **Protokoll 4.Einheit:** [protokoll_2019-10-03_hoestm15.md](protokoll_2019-10-03_hoestm15.md)
* **Protokoll 6.Einheit:** [Virus](https://virus.com/)

----------------------------------------------------------------------------------------------

## Inhaltsverzeichnis

1. [Java Script](#javascript)
    1. [Was ist anders als in Java](#was-ist-anders-als-in-java)
    1. [Primitive Datentypen](#primitive-datentypen)
        1. [number](#number)
        1. [string](#string)
        1. [boolean](#boolean)
        1. [null](#null)
        1. [undefined](#undefined)
    1. [Objekte erzeugen](#objekte-erzeugen)
    1. [Vererbung](#vererbung)
        1. [Prototypische Vererbung](#prototypische-vererbung)
        1. [Pseudoklassische Vererbung](#pseudoklassische-vererbung)
    1. [Datenkapselung](#datenkapselung)
    1. [Multithreading](#multithreading)
2. [Programm](#programm)  

----------------------------------------------------------------------------------------------

## JavaScript  
> JavaScript (kurz JS) ist eine Skriptsprache, die ursprünglich 1995 von Netscape für dynamisches HTML in Webbrowsern entwickelt wurde, um Benutzerinteraktionen auszuwerten, Inhalte zu verändern, nachzuladen oder zu generieren und so die Möglichkeiten von HTML und CSS zu erweitern. Heute findet JavaScript auch außerhalb von Browsern Anwendung, so etwa auf Servern und in Microcontrollern.  
Der als ECMAScript (ECMA 262) standardisierte Sprachkern von JavaScript beschreibt eine dynamisch typisierte, objektorientierte, aber klassenlose Skriptsprache. Sie wird allen objektorientierten Programmierparadigmen unter anderem auf der Basis von Prototypen gerecht, deren Deklaration ab ECMAScript 6 mit einer Syntax ermöglicht wird, wie sie ähnlich auch bei klassenbasierten Programmiersprachen üblich ist. In JavaScript lässt sich je nach Bedarf objektorientiert, prozedural oder funktional programmieren.   
Quelle: [Wikipedia](https://de.wikipedia.org/wiki/JavaScript)  
  
**Mit JavaScript kann man:**  
- Server-seitige Programm schreiben die auf einem Web-Server laufen  
- Client-seitige Programme schreiben die auf einem Web-CLient laufen  
- Programme schreiben die mit Hilfe einer JavaScript-Engine ausgeführt werden  

### Was ist anders als in Java?  
> "Java:JavaScript = car:carpet" Aussage Steiner Manfred 10.10.2019  
  
Die wesentlichen Unterschiede werden anhand dieser Tabelle näher gebracht:  

| Java | JavaScript |  
|:----------------------------------------------:|:----------:|  
| statically strong typed language variables cannot change their type at runtime | dynamially weak typed language variables can change their type at runtime |    
| class based | protoype based |  
| 8 primitive data-types boolean, byte, short, int, long, float, double | 6 primitive data types boolean, number, string, null, undefined, object |  
| methods are tied to its class | functions are objects |  
| constructors are special functions that can only be called for object creation | constructors are just standard functions |  
| all non-block statements must end with a semicolon | inserts semicolons at the ends of certain lines |  
| block-based scoping | function-based scoping |  
| implicit this scope for non-static methods and implicit class scope | implicit global scope |  
| Since Java 8 Lambda Expressions for support of functional programming paradigma | supports functional programming paradigma supports closures, partial application |  
| functions are only variadic if explicitly marked | all functions are variadic |  
| classes cannot be redefined in a way that affects any existing object instances | prototypes can be redefined at runtime and has immediate effect for all referring objects |  
| methods cannot be redefined at runtime | methods in an object can be redefined independently of its prototype |  

Eine wunderbare Zusammenfassung finden wir [hier](https://www.htl-mechatronik.at/e-books/sx/html/javascript/javascript.html#(1))  

### Primitive Datentypen  
Der Typ einer Variable wird nicht angegeben, sondern ergibt sich über dessen Wert automatisch. Er lässt sich mit dem Schlüsselwort **typeof** bestimmen.  

Variablen können ohne Schlüsselwort (nicht empfehlenswert) oder mit den Schlüsselwörtern  
**var** (es ist egal wann die Variable deklariert wird solang sie deklariert wird)  
und  
**let** (wie in C oder Java muss zuerst die Variable deklariert und dann mit ihr gearbeitet werden)  
erzeugt werden.  

#### number  
Jede number wird als 64-Bit Fließkommazahl gespeichert, und es gibt daher keine Unterscheidung zwischen float / double / byte / short / int / long und char.  

#### string  
Zeichenketten können mit einfachen oder doppelten Hochkommas umschlossen werden, wobei häufig das einfache Hochkomma verwendet wird.  
Die jeweils andere Art wird dann als normales Zeichen interpretiert.  

#### boolean  
Variable dieses Typs können die Werte true und false annehmen.  

#### null  
Der Typ null hat nur den einzigen Wert null.  
Er wird verwendet bei Variablen die normalerweise den Typ object haben, aber kein gültiges Objekt aufweisen.  

#### undefined  
Der Typ undefined hat nur den einzigen Wert undefined.  
Er wird verwendet bei:  
- globalen Variablen die nicht initialisiert sind  
- nicht existenten Objekteigenschaften  
- nicht vorhandenen Funktionsparametern  
- Funktionsrückgaben von Funktionen die keinen Wert zurück liefern  
  
Mit dem Schlüsselwort delete kann eine Variable wieder zu undefined werden.  

#### object  
Für Objekte werden keine Klassen benötigt.  
Funktionen in Objekten werden Objektmethoden genannt.  
Auch Arrays und Funktionen sind Objekte und können in Variablen gespeichert werden, als Parameter übergeben oder von Funktionen zurückgegeben werden.  

### Objekte erzeugen  
Man kann Objekte auf 3 verschiedenen Arten erstellen:  
**Literalschreibweise:** mit dieser Schreibweise kann es dieses Objekt nur einmal geben (es ist somit ein sogenanntes **Singelton**)  
Bsp.:  
```typescript
var book = {
  name : 'Javascript',                      // primitive data-type string
  author: {                                 // object
    firstname : 'Philip',         
    surname : 'Ackermann'
  },
  getAuthor : function() {                  // function
    return this.author.firstname + " " + this.author.surname;
  }
};
```
**Konstruktorfunktion:**   
Wie in Java lassen sich Objekte mit dem Schlüsselwort new und der Angabe des Konstruktors erzeugen.  
Bsp.:  
```typescript
var author1 = new Author("Philip", "Ackermann");
```
**Object.create():** Seit ECMAScript 5 können Objekte mit Hilfe der Funktion Object.create() erzeugt werden. Als Parameter wird der Prototyp des zu erstellenden Objekts verwendet.  
Bsp.:  
```typescript
var author = Object.create(Object.prototype);
author.firstname = 'Karl';
author.lastname = 'Schneider';
```

### Vererbung  
Für die Vererbung von Objekten stehen zwei Prinzipien zur Auswahl, da wir die Java ähnliche benutzen gehe ich nicht näher darauf ein:

#### Prototypische Vererbung  
Hier werden Objekte mit Object.create(...) erzeugt, und der Prototyp (das Eltern-Objekt) wird als Parameter übergeben.  

#### Pseudoklassische Vererbung  
Hier erfolgt die Vererbung mit Hilfe von Konstruktorfunktionen. Im Konstruktor wird der Konstruktor des Elternobjekts mittel call(...) aufgerufen.
Ab ECS6 stehen syntaktisch als Alternative auch die Schlüsselwörter class , extends und super zur Verfügung.  

### Datenkapselung  
Was das Schlüsselwörtchen *private* in Java elegant löst muss in JavaScript umständlichst gelöst werden:  
```typescript
function Bauteil(value, voltage, current)
{
  var value = value;
  var voltage = voltage;
  var current = current;
  this.getValue = function() { return value; };
  this.getVoltage = function() { return voltage; };
  this.getCurrent = function() { return current; };
}

Bauteil.prototype.getPower = function() { return this.getVoltage() * this.getCurrent(); };
Bauteil.prototype.getEnergy = function() { return undefined; };

function Widerstand(value, voltage) {
  if (!(this instanceof Widerstand)) {
    return new Widerstand(value, voltage);
  }
  Bauteil.call(this, value, voltage, voltage/value);
  this.getEnergy = function() { return 0; };

}

Widerstand.prototype = new Bauteil();
Widerstand.prototype.constructor = Widerstand;

var r1 = new Widerstand(1000, 10, 0.1);

console.log(r1.getValue());
console.log(r1.getPower());
console.log(r1.getEnergy());
```  

Als alternative gibt es noch eine Möglichkeit mit *IIFE*.  
```typescript
var Bauteil = (

  // äußere Funktion, sie liefert eine innere Funktion zurück
  function() {
    var _value;
    var _voltage;
    var _current;
  
    // innere Funktion kann Variable der äußeren Funktion initialisieren
    function Bauteil(value, voltage, current) {
      _value = value;
      _voltage = voltage;
      _current = current;
    }
  
    Bauteil.prototype.getValue = function() { return _value; };
    Bauteil.prototype.getVoltage = function() { return _voltage; };
    Bauteil.prototype.getCurrent = function() { return _current; };
    Bauteil.prototype.getPower = function() { return _voltage * _current; };
    Bauteil.prototype.getEnergy = function() { return undefined; };  

    return Bauteil;
  }
)(); // die abschließenden () realisieren die IIFE


function Widerstand(value, voltage) {
  if (!(this instanceof Widerstand)) {
    return new Widerstand(value, voltage);
  }
  Bauteil.call(this, value, voltage, voltage/value);
}

Widerstand.prototype = new Bauteil();
Widerstand.prototype.constructor = Widerstand;
Widerstand.prototype.getEnergy = function() { return 0; };
Widerstand.prototype.getValue = function() {
  return Bauteil.prototype.getValue.call(this) + " \u2126";
};

var r1 = new Widerstand(1000, 10, 0.1);

console.log(r1.getValue());
console.log(r1.getPower());
console.log(r1.getEnergy());

```
### Multithreading
Javascript ist als Single-Thread Sprache entworfen worden. Dadurch entfallen Probleme der Thread-Synchronisierung und mögliche Deadlocks durch sich gegenseitig blockierende Threads.  

## Programm  
Um die Basics von Java Script zu benutzen und uns ein bischen "ein-zu-programmieren" haben wir eine einache Datenerhaltungsklasse geschrieben: 
```typescript
class Buch {
    private author: string;
    private seitenanzahl: number;
    private verliehen: boolean;

    public constructor (author: string, seitenanzahl: number, verliehen: boolean) {
        if (!author || seitenanzahl < 1 || (verliehen !== true && verliehen !== false)) {
            throw new Error('invalid argument');
        }
        this.author = author;
        this.seitenanzahl = seitenanzahl;
        this.verliehen = verliehen;
    }
    public getAuthor(): string {
        return this.author;
    }

    public getSeitenanzahl(): number {
        return this.seitenanzahl;
    }

    public getVerliehen(): boolean {
        return this.verliehen;
    }
}
```
