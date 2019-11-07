import { Injectable } from '@angular/core';
import { Book } from '../data/book';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    private list: Book[] = [];

    public constructor () {
        this.list.push(new Book('Mörder Ahoi', 'Agather Chrisite', 300, true));
        this.list.push(new Book('Der Herr der Ringe', 'J.R.R. Tolkin', 600, true));
        this.list.push(new Book('Dune', 'Typ 2', 800, true));
    }

    public getBookList (): Promise<Book[]> {

        return new Promise<Book[]>( (resolve, reject) => {
            try {
            console.log('Promisse started');
            // ...
            // ...
            // ...
            setTimeout( () => {
                console.log('Promise workes');
                const result: Book[] = this.list;
                resolve(result);
            }, 5000);
            console.log('Promisse ended');
            } catch (err) {
                reject(err);
            }
        });


        // return this.list;
    }

    private doInBackground () {

    }

    public add (book: Book) {
        this.list.push(book);
    }
    public clear () {
        throw new Error('Methode not implimented');
    }
}
