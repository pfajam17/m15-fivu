import { Component } from '@angular/core';
import { Book } from './data/book';
import { DataService } from './services/data.service';
import { reject } from 'q';

@Component({
    selector: 'app-booklist',
    templateUrl: './booklist.component.html',
})
export class BookListComponent {

    public list: Book [] = [];
    private dataService: DataService;

    public constructor (dataService: DataService) {
        this.dataService = dataService;
        dataService.add(new Book('1984', 'Georg Oewell', 700, false));
        const promise: Promise<Book []> = dataService.getBookList();
        promise.then( (liste: Book[]) => {
            this.list = this.list.concat(liste);
        });
        promise.catch( (err) => {
            console.log('Error');
        });
    }

    public clear () {
        this.list = [];
        this.dataService.clear;
    }
}
