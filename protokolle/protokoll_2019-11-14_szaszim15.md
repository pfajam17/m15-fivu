# FIVU Protokoll 5AHME  


* **Thema:** Asynchrone Programmierung  
* **Datum:** 11.November 2019  
* **Abwesend:** -  
___

## Inhaltsverzeichnis  
1. [Threads](#Threads)  
  1.[Lösung](#Lösung)  
  2.[Syntax](#Syntax)  
2. [Arbeiten mit Promises](#Arbeiten-mit-Promises)  
  1.[Lösung](#Lösung)  
3. [Programm](#Program)
___


## Threads    
**Bedeutung:** In der Informatik bezeichnet Thread [θɹɛd] (englisch thread, ‚Faden‘, ‚Strang‘) – auch Aktivitätsträger oder leichtgewichtiger Prozess genannt – einen Ausführungsstrang oder eine Ausführungsreihenfolge in der Abarbeitung eines Programms. Ein Thread ist Teil eines Prozesses.[**Quelle**](https://de.wikipedia.org/wiki/Thread_(Informatik))
### Das Problem  

In Javascirpt gibt es leider nur einen Thread, das bedeutet, dass alles sequenziell (also hintereinander) abgearbeitet werden muss. Daraus ergibt sich ein Nachteil und zwar es gibt kein echtes Multithreading.  

### Lösung  
Natürlich hat man eine Lösung gefunden und zwar mit **Promises** --> Das ist ein Versprechen, dass später etwas geliefert wird.  
Dieses Promise kann sich in drei verschiedenen Zuständen befinden.  
- pending: initialer Status, weder fulfilled noch rejected. (dt. schwebend) 
- fulfilled (erfüllt): Operation erfolgreich. 
- rejected (zurück gewiesen): Operation gescheitert.  

#### Syntax:  
```JS  
new Promise<Buch[]>( (resolve, reject) => {
            console.log('Promise gesendet');   
```  

Nach "new promise" kommt eine sogenannte "call back" Funktion. Diese Funktion hat zwei Parameter--> resolve/reject. Die Namen dieser Parameter sind frei wählbar es gelten keinen Vorschriften. Aber meistens werden sie mit "resolve(res) und rejekt(rej) benannt. Den Parameter rejekt ruft man dann auf, wenn es einen Fehler gibt. Am besten gleich mit einem Fehlerojekt (Exception)  
![](https://mdn.mozillademos.org/files/8633/promises.png)  

## Arbeiten mit Promises  
Promise Methoden aufrufen:  
1) 
``` JS  
p.then((n) {  
                
});  
```  
2)  
``` JS  
p.catch((err) => {  
                    // Wenn es einen Error gibt 
});  
```   
Wenn man mit catches arbeitet und man hat mehrere davon wird man sicherlich in die sogenannte "catch Hölle" kommen. Nach 4 bis 5 catches hat man den ganzen Überblick verloren.  

### Lösung  
Dafür gibt es ein neues Design Pattern (async / await Pattern(Schlüsselwörter)). Wenn ich die Methode mit async starte, teile ich mit, das diese Methode mehr Zeit in anspruch nehmen wird und deswwegen gibt sie einen Promise zurück.  


## Programm  

``` JS  
@Injectable({
    providedIn: 'root',

})
export class DataService {
    public static async delay (milliSeconds: number){
        return new Promise<void> ( (res)=> {
            setTimeout( () => {
                res();
            }, milliSeconds);
        });
    }
    //**************************************************************************** */
    
    public list: Buch[] = [];

    public constructor() {
        this.list.push(new Buch('Verurteilt', 'Rushdie', 200, false));
        this.list.push(new Buch('Nöhrer Ahoi', 'Simon', 300, true));
    }
    public async getBuchListe () : Promise<Buch []> {
        await DataService.delay(5000);
        return this.list; 
    }

    

    public getBuchListeOld(): Promise<Buch[]> {
        try {
        return new Promise<Buch[]>( (resolve, reject) => {
            console.log('Promise gesendet');

            // ...
            // ...
            setTimeout(() => {
                console.log('Promise beendet');
                const result: Buch[] = this.list;
                resolve(result);
            }, 5000);
        });
    }catch (err) {
        reject (err);
        }
    }
        // return new Promise<Buxh []>(this.getBuchlisteDoInBackground
    
    public add(buch: Buch) {
        this.list.push(buch);
    }

    public clear() {
        throw new Error('Method not implemented.');
    }

    private getBuchlisteDoInBackground() {

    }
}  
``` 













