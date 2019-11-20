# FIVU Protokoll 5AHME  


* **Thema:** Asynchrone Programmierung  
* **Datum:** 11.November 2019  
* **Abwesend:** -  


## Inhaltsverzeichnis  




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


