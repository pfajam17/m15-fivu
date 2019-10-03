# Protokoll FIVU/SX 5AHME (2019/20)

* **Thema:** Installation Node.js, Angular, Angular CLI
* **Datum:** 12.9.2019
* **Gefehlt:** Korenn
* **Erstellt von:** sx
* **Protokoll 2. Einheit (19.9.2019)**: 

----------------------------------------------------------------------------------------------

## Inhaltsverzeichnis

1. [Mobile Computing](#mobile-computing)  
2. [Web Apps](#web-apps)
3. [Software und IDE](#software-und-ide)
   1. [Node.js](#node.js)
   2. [Angular](#angular)
   3. [Angular CLI](#angular-cli)
   4. [Visual Studio Code](#visual-studio-code)
4. [Installation](#installation)

----------------------------------------------------------------------------------------------

## Mobile Computing

Quelle: [https://de.wikipedia.org/wiki/Mobile_Computing][Mobile-Computing]

> Mobile Computing ist eine Art der Mensch-Maschine-Interaktion, bei der das verwendete Gerät während des Gebrauchs transportabel ist.   ...

Stellt sich die Frage wie Software auf diesen Geräten (Smartphones, Tabs, ...) realisiert wird, wo doch derzeit verschiedene Systeme in Verwendung sind?

#### Programmierung von Mobile-Apps

Anwendungssoftware für Mobilgeräte sind sogenannte [Mobile-Apps]. Diese Apps werden je nach System programmiert ...

1) **Android:** ... mit Java und als ipk-Datei installiert
2) **iOS:** ... mit der Programmiersprache [Swift] (basierend auf [Objective-C], ...) erstellt.
3) **Windows Phone:** mit C# (einer Java ähnlichen Variante von Microsoft)
4) ...

Drei Nachteile hat diese Lösung:

1) Es muss eine App am Gerät installiert werden
2) Es sollte eine App zumindest für die Plattform Android und iOS verfügbar sein
3) Apps sind erst nach Installation eines Update aktuell

Speziell der Punkt 2) ist mit erheblichem Mehraufwand (Zeit und Kosten) verbunden.

#### Programmierung von Browser Apps

Für viele Anwendungen ist die Realisierung einer Browser-App wesentlich kostengünstiger.

Vorteile:

1) Keine Installation erforderlich, die App wird einfach im Browser aufgerufen
2) App immer aktuell, da sie von einem Server-Host geladen wird
3) Ein Programm ist für alle Systeme geeignet (Multiplattformfähig)

Nachteile:

1) Kein direkter Zugriff auf das Gerät
2) Spezielle Wünsche schwierig zu realisieren
3) Muss für verschiedenen Browser (Firefox, Chrome, Edge, ...) geeignet sein

----------------------------------------------------------------------------------------------

## Web-Apps

