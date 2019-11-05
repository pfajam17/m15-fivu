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
    console.log('app.components constructor');

    this.myWelcome = 'Hello2';

    setInterval( () => {
      this.cnt++;
      this.myWelcome = 'Hello ' + this.cnt;
      console.log('cnt=' + this.cnt);
    }, 1000);

  }
  public onButtonClick() {
    this.cnt = 0;
  }
}
