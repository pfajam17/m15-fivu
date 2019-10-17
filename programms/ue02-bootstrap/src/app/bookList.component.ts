import { Component } from '@angular/core';
import { Book } from './data/book';

@Component({
    selector: 'app-booklist',
    templateUrl: './booklist.component.html',
})
export class BookListComponent {

    private list: Book[] = [];

    public constructor () {
        this.list.push(new Book('Mörder Ahoi', 'Agather Chrisite', 300, true));
        this.list.push(new Book('Der Herr der Ringe', 'J.R.R. Tolkin', 600, true));
        this.list.push(new Book('Dune', 'Typ 2', 800, true));
    }
}
