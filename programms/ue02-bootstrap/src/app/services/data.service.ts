import { Injectable } from '@angular/core';
import { Book } from '../data/book';
import { MissingTranslationStrategy } from '@angular/compiler/src/core';

@Injectable({
    providedIn: 'root',
})
export class DataService {

    public static async delay (milliSeconds: number) {
        return new Promise<void>( (res) => {
            setTimeout( () => {
                res();
            }, milliSeconds);
        });
    }

    private list: Book[] = [];

    public constructor () {
        this.list.push(new Book('Mörder Ahoi', 'Agather Chrisite', 300, true));
        this.list.push(new Book('Der Herr der Ringe', 'J.R.R. Tolkin', 600, true));
        this.list.push(new Book('Dune', 'Typ 2', 800, true));
    }

    public getBookListOld (): Promise<Book[]> {

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

    public async getBookList (): Promise<Book []> {
        await DataService.delay(5000);
        return this.list;
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
