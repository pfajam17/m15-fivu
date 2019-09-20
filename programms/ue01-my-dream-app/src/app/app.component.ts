import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public myWelcome = 'Hello';
  private cnt = 0;

  public constructor() {
    this.myWelcome = 'Hello2';

    setInterval( () => {
      this.cnt++;
      this.myWelcome = 'Hello ' + this.cnt;
    }, 1000);

  }
}