Eine **[Web-App]** ist eine [Webanwendung], die von einem Web-Server über das Netzwerk (kann via https://localhost oder https://127.0.0.1 auch das eigene Gerät sein) geladen wird, und in einem Web-Browser ausgeführt wird.

![Datenfluss bei einer Client-Server Webanwendung][img-server-client-webapp]  
*Bildquelle: https://upload.wikimedia.org/wikipedia/de/f/f7/Webanwendung_client_server_01.png*

Diese Programme verwenden Webstandards wie **[HTML5]** und die Programmiersprache **[Javascript]** und können auf beliebigen Endgeräten verwendet werden. Programme werden in der Regel für ein bestimmtes Web-Framework erstellt. Das Web-Framework löst Unterschiede und Fehler, die durch die Verwendung unterschiedlicher Endgeräte und Browser naturgemäß gegeben sind. 

Eine Sonderform sind sogenannte [Hybrid-Apps], bei denen Programme für ein vorgegebenes Framework programmiert werden, im dann im Browser ablaufen, aber der Browser für den Benutzer nicht sichtbar ist.

Mittlerweile gibt es bereits eine große Anzahl von Web-Frameworks (siehe [Wikipedia][List-Web-Frameworks]):

* Angular
* React
* Ruby on Rails
* ASP.NET
* ...

Wobei Begrifflichkeiten schnell durcheinander gebracht werden. So ist zum Beispiel *React* eigentlich eine *frontend library*, während *Angualar* ein *frontend framework* ist. 

Siehe auch:

* [Find your new favorite web framework][framework-ranking]
* [Javascript framework ranking][js-framework-ranking]

----------------------------------------------------------------------------------------------

## Software und IDE

Wir werden im Rahmen von FIVU Web-Apps auf Basis **Angular** und Web-Server auf Basis **Node.js** erstellen. Als Hilfsmittel verwenden wir *Angular CLI*, als IDE *Visual Studio Code* (oder kurze *code*) und als Web-Browser für Debugging und Test Googles *Chromium*.

### Node.js

Web-Seite von Node.js: [https://nodejs.org][nodejs]

Aus [Wikipedia][wiki-node-js]:  
>Node.js ist eine serverseitige Plattform in der Softwareentwicklung zum Betrieb von Netzwerkanwendungen. Insbesondere lassen sich Webserver damit realisieren. Node.js wird in der JavaScript-Laufzeitumgebung „V8“ ausgeführt, die ursprünglich für Google Chrome entwickelt wurde, und bietet eine ressourcensparende Architektur, die eine besonders große Anzahl gleichzeitig bestehender Netzwerkverbindungen ermöglicht.

Node.js ermöglicht daher die Ausführung von Javascript Programmen auf einem Rechner.

Node.js ist Freeware und Open Source und steht unter der MIT Lizenz. Node.js wird auch von *Angular CLI* benötigt, mit dessen Hilfe Angular Projekte erzeugt und entwickelt werden.

Mit Hilfe des Tools `npm`, dem Paketmanager für Node.js (Backronym für *Node Package Manager*) können externe Module von einem Open Source Repository heruntergeladen und installiert werden. Derzeit (Sept. 2019) sind bereits mehr als 1 Million Module verfügbar.

Versionen: siehe [https://nodejs.org/en/about/releases/][nodejs-releases]  
Wir arbeiten dieses Jahr mit der LTS (Long Term Support) Version 10.x.x.


### Angular

Web-Seite von Angular: [https://angular.io/][angular]

Aus [Wikipedia][wiki-angular]:  
>Angular (zur Abgrenzung vom Vorgänger AngularJS (Version 1.x)) auch „Angular 2+“ ist ein TypeScript-basiertes Front-End-Webapplikationsframework. Es wird von einer Community aus Einzelpersonen und Unternehmen, angeführt durch Google, entwickelt und als Open-Source-Software publiziert.

Angular ermöglicht die Erstellung von Web-Applikationen, die dann zum Beispiel im Web-Browser auf jedem Endgerät verwendet werden können.

Angular ist Freeware und Open Source und steht unter der MIT Lizenz. Die Sprache **[Typescript][wiki-Typescript]** ist eine von Microsoft entwickelte Sprache mit der die Sprache Javascript mit Typen ergänzt wird.

### Angular CLI

Web-Seite von Angular CLI: [https://cli.angular.io/][angular-cli]

Angular CLI ist ein *command line interface* für Angular. Mit ihm können Angular Projekt leicht und effizient erstellt und entwickelt werden.

Ist auf einem Ubuntu-Rechner Node.js installiert, so sind nur 4 Kommandos erforderlich um Angular CLI zu installieren, ein neues Projekt zu erstellen und das Projekt zu starten.

```bash
sudo npm install -g @angular/cli
ng new my-dream-app
cd my-dream-app
ng serve

```

### Visual Studio Code

Web-Seite von Visual Studio Code: [https://code.visualstudio.com/][vscode]

**Visual Studio Code** (kurz *VSCode* oder *code*) ist eine Entwicklungsumgebung (IDE) für Javascript/Typescript Programme.

Visual Studio Code ist Freeware und steht eigentlich unter der Open Source Lizenz MIT, allerdings enthalten die Binaries Microsoft-Markenkennzeichen. Daher existiert auch eine komplett auf Open Source basierende Variante *VSCodium*.

Visual Studio Code ist für die drei großen Plattformen Windows, macOS und Linux verfügbar, und lässt sich unter Linux auch über den Paketmanager (*apt*) installieren und aktuell halten.


----------------------------------------------------------------------------------------------

## Installation

Die Installation auf einem Linux/Ubuntu System:

1. **Node.js**  
   Node.js sollte über den Paketmanager installiert werden.  
   Siehe [https://github.com/nodesource/distributions/blob/master/README.md][nodjs-via-apt]
   ```bash
   sudo apt update
   sudo apt install curl
   curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
   sudo apt install nodejs
   ```

   Überprüfung:  
   ```bash
   node --version
   v10.16.3
   ```

   Update des Node.js Paketmanager *npm*:  
   ```bash
   sudo ng -g update npm
   ```

2. **Angular CLI**
   ```bash
   sudo npm install -g @angular/cli
   ```

3. **Erstellen eine Angular Projekts**
   ```bash
   mkdir projects
   cd projects
   ng new u01-first-angular-app
   cd u01-first-angular-app
   ng serve
   ```

   Danach kann Angular App im Web-Browser über den http://localhost:4200 gestartet werden.



[img-server-client-webapp]: images/Webanwendung_client_server_01.png

[Mobile-Computing]: https://de.wikipedia.org/wiki/Mobile_Computing
[Mobile-Apps]: https://de.wikipedia.org/wiki/Mobile_App#Web-Apps
[Swift]: https://de.wikipedia.org/wiki/Swift_(Programmiersprache)
[Objective-C]: https://de.wikipedia.org/wiki/Objective-C
[Webanwendung]: https://de.wikipedia.org/wiki/Webanwendung
[Web-App]: https://de.wikipedia.org/wiki/Mobile_App#Web-Apps
[HTML5]: https://de.wikipedia.org/wiki/HTML5
[Javascript]: https://de.wikipedia.org/wiki/JavaScript
[Hybrid-Apps]: https://de.wikipedia.org/wiki/Mobile_App#Hybrid-Apps
[List-Web-Frameworks]: https://de.wikipedia.org/wiki/Liste_von_Webframeworks
[framework-ranking]: https://hotframeworks.com/
[js-framework-ranking]: https://hotframeworks.com/languages/javascript
[nodejs]: https://nodejs.org
[wiki-node-js]: https://de.wikipedia.org/wiki/Node.js
[nodejs-releases]: https://nodejs.org/en/about/releases/
[angular]: https://angular.io/
[wiki-angular]: https://de.wikipedia.org/wiki/Angular
[wiki-Typescript]: https://de.wikipedia.org/wiki/TypeScript
[angular-cli]: https://cli.angular.io/
[vscode]: https://code.visualstudio.com/
[nodjs-via-apt]: https://github.com/nodesource/distributions/blob/master/README.md
