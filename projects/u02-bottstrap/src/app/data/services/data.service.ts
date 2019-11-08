
import { Injectable } from '@angular/core';
import { Buch } from '../buch';
import { resolve } from 'url';

@Injectable({
    providedIn: 'root',

})
export class DataService {
    public list: Buch[] = [];

    public constructor() {
        this.list.push(new Buch('Verurteilt', 'Rushdie', 200, false));
        this.list.push(new Buch('Nöhrer Ahoi', 'Simon', 300, true));
    }

    public getBuchListe(): Promise<Buch[]> {
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
        catch (err) {
            
        }
        });
        }
        // return new Promise<Buxh []>(this.getBuchlisteDoInBackground
    }
    public add(buch: Buch) {
        this.list.push(buch);
    }

    public clear() {
        throw new Error('Method not implemented.');
    }

    private getBuchlisteDoInBackground() {

    }
}
