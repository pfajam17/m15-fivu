import { Injectable } from '@angular/core';
import { Buch } from '../data/buch';
import { promise } from 'protractor';
import { resolve } from 'q';
import { setTimeout } from 'timers';

@Injectable({
    providedIn: 'root',
})

export class DataService {
    public list: Buch [] = [];

    public constructor () {
        this.list.push(new Buch('Verurteilt', 'Rushdie', 200, false));
        this.list.push(new Buch('Mörder Ahoi', 'Agathe Christie', 300, false));
        this.list.push(new Buch('Die Gefährten', 'J.R.R Tolkien', 600, false));
    }

    public getBuchListe (): Promise<Buch []> {
        // return new promise<Buch []>( 
        // (resolved, reject) => this.getBuchListeDoInBackground() );

        return new Promise<Buch []>( (resolve, reject) => {
          try { 
            console.log('Promise beendet');

            // setIntervall

            setTimeout( () => {
                const result: Buch [] = this.list;
                resolve(result);
            }, 5000);
          } catch (err) {
              reject(err);
          }
        });
    }

    public add (buch: Buch) {
        this.list.push(buch);
    }

    public clear () {
        throw new Error('Method missing');
    }
}