import { Injectable } from '@angular/core';
import { Buch } from '../data/buch';
import { resolve } from 'q';

@Injectable({
    providedIn: 'root',
})

export class DataService {

    public static async delay (millisecounds: number) {
        return new Promise<void>( (res) => {
            setTimeout( () => {
                res();
            }, millisecounds);
        });
    }

    // ****************************************************************************************************************

    public list: Buch[] = [];

    public constructor () {
        this.list.push(new Buch('Verurteilt', 'Rushdie', 200, false));
        this.list.push(new Buch('Mörder Ahoi', 'Agathe Christie', 300, false));
        this.list.push(new Buch('Leaders eats lats', 'Simon Sanek', 500, true));
    }

    public async getBuchListe (): Promise<Buch []> {
        await DataService.delay(5000);
        return this.list;
    }

    public getBuchListeOld (): Promise<Buch[]> {
        // return new Promise<Buch []>(
        //  (resolved, reject) => this.getBuchListeDoInBackground() );
        // }

        // tslint:disable-next-line:no-shadowed-variable
        return new Promise<Buch[]>((resolve, reject) => {
            try {
                console.log('Promise gestartet...');
                // ...
                // ..
                // .
                // setInterval();
                setTimeout(() => {
                    const result: Buch[] = this.list;
                    resolve(result);
                    console.log('Promise beendet...');
                }, 5000);
            } catch (err) {
                reject(err);
            }
        });


        // return new Promise<Buch []>( this.getBuchListeDoInBackground);
    }

    public add (buch: Buch) {
        this.list.push(buch);
    }

    clear () {
        throw new Error('Method not implemented.');
    }

    private getBuchListeDoInBackground () {

    }
}
